import React from 'react';
import { Shield, Coins, Trophy, BarChart3 } from 'lucide-react';

export default function BettingConcepts() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Odds + House Edge */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold">Understand the Odds</h3>
            <p className="mt-2 text-white/70">
              Smart betting starts with the math. Compare payouts, probabilities, and house edge across games.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: 'Roulette (Even)', value: '48.65%', color: 'text-rose-300' },
                { label: 'Blackjack (Basic)', value: '49.5%+', color: 'text-emerald-300' },
                { label: 'Craps (Pass)', value: '49.3%', color: 'text-blue-300' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className={`text-xl font-semibold ${stat.color}`}>{stat.value}</div>
                  <div className="mt-1 text-xs text-white/60">Win Probability</div>
                  <div className="mt-2 text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-violet-500/20 p-4 text-sm text-white/80">
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-sky-300" /> Tip</div>
              Lower house edge means better long-run outcomes. Pair it with bankroll discipline.
            </div>
          </div>

          {/* Bankroll + Streaks */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold">Bankroll Strategy</h3>
            <p className="mt-2 text-white/70">Keep your session fun and sustainable with simple guardrails.</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Unit Size</span>
                  <Coins className="h-4 w-4 text-amber-300" />
                </div>
                <div className="mt-2 text-2xl font-semibold">2% of bankroll</div>
                <p className="mt-2 text-xs text-white/60">
                  Bet small, scale with wins, never chase losses.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Stop-Loss</span>
                  <Shield className="h-4 w-4 text-emerald-300" />
                </div>
                <div className="mt-2 text-2xl font-semibold">-20% per session</div>
                <p className="mt-2 text-xs text-white/60">Lock in fun, avoid tilt. Take breaks and reset.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="rounded-xl bg-gradient-to-r from-rose-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-600/30 transition hover:brightness-110">
                Generate Bet Plan
              </button>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <Trophy className="h-4 w-4 text-amber-300" />
                Consistency beats luck
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
