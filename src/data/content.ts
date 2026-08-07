import type {
  Service,
  Project,
  DifferentiationPoint,
  TeamMember,
  Testimonial,
  ContactInfo,
} from "../types";
import frankTelecomImg from "../assets/images/projects/frank-telecom.png";
import laModeuseImg from "../assets/images/projects/la-modeuse.png";
import autoEcoleErfolgImg from "../assets/images/projects/auto-ecole-erfolg.png";
import boutiqueKamgaImg from "../assets/images/projects/boutique-kamga.png";
import cozieBioImg from "../assets/images/projects/cozie-bio.png";
import bestBusinessLaptopImg from "../assets/images/projects/best-business-laptop.png";
import glassesUsaImg from "../assets/images/projects/glassesusa.png";
import freshaImg from "../assets/images/projects/fresha.png";
import motonaMarketImg from "../assets/images/projects/motona-market.png";
import veroCongoImg from "../assets/images/projects/verocongo.png";

export const companyInfo = {
  name: "TYECK",
  baseline: "Votre présence digitale, notre mission",
  tagline: "Donnez vie à votre projet digital avec TYECK",
  description:
    "TYECK conçoit des solutions digitales modernes, performantes et sécurisées — sites vitrines, applications web, e-commerce, boutiques en ligne — pensées pour le marché de Kinshasa et Brazzaville.",
};

export const services: Service[] = [
  {
    id: "site-web",
    title: "Création de site web",
    description: "Site vitrine moderne, rapide et responsive.",
    startingPrice: "Dès 230 $",
  },
  {
    id: "application-web",
    title: "Application web",
    description: "Application sur mesure pour automatiser un processus métier.",
    startingPrice: "Sur devis selon complexité",
  },
  {
    id: "e-commerce",
    title: "Site e-commerce",
    description: "Plateforme sécurisée pour vendre des produits en ligne.",
    startingPrice: "Sur devis selon fonctionnalités",
  },
  {
    id: "boutique-en-ligne",
    title: "Boutique en ligne",
    description:
      "Boutique simple pour démarrer ou développer une activité de vente.",
    startingPrice: "Dès 230 $",
  },
];

export const projects: Project[] = [
  {
    id: "frank-telecom",
    name: "Frank Telecom",
    url: "https://franktelecom.com",
    displayUrl: "franktelecom.com",
    description:
      "Présence digitale professionnelle pour une entreprise télécom : présentation des offres et contact commercial.",
    category: "Site vitrine",
    imageUrl: frankTelecomImg,
    imageAlt: "Page d'accueil du site Frank Telecom",
    year: "2025",
    featured: true,
  },
  {
    id: "la-modeuse",
    name: "La Modeuse",
    url: "https://lamodeuse.com",
    displayUrl: "lamodeuse.com",
    description:
      "Boutique en ligne de mode : catalogue produits, fiches détaillées et parcours d'achat pensé pour la conversion.",
    category: "E-commerce",
    imageUrl: laModeuseImg,
    imageAlt: "Page d'accueil de la boutique en ligne La Modeuse",
    year: "2025",
  },
  {
    id: "auto-ecole-erfolg",
    name: "Auto-École Erfolg",
    url: "https://auto-ecole-erfolg.com",
    displayUrl: "auto-ecole-erfolg.com",
    description:
      "Site vitrine pour une auto-école : présentation des formules de formation, inscription en ligne et prise de contact.",
    category: "Site vitrine",
    imageUrl: autoEcoleErfolgImg,
    imageAlt: "Page d'accueil du site Auto-École Erfolg",
    year: "2024",
  },
  {
    id: "boutique-kamga",
    name: "Boutique Kamga",
    url: "https://boutique-kamga-frontend.vercel.app",
    displayUrl: "boutique-kamga-frontend.vercel.app",
    description:
      "Boutique en ligne avec catalogue produits, panier et tunnel de commande simplifié.",
    category: "E-commerce",
    imageUrl: boutiqueKamgaImg,
    imageAlt: "Page d'accueil de la Boutique Kamga",
    year: "2024",
  },
  {
    id: "cozie-bio",
    name: "Cozie Bio",
    url: "https://cozie-bio.com",
    displayUrl: "cozie-bio.com",
    description:
      "Site e-commerce pour une marque de produits bio : mise en avant des gammes et argumentaire produit.",
    category: "E-commerce",
    imageUrl: cozieBioImg,
    imageAlt: "Page d'accueil du site Cozie Bio",
    year: "2024",
  },
  {
    id: "best-business-laptop",
    name: "Best Business Laptop CG",
    url: "https://bestbusinesslaptopcg.com",
    displayUrl: "bestbusinesslaptopcg.com",
    description:
      "Site vitrine avec catalogue pour un importateur de matériel informatique. Les clients consultent les configurations disponibles et demandent un devis.",
    category: "Site vitrine",
    imageUrl: bestBusinessLaptopImg,
    imageAlt: "Page d'accueil du site Best Business Laptop CG",
    year: "2024",
  },
  {
    id: "glassesusa",
    name: "GlassesUSA",
    url: "https://glassesusa.com",
    displayUrl: "glassesusa.com",
    description:
      "Plateforme e-commerce de lunettes : catalogue produit riche, filtres avancés et essayage virtuel.",
    category: "E-commerce",
    imageUrl: glassesUsaImg,
    imageAlt: "Page d'accueil du site GlassesUSA",
    year: "2023",
  },
  {
    id: "fresha",
    name: "Fresha",
    url: "https://fresha.com",
    displayUrl: "fresha.com",
    description:
      "Plateforme de réservation en ligne pour instituts de beauté et bien-être, avec gestion d'agenda intégrée.",
    category: "Application web",
    imageUrl: freshaImg,
    imageAlt: "Page d'accueil de la plateforme Fresha",
    year: "2023",
  },
  {
    id: "motona-market",
    name: "Motona Market",
    url: "https://motonamarket.com",
    displayUrl: "motonamarket.com",
    description:
      "Marketplace dédiée à la vente de motos et pièces détachées entre particuliers et professionnels.",
    category: "E-commerce",
    imageUrl: motonaMarketImg,
    imageAlt: "Page d'accueil du site Motona Market",
    year: "2023",
  },
  {
    id: "verocongo",
    name: "Vero Congo",
    url: "https://verocongo.com",
    displayUrl: "verocongo.com",
    description:
      "Site vitrine présentant l'activité et les services de l'entreprise, avec formulaire de contact.",
    category: "Site vitrine",
    imageUrl: veroCongoImg,
    imageAlt: "Page d'accueil du site Vero Congo",
    year: "2023",
  },
];

export const differentiators: DifferentiationPoint[] = [
  {
    id: "accessibilite",
    title: "Accessibilité",
    description:
      "Un prix d'entrée clair et transparent (dès 230 $), sans négociation opaque.",
  },
  {
    id: "preuve",
    title: "Preuve par l'exemple",
    description:
      "Des réalisations réelles et vérifiables plutôt que des promesses abstraites.",
  },
  {
    id: "proximite",
    title: "Proximité",
    description:
      "Réponse rapide via WhatsApp Business, un contact humain identifié.",
  },
  {
    id: "hebergement-maintenance",
    title: "Hébergement & maintenance offerts",
    description:
      "1 an d'hébergement et de maintenance offert avec chaque site réalisé, sans frais cachés.",
  },
  {
    id: "referencement-seo",
    title: "Référencement inclus",
    description:
      "Chaque site est référencé pour que Google le trouve plus facilement dès sa mise en ligne.",
  },
  {
    id: "rapport-marketing",
    title: "Rapport marketing offert",
    description:
      "Un rapport gratuit pour vous aider à optimiser votre stratégie marketing à partir du site réalisé.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "tiagno-foko-darwin",
    name: "Tiagno Foko Darwin",
    role: "Développeur Fullstack & Fondateur",
    bio: "Fondateur de TYECK, il conçoit et développe l'ensemble des solutions web de l'agence, du back-end à l'interface finale livrée aux clients.",
    isFounder: true,
  },
  {
    id: "yemeli-kemeka-steave-russel",
    name: "Yemeli Kemeka Steave Russel",
    role: "Ingénieur IA, Développeur Fullstack & Co-fondateur",
    bio: "Co-fondateur de TYECK, il combine développement fullstack et intelligence artificielle pour intégrer des solutions plus intelligentes et plus performantes dans les projets de l'agence.",
    isFounder: true,
  },
  {
    id: "dabove-mefre-wilfried",
    name: "Dabove Mefre Wilfried",
    role: "Directeur du service marketing",
    bio: "Il pilote la stratégie marketing de TYECK et accompagne les clients dans la mise en valeur digitale de leur activité.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "frank-telecom",
    clientName: "Franck",
    company: "Frank Telecom",
    city: "Kinshasa",
    projectName: "Frank Telecom",
    message:
      "Depuis la mise en ligne de notre site, nos clients trouvent nos offres beaucoup plus facilement. TYECK a su traduire notre activité télécom en un site clair et professionnel.",
    rating: 5,
  },
  {
    id: "la-modeuse",
    clientName: "Sarah Kabongo",
    company: "La Modeuse",
    city: "Kinshasa",
    projectName: "La Modeuse",
    message:
      "Notre boutique en ligne est magnifique et surtout simple à gérer. Les commandes ont augmenté dès les premières semaines après le lancement.",
    rating: 5,
  },
  {
    id: "auto-ecole-erfolg",
    clientName: "Patrick Mvuezolo",
    company: "Auto-École Erfolg",
    city: "Brazzaville",
    projectName: "Auto-École Erfolg",
    message:
      "Le site a modernisé notre image auprès des futurs candidats. Les inscriptions en ligne nous font gagner un temps précieux au quotidien.",
    rating: 4,
  },
  {
    id: "boutique-kamga",
    clientName: "Chantal Kamga",
    company: "Boutique Kamga",
    city: "Kinshasa",
    projectName: "Boutique Kamga",
    message:
      "TYECK a compris nos besoins dès le premier échange. Le tunnel de commande est fluide et nos clients nous le disent souvent.",
    rating: 5,
  },
  {
    id: "cozie-bio",
    clientName: "Naomie Bemba",
    company: "Cozie Bio",
    city: "Brazzaville",
    projectName: "Cozie Bio",
    message:
      "Un site à l'image de notre marque : sobre, sain et rassurant. L'équipe a été à l'écoute jusque dans les moindres détails.",
    rating: 5,
  },
  {
    id: "best-business-laptop",
    clientName: "Roosvetl Foko",
    company: "Best Business Laptop CG",
    city: "Kinshasa",
    projectName: "Best Business Laptop CG",
    message:
      "Nos clients professionnels consultent le catalogue et demandent un devis directement en ligne. Ça a vraiment simplifié notre prospection.",
    rating: 5,
  },
  {
    id: "motona-market",
    clientName: "Grâce Mabiala",
    company: "Motona Market",
    city: "Brazzaville",
    projectName: "Motona Market",
    message:
      "La marketplace fonctionne exactement comme on l'imaginait. Le suivi et l'accompagnement après la mise en ligne ont fait toute la différence.",
    rating: 4,
  },
  {
    id: "verocongo",
    clientName: "Bienvenu Nsimba",
    company: "Vero Congo",
    city: "Kinshasa",
    projectName: "Vero Congo",
    message:
      "Un travail sérieux, livré dans les délais annoncés. Le rapport marketing offert nous a donné des pistes concrètes pour la suite.",
    rating: 5,
  },
];

export const contactInfo: ContactInfo = {
  whatsapp: "674023124",
  facebook: "https://www.facebook.com/share/19Mco5JHHQ/?mibextid=wwXIfr",
  address: "1ère rue Boulevard Lumumba n.17, Limete",
  city: "Kinshasa",
  hours: "8h - 18h",
};
