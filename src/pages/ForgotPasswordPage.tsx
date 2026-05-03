import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, ArrowLeft, Send, CheckCircle } from 'lucide-react';

const ResetPassword: React.FC = () => {
  // Gestion des états conformément au cahier des charges
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi simulée
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
        
        {/* Logo LearnHub */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-primary-600 text-white p-3 rounded-2xl mb-4 shadow-lg shadow-primary-200">
            <BookOpen size={28} />
          </div>
          <h2 className="font-display text-2xl font-bold text-slate-900">Mot de passe oublié</h2>
        </div>

        {!isSubmitted ? (
          /* Étape 1 : Formulaire */
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-slate-500 text-center text-sm leading-relaxed">
              Entrez votre email pour recevoir un lien de récupération.
            </p>
            
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                Adresse Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="nom@exemple.com"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-200 flex items-center justify-center gap-2"
            >
              Envoyer le lien
              <Send size={18} />
            </button>
          </form>
        ) : (
          /* Étape 2 : Confirmation */
          <div className="text-center py-4">
            <div className="flex justify-center mb-4 text-green-500">
              <CheckCircle size={48} />
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Lien envoyé !</h2>
            <p className="text-slate-500 text-sm mb-6">
              Consultez votre boîte mail pour réinitialiser votre mot de passe.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-primary-600 font-bold text-sm hover:underline"
            >
              Renvoyer le mail
            </button>
          </div>
        )}

        {/* Retour au Login - Correction de la structure vécue sur ta photo */}
        <div className="mt-10 pt-6 border-t border-slate-100 text-center">
          <Link 
            to="/login" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={16} />
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;