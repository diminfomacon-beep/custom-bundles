const productList = [
            // ***************CATEGORY - Apparel & Wearables******************    
    {
      id: "AP-APSVM1",
      name: "Adult White Polyester Graphic T-Shirt",
      category: "Apparel & Wearables",
      description: "Lightweight white polyester t-shirt designed for vibrant custom prints, perfect for logos, artwork, and personalized designs.",
      basePrice: 15.99,

      images:["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"],

      sizes:[
      {label:"S", extra:0},
      {label:"M", extra:0},
      {label:"L", extra:0},
      {label:"XL", extra:0},
      {label:"2XL", extra:0},
      {label:"3XL", extra:0}
      ],

      styles:[
      {label:"Logo Front", extra:0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"},
      {label:"Large Front", extra:3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"},
      {label:"Large Back", extra:3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"},
      {label:"Logo Front & Large Back", extra:6, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"}
      ]
    },

    // {
    //   id: "AP-ACSVM2",
    //   name: "Adult Cotton T-Shirt",
    //   category: "Apparel & Wearables",
    //   description: "Premium polyester shirt with multiple design styles.",
    //   basePrice: 15.99,

    //   images:["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"],

    //   sizes:[
    //   {label:"S", extra:0},
    //   {label:"M", extra:0},
    //   {label:"L", extra:0},
    //   {label:"XL", extra:0},
    //   {label:"2XL", extra:0},
    //   {label:"3XL", extra:0}
    //   ],

    //   styles:[
    //   {label:"Logo Front", extra:0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSHIRT%20s%20xx%20xxx.png"},
    //   {label:"Large Front", extra:3, image:"https://raw.githubusercontent.com/diminfomacon-beep/new-design-studio/main/studio-mockups/Shirt.png"},
    //   {label:"Large Back", extra:3, image:"https://raw.githubusercontent.com/diminfomacon-beep/new-design-studio/main/studio-mockups/Shirt.png"},
    //   {label:"Logo Front & Large Back", extra:6, image:"https://raw.githubusercontent.com/diminfomacon-beep/new-design-studio/main/studio-mockups/Shirt.png"}
    //   ]
    // },
    
    {
      id: "BA-TV3001",
      name: "Tote Bag",
      category: "Apparel & Wearables", 
      description: "13.5 inches x 13.5 inches x 4 inches customizable tote bag, available in multiple colors.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632229_31.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632228_2.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632230_31.png"], 
      basePrice: 10.99,
      variations: [
        { label: "Black", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632228_2.png"},
        { label: "White", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632230_31.png"},
        { label: "Natural", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/10632229_31.png"}
      ]
    },

    {
      id: "AP-BOV401",
      name: "Baby Onesie", 
      category: "Apparel & Wearables",
      description: "Personalized baby body suit to capture those precious moments. Perfect for gifting.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/onesie.png"],
      basePrice: 10.99,
      variations: [
        { label: "6-9 months", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/onesie.png"},
        { label: "9-12 months", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/onesie.png"},
        { label: "12-18 months", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/onesie.png"},
        { label: "18-24 months", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/onesie.png"}
      ]
    },

    {
      id: "AP-BBSPV1",
      name: "Baby Bibb with Spill Pocket", 
      category: "Apparel & Wearables",
      description: "Soft baby bib with a built-in spill pocket to catch messes, perfect for adding cute custom designs or names - 10.24 x 9.06 inches.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/babybib.png"],
      basePrice: 8.99,
    },
     {
      id: "AP-BHVN01",
      name: "Baby Hat and Mitten", 
      category: "Apparel & Wearables",
      description:  "Cotton baby hat to keep their little head warm. Soft and comfortable and custom printable.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/custom-bundles/main/Pics/baby%20hat%20and%20mit.png"],
      basePrice: 5.99,
    },
    
    {
      id: "AP-BMVN01",
      name: "Baby Bib", 
      category: "Apparel & Wearables",
      description:  "Simple baby bib with, fully customizable",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/custom-bundles/main/Pics/baby%20bib.png"],
      basePrice: 5.99,
    },

    {
      id: "AP-BSVN01",
      name: "Baby Socks", 
      category: "Apparel & Wearables",
      description:  "Cotton baby hat to keep their little head warm. Soft and comfortable and custom printable.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/custom-bundles/main/Pics/baby%20socks.png"],
      basePrice: 2.99,
    },
    
    {
      id: "AP-BBCVN1",
      name: "Baby Burp Cloth", 
      category: "Apparel & Wearables",
      description:  "Soft and comfortable baby burp cloth and fully customizable - 16x12 inches",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/custom-bundles/main/Pics/Baby%20Burp%20Cloth.png"],
      basePrice: 5.99,
    },   
            // ***************CATEGORY - Drinkware & Kitchenware******************
    
    {
      id: "TU-SV1601",
      name: "20oz Skinny Tumbler", 
      category: "Drinkware & Kitchenware",
      description: "Skinny 20oz tumbler available in a variety of colors and finishes including holographic, glitter, ombre and glow-perfect for custom designs.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/skinny%20color.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBGLOW1_cee74f28-51c3-4bb9-b14a-0455a7897ec7.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBDUOSK1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBSKINNYEDGEHOLOWHITE1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBMETGLITWHITE1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20oz%20Skinny%20Tumbler.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png"],
      basePrice:17.99 ,
      variations: [
        { label: "Skinny White", extra:0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20oz%20Skinny%20Tumbler.png" },
        { label: "Duo Skinny White w/ 2 lids", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBDUOSK1.png" },
        { label: "Glow Skinny", extra:3, image: "https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBGLOW1_cee74f28-51c3-4bb9-b14a-0455a7897ec7.png"},
        { label: "Holographic Skinny", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBSKINNYEDGEHOLOWHITE1.png" },
        { label: "Metallic Glitter Skinny", extra: 1, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBMETGLITWHITE1.png" },
        { label: "Skinny Loving Lime", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/skinny%20color.png" },
        { label: "Skinny Sweet Sunshine", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/skinny%20color.png" },
        { label: "Skinny Playful Petals", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/skinny%20color.png" },
        { label: "Skinny Cupid’s Crush", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/skinny%20color.png" },
        { label: "Duo Skinny Ombre Sugarplum", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Mulled Wine", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Cranberry Spice", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Silent Night", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Wintersky", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Icy Wonderland", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png" },
        { label: "Duo Skinny Ombre Peppermint Cream", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ombre%20group.png"}
      ]
    },
    
    {
      id: "TU-SGV201",
      name: "Snow Globe Tumbler", 
      category: "Drinkware & Kitchenware",
      description: "Fun snow globe tumbler designed for creative custom prints and eye-catching drinkware designs.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SKINNYSNOWGLOBE1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SNOWGLOBEWHANDLE1.png"],
      basePrice: 16.99,
      variations: [
        { label: "20oz Snow Globe", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SKINNYSNOWGLOBE1.png"},
        { label: "20oz Snow Globe with Handle", extra: 1, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SNOWGLOBEWHANDLE1.png"}
      ]
    },

    {
      id: "MU-IMVN01",
      name: "Insulated Mug - 10oz",
      category: "Drinkware & Kitchenware",
      description: "Insulated coffee mug with a tinted sliding lid to keep drinks hot while showcasing your custom design.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/Coffee%20Mug%20Tumbler.png",],
      basePrice: 11.99
    },

    {
      id: "BO-KWV601",
      name: "Kids Water Bottle - 12oz",
      category: "Drinkware & Kitchenware",
      description: "Leak proof flip top lid and built in internal straw. Available in multiple colors.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12SUBSIPPYBLUE1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy%20Cover.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy%20Bottom.png"],
      basePrice: 15.99,
      variations: [
        {label: "Pink with green", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png"},
        {label: "Blue with gray", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12SUBSIPPYBLUE1.png",},
        {label: "Red with gray", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png"},
        {label: "Black with gray", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png"},
        {label: "Pink with Gray", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png"},
        {label: "Orange with yellow", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20Sippy.png"}
      ]
    },

    {
      id: "TU-SWGVN1",
      name: "Stemless Wine Glass - 12oz", 
      category: "Drinkware & Kitchenware",
      description: "Stemless tumbler shape wineglass withdouble-wall vacuum insulated and clear sliding lid. Comes with a clear straw.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12SUBSTEMLESS1_b840e95b-9ec6-4372-b0e2-1229ac95c877.png"],
      basePrice: 15.99,
    },

    {
      id: "MU-CCCVN1",
      name: "Ceramic Coffee Mug - 15oz", 
      category: "Drinkware & Kitchenware",
      description: "Classic ceramic mug available in white or heat-changing black.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15CERAMICMUG1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ceramic%20mug.png"],
      basePrice: 7.99,
      variations: [
        {label: "White", extra:0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15CERAMICMUG1.png"},
        {label: "Black Heat Changing", extra:1, image: "https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ceramic%20mug.png"}

      ]
    },

    {
      id: "MU-GCVN01",
      name: "Glass Coffee Mug", 
      category: "Drinkware & Kitchenware",
      description: "Clear or Matte glass coffee mug perfect for custom logos, designs, or personalized gifts.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15SUBGLASSGLITTERGLOBEMUG21_b7891d44-d6c4-40fd-8855-aabde5a38081.png", "https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/17SUBGLASSCOFFEEMATTE1_5a1ee9c7-f6d0-49ba-9de5-75cd392a8b1f.png"],
      basePrice: 7.99,
      variations: [
        {label: "Clear-15oz", extra:0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15SUBGLASSGLITTERGLOBEMUG21_b7891d44-d6c4-40fd-8855-aabde5a38081.png"},
        {label: "Clear-17oz", extra:2, image:"https://raw.githubusercontent.com/diminfomacon-beep/new-design-studio/main/studio-mockups/Glass%20coffee%20mug%20clear.png"},
        {label: "Matte-17oz", extra:2, image: "https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/17SUBGLASSCOFFEEMATTE1_5a1ee9c7-f6d0-49ba-9de5-75cd392a8b1f.png"}
      ]
    },

     
    {
      id: "TU-GGV301",
      name: "Gradient Glass Tumbler", 
      category: "Drinkware & Kitchenware",
      description: "20oz gradient glass skinny tumbler available in multiple colors. Comes  with 2 lids.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-08-30at10.53.45AM_a3b58e0f-76d5-4d7e-9fe1-1e9f8355091f.png"],
      basePrice:16.99 ,
      variations: [
        { label: "Red", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-08-30at10.53.45AM_a3b58e0f-76d5-4d7e-9fe1-1e9f8355091f.png"},
        { label: "Blue", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-08-30at10.53.45AM_a3b58e0f-76d5-4d7e-9fe1-1e9f8355091f.png"},
        { label: "Pink", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-08-30at10.53.45AM_a3b58e0f-76d5-4d7e-9fe1-1e9f8355091f.png" }
      ]
    },

    {
      id: "TU-GV7001",
      name: "Grippy Tumbler", 
      category: "Drinkware & Kitchenware",
      description: "Comes with clear twist on lid, removable handle and metal straw available in multiple colors, styles and sizes. ",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holo%20grippy.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20grippy.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBGRIPPY1_2ef6555c-2a8c-45d5-a489-9fb67b5ee899.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBGRIPPY3_f4dfa40e-98c8-4b57-ab3d-1ed5656bf07a.png"],
      basePrice: 16.99,
      variations: [
        { label: "12oz White", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20grippy.png"},
        { label: "20oz White", extra: 1, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/12oz%20grippy.png"},
        { label: "30oz  White", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/20SUBGRIPPY1_2ef6555c-2a8c-45d5-a489-9fb67b5ee899.png"},
        { label: "30oz Holographic White", extra: 7, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holo%20grippy.png"},
        { label: "30oz Holographic Gradient - Pink", extra: 8, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holo%20grippy.png"},
        { label: "30oz Holographic Gradient – Purple", extra: 8, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holo%20grippy.png"},
        { label: "30oz Holographic Gradient - Green", extra: 8, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holo%20grippy.png"}
      ]
    },

    {
      id: "TU-TRV201",
      name: "Tri Sip Tumbler", 
      category: "Drinkware & Kitchenware",
      description: "Innovative tumbler featuring a tri-sip lid design for multiple drinking options and custom personalization.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-081.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-061.png"],
      basePrice:26.99,
      variations: [
        { label: "20oz Tri-Sip", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-081.png"},
        { label: "30oz Tri-Sip", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-061.png"}
      ]
    },

    {
      id: "TU-SPV501",
      name: "Speaker Tumbler", 
      category: "Drinkware & Kitchenware",
      description: "Tumblers with detachable bluetooth speaker. Available in multiple sizes.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSPEAKER1_157f9541-edfb-4e51-9de1-1a1e674aace8.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBGRIPPYSPEAKER1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holographic%20speaker.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBGRIPPYSPEAKER1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELERSPEAKERWHITE1_large.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-102.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-077_56958e84-c60d-475c-b35b-b50e72abf137.png"],
      basePrice: 36.99,
      variations: [
        { label: "20oz Skinny Speaker Tumbler", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBSPEAKER1_157f9541-edfb-4e51-9de1-1a1e674aace8.png"},
        { label: "30oz Grippy Speaker Tumbler", extra: 2, image: "https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBGRIPPYSPEAKER1.png"},
        { label: "30oz Holographic Unicorn Grippy Tumbler", extra: 4, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30oz%20holographic%20speaker.png"},
        { label: "30oz Traveler Speaker Tumbler", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBGRIPPYSPEAKER1.png"},
        { label: "40oz Traveler Speaker Tumbler", extra: 7, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELERSPEAKERWHITE1_large.png"}
      ]
    },

    {
      id: "TU-FVN001",
      name: "22oz Fatty Tumbler", 
      category: "Drinkware & Kitchenware",
      description: "Double wall vacuum insulated with tinted lid and clear straw. Diameter - 3.45 inches",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/22SUBFATTY1_3ea845bb-434b-4b8c-a997-79b35bdbb49b.png"],
      basePrice:17.99,
    },

    {
      id: "BO-HHV101",
      name: "Hydro Handle Bottle", 
      category: "Drinkware & Kitchenware",
      description: "Insulated tumbler with a sturdy carry handle, perfect for custom designs and everyday hydration.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/Duo%20Hydro%20group.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/25SUBHYHA1_9dc7a375-5863-418a-b865-0e1b4f49ffc8.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBHYHA1_d76affb2-b7ee-4d97-8e44-4d9c23ff96a9.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/32SUBHYDROMETALGLITWHITE.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/hydro%20hound.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBCLIPMATE1_large.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBCLIPMATEHOLO.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/18oz%20hydro.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/5oz%20hydro.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/32oz%20hydro.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40oz%20hydro.png"],
      basePrice: 16.99,
      variations: [
        { label: "25oz Hydro", extra: 1, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/25SUBHYHA1_9dc7a375-5863-418a-b865-0e1b4f49ffc8.png"},
        { label: "40oz Hydro", extra: 5, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBHYHA1_d76affb2-b7ee-4d97-8e44-4d9c23ff96a9.png"},
        { label: "32oz Metallic Glitter Hydro", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/32SUBHYDROMETALGLITWHITE.png"},
        { label: "30oz Clipmate Hydro", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBCLIPMATE1_large.png"},
        { label: "30oz Holographic Clipmate Hydro", extra: 8, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/30SUBCLIPMATEHOLO.png"},
        { label: "18oz Duo Hydro - 2 Lids", extra: 1, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/18oz%20hydro.png"},
        { label: "25oz Duo Hydro - 2 Lids", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/5oz%20hydro.png"},
        { label: "32oz Duo Hydro - 2 Lids", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/32oz%20hydro.png"},
        { label: "40oz Duo Hydro - 2 Lids", extra: 5, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40oz%20hydro.png"},
        { label: "Duo Hydro Toddler - 2 Lids & Handles", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/new-design-studio/main/studio-mockups/blank.png"}
      ]
    },

    {
      id: "BO-HHV301",
      name: "Hydro Hound Tumbler - 32oz", 
      category: "Drinkware & Kitchenware",
      description: "32oz hydro hound tumbler with an attached portable bowl, perfect for custom designs for pet lovers.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/hydro%20hound.png"],
      basePrice: 43.99,
      variations: [
        { label: "Two Tone", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/hydro%20hound.png"},
        { label: "White", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/hydro%20hound.png"},
        { label: "Clear", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/hydro%20hound.png"},
      ]
    },

    {
      id: "TU-BSV201",
      name: "40oz Big Swig Tumbler", 
      category: "Drinkware & Kitchenware",
      description: "Large 40oz holographic tumbler designed for bold custom designs and all-day hydration. Ombre variations with souvenier keychain.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBBIGSWIG1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBHOLOBIGSWIG1.png", "https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/black.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/blue.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/green.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/orange.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/purple.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/red.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/sand.png"],
      basePrice: 26.99,
      variations: [
        { label: "White", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBBIGSWIG1.png"},
        { label: "Holographic", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBHOLOBIGSWIG1.png"},
        { label: "Ombre Black w/ Keychain", extra: 7, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/black.png"},
        { label: "Ombre Blue w/ Keychain", extra: 7, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/blue.png"},
        { label: "Ombre Green w/ Keychain", extra: 7, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/green.png"},
        { label: "Ombre Orange w/ Keychain", extra: 7, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/orange.png"},
        { label: "Ombre Purple w/ Keychain", extra: 7, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/purple.png"},
        { label: "Ombre Red w/ Keychain", extra: 7, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/red.png"},
        { label: "Ombre Sand w/ Keychain", extra: 7, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/sand.png"}
      ]
    },

    {
      id: "TU-TV5001",
      name: "Traveler Tumbler", 
      category: "Drinkware & Kitchenware",
      description: "Large capacity traveler tumbler perfect for custom artwork while keeping drinks hot or cold longer.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELEROMBREGROUP_9b9e5916-89ea-412f-b34b-ee68656293ee.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELERWHITE.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/trio%20traveler.png"],
      basePrice:29.99 ,
      variations: [
        { label: "White 40oz", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELERWHITE.png"},
        { label: "Green 40oz Holographic", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELEROMBREGROUP_9b9e5916-89ea-412f-b34b-ee68656293ee.png"},
        { label: "Pink 40oz Holographic", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELEROMBREGROUP_9b9e5916-89ea-412f-b34b-ee68656293ee.png"},
        { label: "White 40oz Holographic", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/40SUBTRAVELEROMBREGROUP_9b9e5916-89ea-412f-b34b-ee68656293ee.png"},
        { label: "30oz Trio Traveler - 3 Interchangable handles", extra: 2, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/trio%20traveler.png"}
      ]
    },

    {
      id: "BO-FV1001",
      name: "Flask Bottle", 
      category: "Drinkware & Kitchenware",
      description: "Sleek 7oz flask bottle ready for custom designs, perfect for gifts, events, or personal use.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/Flask.png"],
      basePrice: 16.99,
    },

    {
      id: "BO-BBVN01",
      name: "Baby Bottle", 
      category: "Drinkware & Kitchenware",
      description: "Fully customizable baby bottle with colic deterent straw.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/custom-bundles/main/Pics/baby%20bottle.png"],
      basePrice: 17.99,
    },

          // ***************CATEGORY - Home & Living******************

    {
      id: "HO-ASPVN1",
      name: "Aluminum Spray Bottle - 16oz", 
      category: "Home & Living",
      description: "Durable 16oz aluminum spray bottle ready for custom branding or personalized designs.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/16SUBSPRAY1.png"],
      basePrice: 10.99,
    },

     {
      id: "HO-SDVN01",
      name: "Soap Dispenser", 
      category: "Home & Living",
      description: "Stylish pump soap dispenser ready for custom designs, perfect for kitchens and bathrooms.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-248.png"],
      basePrice: 10.99,
    },

    {
      id: "HO-BV4001",
      name: "Blanket", 
      category: "Home & Living",
      description: "Soft customizable blanket available in four styles, perfect for personalized photos and designs.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SUBBLANKETS1_24212936-9b47-4d9a-b46b-2fb9ab646052.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/O1CN016TVKnN2Eb34CBdD9t__3230388762-0-cib_1_1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/O1CN01IuHBt12Eb34QqFdtd__3230388762-0-cib_1.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-07-13at10.20.44AM.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/blanket20measurement.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/blanket9measure.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/moonblanksetsize.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/pawsizeblanket.png"],
      basePrice: 31.99,
      variations: [
        { label: "14 Panel Moon", extra: 4, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/O1CN016TVKnN2Eb34CBdD9t__3230388762-0-cib_1_1.png"},
        { label: "15 Panel Paw", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/O1CN01IuHBt12Eb34QqFdtd__3230388762-0-cib_1.png"},
        { label: "9 Panel", extra: 1, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-07-13at10.20.44AM.png"},
        { label: "20 Panel", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/ScreenShot2022-07-13at10.20.44AM.png"}
      ]
    },

    {
      id: "HO-SPFVN1",
      name: "Slate Photo Frame with Stand", 
      category: "Home & Living",
      description: "Elegant slate photo frame with a display stand, perfect for custom photo prints and keepsakes - 7.8 inches x 11.8 inches, display stand included.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/c79100bd9a1c81231de8bfb99f98f395_L.png"],
      basePrice: 21.99,
    },

    {
      id: "HO-TWPHV2",
      name: "Tabletop Wood Photo Panel", 
      category: "Home & Living",
      description: "Natural wood photo panel designed for vibrant custom photo prints and home décor.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15379E15965E1.png"],
      basePrice: 18.99,
      variations: [
        { label: "4x6 inches", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15379E15965E1.png"},
        { label: "5x7 inches", extra: 3, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15379E15965E1.png"}
      ]
    },

    {
      id: "HO-WPPV21",
      name: "Wood Photo Panel", 
      category: "Home & Living",
      description: "Beautiful wood photo panel designed for personalized photo prints and custom artwork. - inches x 10 inches. Perfect for showcasing your precious moments or personalized gifting.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15298E15618E3.png","https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/weathered.png"],
      basePrice: 17.99,
      variations: [
        { label: "Walnut", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/15298E15618E3.png"},
        { label: "Weathered", extra: 0, image:"https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics2/weathered.png"}
      ]
    },

    {
      id: "HO-CV2001",
      name: "Candle Jar", 
      category: "Home & Living",
      description: "10oz glass candle jar ready for custom designs, perfect for gifts or decorative use.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/Candle%20Jar.png"],
      basePrice:8.99
    },

    {
      id: "HO-SSJV11",
      name: "Sassy Storage Jar", 
      category: "Home & Living",
      description: "Fun and stylish storage jar perfect for custom designs and decorative organization.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/HOGG-440.png"],
      basePrice:15.99
    },
       
    {
      id: "HO-PWBVN1",
      name: "Patterned Wooden Box with Transparent Top", 
      category: "Home & Living",
      description:  "Customizable wood burned keepsake box for all you precious memories.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/custom-bundles/main/Pics/Patterned%20Wooden%20box.png"],
      basePrice: 26.99,
    }, 
    
     {
      id: "HO-WBVN01",
      name: "Plain Wooden Box", 
      category: "Home & Living",
      description:  "Customizable wood burned keepsake box for all you precious memories.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/custom-bundles/main/Pics/Plain%20Wooden%20Box.png"],
      basePrice: 26.99,
    },   
       

            // ***************CATEGORY - Games & Gifts******************

    {
      id: "GA-CPVN01",
      name: "Cardboard Puzzle",
      category: "Games & Gifts",
      description: "9.5x7.5 inches, 30 pieces. Customize it with memories, kids art or whatever your heart desires.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/store-app-full-checkout/main/product-pics/SFS-SPUZ30puzzle_1.png"],
      basePrice: 10.99
    },

    {
      id: "GA-CCVM01",
      name: "Custom Cards ",
      category: "Games & Gifts",
      description: "Versatile custom card that can be used for business cards, playing cards, invitations, and more.",
      images: ["https://raw.githubusercontent.com/diminfomacon-beep/custom-bundles/main/Pics/playing%20cards.png"],
      basePrice: 17.99
    }
    
];
