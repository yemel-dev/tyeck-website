import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Clock, Send } from 'lucide-react'
import { contactInfo } from '../../data/content'

// Numéro WhatsApp au format international (RDC : +243), sans le 0 initial local
const whatsappInternational = `243${contactInfo.whatsapp}`
const whatsappBaseUrl = `https://wa.me/${whatsappInternational}`

const Contact = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const text = `Bonjour TYECK, je m'appelle ${name || '—'}.\n\n${message}`
    const url = `${whatsappBaseUrl}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-[#0B0B0D] py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#C6F135]">
            Contact
          </p>
          <h2
            id="contact-title"
            className="max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
          >
            Discutons de votre projet
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#A1A1AA]">
            Décrivez-nous votre besoin, nous vous répondons rapidement sur WhatsApp — pas de
            formulaire compliqué, pas d'attente inutile.
          </p>
        </motion.header>

        <div className="mt-14 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          {/* Colonne infos de contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col gap-4"
          >
            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-[#C6F135] p-5 text-[#0B0B0D] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B0B0D]/10">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.1em]">
                  WhatsApp Business
                </span>
                <span className="block text-sm text-[#0B0B0D]/80">
                  +{whatsappInternational.slice(0, 3)} {whatsappInternational.slice(3)}
                </span>
              </span>
            </a>

            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#26262A] bg-[#141416] p-5 transition-colors duration-300 hover:border-white/20"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1c1c20]">
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 text-[#C6F135]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.523 1.492-3.917 3.777-3.917 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z" />
                </svg>
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.1em] text-white">
                  Facebook
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-[#A1A1AA]">
                  Suivez notre page et nos actualités
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-[#26262A] bg-[#141416] p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1c1c20]">
                <MapPin className="size-5 text-[#C6F135]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.1em] text-white">
                  Adresse
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-[#A1A1AA]">
                  {contactInfo.address}, {contactInfo.city}
                </span>
              </span>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[#26262A] bg-[#141416] p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1c1c20]">
                <Clock className="size-5 text-[#C6F135]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.1em] text-white">
                  Horaires
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-[#A1A1AA]">
                  {contactInfo.hours}
                </span>
              </span>
            </div>
          </motion.div>

          {/* Colonne formulaire */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-col gap-5 rounded-2xl border border-[#26262A] bg-[#141416] p-6 md:p-8"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-sm font-medium text-white">
                Votre nom
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ex : Jean Mokoko"
                className="rounded-xl border border-[#26262A] bg-[#0B0B0D] px-4 py-3 text-sm text-white placeholder:text-[#A1A1AA]/60 outline-none transition-colors focus:border-[#C6F135]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-white">
                Votre message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Décrivez votre projet : type de site, délai souhaité, budget approximatif..."
                className="resize-none rounded-xl border border-[#26262A] bg-[#0B0B0D] px-4 py-3 text-sm text-white placeholder:text-[#A1A1AA]/60 outline-none transition-colors focus:border-[#C6F135]"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#C6F135] px-6 py-3.5 text-sm font-semibold text-[#0B0B0D] transition-transform duration-300 hover:scale-[1.02]"
            >
              Envoyer sur WhatsApp
              <Send className="size-4" aria-hidden="true" />
            </button>

            <p className="text-xs leading-relaxed text-[#A1A1AA]">
              En cliquant sur "Envoyer", WhatsApp s'ouvre avec votre message pré-rempli — vous
              gardez la main pour l'envoyer.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
