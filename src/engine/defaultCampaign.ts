import { AdCampaignConfig } from "./types";

export const defaultCampaign: AdCampaignConfig = {
  brand: {
    name: "KadaiBook",
    tagline: "Your Shop's Digital Ledger",
    subTagline: "Complete Shop Management in One App!",
    offerText: "Start FREE with 30 Orders!",
    logoUrl: "branding/logo.png",
    primaryColor: "#059669",
    accentColor: "#10b981",
    storeBadgeUrl: "branding/google-play-badge.png",
    qrCodeUrl: "branding/qrcode.png",
  },
  scene1: {
    badge: "கடைக்காரர்களின் அன்றாட தலைவலி!",
    headline: "இரவு 10:30 மணி… இன்னும் கணக்கு முடியலையா?",
    subhead: "பணப்பெட்டியும் கால்குலேட்டரும் இடிக்குதா?",
    bgImageUrl: "footage/ad2_scene1_night_tally.jpg",
  },
  scene2: {
    badge: "ஸ்மார்ட் டிஜிட்டல் தீர்வு!",
    headline: "கவலைப்படாதீங்க! கடைபுத்தகம் இனி டிஜிட்டல்",
    subhead: "கடைகாரர்களின் நம்பகமான கடைபுக் செயலி!",
    bgImageUrl: "footage/ad2_scene2_discovery.jpg",
  },
  scene3: {
    screens: [
      {
        badge: "1-Click Day Summary",
        title: "நாள் கணக்கு ஒரே நொடியில் டேலி!",
        description: "மொத்த விற்பனை, வசூல் அனைத்தும் ஒரு பார்வையில்",
        imageUrl: "screenshots/shot-05.jpg",
        accentColor: "#059669",
      },
      {
        badge: "WhatsApp Instant Bill",
        title: "வாடிக்கையாளருக்கு வாட்ஸ்அப் ரசீது!",
        description: "பிரிண்டர் தேவையில்லை, பிடிஎஃப் பில் உடனே சென்ட்",
        imageUrl: "screenshots/shot-02.jpg",
        accentColor: "#25D366",
      },
      {
        badge: "Cash & Online Tracking",
        title: "ரொக்கம் & ஆன்லைன் தனித்தனியாக டிராக்கிங்!",
        description: "பணப்பெட்டி கணக்கு எப்போதும் 100% துல்லியம்",
        imageUrl: "screenshots/shot-06.jpg",
        accentColor: "#3B82F6",
      },
      {
        badge: "Udhar & Dues Reminder",
        title: "கடன் பாக்கிகளை சுலபமாக வசூலிக்கலாம்!",
        description: "தானியங்கி நினைவூட்டல் மெசேஜ்கள் மூலம் துரித வசூல்",
        imageUrl: "screenshots/shot-08.jpg",
        accentColor: "#F59E0B",
      },
    ],
  },
  scene4: {
    badge: "100% மன நிம்மதி!",
    headline: "இரவு 9:00 மணிக்கே கடையை பூட்டிட்டு கிளம்பலாம்!",
    subhead: "குடும்பத்தோடு அதிக நேரம் செலவிடுங்கள்!",
    bgImageUrl: "footage/ad2_scene4_closing.jpg",
  },
  scene5: {
    headline: "Start FREE with 30 Orders!",
    bullets: [
      "No Credit Card Required",
      "Instant WhatsApp Billing & Ledger",
      "Trusted by 10,000+ Indian Retailers",
    ],
  },
  soundtrackUrl: "audio/soundtrack-tamil-ad2.mp3",
};

