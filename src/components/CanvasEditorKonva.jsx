import React, { useEffect, useState, useRef, useMemo } from "react";
import { Stage, Layer, Image as KonvaImage, Text as KonvaText } from "react-konva";
import useImage from "use-image";
import WebFont from "webfontloader";

const GOOGLE_FONTS = [
  "Inter",
  "Roboto",
  "Archivo",
  "Open Sans",
  "Lato",
  "Oswald",
  "Poppins",
  "Raleway",
  "Work Sans",
  "Playfair Display",
  "Rubik",
  "Montserrat",
  "Merriweather",
  "DM Sans",
  "Bebas Neue"
];

export default function CanvasEditorKonva({ originalFile, cutoutBlob, onDownloadComplete }) {
  const [textObjects, setTextObjects] = useState([]);
  const [activeTextId, setActiveTextId] = useState(null);
  const [bgURL, setBgURL] = useState(null);
  const [cutoutURL, setCutoutURL] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const stageRef = useRef();

  useEffect(() => {
    WebFont.load({
      google: {
        families: GOOGLE_FONTS
      }
    });
  }, []);

  useEffect(() => {
    if (originalFile && cutoutBlob) {
      const bg = URL.createObjectURL(originalFile);
      const cut = URL.createObjectURL(cutoutBlob);
      setBgURL(bg);
      setCutoutURL(cut);

      return () => {
        URL.revokeObjectURL(bg);
        URL.revokeObjectURL(cut);
      };
    }
  }, [originalFile, cutoutBlob]);

  const memoizedBgURL = useMemo(() => bgURL, [bgURL]);
  const memoizedCutoutURL = useMemo(() => cutoutURL, [cutoutURL]);

  const [bgImage] = useImage(memoizedBgURL, "anonymous");
  const [cutoutImage] = useImage(memoizedCutoutURL, "anonymous");

  useEffect(() => {
    if (bgImage && cutoutImage) setImagesLoaded(true);
  }, [bgImage, cutoutImage]);

  const addText = () => {
    const id = Date.now();
    setTextObjects((prev) => [
      ...prev,
      {
        id,
        text: "DREAMS",
        fontSize: 30,
        fill: "#ffffff",
        fontFamily: "Inter",
        x: 80,
        y: 80,
        rotation: 0,
        opacity: 1,
      },
    ]);
    setActiveTextId(id);
  };

  const updateActiveText = (prop, value) => {
    setTextObjects((texts) =>
      texts.map((t) =>
        t.id === activeTextId
          ? {
              ...t,
              [prop]: value,
            }
          : t
      )
    );
  };

  const duplicateText = () => {
    const original = textObjects.find((t) => t.id === activeTextId);
    if (!original) return;
    const id = Date.now();
    setTextObjects((prev) => [
      ...prev,
      {
        ...original,
        id,
        x: original.x + 15,
        y: original.y + 15,
      },
    ]);
    setActiveTextId(id);
  };

  const removeText = () => {
    setTextObjects((texts) => texts.filter((t) => t.id !== activeTextId));
    setActiveTextId(null);
  };

  const resetText = () => {
    setTextObjects((texts) =>
      texts.map((t) =>
        t.id === activeTextId
          ? {
              ...t,
              x: 80,
              y: 80,
              rotation: 0,
              fontSize: 30,
              opacity: 1,
            }
          : t
      )
    );
  };

  const containerWidth = 800;

  const imageDims = useMemo(() => {
    if (!bgImage) return { width: 0, height: 0, aspectRatio: 1 };
    const ar = bgImage.width / bgImage.height;
    const width = containerWidth * 0.85;
    return {
      width,
      height: width / ar,
      aspectRatio: ar,
    };
  }, [bgImage]);

  const imageWidth = imageDims.width;
  const imageHeight = imageDims.height;

  const downloadImage = () => {
    if (!bgImage) return;
    const downloadWidth = bgImage.width;
    const downloadHeight = bgImage.height;
    const tempStage = stageRef.current.getStage().clone({
      width: downloadWidth,
      height: downloadHeight,
    });
    const scaleX = downloadWidth / imageWidth;
    const scaleY = downloadHeight / imageHeight;
    tempStage.find("Image").forEach((image) => {
      image.width(image.width() * scaleX);
      image.height(image.height() * scaleY);
      image.x((image.x() - containerWidth * 0.075) * scaleX);
      image.y((image.y() - 40) * scaleY);
    });
    tempStage.find("Text").forEach((text) => {
      text.x((text.x() - containerWidth * 0.075) * scaleX);
      text.y((text.y() - 40) * scaleY);
      text.fontSize(text.fontSize() * scaleX);
    });
    const uri = tempStage.toDataURL({ pixelRatio: 2 });
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = uri;
    link.click();

    if (onDownloadComplete) {
      onDownloadComplete();
    }
  };

  const constrainTextPosition = (e) => {
    const text = e.target;
    const textWidth = text.width();
    const textHeight = text.height();
    let newX = text.x();
    let newY = text.y();
    newX = Math.max(containerWidth * 0.075, Math.min(newX, containerWidth * 0.075 + imageWidth - textWidth));
    newY = Math.max(40, Math.min(newY, 40 + imageHeight - textHeight));
    updateActiveText("x", newX);
    updateActiveText("y", newY);
  };

  const activeText = textObjects.find((t) => t.id === activeTextId);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 min-h-screen items-start justify-center">
      <div className="w-full md:w-[800px] rounded-lg overflow-hidden shadow-lg">
        {imagesLoaded && (
          <Stage width={containerWidth} height={imageHeight + 80} ref={stageRef} style={{ backgroundColor: "#1f2937" }}>
            <Layer>
              {bgImage && (
                <KonvaImage
                  image={bgImage}
                  x={containerWidth * 0.075}
                  y={40}
                  width={imageWidth}
                  height={imageHeight}
                />
              )}
              {textObjects.map((t) => (
                <KonvaText
                  key={t.id}
                  text={t.text}
                  x={t.x}
                  y={t.y}
                  fontSize={t.fontSize}
                  fontFamily={t.fontFamily}
                  fill={t.fill}
                  rotation={t.rotation}
                  opacity={t.opacity}
                  draggable
                  onClick={() => setActiveTextId(t.id)}
                  onDragEnd={constrainTextPosition}
                />
              ))}
              {cutoutImage && (
                <KonvaImage
                  image={cutoutImage}
                  x={containerWidth * 0.075}
                  y={40}
                  width={imageWidth}
                  height={imageHeight}
                />
              )}
            </Layer>
          </Stage>
        )}
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-64 bg-gray-800 p-4 rounded-lg shadow-lg text-white text-xs space-y-3">
        <button
          onClick={addText}
          className="w-full py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md active:scale-95 text-sm"
        >
          Add Text
        </button>

        {activeText && (
          <div className="space-y-3">
            <div>
              <label className="block text-gray-300 text-[10px] font-medium mb-1">Text</label>
              <input
                type="text"
                value={activeText.text}
                onChange={(e) => updateActiveText("text", e.target.value)}
                className="w-full px-2 py-1.5 bg-gray-700 border border-gray-600 rounded-md text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-[10px] font-medium mb-1">Font Size</label>
              <input
                type="number"
                value={activeText.fontSize}
                onChange={(e) => updateActiveText("fontSize", Number(e.target.value))}
                className="w-full px-2 py-1.5 bg-gray-700 border border-gray-600 rounded-md text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-[10px] font-medium mb-1">Font Family</label>
              <select
                value={activeText.fontFamily}
                onChange={(e) => updateActiveText("fontFamily", e.target.value)}
                className="w-full px-2 py-1.5 bg-gray-700 border border-gray-600 rounded-md text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200"
              >
                {GOOGLE_FONTS.map((font) => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-[10px] font-medium mb-1">Color</label>
              <input
                type="color"
                value={activeText.fill}
                onChange={(e) => updateActiveText("fill", e.target.value)}
                className="w-full h-8 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-[10px] font-medium mb-1">Opacity</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={activeText.opacity}
                onChange={(e) => updateActiveText("opacity", Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-[10px] font-medium mb-1">X Position</label>
              <input
                type="range"
                min={containerWidth * 0.075}
                max={containerWidth * 0.075 + imageWidth}
                value={activeText.x}
                onChange={(e) => updateActiveText("x", Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-[10px] font-medium mb-1">Y Position</label>
              <input
                type="range"
                min={40}
                max={40 + imageHeight}
                value={activeText.y}
                onChange={(e) => updateActiveText("y", Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-gray-300 text-[10px] font-medium mb-1">Rotation</label>
                <button
                  onClick={resetText}
                  className="py-1 px-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md text-xs transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md active:scale-95"
                >
                  ↺
                </button>
              </div>
              <input
                type="range"
                min="-180"
                max="180"
                step="1"
                value={activeText.rotation}
                onChange={(e) => updateActiveText("rotation", Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={duplicateText}
                className="flex-1 py-1.5 px-3 bg-gray-600 hover:bg-gray-500 text-white rounded-md text-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md active:scale-95"
              >
                Duplicate
              </button>
              <button
                onClick={removeText}
                className="flex-1 py-1.5 px-3 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md active:scale-95"
              >
                Remove
              </button>
            </div>
          </div>
        )}

        <button
          onClick={downloadImage}
          className="w-full py-1.5 px-3 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md active:scale-95"
        >
          Download Image
        </button>
      </div>
    </div>
  );
}
