import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917415585182?text=Hi%20SpeakWell%2C%20I%20am%20interested%20in%20English%20classes."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+917415585182"
        className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition"
      >
        <FaPhoneAlt className="text-xl" />
      </a>
    </div>
  );
};

export default FloatingButtons;
