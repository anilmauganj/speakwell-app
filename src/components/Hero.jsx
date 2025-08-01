export default function Hero({animation}) {
  return (
    <section data-aos={animation} className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Speak English Fluently & Confidently
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Build your fluency and confidence with Mauganj’s most trusted spoken English classes, led by <strong>Dr. Kalim Mohammad Siddique</strong> – an expert educator committed to transforming lives through language.
          </p>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition"
          >
            Enroll Now
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="/img/english-hero.png" // Make sure this image exists in public/image/
            alt="Hero"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
