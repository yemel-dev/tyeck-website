import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const featured = Boolean(project.featured)

  return (
    <article
      className={[
        'group relative flex h-full flex-col gap-5 rounded-2xl p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out',
        'hover:-translate-y-1 focus-within:-translate-y-1',
        featured
          ? 'bg-[#C6F135] text-[#0B0B0D] hover:shadow-[0_18px_40px_-18px_rgba(198,241,53,0.45)]'
          : 'border border-[#26262A] bg-[#141416] text-white hover:border-white/20 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)]',
      ].join(' ')}
    >
      <div
        className={[
          'relative aspect-video w-full overflow-hidden rounded-xl',
          featured ? 'bg-black/10' : 'bg-[#1c1c20]',
        ].join(' ')}
      >
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          // Placeholder tant qu'aucun screenshot réel n'est fourni pour ce projet
          <div className="flex h-full w-full items-center justify-center text-sm text-white/30">
            Capture à ajouter
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-3">
          <span
            className={[
              'inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em]',
              featured ? 'bg-black/10 text-[#0B0B0D]' : 'bg-[#1c1c20] text-[#A1A1AA]',
            ].join(' ')}
          >
            {project.category}
          </span>
          <span
            className={[
              'font-mono text-[11px] tracking-[0.12em]',
              featured ? 'text-[#0B0B0D]/70' : 'text-[#A1A1AA]',
            ].join(' ')}
          >
            {project.year}
          </span>
        </div>

        <h3 className="text-xl font-semibold leading-snug tracking-tight md:text-2xl">
          {project.name}
        </h3>

        <p
          className={[
            'text-sm leading-relaxed md:text-[15px]',
            featured ? 'text-[#0B0B0D]/80' : 'text-[#A1A1AA]',
          ].join(' ')}
        >
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            'mt-auto inline-flex w-fit items-center gap-2 rounded-md pt-3 text-sm font-medium outline-none',
            'focus-visible:ring-2 focus-visible:ring-offset-2',
            featured
              ? 'text-[#0B0B0D] focus-visible:ring-[#0B0B0D] focus-visible:ring-offset-[#C6F135]'
              : 'text-white focus-visible:ring-white focus-visible:ring-offset-[#141416]',
          ].join(' ')}
        >
          <span className="underline decoration-current/40 decoration-1 underline-offset-4 transition-colors duration-300 group-hover:decoration-current">
            Voir le site
          </span>
          <ArrowUpRight
            className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          <span className="sr-only">{`${project.name} — ${project.displayUrl} (nouvel onglet)`}</span>
        </a>
      </div>
    </article>
  )
}
