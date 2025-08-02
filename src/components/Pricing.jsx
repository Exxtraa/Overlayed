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
    "Download in Highest Resolution",
    "No subscriptions. No hidden fees",
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
          className="mt-2 text-sm text-white hover:underline"
        >
          ← Go Back
        </button>
      </div>

      {/* Pricing Box */}
      <div className="min-h-screen bg-black text-white px-4 py-10 flex items-center justify-center">

  <div className="w-1xl bg-gray-900 rounded-xl shadow-md p-7 border border-gray-700 text-center">
    <h1 className="text-xl font-semibold mb-2">Lifetime Access</h1>
    <p className="text-gray-400 text-xs mb-5 border border-gray-700 px-2 py-1 rounded inline-block">
      One-time payment, all features unlocked forever.
    </p>

    <div className="text-3xl font-bold text-orange-500 mb-1">$3</div>
    <p className="text-xs text-gray-500 mb-6">lifetime access</p>

    {/* Feature List */}
    <div className="text-left space-y-2 mb-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start text-gray-300 text-sm">
          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
          <span>{feature}</span>
        </div>
      ))}
    </div>

    {/* Gumroad Button */}
    <a
      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition text-center block text-sm"
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
