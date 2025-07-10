// src/components/Home.jsx
import { useUser, SignOutButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Home() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-6">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-10">
        <div
          style={{ fontFamily: '"Brush Script MT", cursive' }}
          className="md:text-2xl font-bold text-white"
        >
          OVERLAYED
        </div>

        <div className="flex items-center gap-4">
          {isSignedIn && (
            <>
                <button className="bg-white text-black px-4 py-2 rounded-md border border-black hover:bg-gray-200">
                  0 Credits
                </button>

              {/* Clerk Profile Button */}
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-20 h-20",
                  },
                }}
                afterSignOutUrl="/"
              />
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center mt-20">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome, {user?.firstName || "User"}!
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Ready to create your POV? Click the button below.
        </p>
        <button className="mt-8 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition">
          Create Your POV
        </button>
      </div>
    </div>
  );
}

export default Home;
