# 🎓 LearnHub — Plateforme E-learning

> Projet Frontend — Module Dev Web Frontend  
> Année scolaire 2025-2026 | Prof : M. SOUMARE  
> Stack : **React + TypeScript + Tailwind CSS**

---

## 🚀 Lancer le projet en local

```bash
# 1. Cloner le repo
git clone https://github.com/TON-USERNAME/elearning-platform.git
cd elearning-platform

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

---

## 🌿 GitFlow — Branches à respecter

```
main
 └── develop
      ├── feature/landing      → Membre 2
      ├── feature/auth         → Membre 3
      ├── feature/dashboard    → Membre 4
      └── feature/routing      → Chef de projet (toi)
```

### Commandes quotidiennes

```bash
# Avant de commencer → récupérer les dernières MAJ
git pull origin develop

# Sauvegarder son travail
git add .
git commit -m "feat: description de ce que tu as fait"
git push origin feature/MA-BRANCHE

# Quand ta partie est terminée → ouvrir une Pull Request sur GitHub
# feature/MA-BRANCHE → develop
```

### Convention de commits

| Préfixe | Usage |
|---------|-------|
| `feat:` | Nouvelle fonctionnalité |
| `fix:` | Correction de bug |
| `chore:` | Config, setup |
| `style:` | Mise en forme, CSS |
| `refactor:` | Restructuration |

---

## 📁 Structure du projet

```
src/
├── components/
│   ├── common/          # Composants partagés (Button, Badge, etc.)
│   ├── landing/         # Composants de la Landing Page
│   ├── auth/            # Composants des pages Auth
│   └── dashboard/       # Sidebar, Navbar, CourseCard, etc.
├── data/
│   ├── courses.ts       # Données mockées des cours
│   └── testimonials.ts  # Données mockées des témoignages
├── layouts/
│   ├── AuthLayout.tsx   # Layout pour Login/Register/ForgotPassword
│   └── DashboardLayout.tsx # Layout pour toutes les pages Dashboard
├── pages/
│   ├── LandingPage.tsx       # 🎨 Membre 2
│   ├── LoginPage.tsx         # 🔐 Membre 3
│   ├── RegisterPage.tsx      # 🔐 Membre 3
│   ├── ForgotPasswordPage.tsx # 🔐 Membre 3
│   ├── DashboardPage.tsx     # 📊 Membre 4
│   ├── CoursesPage.tsx       # 📚 Membre 4
│   ├── ProfilePage.tsx       # 👤 Membre 4
│   └── NotFoundPage.tsx      # ✅ Fait
├── router/
│   └── AppRouter.tsx    # ✅ Routing complet — Chef de projet
├── types/
│   └── index.ts         # ✅ Types TypeScript partagés
├── hooks/               # Custom hooks (à créer si besoin)
├── App.tsx              # ✅ Point d'entrée
├── main.tsx             # ✅ Rendu React
└── index.css            # ✅ Tailwind + classes utilitaires
```

---

## 👥 Répartition de l'équipe

| Membre | Branche | Responsabilité |
|--------|---------|----------------|
| **Chef de projet** | `feature/routing` | Setup, routing, composants partagés, review PR, déploiement |
| **Membre 2** | `feature/landing` | Landing Page complète (Hero, Formations, Avantages, Témoignages, Footer) |
| **Membre 3** | `feature/auth` | Pages Auth (Login, Inscription, Réinitialisation) — adapter modèle Figma |
| **Membre 4** | `feature/dashboard` | Dashboard complet (Stats, Cours, Progression, Profil) — adapter modèle Figma |

---

## 🎨 Figma — Modèles à adapter

- **Auth** : https://www.figma.com/design/bFrrspJiYGBb7ckJfpWzKd/Model-LOGIN-projet-devfront
- **Dashboard** : https://www.figma.com/design/7he9xmPmJGgOCZJrPKTRD5/Modele-Dashboard-projet-front

---

## 🌐 Déploiement

```bash
npm run build
# Déployer le dossier /dist sur Vercel, Netlify ou GitHub Pages
```

**Deadline : 12 mai 2025**