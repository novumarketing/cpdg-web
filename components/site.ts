// Datos del Colegio Pedro de Gante (CPDG)
export const PHONE = "775 753 0990";
export const PHONE_RAW = "527757530990";
export const WA_RAW = "527751037292"; // admisiones
export const EMAIL = "contacto@cpdg.edu.mx";

export const CAMPUS = [
  { nombre: "Preescolar", dir: "Calzada 5 de Mayo con 5 de Febrero #401, Col. La Escondida, Tulancingo, Hidalgo." },
  { nombre: "Primaria, Secundaria y Preparatoria", dir: "Av. Vicente Riva Palacio #200, Col. Felipe Ángeles, Tulancingo, Hidalgo." },
];

const wa = (msg: string) => `https://wa.me/${WA_RAW}?text=${encodeURIComponent(msg)}`;
export const WA = wa("Hola, me comunico con el Colegio Pedro de Gante para solicitar informes sobre admisiones.");
export const WA_VISITA = wa("Hola, me gustaría agendar una visita al Colegio Pedro de Gante.");

export const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/ColegioPedroDeGanteAC/", key: "facebook" },
  { name: "Instagram", href: "https://www.instagram.com/colegiopdg/", key: "instagram" },
  { name: "X (Twitter)", href: "https://twitter.com/ColegioPdG", key: "x" },
];

export const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Av. Vicente Riva Palacio 200, Felipe Ángeles, Tulancingo de Bravo, Hidalgo") +
  "&output=embed";
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Colegio Pedro de Gante, Tulancingo, Hidalgo");

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/nuestra-esencia", label: "Nuestra esencia" },
  { href: "/niveles", label: "Niveles" },
  { href: "/admisiones", label: "Admisiones" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/contacto", label: "Contacto" },
];
