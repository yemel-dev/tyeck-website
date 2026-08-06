import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Navbar from '../layout/Navbar'
import ArcGlow from '../ui/ArcGlow'
import { projects } from '../../data/content'
import teamPhoto from '../../assets/images/team.jpg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

const Hero = () => {
  return (
    <section className="relative w-full h-[100dvh] bg-[#0B0B0D] overflow-hidden flex flex-col">
      {/* Effet double-arc doré */}
      <ArcGlow />

      <Navbar />

      {/* Titre seul en haut (le sous-titre a été déplacé plus bas, dans la zone image) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 shrink-0 text-center max-w-4xl mx-auto px-4 pt-28 sm:pt-32 pb-8"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-medium mb-5"
        >
          AGENCE DIGITALE — KINSHASA & BRAZZAVILLE
        </motion.p>

        <motion.h1 variants={itemVariants}>
          <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Votre présence digitale,
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            notre mission.
          </span>
        </motion.h1>
      </motion.div>

      {/* Zone image centrale : occupe tout l'espace restant sous le titre */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 w-full flex-1 min-h-0"
      >
        <div className="relative w-full h-full">
          <img
            src={teamPhoto}
            alt="Équipe TYECK au travail"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-[#0B0B0D]" />

          {/* Sous-titre déplacé ici, dans la zone verte (haut de l'image) */}
          {/* <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 z-10 w-full text-center text-sm sm:text-xl text-white font-semibold max-w-xs sm:max-w-2xl mx-auto leading-relaxed px-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            TYECK conçoit des sites web, applications et boutiques en ligne
            modernes, rapides et sécurisées pour les entreprises de Kinshasa
            et Brazzaville.
          </motion.p> */}

          {/* Bouton scroll ancré en BAS de l'image (jamais au centre) : ne rencontre jamais le texte du dessus, peu importe sa longueur sur petit écran */}
          <motion.a
            href="#services"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-24 sm:bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Défiler vers les services"
          >
            <ArrowDown className="text-white" size={18} />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute bottom-0 left-0 right-0 pb-8 px-4"
          >
            <p className="text-center text-xs sm:text-sm text-gray-300 uppercase tracking-widest mb-4">
              Ils nous font confiance
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 opacity-80">
              {projects.map((project) => (
                <span
                  key={project.id}
                  className="text-gray-200 text-sm sm:text-base font-medium"
                >
                  {project.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero