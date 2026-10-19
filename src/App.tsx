import { useState, useEffect, type ComponentType } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { Impact } from "./pages/Impact";
import { Rocketry } from "./pages/Rocketry";
import { Involved } from "./pages/Involved";
import { Starfield } from "./components/Starfield";
import { pages, EMAIL, PHONE, PHONE_LINK, type PageKey } from "./data";

const views: Record<PageKey, ComponentType> = { home: Home, about: About, programs: Programs, impact: Impact, rocketry: Rocketry, involved: Involved };

const getPage = (): PageKey => {
  const h = location.hash.replace("#", "");
  return h in views ? (h as PageKey) : "home";
};

export default function App() {
  const [page, setPage] = useState<PageKey>(getPage);
  // null = follow the device's light/dark setting
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    const on = () => { setPage(getPage()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);

  useEffect(() => {
    if (dark === null) document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  const View = views[page];
  return <>
    <Starfield />
    <nav><div className="wrap">
      <a className="logo" href="#home">🚀 Little Astronauts</a>
      <div className="links">{pages.map(([k, l]) => <a key={k} href={"#" + k} className={page === k ? "on" : ""}>{l}</a>)}</div>
      <button className="theme" onClick={() => setDark(d => d === null ? true : !d)} aria-label="Toggle theme">◐</button>
    </div></nav>
    <View />
    <footer><div className="wrap">
      {pages.map(([k, l]) => <a key={k} href={"#" + k}>{l}</a>)}
      <div style={{ marginTop: 10 }}><a href={"mailto:" + EMAIL}>{EMAIL}</a><a href={"tel:" + PHONE_LINK}>{PHONE}</a></div>
      <div style={{ marginTop: 6 }}>© 2026 Little Astronauts. All programs are free for students.</div>
    </div></footer>
  </>;
}
