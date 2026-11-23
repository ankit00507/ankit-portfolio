/* ============================================================
   YOUR PROJECTS — edit only this file to update the portfolio.
   To add a project: copy one block, change the values, save.
   To remove one: delete its block.

   app:  Illustrator | Photoshop | InDesign | Canva | Dimension
         (creates the filter buttons automatically)
   size: "wide" | "tall" | "square"  (shape of the tile in the grid)
   thumb / gallery: REPLACE the .svg placeholders with your own
         images in assets/projects/ (jpg, png or webp, ~1600px wide).
   ============================================================ */
window.PROJECTS = [
  { id:"p1", title:"Kinfolk Coffee", category:"Brand Identity", app:"Illustrator", year:2026, size:"wide",
    thumb:"assets/projects/p1-thumb.svg", gallery:["assets/projects/p1-1.svg","assets/projects/p1-2.svg"],
    description:"A full identity for a small roastery: logo, colour system and bag labels.",
    process:"Started with hand sketches of coffee cherries, simplified them into one bold mark in Illustrator, then tested it at stamp size and on a shopfront.",
    tools:["Illustrator","Procreate"] },
  { id:"p2", title:"Monsoon Nights", category:"Poster Design", app:"Photoshop", year:2026, size:"tall",
    thumb:"assets/projects/p2-thumb.svg", gallery:["assets/projects/p2-1.svg","assets/projects/p2-2.svg"],
    description:"Poster series for an indie music festival.",
    process:"Layered photo textures and rain overlays in Photoshop, then set the type last so it sits inside the image rather than on top.",
    tools:["Photoshop"] },
  { id:"p3", title:"Field Notes Quarterly", category:"Editorial Design", app:"InDesign", year:2025, size:"square",
    thumb:"assets/projects/p3-thumb.svg", gallery:["assets/projects/p3-1.svg","assets/projects/p3-2.svg"],
    description:"A 48-page travel magazine layout.",
    process:"Built a 6-column grid and a three-font system in InDesign, then varied the page rhythm with full-bleed photos and quiet text spreads.",
    tools:["InDesign","Photoshop"] },
  { id:"p4", title:"Glow Jar", category:"Packaging Design", app:"Dimension", year:2025, size:"wide",
    thumb:"assets/projects/p4-thumb.svg", gallery:["assets/projects/p4-1.svg","assets/projects/p4-2.svg"],
    description:"Skincare packaging with realistic 3D mockups.",
    process:"Designed the label flat in Illustrator, then wrapped it onto jar and box models in Adobe Dimension to check colour and reflections.",
    tools:["Dimension","Illustrator"] },
  { id:"p5", title:"Weekend Market", category:"Social Media Design", app:"Canva", year:2025, size:"square",
    thumb:"assets/projects/p5-thumb.svg", gallery:["assets/projects/p5-1.svg","assets/projects/p5-2.svg"],
    description:"Editable Canva templates a small team can reuse every week.",
    process:"Made a locked colour and font kit in Canva so anyone on the team can post something on-brand in minutes.",
    tools:["Canva"] },
  { id:"p6", title:"Marigold Mark", category:"Logo Design", app:"Illustrator", year:2024, size:"tall",
    thumb:"assets/projects/p6-thumb.svg", gallery:["assets/projects/p6-1.svg","assets/projects/p6-2.svg"],
    description:"A logo and monogram set for a florist.",
    process:"Drew the petals on a geometric grid, tested 12 variations, and kept the one that still worked as a 16px favicon.",
    tools:["Illustrator"] },
  { id:"p7", title:"Letters From Home", category:"Typography", app:"Illustrator", year:2024, size:"wide",
    thumb:"assets/projects/p7-thumb.svg", gallery:["assets/projects/p7-1.svg","assets/projects/p7-2.svg"],
    description:"A custom lettering piece mixing Devanagari and Latin forms.",
    process:"Sketched letterforms by hand, traced them as vectors, then adjusted spacing letter by letter.",
    tools:["Illustrator","Procreate"] },
  { id:"p8", title:"Dreamcatcher", category:"Digital Artwork", app:"Photoshop", year:2024, size:"square",
    thumb:"assets/projects/p8-thumb.svg", gallery:["assets/projects/p8-1.svg","assets/projects/p8-2.svg"],
    description:"A personal digital illustration series.",
    process:"Built each piece from rough shapes and colour blocks, then added grain and light to give it warmth.",
    tools:["Photoshop"] }
];

/* Skills: each word is shown large; "note" appears when hovered or tapped. */
window.SKILLS = [
  ["Visual identity","Logos, colour and type that work together."],
  ["Branding","Giving a business a face and a voice."],
  ["Art direction","Guiding photos, shoots and the overall look."],
  ["Typography","Choosing and setting type with care."],
  ["Layout","Grids and pacing for print and screen."],
  ["Packaging","Labels, boxes and 3D mockups."],
  ["Digital design","Social posts, banners and web graphics."],
  ["Concepts","Finding the one idea behind the work."]
];
