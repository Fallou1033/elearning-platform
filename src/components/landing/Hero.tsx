import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, BookOpen } from 'lucide-react'

const stats = [
  { icon: Users,    value: '12 000+', label: 'Étudiants actifs' },
  { icon: BookOpen, value: '150+',    label: 'Cours disponibles' },
  { icon: Star,     value: '4.9/5',   label: 'Note moyenne' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-primary-50">

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Plateforme E-learning #1 en Afrique
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Apprenez à votre{' '}
              <span className="text-primary-600 relative">
                rythme
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 Q50 2 100 8 Q150 14 198 8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span>
              {', '}
              <br className="hidden sm:block" />
              progressez sans limites
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
              Des formations en développement web, design, data science et plus encore.
              Apprenez avec des experts, obtenez des certifications reconnues.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="btn-primary flex items-center gap-2 text-base px-7 py-3.5">
                Commencer gratuitement
                <ArrowRight size={18} />
              </Link>
              <a href="#formations" className="btn-secondary text-base px-7 py-3.5">
                Voir les formations
              </a>
            </div>

            {/* Trust line */}
            <p className="text-sm text-slate-400 flex items-center gap-2">
              <span className="text-green-500">✓</span> Aucune carte bancaire requise
              <span className="mx-2 text-slate-200">|</span>
              <span className="text-green-500">✓</span> 7 jours d'essai gratuit
            </p>
          </div>

          {/* Right — Visual card */}
          <div className="relative animate-fade-in hidden lg:block">
            {/* Main card */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=380&fit=crop"
                alt="Étudiants apprenant"
                className="w-full h-52 object-cover rounded-2xl mb-5"
              />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-slate-900">React & TypeScript</h3>
                  <p className="text-slate-400 text-sm mt-0.5">Par Aminata Diallo</p>
                </div>
                <span className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                  En cours
                </span>
              </div>
              {/* Progress */}
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-slate-500">Progression</span>
                <span className="font-semibold text-primary-600">65%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div className="bg-primary-500 h-2.5 rounded-full w-[65%] transition-all" />
              </div>
            </div>

            {/* Floating badge — students */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-slate-100 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['1531123897727', '1507003211169', '1573496359142'].map((id) => (
                  <img
                    key={id}
                    src={`https://images.unsplash.com/photo-${id}?w=32&h=32&fit=crop&crop=face`}
                    className="w-8 h-8 rounded-full ring-2 ring-white object-cover"
                    alt="étudiant"
                  />
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">+2 400</p>
                <p className="text-xs text-slate-400">inscrits ce mois</p>
              </div>
            </div>

            {/* Floating badge — rating */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-slate-100">
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-800 mt-1">4.9 / 5 étoiles</p>
              <p className="text-xs text-slate-400">8 200+ avis</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-slate-200">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-primary-50 text-primary-600 p-2.5 rounded-xl">
                  <Icon size={20} />
                </div>
              </div>
              <p className="font-display text-2xl font-bold text-slate-900">{value}</p>
              <p className="text-slate-500 text-sm mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}