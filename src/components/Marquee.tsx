// Truthful "built with / speaks" strip — every logo is genuinely part of the
// stack the marketplace's apps are built on (AUK: Go backend; SolidJS + TS +
// Vite frontend; k6/Grafana load testing; git-native storage; GraphQL over the
// wire; macOS platform). No implied brand partnerships.
const logos = [
  { src: '/logos/apple.svg', alt: 'macOS', from: '#64748b', to: '#0f172a' },
  { src: '/logos/golang.svg', alt: 'Go', from: '#00add8', to: '#007d99' },
  { src: '/logos/graphql.svg', alt: 'GraphQL', from: '#e535ab', to: '#9b1c74' },
  { src: '/logos/grafana.svg', alt: 'k6 · Grafana', from: '#f46800', to: '#b34b00' },
  { src: '/logos/git.svg', alt: 'Git', from: '#f05133', to: '#a83217' },
  { src: '/logos/solidjs.svg', alt: 'SolidJS', from: '#4f88c6', to: '#2c4f7c' },
  { src: '/logos/typescript.svg', alt: 'TypeScript', from: '#3178c6', to: '#1e4e80' },
  { src: '/logos/vite.svg', alt: 'Vite', from: '#646cff', to: '#bd34fe' },
];

const mask = 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)';

export default function Marquee() {
  const row = [...logos, ...logos];
  return (
    <div className="mt-10 w-full max-w-[1400px] mx-auto">
      <div
        className="group/marquee relative overflow-hidden"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        <div className="flex w-max animate-[deskmcp-marquee_40s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
          {row.map((logo, i) => (
            <div
              key={i}
              className="group relative h-24 w-40 mr-5 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden"
            >
              <div
                className="absolute inset-0 scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
                style={{ backgroundImage: `linear-gradient(135deg, ${logo.from}, ${logo.to})` }}
              />
              <img
                src={logo.src}
                alt={logo.alt}
                className="relative h-8 w-auto max-w-[54%] object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
