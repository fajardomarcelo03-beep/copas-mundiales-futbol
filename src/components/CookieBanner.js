'use client';
import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      cookieName="miSitioCookieConsent"
      style={{ background: "#0a192f", color: "#fff" }}
      buttonStyle={{ 
        color: "#0a192f", 
        background: "#f1c40f", 
        fontSize: "14px", 
        borderRadius: "5px",
        padding: "8px 16px",
        cursor: "pointer"
      }}
      expires={150}
      
      // Configuración del botón de rechazar
      enableDeclineButton={true}
      declineButtonText="Rechazar"
      declineButtonStyle={{ 
        color: "#fff", 
        background: "#d9534f", 
        fontSize: "14px", 
        borderRadius: "5px",
        padding: "8px 16px",
        cursor: "pointer"
      }}
      onDecline={() => {
        console.log("Cookies rechazadas por el usuario");
      }}
    >
      Usamos cookies para mejorar tu experiencia y analizar el tráfico de nuestro sitio.
    </CookieConsent>
  );
}