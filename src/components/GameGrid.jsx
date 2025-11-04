import React from 'react';
import { Trophy, Gift, Coins, Shield } from 'lucide-react';

const games = [
  {
    title: 'Roulette Orbit',
    description: 'Bet on red, black, or numbers. Track hot streaks with live heatmaps.',
    accent: 'from-rose-500 to-orange-400',
    badge: 'Hot Table',
  },
  {
    title: 'Blackjack Pro',
    description: 'Beat the dealer with skillful play. Card counting insights built-in.',
    accent: 'from-fuchsia-500 to-violet-500',
    badge: 'Skill Edge',
  },
  {
    title: 'Craps Alley',
    description: 'High-energy dice with smart risk controls and odds-based tips.',
    accent: 'from-emerald-500 to-teal-400',
    badge: 'High Energy',
  },
  {
    title: 'Slots: Neon Reels',
    description: 'Scatter wins, free spins, and jackpots with cinematic spins.',
    accent: 'from-amber-500 to-pink-500',
    badge: 'Jackpot',
  },
];

export default function GameGrid() {
  return (
    <section className="relative bg-neutral-950 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Choose Your Table</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Each game offers unique strategies, volatility, and payout profiles. Explore them all.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Coins className="h-4 w-4 text-amber-300" />
            <span className="text-sm text-white/80">Comp points on every bet</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((g, i) => (
            <article
              key={g.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-5 shadow-xl backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${g.accent}`} />
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{g.badge}</span>
                <Trophy className="h-5 w-5 text-white/40" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm text-white/70">{g.description}</p>

              <div className="mt-6 flex items-center justify-between">
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white/90 transition hover:bg-white/15">
                  Enter Table
                </button>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Shield className="h-4 w-4 text-emerald-400" /> Fair Play
                </div>
              </div>

              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-white/10 to-white/0 blur-2xl transition-opacity group-hover:opacity-80" />
            </article>
          ))}
        </div>

        {/* Promo strip */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="flex animate-marquee items-center gap-10 whitespace-nowrap py-3 px-4 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><Gift className="h-4 w-4 text-pink-300" /> 100% Match Bonus on First Deposit</span>
            <span className="inline-flex items-center gap-2"><Trophy className="h-4 w-4 text-amber-300" /> Daily Leaderboards with Cash Prizes</span>
            <span className="inline-flex items-center gap-2"><Coins className="h-4 w-4 text-emerald-300" /> Zero-Delay Withdrawals</span>
            <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-blue-300" /> Provably Fair RNG</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>
    </section>
  );
}
