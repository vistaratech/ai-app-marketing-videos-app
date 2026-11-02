// Initialize Lucide Icons
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  generateStoryboard();
});

const SCRIPT_TEMPLATES = {
  ta: {
    fintech: {
      pain: [
        { scene: "Scene 1 (0–5s)", hook: "Problem Hook", text: "கடையை மூடும்போது கணக்கு சரியா வரலையா? கால்குலேட்டரும் டைரியும் மண்டைய பிச்சிக்குதா?" },
        { scene: "Scene 2 (5–10s)", hook: "Discovery", text: "கவலைப்படாதீங்க! உங்கள் மொபைலில் இதோ {APP_NAME} - இந்தியாவின் அதிவேக டிஜிட்டல் லெட்ஜர்!" },
        { scene: "Scene 3 (10–20s)", hook: "App UI Demo", text: "1-க்ளிக் நாள் கணக்கு டேலி, வாட்ஸ்அப் ரசீது, மற்றும் பாக்கி வசூல் எல்லாம் ஒரே ஆப்பில்!" },
        { scene: "Scene 4 (20–26s)", hook: "Relief / Success", text: "இனி கணக்கு பார்க்க மணிக்கணக்கா நிக்க வேண்டாம். நேரத்தோடு கிளம்பி குடும்பத்தோடு நிம்மதியா இருங்க!" },
        { scene: "Scene 5 (26–30s)", hook: "Call To Action", text: "இன்றே {APP_NAME} செயலியை பதிவிறக்குங்கள்! முதல் 30 ஆர்டர்கள் முற்றிலும் இலவசம்!" }
      ],
      speed: [
        { scene: "Scene 1 (0–5s)", hook: "Speed Hook", text: "பில் போட 5 நிமிஷம் ஆகுதா? வாடிக்கையாளர்கள் காத்திருந்து கோபப்படுறாங்களா?" },
        { scene: "Scene 2 (5–10s)", hook: "Discovery", text: "இனி வெறும் 10 வினாடிகளில் டிஜிட்டல் பில்லிங்! {APP_NAME} உங்களுக்காக!" },
        { scene: "Scene 3 (10–20s)", hook: "App UI Demo", text: "பொருளை செலக்ட் பண்ணுங்க, வாட்ஸ்அப்ல பில் அனுப்புங்க, ரொக்கம் & ஆன்லைன் ரெண்டும் டிராக்கிங்!" },
        { scene: "Scene 4 (20–26s)", hook: "Relief / Success", text: "கூட்டம் அதிகமானாலும் இனி டென்ஷன் இல்லாம பில்லிங் பறக்கும்!" },
        { scene: "Scene 5 (26–30s)", hook: "Call To Action", text: "இப்போதே பிளே ஸ்டோரில் {APP_NAME} டவுன்லோட் பண்ணுங்க!" }
      ]
    },
    ecommerce: {
      pain: [
        { scene: "Scene 1 (0–5s)", hook: "Problem Hook", text: "ஆர்டர்கள் எடுக்க போன் கால்களும் வாட்ஸ்அப் மெசேஜ்களும் மிஸ் ஆகுதா?" },
        { scene: "Scene 2 (5–10s)", hook: "Discovery", text: "உங்கள் கடைக்கு என பிரத்யேக ஆன்லைன் ஸ்டோர் இதோ {APP_NAME} மூலம்!" },
        { scene: "Scene 3 (10–20s)", hook: "App UI Demo", text: "பொருட்களை பட்டியலிடுங்கள், நேரடி கட்டணம் பெறுங்கள், ஆர்டர்களை எளிதாக அனுப்புங்கள்!" },
        { scene: "Scene 4 (20–26s)", hook: "Relief / Success", text: "வீட்டில் இருந்தே உங்கள் வியாபாரம் 10 மடங்கு வளரும்!" },
        { scene: "Scene 5 (26–30s)", hook: "Call To Action", text: "இன்றே இலவசமாக தொடங்குங்கள் {APP_NAME}!" }
      ]
    }
  },
  en: {
    fintech: {
      pain: [
        { scene: "Scene 1 (0–5s)", hook: "Problem Hook", text: "Still closing your store with messy notebooks and calculator errors late at night?" },
        { scene: "Scene 2 (5–10s)", hook: "Discovery", text: "Meet {APP_NAME}: The ultra-simple digital ledger built for modern business owners." },
        { scene: "Scene 3 (10–20s)", hook: "App UI Demo", text: "Instant 1-click day tally, WhatsApp automated invoice sharing, and payment tracking." },
        { scene: "Scene 4 (20–26s)", hook: "Relief / Success", text: "Close your accounts in 10 seconds and enjoy relaxed evenings with family." },
        { scene: "Scene 5 (26–30s)", hook: "Call To Action", text: "Download {APP_NAME} on Google Play. Start 100% Free today!" }
      ]
    }
  }
};

function generateStoryboard() {
  const appName = document.getElementById("cfgAppName")?.value || "My App";
  const category = document.getElementById("cfgCategory")?.value || "fintech";
  const lang = document.getElementById("cfgLanguage")?.value || "ta";
  const angle = document.getElementById("cfgAngle")?.value || "pain";

  const langTemplates = SCRIPT_TEMPLATES[lang] || SCRIPT_TEMPLATES["ta"];
  const catTemplates = langTemplates[category] || langTemplates["fintech"] || SCRIPT_TEMPLATES["ta"]["fintech"];
  const scenes = catTemplates[angle] || catTemplates["pain"] || catTemplates[Object.keys(catTemplates)[0]];

  const container = document.getElementById("sceneList");
  if (!container) return;

  container.innerHTML = "";

  scenes.forEach((s) => {
    const formattedText = s.text.replace(/{APP_NAME}/g, appName);
    const div = document.createElement("div");
    div.className = "p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between";
    div.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">${s.scene}</span>
          <span class="text-xs font-semibold text-slate-400">${s.hook}</span>
        </div>
        <p class="text-sm text-slate-200 font-medium">${formattedText}</p>
      </div>
      <span class="text-xs text-slate-500 whitespace-nowrap hidden sm:inline-block">Auto-Generated</span>
    `;
    container.appendChild(div);
  });

  // Update WhatsApp link
  const waBtn = document.getElementById("btnOrderWhatsapp");
  if (waBtn) {
    const message = encodeURIComponent(
      `Hi AdForge AI! I want to create a video ad campaign.\n\nApp Name: ${appName}\nCategory: ${category}\nLanguage: ${lang}\nHook: ${angle}\nPrice: ₹4,999`
    );
    waBtn.href = `https://wa.me/919999999999?text=${message}`;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.getElementById("btnGeneratePreview")?.addEventListener("click", generateStoryboard);
document.getElementById("cfgAppName")?.addEventListener("input", generateStoryboard);
document.getElementById("cfgCategory")?.addEventListener("change", generateStoryboard);
document.getElementById("cfgLanguage")?.addEventListener("change", generateStoryboard);
document.getElementById("cfgAngle")?.addEventListener("change", generateStoryboard);

