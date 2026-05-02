export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  category: string
  level: 'Débutant' | 'Intermédiaire' | 'Avancé'
  duration: string
  lessonsCount: number
  rating: number
  studentsCount: number
  thumbnail: string
  tags: string[]
  progress?: number
}

export interface Student {
  id: string
  name: string
  email: string
  avatar: string
  enrolledCourses: string[]
  completedCourses: string[]
  joinedAt: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}