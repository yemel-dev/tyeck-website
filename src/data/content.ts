import type {
  Service,
  Project,
  DifferentiationPoint,
  ContactInfo,
} from '../types'

export const companyInfo = {
  name: 'TYECK',
  baseline: 'Votre présence digitale, notre mission',
  tagline: 'Donnez vie à votre projet digital avec TYECK',
  description:
    "TYECK conçoit des solutions digitales modernes, performantes et sécurisées — sites vitrines, applications web, e-commerce, boutiques en ligne — pensées pour le marché de Kinshasa et Brazzaville.",
}

export const services: Service[] = [
  {
    id: 'site-web',
    title: 'Création de site web',
    description: 'Site vitrine moderne, rapide et responsive.',
    startingPrice: 'Dès 230 $',
  },
  {
    id: 'application-web',
    title: 'Application web',
    description:
      'Application sur mesure pour automatiser un processus métier.',
    startingPrice: 'Sur devis selon complexité',
  },
  {
    id: 'e-commerce',
    title: 'Site e-commerce',
    description: 'Plateforme sécurisée pour vendre des produits en ligne.',
    startingPrice: 'Sur devis selon fonctionnalités',
  },
  {
    id: 'boutique-en-ligne',
    title: 'Boutique en ligne',
    description:
      'Boutique simple pour démarrer ou développer une activité de vente.',
    startingPrice: 'Dès 230 $',
  },
]

export const projects: Project[] = [
  {
    id: 'best-business-laptop',
    name: 'Best Business Laptop CG',
    url: 'https://bestbusinesslaptopcg.com',
    description: 'Site vitrine avec catalogue pour un importateur de matériel informatique.',
  },
  {
    id: 'frank-telecom',
    name: 'Frank Telecom',
    url: 'https://franktelecom.com',
    description: 'Présence digitale professionnelle pour une entreprise télécom.',
  },
]

export const differentiators: DifferentiationPoint[] = [
  {
    id: 'accessibilite',
    title: 'Accessibilité',
    description:
      'Un prix d\'entrée clair et transparent (dès 230 $), sans négociation opaque.',
  },
  {
    id: 'preuve',
    title: 'Preuve par l\'exemple',
    description:
      'Des réalisations réelles et vérifiables plutôt que des promesses abstraites.',
  },
  {
    id: 'proximite',
    title: 'Proximité',
    description:
      'Réponse rapide via WhatsApp Business, un contact humain identifié.',
  },
]

export const contactInfo: ContactInfo = {
  whatsapp: '688050991',
  address: '1ère rue Boulevard Lumumba n.17, Limete',
  city: 'Kinshasa',
  hours: '8h - 18h',
}