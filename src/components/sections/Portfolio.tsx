import { motion } from 'framer-motion'
import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../../data/content'

const Portfolio = () => {
  return (
    <section
      id="realisations"
      aria-labelledby="realisations-title"
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
            Nos Réalisations
          </p>
          <h2
            id="realisations-title"
            className="max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.5rem]"
          >
            Des projets qui parlent pour nous
          </h2>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#A1A1AA]">
            Sites vitrines, boutiques en ligne et applications métier livrés à Kinshasa et
            Brazzaville. Chaque projet est en ligne — allez le voir.
          </p>
        </motion.header>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="flex"
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
