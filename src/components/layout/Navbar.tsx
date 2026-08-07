import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo/tyeck-logo.svg'
import { contactInfo } from '../../data/content'

const whatsappUrl = `https://wa.me/243${contactInfo.whatsapp}`

const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-20 w-full"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        {/* Logo seul, responsive */}
        <a href="#home" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="TYECK"
            className="h-20 w-auto sm:h-30 lg:h-30 object-contain"
          />
        </a>

        {/* Nav pill centrale — visible seulement à partir de md */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-sm">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={
                index === 0
                  ? 'text-sm font-medium text-black bg-white rounded-full px-4 py-1.5 transition-all'
                  : 'text-sm font-medium text-gray-300 hover:text-white px-4 py-1.5 transition-colors'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA droite — visible seulement à partir de sm */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white text-[#0B0B0D] font-semibold text-sm hover:scale-105 transition-transform duration-300"
        >
          Nous contacter
        </a>

        {/* Bouton hamburger — visible uniquement sur mobile/tablette (< md) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white shrink-0"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Panneau mobile déroulant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0B0B0D]/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    index === 0
                      ? 'text-sm font-medium text-black bg-white rounded-full px-4 py-2.5 text-center'
                      : 'text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full px-4 py-2.5 text-center transition-colors'
                  }
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-2.5 rounded-full bg-white text-[#0B0B0D] font-semibold text-sm text-center"
              >
                Nous contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar