import { useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const { isSignedIn, user } = useUser();
  const [hasAccess, setHasAccess] = useState(null); // null = loading, true/false = result
  console.log("🔍 Checking email:", user?.primaryEmailAddress?.emailAddress);

  
  useEffect(() => {
    const checkAccess = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) return;

      try {
        const res = await axios.post("http://localhost:1337/api/auth/check-access", {
          email: user.primaryEmailAddress.emailAddress,
        });

        setHasAccess(res.data.access);
      } catch (err) {
        console.error("Access check failed:", err);
        setHasAccess(false); // fallback: no access
      }
    };

    if (isSignedIn) checkAccess();
  }, [user, isSignedIn]);

  // 🔄 Loading State
  if (hasAccess === null && isSignedIn) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl">🔄 Checking subscription status...</h1>
        </div>
      </div>
    );
  }

  // ❌ Access Denied
  if (hasAccess === false && isSignedIn) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl mb-4">🚫 Access Denied</h1>
          <p>Please purchase to unlock all features.</p>
          <Link to="/pricing">
            <button className="mt-6 bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600">
              Upgrade Now
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // ✅ Main Content
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
              <Link
                to="/pricing"
                className="bg-white text-black px-4 py-2 rounded-md border border-black hover:bg-gray-200 text-lg font-medium"
              >
                0 Credits
              </Link>

              <div className="w-16 h-16">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-full h-full",
                    },
                  }}
                />
              </div>
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
