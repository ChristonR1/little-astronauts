import { Hero, Stats } from "../components/ui";
import { RocketArt } from "../components/RocketArt";

export function Home() {
  return <>
    <Hero title="Little Astronauts" text="Free, hands-on STEM classes taught by students, and now we’re sponsoring teams in the American Rocketry Challenge.">
      <a className="btn" href="#rocketry">Our rocketry program</a>
      <a className="btn alt" href="#involved">Get involved</a>
    </Hero>
    <section><div className="wrap split">
      <div><h2>Why “Little Astronauts”?</h2><p>Every big mission starts with a kid asking how things work. We give them the tools to find out.</p></div>
      <RocketArt />
    </div></section>
    <section className="band"><div className="wrap">
      <h2>Learn. Build. Launch.</h2><p className="sub">How every Little Astronauts class works.</p>
      <div className="grid">
        <div className="card"><h3>Learn</h3>A short, friendly lesson on one big idea, from black holes to circuits.</div>
        <div className="card"><h3>Build</h3>Hands-on time with real materials: rovers, cranes, levers and more.</div>
        <div className="card"><h3>Launch</h3>Students carry what they built into competitions like the American Rocketry Challenge.</div>
      </div>
    </div></section>
    <section><div className="wrap">
      <h2>Our impact so far</h2><p className="sub">Since November 2024, from our own session logs.</p>
      <Stats />
      <p style={{marginTop:20}}><a href="#impact" style={{color:"var(--accent)"}}>See the full story →</a></p>
    </div></section>
    <section className="band"><div className="wrap">
      <h2>Explore</h2><p className="sub">&nbsp;</p>
      <div className="grid">
        {[["programs","What we teach","40+ topics from black holes to circuits."],["rocketry","Rocketry sponsorship","Funding and mentoring for student teams."],["about","About us","Who we are and why we teach."]].map(([h,t,d]) =>
          <a key={h} href={"#"+h} style={{textDecoration:"none",color:"inherit"}}><div className="card"><h3>{t}</h3>{d}</div></a>)}
      </div>
    </div></section>
  </>;
}

