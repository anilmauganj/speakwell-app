import { FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        
        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-lg p-8 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">Have questions or want to enroll? We’d love to hear from you!</p>
          </div>
          <form id="contactForm" className="space-y-4 mt-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 rounded-lg"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-3 rounded-lg h-32 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold shadow-md flex justify-center items-center gap-2"
            >
              <FaPaperPlane className="text-white" />
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full h-full rounded-lg overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full min-h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24391.04746190521!2d81.85109471381892!3d24.666701248510098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39859f8ae244994d%3A0x2f08f72eb50595f4!2sMauganj%2C%20Madhya%20Pradesh%20486331!5e0!3m2!1sen!2sin!4v1754023279541!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
