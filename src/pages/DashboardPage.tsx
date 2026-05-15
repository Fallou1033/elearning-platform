import { BookOpen, CheckCircle, Clock, TrendingUp, Star, Play, Award, Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

const stats = [
  { label: 'Cours inscrits',  value: '6',   icon: BookOpen,     bg: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-100' },
  { label: 'Cours complétés', value: '1',   icon: CheckCircle,  bg: 'bg-green-50',  text: 'text-green-600',  border: 'border-green-100' },
  { label: 'En progression',  value: '3',   icon: TrendingUp,   bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
  { label: 'Heures apprises', value: '24h', icon: Clock,        bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
]

const recentActivity = [
  { action: 'Leçon terminée', detail: 'Introduction à React Hooks', time: 'Il y a 2h',   icon: CheckCircle, color: 'text-green-500' },
  { action: 'Nouveau cours',  detail: 'Docker & Déploiement',       time: 'Il y a 5h',   icon: BookOpen,    color: 'text-blue-500' },
  { action: 'Certificat',     detail: 'Python pour Data Science',   time: 'Hier',        icon: Award,       color: 'text-amber-500' },
  { action: 'Leçon terminée', detail: 'Tailwind CSS — Flexbox',     time: 'Il y a 2j',   icon: CheckCircle, color: 'text-green-500' },
]

const inProgress = courses.filter(c => c.progress !== undefined && c.progress > 0 && c.progress < 100)
const completed   = courses.filter(c => c.progress === 100)

const student = {
  name:   'Moussa Diallo',
  email:  'moussa.diallo@email.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  level:  'Intermédiaire',
  points: 1240,
}

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">

      {/* ── Header ── */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
            Bonjour, {student.name.split(' ')[0]} 👋
          </h1>
          <p className="text-slate-500 mt-1">Continuez là où vous vous êtes arrêté.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-amber-50 border border-amber-100 text-amber-700 text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-2">
            <Star size={15} className="fill-amber-400 text-amber-400" />
            {student.points} pts
          </div>
          <button className="relative p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-primary-600 hover:border-primary-200 transition-colors shadow-sm">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, bg, text, border }) => (
          <div key={label} className={`card p-5 flex items-center gap-4 border ${border}`}>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${bg}`}>
              <Icon size={22} className={text} />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-slate-900">{value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Cours en cours + Activité ── */}
      <div className="grid xl:grid-cols-3 gap-6">

        {/* Cours en progression */}
        <div className="xl:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-slate-900">Cours en cours</h2>
            <Link to="/dashboard/courses" className="text-sm text-primary-600 hover:underline font-medium">
              Voir tout →
            </Link>
          </div>

          <div className="space-y-3">
            {inProgress.map(course => (
              <div key={course.id} className="card p-4 flex gap-4 items-center group hover:-translate-y-0.5 transition-transform">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-800 text-sm truncate">{course.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{course.instructor}</p>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Progression</span>
                      <span className="font-semibold text-primary-600">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div
                        className="bg-primary-500 h-1.5 rounded-full transition-all duration-700"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
                <button className="w-9 h-9 bg-primary-50 hover:bg-primary-600 text-primary-600 hover:text-white rounded-xl flex items-center justify-center transition-all shrink-0">
                  <Play size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Cours complétés */}
          {completed.length > 0 && (
            <div className="mt-6">
              <h2 className="font-display text-lg font-bold text-slate-900 mb-3">Cours complétés ✅</h2>
              <div className="space-y-3">
                {completed.map(course => (
                  <div key={course.id} className="card p-4 flex gap-4 items-center opacity-75">
                    <img src={course.thumbnail} alt={course.title} className="w-16 h-16 rounded-xl object-cover shrink-0 grayscale" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-700 text-sm truncate">{course.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{course.instructor}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <CheckCircle size={13} className="text-green-500" />
                        <span className="text-xs text-green-600 font-semibold">Terminé</span>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-lg shrink-0">
                      100%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Colonne droite : Profil rapide + Activité */}
        <div className="space-y-5">

          {/* Profil rapide */}
          <div className="card p-5 text-center space-y-3">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-16 h-16 rounded-2xl object-cover mx-auto ring-4 ring-primary-50"
            />
            <div>
              <p className="font-display font-bold text-slate-900">{student.name}</p>
              <p className="text-slate-400 text-xs mt-0.5">{student.email}</p>
            </div>
            <div className="flex justify-center gap-3">
              <div className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-lg">
                {student.level}
              </div>
              <div className="bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <Star size={11} className="fill-amber-400 text-amber-400" />
                {student.points} pts
              </div>
            </div>
            <Link
              to="/dashboard/profile"
              className="block w-full text-center text-sm font-semibold text-primary-600 hover:text-primary-700 border border-primary-200 hover:border-primary-400 py-2 rounded-xl transition-colors"
            >
              Voir mon profil
            </Link>
          </div>

          {/* Activité récente */}
          <div className="card p-5">
            <h2 className="font-display text-base font-bold text-slate-900 mb-4">Activité récente</h2>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`mt-0.5 shrink-0 ${item.color}`}>
                    <item.icon size={15} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-700">{item.action}</p>
                    <p className="text-xs text-slate-400 truncate">{item.detail}</p>
                  </div>
                  <span className="text-xs text-slate-300 shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}