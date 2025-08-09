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
    "Unlimited images.",
    "No Hidden fees.",
    "All customization features.",
    "Download in Highest Resolution.",
  ];

  const free = [
    "5 Credits free",
    "No Credit card required.",
    "All customization features.",
    "Download in Highest Resolution.",
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
        {/* Mobile View - Stack vertically */}
        <div className="flex flex-col md:hidden w-full max-w-md space-y-6">
          {/* Free Trial Card - Mobile */}
          <div className="w-full bg-gray-900 rounded-xl shadow-md p-7 border border-gray-700 text-center">
            <h1 className="text-xl font-semibold mb-2">Free Trial</h1>
            <p className="text-gray-400 text-xs mb-5 border border-gray-700 px-2 py-1 rounded inline-block">
              Experience all in a free trial, no credit card required.
            </p>

            <div className="text-3xl font-bold text-orange-500 mb-1">$0</div>
            <p className="text-xs text-gray-500 mb-6">One time access</p>

            {/* Feature List */}
            <div className="text-left space-y-2 mb-6">
              {free.map((feature, idx) => (
                <div key={idx} className="flex items-start text-gray-300 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Gumroad Button */}
            <a
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition text-center block text-sm"
              href="https://accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S1949769240%3A1754741581217402&access_type=offline&client_id=787459168867-0v2orf3qo56uocsi84iroseoahhuovdm.apps.googleusercontent.com&o2v=1&redirect_uri=https%3A%2F%2Fclerk.shared.lcl.dev%2Fv1%2Foauth_callback&response_type=code&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&service=lso&state=dqzd9zl317ccqux8dno8jrz32o2zb699d5m78i7t&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAOEGSSyVa9aQKvW0CxAouQPuzrUw95-MJsXgLgCM29j1pqNwu1jxLoSkUup5ylPkN0ErMpPELZtEkiK4xYWmbCQlg3WSMnVAO8NF_FfVqGY1hL0i27jGf1QT2WGPHBYalT6FWNfdsgZNy3imBe3tJrzvM8h7dVDixHJZkllnmErQDyfka4VrS1ZUCPr-b7b4fxvMkB0rZnd7CH5aLYdi-WrOFz8JY1g8aTG6ArszWztUYEWhDy0nfhqv7CqpLL5N0PjIrPu6-Omsk7cqI30D30l85Ws0Tgy61UVVlc2CGnXtfHu29hJvqcJlLnWp_8yEgeccmvX_jBDTuuj7h0Nejf5J9F5ocqzwxh-SIF-tN4VYKsoAcXrJ8mWRgHI6IEKHH5uuKhevPb2f5crd38N0_BH6Bc_sPkYqkpbmw8UZQyCWLMZvCKpXwXunG2D9KjgAoFIFxlkE-YyylBMNtuU4vtwth2ZueM5nhyjQYOocTlqLse8fEA%26flowName%3DGeneralOAuthFlow%26as%3DS1949769240%253A1754741581217402%26client_id%3D787459168867-0v2orf3qo56uocsi84iroseoahhuovdm.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fclerk.shared.lcl.dev&rart=ANgoxcdb9wSjxYc3OfiKOnp2uy6iexJPud6HUUWkCYiKt5iv-s0NGe4FEMPOxYKf6I70yG2MWJwsCadErqLxDeQikZtwOp_OTpojyV6nQx0ZyuehV3Knl4M"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free trial
            </a>
          </div>

          {/* Premium Access Card - Mobile */}
          <div className="w-full bg-gray-900 rounded-xl shadow-md p-7 border border-gray-700 text-center">
            <h1 className="text-xl font-semibold mb-2">Premium Access</h1>
            <p className="text-gray-400 text-xs mb-5 border border-gray-700 px-2 py-1 rounded inline-block">
              One-time payment, all features unlocked forever.
            </p>

            <div className="text-3xl font-bold text-orange-500 mb-1">$3</div>
            <p className="text-xs text-gray-500 mb-6">Monthly access</p>

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

        {/* Desktop View - Side by side (your original code) */}
        <div className="hidden md:flex">
          <div className="w-1xl bg-gray-900 rounded-xl shadow-md p-7 border border-gray-700 text-center">
            <h1 className="text-xl font-semibold mb-2">Free Trial</h1>
            <p className="text-gray-400 text-xs mb-5 border border-gray-700 px-2 py-1 rounded inline-block">
              Experience all in a free trial, no credit card required.
            </p>

            <div className="text-3xl font-bold text-orange-500 mb-1">$0</div>
            <p className="text-xs text-gray-500 mb-6">One time access</p>

            {/* Feature List */}
            <div className="text-left space-y-2 mb-6">
              {free.map((feature, idx) => (
                <div key={idx} className="flex items-start text-gray-300 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Gumroad Button */}
            <a
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition text-center block text-sm"
              href="https://accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S1949769240%3A1754741581217402&access_type=offline&client_id=787459168867-0v2orf3qo56uocsi84iroseoahhuovdm.apps.googleusercontent.com&o2v=1&redirect_uri=https%3A%2F%2Fclerk.shared.lcl.dev%2Fv1%2Foauth_callback&response_type=code&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&service=lso&state=dqzd9zl317ccqux8dno8jrz32o2zb699d5m78i7t&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAOEGSSyVa9aQKvW0CxAouQPuzrUw95-MJsXgLgCM29j1pqNwu1jxLoSkUup5ylPkN0ErMpPELZtEkiK4xYWmbCQlg3WSMnVAO8NF_FfVqGY1hL0i27jGf1QT2WGPHBYalT6FWNfdsgZNy3imBe3tJrzvM8h7dVDixHJZkllnmErQDyfka4VrS1ZUCPr-b7b4fxvMkB0rZnd7CH5aLYdi-WrOFz8JY1g8aTG6ArszWztUYEWhDy0nfhqv7CqpLL5N0PjIrPu6-Omsk7cqI30D30l85Ws0Tgy61UVVlc2CGnXtfHu29hJvqcJlLnWp_8yEgeccmvX_jBDTuuj7h0Nejf5J9F5ocqzwxh-SIF-tN4VYKsoAcXrJ8mWRgHI6IEKHH5uuKhevPb2f5crd38N0_BH6Bc_sPkYqkpbmw8UZQyCWLMZvCKpXwXunG2D9KjgAoFIFxlkE-YyylBMNtuU4vtwth2ZueM5nhyjQYOocTlqLse8fEA%26flowName%3DGeneralOAuthFlow%26as%3DS1949769240%253A1754741581217402%26client_id%3D787459168867-0v2orf3qo56uocsi84iroseoahhuovdm.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fclerk.shared.lcl.dev&rart=ANgoxcdb9wSjxYc3OfiKOnp2uy6iexJPud6HUUWkCYiKt5iv-s0NGe4FEMPOxYKf6I70yG2MWJwsCadErqLxDeQikZtwOp_OTpojyV6nQx0ZyuehV3Knl4M"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Free trial
            </a>
          </div>
          
          {/* premium access */}
          <div className="w-1xl bg-gray-900 rounded-xl ml-10 shadow-md p-7 border border-gray-700 text-center">
            <h1 className="text-xl font-semibold mb-2">Premium Access</h1>
            <p className="text-gray-400 text-xs mb-5 border border-gray-700 px-2 py-1 rounded inline-block">
              One-time payment, all features unlocked forever.
            </p>

            <div className="text-3xl font-bold text-orange-500 mb-1">$3</div>
            <p className="text-xs text-gray-500 mb-6">Monthly access</p>

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
    </div>
  );
}

export default Pricing;
