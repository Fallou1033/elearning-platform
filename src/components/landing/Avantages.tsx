import { Trophy, Clock, Globe, HeadphonesIcon, Award, Zap } from 'lucide-react'

const avantages = [
  {
    icon: Trophy,
    title: 'Formateurs experts',
    description: 'Apprenez auprès de professionnels actifs dans leur domaine, avec une expérience terrain reconnue.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Clock,
    title: 'Apprentissage flexible',
    description: 'Accédez à vos cours 24h/24, 7j/7. Apprenez à votre propre rythme, depuis n\'importe quel appareil.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Globe,
    title: 'Communauté mondiale',
    description: 'Rejoignez plus de 12 000 étudiants à travers le monde et développez votre réseau professionnel.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support dédié',
    description: 'Notre équipe pédagogique est disponible pour répondre à vos questions et vous accompagner.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Award,
    title: 'Certificats reconnus',
    description: 'Obtenez des certificats valorisés par les recruteurs et ajoutez-les directement à votre LinkedIn.',
    color: 'bg-primary-50 text-primary-600',
  },
  {
    icon: Zap,
    title: 'Projets pratiques',
    description: 'Chaque formation inclut des projets concrets pour construire votre portfolio professionnel.',
    color: 'bg-orange-50 text-orange-600',
  },
]

export default function Avantages() {
  return (
    <section id="avantages" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">
            Pourquoi LearnHub ?
          </span>
          <h2 className="section-title mt-2">
            Tout ce dont vous avez besoin pour réussir
          </h2>
          <p className="section-subtitle mx-auto mt-3">
            Une plateforme pensée pour maximiser votre apprentissage et accélérer votre carrière.
          </p>
        </div>

        {/* Grid avantages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {avantages.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="card p-6 space-y-4 hover:-translate-y-1 transition-transform duration-200">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900 text-base">{title}</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Prêt à lancer votre carrière tech ?
          </h3>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Rejoignez des milliers d'étudiants qui ont transformé leur vie grâce à LearnHub.
          </p>
          <a
            href="/register"
            className="inline-block bg-white text-primary-700 font-bold px-8 py-3.5 rounded-xl hover:bg-primary-50 transition-colors"
          >
            Commencer gratuitement →
          </a>
        </div>
      </div>
    </section>
  )
}