export default function About({animation}) {
  return (
    <section data-aos={animation} id="about" className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
    {/* Image */}
    <div>
      <img
        src="/img/english-about.jpg"
        alt="Students learning English at SpeakWell"
        className="rounded-xl shadow-lg w-full"
      />
    </div>

    {/* Text Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Why Choose SpeakWell?
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        SpeakWell, founded by <strong>Dr. Kalim Mohammad Siddique</strong> in Mauganj,
        empowers students with effective English communication skills. With expert
        guidance, structured modules, and a supportive environment, learners gain
        fluency and confidence for personal, academic, and professional growth.
      </p>
      <ul className="space-y-3">
        {[
          "Expert & Friendly Faculty",
          "Practical Spoken English Practice",
          "Flexible Timings & Affordable Fees",
        ].map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <i className="fas fa-check-circle text-green-600 text-xl mt-1"></i>
            <span className="text-gray-800">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

  );
}