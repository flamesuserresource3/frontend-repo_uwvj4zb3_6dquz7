import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, Shield, Trophy, Moon } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Dark Cosmic Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/t7ourXf4CdN9XTF3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark theme overlays for readability (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Moon className="h-4 w-4 text-slate-200" />
          <span className="text-sm text-white/85">Dark Mode • Cosmic Tech Vibes</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Nightfall Wagers
          <span className="block bg-gradient-to-r from-rose-300 via-fuchsia-300 to-amber-200 bg-clip-text text-transparent">
            Red Nebula Casino
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          A dark, minimalist arena of chance. Glide through space-age tables, analyze odds,
          and chase luminous jackpots with discipline and style.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-fuchsia-600 px-6 py-3 text-white shadow-lg shadow-rose-600/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-rose-400">
            <Rocket className="h-5 w-5" /> Enter Dark Tables
          </button>
          <button className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            Learn the Odds
          </button>
        </div>

        <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: <Shield className="h-5 w-5 text-emerald-300" />, label: 'Secure & Fair' },
            { icon: <Trophy className="h-5 w-5 text-amber-300" />, label: 'Daily Jackpots' },
            { icon: <Star className="h-5 w-5 text-rose-300" />, label: 'VIP Rewards' },
            { icon: <Rocket className="h-5 w-5 text-fuchsia-300" />, label: 'Instant Payouts' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 p-3 backdrop-blur">
              {item.icon}
              <span className="text-sm text-white/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle scanline effect for unique dark theme texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background:repeating-linear-gradient(0deg,rgba(255,255,255,.15)_0px,rgba(255,255,255,.15)_1px,transparent_1px,transparent_3px)]" />
    </section>
  );
}
