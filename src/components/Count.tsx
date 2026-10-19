import { useState, useEffect } from "react";

/** Counts up from 0 to `to` over about 1.2 seconds. */
export function Count({ to, plus }: { to: number; plus?: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let f = 0;
    const id = setInterval(() => { f++; setV(Math.round(to * Math.min(f / 40, 1))); if (f >= 40) clearInterval(id); }, 30);
    return () => clearInterval(id);
  }, [to]);
  return <b>{v}{plus ? "+" : ""}</b>;
}
