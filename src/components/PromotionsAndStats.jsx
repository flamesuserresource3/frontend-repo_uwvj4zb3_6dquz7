import React from 'react';
import { TrendingUp, Users, Crown, Gift, Clock, Coins } from 'lucide-react';

export default function PromotionsAndStats() {
  const stats = [
    { label: 'Players Online', value: '12,487', icon: <Users className="h-4 w-4 text-sky-300" /> },
    { label: 'Payout Last 24h', value: '$1.2M', icon: <Coins className="h-4 w-4 text-amber-300" /> },
    { label: 'Top Multiplier', value: 'x1,250', icon: <TrendingUp className="h-4 w-4 text-emerald-300" /> },
  ];

  const faqs = [
    {
      q: 'Is it fair and secure?',
      a: 'Yes. We use audited RNG, on-chain proofs for fairness where applicable, and bank-grade encryption.'
    },
    {
      q: 'How fast are withdrawals?',
      a: 'Most withdrawals are processed instantly. Larger amounts may require quick verification.'
    },
    {
      q: 'Any tips for beginners?',
      a: 'Start with low-volatility games, learn basic strategy, and set a session budget.'
    }
  ];

  return (
    <section className="relative bg-neutral-950 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Promo banner */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-rose-600/30 via-fuchsia-600/30 to-violet-600/30 p-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                <Clock className="h-4 w-4 text-white/80" /> Limited-Time Event
              </div>
              <h3 className="mt-3 text-2xl font-semibold">High-Roller Weekend</h3>
              <p className="mt-1 text-white/80">Double comp points, boosted jackpots, and surprise mystery boxes.</p>
            </div>
            <button className="w-full rounded-xl bg-white/90 px-5 py-3 text-sm font-medium text-black transition hover:bg-white sm:w-auto">
              <Gift className="mr-2 inline-block h-4 w-4" /> Claim Bonuses
            </button>
          </div>
        </div>

        {/* Live stats + leaderboard tease */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <h4 className="text-lg font-semibold">Live Stats</h4>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/70">{s.label}</span>
                    {s.icon}
                  </div>
                  <div className="mt-2 text-2xl font-semibold">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur lg:col-span-2">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Leaderboard Highlights</h4>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                <Crown className="h-4 w-4 text-amber-300" /> Top 10 updated hourly
              </span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-fuchsia-500 text-sm font-semibold">
                        #{i}
                      </div>
                      <div>
                        <div className="text-sm font-medium">Player{i}XYZ</div>
                        <div className="text-xs text-white/60">Win Streak {Math.floor(Math.random()*7)+3}</div>
                      </div>
                    </div>
                    <div className="text-lg font-semibold">${(Math.random()*8000+2000).toFixed(0)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <summary className="cursor-pointer list-none text-sm font-medium text-white/90">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
