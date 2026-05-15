import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, Users, Clock, BookOpen, CheckCircle, Play } from 'lucide-react'
import { courses } from '../data/courses'

export default function CourseDetailPage() {
  const { id } = useParams()
  const course = courses.find(c => c.id === id)

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="font-display text-2xl font-bold text-slate-900">Cours introuvable</h1>
        <Link to="/" className="btn-primary">Retour à l'accueil</Link>
      </div>
    )
  }

  const whatYouLearn = [
    'Les fondamentaux et concepts clés du domaine',
    'Mise en pratique avec des projets concrets',
    'Bonnes pratiques utilisées en entreprise',
    'Techniques avancées pour aller plus loin',
    'Comment structurer et organiser votre code',
    'Déploiement et mise en production',
  ]

  const curriculum = [
    { title: 'Introduction & Installation', lessons: 4, duration: '45 min' },
    { title: 'Les bases fondamentales', lessons: 8, duration: '2h30' },
    { title: 'Concepts intermédiaires', lessons: 10, duration: '3h15' },
    { title: 'Projets pratiques', lessons: 6, duration: '4h00' },
    { title: 'Bonnes pratiques & optimisation', lessons: 5, duration: '1h45' },
    { title: 'Déploiement & conclusion', lessons: 3, duration: '1h00' },
  ]

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header bleu */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Retour aux formations
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Info gauche */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {course.category}
                </span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full
                  ${course.level === 'Débutant' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermédiaire' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'}`}>
                  {course.level}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                {course.title}
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed">
                {course.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-5 text-sm text-primary-100 pt-2">
                <span className="flex items-center gap-1.5">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white">{course.rating}</span> / 5
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={16} />
                  {course.studentsCount.toLocaleString()} étudiants
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen size={16} />
                  {course.lessonsCount} leçons
                </span>
              </div>

              <p className="text-primary-200 text-sm">
                Créé par <span className="text-white font-semibold">{course.instructor}</span>
              </p>
            </div>

            {/* Card inscription (desktop) */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5 space-y-4">
                  <p className="font-display text-2xl font-bold text-slate-900">Gratuit</p>
                  <Link
                    to="/register"
                    className="btn-primary w-full text-center block"
                  >
                    S'inscrire maintenant
                  </Link>
                  <Link
                    to="/login"
                    className="btn-secondary w-full text-center block"
                  >
                    J'ai déjà un compte
                  </Link>
                  <ul className="text-sm text-slate-500 space-y-2 pt-2">
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Accès illimité</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Certificat inclus</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Projets pratiques</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Support dédié</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            {/* Ce que vous allez apprendre */}
            <div className="card p-6">
              <h2 className="font-display text-xl font-bold text-slate-900 mb-5">
                Ce que vous allez apprendre
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {whatYouLearn.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programme */}
            <div className="card p-6">
              <h2 className="font-display text-xl font-bold text-slate-900 mb-5">
                Programme du cours
              </h2>
              <div className="space-y-3">
                {curriculum.map((section, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-primary-50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Play size={14} />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 text-sm">{section.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{section.lessons} leçons · {section.duration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="card p-6">
              <h2 className="font-display text-xl font-bold text-slate-900 mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {course.tags.map(tag => (
                  <span key={tag} className="bg-primary-50 text-primary-700 border border-primary-200 px-3 py-1.5 rounded-lg text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card mobile */}
          <div className="lg:hidden card overflow-hidden">
            <img src={course.thumbnail} alt={course.title} className="w-full h-44 object-cover" />
            <div className="p-5 space-y-3">
              <p className="font-display text-2xl font-bold text-slate-900">Gratuit</p>
              <Link to="/register" className="btn-primary w-full text-center block">
                S'inscrire maintenant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}