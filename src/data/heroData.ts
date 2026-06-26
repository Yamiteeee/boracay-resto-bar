export interface HeroImage {
  url: string;
  alt: string;
  wrapperClass: string;
  tapeStyle: string;
  ripClass: string;
}

export const HERO_IMAGES: HeroImage[] = [
  {
    url: "https://images.unsplash.com/photo-1495031451303-d8ab59c8df37?q=80&w=500&auto=format&fit=crop",
    alt: "Boracay Cocktails",
    wrapperClass: "col-span-6 h-[140px] sm:h-[180px] md:h-[260px] -rotate-3 self-end",
    tapeStyle: "top-[-10px] left-[15%] w-16 sm:w-20 h-5 sm:h-6 rotate-[-12deg]",
    ripClass: "[clip-path:polygon(0%_2%,_15%_0%,_33%_3%,_55%_0%,_78%_2%,_92%_0%,_100%_4%,_99%_35%,_100%_70%,_98%_95%,_85%_100%,_62%_97%,_40%_100%,_18%_98%,_0%_100%,_2%_65%,_0%_30%)]"
  },
  {
    url: "https://images.unsplash.com/photo-1675759801135-cc2bba0a677b?q=80&w=1074&auto=format&fit=crop",
    alt: "Fresh Coastal Dining",
    wrapperClass: "col-span-6 h-[160px] sm:h-[210px] md:h-[310px] rotate-3 translate-y-3 sm:translate-y-4",
    tapeStyle: "top-[-10px] right-[10%] w-16 sm:w-20 h-5 sm:h-6 rotate-[8deg]",
    ripClass: "[clip-path:polygon(2%_0%,_22%_4%,_45%_1%,_68%_3%,_90%_0%,_100%_2%,_98%_30%,_100%_65%,_97%_98%,_75%_96%,_50%_100%,_28%_97%,_0%_100%,_2%_74%,_0%_40%,_3%_15%)]"
  },
  {
    url: "https://images.unsplash.com/photo-1542213493895-edf5b94f5a96?q=80&w=1073&auto=format&fit=crop",
    alt: "Boracay Coastline",
    wrapperClass: "col-span-7 h-[150px] sm:h-[190px] md:h-[280px] rotate-[-2deg] -translate-y-1 sm:translate-y-0",
    tapeStyle: "bottom-[-10px] left-[20%] w-18 sm:w-22 h-5 sm:h-6 rotate-[4deg]",
    ripClass: "[clip-path:polygon(0%_0%,_30%_3%,_60%_1%,_85%_4%,_100%_0%,_97%_40%,_100%_80%,_96%_100%,_70%_97%,_40%_100%,_15%_96%,_0%_100%,_3%_60%,_0%_25%)]"
  },
  {
    url: "https://images.unsplash.com/photo-1639526473371-e68e5336df56?q=80&w=1074&auto=format&fit=crop",
    alt: "Island Sunset Chills",
    wrapperClass: "col-span-5 h-[120px] sm:h-[160px] md:h-[230px] rotate-4 self-start translate-y-4 sm:translate-y-6",
    tapeStyle: "top-[-12px] left-[25%] w-14 sm:w-18 h-5 sm:h-6 rotate-[-6deg]",
    ripClass: "[clip-path:polygon(1%_3%,_25%_0%,_50%_4%,_75%_1%,_100%_5%,_98%_40%,_100%_85%,_97%_100%,_80%_97%,_55%_100%,_30%_96%,_0%_100%,_2%_70%,_0%_35%,_2%_10%)]"
  }
];

export const HERO_TEXT = {
  tagline: "Station 2, White Beach, Boracay",
  titleLine1: "Sunsets, Seafood",
  titleAccent: "& Island Chills.",
  description: "Kick off your sandals. Kick back with cold craft beers, local calamansi mojitos, and fresh caught ocean plates while the sun dips low over the horizon.",
  ctaPrimary: "Taste The Menu",
  ctaSecondary: "Reserve a Daybed"
};