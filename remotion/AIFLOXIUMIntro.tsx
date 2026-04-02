import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

const COLORS = {
  background: "#09090b",
  white: "#fafafa",
  zinc500: "#71717a",
  zinc400: "#a1a1aa",
  zinc600: "#52525b",
  zinc700: "#3f3f46",
};

const Font = () => (
  <style>{`
    @import url('https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500,400&display=swap');
    .font-clash { font-family: 'Clash Display', sans-serif; }
  `}</style>
);

const AnimatedGrid = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30, 450, 480], [0, 0.08, 0.08, 0], { extrapolateRight: "clamp" });
  
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      background: `radial-gradient(circle at 50% 50%, transparent 0%, ${COLORS.background} 70%)`,
      opacity,
    }} />
  );
};

const FloatingParticle = ({ index, delay }: { index: number; delay: number }) => {
  const frame = useCurrentFrame();
  const { height } = useVideoConfig();
  
  const y = interpolate(frame - delay, [0, 480], [height + 50, -50], { extrapolateRight: "clamp" });
  const opacity = interpolate(frame - delay, [0, 40, 440, 480], [0, 0.2, 0.2, 0]);
  
  if (opacity <= 0) return null;
  
  return (
    <div style={{
      position: "absolute",
      left: 180 + index * 280,
      top: y,
      width: 2,
      height: 2,
      borderRadius: "50%",
      background: COLORS.zinc500,
      opacity,
    }} />
  );
};

const PulseRing = ({ delay }: { delay: number }) => {
  const frame = useCurrentFrame();
  const progress = Math.max(0, frame - delay) / 80;
  const scale = 0.5 + progress * 1.2;
  const opacity = Math.max(0, 0.2 - progress * 0.2);
  
  return (
    <div style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: 300 * scale,
      height: 300 * scale,
      borderRadius: "50%",
      border: `1px solid rgba(255,255,255,${opacity})`,
    }} />
  );
};

const FadeIn = ({ children, delay, style = {} }: { children: React.ReactNode; delay: number; style?: React.CSSProperties }) => {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(
    Math.max(0, frame - delay),
    [0, 18, 45],
    [0, 1, 1],
    { extrapolateRight: "clamp" }
  );
  
  const y = interpolate(
    Math.max(0, frame - delay),
    [0, 18, 45],
    [20, 0, 0],
    { extrapolateRight: "clamp" }
  );
  
  return (
    <div style={{ ...style, opacity, transform: `translateY(${y}px)` }}>
      {children}
    </div>
  );
};

const SlideIn = ({ children, delay, index = 0 }: { children: React.ReactNode; delay: number; index?: number }) => {
  const frame = useCurrentFrame();
  const adjustedDelay = delay + index * 18;
  
  const opacity = interpolate(
    Math.max(0, frame - adjustedDelay),
    [0, 18, 45],
    [0, 1, 1],
    { extrapolateRight: "clamp" }
  );
  
  const x = interpolate(
    Math.max(0, frame - adjustedDelay),
    [0, 18, 45],
    [-50, 0, 0],
    { extrapolateRight: "clamp" }
  );
  
  return (
    <div style={{ opacity, transform: `translateX(${x}px)` }}>
      {children}
    </div>
  );
};

const SceneWrapper = ({ children, sceneName, frame, sceneStart }: { children: React.ReactNode; sceneName: string; frame: number; sceneStart: number }) => {
  const progress = interpolate(
    Math.max(0, frame - sceneStart),
    [0, 20],
    [0, 1],
    { extrapolateRight: "clamp" }
  );
  
  const y = (1 - progress) * 25;
  const scale = 0.95 + progress * 0.05;
  
  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%) translateY(${y}px) scale(${scale})`,
      textAlign: "center",
      width: "100%",
      opacity: progress,
    }}>
      {children}
    </div>
  );
};

const HOOKScene = ({ frame }: { frame: number }) => {
  const sceneStart = 0;
  const delay = frame - sceneStart;
  
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: 10 }}>
        <FadeIn delay={0}>
          <span className="font-clash" style={{ fontSize: 78, fontWeight: 700, color: COLORS.white, letterSpacing: "-0.03em" }}>STOP</span>
        </FadeIn>
      </div>
      <div style={{ marginBottom: 10 }}>
        <FadeIn delay={12}>
          <span className="font-clash" style={{ fontSize: 78, fontWeight: 700, background: "linear-gradient(135deg, #fff 0%, #71717a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.03em" }}>DOING</span>
        </FadeIn>
      </div>
      <div style={{ marginBottom: 14 }}>
        <FadeIn delay={24}>
          <span className="font-clash" style={{ fontSize: 78, fontWeight: 700, color: COLORS.white, letterSpacing: "-0.03em" }}>ROBOT</span>
        </FadeIn>
      </div>
      <div>
        <FadeIn delay={36}>
          <span className="font-clash" style={{ fontSize: 78, fontWeight: 700, background: "linear-gradient(135deg, #fff 50%, #a1a1aa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.03em" }}>WORK.</span>
        </FadeIn>
      </div>
    </div>
  );
};

const VALUEScene = ({ frame }: { frame: number }) => {
  const sceneStart = 70;
  const delay = frame - sceneStart;
  
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <FadeIn delay={0} style={{ marginBottom: 18 }}>
        <span className="font-clash" style={{ fontSize: 13, letterSpacing: "0.35em", color: COLORS.zinc500 }}>YOUR TEAM DESERVES BETTER</span>
      </FadeIn>
      
      <div style={{ marginBottom: 12 }}>
        <FadeIn delay={18}>
          <span className="font-clash" style={{ fontSize: 60, fontWeight: 700, color: COLORS.white }}>HIGH-LEVEL</span>
        </FadeIn>
      </div>
      <div style={{ marginBottom: 12 }}>
        <FadeIn delay={32}>
          <span className="font-clash" style={{ fontSize: 60, fontWeight: 700, color: COLORS.zinc500 }}>STRATEGY</span>
        </FadeIn>
      </div>
      <div style={{ marginBottom: 32 }}>
        <FadeIn delay={46}>
          <span className="font-clash" style={{ fontSize: 60, fontWeight: 700, color: COLORS.zinc400 }}>NOT SPREADSHEETS</span>
        </FadeIn>
      </div>
      
      <FadeIn delay={58}>
        <div style={{ display: "flex", justifyContent: "center", gap: 22 }}>
          <div style={{ padding: "14px 22px", borderRadius: 10, background: `${COLORS.white}05`, border: `1px solid ${COLORS.white}10` }}>
            <div className="font-clash" style={{ fontSize: 36, fontWeight: 700, color: COLORS.white }}>40+</div>
            <div style={{ fontSize: 9, color: COLORS.zinc500, letterSpacing: "0.1em", marginTop: 4 }}>HOURS SAVED/WEEK</div>
          </div>
          <div style={{ padding: "14px 22px", borderRadius: 10, background: `${COLORS.white}05`, border: `1px solid ${COLORS.white}10` }}>
            <div className="font-clash" style={{ fontSize: 36, fontWeight: 700, color: COLORS.white }}>80%</div>
            <div style={{ fontSize: 9, color: COLORS.zinc500, letterSpacing: "0.1em", marginTop: 4 }}>COST REDUCTION</div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

const BRANDScene = ({ frame }: { frame: number }) => {
  const sceneStart = 155;
  const delay = frame - sceneStart;
  
  return (
    <div style={{ textAlign: "center" }}>
      <FadeIn delay={0} style={{ marginBottom: 20 }}>
        <span className="font-clash" style={{ fontSize: 11, letterSpacing: "0.4em", color: COLORS.zinc600 }}>THE FUTURE OF BUSINESS IS AUTOMATED</span>
      </FadeIn>
      
      <FadeIn delay={18}>
        <h1 className="font-clash" style={{ fontSize: 95, fontWeight: 700, background: "linear-gradient(180deg, #fff 0%, #d4d4d8 40%, #71717a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.04em" }}>AIFLOXIUM</h1>
      </FadeIn>
      
      <FadeIn delay={32} style={{ marginTop: 18 }}>
        <div style={{ padding: "10px 22px", borderRadius: 30, background: `${COLORS.white}05`, border: `1px solid ${COLORS.white}12`, display: "inline-block" }}>
          <span className="font-clash" style={{ fontSize: 15, fontWeight: 500, color: COLORS.zinc400, letterSpacing: "0.2em" }}>AI AUTOMATION AGENCY</span>
        </div>
      </FadeIn>
    </div>
  );
};

const SERVICESScene = ({ frame }: { frame: number }) => {
  const sceneStart = 235;
  const delay = frame - sceneStart;
  
  const items = [
    { num: "01", text: "N8N WORKFLOWS", sub: "Connect every tool. Automate everything.", highlight: true },
    { num: "02", text: "VOICE AGENTS", sub: "AI that actually talks like a human. Closes deals 24/7.", highlight: true },
    { num: "03", text: "AUTONOMOUS AGENTS", sub: "Intelligent systems that think, decide, and execute.", highlight: false },
    { num: "04", text: "CLAUDE CODE BUILDS", sub: "Custom software. Built at the speed of thought.", highlight: false },
  ];
  
  return (
    <div style={{ width: "85%", maxWidth: 850, margin: "0 auto" }}>
      <FadeIn delay={0} style={{ marginBottom: 32, textAlign: "center" }}>
        <span className="font-clash" style={{ fontSize: 12, letterSpacing: "0.32em", color: COLORS.zinc500 }}>I BUILD SYSTEMS THAT NEVER SLEEP</span>
      </FadeIn>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {items.map((item, i) => (
          <SlideIn key={i} delay={8} index={i}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 18px", borderRadius: 10, background: item.highlight ? `${COLORS.white}07` : "transparent", border: `1px solid ${item.highlight ? COLORS.white : COLORS.zinc700}18` }}>
              <div style={{ width: 38, height: 38, borderRadius: 8, background: item.highlight ? `${COLORS.white}10` : `${COLORS.zinc700}18`, border: `1px solid ${item.highlight ? COLORS.white : COLORS.zinc600}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span className="font-clash" style={{ fontSize: 12, fontWeight: 700, color: item.highlight ? COLORS.white : COLORS.zinc500 }}>{item.num}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div className="font-clash" style={{ fontSize: 20, fontWeight: 600, color: item.highlight ? COLORS.white : COLORS.zinc400, letterSpacing: "0.05em" }}>{item.text}</div>
                <div style={{ fontSize: 11, color: COLORS.zinc500, marginTop: 2 }}>{item.sub}</div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>
    </div>
  );
};

const CTAScene = ({ frame }: { frame: number }) => {
  const sceneStart = 335;
  
  return (
    <div style={{ textAlign: "center" }}>
      <FadeIn delay={0} style={{ marginBottom: 26 }}>
        <span className="font-clash" style={{ fontSize: 52, fontWeight: 700, color: COLORS.white }}>READY TO</span>
      </FadeIn>
      
      <FadeIn delay={18} style={{ marginBottom: 38 }}>
        <span className="font-clash" style={{ fontSize: 65, fontWeight: 700, background: "linear-gradient(135deg, #fff 0%, #71717a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AUTOMATE?</span>
      </FadeIn>
      
      <FadeIn delay={36}>
        <div style={{ display: "inline-flex", padding: "12px 36px", background: COLORS.white, borderRadius: 50 }}>
          <span className="font-clash" style={{ fontSize: 12, fontWeight: 700, color: COLORS.background, letterSpacing: "0.12em" }}>BOOK SYSTEMS AUDIT</span>
        </div>
      </FadeIn>
      
      <FadeIn delay={50} style={{ marginTop: 26 }}>
        <span className="font-clash" style={{ fontSize: 12, color: COLORS.zinc500, letterSpacing: "0.1em" }}>aifloxium.online</span>
      </FadeIn>
    </div>
  );
};

const FINALScene = ({ frame }: { frame: number }) => {
  const sceneStart = 405;
  
  return (
    <div style={{ textAlign: "center" }}>
      <FadeIn delay={0}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", border: `2px solid ${COLORS.white}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
          <span className="font-clash" style={{ fontSize: 26, fontWeight: 700, color: COLORS.white }}>A</span>
        </div>
      </FadeIn>
      
      <FadeIn delay={14} style={{ marginTop: 20 }}>
        <div className="font-clash" style={{ fontSize: 18, fontWeight: 600, color: COLORS.white, letterSpacing: "0.12em" }}>AIFLOXIUM</div>
      </FadeIn>
      
      <FadeIn delay={24} style={{ marginTop: 8 }}>
        <div className="font-clash" style={{ fontSize: 10, color: COLORS.zinc500, letterSpacing: "0.3em" }}>AI AUTOMATION AGENCY</div>
      </FadeIn>

      {frame > 460 && (
        <div style={{ position: "absolute", inset: 0, background: COLORS.background, opacity: interpolate(frame - 460, [0, 20], [0, 1]) }} />
      )}
    </div>
  );
};

export const AIFLOXIUMIntro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scenes = [
    { start: 0, end: 80, name: "HOOK" },
    { start: 75, end: 165, name: "VALUE" },
    { start: 160, end: 245, name: "BRAND" },
    { start: 240, end: 345, name: "SERVICES" },
    { start: 340, end: 415, name: "CTA" },
    { start: 410, end: 480, name: "FINAL" },
  ];

  const currentSceneIndex = scenes.findIndex(s => frame >= s.start && frame < s.end);
  const currentScene = scenes[currentSceneIndex >= 0 ? currentSceneIndex : 0];

  const getSceneContent = () => {
    switch (currentScene.name) {
      case "HOOK": return <HOOKScene frame={frame} />;
      case "VALUE": return <VALUEScene frame={frame} />;
      case "BRAND": return <BRANDScene frame={frame} />;
      case "SERVICES": return <SERVICESScene frame={frame} />;
      case "CTA": return <CTAScene frame={frame} />;
      case "FINAL": return <FINALScene frame={frame} />;
      default: return null;
    }
  };

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.background, overflow: "hidden" }}>
      <Font />
      <AnimatedGrid />
      
      {[0, 1, 2, 3].map((i) => (
        <FloatingParticle key={i} index={i} delay={i * 100} />
      ))}
      
      <PulseRing delay={0} />
      <PulseRing delay={50} />
      <PulseRing delay={100} />

      <SceneWrapper sceneName={currentScene.name} frame={frame} sceneStart={currentScene.start}>
        {getSceneContent()}
      </SceneWrapper>
    </AbsoluteFill>
  );
};

export default AIFLOXIUMIntro;