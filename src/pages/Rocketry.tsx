import { Hero } from "../components/ui";
import { RocketArt } from "../components/RocketArt";
import { OrgMark } from "../components/OrgMark";
import { mailto } from "../data";

export function Rocketry() {
  const rules = [["6–12","grade levels; teams of 3 to 10 students"],["800 ft","qualification altitude target"],["2 eggs","large, 55–63 g each, must survive"],["37–40 s","flight time window"]];
  const orgs = [
    ["AIA","Aerospace Industries Association","Co-runs the challenge and funds the program.","https://www.aia-aerospace.org"],
    ["NAR","National Association of Rocketry","Co-runs the challenge, certifies motors and provides safety oversight.","https://www.nar.org"],
    ["ARC","American Rocketry Challenge","Official rules, handbook, FAQs and registration.","https://rocketrychallenge.org"],
  ];
  return <>
    <Hero small title="American Rocketry Challenge" text="The world’s largest student rocket contest, and the next step for our students." />
    <section><div className="wrap split">
      <div>
        <h2>What it is</h2>
        <p>The American Rocketry Challenge (ARC) is a national contest for 6th to 12th graders. Teams design, build and fly a model rocket to hit a very specific altitude and flight time while protecting a payload of raw eggs. It’s run jointly by the Aerospace Industries Association and the National Association of Rocketry, and the 2027 contest is its 25th year.</p>
        <p>Top US teams earn a spot at the International Rocketry Challenge at the Paris Air Show in June 2027.</p>
      </div>
      <RocketArt />
    </div></section>
    <section className="band"><div className="wrap">
      <h2>The 2027 challenge</h2><p className="sub">The rules change a little every year, so always check the official handbook.</p>
      <div className="facts">{rules.map(([n,d]) => <div className="card" key={n}><b>{n}</b><span>{d}</span></div>)}</div>
      <div className="grid" style={{marginTop:14}}>
        <div className="card"><h3>Rocket limits</h3><ul className="clean">
          <li>At least 650 mm long</li><li>No more than 650 g at liftoff</li><li>Single stage, up to 80 N-sec total impulse</li><li>Only ARC-approved model rocket motors</li></ul></div>
        <div className="card"><h3>Design rules</h3><ul className="clean">
          <li>At least two body tube diameters</li><li>One section of T-80 tube at least 12 in long</li><li>Parachute recovery</li><li>All parts stay tethered together</li></ul></div>
        <div className="card"><h3>Key dates</h3><ul className="clean">
          <li>Apr 4, 2027: qualification flight reports due</li><li>Apr 13, 2027: finalists announced</li><li>Mid-May 2027: National Finals</li><li>June 2027: Paris Air Show</li></ul></div>
      </div>
      <p className="sub" style={{marginTop:16,fontSize:13}}>Summary of the official 2027 materials. Finals altitude targets are set between 775 and 825 ft. Confirm exact dates and details at rocketrychallenge.org.</p>
    </div></section>
    <section><div className="wrap">
      <h2>Who’s behind it</h2><p className="sub">Official organizations for the challenge.</p>
      <div className="grid">{orgs.map(([m,n,d,u]) =>
        <div className="card org" key={m}><OrgMark t={m} /><div><h3 style={{margin:"0 0 4px"}}>{n}</h3><div style={{opacity:.9,fontSize:14}}>{d}</div><a href={u} target="_blank" rel="noopener noreferrer">Visit website →</a></div></div>)}
      </div>
    </div></section>
    <section className="band"><div className="wrap">
      <div className="tarc">
        <h2>How Little Astronauts helps</h2>
        <p>After teaching flight, aerodynamics, structures and energy, the next step is launching. We sponsor student teams with funding, mentoring and build support.</p>
        <a className="btn" href={mailto("Team sponsorship application")}>Apply for team support</a>
        <a className="btn alt" href={mailto("Sponsor a team")}>Become a sponsor</a>
      </div>
      <p className="sub" style={{marginTop:16,fontSize:13}}>Placeholder: update the support details with your real sponsorship terms.</p>
    </div></section>
    <section><div className="wrap">
      <h2>Sponsored teams</h2>
      <p style={{color:"var(--muted)"}}>Team names, photos and results will go here.</p>
    </div></section>
  </>;
}

