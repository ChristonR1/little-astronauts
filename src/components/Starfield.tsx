import { useMemo, type CSSProperties } from "react";

interface Star { x: number; y: number; s: number; d: number; l: number; big: boolean }

export const Starfield = () => {
  const stars = useMemo<Star[]>(() => Array.from({ length: 90 }, () => ({
    x: Math.random() * 100, y: Math.random() * 100,
    s: 4 + Math.random() * 5, d: 3.5 + Math.random() * 6, l: -Math.random() * 10, big: Math.random() < 0.2,
  })), []);
  return <div className="bg-stars" aria-hidden="true">
    {stars.map((t, i) => {
      const size = t.big ? t.s * 2 : t.s;
      const style = { left: t.x + "%", top: t.y + "%", width: size, height: size, "--d": t.d + "s", "--l": t.l + "s" } as CSSProperties;
      return <i key={i} className={t.big ? "big" : ""} style={style} />;
    })}
  </div>;
};
