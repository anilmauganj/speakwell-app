import { FaComments, FaGlobe, FaUserTie } from "react-icons/fa";

const Courses = ({animation}) => {
  const courseList = [
    {
      title: "Spoken English",
      desc: "Master daily conversations with fluency and confidence.",
      icon: <FaComments size={28} />,
      bg: "from-blue-600 to-blue-400",
    },
    {
      title: "IELTS Training",
      desc: "Target a 7+ band score with strategic training and mocks.",
      icon: <FaGlobe size={28} />,
      bg: "from-purple-600 to-indigo-400",
    },
    {
      title: "Interview Preparation",
      desc: "Improve your professional English and soft skills to crack interviews.",
      icon: <FaUserTie size={28} />,
      bg: "from-teal-600 to-green-400",
    },
  ];

  return (
    <>
      <div className="h-2 bg-blue-100 w-full" />

      <section data-aos={animation} id="courses" className="bg-gradient-to-b from-white to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Courses</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Select the course that fits your communication goals and transform your English fluency.
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            {courseList.map((course, idx) => (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/70 border border-blue-100 p-8 rounded-2xl shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`w-16 h-16 mx-auto bg-gradient-to-r ${course.bg} text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow`}
                >
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.desc}</p>
                <a
                  href="#contact"
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
