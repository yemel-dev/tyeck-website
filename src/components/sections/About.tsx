import { motion } from 'framer-motion'
import { TeamCard } from '../ui/TeamCard'
import { companyInfo, services, differentiators, teamMembers } from '../../data/content'
import teamPhoto from '../../assets/images/team.jpg'

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="a-propos-title"
      className="bg-[#0B0B0D] py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        {/* Présentation de l'entreprise */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#C6F135]">
            À propos de nous
          </p>
          <h2
            id="a-propos-title"
            className="max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
          >
            Qui est {companyInfo.name} ?
          </h2>
          <p className="max-w-2xl text-[15px] leading-relaxed text-[#A1A1AA] md:text-base">
            {companyInfo.description}
          </p>
        </motion.header>

        {/* Ce que nous faisons (services en un coup d'œil) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mt-14 md:mt-16"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Ce que nous faisons
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-[#26262A] bg-[#141416] p-5"
              >
                <h4 className="text-base font-semibold text-white">{service.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pourquoi nous choisir */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="mt-14 md:mt-16"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Pourquoi nous choisir
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {differentiators.map((point) => (
              <div key={point.id} className="rounded-2xl border border-[#26262A] p-5">
                <h4 className="text-base font-semibold text-[#C6F135]">{point.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="mt-16 md:mt-20"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={teamPhoto}
              alt="Illustration de l'équipe TYECK au travail"
              className="h-48 w-full object-cover md:h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-transparent" />
          </div>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            L'équipe derrière {companyInfo.name}
          </h3>

          <ul className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {teamMembers.map((member) => (
              <li key={member.id}>
                <TeamCard member={member} />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About
