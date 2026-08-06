import { motion } from 'framer-motion'
import {
  Zap,
  GraduationCap,
  Truck,
  LayoutDashboard,
  Cloud,
  Code2,
  ShieldCheck,
} from 'lucide-react'
import { FeaturedServiceCard } from '../services/FeaturedServiceCard'
import { CompactServiceCard } from '../services/CompactServiceCard'
import { EcommercePanels, WebAppPanels, MarketingPanels } from '../services/service-panels'

const featured = [
  {
    title: 'Sites Vitrines & E-commerce',
    description:
      'Des boutiques en ligne rapides et sécurisées qui convertissent vos visiteurs en clients.',
    panels: <EcommercePanels />,
  },
  {
    title: 'Applications Web',
    description:
      'Des interfaces web performantes et sur mesure pour piloter votre activité au quotidien.',
    panels: <WebAppPanels />,
  },
  {
    title: 'Service Marketing',
    description:
      'Des campagnes digitales ciblées pour développer votre visibilité et attirer plus de clients.',
    panels: <MarketingPanels />,
  },
]

const compact = [
  {
    icon: GraduationCap,
    title: 'Plateformes E-learning',
    description: 'Des espaces de formation en ligne fluides pour transmettre votre savoir.',
  },
  {
    icon: Truck,
    title: 'Plateformes de Livraison',
    description: 'Des solutions de commande et livraison pensées pour vos clients.',
  },
  {
    icon: LayoutDashboard,
    title: 'Applications de Gestion',
    description: 'Digitalisez et centralisez la gestion de votre activité.',
  },
  {
    icon: Cloud,
    title: 'Solutions SaaS',
    description: 'Des produits web évolutifs, prêts à grandir avec vous.',
  },
  {
    icon: Code2,
    title: 'Développement Sur Mesure',
    description: 'Des solutions uniques conçues pour vos besoins spécifiques.',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & Accompagnement',
    description: 'Un suivi continu pour un site toujours performant et sécurisé.',
  },
]

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#0B0B0D] px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* En-tête de section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
              <Zap className="h-3.5 w-3.5 text-[#F5C542]" />
              Services
            </span>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Des Solutions Qui Font Grandir Votre Entreprise.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col items-start gap-5 md:max-w-xs md:items-end md:text-right"
          >
            <p className="text-sm leading-relaxed text-gray-400">
              TYECK accompagne les PME, commerçants et entrepreneurs de Kinshasa et Brazzaville dans
              leur transformation digitale, de l&apos;idée à la mise en ligne.
            </p>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-b from-[#F5C542] to-[#D4AF37] px-6 py-2.5 text-sm font-semibold text-black transition-transform duration-200 hover:scale-[1.03]"
            >
              Démarrer un projet
            </a>
          </motion.div>
        </div>

        {/* Grille des services phares */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((s, i) => (
            <FeaturedServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              panels={s.panels}
              index={i}
            />
          ))}
        </div>

        {/* Grille des services compacts */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {compact.map((s, i) => (
            <CompactServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services