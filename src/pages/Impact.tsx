import { Hero, Stats } from "../components/ui";
import { timeline } from "../data";

export function Impact() {
  return <>
    <Hero small title="Our impact" text="Numbers and milestones since November 2024." />
    <section><div className="wrap"><Stats />
    </div></section>
    <section className="band"><div className="wrap">
      <h2>Our journey</h2><p className="sub">From a video call to a room of 35 builders.</p>
      <div className="tl">{timeline.map(e => <div key={e.d}><span>{e.d}</span><b>{e.t}</b><span>{e.s}</span></div>)}</div>
    </div></section>
  </>;
}

