import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

// Interface pour le typage TypeScript
interface Course {
  id: number;
  title: string;
  category: string;
  progress: number;
  image: string;
}

const Dashboard : React.FC = () => {
  // État pour gérer la liste des cours (Exigence: Props et States)
  const [courses] = useState<Course[]>([
    { id: 1, title: "React & TypeScript", category: "Frontend", progress: 65, image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400" },
    { id: 2, title: "Tailwind CSS Design", category: "Design", progress: 30, image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400" },
    { id: 3, title: "Git & GitHub Workflow", category: "Outils", progress: 90, image: "https://images.unsplash.com/photo-1618401471353-b98aadebc25a?w=400" },
  ]);
        const [filter, setFilter] = useState<string>("Tous");
      const categories = ["Tous", "Frontend", "Design", "Outils"];

      const filteredCourses = filter === "Tous" 
    ? courses 
    : courses.filter((c) => c.category === filter);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 font-sans">
      {/* Sidebar - Adaptation du modèle Figma */}
      <aside className="w-full md:w-64 bg-slate-900 text-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-10 text-blue-400">UNIPRO E-Learn</h2>
        <nav className="space-y-4">
          <a href="#" className="block py-2 px-4 rounded bg-blue-600">Tableau de bord</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-slate-800 transition">Mes Formations</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-slate-800 transition">Certifications</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-slate-800 transition">Paramètres</a>
        </nav>
      </aside>
      <main>
              {/* Section des cours dynamiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 mb-2">
                  {course.category}
                </span>
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                
                {/* Utilisation de ton composant ProgressBar */}
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-700">Progression</span>
                    <span className="text-sm font-medium text-blue-700">{course.progress}%</span>
                  </div>
                  <ProgressBar progress={course.progress} />
                </div>
                
                <button className="w-full mt-4 bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-700 transition">
                  Continuer
                </button>
              </div>
            </div>
          ))}
        </div>

          <div className="flex gap-2 mb-6">
    {categories.map(cat => (
      <button 
        key={cat}
        onClick={() => setFilter(cat)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
      >
        {cat}
      </button>
    ))}
  </div>

        {/* Statistiques rapides (Think outside the box) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm font-medium">Cours en cours</p>
            <p className="text-3xl font-bold text-blue-600">{courses.length}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-gray-500 text-sm font-medium">Formations terminées</p>
            <p className="text-3xl font-bold text-green-500">12</p>
          </div>
        </div>

        {/* Grille des cours (Exigence: Responsive) */}
        <h2 className="text-xl font-bold mb-6 text-gray-800">Continuer l'apprentissage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="relative overflow-hidden h-40">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">
                  {course.category}
                </span>
                <h3 className="font-bold text-lg mt-3 mb-4 text-gray-800 min-h-[56px]">
                  {course.title}
                </h3>
                <div className="flex justify-between text-sm mb-2 text-gray-600">
                  <span>Progression</span>
                  <span className="font-bold">{course.progress}%</span>
                </div>
                <ProgressBar progress={course.progress} />
                <button className="w-full mt-5 py-2.5 bg-gray-50 hover:bg-blue-600 hover:text-white text-gray-700 font-semibold rounded-xl transition-colors duration-200">
                  Reprendre le cours
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Filtres de catégorie */}
<div className="flex gap-4 mb-8">
    {categories.map((cat) => (
        <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:bg-gray-200'
            }`}
        >
            {cat}
        </button>
    ))}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredCourses.map((course) => (
        <div key={course.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-lg mb-4" />
            <span className="text-xs text-blue-500 font-bold uppercase">{course.category}</span>
            <h3 className="font-bold text-lg mt-1">{course.title}</h3>
            
            <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                    <span>Progression</span>
                    <span>{course.progress}%</span>
                </div>
                <ProgressBar progress={course.progress} />
            </div>
        </div>
    ))}
</div>
      </main>
    </div>      
  )
};
export default Dashboard;