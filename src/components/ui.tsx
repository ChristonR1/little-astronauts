import type { ReactNode } from "react";
import { Count } from "./Count";
import { stats } from "../data";

export const Hero = ({ title, text, small, children }: { title: string; text: string; small?: boolean; children?: ReactNode }) => (
  <header className={"hero" + (small ? " small" : "")}><div className="wrap">
    <h1>{title}</h1><p>{text}</p>{children}
  </div></header>
);

export const Stats = () => (
  <div className="stats">
    {stats.map(s => <div key={s.l} className="card stat"><Count to={s.n} plus={s.plus} /><span>{s.l}</span></div>)}
  </div>
);

export const Chips = ({ items }: { items: string[] }) => <>{items.map(i => <span className="chip" key={i}>{i}</span>)}</>;
