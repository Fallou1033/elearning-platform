import { Menu, Bell } from 'lucide-react'

interface DashboardNavbarProps {
  onMenuClick: () => void
}

// Mock student data — à remplacer par un contexte Auth réel
const student = {
  name: 'Moussa Diallo',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
}

export default function DashboardNavbar({ onMenuClick }: DashboardNavbarProps) {
  return (
    <header className="bg-white border-b border-slate-100 px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      {/* Burger menu (mobile) */}
      <button
        onClick={onMenuClick}
        className="lg:hidden text-slate-500 hover:text-slate-800 p-1"
      >
        <Menu size={22} />
      </button>

      {/* Page title placeholder — chaque page peut le personnaliser */}
      <div className="hidden lg:block" />

      {/* Right side */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Notifications */}
        <button className="relative text-slate-400 hover:text-primary-600 p-2 rounded-xl hover:bg-primary-50 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-2">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-9 h-9 rounded-full object-cover ring-2 ring-primary-100"
          />
          <span className="hidden md:block text-sm font-medium text-slate-700">
            {student.name}
          </span>
        </div>
      </div>
    </header>
  )
}