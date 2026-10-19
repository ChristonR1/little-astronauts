import { Hero, Chips } from "../components/ui";
import { themes, venues } from "../data";

export function Programs() {
  return <>
    <Hero small title="Programs" text="Every class is a short lesson followed by something to build, test or taste." />
    <section><div className="wrap"><div className="grid">
      {themes.map(th => <div className="card" key={th.t}><h3>{th.t}</h3><Chips items={th.items} /></div>)}
    </div></div></section>
    <section className="band"><div className="wrap">
      <h2>Where we teach</h2><p className="sub">&nbsp;</p>
      <div className="scroll"><table>
        <thead><tr><th>Venue</th><th>When</th><th>What</th></tr></thead>
        <tbody>{venues.map(v => <tr key={v[0]}><td>{v[0]}</td><td>{v[1]}</td><td>{v[2]}</td></tr>)}</tbody>
      </table></div>
    </div></section>
  </>;
}

