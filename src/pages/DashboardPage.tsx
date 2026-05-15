import { BookOpen, CheckCircle, Clock, TrendingUp, Star, Play, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

const stats = [
  { label: 'Cours inscrits',  value: '6',   icon: BookOpen,    color: 'bg-blue-50 text-blue-600',     border: 'border-blue-100' },
  { label: 'Cours complétés', value: '1',   icon: CheckCircle, color: 'bg-green-50 text-green-600',   border: 'border-green-100' },
  { label: 'En progression',  value: '3',   icon: TrendingUp,  color: 'bg-orange-50 text-orange-600', border: 'border-orange-100' },
  { label: 'Heures apprises', value: '24h', icon: Clock,       color: 'bg-purple-50 text-purple-600', border: 'border-purple-100' },
]

const recentActivity = [
  { action: 'Leçon terminée',        detail: 'Introduction à React Hooks',          time: 'Il y a 2h',     icon: CheckCircle, color: 'text-green-500' },
  { action: 'Nouveau cours commencé', detail: 'Tailwind CSS — Design Moderne',       time: 'Il y a 1 jour', icon: Play,        color: 'text-blue-500' },
  { action: 'Certificat obtenu',      detail: 'Python pour Data Science',            time: 'Il y a 3 jours', icon: Award,      color: 'text-amber-500' },
  { action: 'Leçon terminée',        detail: 'Les composants React avancés',         time: 'Il y a 4 jours', icon: CheckCircle, color: 'text-green-500' },
]

const student = {
  name: 'Moussa Diallo',
  email: 'moussa.diallo@email.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  level: 'Intermédiaire',
  points: 1240,
}

const inProgress = courses.filter(c => c.progress && c.progress > 0 && c.progress < 100)
const completed  = courses.filter(c => c.progress === 100)

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">

      {/* Greeting */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
            Bonjour, {student.name.split(' ')[0]} 👋
          </h1>
          <p className="text-slate-500 mt-1">Continuez là où vous vous êtes arrêté.</p>
        </div>
        <Link to="/dashboard/courses" className="btn-primary text-sm py-2.5 px-5 self-start sm:self-auto">
          Voir tous mes cours
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color, border }) => (
          <div key={label} className={`card p-5 flex items-center gap-4 border ${border}`}>
            <div className={`p-3 rounded-2xl ${color} shrink-0`}>
              <Icon size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{value}</p>
              <p className="text-xs text-slate-500 mt-0.5 leading-tight">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid xl:grid-cols-3 gap-6">

        {/* Colonne gauche — Cours */}
        <div className="xl:col-span-2 space-y-6">

          {/* En progression */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-lg font-bold text-slate-900">Cours en progression</h2>
              <Link to="/dashboard/courses" className="text-sm text-primary-600 hover:underline font-medium">
                Voir tout
              </Link>
            </div>
            <div className="space-y-4">
              {inProgress.map(course => (
                <div key={course.id} className="flex gap-4 items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-800 text-sm truncate">{course.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{course.instructor}</p>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>{course.lessonsCount} leçons</span>
                        <span className="font-semibold text-primary-600">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div
                          className="bg-primary-500 h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="shrink-0 w-9 h-9 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                    <Play size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cours complétés */}
          {completed.length > 0 && (
            <div className="card p-6">
              <h2 className="font-display text-lg font-bold text-slate-900 mb-5">✅ Cours complétés</h2>
              <div className="space-y-3">
                {completed.map(course => (
                  <div key={course.id} className="flex gap-3 items-center p-3 rounded-xl bg-green-50 border border-green-100">
                    <img src={course.thumbnail} alt={course.title} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-800 text-sm truncate">{course.title}</h3>
                      <p className="text-xs text-slate-400">{course.instructor}</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-green-200">
                      <Award size={13} className="text-amber-500" />
                      <span className="text-xs font-semibold text-slate-700">Certifié</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activité récente */}
          <div className="card p-6">
            <h2 className="font-display text-lg font-bold text-slate-900 mb-5">Activité récente</h2>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`mt-0.5 shrink-0 ${item.color}`}>
                    <item.icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-700">{item.action}</p>
                    <p className="text-xs text-slate-400 truncate">{item.detail}</p>
                  </div>
                  <span className="text-xs text-slate-300 shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colonne droite — Profil + Recommandations */}
        <div className="space-y-6">

          {/* Profil rapide */}
          <div className="card p-6 text-center">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-20 h-20 rounded-2xl object-cover mx-auto ring-4 ring-primary-100"
            />
            <h3 className="font-display font-bold text-slate-900 mt-3">{student.name}</h3>
            <p className="text-slate-400 text-sm mt-0.5">{student.email}</p>
            <span className="inline-block mt-3 bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full border border-primary-200">
              {student.level}
            </span>
            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <div>
                <p className="font-bold text-slate-900 text-lg">{student.points}</p>
                <p className="text-xs text-slate-400">Points XP</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">{completed.length}</p>
                <p className="text-xs text-slate-400">Certifiés</p>
              </div>
            </div>
            <Link to="/dashboard/profile" className="btn-secondary w-full text-center block mt-4 text-sm py-2.5">
              Voir mon profil
            </Link>
          </div>

          {/* Recommandés */}
          <div className="card p-6">
            <h3 className="font-display font-bold text-slate-900 mb-4">Recommandés pour vous</h3>
            <div className="space-y-3">
              {courses.filter(c => !c.progress || c.progress === 0).slice(0, 3).map(course => (
                <div key={course.id} className="flex gap-3 items-center">
                  <img src={course.thumbnail} alt={course.title} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-700 truncate leading-snug">{course.title}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star size={11} className="fill-amber-400 text-amber-400" />
                      <span className="text-xs text-slate-400">{course.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}