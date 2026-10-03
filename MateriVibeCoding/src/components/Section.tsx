import type { ReactNode } from 'react';
import Reveal from '../deck/Reveal';

/* A chapter divider slide — a full-bleed breather between parts of the deck.
   An enormous outlined "ghost" number sits behind a centered kicker + display
   title, over stronger accent corner glows. Works with no image (ideal for
   data/B2B decks) — or pass `image` for a full-bleed photo under a scrim
   (brand decks): the ghost number and title sit on top.
   <Section n={2} kicker="Part two" title={<>How it <span className="accent-text">works.</span></>} /> */
export default function Section({
  n,
  kicker,
  title,
  subtitle,
  image,
}: {
  n?: number | string;
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  nav?: string;
  notes?: string;
}) {
  return (
    <div className="slide center">
      {image && (
        <>
          <img className="cover-img" src={image} alt="" aria-hidden />
          <div className="cover-scrim" aria-hidden />
        </>
      )}
      <div className="sec-glow" aria-hidden />
      {n != null && (
        <div className="sec-ghost" aria-hidden>
          {String(n).padStart(2, '0')}
        </div>
      )}
      <Reveal>
        {kicker && (
          <div className="kicker" style={{ marginBottom: 16 }}>
            {kicker}
          </div>
        )}
        <h2 className="display">{title}</h2>
        {subtitle && (
          <p
            className="lead"
            style={{
              marginTop: 'clamp(20px, 3.5vh, 32px)',
              maxWidth: 780,
              marginInline: 'auto',
              color: 'var(--fg-muted)',
              fontSize: 'clamp(17px, 2.1vw, 24px)',
              lineHeight: 1.5,
              letterSpacing: 'normal',
              fontWeight: 400,
            }}
          >
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  );
}
