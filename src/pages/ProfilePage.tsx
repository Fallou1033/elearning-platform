// ============================================================
// 👤 PROFILE PAGE — À compléter par : Membre 4
// Branch : feature/dashboard
// Sections à faire :
//   - Photo de profil + infos étudiant
//   - Formulaire modification profil
//   - Statistiques (cours complétés, badges, etc.)
// ============================================================

export default function ProfilePage() {
  const student = {
    name: 'Moussa Diallo',
    email: 'moussa.diallo@email.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    bio: 'Étudiant passionné de développement web et de data science.',
    joinedAt: 'Janvier 2025',
  }

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <h1 className="font-display text-2xl font-bold text-slate-900">Mon profil</h1>

      <div className="card p-6 flex items-center gap-6">
        <img
          src={student.avatar}
          alt={student.name}
          className="w-24 h-24 rounded-2xl object-cover ring-4 ring-primary-100"
        />
        <div>
          <h2 className="font-display text-xl font-bold text-slate-900">{student.name}</h2>
          <p className="text-slate-500 text-sm">{student.email}</p>
          <p className="text-slate-400 text-xs mt-1">Membre depuis {student.joinedAt}</p>
        </div>
      </div>

      <div className="card p-6 space-y-4">
        <h3 className="font-semibold text-slate-800">Modifier le profil</h3>
        <p className="text-slate-400 text-sm">
          🚧 Formulaire de modification à compléter (feature/dashboard)
        </p>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
            <input defaultValue={student.name} className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input defaultValue={student.email} type="email" className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
            <textarea defaultValue={student.bio} className="input-field resize-none h-24" />
          </div>
          <button className="btn-primary">Enregistrer les modifications</button>
        </div>
      </div>
    </div>
  )
}