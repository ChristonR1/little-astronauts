import { useState, useEffect, useRef } from "react";
import { starList, type Point } from "./Stars";

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const hexRgb = (h: string) => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const mixHex = (a: string, b: string, t: number) => { const x = hexRgb(a), y = hexRgb(b); return "#" + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join(""); };
const SKY: [number, string, string][] = [[0, "#2f7bd8", "#bfe0ff"], [0.07, "#143f96", "#5a99e0"], [0.14, "#05031a", "#0a1550"], [1, "#04021a", "#1b0f4a"]];
const skyAt = (p: number): [string, string] => { for (let i = 1; i < SKY.length; i++) if (p <= SKY[i][0]) { const t = (p - SKY[i-1][0]) / (SKY[i][0] - SKY[i-1][0]); return [mixHex(SKY[i-1][1], SKY[i][1], t), mixHex(SKY[i-1][2], SKY[i][2], t)]; } return [SKY[3][1], SKY[3][2]]; };
const ALT: [number, number][] = [[0, 0], [0.14, 100], [0.3, 2000], [0.55, 30000], [1, 384400]];
const altAt = (p: number) => { for (let i = 1; i < ALT.length; i++) if (p <= ALT[i][0]) { const t = (p - ALT[i-1][0]) / (ALT[i][0] - ALT[i-1][0]); const l0 = Math.log(1 + ALT[i-1][1]), l1 = Math.log(1 + ALT[i][1]); return Math.round(Math.exp(l0 + (l1 - l0) * t) - 1); } return 384400; };
export const RocketArt = () => {
  const ref = useRef<SVGSVGElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (calm) { setP(0.3); return; }
    let target = 0, cur = 0, last = -1, raf = 0;
    const read = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect(), vh = window.innerHeight;
      target = clamp((vh * 0.9 - r.top - r.height * 0.4) / (vh * 0.55));
    };
    const tick = () => {
      cur += (target - cur) * 0.1;
      if (Math.abs(target - cur) < 0.0004) cur = target;
      if (cur !== last) { last = cur; setP(cur); }
      raf = requestAnimationFrame(tick);
    };
    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", read); window.removeEventListener("resize", read); };
  }, []);

  const [skyTop, skyBot] = skyAt(p);
  const lift = clamp(p / 0.1), liftE = lift * lift * (3 - 2 * lift);
  const baseY = 285 - 50 * liftE;
  const ground = p * 1100;
  const starOp = clamp((p - 0.06) / 0.1);
  const thrust = clamp(p / 0.03);
  const smokeOp = clamp(1 - p / 0.08);
  const speedOp = clamp((p - 0.03) / 0.05) * (1 - clamp((p - 0.15) / 0.15)) * 0.7;
  const sway = Math.sin(p * 14) * 1.2 * clamp(p * 8);
  const q = clamp((p - 0.06) / 0.94);
  const R = 34 + 866 * Math.pow(1 - q, 2.4);
  const ecx = 200 - 125 * Math.pow(q, 1.5), ecy = 262 + 20 * q + R;
  const m = clamp((p - 0.2) / 0.8);
  const mr = 2.5 + 75 * Math.pow(m, 2.2), mx = 252 + 40 * m, my = 36 + 74 * m;
  const alt = altAt(p);
  const status = p < 0.02 ? "Scroll to launch" : p < 0.07 ? "Liftoff" : p < 0.14 ? "Climbing through atmosphere" : p < 0.18 ? "Crossing the Karman line" : p < 0.3 ? "Trans-lunar injection" : p < 0.8 ? "Coasting to the Moon" : p < 0.97 ? "Approaching the Moon" : "Lunar orbit reached";
  const spot = (th: number, rad: number) => [ecx + R * rad * Math.sin(th), ecy - R * rad * Math.cos(th)];
  const lands: [number, number, number, number][] = [[-0.18, .93, .1, 10], [0.06, .9, .09, -8], [0.2, .94, .08, 20], [-0.9, .75, .13, 30], [0.95, .7, .12, -25], [2.3, .5, .14, 15]];
  const clouds: [number, number][] = [[-0.08, .96], [0.13, .955], [-0.5, .9], [0.6, .88], [1.5, .6]];
  return (
  <svg ref={ref} className="art" viewBox="0 0 400 340" role="img" aria-label="A rocket flying from Earth to the Moon as you scroll">
    <defs>
      <clipPath id="rk-clip"><rect width="400" height="340" rx="16"/></clipPath>
      <clipPath id="rk-earth"><circle cx={ecx} cy={ecy} r={R}/></clipPath>
      <linearGradient id="rk-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={skyTop}/><stop offset="1" stopColor={skyBot}/></linearGradient>
      <radialGradient id="rk-eg" cx=".5" cy=".12" r=".9"><stop offset="0" stopColor="#5aa8ff"/><stop offset="1" stopColor="#1b3aa8"/></radialGradient>
      <radialGradient id="rk-mg" cx=".35" cy=".35" r=".8"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#b3aed3"/></radialGradient>
      <linearGradient id="rk-body" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#b9c0e0"/><stop offset=".45" stopColor="#ffffff"/><stop offset="1" stopColor="#a9b0d4"/></linearGradient>
      <linearGradient id="rk-flame" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff7d6"/><stop offset=".35" stopColor="#fbbf24"/><stop offset="1" stopColor="#ef4444" stopOpacity="0"/></linearGradient>
      <radialGradient id="rk-win" cx=".35" cy=".3" r=".8"><stop offset="0" stopColor="#e0fbff"/><stop offset="1" stopColor="#22a6d8"/></radialGradient>
    </defs>
    <g clipPath="url(#rk-clip)">
      <rect width="400" height="340" fill="url(#rk-sky)"/>
      <g opacity={starOp} transform={"translate(0 " + (p * 120) + ")"}>
        {starList.concat([[40,-40],[130,-90],[260,-60],[350,-120],[200,-20],[70,-140],[300,-170]] as Point[]).map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3?1.3:2} fill="#fff" opacity={i%2?.6:.95}/>)}
      </g>
      <g>
        <circle cx={mx} cy={my} r={mr} fill="url(#rk-mg)"/>
        {mr > 12 && (([[-.3,-.2,.18],[.25,.1,.14],[-.05,.4,.2],[.4,-.35,.1]] as [number, number, number][]).map(([dx,dy,k],i)=><circle key={i} cx={mx+dx*mr} cy={my+dy*mr} r={k*mr} fill="#cfcbe6" opacity=".75"/>))}
      </g>
      <g>
        <circle cx={ecx} cy={ecy} r={R + 7} fill="none" stroke="#7dd3fc" strokeWidth="14" opacity=".14"/>
        <circle cx={ecx} cy={ecy} r={R + 2} fill="none" stroke="#9fe0ff" strokeWidth="4" opacity=".55"/>
        <circle cx={ecx} cy={ecy} r={R} fill="url(#rk-eg)"/>
        <g clipPath="url(#rk-earth)">
          {lands.map(([th, rad, k, rot], i) => { const [x, y] = spot(th, rad); return <ellipse key={i} cx={x} cy={y} rx={R * k} ry={R * k * 0.4} fill="#3fae6a" transform={"rotate(" + rot + " " + x + " " + y + ")"}/>; })}
          {clouds.map(([th, rad], i) => { const [x, y] = spot(th, rad); return <ellipse key={i} cx={x} cy={y} rx={R * 0.13} ry={R * 0.03} fill="#fff" opacity=".55"/>; })}
        </g>
      </g>
      <g opacity={clamp(1 - p * 9)} transform={"translate(0 " + (p * 900) + ")"} fill="#fff">
        <ellipse cx="70" cy="225" rx="42" ry="12" opacity=".8"/><ellipse cx="100" cy="218" rx="28" ry="11" opacity=".8"/>
        <ellipse cx="330" cy="200" rx="46" ry="12" opacity=".75"/><ellipse cx="300" cy="194" rx="26" ry="10" opacity=".75"/>
        <ellipse cx="190" cy="150" rx="30" ry="8" opacity=".5"/>
      </g>
      <g opacity={speedOp} stroke="#fff" strokeWidth="1.5" strokeLinecap="round">
        {[30,70,120,155,250,285,330,372].map((x,i)=><line key={x} className="streak" style={{animationDelay:(-i*0.17)+"s"}} x1={x} y1="0" x2={x} y2={30 + (i%3)*14} opacity=".55"/>)}
      </g>
      <g transform={"translate(0 " + ground + ")"}>
        <path d="M0 270 Q70 238 150 262 T300 258 T400 246 V340 H0Z" fill="#3b9b64"/>
        <path d="M0 290 Q90 266 190 286 T400 276 V340 H0Z" fill="#247a4d"/>
        <rect x="262" y="196" width="9" height="92" fill="#5d5b86"/>
        <path d="M262 214L271 226M262 236L271 248M262 258L271 270M271 214L262 226M271 236L262 248M271 258L262 270" stroke="#8b88b8" strokeWidth="1.5"/>
        <rect x="222" y="224" width="42" height="4" fill="#8b88b8"/>
        <rect x="150" y="286" width="100" height="8" rx="2" fill="#4b4b6b"/>
        <g opacity={smokeOp} fill="#fff">
          <ellipse cx="170" cy="287" rx={24 + p * 400} ry={12 + p * 120} opacity=".8"/>
          <ellipse cx="232" cy="287" rx={24 + p * 400} ry={12 + p * 120} opacity=".8"/>
          <ellipse cx="200" cy="291" rx={34 + p * 300} ry={14 + p * 90} opacity=".9"/>
        </g>
      </g>
      <g transform={"translate(200 " + baseY + ") rotate(" + sway + ") scale(" + (0.95 - 0.12 * q) + ")"}>
        <g transform={"translate(0 12) scale(1 " + (0.15 + 0.85 * thrust) + ")"}>
          <path className="flame" d="M-15 0Q-20 34 0 70Q20 34 15 0Z" fill="url(#rk-flame)"/>
          <path className="flame" d="M-7 0Q-9 20 0 40Q9 20 7 0Z" fill="#fffbe6" opacity=".95"/>
        </g>
        <path d="M-14 0H14L19 12H-19Z" fill="#4b4b6b"/>
        <path d="M-30 -48L-60 6L-30 -6Z" fill="#7c3aed"/><path d="M30 -48L60 6L30 -6Z" fill="#7c3aed"/>
        <path d="M0 -150C22 -128 30 -90 30 -40V0H-30V-40C-30 -90 -22 -128 0 -150Z" fill="url(#rk-body)"/>
        <path d="M0 -150C12 -139 19 -124 22 -106H-22C-19 -124 -12 -139 0 -150Z" fill="#ec4899"/>
        <rect x="-30" y="-24" width="60" height="9" fill="#7c3aed"/>
        <circle cx="0" cy="-68" r="14" fill="#312e81"/><circle cx="0" cy="-68" r="10" fill="url(#rk-win)"/><circle cx="-3" cy="-72" r="3" fill="#fff" opacity=".7"/>
      </g>
      <rect x="12" y="12" width="150" height="26" rx="7" fill="#000" opacity=".45"/>
      <text x="24" y="29" fontSize="12" fill="#fff" fontFamily="ui-monospace,Menlo,monospace">ALT {alt.toLocaleString("en-US")} km</text>
      <rect x="178" y="12" width="210" height="26" rx="7" fill="#000" opacity=".45"/>
      <text x="283" y="29" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="ui-monospace,Menlo,monospace">{status}</text>
    </g>
  </svg>);
};
