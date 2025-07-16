import "./App.css";
import { SignUpButton,SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";


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
          <span className="text-orange-500 relative inline-block">
            AI
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 max-w-290 mx-auto">
          {[
            {
              src: "https://i.pinimg.com/736x/62/9b/8d/629b8dcc56851c15833a4097e455e1a7.jpg",
              ratio: "portrait",
            },
            {
               src: "https://i.pinimg.com/736x/75/0f/a2/750fa2250c08f45a7af8429f9795fac5.jpg",
              ratio: "portrait"
            },
            {
              src: "https://i.pinimg.com/736x/60/bf/ab/60bfab010cfbc8a11254805658aaac96.jpg",
              ratio: "landscape",
            },
            {
              src: "https://i.pinimg.com/736x/16/3b/55/163b5558b39fdb64146fd26a41806b74.jpg",
              ratio: "landscape",
            },
            {
              src: "https://i.pinimg.com/1200x/e7/af/e3/e7afe3f60c1ff1bfa751290346e1f030.jpg",
              ratio: "landscape",
            },
            {
              src: "https://i.pinimg.com/736x/ab/9e/3c/ab9e3cc296decbfde83f32b673dfd7dc.jpg",
              ratio: "landscape",
            },
          ].map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl group relative bg-black"
            >
              <img
                src={img.src}
                alt={`Preview ${idx + 1}`}
                className={`w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 animate-fade-in ${
                  img.ratio === "portrait" ? "h-[600px]" : "h-[300px]"
                }`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
