import type { CSSProperties } from 'react'

/**
 * ArcGlow
 * Deux grands cercles éclairés uniquement sur leur bord intérieur,
 * formant un effet "sablier" qui se rejoint en un point lumineux central.
 * Pur CSS (gradients), pas d'image, pas de flou sur les arcs eux-mêmes.
 *
 * IMPORTANT : ancré sur h-screen (hauteur de l'écran) plutôt que sur la
 * hauteur totale de son parent (inset-0). Sans ça, plus le contenu de la
 * section grandit (texte + image + barre en dessous), plus le point de
 * jonction se déplace et peut sortir de la zone visible en haut.
 *
 * Utilisation : à placer en tout premier enfant d'un conteneur `relative`,
 * le reste du contenu du Hero doit avoir `relative z-10`.
 */
const ArcGlow = () => {
  const size = 'clamp(760px, 165vw, 2200px)'

  const rim =
    'radial-gradient(circle at center, ' +
    'rgba(245,197,66,0) 55%, ' +
    'rgba(212,175,55,0.10) 82%, ' +
    'rgba(212,175,55,0.45) 92%, ' +
    '#D4AF37 96.5%, ' +
    '#F5C542 98.8%, ' +
    'rgba(245,197,66,0.55) 99.6%, ' +
    'rgba(245,197,66,0) 100%)'

  const circleBase: CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundImage: rim,
    left: '50%',
    top: '50%',
    position: 'absolute',
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-0 right-0 h-[560px] sm:h-[680px] lg:h-[780px] z-0 overflow-hidden"
      style={{ backgroundColor: '#0B0B0D' }}
    >
      {/* Sphère du haut */}
      <div
        style={{
          ...circleBase,
          transform: 'translate(-50%, calc(-100% + 3px))',
        }}
      />

      {/* Sphère du bas */}
      <div
        style={{
          ...circleBase,
          transform: 'translate(-50%, -3px)',
        }}
      />

      {/* Point de jonction lumineux central */}
      <div
        className="absolute left-1/2 top-1/2 blur-md"
        style={{
          width: 'min(48vw, 480px)',
          height: 'min(11vw, 100px)',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(ellipse at center, #FFF6D0 0%, #FFD966 35%, rgba(245,197,66,0.32) 62%, rgba(245,197,66,0) 78%)',
        }}
      />

      {/* Halo chaud diffus sous le point central */}
      <div
        className="absolute left-1/2 top-1/2 blur-3xl"
        style={{
          width: 'min(75vw, 780px)',
          height: 'min(28vw, 260px)',
          transform: 'translate(-50%, -42%)',
          background:
            'radial-gradient(ellipse at center, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 72%)',
        }}
      />
    </div>
  )
}

export default ArcGlow