import React from 'react';
import Hero3D from './components/Hero3D';
import GameGrid from './components/GameGrid';
import BettingConcepts from './components/BettingConcepts';
import PromotionsAndStats from './components/PromotionsAndStats';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Section 1: 3D Hero */}
      <Hero3D />

      {/* Section 2-3: Games grid with promo strip */}
      <GameGrid />

      {/* Section 4-5: Betting education and bankroll strategy */}
      <BettingConcepts />

      {/* Section 6-8: Promotions, live stats, leaderboard, FAQ */}
      <PromotionsAndStats />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="text-lg font-semibold">Red Nebula Casino</div>
              <p className="mt-1 text-sm text-white/60">Please play responsibly. 18+ only. Know your limits.</p>
            </div>
            <div className="text-sm text-white/60">© {new Date().getFullYear()} Red Nebula. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
