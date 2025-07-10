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
      <nav className="flex justify-between items-center px-6 py-4">
        <div
          style={{ fontFamily: '"Brush Script MT", cursive' }}
          className="md:text-2xl font-bold text-white relative"
        >
          OVERLAYED
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/pricing"
            className="bg-white text-black px-4 py-2 rounded-md border border-black hover:bg-gray-200 text-lg font-medium"
          >
            Pricing
          </Link>

          {/* Modal login/signup */}
          <SignUpButton mode="modal">
            <button className="bg-white text-black px-4 py-2 rounded-md border border-black hover:bg-gray-200 text-lg font-medium">
              Create Account
            </button>
          </SignUpButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl text-white md:text-6xl font-extrabold leading-tight">
          Insert Text Behind Images with{" "}
          <span className="text-orange-500 relative inline-block">
            AI
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-orange-900 rounded-full"></div>
          </span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg border border-gray-700 px-5 py-2 rounded-md inline-block">
          Generate stunning YouTube thumbnails and content visuals that get
          noticed.
        </p>
        <p className="mt-6 text-black text-lg border absolute left-298 border-gray-200 font-medium px-6 py-2 rounded-md inline-block bg-white">
          5 Credits
        </p>

      </section>

      {/* Image Grid */}
      <section className="px-6 pb-20 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              src: "https://images.unsplash.com/photo-1750400519626-acbef0ec0915?auto=format&fit=crop&w=1470&q=80",
              ratio: "landscape",
            },
            {
              src: "https://images.unsplash.com/photo-1751510288461-2d088d6bf76d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ratio: "landscape",
            },
            {
              src: "https://images.unsplash.com/photo-1750400519626-acbef0ec0915?auto=format&fit=crop&w=1470&q=80",
              ratio: "landscape",
            },
            {
              src: "https://images.unsplash.com/photo-1750400519626-acbef0ec0915?auto=format&fit=crop&w=1470&q=80",
              ratio: "landscape",
            },
            {
              src: "https://images.unsplash.com/photo-1750268746263-52cdef61e177?auto=format&fit=crop&w=1398&q=80",
              ratio: "portrait",
            },
            {
              src: "https://images.unsplash.com/photo-1751510288461-2d088d6bf76d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  img.ratio === "portrait" ? "h-[500px]" : "h-[300px]"
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
