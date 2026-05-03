import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Lock, CheckCircle } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'inscription à lier avec l'état global du chef de projet plus tard
    console.log("Données d'inscription :", formData);
  };

  return (
    <div className="min-h-screen flex font-sans text-slate-900 bg-slate-50">
      {/* Colonne de gauche - Illustration (Desktop uniquement) */}
      <div className="hidden lg:flex w-1/2 bg-primary-600 p-12 flex-col justify-between text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700 rounded-full -mr-20 -mt-20 opacity-50 blur-3xl" />
        
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-2.5 mb-12">
            <div className="bg-white text-primary-600 p-2 rounded-xl">
              <BookOpen size={24} />
            </div>
            <span className="font-display font-bold text-2xl">LearnHub</span>
          </Link>
          
          <h2 className="font-display text-4xl font-bold leading-tight mb-6">
            Commencez votre voyage vers l'excellence.
          </h2>
          
          <ul className="space-y-4">
            {["Accès illimité à +150 cours", "Certificats reconnus", "Support 24/7"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-primary-100">
                <CheckCircle size={20} className="text-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Colonne de droite - Formulaire */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          <div className="mb-8 text-center lg:text-left">
            <h1 className="font-display text-2xl font-bold text-slate-900">Créer un compte</h1>
            <p className="text-slate-500 mt-1">Rejoignez la communauté LearnHub.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 ml-1">Prénom</label>
                <input 
                  type="text" 
                  name="firstName"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="Jean"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 ml-1">Nom</label>
                <input 
                  type="text" 
                  name="lastName"
                  required
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="exemple@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 ml-1">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  name="password"
                  required
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-200 mt-2"
            >
              Créer mon compte
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Déjà un compte ?{' '}
              <Link to="/login" className="font-bold text-primary-600 hover:text-primary-700">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;