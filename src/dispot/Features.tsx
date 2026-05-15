const features = [
  {
    title: "Cours structurés",
    description: "Apprenez à votre rythme avec des leçons organisées",
    icon: "📚",
  },
  {
    title: "Suivi personnalisé",
    description: "Visualisez vos progrès en temps réel",
    icon: "📊",
  },
  {
    title: "Communauté active",
    description: "Échangez avec d'autres apprenants",
    icon: "👥",
  },
  {
    title: "Certificats",
    description: "Validez vos compétences acquises",
    icon: "🎓",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Fonctionnalités
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;