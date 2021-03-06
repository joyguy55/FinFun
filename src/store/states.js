
const initialStates = {

  tailSizeRange: '',

  scaleStyles: [
    { id: 0,
      colors: ["#003382","#FF3382","#484748","#287488","#2747ff","#9284ff"],
      image: 'https://www.finfunmermaid.com/images/custom-tails-assets/scale-1.png',
      isActive: true
    },
    { id: 1,
      colors: ["#003382","#FF3382"],
      image: 'https://www.finfunmermaid.com/images/custom-tails-assets/scale-2.png',
      isActive: false
    },
    { id: 2,
      colors: ["#003382","#FF3382","#484748","#287488"],
      image: 'https://www.finfunmermaid.com/images/custom-tails-assets/scale-3.png',
      isActive: false
    },
    { id: 3,
      colors: ["#003382","#FF3382","#484748","#287488"],
      image: 'https://www.finfunmermaid.com/images/custom-tails-assets/scale-4.png',
      isActive: false
    },
    { id: 4,
      colors: ["#003382","#FF3382","#484748","#287488"],
      image: 'https://www.finfunmermaid.com/images/custom-tails-assets/scale-5.png',
      isActive: false
    }
  ],

  selectedScaleStyle: { id: 1,
                        colors: ["#003382","#FF3382","#484748","#287488","#2747ff","#9284ff"],
                        image: 'https://www.finfunmermaid.com/images/custom-tails-assets/scale-1.png',
                        isActive: true },

  finStyles: [
     { id: 0,
       colors: ["#003382","#FF3382","#484748"],
       image: 'https://www.finfunmermaid.com/images/custom-tails-assets/fin-1.svg',
       isActive: true
     },
     {  id: 1,
        colors: ["#003382","#FF3382"],
        image: 'https://www.finfunmermaid.com/images/custom-tails-assets/fin-2.svg',
        isActive: false
     },
     {  id: 2,
        colors: ["#003382","#FF3382","#484748"],
        image: 'https://www.finfunmermaid.com/images/custom-tails-assets/fin-3.svg',
        isActive: false
     },
     {  id: 3,
        colors: ["#003382","#FF3382","#484748","#287488"],
        image: 'https://www.finfunmermaid.com/images/custom-tails-assets/fin-4.svg',
        isActive: false
     }
  ],

  selectedFinStyle: { id: 1,
                      colors: ["#003382","#FF3382","#484748"],
                      image: 'https://www.finfunmermaid.com/images/custom-tails-assets/fin-1.svg',
                      isActive: true
                    },

  filters: [
    { id: 0,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/filters-1.png",
      isActive: false
     },
    { id: 1,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/filters-2.png",
      isActive: false
     },
    { id: 2,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/filters-3.png",
      isActive: false
     },
    { id: 3,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/filters-4.png",
      isActive: false
     },
    { id: 4,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/filters-5.png",
      isActive: false
     }
  ],

  selectedFilter: {},

  stickers: [
    { id: 0,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/sticker-waist-1.svg" },
    { id: 1,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/sticker-waist-2.svg" },
    { id: 2,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/sticker-waist-3.svg" },
    { id: 3,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/sticker-body-1.svg" },
    { id: 4,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/sticker-body-2.svg" },
    { id: 5,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/sticker-fin-1.svg" },
    { id: 6,
      image: "https://www.finfunmermaid.com/images/custom-tails-assets/sticker-fin-2.svg" },
  ],

  selectedStickers: [
        { name: 'Waist', stickerIds:[0,3], index: 0, image:false},
        { name: 'Body', stickerIds:[3,5], index: 1, image:false},
        { name: 'Fin', stickerIds:[5,7], index: 2, image:false}
      ]
      
}
