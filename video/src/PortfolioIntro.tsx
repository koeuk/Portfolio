import React from "react";
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Img,
} from "remotion";
import { loadFont as loadArchivo } from "@remotion/google-fonts/Archivo";
import { loadFont as loadInstrument } from "@remotion/google-fonts/InstrumentSans";

const { fontFamily: archivo } = loadArchivo("normal", {
  weights: ["700", "800"],
});
const { fontFamily: instrument } = loadInstrument("normal", {
  weights: ["400", "500", "600"],
});

const INK = "#0d0d0d";
const GREEN = "#22c55e";
const EASE = Easing.bezier(0.22, 1, 0.36, 1);

export const TOTAL_DURATION = 390;

// ── helpers ────────────────────────────────────────────────

const rise = (frame: number, delay: number, dur = 22) => {
  const t = interpolate(frame, [delay, delay + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  return {
    opacity: t,
    transform: `translateY(${(1 - t) * 24}px)`,
  };
};

// ── shared bits ────────────────────────────────────────────

const Pill: React.FC<{
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ style, children }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 26px",
      borderRadius: 9999,
      fontFamily: instrument,
      fontSize: 22,
      fontWeight: 500,
      color: INK,
      background: "#fff",
      border: "1px solid rgba(13,13,13,0.12)",
      ...style,
    }}
  >
    {children}
  </div>
);

const StatusDot: React.FC = () => {
  const frame = useCurrentFrame();
  // pulsing ring like the site's status dot
  const cycle = (frame % 72) / 72;
  const ring = interpolate(cycle, [0, 0.7, 1], [0, 14, 14]);
  const ringOpacity = interpolate(cycle, [0, 0.7, 1], [0.55, 0, 0]);
  return (
    <span
      style={{
        width: 12,
        height: 12,
        borderRadius: 9999,
        background: GREEN,
        boxShadow: `0 0 0 ${ring}px rgba(34,197,94,${ringOpacity})`,
      }}
    />
  );
};

const ArrowIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg viewBox="0 0 16 16" style={{ width: size, height: size }}>
    <path
      d="M4 12L12 4M12 4H6M12 4V10"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ICON_PATHS: Record<string, string> = {
  GitHub:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  Telegram:
    "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
  Facebook:
    "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
};

const SocialIcon: React.FC<{ name: string; size?: number }> = ({
  name,
  size = 20,
}) => (
  <svg viewBox="0 0 24 24" style={{ width: size, height: size }}>
    <path d={ICON_PATHS[name]} fill="currentColor" />
  </svg>
);

// ── Scene 1: hero ──────────────────────────────────────────

const NAME_FIRST = [..."KOEUK"];
const NAME_LAST = [..."KOS"];
const LETTER_START = 18;
const LETTER_STAGGER = 2;

const Letter: React.FC<{
  char: string;
  index: number;
  outline: boolean;
}> = ({ char, index, outline }) => {
  const frame = useCurrentFrame();
  const delay = LETTER_START + index * LETTER_STAGGER;
  const t = interpolate(frame, [delay, delay + 26], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  const blur = interpolate(t, [0, 0.6], [8, 0], {
    extrapolateRight: "clamp",
  });
  return (
    <span
      style={{
        display: "inline-block",
        opacity: t,
        transform: `translateY(${(1 - t) * 0.4}em) scale(${0.94 + t * 0.06})`,
        filter: `blur(${blur}px)`,
        ...(outline
          ? { color: "transparent", WebkitTextStroke: `5px ${INK}` }
          : { color: INK }),
      }}
    >
      {char}
    </span>
  );
};

const HeroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const portraitT = spring({
    frame: frame - 46,
    fps,
    config: { damping: 100, stiffness: 80 },
  });

  // slow breathing zoom while the hero holds
  const breathe = interpolate(frame, [0, 225], [1, 1.025]);

  // exit: whole hero lifts away
  const exitT = interpolate(frame, [203, 225], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });

  const socials = ["GitHub", "LinkedIn", "Telegram", "Facebook"];

  return (
    <AbsoluteFill
      style={{
        background: "#fff",
        opacity: 1 - exitT,
        transform: `translateY(${exitT * -70}px) scale(${breathe})`,
      }}
    >
      {/* top row */}
      <div
        style={{
          position: "absolute",
          top: 56,
          left: 80,
          right: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={rise(frame, 6)}>
          <Pill
            style={{
              boxShadow: "0 10px 28px -16px rgba(13,13,13,0.4)",
              fontSize: 21,
            }}
          >
            <StatusDot />
            Available for New Project
          </Pill>
        </div>
        <div style={rise(frame, 10)}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "16px 36px",
              borderRadius: 9999,
              fontFamily: instrument,
              fontSize: 22,
              fontWeight: 600,
              color: "#fff",
              background: INK,
            }}
          >
            Let's Talk
          </div>
        </div>
      </div>

      {/* display name */}
      <div
        style={{
          position: "absolute",
          top: 170,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: "0.14em",
          fontFamily: archivo,
          fontWeight: 800,
          fontSize: 268,
          letterSpacing: "-0.03em",
          lineHeight: 0.86,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        <span>
          {NAME_FIRST.map((c, i) => (
            <Letter key={`f${i}`} char={c} index={i} outline />
          ))}
        </span>
        <span>
          {NAME_LAST.map((c, i) => (
            <Letter
              key={`l${i}`}
              char={c}
              index={NAME_FIRST.length + i}
              outline={false}
            />
          ))}
        </span>
      </div>

      {/* portrait */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          height: "68%",
          opacity: portraitT,
          transform: `translateY(${(1 - portraitT) * 60}px)`,
        }}
      >
        <Img
          src={staticFile("koeuk-profile.png")}
          style={{
            height: "100%",
            objectFit: "contain",
            objectPosition: "bottom center",
            WebkitMaskImage:
              "linear-gradient(180deg, #000 82%, transparent 100%)",
            maskImage: "linear-gradient(180deg, #000 82%, transparent 100%)",
          }}
        />
      </div>

      {/* bottom-left intro */}
      <div
        style={{
          position: "absolute",
          left: 80,
          bottom: 72,
          maxWidth: 560,
          ...rise(frame, 56),
        }}
      >
        <div
          style={{
            fontFamily: archivo,
            fontWeight: 700,
            fontSize: 46,
            letterSpacing: "-0.02em",
            color: INK,
          }}
        >
          Web Developer
        </div>
        <div
          style={{
            fontFamily: instrument,
            marginTop: 14,
            fontSize: 23,
            lineHeight: 1.55,
            color: "rgba(13,13,13,0.55)",
          }}
        >
          Building web applications with Laravel, Vue.js &amp; Nuxt — based in
          Phnom Penh, Cambodia.
        </div>
        <div
          style={{
            marginTop: 26,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "18px 34px",
            borderRadius: 9999,
            fontFamily: instrument,
            fontSize: 23,
            fontWeight: 600,
            color: "#fff",
            background: INK,
          }}
        >
          Let's collaborate
          <ArrowIcon />
        </div>
      </div>

      {/* bottom-right socials */}
      <div
        style={{
          position: "absolute",
          right: 80,
          bottom: 72,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 14,
        }}
      >
        {socials.map((s, i) => (
          <div key={s} style={rise(frame, 62 + i * 3)}>
            <Pill style={{ fontSize: 20, padding: "12px 24px" }}>
              <SocialIcon name={s} size={18} />
              {s}
            </Pill>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 2: toolbox ───────────────────────────────────────

const SKILLS = [
  "Vue.js",
  "Nuxt.js",
  "Laravel",
  "PHP",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Inertia.js",
  "MySQL",
  "shadcn/ui",
  "Git",
  "Figma",
];

const ToolboxScene: React.FC = () => {
  const frame = useCurrentFrame();

  const exitT = interpolate(frame, [72, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        background: "#fff",
        alignItems: "center",
        justifyContent: "center",
        opacity: 1 - exitT,
        transform: `translateY(${exitT * -60}px)`,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.18em",
          fontFamily: archivo,
          fontWeight: 800,
          fontSize: 130,
          letterSpacing: "-0.03em",
          textTransform: "uppercase",
          ...rise(frame, 2, 20),
        }}
      >
        <span style={{ color: "transparent", WebkitTextStroke: `3px ${INK}` }}>
          My
        </span>
        <span style={{ color: INK }}>Toolbox</span>
      </div>

      <div
        style={{
          marginTop: 70,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
          maxWidth: 1250,
        }}
      >
        {SKILLS.map((skill, i) => (
          <div key={skill} style={rise(frame, 10 + i * 2, 18)}>
            <Pill style={{ fontSize: 26, padding: "16px 32px" }}>
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 9999,
                  background: GREEN,
                }}
              />
              {skill}
            </Pill>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 3: end card ──────────────────────────────────────

const EndScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 44,
      }}
    >
      <div style={rise(frame, 2, 22)}>
        <Pill style={{ fontSize: 22 }}>
          <StatusDot />
          Available for New Project
        </Pill>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: archivo,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 0.92,
          textTransform: "uppercase",
          fontSize: 170,
          textAlign: "center",
        }}
      >
        <span
          style={{
            color: "transparent",
            WebkitTextStroke: `4px ${INK}`,
            ...rise(frame, 6, 24),
          }}
        >
          Let's
        </span>
        <span style={{ color: INK, ...rise(frame, 10, 24) }}>Collaborate</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          ...rise(frame, 18, 22),
        }}
      >
        {["GitHub", "LinkedIn", "Telegram", "Facebook"].map((s) => (
          <Pill key={s} style={{ fontSize: 20, padding: "12px 24px" }}>
            <SocialIcon name={s} size={18} />
            {s}
          </Pill>
        ))}
      </div>

      <div
        style={{
          fontFamily: instrument,
          fontSize: 24,
          color: "rgba(13,13,13,0.55)",
          display: "flex",
          alignItems: "center",
          gap: 16,
          ...rise(frame, 24, 22),
        }}
      >
        github.com/koeuk
        <span style={{ color: GREEN }}>•</span>
        koeukkos@gmail.com
      </div>
    </AbsoluteFill>
  );
};

// ── Main composition ───────────────────────────────────────

export const PortfolioIntro: React.FC = () => {
  const frame = useCurrentFrame();

  // gentle fade-out at the very end
  const fadeOut = interpolate(frame, [TOTAL_DURATION - 14, TOTAL_DURATION - 2], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#fff" }}>
      <AbsoluteFill style={{ opacity: fadeOut }}>
        <Sequence durationInFrames={225}>
          <HeroScene />
        </Sequence>
        <Sequence from={218} durationInFrames={90}>
          <ToolboxScene />
        </Sequence>
        <Sequence from={300}>
          <EndScene />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
