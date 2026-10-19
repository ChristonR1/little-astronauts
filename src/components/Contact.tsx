import { useState } from "react";
import { EMAIL, PHONE, PHONE_LINK, gmailLink } from "../data";

/** Visible email + phone, so visitors can reach us even if clicking a mail link does nothing. */
export function ContactCard() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch { window.prompt("Copy our email address:", EMAIL); }
  };
  return (
    <div className="card contact">
      <h3>Contact us</h3>
      <p className="contact-line">✉️ <a href={"mailto:" + EMAIL}>{EMAIL}</a></p>
      <p className="contact-line">📞 <a href={"tel:" + PHONE_LINK}>{PHONE}</a></p>
      <button type="button" className="btn small" onClick={copy}>{copied ? "Copied!" : "Copy email"}</button>
      <a className="btn small alt" href={gmailLink("Hello Little Astronauts")} target="_blank" rel="noopener noreferrer">Write in Gmail</a>
    </div>
  );
}
