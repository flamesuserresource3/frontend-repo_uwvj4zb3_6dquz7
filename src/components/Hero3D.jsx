import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Shield, Trophy } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        {/* 3D Scene */}
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient to improve text contrast, doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="text-sm text-white/80">Premium Casino Experience</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Bet Bold. Win Bright.
          <span className="block bg-gradient-to-r from-rose-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
            Welcome to Red Nebula Casino
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          Step into a neon-lit arena of chance where strategy meets thrill. Play iconic tables,
          explore live odds, and climb the leaderboard with responsible, data-driven betting.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-fuchsia-600 px-6 py-3 text-white shadow-lg shadow-rose-600/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-rose-400">
            <Rocket className="h-5 w-5" /> Launch Tables
          </button>
          <button className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            Learn the Odds
          </button>
        </div>

        <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: <Shield className="h-5 w-5 text-emerald-400" />, label: 'Secure & Fair' },
            { icon: <Trophy className="h-5 w-5 text-amber-300" />, label: 'Daily Jackpots' },
            { icon: <Star className="h-5 w-5 text-rose-300" />, label: 'VIP Rewards' },
            { icon: <Rocket className="h-5 w-5 text-fuchsia-300" />, label: 'Instant Payouts' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
              {item.icon}
              <span className="text-sm text-white/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
