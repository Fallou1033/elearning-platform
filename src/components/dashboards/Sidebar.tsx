import { NavLink, useNavigate } from 'react-router-dom'
import {
  BookOpen,
  LayoutDashboard,
  Library,
  User,
  LogOut,
  X,
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { to: '/dashboard',          label: 'Tableau de bord', icon: LayoutDashboard },
  { to: '/dashboard/courses',  label: 'Mes cours',       icon: Library },
  { to: '/dashboard/profile',  label: 'Mon profil',      icon: User },
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-100
          shadow-xl z-30 flex flex-col transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:shadow-none
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="bg-primary-600 text-white p-2 rounded-xl">
              <BookOpen size={18} />
            </div>
            <span className="font-display font-bold text-lg text-primary-700">LearnHub</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/dashboard'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-150
                ${isActive
                  ? 'bg-primary-50 text-primary-700 font-semibold'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-4 py-5 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 w-full transition-all duration-150"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  )
}