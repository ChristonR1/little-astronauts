import { Hero } from "../components/ui";

export function About() {
  return <>
    <Hero small title="About Little Astronauts" text="A student-led nonprofit that makes science and engineering something kids do, not just read about." />
    <section><div className="wrap" style={{maxWidth:760}}>
      <h2>Our mission</h2>
      <p>We teach free, hands-on STEM classes to kids who might not otherwise get to build a rover, test a crane, or launch a rocket. Every session is a short lesson followed by something to make and try.</p>
      <h2 style={{marginTop:32}}>How we started</h2>
      <p>In November 2024 we began with online classes about the International Space Station. We’ve since taught in libraries and at the Boys & Girls Club, growing from a few students on a video call to a room of 35 building rovers.</p>
      <h2 style={{marginTop:32}}>Where we are now</h2>
      <p>Having taught flight, aerodynamics, structures and energy, we’re helping students take the next step: designing, building and launching rockets in the American Rocketry Challenge.</p>
      <h2 style={{marginTop:32}}>Our team</h2>
      <p style={{color:"var(--muted)"}}>Add your team bios here: founder Christon Rex and the student teachers who help run classes.</p>
    </div></section>
  </>;
}

