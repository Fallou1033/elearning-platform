const testimonials = [
  {
    name: "Marie Dubois",
    role: "Étudiante en développement",
    content:
      "Cette plateforme m'a permis d'apprendre React rapidement et efficacement !",
    avatar: "MD",
  },
  {
    name: "Jean Martin",
    role: "Développeur freelance",
    content:
      "Le suivi de progression m'aide à rester motivé au quotidien.",
    avatar: "JM",
  },
  {
    name: "Sophie Bernard",
    role: "Chef de projet",
    content:
      "Une interface claire et des cours de qualité, je recommande !",
    avatar: "SB",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ce qu'ils en disent
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div className="ml-3">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;