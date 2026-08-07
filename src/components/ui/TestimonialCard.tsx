import { Quote, Star } from 'lucide-react'
import type { Testimonial } from '../../types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = testimonial.rating ?? 5

  return (
    <article className="flex h-full flex-col gap-5 rounded-2xl border border-[#26262A] bg-[#141416] p-6 transition-colors duration-300 hover:border-white/20">
      <Quote className="size-6 text-[#C6F135]" aria-hidden="true" />

      <p className="flex-1 text-sm leading-relaxed text-[#A1A1AA] md:text-[15px]">
        {testimonial.message}
      </p>

      <div
        className="flex items-center gap-1"
        role="img"
        aria-label={`Note : ${rating} sur 5`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={
              index < rating
                ? 'size-4 fill-[#C6F135] text-[#C6F135]'
                : 'size-4 text-[#26262A]'
            }
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="flex items-center gap-3 border-t border-[#26262A] pt-5">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1c1c20] font-mono text-sm font-semibold text-white"
          aria-hidden="true"
        >
          {getInitials(testimonial.clientName)}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.clientName}</p>
          <p className="text-xs text-[#A1A1AA]">
            {testimonial.company ?? testimonial.projectName} · {testimonial.city}
          </p>
        </div>
      </div>
    </article>
  )
}
