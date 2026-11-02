export interface BrandConfig {
  name: string;
  tagline: string;
  subTagline: string;
  offerText: string;
  logoUrl?: string;
  primaryColor?: string;
  accentColor?: string;
  storeBadgeUrl?: string;
  qrCodeUrl?: string;
}

export interface ShowcaseScreen {
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
  accentColor?: string;
}

export interface AdCampaignConfig {
  brand: BrandConfig;
  scene1: {
    badge: string;
    headline: string;
    subhead: string;
    bgImageUrl: string;
  };
  scene2: {
    badge: string;
    headline: string;
    subhead: string;
    bgImageUrl: string;
  };
  scene3: {
    screens: ShowcaseScreen[];
  };
  scene4: {
    badge: string;
    headline: string;
    subhead: string;
    bgImageUrl: string;
  };
  scene5?: {
    headline?: string;
    bullets?: string[];
  };
  soundtrackUrl?: string;
}

