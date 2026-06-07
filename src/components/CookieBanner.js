'use client';
import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      cookieName="miSitioCookieConsent"
      style={{ background: "#0a192f", color: "#fff" }}
      buttonStyle={{ color: "#0a192f", background: "#f1c40f", fontSize: "14px", borderRadius: "5px" }}
      expires={150}
    >
      Usamos cookies para mejorar tu experiencia y analizar el tráfico de nuestro sitio.
    </CookieConsent>
  );
}