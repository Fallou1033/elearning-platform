import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

export default function Temoignages() {
  return (
    <section id="temoignages" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">
            Témoignages
          </span>
          <h2 className="section-title mt-2">
            Ils ont changé leur carrière
          </h2>
          <p className="section-subtitle mx-auto mt-3">
            Découvrez ce que nos étudiants disent après avoir suivi nos formations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="card p-6 space-y-5 relative">
              {/* Quote icon */}
              <div className="text-primary-100">
                <Quote size={36} className="fill-primary-100 text-primary-200" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 text-sm leading-relaxed italic">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-primary-100"
                />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-8 py-8 border-y border-slate-100">
          {[
            { value: '12 000+', label: 'Étudiants formés' },
            { value: '150+',    label: 'Cours disponibles' },
            { value: '95%',     label: 'Taux de satisfaction' },
            { value: '3 200+',  label: 'Certifiés' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center px-6">
              <p className="font-display text-3xl font-bold text-primary-600">{value}</p>
              <p className="text-slate-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}