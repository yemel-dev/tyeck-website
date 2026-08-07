import { motion } from 'framer-motion'
import { ShoppingCart, TrendingUp, Users, Activity, Megaphone } from 'lucide-react'

const float = (delay = 0) => ({
  animate: { y: [0, -6, 0] },
  transition: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' as const, delay },
})

const glass =
  'rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]'

/* ---------------- Carte 1 : Sites Vitrines & E-commerce ---------------- */
export function EcommercePanels() {
  const products = ['230$', '270$', '300$']
  return (
    <div className="absolute inset-0">
      {/* Mini navigateur */}
      <motion.div {...float(0)} className={`absolute left-6 top-10 w-[78%] p-3 ${glass}`}>
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <div className="ml-2 flex-1 rounded-md border border-white/10 bg-black/30 px-2 py-1 text-[10px] text-white/40">
            tyeck-shop.cd
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {products.map((p, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-black/25 p-2">
              <div className="mb-2 h-10 rounded-md bg-gradient-to-br from-[#F5C542]/25 to-[#D4AF37]/5" />
              <p className="text-[9px] font-medium text-[#F5C542]">{p}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bulle panier */}
      <motion.div
        {...float(1.2)}
        className={`absolute bottom-8 right-6 flex items-center gap-2 px-3 py-2 ${glass}`}
      >
        <ShoppingCart className="h-4 w-4 text-[#F5C542]" />
        <span className="text-[11px] font-medium text-white">Panier</span>
        <span className="text-[11px] text-white/50">3 articles</span>
      </motion.div>
    </div>
  )
}

/* ---------------- Carte 2 : Applications Web ---------------- */
export function WebAppPanels() {
  return (
    <div className="absolute inset-0">
      {/* Dashboard */}
      <motion.div {...float(0.3)} className={`absolute left-6 top-9 flex w-[80%] gap-2 p-3 ${glass}`}>
        <div className="flex flex-col items-center gap-3 rounded-lg bg-black/30 px-2 py-3">
          {[Activity, Users, TrendingUp].map((Icon, i) => (
            <div
              key={i}
              className={`flex h-7 w-7 items-center justify-center rounded-md ${
                i === 0 ? 'bg-[#F5C542]/20 text-[#F5C542]' : 'text-white/40'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
            </div>
          ))}
        </div>
        <div className="flex-1">
          <div className="mb-2 rounded-lg border border-white/10 bg-black/25 p-2">
            <p className="text-[9px] text-white/50">Utilisateurs actifs</p>
            <div className="flex items-end justify-between">
              <span className="text-sm font-semibold text-white">2 400</span>
              <span className="text-[10px] font-medium text-[#F5C542]">+12%</span>
            </div>
          </div>
          {/* mini graphique */}
          <div className="rounded-lg border border-white/10 bg-black/25 p-2">
            <svg viewBox="0 0 100 34" className="h-9 w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5C542" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#F5C542" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 26 L20 20 L40 24 L60 12 L80 16 L100 6" fill="none" stroke="#F5C542" strokeWidth="1.5" />
              <path d="M0 26 L20 20 L40 24 L60 12 L80 16 L100 6 L100 34 L0 34 Z" fill="url(#lc)" />
            </svg>
          </div>
        </div>
      </motion.div>

      <motion.div
        {...float(1.5)}
        className={`absolute bottom-8 right-6 flex items-center gap-2 px-3 py-2 ${glass}`}
      >
        <TrendingUp className="h-4 w-4 text-[#F5C542]" />
        <span className="text-[11px] font-medium text-white">Croissance +8%</span>
      </motion.div>
    </div>
  )
}

/* ---------------- Carte 3 : Service Marketing ---------------- */
export function MarketingPanels() {
  return (
    <div className="absolute inset-0">
      {/* Panneau campagne */}
      <motion.div {...float(0.6)} className={`absolute left-6 top-10 w-[78%] p-3 ${glass}`}>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Megaphone className="h-3.5 w-3.5 text-[#F5C542]" />
            <span className="text-[11px] font-medium text-white">Campagne Ads</span>
          </div>
          <span className="rounded-full border border-[#F5C542]/40 bg-[#F5C542]/15 px-2 py-0.5 text-[9px] font-semibold text-[#F5C542]">
            Active
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-white/10 bg-black/25 p-2">
            <p className="text-[8px] text-white/40">Impressions</p>
            <p className="text-[11px] font-semibold text-white">128K</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/25 p-2">
            <p className="text-[8px] text-white/40">Clics</p>
            <p className="text-[11px] font-semibold text-white">4,2K</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/25 p-2">
            <p className="text-[8px] text-white/40">CTR</p>
            <p className="text-[11px] font-semibold text-[#F5C542]">3,3%</p>
          </div>
        </div>
        {/* mini graphique à barres */}
        <div className="mt-2 flex h-8 items-end gap-1 rounded-lg border border-white/10 bg-black/25 p-2">
          {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-[#D4AF37]/70 to-[#F5C542]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      {/* Bulle portée */}
      <motion.div
        {...float(1.8)}
        className={`absolute bottom-8 right-6 flex items-center gap-2 px-3 py-2 ${glass}`}
      >
        <TrendingUp className="h-4 w-4 text-[#F5C542]" />
        <span className="text-[11px] font-medium text-white">Portée</span>
        <span className="text-[11px] text-[#F5C542]">+24%</span>
      </motion.div>
    </div>
  )
}