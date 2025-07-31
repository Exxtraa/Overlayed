import { useUser, UserButton, RedirectToSignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CanvasEditorKonva from "../components/CanvasEditorKonva";

function Home() {
  const { isSignedIn, user } = useUser();
  const [hasAccess, setHasAccess] = useState(null);
  const [originalFile, setOriginalFile] = useState(null);
  const [cutoutBlob, setCutoutBlob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isSignedIn) return;
  
    const checkAccess = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) return;
  
      try {
        // ✅ FIXED: Use the correct endpoint with GET request
        const res = await axios.get(
          `https://overlayed-backend.onrender.com/api/gumroad/check-access/${user.primaryEmailAddress.emailAddress}`
        );
  
        console.log("Access check response:", res.data);
        setHasAccess(res.data.hasAccess); // ✅ Use hasAccess instead of access
      } catch (err) {
        console.error("Access check failed:", err);
        console.error("Error details:", err.response?.data);
        setHasAccess(false);
      }
    };
  
    checkAccess();
  }, [isSignedIn, user]);
  

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setOriginalFile(file);
    setIsLoading(true);
    setError("");

    try {
      const { removeBackground } = await import("@imgly/background-removal");
      const blob = await removeBackground(file, { model: "medium" });
      setCutoutBlob(blob);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to remove background");
    } finally {
      setIsLoading(false);
    }
  };

  if (hasAccess === null && isSignedIn) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl">🔄 Checking subscription status...</h1>
        </div>
      </div>
    );
  }

  if (hasAccess === false && isSignedIn) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md bg-white text-black px-4 py-3 rounded-4xl border border-black text-lg font-medium">
          <h1 className="text-2xl mb-4">🚫 Access Denied</h1>
          <p>Please purchase to unlock all features.</p>
          
          <p className="mb-3 mt-3 bg-black text-white rounded-3xl">Use common email for payment and register.</p>
          <p style={{ color: "#FF0000" }}>
            I'm just 1 person, I need your support to keep the service running
            and pay for the servers! please purchase credits and continue using
            the service.
          </p>
          
          <Link to="/pricing">
            <button className="mt-6 bg-orange-500 px-4 py-3 rounded-md hover:bg-orange-600">
              Upgrade Now
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-6">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-10">
        <div className="md:text-2xl font-bold text-white">
          <h1 className="text-4xl md:text-sm bg-gray-800 font-bold border rounded-2xl p-1.5">Pro Account</h1>
        </div>

        <div className="flex items-center gap-3">
          {isSignedIn && (
            <>
              <a
                href="https://x.com/Arpitsharma_0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white hover:bg-gray-200 transition"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-black"
                >
                  <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.017-4.49 4.5 0 .353.04.697.116 1.025C7.728 9.36 4.1 7.57 1.67 4.98a4.48 4.48 0 0 0-.61 2.263c0 1.56.79 2.94 2 3.75a4.47 4.47 0 0 1-2.034-.563v.057c0 2.18 1.55 4 3.61 4.42-.377.104-.775.16-1.186.16-.29 0-.567-.027-.84-.08.57 1.77 2.22 3.06 4.18 3.09A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19-.01-.38-.02-.57A9.18 9.18 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.7z" />
                </svg>
              </a>

              <div className="w-10 h-8 ">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-20 h-20",
                    },
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center mt-7">
        <h1 className="text-4xl md:text-4xl font-bold">
          Welcome, {user?.firstName || "User"}!
        </h1>
      </div>

      {/* 🔄 File Upload and Editor */}
      <div className="mt-22 text-white text-center relative min-h-[400px]">
        {!originalFile && !cutoutBlob && (
          <div className="relative w-full max-w-170 mx-auto p-8 border-2 border-dashed border-gray-300 rounded-lg bg-black bg-opacity-10 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center h-64">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                </div>
                <p className="text-lg">Drag and drop an image here</p>
                <p className="text-sm text-gray-400">
                  or click to select a file
                </p>
              </label>
              {error && <p className="mt-4 text-red-500">{error}</p>}
            </div>
          </div>
        )}

        {/* 👇 Image is uploaded and background is being removed */}
        {isLoading && (
          <div className="absolute inset-0 z-40 flex items-center justify-center bg-black bg-opacity-80">
            <p className="text-blue-600 text-lg font-medium">
              ⏳ Let's AI Make the Magic Happen have some patience...
            </p>
          </div>
        )}

        {/* 👇 Show editor only after cutout is ready */}
        {!isLoading && originalFile && cutoutBlob && (
          <CanvasEditorKonva
            originalFile={originalFile}
            cutoutBlob={cutoutBlob}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
