import "./App.css";
import { SignUpButton,SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';

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
      <nav className="flex justify-between items-center px-6 py-6">
        <div
          style={{ fontFamily: '"Brush Script MT", cursive' }}
          className="md:text-1xl font-bold text-white relative"
        >
          OVERLAYED
        </div>
        <div className="flex items-center space-x-5">
          <Link
            to="/pricing"
            className="bg-white text-black px-4 py-2 rounded-md border border-black hover:bg-gray-200 text-sm font-medium"
          >
            5 Credits Free
          </Link>

          {/* Modal login/signup */}
          <SignUpButton mode="modal">
            <button className="bg-white text-black px-4 py-2 rounded-md border border-black hover:bg-gray-200 text-sm font-medium">
              Create Account
            </button>
          </SignUpButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-26 px-4">
        <h1 className="text-4xl text-white md:text-5xl font-extrabold leading-tight">
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
        <p className="mt-5 text-gray-400 text-sm border border-gray-600 px-8 py-2 rounded-md inline-block">
          Generate stunning YouTube thumbnails and content visuals that get
          noticed.
        </p>
      </section>

      {/* Image Grid */}
      <section className="px-20 pb-20 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[300px]">
          {[
            {
              src: "https://i.pinimg.com/736x/62/9b/8d/629b8dcc56851c15833a4097e455e1a7.jpg",
              ratio: "portrait",
              span: "row-span-2"
            },
            {
               src: "https://i.pinimg.com/736x/75/0f/a2/750fa2250c08f45a7af8429f9795fac5.jpg",
              ratio: "portrait",
              span: "row-span-2"
            },
            {
              src: "https://i.pinimg.com/736x/b8/be/17/b8be178d01c0ffe651862a760eaae019.jpg",
              ratio: "landscape",
              span: "row-span-1"
            },
            {
              src: "https://i.pinimg.com/736x/e7/43/4c/e7434cbf5f05905a94fde5127a13b982.jpg",
              ratio: "landscape",
              span: "row-span-1"
            },
            {
              src: "https://i.pinimg.com/736x/ab/9e/3c/ab9e3cc296decbfde83f32b673dfd7dc.jpg",
              ratio: "landscape",
              span: "row-span-1"
            },
            {
              src: "https://i.pinimg.com/736x/16/3b/55/163b5558b39fdb64146fd26a41806b74.jpg",
              ratio: "landscape",
              span: "row-span-1"
            },
            {
              src: "https://i.pinimg.com/1200x/e7/af/e3/e7afe3f60c1ff1bfa751290346e1f030.jpg",
              ratio: "landscape",
              span: "row-span-1"
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

      <style jsx>{`
        .animation-delay-0 { animation-delay: 0ms; }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-700 { animation-delay: 700ms; }
      `}</style>
      <SpeedInsights />
    </div>
  );
}

export default App;
