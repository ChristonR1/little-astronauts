import { Stars, starList } from "./Stars";

export const AstroArt = () => (
  <svg className="art" viewBox="0 0 400 260" role="img" aria-label="Illustration of an astronaut beside a planet">
    <defs>
      <linearGradient id="skya" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#06031f"/><stop offset="1" stopColor="#2a1470"/></linearGradient>
      <radialGradient id="nebA" cx=".75" cy=".3" r=".6"><stop offset="0" stopColor="#a855f7" stopOpacity=".5"/><stop offset="1" stopColor="#a855f7" stopOpacity="0"/></radialGradient>
    </defs>
    <rect width="400" height="260" rx="16" fill="url(#skya)"/><rect width="400" height="260" rx="16" fill="url(#nebA)"/>
    <Stars list={starList} />
    <circle cx="290" cy="150" r="70" fill="#6d28d9"/><circle cx="268" cy="128" r="14" fill="#5b21b6" opacity=".7"/><circle cx="312" cy="176" r="9" fill="#5b21b6" opacity=".7"/>
    <ellipse cx="290" cy="150" rx="112" ry="16" fill="none" stroke="#67e8f9" strokeWidth="4" opacity=".8" transform="rotate(-15 290 150)"/>
    <rect x="130" y="110" width="50" height="62" rx="18" fill="#f4f6fb"/>
    <circle cx="155" cy="92" r="26" fill="#f4f6fb"/><rect x="138" y="80" width="34" height="24" rx="12" fill="#312e81"/><rect x="143" y="84" width="10" height="6" rx="3" fill="#67e8f9" opacity=".8"/>
    <rect x="100" y="118" width="22" height="46" rx="10" fill="#f4f6fb" transform="rotate(20 111 141)"/>
    <rect x="188" y="118" width="22" height="46" rx="10" fill="#f4f6fb" transform="rotate(-20 199 141)"/>
    <rect x="136" y="168" width="18" height="44" rx="8" fill="#f4f6fb"/><rect x="158" y="168" width="18" height="44" rx="8" fill="#f4f6fb"/>
    <rect x="146" y="124" width="20" height="14" rx="4" fill="#ec4899"/>
  </svg>);
