import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-10 mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Your Health, Our Heart</h2>
            <p className="hidden md:block">A Personalized Approach to Menopause</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://apps.apple.com/us/app/elda-health/id1570380416" target="_blank" rel="noopener noreferrer">
                <img src="https://assets-global.website-files.com/651e567d9c211dc2a12830d5/65251b1e702b6e99fe50ca3f_appstorelink.svg" alt="App Store Logo" loading="lazy" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.eldahealth&amp;hl=en_IN&amp;gl=US" target="_blank" rel="noopener noreferrer">
                <img src="https://assets-global.website-files.com/651e567d9c211dc2a12830d5/65251afd2981fa2f54bce447_googleplay-link.svg" alt="Google Play Logo" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-2">Program</h3>
            <a href="/terms-conditions" className="block mb-2">Terms & Conditions</a>
            <a href="/privacy-policy" className="block mb-2">Privacy Policy</a>
            <a href="/refund-policy" className="block mb-2">Refund Policy</a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <a href="tel:+918712206999" className="block mb-2">
              <img src="https://assets-global.website-files.com/651e567d9c211dc2a12830d5/65251d8c99875d9c1e808fb0_call-icon-footer.svg" alt="Call icon" loading="lazy" className="inline-block mr-2" />
              +91 9663703639
            </a>
            <a href="mailto:support@elda.com?subject=Hello" className="block mb-2">
              <img src="https://assets-global.website-files.com/651e567d9c211dc2a12830d5/65251d8cbda598aae92cafc5_main-icon-footer.svg" alt="Mail Icon" loading="lazy" className="inline-block mr-2" />
              support@eldahealth.com
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">@2023 All rights Received for Elda health</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
