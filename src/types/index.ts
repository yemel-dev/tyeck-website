export interface Service {
  id: string
  title: string
  description: string
  startingPrice: string
  icon?: string
}

export interface Project {
  id: string
  name: string
  url: string
  displayUrl: string
  description: string
  category: 'Site vitrine' | 'E-commerce' | 'Application web'
  imageUrl?: string
  imageAlt: string
  year: string
  featured?: boolean
}

export interface Testimonial {
  id: string
  clientName: string
  company?: string
  city: 'Kinshasa' | 'Brazzaville'
  message: string
  rating?: number
}

export interface DifferentiationPoint {
  id: string
  title: string
  description: string
}

export interface ContactInfo {
  whatsapp: string
  address: string
  city: string
  hours: string
}