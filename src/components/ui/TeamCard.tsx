import type { TeamMember } from '../../types'

interface TeamCardProps {
  member: TeamMember
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

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-[#26262A] bg-[#141416] p-6 transition-colors duration-300 hover:border-white/20">
      <div className="flex items-center gap-4">
        <div
          className={[
            'flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-mono text-lg font-semibold',
            member.isFounder ? 'bg-[#C6F135] text-[#0B0B0D]' : 'bg-[#1c1c20] text-white',
          ].join(' ')}
          aria-hidden="true"
        >
          {getInitials(member.name)}
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-snug text-white">{member.name}</h3>
          <p className="text-sm text-[#A1A1AA]">{member.role}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-[#A1A1AA]">{member.bio}</p>
    </article>
  )
}
