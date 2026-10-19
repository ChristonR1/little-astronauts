// ✏️ EDIT THIS FILE to update the site's content.
export const EMAIL = "chslittleastronauts@gmail.com";
export const PHONE = "(925) 502-5830";
/** Phone number for tel: links (digits only, with +1 country code). */
export const PHONE_LINK = "+19255025830";

/** mailto: link that opens the visitor's email app with a subject filled in. */
export const mailto = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
/** Opens a Gmail compose window in the browser (works even with no email app installed). */
export const gmailLink = (subject: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(subject)}`;

export type PageKey = "home" | "about" | "programs" | "impact" | "rocketry" | "involved";

export const pages: [PageKey, string][] = [
  ["home", "Home"], ["about", "About"], ["programs", "Programs"],
  ["impact", "Impact"], ["rocketry", "Rocketry"], ["involved", "Get Involved"],
];

export interface Stat { n: number; l: string; plus?: boolean }
export const stats: Stat[] = [
  { n: 40, l: "sessions taught", plus: true },
  { n: 350, l: "students reached", plus: true },
  { n: 40, l: "STEM topics covered", plus: true },
];

export interface Theme { t: string; items: string[] }
export const themes: Theme[] = [
  { t: "Space & Flight", items: ["International Space Station","Asteroids","Comets","Jupiter","Mars","The Moon","Black Holes","Supersonic Planes","Aerodynamics"] },
  { t: "Physics & Motion", items: ["States of Matter","Newton’s 3 Laws","Friction","Pressure","Density","Energy","Magnets","Balance"] },
  { t: "Engineering", items: ["Structures","Simple Machines","Levers","Pulleys","Screws","Mechanical Advantage","Motors","Cars","Cranes","Solar Rover"] },
  { t: "Energy & Electronics", items: ["Electricity","Circuits","Solar Power","Wind Power","Water Power","Refrigerators","Heaters"] },
  { t: "Code & Chemistry", items: ["Block Coding","Submarines","Solubility","pH Levels","Gummy Worms (Sodium Alginate)"] },
];

export interface Milestone { d: string; t: string; s: string }
export const timeline: Milestone[] = [
  { d: "Nov 2024 – May 2025", t: "Online space series", s: "Free live classes on the ISS, asteroids, comets, Jupiter, Mars, the Moon and black holes, plus two in-person solar rover workshops at Livermore Library." },
  { d: "Sep 2025 – Dec 2025", t: "Weekly STEM at the Boys & Girls Club", s: "From states of matter to motors and cranes, every session built or tested something." },
  { d: "Jan 2026 – May 2026", t: "Energy, electronics and the rover", s: "Refrigerators, magnets, water, wind and solar power, ending with a 35-student rover build." },
  { d: "Aug 2026 – today", t: "Structures, simple machines and chemistry", s: "A 3-hour workshop at Contra Costa County Library, then a fall series with new volunteer teachers." },
];

/** [venue, when, what] */
export const venues: [string, string, string][] = [
  ["Online", "Nov 2024 – May 2025", "Live space classes"],
  ["Livermore Library", "Mar 2025", "Solar powered rover workshops"],
  ["Boys & Girls Club, Anna Marie Whalen Branch", "Sep 2025 – today", "Weekly STEM series"],
  ["Contra Costa County Library", "Aug 2026", "3-hour structures workshop"],
];
