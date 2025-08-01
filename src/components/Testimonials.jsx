import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Mehra",
    message: "I was nervous in English, now I speak fluently in my job! Thanks SpeakWell!",
    image: "https://picsum.photos/seed/p1/80/80",
  },
  {
    name: "Rajeev Sharma",
    message: "SpeakWell’s IELTS coaching helped me crack 7.5 Band in the first attempt!",
    image: "https://picsum.photos/seed/p2/80/80",
  },
  {
    name: "Sana Khan",
    message: "From shy to confident — their spoken English course changed my life!",
    image: "https://picsum.photos/seed/p3/80/80",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Students Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 italic">"{item.message}"</p>
              <div className="mt-4 text-yellow-400 flex justify-center">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <p className="mt-2 font-semibold text-gray-800">– {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
