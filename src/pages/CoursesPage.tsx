// ============================================================
// 📚 COURSES PAGE — À compléter par : Membre 4
// Branch : feature/dashboard
// Sections à faire :
//   - Filtres (catégorie, niveau, recherche)
//   - Grille de CourseCard (composant réutilisable)
//   - Badge de progression sur chaque carte
// ============================================================

import { useState } from 'react'
import { Search } from 'lucide-react'
import { courses } from '../data/courses'
import type { Course } from '../types'

const categories = ['Tous', 'Développement Web', 'Design', 'Backend', 'Data Science', 'DevOps']
const levels: Course['level'][] = ['Débutant', 'Intermédiaire', 'Avancé']

export default function CoursesPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const filtered = courses.filter(course => {
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase())
    const matchCat = selectedCategory === 'Tous' || course.category === selectedCategory
    return matchSearch && matchCat
  })

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="font-display text-2xl font-bold text-slate-900">Mes cours</h1>

      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Rechercher un cours..."
          className="input-field pl-11"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150
              ${selectedCategory === cat
                ? 'bg-primary-600 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-primary-300'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courses grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map(course => (
          <div key={course.id} className="card overflow-hidden">
            <div className="relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-lg
                ${course.level === 'Débutant' ? 'bg-green-100 text-green-700' :
                  course.level === 'Intermédiaire' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'}`}>
                {course.level}
              </span>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="font-semibold text-slate-800 leading-snug">{course.title}</h3>
              <p className="text-sm text-slate-400">{course.instructor} · {course.duration}</p>
              {course.progress !== undefined && (
                <div>
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>{course.progress === 100 ? '✅ Terminé' : 'En cours'}</span>
                    <span className="font-semibold text-primary-600">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div
                      className="bg-primary-500 h-1.5 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-400 py-12">Aucun cours trouvé.</p>
      )}
    </div>
  )
}