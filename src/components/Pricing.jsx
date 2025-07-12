import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function Pricing() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://gumroad.com/js/gumroad.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const features = [
    "Unlimited images",
    "All customization features",
    "No subscriptions. No hidden fees",
    "Founder Email : ar******@gmail.com",
  ];

  return (
    <div className="relative min-h-screen bg-black text-black">
      {/* Logo & Back Button */}
      <div className="absolute top-6 left-8 z-50">
        <div
          className="md:text-2xl font-bold text-white"
          style={{ fontFamily: '"Brush Script MT", cursive' }}
        >
          
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-2 text-lg text-white hover:underline"
        >
          ← Go Back
        </button>
      </div>

      {/* Pricing Box */}
      <div className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-700 text-center">
          <h1 className="text-4xl font-bold mb-4">Lifetime Access</h1>
          <p className="text-gray-400 text-sm mb-7 border border-gray-700 px-3 py-1.5 rounded-md inline-block">
            One-time payment, all features unlocked forever.
          </p>

          <div className="text-5xl font-extrabold text-orange-500 mb-1">$5</div>
          <p className="text-sm text-gray-500 mb-8">lifetime access</p>

          {/* Feature List */}
          <div className="text-left space-y-3 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start text-gray-300">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-1" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Gumroad Button */}
          <a
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition text-center block"
            href="https://xtraa2.gumroad.com/l/exdrz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Lifetime Access
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
