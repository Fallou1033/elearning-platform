import { Star, Clock, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { courses } from '../../data/courses'

const levelColor: Record<string, string> = {
  'Débutant':      'bg-green-50 text-green-700',
  'Intermédiaire': 'bg-orange-50 text-orange-700',
  'Avancé':        'bg-red-50 text-red-700',
}

export default function Formations() {
  const featured = courses.slice(0, 6)

  return (
    <section id="formations" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">
            Nos formations
          </span>
          <h2 className="section-title mt-2">
            Des cours pour tous les niveaux
          </h2>
          <p className="section-subtitle mx-auto mt-3">
            Choisissez parmi plus de 150 formations certifiantes en développement,
            design, data science et bien plus.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course) => (
            <div key={course.id} className="card overflow-hidden group">
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-lg ${levelColor[course.level]}`}>
                  {course.level}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div>
                  <span className="text-xs text-primary-500 font-semibold uppercase tracking-wide">
                    {course.category}
                  </span>
                  <h3 className="font-display font-bold text-slate-900 mt-1 leading-snug text-base">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Instructor */}
                <p className="text-sm text-slate-400 font-medium">
                  Par {course.instructor}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-slate-700">{course.rating}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={13} />
                    {course.studentsCount.toLocaleString()} étudiants
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {course.duration}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {course.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-50 text-slate-500 border border-slate-100 px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/register" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base">
            Voir toutes les formations
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}