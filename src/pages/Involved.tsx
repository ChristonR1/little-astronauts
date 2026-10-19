import { Hero } from "../components/ui";
import { ContactCard } from "../components/Contact";
import { mailto } from "../data";

const ways: [string, string, string][] = [
  ["Volunteer", "Join our teaching team and run a session.", "Volunteer"],
  ["Host us", "Invite us to your library, school or club.", "Host Little Astronauts"],
  ["Donate", "Help fund materials and rocketry teams.", "Donation"],
];

export function Involved() {
  return <>
    <Hero small title="Get involved" text="Teach a class, host us, or help keep our programs free." />
    <section><div className="wrap"><div className="grid">
      {ways.map(([h, d, s]) =>
        <div className="card" key={h}><h3>{h}</h3><p>{d}</p><a className="btn" href={mailto(s)}>Email us</a></div>)}
    </div></div></section>
    <section className="band"><div className="wrap" style={{ maxWidth: 560 }}>
      <ContactCard />
    </div></section>
  </>;
}
