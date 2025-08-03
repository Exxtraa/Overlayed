import "./App.css";
import { SignUpButton, SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/home");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="min-h-screen bg-black text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6">
        <div className="text-base sm:text-xl md:text-1xl font-bold ml-14 text-white relative">
          OVERLAYED
        </div>
        <div className="flex items-center space-x-2 sm:space-x-5">
          <Link
            to="/pricing"
            className="bg-white text-black px-2 sm:px-4 py-1.5 sm:py-2 rounded-md border border-black hover:bg-gray-200 text-xs sm:text-sm font-medium whitespace-nowrap"
          >
            5 Credits Free
          </Link>

          {/* Modal login/signup */}
          <SignUpButton mode="modal">
            <button className="bg-white text-black px-2 sm:px-4 py-1.5 sm:py-2 rounded-md border border-black hover:bg-gray-200 text-xs sm:text-sm font-medium whitespace-nowrap">
              Create Account
            </button>
          </SignUpButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-12 sm:py-20 md:py-26 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
          Insert Text Behind Images with{" "}
          <span className="text-orange-500 relative inline-block group cursor-pointer">
            AI
            {/* Animated dots behind AI text */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="absolute top-2 left-1 w-1 h-1 bg-orange-300 rounded-full animate-pulse animation-delay-0"></span>
              <span className="absolute top-1 right-2 w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce animation-delay-100"></span>
              <span className="absolute bottom-3 left-3 w-1 h-1 bg-white rounded-full animate-ping animation-delay-200"></span>
              <span className="absolute bottom-1 right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse animation-delay-300"></span>
              <span className="absolute top-4 left-6 w-1 h-1 bg-orange-200 rounded-full animate-bounce animation-delay-400"></span>
              <span className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-white rounded-full animate-ping animation-delay-500"></span>
              <span className="absolute top-0 right-6 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-600"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 bg-orange-500 rounded-full animate-bounce animation-delay-700"></span>
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-orange-900 rounded-full"></div>
          </span>
        </h1>
        <p className="mt-5 text-gray-400 text-xs sm:text-sm border border-gray-600 px-4 sm:px-8 py-2 rounded-md inline-block max-w-sm sm:max-w-none mx-auto">
          Generate stunning YouTube thumbnails and content visuals that get
          noticed.
        </p>
      </section>

      {/* Image Grid */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20 bg-black">
        {/* Mobile: 2x2 Stacked Grid */}
        <div className="block sm:hidden">
          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {[
              {
                src: "https://i.pinimg.com/736x/62/9b/8d/629b8dcc56851c15833a4097e455e1a7.jpg",
                ratio: "portrait",
                span: "row-span-2",
              },
              {
                src: "https://i.pinimg.com/736x/63/ab/63/63ab63046eb81db88bd39983e88c4fbf.jpg",
                ratio: "portrait",
                span: "row-span-2",
              },
              {
                src: "https://i.pinimg.com/736x/70/ad/c9/70adc975516b9303a09c6e6c6a2074ea.jpg",
                ratio: "landscape",
                span: "row-span-1",
              },
              {
                src: "https://i.pinimg.com/736x/5c/a6/50/5ca65015edf3b5469b8b8cbb32a968e8.jpg",
                ratio: "landscape",
                span: "row-span-1",
              },
              {
                src: "https://i.pinimg.com/736x/da/3a/19/da3a192fa5a3a3c46f51dd66900de667.jpg",
                ratio: "landscape",
                span: "row-span-1",
              },
              {
                src: "https://i.pinimg.com/736x/16/3b/55/163b5558b39fdb64146fd26a41806b74.jpg",
                ratio: "landscape",
                span: "row-span-1",
              },
            ].map((img, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden rounded-lg group relative bg-black"
              >
                <img
                  src={img.src}
                  alt={`Preview ${idx + 1}`}
                  className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105 animate-fade-in block"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet: Original Grid layout */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap- max-w-7xl mx-auto auto-rows-[250px] md:auto-rows-[300px]">
          {[
            {
              src: "https://i.pinimg.com/736x/62/9b/8d/629b8dcc56851c15833a4097e455e1a7.jpg",
              ratio: "portrait",
              span: "row-span-2",
            },
            {
              src: "https://i.pinimg.com/736x/63/ab/63/63ab63046eb81db88bd39983e88c4fbf.jpg",
              ratio: "portrait",
              span: "row-span-2",
            },
            {
              src: "https://i.pinimg.com/736x/70/ad/c9/70adc975516b9303a09c6e6c6a2074ea.jpg",
              ratio: "landscape",
              span: "row-span-1",
            },
            {
              src: "https://i.pinimg.com/736x/5c/a6/50/5ca65015edf3b5469b8b8cbb32a968e8.jpg",
              ratio: "landscape",
              span: "row-span-1",
            },
            {
              src: "https://i.pinimg.com/736x/da/3a/19/da3a192fa5a3a3c46f51dd66900de667.jpg",
              ratio: "landscape",
              span: "row-span-1",
            },
            {
              src: "https://i.pinimg.com/736x/16/3b/55/163b5558b39fdb64146fd26a41806b74.jpg",
              ratio: "landscape",
              span: "row-span-1",
            },
            {
              src: "https://i.pinimg.com/1200x/e7/af/e3/e7afe3f60c1ff1bfa751290346e1f030.jpg",
              ratio: "landscape",
              span: "row-span-1",
            },
          ].map((img, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-xl group relative bg-black ${img.span}`}
            >
              <img
                src={img.src}
                alt={`Preview ${idx + 1}`}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 animate-fade-in block"
              />
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 px-4 bg-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-500 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            How it <span className="text-red-500">works</span>
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Transform your images in three simple steps with our AI-powered
            technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="group relative">
              <div className="flex flex-col items-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-red-500/25 group-hover:shadow-red-500/50 transition-all duration-300">
                    1
                  </div>
                  <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  Upload photo
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Choose image with people, objects, or landscapes that you want
                  to enhance
                </p>

                {/* Decorative arrow for desktop */}
                <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-red-500 opacity-50">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="flex flex-col items-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-red-500/25 group-hover:shadow-red-500/50 transition-all duration-300">
                    2
                  </div>
                  <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  Ai detects subjects
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Our advanced ai identifies what should appear in front of text
                  automatically
                </p>

                {/* Decorative arrow for desktop */}
                <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-red-500 opacity-50">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="flex flex-col items-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-red-500/25 group-hover:shadow-red-500/50 transition-all duration-300">
                    3
                  </div>
                  <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  Text goes behind
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Text is positioned to appear naturally behind subjects
                  creating stunning visuals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animation-delay-0 {
          animation-delay: 0ms;
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-700 {
          animation-delay: 700ms;
        }
      `}</style>

      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
