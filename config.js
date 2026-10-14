/* ---------- Site settings: fill these in after setup (see SETUP.md) ---------- */
const SITE_CONFIG = {
  // Apps Script web app URL (Deploy → Web app → URL ending in /exec).
  // Leave empty to keep the demo behaviour (no data is sent anywhere).
  enquiryEndpoint: "https://script.google.com/macros/s/AKfycbwRfrEm9AVKwyu2GKMM2RcrXmIK2XXC8PIWW8hPJLWDUQkczgAdXQIzWcUCDSQpkBGekg/exec",

  // Google Calendar appointment schedule booking page (debbie@strnetwork.cc).
  // Leave empty to hide the "book a meeting" step.
  bookingUrl: "https://calendar.app.google/sKpet51pXKuREzhf6",

  // Shown next to the booking button.
  bookingNote: {
    zh: "11/6（五）– 11/9（一）10:00–18:00（台北時間）・每場 30 分鐘・A08 STR Network 攤位",
    en: "Nov 6 (Fri) – Nov 9 (Mon), 10:00–18:00 Taipei time · 30 min · Booth A08, STR Network",
  },

  // Fallback contact if sending fails.
  contactEmail: "stream@strnetwork.cc",
};
