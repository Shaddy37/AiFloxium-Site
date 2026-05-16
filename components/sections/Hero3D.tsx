import HeroContent from './HeroContent';

export default function Hero3D() {
  return (
    <section className="relative h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_42%,rgba(248,244,255,1)_100%)]" />
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,#581C87_1px,transparent_0)] bg-[size:32px_32px]" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-plum/10 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.1),rgba(88,28,135,0)_68%)]" />
      <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-orange/15" />
      <div className="absolute left-[12%] top-[18%] h-40 w-40 rounded-full bg-brand-plum/10 blur-3xl" />
      <div className="absolute bottom-[14%] right-[10%] h-48 w-48 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.95)_100%)]" />
      <div className="relative z-10 h-full">
        <HeroContent />
      </div>
    </section>
  );
}
