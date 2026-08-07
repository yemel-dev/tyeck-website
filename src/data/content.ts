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
    id: 'frank-telecom',
    name: 'Frank Telecom',
    url: 'https://franktelecom.com',
    displayUrl: 'franktelecom.com',
    description: 'Présence digitale professionnelle pour une entreprise télécom : présentation des offres et contact commercial.',
    category: 'Site vitrine',
    imageAlt: "Page d'accueil du site Frank Telecom",
    year: '2025',
    featured: true,
  },
  {
    id: 'la-modeuse',
    name: 'La Modeuse',
    url: 'https://lamodeuse.com',
    displayUrl: 'lamodeuse.com',
    description: 'Boutique en ligne de mode : catalogue produits, fiches détaillées et parcours d\'achat pensé pour la conversion.',
    category: 'E-commerce',
    imageAlt: "Page d'accueil de la boutique en ligne La Modeuse",
    year: '2025',
  },
  {
    id: 'auto-ecole-erfolg',
    name: 'Auto-École Erfolg',
    url: 'https://auto-ecole-erfolg.com',
    displayUrl: 'auto-ecole-erfolg.com',
    description: "Site vitrine pour une auto-école : présentation des formules de formation, inscription en ligne et prise de contact.",
    category: 'Site vitrine',
    imageAlt: "Page d'accueil du site Auto-École Erfolg",
    year: '2024',
  },
  {
    id: 'boutique-kamga',
    name: 'Boutique Kamga',
    url: 'https://boutique-kamga-frontend.vercel.app',
    displayUrl: 'boutique-kamga-frontend.vercel.app',
    description: "Boutique en ligne avec catalogue produits, panier et tunnel de commande simplifié.",
    category: 'E-commerce',
    imageAlt: "Page d'accueil de la Boutique Kamga",
    year: '2024',
  },
  {
    id: 'cozie-bio',
    name: 'Cozie Bio',
    url: 'https://cozie-bio.com',
    displayUrl: 'cozie-bio.com',
    description: "Site e-commerce pour une marque de produits bio : mise en avant des gammes et argumentaire produit.",
    category: 'E-commerce',
    imageAlt: "Page d'accueil du site Cozie Bio",
    year: '2024',
  },
  {
    id: 'best-business-laptop',
    name: 'Best Business Laptop CG',
    url: 'https://bestbusinesslaptopcg.com',
    displayUrl: 'bestbusinesslaptopcg.com',
    description: 'Site vitrine avec catalogue pour un importateur de matériel informatique. Les clients consultent les configurations disponibles et demandent un devis.',
    category: 'Site vitrine',
    imageAlt: "Page d'accueil du site Best Business Laptop CG",
    year: '2024',
  },
  {
    id: 'glassesusa',
    name: 'GlassesUSA',
    url: 'https://glassesusa.com',
    displayUrl: 'glassesusa.com',
    description: "Plateforme e-commerce de lunettes : catalogue produit riche, filtres avancés et essayage virtuel.",
    category: 'E-commerce',
    imageAlt: "Page d'accueil du site GlassesUSA",
    year: '2023',
  },
  {
    id: 'fresha',
    name: 'Fresha',
    url: 'https://fresha.com',
    displayUrl: 'fresha.com',
    description: "Plateforme de réservation en ligne pour instituts de beauté et bien-être, avec gestion d'agenda intégrée.",
    category: 'Application web',
    imageAlt: "Page d'accueil de la plateforme Fresha",
    year: '2023',
  },
  {
    id: 'motona-market',
    name: 'Motona Market',
    url: 'https://motonamarket.com',
    displayUrl: 'motonamarket.com',
    description: "Marketplace dédiée à la vente de motos et pièces détachées entre particuliers et professionnels.",
    category: 'E-commerce',
    imageAlt: "Page d'accueil du site Motona Market",
    year: '2023',
  },
  {
    id: 'verocongo',
    name: 'Vero Congo',
    url: 'https://verocongo.com',
    displayUrl: 'verocongo.com',
    description: "Site vitrine présentant l'activité et les services de l'entreprise, avec formulaire de contact.",
    category: 'Site vitrine',
    imageAlt: "Page d'accueil du site Vero Congo",
    year: '2023',
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