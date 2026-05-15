// ============================================================
// 📊 DASHBOARD HOME — À compléter par : Membre 4
// Branch : feature/dashboard
// Adapter le modèle Figma du prof :
// https://www.figma.com/design/7he9xmPmJGgOCZJrPKTRD5/...
// Sections à faire :
//   - Cartes de stats (cours inscrits, complétés, en cours, heures)
//   - Cours en cours (avec barre de progression)
//   - Activité récente
// ============================================================

import { BookOpen, CheckCircle, Clock, TrendingUp } from 'lucide-react'
import { courses } from '../data/courses'

const stats = [
  { label: 'Cours inscrits',   value: '6',    icon: BookOpen,     color: 'bg-blue-50 text-blue-600' },
  { label: 'Cours complétés',  value: '1',    icon: CheckCircle,  color: 'bg-green-50 text-green-600' },
  { label: 'En progression',   value: '3',    icon: TrendingUp,   color: 'bg-orange-50 text-orange-600' },
  { label: 'Heures apprises',  value: '24h',  icon: Clock,        color: 'bg-purple-50 text-purple-600' },
]

const inProgressCourses = courses.filter(c => c.progress && c.progress > 0 && c.progress < 100)

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">
          Bonjour, Moussa 👋
        </h1>
        <p className="text-slate-500 mt-1">Continuez là où vous vous êtes arrêté.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="card p-5 flex items-center gap-4">
            <div className={`p-3 rounded-xl ${color}`}>
              <Icon size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* En cours */}
      <div>
        <h2 className="font-display text-lg font-bold text-slate-900 mb-4">Cours en cours</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {inProgressCourses.map(course => (
            <div key={course.id} className="card p-5 space-y-3">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-32 object-cover rounded-xl"
              />
              <div>
                <h3 className="font-semibold text-slate-800 text-sm leading-snug">{course.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{course.instructor}</p>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Progression</span>
                  <span className="font-semibold text-primary-600">{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-slate-300 text-sm">
        🚧 Design complet à adapter depuis le modèle Figma (feature/dashboard)
      </p>
    </div>
  )
}
