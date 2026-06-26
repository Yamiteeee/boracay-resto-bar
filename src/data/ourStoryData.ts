export interface StoryChapter {
  id: number;
  tag: string;
  title: string;
  accentTitle: string;
  text1: string;
  text2: string;
  stat1: string;
  stat1Label: string;
  stat2: string;
  stat2Label: string;
  img: string;
}

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 0,
    tag: "Chapter I: The Spark",
    title: "Born from Salt, Smoke",
    accentTitle: "& Coastal White Sand.",
    text1: "Founded on the values of authentic island hospitality, our resto-bar began as a simple dream: to elevate local culinary heritage right along the pulsing shoreline of Station 2.",
    text2: "We set out to blend traditional open-fire Visayan cooking preparation methods with modern, hyper-fresh coastal seafood sensibilities.",
    stat1: "2016",
    stat1Label: "Where the Dream Began",
    stat2: "Open Fire",
    stat2Label: "Traditional Kitchen",
    img: "https://images.unsplash.com/photo-1764397576393-14850aa1e010?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 1,
    tag: "Chapter II: The Source",
    title: "Sourced Directly From",
    accentTitle: "Local Visayan Waters.",
    text1: "Every dish we place on your table features day-caught premium seafood sourced directly from artisan fishermen who have read these changing tides for generations.",
    text2: "By supporting micro-local casting crews, we ensure that your snapper, blue crabs, and uni travel less than a single nautical mile from ocean net to hot embers.",
    stat1: "100%",
    stat1Label: "Traceable Day-Catch",
    stat2: "0 Miles",
    stat2Label: "Sourcing Footprint",
    img: "https://images.unsplash.com/photo-1585445247685-a7be3531559d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    tag: "Chapter III: The Vibe",
    title: "Where Sunsets Melt Into",
    accentTitle: "Midnight Coastal Rhythms.",
    text1: "We believe a perfect Boracay sunset shouldn’t just be observed through a lens—it deserves to be experienced with all five senses simultaneously.",
    text2: "As the golden hour bleeding across the horizon turns to night, the smell of charred wood ash gives way to fine craft spirits, ambient basslines, and unmatched island spirit.",
    stat1: "Station 2",
    stat1Label: "Prime Sunset Axis",
    stat2: "Infinite",
    stat2Label: "Good Island Vibes",
    img: "https://images.unsplash.com/photo-1508064830531-e2b4985caf0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
{
    id: 3, // Make sure id matches the index position
    tag: "Chapter IV: The Mixology",
    title: "Curating Liquid Sunshine",
    accentTitle: "Infused with Native Botanicals.",
    text1: "Our mixology program honors local provinces by utilizing hand-pressed calamansi, pure wild island honey, and small-batch rums infused right over our mahogany bar counters.",
    text2: "Every signature glass is built to cut cleanly through the heat of the beach afternoon and pair seamlessly with our signature wood-fired plates.",
    stat1: "Crafted",
    stat1Label: "House Infusions",
    stat2: "100°",
    stat2Label: "Tropical Alchemy",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop"
  }
  
];