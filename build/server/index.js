import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useNavigate, useLocation, Link, useParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect, useRef, useMemo } from "react";
import { Landmark, Waves, Utensils, MapPin, Search, X, Menu, Map, Info, Heart, Facebook, Instagram, Twitter, Phone, Mail, ExternalLink, ArrowRight, ArrowLeft, UtensilsCrossed } from "lucide-react";
import { createClient } from "@sanity/client";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
}];
function Layout$1({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout: Layout$1,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const SearchResults = ({ results, onClose }) => {
  const navigate = useNavigate();
  const getIcon = (type) => {
    switch (type) {
      case "town":
        return /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" });
      case "food":
        return /* @__PURE__ */ jsx(Utensils, { className: "w-4 h-4" });
      case "beach":
        return /* @__PURE__ */ jsx(Waves, { className: "w-4 h-4" });
      case "attraction":
        return /* @__PURE__ */ jsx(Landmark, { className: "w-4 h-4" });
    }
  };
  const handleClick = (result) => {
    switch (result.type) {
      case "town":
        navigate(`/towns/${result.id}`);
        break;
      case "food":
        navigate(`/foods`);
        break;
      case "beach":
        navigate(`/beaches/${result.id}`);
        break;
      case "attraction":
        navigate(`/towns/${result.id.split("-")[0]}`);
        break;
    }
    onClose();
  };
  if (results.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 z-50 mt-2 overflow-hidden bg-white rounded-lg shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "max-h-96 overflow-y-auto", children: results.map((result) => /* @__PURE__ */ jsxs(
    "button",
    {
      className: "flex items-start w-full p-4 text-left transition-colors hover:bg-gray-50",
      onClick: () => handleClick(result),
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8 mr-4 text-amber-600 bg-amber-100 rounded-full", children: getIcon(result.type) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: result.name }),
            /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs font-medium text-amber-800 bg-amber-100 rounded-full", children: result.type })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500 line-clamp-2", children: result.description })
        ] })
      ]
    },
    `${result.type}-${result.id}`
  )) }) });
};
const towns = [
  {
    id: "pyin-oo-lwin",
    name: "Pyin Oo Lwin",
    description: "Pyin Oo Lwin, once known as Maymyo during the British colonial era, is a charming hill town just east of Mandalay that still reflects its colonial roots. Founded as a summer retreat for the British in the late 19th century, it became famous for its cool climate, pine forests, and colorful flower gardens. The town is dotted with colonial-style houses, horse-drawn carriages, and Christian churches that preserve its old-world charm. Today, Pyin Oo Lwin is celebrated for its sprawling National Kandawgyi Botanical Gardens, coffee plantations, and nearby waterfalls such as Anisakan and Pwe Kauk, making it a refreshing escape from the heat of the plains. With its blend of history, natural beauty, and cultural diversity, Pyin Oo Lwin stands as a serene retreat where the past gracefully meets the present.",
    image: "https://www.goodlifemyanmar.net/wp-content/uploads/2017/06/Botanical-Garden.jpg",
    rating: 4.5,
    region: "Mandalay Region",
    coordinates: {
      lat: 22.0359,
      lng: 96.4568
    },
    attractions: [
      "National Kandawgyi Gardens",
      "Pwe Kauk Falls",
      "Chinese Temple",
      "Peik Chin Myaung Cave"
    ],
    restaurants: [
      "maw-da-nu",
      "san-francisco",
      "feel-restaurant",
      "december-waterfall",
      "forest-cafe",
      "one-piece-bbq"
    ],
    signatureDishes: ["maymyo-coffee", "strawberry-products", "dairy-products"]
  },
  {
    id: "dawei",
    name: "Dawei",
    description: "Dawei, the southern jewel of Myanmar, is a city where time seems to slow down, offering a peaceful retreat from the hectic pace of modern life. Surrounded by emerald hills and the sparkling waters of the Andaman Sea, it is a place where natural beauty and cultural heritage coexist in harmony. The city’s streets are lined with traditional wooden houses, vibrant local markets, and ancient pagodas that tell stories of centuries past. Dawei is also famed for its golden beaches and quiet coastal villages, where fresh seafood and warm smiles welcome visitors. Whether wandering through lush landscapes, exploring hidden temples, or enjoying the serene coastline, Dawei captivates travelers with its tranquil charm and authentic Myanmar spirit.",
    image: "https://images.skypicker.com/?image=https%3A%2F%2Fimages.kiwi.com%2Fphotos%2Foriginals%2Fdawei-township_mm.jpg&width=768&height=395&fit=crop&format=original&dpr=2",
    rating: 4.4,
    region: "Tanintharyi Region",
    coordinates: {
      lat: 14.0823,
      lng: 98.1915
    },
    attractions: [
      "Maungmagan Beach",
      "Dawei Night Market",
      "Shwe Taung Zar Pagoda",
      "Traditional Market"
    ],
    restaurants: [
      "bamboo-garden",
      "shwe-hnin-si",
      "old-house-cafe",
      "little-eden",
      "sawardi"
    ],
    signatureDishes: ["kat-kyi-kaik", "seafood-curry"]
  },
  {
    id: "kawthaung",
    name: "Kawthaung",
    description: "Kawthaung, Myanmar’s southernmost town, is a captivating gateway to the Andaman Sea where nature, culture, and history intertwine. Perched on the border with Thailand, the town is a lively hub of trade and travel, yet it preserves a laid-back charm that reflects the slow rhythm of life in southern Myanmar. Lush tropical forests and winding rivers embrace the town, while golden beaches and nearby islands invite travelers to explore serene coastal escapes. Its bustling markets brim with fresh seafood, local produce, and handmade crafts, giving a glimpse into the daily life and traditions of the people. Kawthaung is not just a border town—it is a place of contrasts, where vibrant human activity meets tranquil natural beauty, leaving every visitor with a lasting impression of Myanmar’s southernmost wonders.",
    image: "https://cdn.prod.website-files.com/62de641ce3132f751e31416e/63691851ff42b16ac7bec6a7_mrC3tGOv8SBkf5_a7FBCZb4VVtwYT7xwGfuyxGKda7HL9Ycs5sD_8Wy6R4PVkjr_t-pPir1Roo7E2wBbsXow5rZuhUicrNKbHu5cLMRvplhSPALMaJBSu2eMYcK-ZqxQTSrkd49AeO3l9loPEE1vo1_SsEnH08p_hofbcQqkGo8AFgQR6J1MgJXAVj5Stg.jpeg",
    rating: 4.3,
    region: "Tanintharyi Region",
    coordinates: {
      lat: 10.0492,
      lng: 98.5519
    },
    attractions: [
      "Victoria Point",
      "Pyi Daw Aye Pagoda",
      "King Bayint Naung Statue",
      "Mergui Archipelago"
    ],
    restaurants: ["sky-view", "victoria-cliff", "kawthaung-yummy"],
    signatureDishes: ["seafood-curry", "grilled-fish"]
  },
  {
    id: "myeik",
    name: "Myeik",
    description: "Myeik, often called the gateway to the Myeik Archipelago, is a coastal city in southern Myanmar where history, culture, and nature converge. The city’s streets are lined with colonial-era buildings, vibrant markets, and traditional wooden houses that echo the charm of its past. Myeik is surrounded by lush hills, winding rivers, and the turquoise waters of the Andaman Sea, offering both scenic beauty and abundant marine life. From bustling local markets filled with fresh seafood to serene coastal villages and nearby islands, Myeik is a place of contrasts—alive with energy yet effortlessly tranquil. Travelers can explore hidden temples, watch traditional fishing communities at work, or take boat trips to countless islands, each offering untouched beaches and natural splendor. Myeik captures the essence of southern Myanmar, blending culture, history, and nature into a destination full of discovery.",
    image: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/68082503913e99005eb9ab105c382a58b8bd82c7/big-38d1d89484040ac054f90a3e77b4097e.jpg",
    rating: 4.4,
    region: "Tanintharyi Region",
    coordinates: {
      lat: 12.4318,
      lng: 98.6062
    },
    attractions: [
      "Theindawgyi Pagoda",
      "Pearl Farms",
      "Myeik Archipelago",
      "Night Market"
    ],
    restaurants: ["pin-lae-may", "my-mergui-bar", "hotel-drift", "mr-bamboo"],
    signatureDishes: ["seafood-curry", "grilled-fish", "kat-kyi-kaik"]
  },
  {
    id: "nay-pyi-daw",
    name: "Nay Pyi Daw",
    description: "Nay Pyi Taw, officially declared the capital of Myanmar in 2005, is a city that represents the nation’s modern chapter while standing apart from the historical capitals like Mandalay and Yangon. Purpose-built with a vision of order and progress, it is laid out in wide, organized zones that include residential areas, government districts, and business centers. The city’s vast highways, sometimes wide enough to fit more than a dozen lanes, have become one of its most striking and unique features. At its heart stands the Uppatasanti Pagoda, a graceful replica of Yangon’s Shwedagon Pagoda, symbolizing spiritual continuity in a modern setting. Nay Pyi Taw also houses the grand Parliament Complex and impressive ministerial buildings, highlighting its role as the administrative hub of the country. Beyond politics, the city offers family-friendly attractions such as the Nay Pyi Taw Zoological Gardens, Safari Park, and the National Museum, which showcases Myanmar’s rich cultural heritage. With its spacious parks, hotels, and conference centers, the city has also become a growing venue for international events and summits. Though still young compared to other cities, Nay Pyi Taw reflects Myanmar’s aspirations for the future while offering visitors a glimpse into its evolving identity.",
    image: "https://blog.bangkokair.com/wp-content/uploads/2019/05/Pyidaungsu-Hluttaw.jpg",
    rating: 4.3,
    region: "Nay Pyi Daw Union Territory",
    coordinates: {
      lat: 19.7475,
      lng: 96.115
    },
    attractions: [
      "Uppatasanti Pagoda",
      "Myanmar Gems Museum",
      "National Landmark Garden",
      "Water Fountain Garden"
    ],
    restaurants: [
      "hta-naung",
      "mon-ma-2",
      "new-thai-yai",
      "nature-tea-house",
      "la-la-leora",
      "u-soe-gyi"
    ],
    signatureDishes: ["mohinga", "bambooshoot"]
  },
  {
    id: "yangon",
    name: "Yangon",
    description: "Yangon, the former capital and the largest city of Myanmar, stands as a vibrant and dynamic metropolis that reflects the country’s cultural and historical richness. The city is known for its unique blend of colonial-era architecture, modern developments, and traditional influences, which create a striking urban landscape. Its bustling street markets offer an authentic glimpse into local life, with colorful stalls selling fresh produce, handmade crafts, and traditional snacks. Tranquil lakes and green parks provide refreshing escapes from the busy streets, adding to the city’s charm. At the heart of Yangon’s identity is its spiritual heritage, highlighted by the magnificent Shwedagon Pagoda, a golden stupa that rises majestically over the skyline and serves as one of the most sacred Buddhist sites in the world. Beyond its religious landmarks, Yangon presents a rich tapestry of cultures shaped by diverse communities, offering visitors the chance to explore an array of cuisines, from traditional Burmese dishes to international flavors. The city also boasts a lively arts and cultural scene, with galleries, theaters, and music events that showcase Myanmar’s evolving creativity.",
    image: "https://www.eyeonasia.gov.sg/images/asean-countries/Yangon%20snapshot%20iso.jpg",
    rating: 4.6,
    region: "Yangon Region",
    coordinates: {
      lat: 16.8661,
      lng: 96.1951
    },
    attractions: [
      "Shwedagon Pagoda",
      "Sule Pagoda",
      "Bogyoke Aung San Market",
      "National Museum"
    ],
    restaurants: [
      "Feel Myanmar Food",
      "999 Shan Noodle Shop",
      "Rangoon Tea House",
      "Shan Yoe Yar",
      "Monsoon Restaurant & Bar"
    ],
    signatureDishes: ["mohinga", "Burmese-pork-offal-skewers", "biryani"]
  },
  {
    id: "mandalay",
    name: "Mandalay",
    description: "Mandalay, the last royal capital of Myanmar founded in 1857 by King Mindon, is a city that carries the essence of history while embracing the pulse of modern life. Once centered around the majestic Mandalay Palace, the city still reflects the grandeur of its royal past, even though much of the palace was lost during World War II. At its heart lies the sacred Mahamuni Pagoda, home to one of the most venerated Buddha images in the country, attracting pilgrims and travelers alike. The city is also famed for its artisans who continue to practice age-old crafts such as gold leaf making, wood carving, and silk weaving, keeping traditions alive through generations. Rising above the landscape, Mandalay Hill offers sweeping views of the Irrawaddy River and golden sunsets that captivate every visitor. Beyond its historic charm, Mandalay bustles with local markets, monasteries, and a vibrant daily rhythm, making it a unique blend of spiritual heritage, cultural treasures, and urban energy.",
    image: "https://media02.stockfood.com/largepreviews/MjIwMzQyODQ0Nw==/71078337-Mandalay-City-Fort-and-Palace-reflected-in-the-moat-surrrounding-the-compound-at-night-Mandalay-Myanmar-Burma.jpg",
    rating: 4.5,
    region: "Mandalay Region",
    coordinates: {
      lat: 21.9747,
      lng: 96.0878
    },
    attractions: [
      "Mandalay Hill",
      "Kuthodaw Pagoda",
      "U Bein Bridge",
      "Mahamuni Buddha Temple"
    ],
    signatureDishes: ["nan-gyi-thoke", "htoe-mont", "tea-leaf-salad", "mee-shay"],
    restaurants: [
      "unique-mandalay-tea-room",
      "bbb-european-restaurant",
      "mingalarbar-restaurants",
      "the-palace-by-golden-duck",
      "karaweik-cafe"
    ]
  },
  {
    id: "bagan",
    name: "Bagan",
    description: "Bagan, the ancient city of over 2,000 surviving temples and pagodas, stands as Myanmar’s most iconic archaeological treasure and a timeless symbol of its spiritual heritage. Flourishing as the capital of the Pagan Kingdom from the 9th to the 13th century, it was once home to more than 10,000 Buddhist structures, built under the devotion of kings and artisans who shaped the golden era of Myanmar’s history. Today, Bagan is recognized as a UNESCO World Heritage Site, where the plains are dotted with countless stupas, monasteries, and mural-filled temples that glow with golden light at sunrise and sunset. Highlights such as the Ananda Temple, Dhammayangyi Temple, and Shwezigon Pagoda showcase architectural brilliance and centuries of devotion. Beyond history, Bagan enchants visitors with its traditional lacquerware crafts, horse-cart rides, and the unforgettable experience of hot-air ballooning over the temple plain. As one walks among its ancient ruins, Bagan feels like an open-air museum where every brick whispers stories of faith, culture, and a glorious past that continues to inspire.",
    image: "https://content.r9cdn.net/rimg/dimg/39/01/de981725-city-41060-167f64bd01e.jpg?crop=true&width=1366&height=768&xhint=1548&yhint=1584",
    rating: 4.8,
    region: "Mandalay Region",
    coordinates: {
      lat: 21.1717,
      lng: 94.8585
    },
    attractions: [
      "Ananda Temple",
      "Shwesandaw Pagoda",
      "Dhammayangyi Temple",
      "Hot Air Balloon Rides"
    ],
    signatureDishes: ["palm-wine", "burmese-fritters", "jaggery"],
    restaurants: [
      "shwe-myanmar-bagan",
      "tharabar-3",
      "zee-yeik-fritters",
      "hnan-phat-chin",
      "sharkys-bagan"
    ]
  },
  {
    id: "inle-lake",
    name: "Inle Lake",
    description: "Inle Lake, located in the heart of the Shan Hills, is one of Myanmar’s most enchanting destinations. Famous for its floating gardens, stilted villages, and the unique leg-rowing fishermen, the lake offers a glimpse into a way of life that has remained unchanged for centuries. Local communities cultivate vegetables and flowers directly on the water, while colorful markets and temples thrive along the shores. Visitors can explore the lake by traditional wooden boats, witnessing artisans crafting silverware, weaving silk, and preparing local delicacies. Misty mornings, calm waters, and vibrant local culture create a magical atmosphere, making Inle Lake a perfect blend of natural beauty, tradition, and serenity.",
    image: "https://inledaytours.com/wp-content/uploads/2015/11/slide-1.jpg",
    rating: 4.7,
    region: "Shan State",
    coordinates: {
      lat: 20.5862,
      lng: 96.9101
    },
    attractions: [
      "Floating Villages and Gardens",
      "Phaung Daw Oo Pagoda",
      "Indein Pagoda Complex",
      "Traditional Leg Rowing Fishermen"
    ],
    signatureDishes: ["shan-noodles", "inle-fish-curry", "yellow-rice"]
  },
  {
    id: "hpa-an",
    name: "Hpa-An",
    description: "Hpa-An, the peaceful capital of Kayin State, is a city where striking natural beauty and rich cultural heritage come together in perfect harmony. Cradled by the Thanlwin River and surrounded by towering limestone mountains, Hpa-An offers travelers a stunning backdrop of emerald hills and winding waterways. The city is scattered with ancient pagodas, vibrant local markets, and charming wooden houses that reflect its deep-rooted traditions. Iconic natural attractions like Mount Zwekabin, Sadan Cave, and Kawgun Cave reveal dramatic landscapes, hidden shrines, and centuries-old Buddhist carvings, creating a sense of wonder for every visitor. Life in Hpa-An flows at a gentle, calming pace—riverside strolls, lush rice paddies, and interactions with welcoming local communities immerse travelers in an authentic Burmese experience. From tranquil mornings along the river to breathtaking sunsets over the mountains, Hpa-An captivates all who visit, leaving an unforgettable impression of Myanmar’s serene southern heartland.",
    image: "https://t3.ftcdn.net/jpg/01/41/01/00/360_F_141010058_KNn5kstKlcVvhckx8B0wdikQVlbiKI7V.jpg",
    rating: 4.5,
    region: "Kayin State",
    coordinates: {
      lat: 16.8895,
      lng: 97.638
    },
    attractions: [
      "Mount Zwegabin",
      "Kyauk Ka Lat Pagoda",
      "Sadan Cave",
      "Lumbini Garden"
    ],
    signatureDishes: ["talabaw"],
    restaurants: [
      "hpa-an-night-market",
      "cafe-kto",
      "veranda-ycc",
      "naw-ta-yar",
      "eat-me"
    ]
  },
  {
    id: "ngapali",
    name: "Ngapali Beach",
    description: "Ngapali Beach is Myanmar’s premier coastal retreat, boasting powdery white sands, crystal-clear waters, and swaying coconut palms. The area is perfect for relaxation, water sports, and fresh seafood feasts. Local fishing villages and vibrant sunsets add to the charm of this idyllic beach destination.",
    image: "https://asialinkstravel.com/ckfinder/userfiles/images/Ngapali-beach-1.jpg",
    rating: 4.9,
    region: "Rakhine State",
    coordinates: {
      lat: 18.4088,
      lng: 94.364
    },
    attractions: [
      "Pearl Island",
      "Fishing Villages",
      "Sunset Point",
      "Snorkeling"
    ],
    signatureDishes: ["seafood-curry", "grilled-fish", "coconut-noodles"]
  },
  {
    id: "ngwe-saung",
    name: "Ngwe Saung",
    description: "Ngwe Saung is a serene beach town along the Bay of Bengal, known for its long stretches of white sand and clear turquoise waters. It offers a peaceful escape with opportunities for island hopping, snorkeling, and sunset watching. The laid-back vibe and natural beauty make it a favorite among travelers seeking relaxation.",
    image: "https://www.mcs-myanmartravel.com/wp-content/uploads/2015/07/ngwesaung.jpg",
    rating: 4.7,
    region: "Ayeyarwady Region",
    coordinates: {
      lat: 16.7778,
      lng: 94.55
    },
    attractions: [
      "Long Beach",
      "Island Hopping",
      "Water Sports",
      "Sunset Views"
    ],
    signatureDishes: ["seafood-curry", "grilled-fish"]
  },
  {
    id: "chaung-tha",
    name: "Chaung Tha",
    description: "Chaung Tha is a lively beach resort town popular with locals and visitors alike. It features golden sands, gentle waves, and a relaxed, friendly atmosphere. The town is dotted with fishing villages, local markets, and offers a range of water activities for all ages.",
    image: "https://pix6.agoda.net/hotelImages/110/1101602/1101602_16101310580047708855.jpg?s=600x450",
    rating: 4.5,
    region: "Ayeyarwady Region",
    coordinates: {
      lat: 16.5,
      lng: 94.3333
    },
    attractions: [
      "Beach Activities",
      "Fishing Village",
      "Island Tours",
      "Local Markets"
    ],
    signatureDishes: ["seafood-curry", "grilled-fish", "coconut-noodles"]
  },
  {
    id: "taunggyi",
    name: "Taunggyi",
    description: "Taunggyi, the lively capital of Shan State, rests high in the mountains, offering a refreshing climate and sweeping views of rolling hills. Unlike many cities in Myanmar, it feels both modern and traditional—bustling markets sit alongside serene pagodas, while quiet neighborhoods are framed by pine trees and misty ridges. The city is famous for its colorful Tazaungdaing Balloon Festival, when hot-air balloons carrying fireworks light up the night sky in a dazzling spectacle. Taunggyi also serves as a cultural hub, home to diverse ethnic groups such as Shan, Pa-O, and Intha, each adding their own traditions, cuisines, and festivals to the city’s character. With its cool weather, vibrant local life, and easy access to attractions like Inle Lake and nearby caves, Taunggyi is more than a hill station—it’s a city where nature, culture, and celebration blend together beautifully.",
    image: "https://cdn.prod.website-files.com/62de641ce3132f751e31416e/62de641ce3132f6ca331495e_Fire%20Balloon%201.jpg",
    rating: 4.6,
    region: "Shan State",
    coordinates: {
      lat: 20.7833,
      lng: 97.0333
    },
    attractions: [
      "Taunggyi Balloon Festival",
      "Sulamuni Pagoda",
      "Aye Tharyar Vineyard & Winery",
      "Taunggyi Myoma Market"
    ],
    restaurants: [
      "win-restaurant",
      "golden-crown",
      "shwe-myanmar",
      "royal-taunggyi"
    ],
    signatureDishes: ["shan-noodles", "tofu-nway", "yellow-rice"]
  },
  {
    id: "kalaw",
    name: "Kalaw",
    description: "Kalaw, a charming hill town in Shan State, is known for its cool mountain air, pine forests, and colonial-era ambiance. Once a British hill station, the town still carries traces of old-world charm with its quaint houses, flower gardens, and quiet streets. Kalaw is especially famous as a trekking paradise travelers set out on scenic trails that wind through green hills, tea plantations, and remote ethnic villages of the Pa-O, Danu, and Taung Yo communities. The town’s lively morning market offers fresh produce and local crafts, giving visitors a taste of authentic daily life. Beyond trekking, Kalaw enchants with its peaceful monasteries, caves filled with Buddha images, and the laid-back rhythm of a town surrounded by natural beauty. Often seen as a gateway to Inle Lake, Kalaw is more than just a stopover it is a refreshing retreat where culture and nature meet in harmony.",
    image: "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Kalaw_0.jpg",
    rating: 4.7,
    region: "Shan State",
    coordinates: {
      lat: 20.6333,
      lng: 96.5667
    },
    attractions: [
      "Kalaw to Inle Lake Trek",
      "Thein Taung Pagoda and Monastery",
      "Hnee Pagoda",
      "Kalaw Local Market"
    ],
    restaurants: [
      "maluca-villa",
      "kalaw-cafeyard",
      "sky-house",
      "thu-maung",
      "kalaw-market"
    ],
    signatureDishes: ["shan-noodles", "tofu-nway", "local-coffee"]
  },
  {
    id: "nyaung-shwe",
    name: "Nyaung Shwe",
    description: "Nyaung Shwe, the lively gateway to Inle Lake, is a town that beautifully blends tradition with modern charm. It is the main hub where travelers begin their journey to the famous lake, yet the town itself has much to offer. Bustling canals lined with boats, narrow streets filled with cozy guesthouses, teahouses, and colorful markets create an inviting atmosphere. Visitors can explore historic monasteries such as Yadana Man Aung Pagoda and Shwe Yan Pyay Monastery, known for its unique oval windows and red teakwood structure. The town is also home to vibrant local markets where ethnic groups like the Pa-O and Shan come to trade fresh produce, handicrafts, and traditional textiles. Cycling around Nyaung Shwe reveals hidden vineyards, peaceful countryside views, and glimpses of daily village life. With its relaxed energy, cultural richness, and convenient access to Inle, Nyaung Shwe is more than just a starting point—it is a destination worth savoring on its own.",
    image: "https://kite-tales.org/files/uploads/haw.jpg",
    rating: 4.8,
    region: "Shan State",
    coordinates: {
      lat: 20.6667,
      lng: 96.9333
    },
    attractions: [
      "Inle Lake Access",
      "Local Markets",
      "Traditional Architecture",
      "Boat Tours"
    ],
    restaurants: ["pwe-taw-win", "mann-mann-rooftop", "thanakha-garden", "golden-kite"],
    signatureDishes: ["inle-fish-curry", "yellow-rice", "shan-noodles"]
  },
  {
    id: "Kyauk-se",
    name: "Kyaukse",
    description: "Kyaukse, a historic town in Myanmar’s Mandalay Region, is often called the “rice bowl” of the country for its fertile lands that have sustained generations. Its history stretches back to the Bagan era, when ancient irrigation systems built under King Anawrahta turned the region into a prosperous agricultural hub. Today, Kyaukse is most famous for its grand Kyaukse Elephant Dance Festival, held annually during Thadingyut, where life-sized papier-mâché elephants come alive in vibrant performances honoring the Buddha. The town is also home to revered pagodas such as Shwe Tha Lyaung Pagoda and Tamote Shinpin Shwegu Gyi Temple, showcasing ties to Myanmar’s religious and cultural heritage. With its blend of historical importance, spiritual landmarks, and colorful traditions, Kyaukse offers visitors a unique glimpse into Myanmar’s deep-rooted culture and rural charm.",
    image: "https://www.shutterstock.com/image-photo/sunset-view-kyaukse-townmandalaymyanmarasia-260nw-1230259012.jpg",
    rating: 4.1,
    region: "Mandalay Region",
    coordinates: {
      lat: 20.7333,
      lng: 96.1167
    },
    attractions: [
      "Mahar Shwe Theindaw Buddhist Temple",
      "Tamote Shinbin Shwegu",
      "Mahar Shwe Theindaw Buddhist Temple",
      "Sin Gaung Taung"
    ],
    restaurants: ["daw-mya-chit", "htun-thitsa", "kyar-pauk"],
    signatureDishes: ["phat-htamin", "pratha"]
  },
  {
    id: "mawlamyaing",
    name: "Mawlamyaing",
    description: "Mawlamyaing, the charming capital of Mon State, is a riverside city that beautifully weaves together history, culture, and natural scenery. Once an important colonial trading port, the city still preserves its heritage in the form of old churches, mosques, and colonial-era buildings that line its streets, standing gracefully alongside bustling markets and gilded pagodas. Set against the backdrop of the Thanlwin River and rolling green hills, Mawlamyaing is renowned for its breathtaking sunsets—scenes so captivating they inspired poets and writers like Rudyard Kipling. Beyond its urban charm, the city serves as a gateway to unique experiences such as exploring limestone caves filled with Buddha images, visiting quiet islands scattered along the river, and discovering Mon traditions that have shaped the region for centuries. With its blend of cultural diversity, historical significance, and stunning natural landscapes, Mawlamyaing offers travelers a journey into the timeless spirit of southern Myanmar.",
    image: "https://t3.ftcdn.net/jpg/01/11/67/46/240_F_111674657_xksnWF95QW8FUL7Q9y5Jhb7pWK4glokZ.jpg",
    rating: 4.4,
    region: "Mon State",
    coordinates: {
      lat: 16.4833,
      lng: 97.6167
    },
    attractions: ["Kyaikthanlan Pagoda", "Gaungse Kyun", "Bilu Kyun"],
    signatureDishes: ["mohinga", "thingyan-rice", "hsi-htamin"],
    restaurants: [
      "mawlamyaing-strand-night-market",
      "pyaw-yar-camp",
      "bamboo-hut",
      "doh-yoe-yar"
    ]
  }
];
const foods$1 = [
  {
    id: "mohinga",
    name: "Mohinga",
    description: "The national dish of Myanmar, Mohinga is a flavorful fish soup with rice noodles, topped with crispy fritters and fresh herbs. Traditionally eaten for breakfast, it's now enjoyed throughout the day across the country.",
    image: "https://pinkysnowfoods.co.uk/cdn/shop/files/A5A48E2A-5072-489B-B768-95EB2EAB65F3.webp?v=1723143581&width=1445",
    rating: 4.8,
    origin: ["Yangon", "Nationwide"],
    tasteTags: ["savory", "aromatic", "spicy", "fresh"],
    ingredients: [
      "rice noodles",
      "fish",
      "banana stem",
      "lemongrass",
      "garlic",
      "onions",
      "ginger",
      "fish sauce"
    ],
    category: "main",
    spiceLevel: 3,
    isVegetarian: false,
    wikipediaUrl: null
  },
  {
    id: "tea-leaf-salad",
    name: "Lahpet Thoke (Tea Leaf Salad)",
    description: "A unique savory salad made from fermented tea leaves, mixed with crunchy fried beans, peas, peanuts, and sesame seeds. The dish showcases Myanmar's distinctive culinary heritage as one of the few cultures that eats tea leaves rather than just drinking them.",
    image: "https://image.vovworld.vn/w500/Uploaded/vovworld/qosino/2019_05_10/myanmarsalad_AJRI.jpg",
    rating: 4.7,
    origin: ["Shan State", "Nationwide"],
    tasteTags: ["umami", "tangy", "crunchy", "earthy"],
    ingredients: [
      "fermented tea leaves",
      "cabbage",
      "tomatoes",
      "peanuts",
      "sesame seeds",
      "fried garlic",
      "dried shrimp",
      "lime juice"
    ],
    category: "appetizer",
    spiceLevel: 2,
    isVegetarian: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Lahpet"
  },
  {
    id: "shan-noodles",
    name: "Shan Noodles",
    description: "A beloved dish from Shan State featuring thin rice noodles with marinated chicken or pork, tomatoes, and garlic in a flavorful broth. Often served with a side of pickled vegetables.",
    image: "https://myfoodmyanmar.com/wp-content/uploads/2018/08/shutterstock_590487038.jpg",
    rating: 4.6,
    origin: ["Shan State"],
    tasteTags: ["savory", "tangy", "spicy", "hearty"],
    ingredients: [
      "rice noodles",
      "chicken",
      "tomatoes",
      "garlic",
      "ground peanuts",
      "chili oil"
    ],
    category: "main",
    spiceLevel: 3,
    isVegetarian: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Khao_soi"
  },
  {
    id: "burmese-curry",
    name: "Burmese Curry",
    description: "Rich and oil-based, Burmese curries are less spicy than those of neighboring countries but full of flavor. They're typically served with rice, a variety of side dishes, and soup.",
    image: "https://www.mingalabarrestaurant.com/images/meals.jpg",
    rating: 4.5,
    origin: ["Mandalay", "Yangon"],
    tasteTags: ["rich", "aromatic", "savory", "complex"],
    ingredients: [
      "meat or fish",
      "onions",
      "garlic",
      "ginger",
      "turmeric",
      "paprika",
      "fish sauce"
    ],
    category: "main",
    spiceLevel: 4,
    isVegetarian: false,
    wikipediaUrl: null
  },
  {
    id: "mont-lin-ma-yar",
    name: "Mont Lin Ma Yar (Couple Snack)",
    description: 'These small rice pancake "couples" are a popular street food. Made from rice flour batter cooked in a special pan with half-spherical molds, then joined together with various sweet or savory fillings.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsseoMjSA23qJJNH3jJuqoX4lgxoz6_26kPg&s",
    rating: 4.4,
    origin: ["Yangon"],
    tasteTags: ["sweet", "savory", "crispy", "soft"],
    ingredients: ["rice flour", "quail eggs", "scallions", "roasted chickpeas"],
    category: "snack",
    spiceLevel: 1,
    isVegetarian: true,
    wikipediaUrl: null
  },
  {
    id: "ohn-no-khao-swe",
    name: "Ohn No Khao Swe (Coconut Noodles)",
    description: "Wheat noodlesin a rich coconut milk broth with chicken, garnished with boiled eggs, sliced onions, chili, and lime. A delicious comfort food with a perfect balance of flavors.",
    image: "https://images.squarespace-cdn.com/content/v1/56201ac6e4b00f43cb4f11ed/1582598044263-IWSZLBAS8NCBM2TOF9RD/Umi_Rangoon_2447.jpg",
    rating: 4.7,
    origin: ["Central Myanmar"],
    tasteTags: ["creamy", "aromatic", "spicy", "savory"],
    ingredients: [
      "wheat noodles",
      "coconut milk",
      "chicken",
      "fish sauce",
      "turmeric",
      "onions",
      "eggs",
      "chickpea flour"
    ],
    category: "main",
    spiceLevel: 2,
    isVegetarian: false,
    wikipediaUrl: "https://en.wikipedia.org/wiki/Ohn_no_khao_sw%C3%A8"
  }
];
const beaches = [
  {
    id: "ngapali",
    name: "Ngapali Beach",
    region: "Rakhine State",
    description: "Ngapali, often hailed as Myanmar’s most pristine beach, is a breathtaking stretch of golden sand caressed by the gentle waves of the Bay of Bengal. Framed by swaying coconut palms and traditional fishing villages, the beach feels like an untouched paradise where luxury blends seamlessly with authenticity. The crystal-clear waters are perfect for swimming, snorkeling, or kayaking, while fresh seafood straight from the morning catch brings the true flavor of the coast to every meal. Unlike crowded tourist destinations, Ngapali retains a peaceful, laid-back charm—where bicycles replace traffic, sunsets paint the sky in soft pastels, and time seems to move at the rhythm of the tides. Whether for relaxation, romance, or simple escape, Ngapali is more than just a beach—it’s a sanctuary of natural elegance and tranquility.",
    image: "https://asialinkstravel.com/ckfinder/userfiles/images/Ngapali-beach-1.jpg",
    rating: 4.8,
    restaurants: [
      "ngapali-kitchen",
      "pleasant-view",
      "sea-queen",
      "bay-view-bistro"
    ],
    attractions: ["sunset-point", "fishing-village", "pearl-island"]
  },
  {
    id: "ngwe-saung",
    name: "Ngwe Saung Beach",
    region: "Ayeyarwady Region",
    description: "Ngwe Saung, one of Myanmar’s most captivating beaches, stretches gracefully along the Bay of Bengal with miles of soft, silver-white sand that seem endless under the tropical sun. The atmosphere is calm and unhurried, offering travelers an escape from busy city life into a world of rolling waves, swaying coconut palms, and the soothing scent of sea breeze. Small fishing villages dot the coastline, giving the beach a touch of local charm, while nearby islands like Lover’s Island can be reached by boat or even on foot during low tide. Visitors can enjoy swimming in the crystal-clear waters, snorkeling to explore colorful marine life, or simply watching the sun dip into the horizon as the sky blazes in shades of orange and pink. With its combination of natural beauty, peaceful surroundings, and authentic coastal culture, Ngwe Saung is more than just a beach—it is a place to slow down, breathe deeply, and reconnect with the simple joys of nature.",
    image: "https://www.mcs-myanmartravel.com/wp-content/uploads/2015/07/ngwesaung.jpg",
    rating: 4.6,
    restaurants: [
      "beach-house",
      "seafood-garden",
      "sunset-cafe",
      "silver-moon"
    ],
    attractions: ["lovers-island", "elephant-point", "bird-sanctuary"]
  },
  {
    id: "chaung-tha",
    name: "Chaung Tha Beach",
    region: "Ayeyarwady Region",
    description: "Chaung Tha, a lively seaside gem on the Bay of Bengal, is where natural charm meets a touch of local festivity. Unlike the more secluded beaches, Chaung Tha is alive with activity—families gathering for picnics, children flying kites, and colorful stalls lining the shore with fresh seafood and tropical treats. The sandy stretch is wide and golden, perfect for long barefoot walks, while the gentle waves invite visitors to swim or take boat rides to nearby islands scattered offshore. Horse and ox-cart rides along the beach add a distinctly Myanmar flavor, blending tradition with leisure. As the sun sets, the coastline transforms into a glowing scene of laughter, sizzling food, and the soft rhythm of waves, making Chaung Tha a place where both relaxation and cultural vibrancy flow together seamlessly.",
    image: "https://pix6.agoda.net/hotelImages/110/1101602/1101602_16101310580047708855.jpg?s=600x450",
    rating: 4.3,
    restaurants: ["golden-crab", "beach-breeze", "ocean-view", "palm-grove"],
    attractions: ["butterfly-island", "pagoda-point", "local-market"]
  }
];
const attractions = [
  // Yangon Attractions
  {
    id: "shwedagon-pagoda",
    name: "Shwedagon Pagoda",
    image: "https://lp-cms-production.imgix.net/2019-06/GettyImages-504376689_super.jpg",
    townId: "yangon",
    description: "The most sacred Buddhist pagoda in Myanmar, Shwedagon Pagoda is a dazzling golden stupa that dominates Yangon’s skyline. It is a spiritual center and a must-visit for its history, architecture, and vibrant atmosphere, especially at sunset."
  },
  {
    id: "bogyoke-market",
    name: "Bogyoke Aung San Market",
    image: "https://www.yangongui.de/wp-content/uploads/IMG_2249_edit-1024x683.jpg",
    townId: "yangon",
    description: "A bustling bazaar in the heart of Yangon, Bogyoke Aung San Market is famous for its colonial architecture, handicrafts, jewelry, and local delicacies. It’s the perfect place to experience the city’s vibrant commerce and pick up unique souvenirs."
  },
  {
    id: "kandawgyi-lake",
    name: "Kandawgyi Lake",
    image: "data:image/jpeg;base64,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",
    townId: "yangon",
    description: "Kandawgyi Lake is Yangon’s serene escape, where gardens meet shimmering waters and the Karaweik Palace floats like a golden dream."
  },
  {
    id: "national-museum",
    name: "National Museum",
    image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ygdly62litugr9qmpurl/YangonNationalMuseumTour.jpg",
    townId: "yangon",
    description: "The National Museum of Myanmar houses a rich collection of artifacts, royal regalia, and cultural treasures. It offers a fascinating journey through the country’s history, art, and diverse heritage."
  },
  {
    id: "inya-lake",
    name: "Inya Lake",
    image: "data:image/jpeg;base64,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",
    townId: "yangon",
    description: "Inya Lake, the largest lake in Yangon, is a peaceful retreat surrounded by trees and open spaces. Its calm waters and scenic shores make it ideal for leisurely walks, jogging, or simply enjoying the sunset"
  },
  {
    id: "the-secretariat-yangon",
    name: "The Secretariar Yangon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBugqjiQalaZL40l1xwMYJBBfh5faAkj7ag&s",
    townId: "yangon",
    description: "The Secretariat in Yangon is a historic colonial-era building, once the administrative heart of Burma, where history whispers through its grand halls and faded red brick walls."
  },
  // Mandalay Attractions
  {
    id: "mandalay-hill",
    name: "Mandalay Hill",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Mandalay_Hill_3.jpg",
    townId: "mandalay",
    description: "Rising above the city, Mandalay Hill offers panoramic views and is a revered pilgrimage site. The climb is lined with pagodas and shrines, making it both a spiritual and scenic experience."
  },
  {
    id: "kuthodaw-pagoda",
    name: "Kuthodaw Pagoda",
    image: "https://c8.alamy.com/comp/PYWYHT/aerial-view-of-the-kuthodaw-pagoda-surrounded-by-729-shrines-containing-the-worlds-biggest-book-PYWYHT.jpg",
    townId: "mandalay",
    description: "Known as the world’s largest book, Kuthodaw Pagoda is surrounded by hundreds of marble slabs inscribed with Buddhist scriptures. Its serene grounds and unique history make it a highlight of Mandalay."
  },
  {
    id: "u-bein-bridge",
    name: "U Bein Bridge",
    image: "https://www.indochinavoyages.com/wp-content/uploads/2019/12/u_bein_bridge.jpg",
    townId: "mandalay",
    description: "Stretching across Taungthaman Lake, U Bein Bridge is the world’s longest teakwood bridge. It’s especially magical at sunrise and sunset, when locals and monks cross its weathered planks."
  },
  {
    id: "mahamuni-buddha",
    name: "Mahamuni Buddha Temple",
    image: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/events/2020/12/22/38740596-4662-47b4-8b7c-a0b16247cc85-1608644124866-4593e981e24c1109c30a3e114f1202c0.jpg",
    townId: "mandalay",
    description: "One of Myanmar’s most sacred Buddhist sites, the Mahamuni Buddha Temple houses a revered bronze Buddha image. Pilgrims flock here to pay respects and witness the daily face-washing ceremony."
  },
  {
    id: "mandalay-zay-cho",
    name: "Mandalay ZayCho",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsj0Try8JoQNz2lJ1W4gIdr1NuSoMow3_Heg&s",
    townId: "mandalay",
    description: "Mandalay ZayCho is the city’s largest and most vibrant market, offering everything from local foods and fresh produce to traditional crafts and textiles."
  },
  {
    id: "mandalay-palace-moat",
    name: "Mandalay Palace Moat",
    image: "https://thumbs.dreamstime.com/b/night-view-mandalay-palace-myanmar-located-burma-211670887.jpg",
    townId: "mandalay",
    description: "Mandalay Palace Moat, with its calm waters and striking red palace walls, surrounds the Mandalay Royal Palace and offers one of the city’s most iconic scenic views."
  },
  // Nay Pyi Daw Attractions
  {
    id: "Uppatasanti-pagoda",
    name: "Uppatasanti Pagoda",
    image: "https://media.istockphoto.com/id/1161307342/photo/golden-bright-uppatasanti-pagoda-while-under-the-renovation-work-in-nay-pyi-taw-myanmar.jpg?s=612x612&w=0&k=20&c=buyBpItDVmMdEei8uCBongxTTs6POE7UHo5Bd9DeChs=",
    townId: "nay-pyi-daw",
    description: "Uppatasanti Pagoda in Nay Pyi Taw, known as the “Peace Pagoda,” is a golden replica of Shwedagon Pagoda. Standing 99 meters tall and housing a sacred Buddha tooth relic, it shines as both a spiritual and cultural landmark of Myanmar’s modern capital."
  },
  {
    id: "myanmar-gems-museum",
    name: "Myanmar Gems Museum",
    image: "https://www.myanmars.net/images/gem_museum.jpg",
    townId: "nay-pyi-daw",
    description: "Myanmar Gems Museum in Nay Pyi Taw showcases the nation’s finest rubies, sapphires, jade, and pearls, reflecting the country’s rich heritage in precious stones."
  },
  {
    id: "national-landmark-garden",
    name: "National Landmark Garden",
    image: "https://www.nationallandmarksgarden.com/wp-content/uploads/2020/09/shan-6-2.jpg",
    townId: "nay-pyi-daw",
    description: "National Landmark Garden in Nay Pyi Taw showcases miniature replicas of Myanmar’s most iconic pagodas, palaces, and cultural sites. Spread across vast green landscapes, it offers visitors a chance to explore the country’s rich heritage in one place, making it both educational and scenic."
  },
  {
    id: "water-fountain-garden",
    name: "Water Fountain Garden",
    image: "https://aureumpalacehotel.com/wp-content/uploads/2022/10/0-02-06-07ae585ce5195a7bfc386a36d32dafa17de697f20ddc81533dbc98b5846d4729_666a9a26d29319dc-856x450.jpg",
    townId: "nay-pyi-daw",
    description: "Water Fountain Garden in Nay Pyi Taw is a serene retreat featuring beautifully designed fountains, landscaped greenery, and walking paths. Visitors can relax by the sparkling waters, enjoy peaceful strolls, and take in the harmonious blend of nature and artistry."
  },
  {
    id: "maravijaya-buddha",
    name: "Maravijaya Buddha",
    image: "https://www.mtnewstoday.com/en/wp-content/uploads/2023/07/347253538_131599433290873_5686295993439138745_n.jpg",
    townId: "nay-pyi-daw",
    description: "Maravijaya Buddha in Nay Pyi Taw is a towering white statue standing as a symbol of peace and devotion. Visitors are drawn to its impressive height, serene expression, and the surrounding grounds that offer a tranquil space for reflection and worship."
  },
  // Bagan Attractions
  {
    id: "ananda-temple",
    name: "Ananda Temple",
    image: "https://evivatour.com/wp-content/uploads/2021/09/Ananda-Temple-in-Bagan-1000x565.jpg",
    townId: "bagan",
    description: "Ananda Temple is one of Bagan’s most beautiful and well-preserved temples, known for its stunning architecture and golden spires. Its serene interior houses four massive standing Buddha statues."
  },
  {
    id: "shwesandaw-pagoda",
    name: "Shwesandaw Pagoda",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaOp1PQnVigRtndssIpkdOvPWy3cLbuiRyg&s",
    townId: "bagan",
    description: "Famous for its sweeping views of the Bagan plains, Shwesandaw Pagoda is a favorite spot for sunrise and sunset. Its tiered terraces offer a breathtaking vantage point over thousands of ancient temples."
  },
  {
    id: "dhammayangyi-temple",
    name: "Dhammayangyi Temple",
    image: "https://luxurymyanmarrivercruises.com/uploads/Dhammayangyi-Temple-1.jpg",
    townId: "bagan",
    description: "The largest temple in Bagan, Dhammayangyi is renowned for its massive structure and mysterious history. Its brickwork is considered the finest in Bagan, and legends surround its construction."
  },
  {
    id: "shwe-zigon-pagoda",
    name: "Shwe Zigon Pagoda",
    image: "https://bagandaytours.com/wp-content/uploads/2016/01/Shwezigon-Pagoda2.jpg",
    townId: "bagan",
    description: "Shwe Zigon Pagoda in Bagan is a revered golden temple believed to house sacred Buddha relics. Its gleaming stupa and intricate architecture attract both pilgrims and travelers. The pagoda also comes alive during local festivals, showcasing Myanmar’s rich cultural and spiritual heritage."
  },
  {
    id: "bagan-golden-palace",
    name: "Bagan Golden Palace",
    image: "https://thumbs.dreamstime.com/b/thiri-zaya-bumi-bagan-golden-palace-bagan-myanmar-ancient-city-located-mandalay-region-th-to-th-centuries-95238829.jpg",
    townId: "bagan",
    description: "Bagan Golden Palace is a magnificent reconstruction of the ancient royal palace, showcasing Myanmar’s regal architecture and cultural heritage. Its ornate halls, grand courtyards, and intricate carvings transport visitors to the era of Bagan’s royal kingdom."
  },
  {
    id: "bagan-balloons",
    name: "Hot Air Balloon Rides",
    image: "https://media.worldnomads.com/Explore/myanmar/oriental-balloon-bagan-emma-balmforth.jpg",
    townId: "bagan",
    description: "Soar above the ancient temples of Bagan in a hot air balloon for a once-in-a-lifetime experience. The breathtaking aerial views at sunrise reveal the full majesty of this archaeological wonder."
  },
  // Taunggyi Attractions
  {
    id: "taunggyi-balloon-festival",
    name: "Taunggyi Balloon Festival",
    image: "https://cdn.prod.website-files.com/62de641ce3132f751e31416e/62de641ce3132f6ca331495e_Fire%20Balloon%201.jpg",
    townId: "taunggyi",
    description: "Held in November, featuring massive hot air balloons with fireworks and traditional music. This spectacular festival, also known as the Tazaungdaing Festival, is one of Myanmar's most unique cultural celebrations."
  },
  {
    id: "sulamuni-pagoda",
    name: "Sulamuni Pagoda",
    image: "https://www.myanmars.net/images/sulamuni_pagoda.jpg",
    townId: "taunggyi",
    description: "A stunning hilltop pagoda offering panoramic views of Taunggyi. The pagoda is a significant religious site and a perfect spot for viewing the city and surrounding Shan hills."
  },
  {
    id: "ayetharyar-vineyard",
    name: "Aye Tharyar Vineyard & Winery",
    image: "https://www.myanmar-vineyard.com/sites/default/files/slider-0004.jpg",
    townId: "taunggyi",
    description: "A picturesque vineyard with wine tasting and views over the Shan hills. Visitors can tour the vineyard, learn about local wine production, and enjoy wine tasting sessions with stunning views."
  },
  {
    id: "htam-sam-cave",
    name: "Htam Sam Cave",
    image: "https://www.tmtmtour.com/wp-content/uploads/2019/05/Htam-Sam-Cave-1.jpg",
    townId: "taunggyi",
    description: "Htam Sam Cave is a stunning limestone cave in Shan State, famous for its countless Buddha images, natural rock formations, and peaceful atmosphere."
  },
  {
    id: "shwe-bhone-pwint",
    name: "Shwe Bhone Pwint Pagoda",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Shwe_Bone_Pwint_Pagoda%2C_Taunggyi%2CShan.jpg/2560px-Shwe_Bone_Pwint_Pagoda%2C_Taunggyi%2CShan.jpg",
    townId: "taunggyi",
    description: "The Shwe Bhone Pwint Pagoda, located in the hill city of Taunggyi, is a revered Buddhist site that offers both spiritual significance and scenic charm. The pagoda is gracefully perched on an elevated spot, allowing visitors to enjoy sweeping views of the surrounding Shan hills and the vibrant town below."
  },
  // Kyaukse Attractions
  {
    id: "shwe-theindaw",
    name: "Mahar Shwe Theindaw Buddhist Temple",
    image: "https://www.bloggang.com/data/m/morkmek/picture/1712821578.jpg",
    townId: "Kyauk-se",
    description: "Mahar Shwe Theindaw Buddhist Temple is a revered spiritual site in Myanmar, celebrated for its gleaming golden stupa and intricate architectural details. The temple’s serene courtyards, ornate carvings, and peaceful ambiance make it a focal point for meditation and prayer."
  },
  {
    id: "shwe-thalyaung",
    name: "Shwe Thalyaung Pagoda",
    image: "https://t4.ftcdn.net/jpg/05/27/17/07/360_F_527170743_SvQ7Aak8bXa9SRPh5VlOUihYyBFaswyY.jpg",
    townId: "Kyauk-se",
    description: "Shwe Thalyaung Pagoda  is famed for its massive reclining Buddha statue, a striking symbol of serenity and devotion. The gilded figure stretches gracefully across the temple grounds, drawing pilgrims and visitors who come to admire its intricate details and tranquil presence"
  },
  {
    id: "shwe-gu",
    name: "Tamote Shinbin Shwegu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Tamote_Shwe_Gu_Gyi_Pagoda_02.JPG/1200px-Tamote_Shwe_Gu_Gyi_Pagoda_02.JPG",
    townId: "Kyauk-se",
    description: "Tamote Shinbin Shwegu is a historic pagoda since Bagan era and it is famous rarest type of buddha stupa and its artisan temples. It is one the tourist attraction closely located near Kyaukse."
  },
  {
    id: "sin-gaung-taung",
    name: "Sin Gaung Taung",
    image: "https://i.ytimg.com/vi/MPdbwr48W8Q/maxresdefault.jpg",
    townId: "Kyauk-se",
    description: "Sin Gaung Taung is a scenic hill near Kyaukse,looking alike with an elephant head, offering panoramic views of the surrounding plains and a serene setting for visitors and pilgrims alike."
  },
  {
    id: "elephant-festival",
    name: "Kyaukse Elephant Festival",
    image: "https://www.moi.gov.mm/moi:eng/sites/default/files/news-image/2023-11/07.JPG",
    townId: "Kyauk-se",
    description: "The Kyaukse Elephant Festival is a vibrant annual event in Myanmar, celebrating the town’s rich cultural heritage. Locals decorate real and replica elephants, participate in lively processions, and perform traditional rituals, creating a colorful and energetic spectacle that draws visitors from across the region."
  },
  // Kalaw Attractions
  {
    id: "kalaw-inle-trek",
    name: "Kalaw to Inle Lake Trek",
    image: "https://justglobetrotting.com/wp-content/uploads/2016/10/kalaw-inle-lake-trek-myanmar.jpg",
    townId: "kalaw",
    description: "The most popular multi-day trek in Myanmar, through hills, villages, and rice terraces. This scenic trek offers stunning landscapes and opportunities to experience local hill tribe culture."
  },
  {
    id: "thein-taung-pagoda",
    name: "Thein Taung Pagoda and Monastery",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/3d/9c/f2/photo0jpg.jpg?w=1200&h=-1&s=1",
    townId: "kalaw",
    description: "Located on a hill with a panoramic view of Kalaw town. This peaceful monastery complex offers stunning views and a glimpse into Buddhist monastic life."
  },
  {
    id: "hnee-pagoda",
    name: "Hnee Pagoda",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/7f/5b/eb/angolo.jpg?w=1200&h=-1&s=1",
    townId: "kalaw",
    description: "A cave temple with hundreds of golden Buddha images inside. Also known as Shwe Oo Min Natural Cave Pagoda, this unique site combines natural cave formations with religious significance."
  },
  {
    id: "kalaw-view-point",
    name: "Kalaw View Point",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiE00VKH8Zd7zio-yme8hriSIb0iEka2B1EQ&s",
    townId: "kalaw",
    description: "Kalaw Viewpoint is a must-visit spot for nature lovers, offering sweeping views of Shan State’s rolling hills, green valleys, and traditional farmlands. A perfect place to enjoy sunrise or sunset while experiencing Kalaw’s peaceful charm."
  },
  // Inle Lake Attractions
  {
    id: "floating-villages",
    name: "Floating Villages and Gardens",
    image: "https://www.trailsofindochina.com/wp-content/uploads/2018/04/Inle_Lake_Header.jpg",
    townId: "inle-lake",
    description: "Visit stilt-house villages like Ywama or Inthein, with gardens grown on water. Experience the unique lifestyle of the Intha people and their ingenious floating garden cultivation methods."
  },
  {
    id: "phaung-daw-oo",
    name: "Phaung Daw Oo Pagoda",
    image: "https://www.myanmartours.us/wp-content/uploads/Phaung-Daw-Oo-Pagoda.jpg",
    townId: "inle-lake",
    description: "One of the most sacred pagodas in Shan State, with 5 revered Buddha images. This important religious site is a center of local spiritual life and annual festivals."
  },
  {
    id: "indein-pagoda",
    name: "Indein Pagoda Complex",
    image: "https://static.vecteezy.com/system/resources/previews/006/971/606/non_2x/the-group-of-oldest-pagoda-named-shwe-indein-pagoda-located-at-indein-village-in-the-area-of-inle-lake-of-myanmar-photo.jpg",
    townId: "inle-lake",
    description: "A hidden gem with hundreds of ancient stupas, accessible via a scenic boat ride. This atmospheric complex of weather-worn stupas offers a glimpse into the region's rich history."
  },
  {
    id: "leg-rowing-fishermen",
    name: "Traditional Leg Rowing Fishermen",
    image: "https://images.locationscout.net/2017/05/one-leg-rower-on-inle-lake-myanmar.webp?h=1400&q=80",
    townId: "inle-lake",
    description: "Iconic fishermen who row with one leg while balancing on the other. Watch this unique traditional fishing method that has become a symbol of Inle Lake's cultural heritage."
  },
  // Nyaung Shwe Attractions
  {
    id: "inle-lake-access",
    name: "Inle Lake Access",
    image: "https://live.staticflickr.com/65535/48114078003_7daed3edaa_b.jpg",
    townId: "nyaung-shwe",
    description: "The main gateway to the stunning Inle Lake, offering boat services, guides, and stunning views of the lake. Perfect starting point for exploring the lake's unique ecosystem and culture."
  },
  {
    id: "nyaung-shwe-market",
    name: "Local Markets",
    image: "https://thumbs.dreamstime.com/b/crowded-mingalar-market-nyaungshwe-myanmar-february-numerous-fish-sellers-sitting-floor-offering-fresh-local-155889889.jpg",
    townId: "nyaung-shwe",
    description: "Vibrant local markets where visitors can experience authentic Shan culture, fresh produce, traditional crafts, and local delicacies. The five-day rotating market is particularly special."
  },
  {
    id: "boat-tours",
    name: "Boat Tours",
    image: "https://theelevatedmoments.com/wp-content/uploads/2020/02/A63I8560.jpg",
    townId: "nyaung-shwe",
    description: "Comprehensive boat tours departing from Nyaung Shwe, taking visitors to floating gardens, local craft workshops, ancient pagodas, and traditional villages around Inle Lake."
  },
  {
    id: "red-mountain-estate",
    name: "Red Mountain Estate Vineyards & Winery",
    image: "https://www.worldtravelbug.com/ro/red-mountain-winery-myanmar/red-mountain-myanmar/",
    townId: "nyaung-shwe",
    description: "A scenic vineyard and winery nestled in the hills near Nyaung Shwe, offering wine tastings, tours, and panoramic views of Inle Lake. Red Mountain Estate is renowned for its locally produced wines and is a perfect spot to relax and enjoy a sunset over the vineyards."
  },
  {
    id: "nyaung-shwe-haw",
    name: "Nyaung Shwe Haw",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Nyaung_Shwe_Cultural_Museum.jpg/250px-Nyaung_Shwe_Cultural_Museum.jpg",
    townId: "nyaung-shwe",
    description: "Nyaung Shwe Haw, the former Shan prince’s palace, now serves as a museum showcasing Shan culture and history.It resembles the monarchies of Shan distinctly."
  },
  // Pyin Oo Lwin Attractions
  {
    id: "national-kandawgyi-gardens",
    name: "National Kandawgyi Gardens",
    image: "https://www.myanmars.net/images/nationalkandawgyi1.jpg",
    townId: "pyin-oo-lwin",
    description: "A stunning 437-acre botanical garden featuring rare orchids, exotic plants, and beautiful walking paths. The gardens showcase Myanmar's rich biodiversity and offer a peaceful retreat with colonial-era architecture and scenic viewpoints."
  },
  {
    id: "pwe-kauk-falls",
    name: "Pwe Kauk Falls",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c9/0a/4f/water-falls.jpg?w=900&h=500&s=1",
    townId: "pyin-oo-lwin",
    description: "A picturesque waterfall surrounded by lush greenery, perfect for nature walks and photography. The falls are especially beautiful during the rainy season and offer a refreshing escape from the town's heat."
  },
  {
    id: "chinese-temple",
    name: "Chinese Temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chinese_Temple_%40_Pyin_Oo_Lwin_%2814210634862%29.jpg/2560px-Chinese_Temple_%40_Pyin_Oo_Lwin_%2814210634862%29.jpg",
    townId: "pyin-oo-lwin",
    description: "A beautiful Chinese temple showcasing the town's multicultural heritage. The temple features traditional Chinese architecture, intricate carvings, and offers insights into the Chinese community's history in Pyin Oo Lwin."
  },
  {
    id: "peik-chin-myaung-cave",
    name: "Peik Chin Myaung Cave",
    image: "https://www.myanmartours.us/wp-content/uploads/Peik-Chin-Myaung-Cave-Pyin-Oo-Lwin-Myanmar.jpg",
    townId: "pyin-oo-lwin",
    description: "A fascinating limestone cave system with Buddhist shrines and natural rock formations. The cave is a spiritual site and natural wonder, offering visitors a unique underground experience with guided tours available."
  },
  // Hpa-an Attractions
  {
    id: "mount-zwegabin",
    name: "Mount Zwegabin",
    image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/07/01/87b17d566d5bf3c5f72d1a06d362f4eb_1000x1000.jpg",
    townId: "hpa-an",
    description: "A dramatic limestone mountain that dominates Hpa-an's skyline, Mount Zwegabin offers challenging hiking trails and breathtaking panoramic views of the surrounding countryside. The summit provides spectacular vistas of the Kayin State landscape."
  },
  {
    id: "taung-wine",
    name: "Taung Wine",
    image: "https://www.jonnymelon.com/wp-content/uploads/2018/12/taung-wine-pagoda-19.jpg",
    townId: "hpa-an",
    description: "Taung Wine, a picturesque hill near Hpa-An, is a must-visit for travelers seeking both adventure and tranquility. Rising above the plains, it offers sweeping views of emerald rice fields, winding rivers, and dramatic limestone mountains that define the region’s unique landscape."
  },
  {
    id: "kyauk-ka-lat-pagoda",
    name: "Kyauk Ka Lat Pagoda",
    image: "https://as2.ftcdn.net/v2/jpg/03/71/95/79/1000_F_371957946_DMrERiaRVbyfmdFW3qPkydlsi46ArK2u.jpg",
    townId: "hpa-an",
    description: "A stunning pagoda perched on a limestone pinnacle rising from a lake, Kyauk Ka Lat Pagoda is one of Myanmar's most photogenic religious sites. The golden pagoda against the dramatic rock formation creates a magical scene."
  },
  {
    id: "sadan-cave",
    name: "Sadan Cave",
    image: "https://www.alittleofftrack.com/wp-content/uploads/2020/09/GOPR0667.jpg",
    townId: "hpa-an",
    description: "A magnificent cave system featuring Buddhist shrines, stalactites, and underground chambers. Sadan Cave is known for its impressive natural formations and religious significance, offering visitors a unique underground exploration experience."
  },
  {
    id: "lumbini-garden",
    name: "Lumbini Garden",
    image: "https://www.dztraveler.com/wp-content/uploads/2016/01/DSC_0356-Edit-1.jpg",
    townId: "hpa-an",
    description: "A peaceful garden complex featuring replicas of famous Buddhist sites from around the world. Lumbini Garden offers a serene setting for meditation and reflection, with beautiful landscaping and religious monuments."
  },
  // Mawlamyaing Attractions
  {
    id: "kyaikthanlan-pagoda",
    name: "Kyaikthanlan Pagoda",
    image: "https://t4.ftcdn.net/jpg/01/01/59/59/240_F_101595908_fUGTk4fZ5YMgAEwXMR7K6maebNe1BaDg.jpg",
    townId: "mawlamyaing",
    description: "Perched on a hill overlooking the city and Thanlwin River, Kyaikthanlan Pagoda is Mawlamyaing’s most prominent landmark, famed for sunset views and peaceful surroundings."
  },
  {
    id: "gaungse-kyun",
    name: "Gaungse Kyun (Shampoo Island)",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/ShampooIsland.jpg",
    townId: "mawlamyaing",
    description: "A small scenic island in the Thanlwin River with monasteries and shrines. Historically used by royalty for hair-washing ceremonies, it offers tranquil river views and a short boat trip from town."
  },
  {
    id: "bilu-kyun",
    name: "Bilu Kyun (Ogre Island)",
    image: "https://lp-cms-production.imgix.net/2025-04/Shutterstock1124482919.jpg?w=3840&auto=format&q=75",
    townId: "mawlamyaing",
    description: "A large island known for traditional craft villages producing rubber bands, slate boards, and walking sticks. A day trip here offers insight into local Mon culture and rural life."
  },
  {
    id: "win-sein-tawya",
    name: "Win Sein Taw Ya Buddha",
    image: "https://t4.ftcdn.net/jpg/03/21/91/13/240_F_321911348_3oY4GKaFIrWnNaMoTObSVaFnP1UbWVAQ.jpg",
    townId: "mawlamyaing",
    description: "Win Sein Taw Ya Buddha is the world’s largest reclining Buddha statue, stretching over 180 meters. Visitors can explore its interior filled with Buddhist teachings and artwork, while the surrounding grounds dotted with pagodas create a serene, spiritual atmosphere."
  },
  {
    id: "kyaikkhami",
    name: "Kyaikkhami",
    image: "https://sandee.com/_next/image?url=https%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNuq6BuIGRL-aRvEfi6eyYQXB9GZiefObu1ne60%3Ds1600-k-no&w=3840&q=75",
    townId: "mawlamyaing",
    description: "Kyaikkhami, a peaceful coastal town in Mon State, is best known for the beautiful Kyaikkhami Yele Pagoda, which sits on rocky outcrops in the sea and is connected to the shore by a long bridge."
  },
  // Dawei Attractions
  {
    id: "maungmagan-beach",
    name: "Maungmagan Beach",
    image: "https://b-cdn.springnest.com/media/img/td/img_3476a1b7869.jpg?crop=4032%2C2489%2C0%2C394&width=460",
    townId: "dawei",
    description: "A pristine beach with golden sand and clear waters, perfect for swimming and relaxation. Maungmagan Beach is one of Myanmar's most beautiful coastal destinations, offering a peaceful escape from city life."
  },
  {
    id: "dawei-central-market",
    name: "Dawei Central Market",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkTBwpKbsrvUYrLEM77GHKBk4IlP3svWPrRQ&s",
    townId: "dawei",
    description: "A bustling local market where visitors can experience authentic Dawei culture, sample local delicacies, and purchase traditional crafts. The market is a vibrant hub of local commerce and community life."
  },
  {
    id: "shin-koe-shin-pagoda",
    name: "Shin Koe Shin Pagoda",
    image: "https://www.myanmardigitalnewspaper.com/sites/default/files/articles/82936363_1580212938786585_1317350749826449408_n.jpg",
    townId: "dawei",
    description: "A historic pagoda complex with beautiful architecture and serene surroundings. Shin Koe Shin Pagoda is an important religious site that offers visitors a peaceful retreat and insight into local Buddhist traditions."
  },
  // Kawthaung Attractions
  {
    id: "victoria-point",
    name: "Victoria Point",
    image: "https://thumbs.dreamstime.com/b/pier-kawthaung-victoria-point-myanmar-pier-kawthaung-victoria-point-myanmar-harbor-111291491.jpg",
    townId: "kawthaung",
    description: "Victoria Point is the southernmost tip of Myanmar, offering stunning panoramic views of the Andaman Sea and the border with Thailand. This iconic landmark provides breathtaking sunset views and is a perfect spot for photography and relaxation."
  },
  {
    id: "pyi-daw-aye-pagoda",
    name: "Pyi Daw Aye Pagoda",
    image: "https://t3.ftcdn.net/jpg/01/64/71/38/360_F_164713842_XEjPQdtkr0k50Cauz4j8eu0LBTld2g0P.jpg",
    townId: "kawthaung",
    description: "A beautiful hilltop pagoda offering panoramic views of Kawthaung and the surrounding Andaman Sea. The pagoda is a peaceful spiritual site where visitors can enjoy stunning vistas and experience local Buddhist culture."
  },
  {
    id: "king-bayint-naung-statue",
    name: "King Bayint Naung Statue",
    image: "https://t4.ftcdn.net/jpg/04/07/84/71/360_F_407847182_6E2vuTZOcGTBA8tn4lG4F4Rn6HxMlqui.jpg",
    townId: "kawthaung",
    description: "A majestic statue honoring King Bayint Naung, one of Myanmar's most revered historical figures. The monument stands as a symbol of national pride and offers visitors insight into Myanmar's rich royal history and cultural heritage."
  },
  {
    id: "mergui-archipelago",
    name: "Mergui Archipelago",
    image: "https://b-cdn.springnest.com/media/img/td/mergui-archipelagode68eae.jpg?crop=2000%2C1110%2C0%2C71&width=620",
    townId: "kawthaung",
    description: "A pristine archipelago of over 800 islands in the Andaman Sea, accessible from Kawthaung. The Mergui Archipelago offers world-class diving, pristine beaches, and untouched natural beauty, making it a paradise for adventure seekers and nature lovers."
  },
  // Myeik Attractions
  {
    id: "pearl-farms",
    name: "Pearl Farms",
    image: "https://cdn.digitalagencybangkok.com/file/client-cdn/gnlm/wp-content/uploads/2024/04/PHY0WlEq-p6-second.jpg",
    townId: "myeik",
    description: "Visit traditional pearl farms where you can learn about the ancient art of pearl cultivation. Myeik is famous for its high-quality pearls, and these farms offer fascinating insights into the pearl industry and opportunities to purchase authentic Myanmar pearls."
  },
  {
    id: "myeik-archipelago",
    name: "Myeik Archipelago",
    image: "https://www.gomyanmartours.com/wp-content/uploads/2019/10/myeik-archipelago.jpg",
    townId: "myeik",
    description: "A stunning collection of over 800 pristine islands in the Andaman Sea, accessible from Myeik. The archipelago offers world-class diving, untouched beaches, and incredible marine biodiversity, making it a paradise for divers and nature enthusiasts."
  },
  {
    id: "myeik-night-market",
    name: "Myeik Night Market",
    image: "https://i.ytimg.com/vi/iSc79BVYnok/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgQChNMA8=&rs=AOn4CLCHlnLS1R7Y8V86cOZa9nxIB3yaQQ",
    townId: "myeik",
    description: "A vibrant night market where locals and visitors gather to enjoy fresh seafood, local delicacies, and traditional snacks. The market comes alive in the evening with the aroma of grilled fish, spicy curries, and the lively atmosphere of Myeik's food culture."
  }
];
const getAttractionsByTownId = (townId) => {
  return attractions.filter((attraction) => attraction.townId === townId);
};
const searchAll = (query) => {
  if (!query.trim()) {
    return [];
  }
  const searchTerm = query.toLowerCase().trim();
  const results = [];
  towns.forEach((town) => {
    if (town.name.toLowerCase().includes(searchTerm) || town.description.toLowerCase().includes(searchTerm)) {
      results.push({
        id: town.id,
        name: town.name,
        type: "town",
        description: town.description,
        image: town.image
      });
    }
  });
  foods$1.forEach((food) => {
    if (food.name.toLowerCase().includes(searchTerm) || food.description.toLowerCase().includes(searchTerm)) {
      results.push({
        id: food.id,
        name: food.name,
        type: "food",
        description: food.description,
        image: food.image
      });
    }
  });
  beaches.forEach((beach) => {
    if (beach.name.toLowerCase().includes(searchTerm) || beach.description.toLowerCase().includes(searchTerm)) {
      results.push({
        id: beach.id,
        name: beach.name,
        type: "beach",
        description: beach.description,
        image: beach.image
      });
    }
  });
  attractions.forEach((attraction) => {
    if (attraction.name.toLowerCase().includes(searchTerm) || attraction.description.toLowerCase().includes(searchTerm)) {
      results.push({
        id: attraction.id,
        name: attraction.name,
        type: "attraction",
        description: attraction.description,
        image: attraction.image
      });
    }
  });
  return results.sort((a, b) => {
    const aExact = a.name.toLowerCase() === searchTerm;
    const bExact = b.name.toLowerCase() === searchTerm;
    if (aExact && !bExact) return -1;
    if (!aExact && bExact) return 1;
    return a.name.localeCompare(b.name);
  }).slice(0, 10);
};
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mobileSearchResults, setMobileSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isMobileSearching, setIsMobileSearching] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const location = useLocation();
  const debouncedSearchTerm = useDebounce(searchQuery, 300);
  const debouncedMobileSearchTerm = useDebounce(mobileSearchQuery, 300);
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchQuery("");
    setMobileSearchQuery("");
    setSearchResults([]);
    setMobileSearchResults([]);
  }, [location]);
  useEffect(() => {
    const handleSearch = () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        const results = searchAll(debouncedSearchTerm);
        setSearchResults(results);
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    };
    handleSearch();
  }, [debouncedSearchTerm]);
  useEffect(() => {
    const handleMobileSearch = () => {
      if (debouncedMobileSearchTerm) {
        setIsMobileSearching(true);
        const results = searchAll(debouncedMobileSearchTerm);
        setMobileSearchResults(results);
        setIsMobileSearching(false);
      } else {
        setMobileSearchResults([]);
      }
    };
    handleMobileSearch();
  }, [debouncedMobileSearchTerm]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
        setSearchQuery("");
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target)) {
        setMobileSearchResults([]);
        setMobileSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const navLinks = [
    { name: "Explore Foods", path: "/foods", icon: /* @__PURE__ */ jsx(Utensils, { size: 18 }) },
    { name: "Discover Towns", path: "/towns", icon: /* @__PURE__ */ jsx(MapPin, { size: 18 }) },
    {
      name: "Regional Map",
      path: "https://www.google.com/maps/place/Myanmar+(Burma)/@20.0419414,95.1523088,5.7z/data=!4m15!1m8!3m7!1s0x305652a7714e2907:0xba7b0ee41c622b11!2sMyanmar+(Burma)!3b1!8m2!3d21.916221!4d95.955974!16zL20vMDR4bl8!3m5!1s0x305652a7714e2907:0xba7b0ee41c622b11!8m2!3d21.916221!4d95.955974!16zL20vMDR4bl8?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D",
      icon: /* @__PURE__ */ jsx(Map, { size: 18 })
    },
    {
      name: "About Myanmar",
      path: "https://en.wikipedia.org/wiki/Myanmar",
      icon: /* @__PURE__ */ jsx(Info, { size: 18 })
    }
  ];
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${mobileMenuOpen ? "shadow-lg backdrop-blur-sm bg-white/95" : "shadow-lg backdrop-blur-sm bg-white/95"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex md:w-[250px] items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Utensils, { className: "w-8 h-8 text-amber-500", fill: "#f59e0b" }),
            /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-gray-800", children: [
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Taste " }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-800", children: "Voyage" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "items-center hidden space-x-8 md:flex", children: navLinks.map((link) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: link.path,
              className: `flex items-center space-x-1 font-medium transition-all duration-300 
                  text-gray-700 hover:text-amber-500
                  ${location.pathname === link.path ? "text-amber-500" : ""}
                  hover:scale-105`,
              children: [
                link.icon,
                /* @__PURE__ */ jsx("span", { children: link.name })
              ]
            },
            link.path
          )) }),
          /* @__PURE__ */ jsx("div", { className: "items-center md:w-[250px] justify-end hidden space-x-4 md:flex", children: /* @__PURE__ */ jsxs("div", { ref: searchRef, className: "relative", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(Search, { className: "absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  placeholder: "Search foods, towns...",
                  className: "w-64 py-2 pl-10 pr-4 text-gray-800 transition-all duration-300 rounded-full shadow-sm bg-white/80 hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                }
              ),
              isSearching && /* @__PURE__ */ jsx("div", { className: "absolute transform -translate-y-1/2 right-3 top-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-t-2 rounded-full border-amber-500 animate-spin" }) })
            ] }),
            searchResults.length > 0 && /* @__PURE__ */ jsx(
              SearchResults,
              {
                results: searchResults,
                onClose: () => {
                  setSearchResults([]);
                  setSearchQuery("");
                }
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              className: "flex items-center md:hidden",
              "aria-label": mobileMenuOpen ? "Close menu" : "Open menu",
              children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6 text-gray-700" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6 text-gray-700" })
            }
          )
        ] }) }),
        mobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 backdrop-blur-sm bg-white/95 md:hidden", children: /* @__PURE__ */ jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3", children: [
          /* @__PURE__ */ jsx("div", { className: "px-4 py-3", children: /* @__PURE__ */ jsxs("div", { ref: mobileSearchRef, className: "relative", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: mobileSearchQuery,
                onChange: (e) => setMobileSearchQuery(e.target.value),
                placeholder: "Search foods, towns...",
                className: "w-full py-2 pl-10 pr-4 text-gray-800 transition-all duration-300 rounded-full shadow-sm backdrop-blur-sm bg-white/80 hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
              }
            ),
            isMobileSearching && /* @__PURE__ */ jsx("div", { className: "absolute transform -translate-y-1/2 right-3 top-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-t-2 rounded-full border-amber-500 animate-spin" }) }),
            mobileSearchResults.length > 0 && /* @__PURE__ */ jsx(
              SearchResults,
              {
                results: mobileSearchResults,
                onClose: () => {
                  setMobileSearchResults([]);
                  setMobileSearchQuery("");
                }
              }
            )
          ] }) }),
          navLinks.map((link) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: link.path,
              className: `flex items-center space-x-3 px-4 py-3 rounded-md font-medium
                  transition-all duration-300
                  ${location.pathname === link.path ? "bg-amber-50 text-amber-500" : "text-gray-700 hover:bg-amber-50 hover:text-amber-500"}
                  hover:scale-105`,
              children: [
                link.icon,
                /* @__PURE__ */ jsx("span", { children: link.name })
              ]
            },
            link.path
          ))
        ] }) })
      ]
    }
  );
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "text-white bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-7 h-7 text-amber-500", fill: "#f59e0b" }),
          /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold", children: [
            /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Taste " }),
            "Voyage"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-xs text-gray-400", children: "Discover the rich culinary traditions and beautiful destinations of Myanmar through our comprehensive guide." }),
        /* @__PURE__ */ jsxs("div", { className: "flex pt-2 space-x-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400 ", children: /* @__PURE__ */ jsx(Facebook, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-400 ", children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-400 ", children: /* @__PURE__ */ jsx(Twitter, { className: "w-5 h-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "pb-2 mb-4 text-lg font-semibold border-b border-gray-700", children: "Explore" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/foods",
              className: "text-gray-400 transition-colors hover:text-amber-500",
              children: "Popular Foods"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/towns/top-cities",
              className: "text-gray-400 transition-colors hover:text-amber-500",
              children: "Top Destinations"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/beaches",
              className: "text-gray-400 transition-colors hover:text-amber-500",
              children: "Beautiful Beaches"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "pb-2 mb-4 text-lg font-semibold border-b border-gray-700", children: "Quick Links" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "https://en.wikipedia.org/wiki/Myanmar",
              target: "_blank",
              className: "text-gray-400 transition-colors hover:text-amber-500",
              children: "About Myanmar"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              target: "_blank",
              to: "https://www.google.com/maps/place/Myanmar+(Burma)/@20.0419414,95.1523088,5.7z/data=!4m15!1m8!3m7!1s0x305652a7714e2907:0xba7b0ee41c622b11!2sMyanmar+(Burma)!3b1!8m2!3d21.916221!4d95.955974!16zL20vMDR4bl8!3m5!1s0x305652a7714e2907:0xba7b0ee41c622b11!8m2!3d21.916221!4d95.955974!16zL20vMDR4bl8?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D",
              className: "text-gray-400 transition-colors hover:text-amber-500",
              children: "Interactive Map"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "text-gray-400 transition-colors hover:text-amber-500",
              children: "Contact Us"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "pb-2 mb-4 text-lg font-semibold border-b border-gray-700", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-amber-500 mt-0.5" }),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
              "123 Yangon Street, Downtown",
              /* @__PURE__ */ jsx("br", {}),
              "Yangon, Myanmar"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-amber-500" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "+95 1 234 5678" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-amber-500" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "info@tastevoyage.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-8 mt-12 text-center text-gray-400 border-t border-gray-800", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " TasteVoyage. All rights reserved."
    ] }) })
  ] }) });
};
const Layout = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow pt-16", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) => {
  const variantClasses = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white shadow-sm",
    secondary: "bg-red-800 hover:bg-red-900 text-white shadow-sm",
    outline: "border border-amber-600 text-amber-600 hover:bg-amber-50",
    ghost: "text-amber-600 hover:bg-amber-50",
    link: "text-amber-600 hover:underline p-0"
  };
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-2.5"
  };
  const baseClasses = "font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center";
  const classes = `${baseClasses} ${variantClasses[variant]} ${variant !== "link" ? sizeClasses[size] : ""} ${fullWidth ? "w-full" : ""} ${className}`;
  return /* @__PURE__ */ jsxs("button", { className: classes, ...props, children: [
    leftIcon && /* @__PURE__ */ jsx("span", { className: "mr-2", children: leftIcon }),
    children,
    rightIcon && /* @__PURE__ */ jsx("span", { className: "ml-2", children: rightIcon })
  ] });
};
const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);
  const debouncedSearchTerm = useDebounce(searchQuery, 300);
  useEffect(() => {
    const handleSearch = () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        const results = searchAll(debouncedSearchTerm);
        setSearchResults(results);
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    };
    handleSearch();
  }, [debouncedSearchTerm]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative h-screen", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-center bg-no-repeat bg-cover",
        style: {
          backgroundImage: "url(https://ashokmasale.com/wp-content/uploads/2024/08/6a0dc5a38598a14b374dfdb95642e124-1-1024x600.jpg)"
        },
        children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative flex flex-col items-center justify-center h-full px-4 text-center sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl animate-fade-in", children: /* @__PURE__ */ jsxs("h1", { children: [
        "Explore the Flavors and Wonders of",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-yellow-500", children: "Myanmar" })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "max-w-2xl mx-auto mb-12 text-xl text-white opacity-90", children: "Discover delicious authentic cuisine and breathtaking destinations across Myanmar's diverse regions." }),
      /* @__PURE__ */ jsxs("div", { ref: searchRef, className: "relative max-w-lg mx-auto mb-10", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute z-10 w-6 h-6 text-gray-400 transform -translate-y-1/2 left-6 top-1/2" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: "Search for foods or destinations...",
            className: "w-full py-5 pr-6 text-lg text-gray-800 bg-white border border-gray-200 rounded-full shadow-xl pl-14 focus:outline-none focus:ring-4 focus:ring-amber-500/50"
          }
        ),
        isSearching && /* @__PURE__ */ jsx("div", { className: "absolute transform -translate-y-1/2 right-6 top-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-6 border-t-2 rounded-full border-amber-500 animate-spin" }) }),
        searchResults.length > 0 && /* @__PURE__ */ jsx(
          SearchResults,
          {
            results: searchResults,
            onClose: () => {
              setSearchResults([]);
              setSearchQuery("");
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center gap-4 sm:flex-row", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "lg",
            leftIcon: /* @__PURE__ */ jsx(Utensils, { size: 20 }),
            onClick: () => navigate("/foods"),
            className: "font-semibold text-white transition-all duration-300 transform animate-fade-in animation-delay-300 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hover:scale-105 hover:shadow-lg",
            children: "Explore Foods"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            size: "lg",
            leftIcon: /* @__PURE__ */ jsx(MapPin, { size: 20 }),
            onClick: () => navigate("/towns"),
            className: "font-semibold text-white transition-all duration-300 transform border animate-fade-in animation-delay-600 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 hover:shadow-lg border-white/20",
            children: "Discover Towns"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute transform -translate-x-1/2 bottom-6 left-1/2 animate-bounce", children: /* @__PURE__ */ jsx(
      "svg",
      {
        className: "w-6 h-6 text-white",
        fill: "none",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsx("path", { d: "M19 14l-7 7m0 0l-7-7m7 7V3" })
      }
    ) })
  ] });
};
const StarRating = ({
  rating,
  max = 5,
  size = "md",
  showValue = true
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };
  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(max)].map((_, i) => /* @__PURE__ */ jsx("span", { className: "text-yellow-500", children: i < fullStars ? /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: sizeClasses[size], children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z", clipRule: "evenodd" }) }) : hasHalfStar && i === fullStars ? /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: sizeClasses[size], children: [
      /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z", clipRule: "evenodd" }),
      /* @__PURE__ */ jsx("path", { d: "M12 18.354l4.627 2.825c.996.608 2.231-.29 1.96-1.425l-1.257-5.273 4.117-3.527c.887-.76.415-2.212-.749-2.305l-5.404-.433-2.082-5.006c-.448-1.077-1.976-1.077-2.424 0l-2.082 5.007-5.404.433c-1.164.093-1.636 1.545-.749 2.305l4.117 3.527-1.257 5.273c-.271 1.136.964 2.033 1.96 1.425L12 18.354z", fill: "transparent" })
    ] }) : /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: sizeClasses[size], children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" }) }) }, i)) }),
    showValue && /* @__PURE__ */ jsx("span", { className: `font-medium text-gray-700 ${textSizeClasses[size]}`, children: rating.toFixed(1) })
  ] });
};
const Badge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  onClick
}) => {
  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-amber-100 text-amber-800",
    secondary: "bg-indigo-100 text-indigo-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800"
  };
  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-1 px-2.5",
    lg: "text-base py-1.5 px-3"
  };
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `inline-flex items-center font-medium rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`,
      onClick,
      children
    }
  );
};
const FoodCard = ({ food }) => {
  const getWikipediaUrl = (food2) => {
    if (food2.wikipediaUrl) {
      return food2.wikipediaUrl;
    }
    return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
      food2.name
    )}`;
  };
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: getWikipediaUrl(food),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: food.image,
              alt: food.name,
              className: "object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent", children: /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white line-clamp-1", children: food.name }),
            /* @__PURE__ */ jsx(StarRating, { rating: food.rating, size: "sm" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-grow p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm text-gray-600 line-clamp-3", children: food.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mt-auto", children: [
            food.tasteTags.slice(0, 3).map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "primary", size: "sm", children: tag }, tag)),
            food.isVegetarian && /* @__PURE__ */ jsx(Badge, { variant: "success", size: "sm", children: "vegetarian" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 pt-2 pb-4 border-t border-gray-100", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-xs text-gray-500", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Origin:" }),
              /* @__PURE__ */ jsx("span", { className: "ml-1.5", children: food.origin[0] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-amber-600", children: food.wikipediaUrl ? "View on Wikipedia" : "Search on Wikipedia" }),
              /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 ml-1 text-amber-600" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-2 text-xs text-gray-500", children: [
            /* @__PURE__ */ jsx("span", { children: "Spice: " }),
            /* @__PURE__ */ jsx("div", { className: "flex ml-1.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
              "span",
              {
                className: `h-2 w-2 rounded-full mx-0.5 ${i < food.spiceLevel ? "bg-red-500" : "bg-gray-200"}`
              },
              i
            )) })
          ] })
        ] })
      ]
    }
  );
};
const PopularFoods = () => {
  const topFoods = [...foods$1].sort((a, b) => b.rating - a.rating).slice(0, 4);
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Top-Rated Myanmar Dishes" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Discover the most beloved traditional foods from across Myanmar" })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/foods",
          className: "items-center hidden font-medium transition-colors text-amber-600 sm:flex hover:text-amber-700",
          children: [
            "View all foods",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4", children: topFoods.map((food) => /* @__PURE__ */ jsx(FoodCard, { food }, food.id)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 text-center sm:hidden", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/foods",
        className: "inline-flex items-center font-medium transition-colors text-amber-600 hover:text-amber-700",
        children: [
          "View all foods",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
        ]
      }
    ) })
  ] }) });
};
const TownCard = ({ town }) => {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: `/towns/${town.id}`,
      className: "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-60 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: town.image,
              alt: town.name,
              className: "w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-xl mb-1", children: town.name }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-white/90 space-x-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: town.region })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-3", children: [
            /* @__PURE__ */ jsx(StarRating, { rating: town.rating }),
            /* @__PURE__ */ jsxs("div", { className: "bg-amber-100 text-amber-800 rounded-full px-2 py-1 text-xs font-medium", children: [
              town.attractions.length,
              " Attractions"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm line-clamp-3", children: town.description }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-gray-100 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", children: [
              town.signatureDishes.length,
              " signature dishes"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-amber-600 text-sm font-medium group-hover:underline", children: [
              "Explore",
              /* @__PURE__ */ jsx(ExternalLink, { className: "ml-1 h-4 w-4" })
            ] })
          ] })
        ] })
      ]
    }
  );
};
const TopCities = () => {
  const topCities = towns.filter(
    (town) => town.id === "yangon" || town.id === "mandalay"
  );
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Top Cities in Myanmar" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Discover the vibrant culture and rich heritage of Myanmar's major cities" })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/towns/top-cities",
          className: "items-center hidden font-medium transition-colors sm:flex text-amber-600 hover:text-amber-700",
          children: [
            "View all cities",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: topCities.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 text-center sm:hidden", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/towns/top-cities",
        className: "inline-flex items-center font-medium transition-colors text-amber-600 hover:text-amber-700",
        children: [
          "View all cities",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
        ]
      }
    ) })
  ] }) });
};
const BeachCard = ({ beach }) => {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: `/beaches/${beach.id}`,
      className: "block overflow-hidden transition-transform duration-300 bg-white rounded-xl hover:-translate-y-1",
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative h-48", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: beach.image,
            alt: beach.name,
            className: "object-cover w-full h-full"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900", children: beach.name }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-1 mb-2 text-gray-600", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 mr-1" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: beach.region })
          ] }),
          /* @__PURE__ */ jsx(StarRating, { rating: beach.rating }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-600 line-clamp-2", children: beach.description })
        ] })
      ]
    }
  );
};
const Beaches = () => {
  const featuredBeaches = beaches.slice(0, 3);
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-blue-50", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Beautiful Beaches" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Discover Myanmar's pristine coastal paradise" })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/beaches",
          className: "items-center hidden font-medium transition-colors sm:flex text-amber-600 hover:text-amber-700",
          children: [
            "View all beaches",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: featuredBeaches.map((beach) => /* @__PURE__ */ jsx(BeachCard, { beach }, beach.id)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 text-center sm:hidden", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/beaches",
        className: "inline-flex items-center font-medium transition-colors text-amber-600 hover:text-amber-700",
        children: [
          "View all beaches",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
        ]
      }
    ) })
  ] }) });
};
const ShanHighlands = () => {
  const shanDestinations = towns.filter(
    (town) => ["taunggyi", "kalaw", "nyaung-shwe"].includes(town.id)
  );
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-green-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "The Shan Highlands" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Explore the cool climate and rich culture of Myanmar's highland region" })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/towns/shan-highlands",
          className: "hidden sm:flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors",
          children: [
            "View all destinations",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: shanDestinations.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 text-center sm:hidden", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/towns/shan-highlands",
        className: "inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors",
        children: [
          "View all destinations",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
        ]
      }
    ) })
  ] }) });
};
const SoutheastMyanmar = () => {
  const southeastDestinations = towns.filter(
    (town) => ["hpa-an", "mawlamyaing"].includes(town.id)
  );
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-purple-50", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Southeast Myanmar" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Experience the unique culture and natural beauty of Myanmar's southeast" })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/towns/southeast",
          className: "items-center hidden font-medium transition-colors sm:flex text-amber-600 hover:text-amber-700",
          children: [
            "View all destinations",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: southeastDestinations.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 text-center sm:hidden", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/towns/southeast",
        className: "inline-flex items-center font-medium transition-colors text-amber-600 hover:text-amber-700",
        children: [
          "View all destinations",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
        ]
      }
    ) })
  ] }) });
};
const HomePage = () => {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(TopCities, {}),
    /* @__PURE__ */ jsx(Beaches, {}),
    /* @__PURE__ */ jsx(PopularFoods, {}),
    /* @__PURE__ */ jsx(ShanHighlands, {}),
    /* @__PURE__ */ jsx(SoutheastMyanmar, {}),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-amber-50", children: /* @__PURE__ */ jsx("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid items-center grid-cols-1 gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-6 text-3xl font-bold text-gray-900", children: "Experience Myanmar's Rich Culinary Heritage" }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-lg text-gray-700", children: "Myanmar's cuisine reflects its unique geographic position between India, China, and Thailand, creating a distinctive blend of flavors and techniques that remain authentically its own." }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-lg text-gray-700", children: "From the aromatic rice dishes to the tangy salads and rich curries, Myanmar's food tells the story of its diverse people and landscapes, with each region offering its own specialties." }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center w-20 h-20 rounded-full bg-amber-100 text-amber-800", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "100+" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-center", children: "Unique Dishes" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center w-20 h-20 text-red-800 bg-red-100 rounded-full", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "15+" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-center", children: "Culinary Regions" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center w-20 h-20 text-green-800 bg-green-100 rounded-full", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl font-bold", children: "50+" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-center", children: "Local Spices" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1620075696/Myanmar-Traditional-Dishes-To-Try-Main/Myanmar-Traditional-Dishes-To-Try-Main-1120x732.jpg",
              alt: "Myanmar street food",
              className: "object-cover w-full h-48 rounded-lg shadow-md"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://myanmarshalom.com/wp-content/uploads/2020/07/bamboo-delight-730x470.jpg",
              alt: "Cooking traditions",
              className: "object-cover w-full h-64 rounded-lg shadow-md"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-6 space-y-4", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://sethlui.com/wp-content/uploads/2016/09/myanmar-foods-003.jpg",
              alt: "Local ingredients",
              className: "object-cover w-full h-64 rounded-lg shadow-md"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://motherslovetea.com/wp-content/uploads/2017/09/slider1-1.jpg",
              alt: "Tea leaf harvesting",
              className: "object-cover w-full h-48 rounded-lg shadow-md"
            }
          )
        ] })
      ] })
    ] }) }) })
  ] });
};
const _index = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(HomePage, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _index
}, Symbol.toStringTag, { value: "Module" }));
const HeaderOnlyLayout = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow pt-16", children })
  ] });
};
const AllTownsPage = () => {
  const topCities = towns.filter(
    (town) => [
      "yangon",
      "mandalay",
      "pyin-oo-lwin",
      "nay-pyi-daw",
      "bagan",
      "Kyauk-se"
    ].includes(town.id)
  );
  const shanHighlands = towns.filter(
    (town) => ["taunggyi", "kalaw", "nyaung-shwe", "inle-lake"].includes(town.id)
  );
  const southeastMyanmar = towns.filter(
    (town) => ["hpa-an", "mawlamyaing", "dawei", "kawthaung", "myeik"].includes(town.id)
  );
  const beachDestinations = towns.filter(
    (town) => ["ngapali", "ngwe-saung", "chaung-tha"].includes(town.id)
  );
  return /* @__PURE__ */ jsx(HeaderOnlyLayout, { children: /* @__PURE__ */ jsxs("div", { className: "container px-4 py-8 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mt-20 mb-10 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-bold text-gray-900", children: "Explore Myanmar's Towns" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-3xl mx-auto text-lg text-gray-600", children: "Discover the diverse cities and towns of Myanmar, each offering unique cultural experiences, historical landmarks, and culinary delights. From bustling metropolises to serene hill stations, find your next destination here." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Top Cities in Myanmar" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Discover the vibrant culture and rich heritage of Myanmar's major cities" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: topCities.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-green-50", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "The Shan Highlands" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Explore the cool climate and rich culture of Myanmar's highland region" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: shanHighlands.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Southeast Myanmar" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Experience the unique culture and natural beauty of Myanmar's southeast" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: southeastMyanmar.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-blue-50", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Beach Destinations" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Relax on pristine beaches and enjoy the coastal beauty of Myanmar" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: beachDestinations.map((beach) => /* @__PURE__ */ jsx(BeachCard, { beach }, beach.id)) })
    ] }) })
  ] }) });
};
const towns__index = UNSAFE_withComponentProps(function Towns() {
  return /* @__PURE__ */ jsx(AllTownsPage, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: towns__index
}, Symbol.toStringTag, { value: "Module" }));
const TopCitiesPage = () => {
  const topCities = towns.filter(
    (town) => ["yangon", "mandalay", "bagan", "pyin-oo-lwin", "nay-pyi-daw", "Kyauk-se"].includes(
      town.id
    )
  );
  return /* @__PURE__ */ jsx(HeaderOnlyLayout, { children: /* @__PURE__ */ jsx("div", { className: "py-12 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/",
        className: "inline-flex items-center text-amber-600 hover:text-amber-700",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-5 w-5 mr-2" }),
          "Back to Home"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Top Cities in Myanmar" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Discover the vibrant culture and rich heritage of Myanmar's major cities" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: topCities.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] })
  ] }) }) });
};
const towns_topCities = UNSAFE_withComponentProps(function TownsTopCities() {
  return /* @__PURE__ */ jsx(TopCitiesPage, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: towns_topCities
}, Symbol.toStringTag, { value: "Module" }));
const ShanHighlandsPage = () => {
  const shanHighlands = towns.filter(
    (town) => [
      "taunggyi",
      "nyaung-shwe",
      "keng-tung",
      "tachileik",
      "kalaw",
      "inle-lake"
    ].includes(town.id)
  );
  return /* @__PURE__ */ jsx(HeaderOnlyLayout, { children: /* @__PURE__ */ jsx("div", { className: "py-12 bg-green-50", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/",
        className: "inline-flex items-center text-amber-600 hover:text-amber-700",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-5 h-5 mr-2" }),
          "Back to Home"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-8 text-3xl font-bold text-gray-900", children: "The Shan Highlands" }),
      /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg text-gray-600", children: "Explore the cool climate and rich culture of Myanmar's highland region" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: shanHighlands.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] })
  ] }) }) });
};
const towns_shanHighlands = UNSAFE_withComponentProps(function TownsShanHighlands() {
  return /* @__PURE__ */ jsx(ShanHighlandsPage, {});
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: towns_shanHighlands
}, Symbol.toStringTag, { value: "Module" }));
const SoutheastMyanmarPage = () => {
  const southeastMyanmar = towns.filter(
    (town) => ["hpa-an", "mawlamyaing", "kawthaung", "dawei", "myeik"].includes(town.id)
  );
  return /* @__PURE__ */ jsx(HeaderOnlyLayout, { children: /* @__PURE__ */ jsx("div", { className: "py-12 bg-purple-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/",
        className: "inline-flex items-center text-amber-600 hover:text-amber-700",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-5 w-5 mr-2" }),
          "Back to Home"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Southeast Myanmar" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Experience the unique culture and natural beauty of Myanmar's southeast" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: southeastMyanmar.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] })
  ] }) }) });
};
const towns_southeast = UNSAFE_withComponentProps(function TownsSoutheast() {
  return /* @__PURE__ */ jsx(SoutheastMyanmarPage, {});
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: towns_southeast
}, Symbol.toStringTag, { value: "Module" }));
const restaurants = [
  // Pyin Oo Lwin Restaurants
  {
    id: "maw-da-nu",
    name: "Maw Da Nu",
    image: "/restaurants/pyinoolwin/1.jpg",
    townId: "pyin-oo-lwin",
    description: "Famous for Shan Noodle"
  },
  {
    id: "san-francisco",
    name: "San Francisco Restaurant",
    image: "/restaurants/pyinoolwin/2.jpg",
    townId: "pyin-oo-lwin",
    description: "Known for Chinese-Shan fusion dishes"
  },
  {
    id: "feel-restaurant",
    name: "Feel Restaurant (Lake Front)",
    image: "/restaurants/pyinoolwin/3.jpg",
    townId: "pyin-oo-lwin",
    description: "Famous for asian cuisine"
  },
  {
    id: "december-waterfall",
    name: "December Waterfall and Garden",
    image: "/restaurants/pyinoolwin/4.jpg",
    townId: "pyin-oo-lwin",
    description: "Known for dairy products"
  },
  {
    id: "forest-cafe",
    name: "Forest Cafe",
    image: "/restaurants/pyinoolwin/5.jpg",
    townId: "pyin-oo-lwin",
    description: "Famous for speciality coffee and pastries"
  },
  {
    id: "one-piece-bbq",
    name: "One Piece BBQ",
    image: "/restaurants/pyinoolwin/6.jpg",
    townId: "pyin-oo-lwin",
    description: "Famous for its bbq and grilled meat"
  },
  // Kyaukse Restaurants
  {
    id: "daw-mya-chit",
    name: "Daw Mya Chit Myanmar Cuisine",
    image: "https://i.imgur.com/oiTKg5y.jpeg",
    townId: "Kyauk-se",
    description: "Famous for burmese lunch packed with lotus leaves"
  },
  {
    id: "tun-thitsa",
    name: "Tun Thitsa Cafe",
    image: "https://i.imgur.com/1yCTmPm.jpeg",
    townId: "Kyauk-se",
    description: "Famous for its tea and pratha"
  },
  {
    id: "kyar-pauk",
    name: "Kyar Pauk Noodle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSF0ZewsP_TjJxvNU0nn6G7rUxN8Bjz3lMpSUGp_wxMdibn8y_LQmAvlQjcBulvkv69YY&usqp=CAU",
    townId: "Kyauk-se",
    description: "Famous for fried noodles packed with lotus leaves and chinese stir fry dishes"
  },
  // Hpa-An Restaurants
  {
    id: "hpa-an-night-market",
    name: "Hpa An night market",
    image: "/restaurants/hpa-an/1.jpg",
    townId: "hpa-an",
    description: "Famous for variety of Karen local foods"
  },
  {
    id: "cafe-kto",
    name: "Cafe' KTO",
    image: "/restaurants/hpa-an/2.jpg",
    townId: "hpa-an",
    description: "Famous for coffee and its scenery"
  },
  {
    id: "veranda-ycc",
    name: "Veranda YCC",
    image: "/restaurants/hpa-an/3.jpg",
    townId: "hpa-an",
    description: "Famous for its cozy space and light beverages"
  },
  {
    id: "naw-ta-yar",
    name: "Naw Ta Yar Karen Traditional Food",
    image: "/restaurants/hpa-an/4.jpg",
    townId: "hpa-an",
    description: "Famous for authentic Karen cuisine"
  },
  {
    id: "eat-me",
    name: "EAT ME",
    image: "/restaurants/hpa-an/5.jpg",
    townId: "hpa-an",
    description: "Famous for asian BBQ and drinks"
  },
  // Mawlamyaing Restaurants
  {
    id: "mawlamyaing-strand-night-market",
    name: "Mawlamyaing Strand Road Night Market",
    image: "/restaurants/mawlamyaing/1.jpg",
    townId: "mawlamyaing",
    description: "Known for variety of street foods"
  },
  {
    id: "pyaw-yar-camp",
    name: "Pyaw Yar Camp & Restaurant",
    image: "/restaurants/mawlamyaing/2.jpg",
    townId: "mawlamyaing",
    description: "Known for light food and beverages"
  },
  {
    id: "bamboo-hut",
    name: "Bamboo Hut Restaurant",
    image: "/restaurants/mawlamyaing/3.jpg",
    townId: "mawlamyaing",
    description: "Famous for Mon-Burmese lunch"
  },
  {
    id: "doh-yoe-yar",
    name: "Doh Yoe Yar Mon Style Vermicelli",
    image: "/restaurants/mawlamyaing/4.jpg",
    townId: "mawlamyaing",
    description: "Famous for soaked rice vermicelli with fish soup"
  },
  // Dawei Restaurants
  {
    id: "bamboo-garden",
    name: "Bamboo Garden",
    image: "/restaurants/dawei/1.jpg",
    townId: "dawei",
    description: "Known for various breakfast menu"
  },
  {
    id: "shwe-hnin-si",
    name: "Shwe Hnin Si Seafood Restaurant",
    image: "/restaurants/dawei/2.jpg",
    townId: "dawei",
    description: "Famous for fresh seafood dishes"
  },
  {
    id: "old-house-cafe",
    name: "Old House Café",
    image: "/restaurants/dawei/3.jpg",
    townId: "dawei",
    description: "Famous for breakfast,coffee and pizzas"
  },
  {
    id: "little-eden",
    name: "Little Eden in Dawei",
    image: "/restaurants/dawei/4.jpg",
    townId: "dawei",
    description: "Known for European light foods and pastries"
  },
  {
    id: "sawardi",
    name: "Sawardi Restaurant",
    image: "/restaurants/dawei/5.jpg",
    townId: "dawei",
    description: "Famous for Thai Cuisine and Grilled seafood"
  },
  // Kawthaung Restaurants
  {
    id: "sky-view",
    name: "Sky View Kaw Thaung",
    image: "/restaurants/kawthaung/1.jpg",
    townId: "kawthaung",
    description: "Known for asian cuisine"
  },
  {
    id: "victoria-cliff",
    name: "Victoria Cliff Hotel and Resort",
    image: "/restaurants/kawthaung/2.jpg",
    townId: "kawthaung",
    description: "Famous for local seafood and fine dining"
  },
  {
    id: "kawthaung-yummy",
    name: "Kawthaung Yummy Restaurant",
    image: "/restaurants/kawthaung/3.jpg",
    townId: "kawthaung",
    description: "Known for local-Thai fusion cuisine"
  },
  // Myeik Restaurants
  {
    id: "pin-lae-may",
    name: "Pin Lae May (Sea Goddess) Restaurant",
    image: "/restaurants/myeik/1.jpg",
    townId: "myeik",
    description: "Famous for beer accompanied with seafood dishes"
  },
  {
    id: "my-mergui-bar",
    name: "My Mergui Bar",
    image: "/restaurants/myeik/2.jpg",
    townId: "myeik",
    description: "Known for asian cuisine and unplugged entertainment"
  },
  {
    id: "hotel-drift",
    name: "Hotel Drift",
    image: "/restaurants/myeik/3.jpg",
    townId: "myeik",
    description: "Famous for variety of cocktails and sunset view"
  },
  {
    id: "mr-bamboo",
    name: "Mr Bamboo Restaurant",
    image: "/restaurants/myeik/4.jpg",
    townId: "myeik",
    description: "Known for local and seafood cuisines"
  },
  // Nay Pyi Daw Restaurants
  {
    id: "hta-naung",
    name: "Hta Naung Restaurant",
    image: "/restaurants/naypyidaw/htanaung.jpg",
    townId: "nay-pyi-daw",
    description: "Famous for Burmese Lunch"
  },
  {
    id: "mon-ma-2",
    name: "Mon Ma (II) Restaurant",
    image: "/restaurants/naypyidaw/2.jpg",
    townId: "nay-pyi-daw",
    description: "Famous for Mon style dishes"
  },
  {
    id: "new-thai-yai",
    name: "New Thai Yai Restaurant",
    image: "/restaurants/naypyidaw/3.jpg",
    townId: "nay-pyi-daw",
    description: "Famous for Thai and Shan dishes"
  },
  {
    id: "nature-tea-house",
    name: "Nature Tea House",
    image: "/restaurants/naypyidaw/4.PNG",
    townId: "nay-pyi-daw",
    description: "Famous for wide variety of breakfast"
  },
  {
    id: "cafe-dibar",
    name: "Cafe DiBar",
    image: "/restaurants/naypyidaw/5.jpg",
    townId: "nay-pyi-daw",
    description: "Known for speciality coffee and European Cuisine"
  },
  {
    id: "u-soe-gyi",
    name: "U Soe Gyi Grilled Pork Ribs",
    image: "/restaurants/naypyidaw/6.JPG",
    townId: "nay-pyi-daw",
    description: "Known for its special grilled pork ribs"
  },
  // Mandalay Restaurants
  {
    id: "unique-mandalay-tea-room",
    name: "Unique Mandalay Tea Room",
    image: "/restaurants/mandalay/1.jpg",
    townId: "mandalay",
    description: "Famous for variety of breakfast dishes"
  },
  {
    id: "bbb-european-restaurant",
    name: "BBB European Restaurant",
    image: "/restaurants/mandalay/2.jpg",
    townId: "mandalay",
    description: "Famous for unique European cuisine"
  },
  {
    id: "mingalarbar-restaurants",
    name: "Mingalarbar Restaurants",
    image: "/restaurants/mandalay/3.jpg",
    townId: "mandalay",
    description: "Famous for Burmese curry and lunch"
  },
  {
    id: "the-palace-by-golden-duck",
    name: "The Palace by Golden Duck",
    image: "/restaurants/mandalay/4.jpg",
    townId: "mandalay",
    description: "Famous for signature Chinese Cuisine"
  },
  {
    id: "karaweik-cafe",
    name: "Karaweik Cafe",
    image: "/restaurants/mandalay/5.jpg",
    townId: "mandalay",
    description: "Famous for Biryani and Indian food"
  },
  // Bagan Restaurants
  {
    id: "shwe-myanmar-bagan",
    name: "Shwe Myanmar Restaurant",
    image: "/restaurants/bagan/1.jpg",
    townId: "bagan",
    description: "Famous for buffet style Burmese lunch"
  },
  {
    id: "tharabar-3",
    name: "Tharabar 3 Restaurants",
    image: "/restaurants/bagan/2.jpg",
    townId: "bagan",
    description: "Famous for Burmese salad and lunch"
  },
  {
    id: "zee-yeik-fritters",
    name: "Zee Yeik Fritters Shop",
    image: "/restaurants/bagan/3.jpg",
    townId: "bagan",
    description: "Famous for Burmese style fritters"
  },
  {
    id: "hnan-phat-chin",
    name: "Hnan Phat Chin Restaurant",
    image: "/restaurants/bagan/4.jpg",
    townId: "bagan",
    description: "Famous for myanmar curry made with fermented bean paste"
  },
  {
    id: "sharkys-bagan",
    name: "Sharky's Bagan Deli and Cafe",
    image: "/restaurants/bagan/5.jpg",
    townId: "bagan",
    description: "Famous for European cuisine and Pizzas"
  },
  // Yangon Restaurants
  {
    id: "rangoon-tea-house",
    name: "Rangoon Tea House",
    image: "/IMG_4982.JPG",
    townId: "yangon",
    description: "Famous for Mohinga and variety of local dishes"
  },
  {
    id: "ykko-kyae-oh",
    name: "YKKO Kyae Oh",
    image: "/IMG_4983.JPG",
    townId: "yangon",
    description: "Famous for unique Kyae Oh"
  },
  {
    id: "shan-yoe-yar",
    name: "Shan Yoe Yar",
    image: "/IMG_4984.JPG",
    townId: "yangon",
    description: "Famous for shan cuisine"
  },
  {
    id: "lucky-seven-tea-house",
    name: "Lucky Seven Tea House",
    image: "/IMG_4985.JPG",
    townId: "yangon",
    description: "Famous for local breakfast foods"
  },
  {
    id: "cafe-salween",
    name: "Cafe Salween",
    image: "/IMG_4986.JPG",
    townId: "yangon",
    description: "Famous for traditional burmese desserts"
  },
  // Taunggyi Restaurants
  {
    id: "maw-kham-restaurant",
    name: "Maw Kham Restaurant",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noTIKQ4vgAfWb9e0eFxN0nID3TM6lMQXgLJ293fleb_Au-IpH1Gs79gtBpJkvPruTyv1Fain-VPDqd-UOHSb5KVqhhagU1dy8IEoN-e65aQuAHQKJSnRwSPf_P49lUB0S27eeXg=s680-w680-h510-rw",
    townId: "taunggyi",
    description: "Popular restaurant serving authentic Shan and Chinese cuisine"
  },
  {
    id: "upper-house",
    name: "Upper House Cafe",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLWoUzqPQJfn9QCVc26Ya-jO21TwdpQFKdsoKLjKFBkcKNgTHrqXWwPKoL1vHRozeFnk&usqp=CAU",
    townId: "taunggyi",
    description: "Famous for specility coffee"
  },
  {
    id: "taung-chay",
    name: "Taung Chay Dumplings",
    image: "https://i.ytimg.com/vi/QwHZ_qFrU2E/sddefault.jpg?v=65ec5ce1",
    townId: "taunggyi",
    description: "Famous for Taunggyi style dumplings and rice noodles"
  },
  {
    id: "city-view",
    name: "City View Bar and Restaurant",
    image: "https://jasminetaunggyi.com/wp-content/uploads/2023/08/J-Bar-8-scaled.jpg",
    townId: "taunggyi",
    description: "Famous for dining with panoramic view of the city"
  },
  {
    id: "daw-pan",
    name: "Daw Pan Warm Tofu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalF3cTxyy5KxV1lVjPDyvqAx35kzvUuwleNg2yVz0bQ5EJTfVrRtpNKKwkVJLSdph6BU&usqp=CAU",
    townId: "taunggyi",
    description: "Famous for noodles treated with tofu"
  },
  // Kalaw Restaurants
  {
    id: "maluca-villa",
    name: "Maluca Villa",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/68/28/60/maluca-villa-restaurant.jpg?w=900&h=500&s=1",
    townId: "kalaw",
    description: "Famous for coffee and aesthetic scenery"
  },
  {
    id: "kalaw-cafeyard",
    name: "Kalaw Cafeyard",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npK3trPZV0nzfpvjEiAWPzAHl6rGDsKomThWgMxDNITzbNvuzWjwCKYSLobKboJOe4IAREE5oQDKh2D6y4Ca8W4Gvondd6V9Ep2ORBHOqDOdOoL7Wwsc9eyU4QlbHxfJip2JOAeIH9obXfb=s680-w680-h510-rw",
    townId: "kalaw",
    description: "Local favorite serving speciality coffee and pasteries"
  },
  {
    id: "sky-house",
    name: "Sky House Hot Pot and Barbque",
    image: "https://i.ytimg.com/vi/7j-ODk2PAoc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAhHh7EGt5ZEIIhCO4Co2lwbKCy-w",
    townId: "kalaw",
    description: "Popular spot for fresh meat bbq with fair price"
  },
  {
    id: "thu-maung",
    name: "Thu Maung Myanmar Restaurant",
    image: "https://cdn.sanity.io/images/ul272611/production/41a86966a2937b6b633b0726e98b7beb177b073e-1080x1440.jpg?rect=0,180,1080,1080&w=600&h=600&fit=max&auto=format",
    townId: "kalaw",
    description: "Authentic Myanmar cuisine in the heart of Kalaw"
  },
  {
    id: "kalaw-market",
    name: "Kalaw Market",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Kalaw_Market_2021_November.jpg/1200px-Kalaw_Market_2021_November.jpg",
    townId: "kalaw",
    description: "The best placet to explore Shan authentic foods and dishes"
  },
  // Nyaung-shwe Restaurants
  {
    id: "pwe-taw-win",
    name: "Pwe Taw Win Nature Restaurant",
    image: "https://static.where-e.com/Myanmar/Tora-Modern-Izakaya_f8825b862edf2cb33eb60ec5cf4fe8b2.jpg",
    townId: "nyaung-shwe",
    description: "Popular for Shan and Intha Style Traditional Food"
  },
  {
    id: "mann-mann-rooftop",
    name: "Mann Mann Rooftop Bar and Restaurant",
    image: "https://img.p.mapq.st/?url=https://media-cdn.tripadvisor.com/media/photo-o/14/09/5a/22/pagoda-view.jpg?w=3840&q=75",
    townId: "nyaung-shwe",
    description: "Foods and Beverages with Rooftop View"
  },
  {
    id: "thanakha-garden",
    name: "Thanakha Garden Restaurant",
    image: "https://www.gomyanmartours.com/wp-content/uploads/2016/03/Thanakha-Garden.jpg",
    townId: "nyaung-shwe",
    description: "Traditional Shan cuisine and chinese cuisine"
  },
  {
    id: "golden-kite",
    name: "Golden Kite Restaurant",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/c4/ac/da/caption.jpg?w=400&h=-1&s=1",
    townId: "nyaung-shwe",
    description: "Famous for Shan and Intha traditional dishes"
  },
  // Tachileik Restaurants
  {
    id: "vela-varee",
    name: "Vela Varee Restaurants",
    image: "/restaurants/tachileik/1.JPG",
    townId: "tachileik",
    description: "Famous for its unique location and scenery"
  },
  {
    id: "sora-cafe",
    name: "Sora Cafe and Restaurant",
    image: "/restaurants/tachileik/2.PNG",
    townId: "tachileik",
    description: "Famous for its Thai foods"
  },
  {
    id: "akha-zone-cafe",
    name: "Akha Zone Cafe",
    image: "/restaurants/tachileik/3.WEBP",
    townId: "tachileik",
    description: "Famous for Akha traditional foods and soft drinks"
  },
  {
    id: "tachileik-night-market",
    name: "Tachileik Night Market",
    image: "/restaurants/tachileik/IMG_6058.JPG",
    townId: "tachileik",
    description: "Known for variety choices of Shan-Thai Street Foods for Tachileik township"
  },
  // Keng Tung Restaurants
  {
    id: "i-visit-keng-tung",
    name: "I visit Keng Tung",
    image: "/restaurants/kengtung/1.PNG",
    townId: "kengtung",
    description: "Famous for wide variety of Asian dishes"
  },
  {
    id: "golden-orchid-cafe",
    name: "Golden Orchid Cafe",
    image: "/restaurants/kengtung/2.PNG",
    townId: "kengtung",
    description: "Famous for wide variety from Breakfast to Dinner"
  },
  {
    id: "naung-lay-fish-pond",
    name: "Naung Lay Fish Pond & Restaurant",
    image: "/restaurants/kengtung/3.PNG",
    townId: "kengtung",
    description: "Famous for its peaceful location and foods"
  }
];
const getRestaurantsByTownId = (townId) => {
  return restaurants.filter((restaurant) => restaurant.townId === townId);
};
const dishes = [
  {
    id: "mohinga",
    name: "mohinga",
    displayName: "Mohinga",
    description: "A hearty fish soup with rice noodles, crispy fritters, and aromatic herbs - Myanmar's beloved national breakfast dish.",
    image: "https://pinkysnowfoods.co.uk/cdn/shop/files/A5A48E2A-5072-489B-B768-95EB2EAB65F3.webp?v=1723143581&width=1445"
  },
  {
    id: "tea-leaf-salad",
    name: "tea-leaf-salad",
    displayName: "Tea Leaf Salad",
    description: "A unique blend of fermented tea leaves, crunchy nuts, tomatoes, and garlic - a tangy and textural Burmese favorite.",
    image: "https://c8.alamy.com/comp/FAR1Y0/tea-leaf-salad-served-in-an-ornate-bowl-in-yangon-myanmar-burma-FAR1Y0.jpg"
  },
  {
    id: "shan-noodles",
    name: "shan-noodles",
    displayName: "Shan Noodles",
    description: "Rice noodles in a light tomato-based sauce with marinated chicken or pork, garnished with peanuts and fresh herbs.",
    image: "https://myfoodmyanmar.com/wp-content/uploads/2018/08/shutterstock_590487038.jpg"
  },
  {
    id: "burmese-fritters",
    name: "burmese-fritters",
    displayName: "Burmeses Fritters",
    description: "Burmese fritters are crispy snacks made from chickpea batter with vegetables or beans, evolving from simple lentil cakes to diverse styles influenced by local flavors and tea culture.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHHGe0JhB89ew/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733814141988?e=2147483647&v=beta&t=BMM2QTARQmiUsxdDsxwzMeh6RE8J-1f31IX_W9-VwO8"
  },
  {
    id: "chicken-curry",
    name: "chicken-curry",
    displayName: "Chicken Curry",
    description: "Burmese Chicken Curry is a flavorful, aromatic dish simmered with spices and herbs, often served with rice for a comforting meal.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZr4eKZtXPvwlTEOTOcw7_nmDNYQ__B3FyeQ&s"
  },
  {
    id: "burmese-curry",
    name: "burmese-curry",
    displayName: "Burmese Curry",
    description: "Rich and aromatic curry made with meat or vegetables, cooked in oil and spices until tender - a staple of Burmese cuisine.",
    image: "https://images.squarespace-cdn.com/content/v1/5c5c3aa4840b161566ee5eb8/1613592561255-97GOQFKRJ5YZYT7RHXE3/burmese-chicken-curry.jpg"
  },
  {
    id: "thingyan-rice",
    name: "thingyan-rice",
    displayName: "Thingyan Rice",
    description: "Thingyan rice is a traditional Burmese festive dish made with turmeric and coconut milk, enjoyed during the Thingyan Water Festival to celebrate the New Year.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pung-Atah.jpg/330px-Pung-Atah.jpg"
  },
  {
    id: "seafood-curry",
    name: "seafood-curry",
    displayName: "Seafood Curry",
    description: "Rich and aromatic curry made with meat or vegetables, cooked in oil and spices until tender - a staple of Burmese cuisine.",
    image: "https://images.deliveryhero.io/image/fd-mm/LH/igt6-listing.jpg"
  },
  {
    id: "mont-lin-ma-yar",
    name: "mont-lin-ma-yar",
    displayName: "Mont Lin Ma Yar",
    description: 'Crispy "couple snack" made from rice flour, quail eggs, and spring onions - a popular street food delicacy.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsseoMjSA23qJJNH3jJuqoX4lgxoz6_26kPg&s"
  },
  {
    id: "inle-fish-curry",
    name: "inle-fish-curry",
    displayName: "Inle Fish Curry",
    description: "Fresh fish from Inle Lake cooked by stuffing herbs and greens inside the fish and served by wrapping with bamboo rope. It is an authentic Inle style dish.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLvbO1fyEE5deEZqdKgFS5CIhENeNNoDL4g&s"
  },
  {
    id: "mee-shay",
    name: "mee-shay",
    displayName: "MeeShay",
    description: "Mee Shay is a classic noodle dish from Mandalay, with soft noodles, savory starch, and a rich topping of minced pork or chicken, treated with seasoning, garlic oil and chili oil.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cJXZcnFpBxA4i0b8kqFEQTCHnLh-TwnOEw&s"
  },
  {
    id: "hta-ma-ne",
    name: "hta-ma-ne",
    displayName: "Htamane",
    description: "Htamane is a traditional Burmese glutinous rice delicacy, rich and sticky, often cooked with coconut, sesame, and peanuts—celebrated during festive gatherings.",
    image: "https://i.ytimg.com/vi/u6SY-lYQxKk/sddefault.jpg"
  },
  {
    id: "yellow-rice",
    name: "yellow-rice",
    displayName: "Yellow Rice",
    description: "Shan style yellow rice is made with Shan rice, boiled potatoes and tomatoes. It is treated in round shape along with garlic oil, veggies and chilies.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEpecHep0gWmuswZkLy6ZeCY4Jma6bf5rFwZwjQXKQkpqF7eXJknHIWGjanhkC-ypzhVYj-5ZeJ_izdgONX7g4xtiQ0KPZDsKogKj_C-R7C0c8XgWotgx9g2D9oG1aPG-ZWQ5hdkc3TvalA52w2a-Jn1YtBdM_g-V7Q7CCZVpaUF8B4E3WQTStntd6d6A/w640-h480/IMG_9897.HEIC"
  },
  {
    id: "kyay-oh",
    name: "kyay-oh",
    displayName: "Kyay-Oh",
    description: "Kyay Oh is a beloved Burmese noodle dish, featuring flavorful broth, tender noodles, and a mix of fresh meat or seafood—comfort food at its finest.",
    image: "https://cdn.tasteatlas.com//images/dishrestaurants/b38cb6d1d4f24a23ae1814d0f6a3df35.jpg?width=800&height=513"
  },
  {
    id: "biryani",
    name: "biryani",
    displayName: "Burmese Biryani",
    description: "Fragrant rice cooked with aromatic spices, meat, and caramelized onions - influenced by Indian cuisine.",
    image: "https://www.nilarbiryani.com/wp-content/uploads/2021/03/biryani.jpg"
  },
  {
    id: "nan-gyi-thoke",
    name: "nan-gyi-thoke",
    displayName: "Nan Gyi Thoke",
    description: "Thick rice noodles tossed with chicken curry, coconut milk, and crispy garnishes - a popular Mandalay dish.",
    image: "https://images.squarespace-cdn.com/content/v1/604fca2357feb3489dacff9b/1615924788667-6AOD4HF3780P26L3TY7B/NanGyiThokeBurmalicious1"
  },
  {
    id: "burmese-tofu",
    name: "burmese-tofu",
    displayName: "Burmese Tofu",
    description: "Burmese Tofu is a soft, golden legume-based delicacy, often served fried or in salads, celebrated for its light texture and subtle, comforting flavor.",
    image: "https://www.mangiaviviviaggia.com/wp-content/uploads/2016/09/shan-tofu-birmano.jpg"
  },
  {
    id: "Burmese-pork-offal-skewers",
    name: "Burmese-pork-offal-skewers",
    displayName: "Burmese pork offal skewers",
    description: "Burmese Pork Offal Skewers are savory street snacks, grilled to perfection and bursting with smoky, bold flavors that capture Myanmar’s local taste.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfw9ffypbehcxlZ0gvLJ0H4A6FmNAZme0pQ&s"
  },
  {
    id: "burmese-preserverd-fruits",
    name: "burmese-preserverd-fruits",
    displayName: "Burmese Preserved Fruits",
    description: "Burmese Preserved Fruits is a traditional Burmese salad that combines tangy, sour flavors with fresh vegetables and sometimes fruits, creating a refreshing and zesty dish often enjoyed as a side.",
    image: "https://i.ytimg.com/vi/RBc3PNtvzBo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCh2OeAU2X7S9UALHyqlwO6zWX_TQ"
  },
  {
    id: "htoe-mont",
    name: "htoe-mont",
    displayName: "Htoe Mont",
    description: "Sweet glutinous rice cake with coconut shavings and poppy seeds - a traditional Mon dessert.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Freid_Coconut_Htoe_Mont.jpg"
  },
  {
    id: "assorted-burmese-desserts",
    name: "assorted-burmese-desserts",
    displayName: "Assorted Burmese Desserts",
    description: "Assorted burmese desserts are mostly made from rice flour, butter and jaggery.They are treated mostly at an occassion or donation.",
    image: "https://www.restaurantguide.com.mm/custom/domain_1/image_files/sitemgr_photo_23996.jpg"
  },
  {
    id: "hsi-htamin",
    name: "hsi-htamin",
    displayName: "Hsi Htamin",
    description: "Hsi Htamin is a traditional dish of fragrant, turmeric-infused glutinous rice, often served with savory sides like grilled dried fish. ",
    image: "https://i.ytimg.com/vi/bLldcqArZys/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGf5e3BSReAM3nSARgchK9ukn7Zw"
  },
  {
    id: "local-wine",
    name: "local-wine",
    displayName: "Local Wine",
    description: "Artisanal wine produced in Myanmar's Shan State, particularly from the Red Mountain Estate - known for its unique terroir.",
    image: "https://redmountainestate.com/wp-content/uploads/2023/03/Moscato-3.jpg"
  },
  {
    id: "local-coffee",
    name: "local-coffee",
    displayName: "Local Coffee",
    description: "Premium Arabica coffee grown in the highlands of Shan State, known for its smooth flavor and medium body.",
    image: "https://www.myanmarinsider.com/wp-content/uploads/2018/07/Time-for-Myanmar%E2%80%99s-Specialty-Coffee-.jpg"
  },
  {
    id: "cendol",
    name: "cendol",
    displayName: "Cendol",
    description: "Mont Lett Saung is a traditional Burmese dessert, featuring soft rice flour cakes soaked in sweet coconut milk and topped with crunchy garnishes. It’s a beloved treat that combines delicate texture with rich, comforting flavors.",
    image: "https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/Cendol-Bango/Cendol%20Bango%20copy.jpg"
  },
  {
    id: "mont-lone-yay-paw",
    name: "mont-lone-yay-paw",
    displayName: "Mont Lone Yay Paw",
    description: "Mont Lone Yay Paw is a traditional Burmese sweet, made of glutinous rice balls filled with jaggery and served during festive occasions. Its chewy texture and caramel-like filling make it a beloved treat across Myanmar.",
    image: "https://i.pinimg.com/736x/b6/53/62/b65362a4e9a45d1edbed429433bee3ee.jpg"
  },
  {
    id: "palm-wine",
    name: "palm-wine",
    displayName: "Palm Wine",
    description: "Burmese Palm Wine, locally called “Toddy”, is a traditional fermented drink with a sweet, tangy flavor, often enjoyed during gatherings and festive celebrations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP93ko_gzg62VV4rUGP-44gkQUHFjpAC63qQ&s"
  },
  {
    id: "jaggery",
    name: "jaggery",
    displayName: "Jaggery",
    description: "Burmese jaggery is a traditional unrefined sugar made from the concentrated sap of toddy palm trees. Often shaped into small round blocks, it has a rich caramel-like sweetness and is enjoyed as a natural snack, paired with tea, or used in desserts and traditional medicines in Myanmar.",
    image: "https://www.chefspencil.com/wp-content/uploads/Toddy-Palm-Jaggery.jpg"
  },
  {
    id: "talabaw",
    name: "talabaw",
    displayName: "Talabaw",
    description: "Talabaw is a traditional Kayin (Karen) dish, a savory and hearty soup made with fermented tea leaves, local herbs, and vegetables. It reflects the rich culinary heritage and unique flavors of the Kayin community.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Talabaw_%28cropped%29.jpg/1200px-Talabaw_%28cropped%29.jpg"
  },
  {
    id: "seafood-curry",
    name: "seafood-curry",
    displayName: "Seafood Curry",
    description: "Fresh seafood cooked in a rich curry sauce with lemongrass, turmeric, and local spices - a coastal specialty.",
    image: "https://images.deliveryhero.io/image/fd-mm/LH/igt6-listing.jpg"
  },
  {
    id: "grilled-fish",
    name: "grilled-fish",
    displayName: "Grilled Fish",
    description: "Fresh fish grilled to perfection and served with herbs and chili sauce - common along Myanmar's rivers and coast.",
    image: "https://myfoodmyanmar.com/wp-content/uploads/2020/08/Grilled-Fish-Indian-Recipe-V6-1-e1632195012590.jpg"
  },
  {
    id: "grilled-seafood",
    name: "grilled-seafood",
    displayName: "Grilled seafood",
    description: "Fresh seafood grilled to perfection and served with herbs and chili sauce - common along Myanmar's beaches.",
    image: "https://silverkris.singaporeair.com/wp-content/uploads/2017/12/DSC_5150_result-1024x705.jpg"
  },
  {
    id: "falooda",
    name: "falooda",
    displayName: "Falooda",
    description: "Falooda is a refreshing Burmese dessert drink, blending sweet syrup, vermicelli, jelly, and creamy milk for a colorful and indulgent treat.",
    image: "https://milkmaid.lk/sites/default/files/2024-03/WS.jpg"
  },
  {
    id: "durian",
    name: "durian",
    displayName: "Durian",
    description: "Burmese Durian is a rich and creamy tropical fruit, known for its strong aroma and sweet, custard-like flavor, cherished as a seasonal delicacy in Myanmar.",
    image: "https://global-geography.org/attach/Geography/Asia/Burma/Pictures/Yangon/Durian_2/scaled-900x599-B068_Durian_Durian.jpg"
  },
  {
    id: "mango",
    name: "mango",
    displayName: "Mango",
    description: "Burmese Mango is a sweet and juicy tropical fruit, cherished for its fragrant aroma and vibrant flavor, often enjoyed fresh or in salads and desserts.",
    image: "https://www.freshplaza.com/remote/https/agfstorage.blob.core.windows.net/misc/FP_cn/2021/06/22/u_95496730_3981864266_fm_26_gp_0.jpg?preset=ContentFullSmall"
  },
  {
    id: "kat-kyi-kaik",
    name: "kat-kyi-kaik",
    displayName: "Kat Kyi Kaik (Fried Noodles)",
    description: "Stir-fried flat rice noodles with seafood, vegetables, and eggs - a popular street food dish from Yangon.",
    image: "https://i.ytimg.com/vi/qfrjyGdvhao/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGH8gRigTMA8=&rs=AOn4CLBMFHjYdOzfBdSphJG0D5QtcJ_qtg"
  },
  {
    id: "shwe-yin-aye",
    name: "shwe-yin-aye",
    displayName: "Shwe Yin Aye",
    description: "Shwe Yin Aye is a traditional Burmese dessert, combining coconut milk, jelly, sago, and bread for a sweet, creamy, and refreshing treat.",
    image: "https://www.myyangon.com.mm/storage/posts/April2023/SYA.jpg"
  },
  {
    id: "burmese-tea",
    name: "burmese-tea",
    displayName: "Burmese Tea",
    image: "https://www.gomyanmartours.com/wp-content/uploads/2017/08/Myanmar-is-a-fantastic-place-to-enjoy-tea.jpg",
    description: "Burmese Tea is a rich and aromatic beverage, often served sweetened or with milk, cherished for its comforting flavor and cultural significance."
  },
  {
    id: "paratha",
    name: "pratha",
    displayName: "Paratha",
    description: "Flaky, pan-fried flatbread (paratha) served with lentil or meat-based curry. A testament to Kalaw's colonial and Indian railway history, offering one of the best paratha and curry combinations in Myanmar.",
    image: "https://i.ytimg.com/vi/p5DnbzV0gWY/maxresdefault.jpg"
  },
  {
    id: "tofu-nway",
    name: "tofu-nway",
    displayName: "Tofu Nway",
    description: "A warm, creamy yellow tofu porridge made from chickpeas, topped with rice noodles, meat, and chili oil. Made fresh daily in Kalaw, it's a comforting, protein-rich meal perfect for the cool climate.",
    image: "https://i.ytimg.com/vi/EP0yTE91r0A/maxresdefault.jpg"
  },
  {
    id: "nga-pi-yay",
    name: "nga-pi-yay",
    displayName: "Nga Pi Yay",
    description: "Nga Pi Yay is a traditional Burmese condiment made from fermented fish, often used to add a rich, salty umami flavor to soups, curries, and salads.",
    image: "https://i.ytimg.com/vi/Tb9C3ffQovU/maxresdefault.jpg"
  },
  {
    id: "phat-htamin",
    name: "phat-htamin",
    displayName: "Phat Htamin",
    description: "Phat Htamin is a burmese luch packed with lotus leaf which makes the food aromatic in smell and is really assembles the culture of Myanmar.",
    image: "https://i.ytimg.com/vi/9oi3UeNM9ig/maxresdefault.jpg"
  },
  {
    id: "roselle-leaves",
    name: "roselle-leaves",
    displayName: "Roselle leaves",
    description: "Roselle Leavesis a traditional Burmese stir-fry featuring tender roselle leaves sautéed with garlic, onions, and spices, offering a tangy and flavorful vegetable dish.",
    image: "https://i.ytimg.com/vi/gxs1c5YlS2g/maxresdefault.jpg"
  },
  {
    id: "maymyo-coffee",
    name: "maymyo-coffee",
    displayName: "Maymyo Coffee",
    description: "Premium Arabica coffee grown in the cool highlands around Pyin Oo Lwin (formerly Maymyo). Known for its smooth, mild flavor and medium body, this coffee is a signature product of the region's colonial-era coffee plantations.",
    image: "https://www.madeinmyanmar.asia/wp-content/uploads/2018/10/product-logo-2-3.jpg"
  },
  {
    id: "strawberry-products",
    name: "strawberry-products",
    displayName: "Strawberry Products",
    description: "Fresh strawberries and strawberry-based products including jams, preserves, and desserts. Pyin Oo Lwin's cool climate makes it ideal for strawberry cultivation, and the town is famous for its sweet, juicy strawberries.",
    image: "https://www.mtnewstoday.com/en/wp-content/uploads/2024/02/photo_2024-02-09_11-07-04-1.jpg"
  },
  {
    id: "dairy-products",
    name: "dairy-products",
    displayName: "Dairy Products",
    description: "Fresh dairy products including milk, cheese, yogurt, and butter produced in Pyin Oo Lwin's dairy farms. The town's cool climate and lush pastures make it ideal for dairy farming, producing high-quality, fresh dairy products.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6ZWn9PIh3I3wXbDv4NlP_ShJf3tRDlQZm2qZg7nsxxux-glQoSG12pnv-Ku7cM5-T8n6tCkFRcZ9HGa_ahUVmlY2FdYVZRhXD8Mbt-HB2TKZxmsj7e2X_6sbGrKQNcWMNMjTudw/s1600/Server_Holding_Strawberries_and_Milk_Pyin_Oo_Lwin_Myanmar_03_2014.jpg"
  },
  {
    id: "bambooshoot",
    name: "bambooshoot",
    displayName: "Bambooshoot",
    description: "Bamboo shoot is a popular ingredient in Burmese cuisine, often cooked in curries, soups, or stir-fries. Its tender texture and subtle earthy flavor make it a versatile addition to savory dishes, reflecting the simplicity and heartiness of Myanmar’s traditional cooking.",
    image: "https://www.doca.gov.mm/sites/default/files/styles/large/public/field/image/53_1.jpg?itok=qsxJ3ZZ8"
  }
];
const getDishByName = (name) => {
  return dishes.find((dish) => dish.name === name);
};
const AttractionCard = ({
  name,
  townName,
  image,
  description
}) => {
  const getGoogleMapsUrl = (name2) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(name2)}`;
  };
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: getGoogleMapsUrl(name + " " + townName),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "relative flex flex-col overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-md",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-56 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt: name,
              className: "object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1 p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: name }) }),
            /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-600", children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-gray-600 line-clamp-6", children: description }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 transition-transform duration-300 origin-left transform scale-x-0 bg-amber-500 group-hover:scale-x-100" })
        ] })
      ]
    }
  );
};
const RestaurantCard = ({
  name,
  townName,
  image,
  description
}) => {
  const getGoogleMapsUrl = (name2) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(name2)}`;
  };
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: getGoogleMapsUrl(name + " " + townName),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-md",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt: name,
              className: "object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute p-2 rounded-full shadow-sm top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-600", children: /* @__PURE__ */ jsx(Utensils, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute mt-4 text-xs font-medium transition-opacity duration-300 opacity-0 bottom-4 left-4 text-amber-600 group-hover:opacity-100", children: "View on Google Maps →" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 transition-colors group-hover:text-amber-600", children: name }) }),
            /* @__PURE__ */ jsx("span", { className: "transition-opacity duration-300 opacity-0 text-amber-600 group-hover:opacity-100", children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 line-clamp-2", children: description })
        ] })
      ]
    }
  );
};
const DishCard = ({ name, image, description }) => {
  const getWikipediaUrl = (dish) => {
    return `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
      dish
    )}`;
  };
  const formatDishName = (name2) => {
    return name2.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: getWikipediaUrl(name),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "overflow-hidden transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-md",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden h-52", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt: formatDishName(name),
              className: "object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" }),
          /* @__PURE__ */ jsx("div", { className: "absolute p-2 rounded-full shadow-sm top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-600", children: /* @__PURE__ */ jsx(UtensilsCrossed, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 right-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-1 text-xl font-bold text-white", children: formatDishName(name) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-amber-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Learn more on Wikipedia" }),
              /* @__PURE__ */ jsx(ExternalLink, { className: "inline w-3 h-3 ml-1" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 line-clamp-3", children: description }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1 h-px bg-gray-100" }),
            /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-8 h-8 ml-4 transition-colors rounded-full bg-amber-50 text-amber-600 group-hover:bg-amber-100", children: /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" }) })
          ] })
        ] })
      ]
    }
  );
};
const TownDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const town = towns.find((t) => t.id === id);
  if (!town) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-2xl font-bold text-gray-900", children: "Town not found" }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "flex items-center justify-center font-medium text-amber-600 hover:text-amber-700",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            "Go back home"
          ]
        }
      )
    ] }) });
  }
  const handleGoBack = () => {
    navigate(-1);
  };
  const attractions2 = getAttractionsByTownId(town.id);
  const restaurants2 = town.restaurants ? getRestaurantsByTownId(town.id) : [];
  const dishes2 = town.signatureDishes.map((dishName) => getDishByName(dishName)).filter(Boolean);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-[60vh] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: town.image,
          alt: town.name,
          className: "object-cover w-full h-full"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-2 text-4xl font-bold text-white", children: town.name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-white/90", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: town.region })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleGoBack,
            className: "inline-flex items-center px-4 py-2 font-medium transition-all rounded-full bg-white/80 backdrop-blur-sm text-amber-600 hover:text-amber-700 hover:bg-white/90 w-fit",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-5 h-5 mr-2" }),
              "Back to Explore"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-8 bg-white shadow-sm rounded-xl lg:mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
            /* @__PURE__ */ jsx(StarRating, { rating: town.rating }),
            /* @__PURE__ */ jsxs("span", { className: "ml-3 text-lg text-gray-600", children: [
              "(",
              town.rating,
              " rating)"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mb-6 text-lg leading-relaxed text-gray-700", children: town.description }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `https://en.wikipedia.org/wiki/${town.name}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center px-4 py-2 transition-colors rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100",
              children: [
                "Read more on Wikipedia",
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-4 h-4 ml-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      }
                    )
                  }
                )
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "my-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-8 text-3xl font-bold text-gray-900", children: "Popular Attractions" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2", children: attractions2.map((attraction) => /* @__PURE__ */ jsx(
          AttractionCard,
          {
            name: attraction.name,
            description: attraction.description,
            townName: town.name,
            image: attraction.image
          },
          attraction.id
        )) })
      ] }),
      restaurants2.length > 0 && /* @__PURE__ */ jsx("section", { className: "px-4 py-12 my-12 -mx-4 bg-amber-50/50 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-8 text-3xl font-bold text-gray-900", children: "Recommended Restaurants" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8", children: restaurants2.map((restaurant) => /* @__PURE__ */ jsx(
          RestaurantCard,
          {
            name: restaurant.name,
            townName: town.name,
            image: restaurant.image,
            description: restaurant.description
          },
          restaurant.id
        )) })
      ] }) }),
      dishes2.length > 0 && /* @__PURE__ */ jsxs("section", { className: "my-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-8 text-3xl font-bold text-gray-900", children: "Signature Dishes" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", children: dishes2.map((dish) => /* @__PURE__ */ jsx(
          DishCard,
          {
            name: (dish == null ? void 0 : dish.name) || "",
            image: (dish == null ? void 0 : dish.image) || "",
            description: (dish == null ? void 0 : dish.description) || ""
          },
          dish == null ? void 0 : dish.id
        )) })
      ] })
    ] })
  ] });
};
const towns_$id = UNSAFE_withComponentProps(function TownsDetail() {
  return /* @__PURE__ */ jsx(TownDetailPage, {});
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: towns_$id
}, Symbol.toStringTag, { value: "Module" }));
const client = createClient({
  projectId: "995sglk8",
  dataset: "taste-voyage",
  apiVersion: "2024-01-01",
  useCdn: false
});
const AllTownsSanityPage = ({
  loaderData
}) => {
  const convertSanityTownToTown = (sanityTown) => ({
    id: sanityTown.slug.current,
    name: sanityTown.name,
    description: sanityTown.description || "",
    image: sanityTown.imageUrl || "",
    rating: sanityTown.rating || 0,
    region: sanityTown.region || "Myanmar",
    coordinates: sanityTown.coordinates || { lat: 0, lng: 0 },
    attractions: sanityTown.attractions || [],
    restaurants: sanityTown.restaurants || [],
    signatureDishes: sanityTown.signatureDishes || []
  });
  const sanityTownsAsTowns = loaderData.sanityTowns.map(
    convertSanityTownToTown
  );
  const topCities = sanityTownsAsTowns.filter(
    (town) => town.region.toLowerCase().includes("yangon") || town.region.toLowerCase().includes("mandalay") || town.region.toLowerCase().includes("bagan") || town.region.toLowerCase().includes("naypyidaw") || town.name.toLowerCase().includes("yangon") || town.name.toLowerCase().includes("mandalay") || town.name.toLowerCase().includes("bagan") || town.name.toLowerCase().includes("naypyidaw")
  );
  const shanHighlands = sanityTownsAsTowns.filter(
    (town) => town.region.toLowerCase().includes("shan") || town.name.toLowerCase().includes("taunggyi") || town.name.toLowerCase().includes("kalaw") || town.name.toLowerCase().includes("inle")
  );
  const southeastMyanmar = sanityTownsAsTowns.filter(
    (town) => town.region.toLowerCase().includes("mon") || town.region.toLowerCase().includes("kayin") || town.region.toLowerCase().includes("tanintharyi") || town.name.toLowerCase().includes("hpa-an") || town.name.toLowerCase().includes("mawlamyaing") || town.name.toLowerCase().includes("dawei") || town.name.toLowerCase().includes("kawthaung") || town.name.toLowerCase().includes("myeik")
  );
  const beachDestinations = sanityTownsAsTowns.filter(
    (town) => town.name.toLowerCase().includes("ngapali") || town.name.toLowerCase().includes("ngwe-saung") || town.name.toLowerCase().includes("chaung-tha") || town.name.toLowerCase().includes("beach")
  );
  const otherTowns = sanityTownsAsTowns.filter(
    (town) => !topCities.includes(town) && !shanHighlands.includes(town) && !southeastMyanmar.includes(town) && !beachDestinations.includes(town)
  );
  return /* @__PURE__ */ jsx(HeaderOnlyLayout, { children: /* @__PURE__ */ jsxs("div", { className: "container px-4 py-8 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mt-20 mb-10 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-bold text-gray-900", children: "Explore Myanmar's Towns (Sanity CMS)" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-3xl mx-auto text-lg text-gray-600", children: "Discover towns managed through our Sanity CMS, each offering unique cultural experiences, historical landmarks, and culinary delights. From bustling metropolises to serene hill stations, find your next destination here." })
    ] }),
    topCities.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Top Cities in Myanmar" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Discover the vibrant culture and rich heritage of Myanmar's major cities" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: topCities.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] }) }),
    shanHighlands.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-16 bg-green-50", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "The Shan Highlands" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Explore the cool climate and rich culture of Myanmar's highland region" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: shanHighlands.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] }) }),
    southeastMyanmar.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Southeast Myanmar" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Experience the unique culture and natural beauty of Myanmar's southeast" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: southeastMyanmar.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] }) }),
    beachDestinations.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-16 bg-blue-50", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Beach Destinations" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Relax on pristine beaches and enjoy the coastal beauty of Myanmar" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: beachDestinations.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] }) }),
    otherTowns.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-16 bg-purple-50", children: /* @__PURE__ */ jsxs("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Other Towns" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg text-gray-600", children: "Discover more towns from our Sanity CMS" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: otherTowns.map((town) => /* @__PURE__ */ jsx(TownCard, { town }, town.id)) })
    ] }) }),
    sanityTownsAsTowns.length === 0 && /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "No Towns Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "No towns are currently available in our Sanity CMS." })
    ] }) }) })
  ] }) });
};
const TOWNS_QUERY$1 = `*[
  _type == "Town"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, name, slug, description, imageUrl, rating, region, coordinates, attractions, restaurants, signatureDishes}`;
async function loader$1() {
  return {
    sanityTowns: await client.fetch(TOWNS_QUERY$1)
  };
}
const townsSanity = UNSAFE_withComponentProps(function TownsSanity({
  loaderData
}) {
  return /* @__PURE__ */ jsx(AllTownsSanityPage, {
    loaderData
  });
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: townsSanity,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
const AllBeachesPage = () => {
  const popularBeaches = beaches.filter(
    (beach) => ["ngapali", "ngwe-saung", "chaung-tha", "nyaung-oo-phee"].includes(beach.id)
  );
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("div", { className: "py-12 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/",
        className: "inline-flex items-center text-amber-600 hover:text-amber-700",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-5 w-5 mr-2" }),
          "Back to Home"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-8", children: "Popular Beaches" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: popularBeaches.map((beach) => /* @__PURE__ */ jsx(BeachCard, { beach }, beach.id)) })
    ] })
  ] }) }) });
};
const beaches__index = UNSAFE_withComponentProps(function Beaches2() {
  return /* @__PURE__ */ jsx(AllBeachesPage, {});
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: beaches__index
}, Symbol.toStringTag, { value: "Module" }));
const beachAttractions = [
  // Ngapali Beach Attractions
  {
    id: "sunset-point",
    name: "Sunset Point",
    description: "A scenic viewpoint offering breathtaking views of the sun setting over the Bay of Bengal. Perfect for photography and romantic evening walks.",
    image: "https://www.jacadatravel.com/_next/image/?url=https%3A%2F%2Fcdn.jacadatravel.com%2Fwp-content%2Fuploads%2Fbis-images%2F148395%2Flocation__dreamstimemaximum_25631471-1600x900-f50_50.jpg&w=3840&q=100",
    beachId: "ngapali"
  },
  {
    id: "fishing-village",
    name: "Traditional Fishing Village",
    description: "Experience the authentic local life in this traditional fishing village. Watch fishermen bring in their daily catch and learn about their traditional fishing methods.",
    image: "https://safeandhealthytravel.com/wp-content/uploads/2014/01/P1100200-1024x768.jpg",
    beachId: "ngapali"
  },
  {
    id: "pearl-island",
    name: "Pearl Island",
    description: "A small island accessible by boat, known for its pearl cultivation. Visitors can learn about pearl farming and purchase authentic Myanmar pearls.",
    image: "https://www.myanmars.net/images/pearl_island.jpg",
    beachId: "ngapali"
  },
  // Ngwe Saung Beach Attractions
  {
    id: "lovers-island",
    name: "Lovers Island",
    description: "A romantic island connected to the mainland by a walkable sandbar during low tide. Perfect for couples and photography enthusiasts.",
    image: "https://myanmartravel.com/images/2020/07/Lover%E2%80%99s-Island-ngwe-saung-.jpg",
    beachId: "ngwe-saung"
  },
  {
    id: "elephant-point",
    name: "Elephant Point",
    description: "A rocky outcrop offering panoramic views of the coastline. Popular for sunrise viewing and bird watching.",
    image: "https://lh3.googleusercontent.com/proxy/_8PZ0HK85-nVnFT-5lMbKF5KCyDBtNUo2P_th27-TNqflNjy2gLIq8vYzX5uBSz62-FgraiT4DDomOocXUMS5UTTW7KUeqv82pyc3Trd_9_lOveOJV4",
    beachId: "ngwe-saung"
  },
  {
    id: "elephant-point",
    name: "Elephant Point",
    description: "A rocky outcrop offering panoramic views of the coastline. Popular for sunrise viewing and bird watching.",
    image: "https://lh3.googleusercontent.com/proxy/_8PZ0HK85-nVnFT-5lMbKF5KCyDBtNUo2P_th27-TNqflNjy2gLIq8vYzX5uBSz62-FgraiT4DDomOocXUMS5UTTW7KUeqv82pyc3Trd_9_lOveOJV4",
    beachId: "ngwe-saung"
  },
  {
    id: "bird-sanctuary",
    name: "Bird Sanctuary",
    description: "A protected area home to various species of local and migratory birds. Great for nature lovers and bird watchers.",
    image: "https://yangkee.tw/wp-content/uploads/2024/04/ngwesaung-661762669a120.webp",
    beachId: "ngwe-saung"
  },
  // Chaung Tha Beach Attractions
  {
    id: "butterfly-island",
    name: "Butterfly Island",
    description: "A beautiful small island known for its butterfly-shaped rock formations and clear waters perfect for snorkeling.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Gq8zYorH9LvCcQFWpc45vdkqSYhT44QshQ&s",
    beachId: "chaung-tha"
  },
  {
    id: "pagoda-point",
    name: "Pagoda Point",
    description: "A hilltop pagoda offering stunning views of the beach and surrounding area. Especially beautiful during sunset.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRpscUapRLLm1CjqijJBFk_lJjiAdWSAJdA&s",
    beachId: "chaung-tha"
  },
  {
    id: "local-market",
    name: "Chaung Tha Local Market",
    description: "A vibrant local market where you can find fresh seafood, local handicrafts, and experience the local culture.",
    image: "https://c8.alamy.com/comp/A2YJ98/chaungtha-market-chaungtha-burma-myanmar-A2YJ98.jpg",
    beachId: "chaung-tha"
  }
];
const getAttractionsByBeachId = (beachId) => {
  return beachAttractions.filter(
    (attraction) => attraction.beachId === beachId
  );
};
const beachRestaurants = [
  // Ngapali Beach Restaurants
  {
    id: "ngapali-kitchen",
    name: "Ngapali Kitchen",
    description: "A beachfront restaurant serving fresh seafood and traditional Rakhine cuisine. Known for its grilled fish and spectacular sunset views.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/cc/c0/2c/ngapali-kitchen.jpg?w=900&h=500&s=1",
    beachId: "ngapali"
  },
  {
    id: "pleasant-view",
    name: "Pleasant View Restaurant",
    description: "An elegant dining venue offering a mix of European and Asian cuisine. Features a romantic setting with panoramic ocean views.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/11/a0/a2/83/pvi-restaurant-on-sunset.jpg",
    beachId: "ngapali"
  },
  {
    id: "sea-queen",
    name: "Sea Queen Restaurant",
    description: "A local favorite known for its authentic Myanmar seafood dishes and friendly service. Perfect for trying local delicacies.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/bd/19/1b/original-sunset-view.jpg?w=1200&h=900&s=1",
    beachId: "ngapali"
  },
  {
    id: "bay-view-bistro",
    name: "Bay View Bistro",
    description: "A modern bistro offering fusion cuisine that combines local flavors with international techniques. Famous for its innovative seafood dishes and craft cocktails.",
    image: "https://media-cdn.tripadvisor.com/media/photo-m/1280/2a/e5/08/1d/our-sunset-bar.jpg",
    beachId: "ngapali"
  },
  // Ngwe Saung Beach Restaurants
  {
    id: "beach-house",
    name: "Beach House Restaurant",
    description: "A charming restaurant offering fresh seafood and international cuisine. Known for its cozy atmosphere and beachfront dining.",
    image: "https://pix10.agoda.net/hotelImages/111/1119997/1119997_16062915170044237777.jpg?ca=6&ce=1&s=414x232",
    beachId: "ngwe-saung"
  },
  {
    id: "seafood-garden",
    name: "Seafood Garden",
    description: "Set in a beautiful garden setting, this restaurant specializes in local seafood dishes and traditional Myanmar cuisine.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sHzEKXvhAZYy-lIfJvYkeSFpr8LZZtuWtw&s",
    beachId: "ngwe-saung"
  },
  {
    id: "sunset-cafe",
    name: "Sunset Café",
    description: "A casual beachfront café serving light meals, refreshing drinks, and amazing sunset views. Popular for its fresh fruit smoothies.",
    image: "https://wpengine-myanmore.s3.amazonaws.com/uploads/2024/12/462530603_854680743528029_6249668609232124997_n.jpg",
    beachId: "ngwe-saung"
  },
  {
    id: "brizo-bar",
    name: "Brizo Bar",
    description: "Day start from Eskala special Breakfast buffet The rest of the day guests can dine from our a la carte menu, which combines Western, Asian and local options. The fresh seafood - everything from fish to prawns, crab and giant lobster - is a highlight and should be tried at least once during your stay",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/c0/12/fd/brizo-restaurant.jpg?w=1400&h=800&s=1",
    beachId: "ngwe-saung"
  },
  // Chaung Tha Beach Restaurants
  {
    id: "golden-crab",
    name: "Golden Crab Restaurant",
    description: "Famous for its crab dishes and local seafood specialties. Offers a casual dining experience with ocean views.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5urM6Kq-PnoN5mQe06YowJzfTS4bmwNZJog&s",
    beachId: "chaung-tha"
  },
  {
    id: "beach-breeze",
    name: "Beach Breeze Restaurant",
    description: "A family-friendly restaurant serving both local and Western dishes. Known for its relaxed atmosphere and reasonable prices.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a3/ac/ef/img-20170211-wa0004-largejpg.jpg?w=1600&h=900&s=1",
    beachId: "chaung-tha"
  },
  {
    id: "ocean-view",
    name: "Ocean View Restaurant",
    description: "An upscale dining venue offering a mix of Asian and European cuisine. Features a romantic setting perfect for special occasions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzDk1znU_9RF7ysEtmMsKPWR4cecGKDSiaw&s",
    beachId: "chaung-tha"
  },
  {
    id: "palm-grove",
    name: "Palm Grove Restaurant",
    description: "A rustic beachside eatery specializing in traditional Myanmar coastal cuisine. Known for its authentic flavors and peaceful garden setting under palm trees.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a2/bc/88/the-palm-grove-resort.jpg?w=2000&h=-1&s=1",
    beachId: "chaung-tha"
  }
];
const getRestaurantsByBeachId = (beachId) => {
  return beachRestaurants.filter(
    (restaurant) => restaurant.beachId === beachId
  );
};
const BeachDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const beach = beaches.find((b) => b.id === id);
  if (!beach) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-2xl font-bold text-gray-900", children: "Beach not found" }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "flex items-center justify-center font-medium text-amber-600 hover:text-amber-700",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            "Go back home"
          ]
        }
      )
    ] }) });
  }
  const handleGoBack = () => {
    navigate(-1);
  };
  const attractions2 = getAttractionsByBeachId(beach.id);
  const restaurants2 = beach.restaurants ? getRestaurantsByBeachId(beach.id) : [];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative h-[60vh] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: beach.image,
          alt: beach.name,
          className: "object-cover w-full h-full"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-2 text-4xl font-bold text-white", children: beach.name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-white/90", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: beach.region })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleGoBack,
            className: "inline-flex items-center px-4 py-2 font-medium transition-all rounded-full bg-white/80 backdrop-blur-sm text-amber-600 hover:text-amber-700 hover:bg-white/90 w-fit",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "w-5 h-5 mr-2" }),
              "Back to Explore"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-8 bg-white shadow-sm rounded-xl lg:mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
            /* @__PURE__ */ jsx(StarRating, { rating: beach.rating }),
            /* @__PURE__ */ jsxs("span", { className: "ml-3 text-lg text-gray-600", children: [
              "(",
              beach.rating,
              " rating)"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mb-6 text-lg leading-relaxed text-gray-700", children: beach.description }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `https://en.wikipedia.org/wiki/${beach.name}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center px-4 py-2 transition-colors rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100",
              children: [
                "Read more on Wikipedia",
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-4 h-4 ml-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      }
                    )
                  }
                )
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "my-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-8 text-3xl font-bold text-gray-900", children: "Popular Attractions" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2", children: attractions2.map((attraction) => /* @__PURE__ */ jsx(
          AttractionCard,
          {
            name: attraction.name,
            description: attraction.description,
            townName: beach.name,
            image: attraction.image
          },
          attraction.id
        )) })
      ] }),
      restaurants2.length > 0 && /* @__PURE__ */ jsx("section", { className: "px-4 py-12 my-12 -mx-4 bg-amber-50/50 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-8 text-3xl font-bold text-gray-900", children: "Recommended Restaurants" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8", children: restaurants2.map((restaurant) => /* @__PURE__ */ jsx(
          RestaurantCard,
          {
            name: restaurant.name,
            townName: beach.name,
            image: restaurant.image,
            description: restaurant.description
          },
          restaurant.id
        )) })
      ] }) })
    ] })
  ] });
};
const beaches_$id = UNSAFE_withComponentProps(function BeachesDetail() {
  return /* @__PURE__ */ jsx(BeachDetailPage, {});
});
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: beaches_$id
}, Symbol.toStringTag, { value: "Module" }));
const AllFoodsPage = () => {
  const allFoods = useMemo(() => {
    const existingFoodIds = new Set(foods$1.map((food) => food.id));
    const transformedDishes = dishes.filter((dish) => !existingFoodIds.has(dish.id)).map((dish) => ({
      id: dish.id,
      name: dish.displayName,
      description: dish.description,
      image: dish.image,
      rating: 4.5,
      // Default rating
      origin: ["Myanmar"],
      // Default origin
      tasteTags: [],
      // Empty taste tags
      ingredients: [],
      // Empty ingredients
      category: dish.name.toLowerCase().includes("curry") ? "main" : dish.name.toLowerCase().includes("salad") ? "appetizer" : dish.name.toLowerCase().includes("wine") ? "drink" : "main",
      // Basic category logic
      spiceLevel: dish.name.toLowerCase().includes("curry") ? 3 : 2,
      // Basic spice level logic
      isVegetarian: dish.name.toLowerCase().includes("salad") || dish.name.toLowerCase().includes("vegetable"),
      // Basic vegetarian logic
      wikipediaUrl: null
    }));
    return [...foods$1, ...transformedDishes];
  }, []);
  return /* @__PURE__ */ jsx(HeaderOnlyLayout, { children: /* @__PURE__ */ jsxs("div", { className: "container px-4 py-8 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mt-10 mb-20 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-bold text-gray-900", children: "Explore Myanmar's Cuisine" }),
      /* @__PURE__ */ jsx("p", { className: "max-w-3xl mx-auto text-lg text-gray-600", children: "Discover the rich and diverse flavors of Myanmar's traditional dishes. From aromatic curries to fresh salads, explore a culinary journey through the country's most beloved foods." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", children: allFoods.map((food) => /* @__PURE__ */ jsx(FoodCard, { food }, food.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center text-gray-600", children: [
      "Showing all ",
      allFoods.length,
      " dishes"
    ] })
  ] }) });
};
const foods = UNSAFE_withComponentProps(function Foods() {
  return /* @__PURE__ */ jsx(AllFoodsPage, {});
});
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: foods
}, Symbol.toStringTag, { value: "Module" }));
const ContactPage = () => {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50 py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Contact Us" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Get in touch with us for any inquiries about Myanmar's culinary delights and destinations." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-lg p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-6 w-6 text-amber-500 mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Our Location" }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 text-gray-600", children: [
              "123 Yangon Street, Downtown",
              /* @__PURE__ */ jsx("br", {}),
              "Yangon, Myanmar"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-6 w-6 text-amber-500 mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Phone" }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "+95 1 234 5678" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-amber-500 mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Email" }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "info@tastevoyage.com" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 pt-8 border-t border-gray-200", children: /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600", children: "We're available Monday through Friday, 9:00 AM to 6:00 PM (GMT+6:30)" }) })
    ] })
  ] }) });
};
const contact = UNSAFE_withComponentProps(function Contact() {
  return /* @__PURE__ */ jsx(ContactPage, {});
});
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact
}, Symbol.toStringTag, { value: "Module" }));
function SanityPage({
  loaderData
}) {
  const { towns: towns2 } = loaderData;
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container max-w-4xl px-4 py-8 mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-2 text-4xl font-bold text-gray-900", children: "Sanity CMS Towns" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Latest towns from our Sanity CMS" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: towns2.length === 0 ? /* @__PURE__ */ jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-500", children: "No towns found." }) }) : towns2.map((town) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-6 transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-gray-900", children: town.name }),
            town.rating && /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-yellow-500", children: "★" }),
              /* @__PURE__ */ jsx("span", { className: "ml-1 text-sm text-gray-600", children: town.rating.toFixed(1) })
            ] })
          ] }),
          town.description && /* @__PURE__ */ jsx("p", { className: "mb-3 text-gray-600", children: town.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-3", children: [
            town.region && /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full", children: town.region }),
            /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full", children: town.slug.current })
          ] }),
          town.imageUrl && /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: town.imageUrl,
              alt: town.name,
              className: "object-cover w-full h-48 rounded-lg"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 text-sm md:grid-cols-3", children: [
            town.attractions && town.attractions.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "mb-1 font-semibold text-gray-800", children: "Attractions" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-gray-600", children: [
                town.attractions.slice(0, 3).map((attraction, index) => /* @__PURE__ */ jsxs("li", { children: [
                  "• ",
                  attraction
                ] }, index)),
                town.attractions.length > 3 && /* @__PURE__ */ jsxs("li", { className: "text-gray-500", children: [
                  "+",
                  town.attractions.length - 3,
                  " more"
                ] })
              ] })
            ] }),
            town.restaurants && town.restaurants.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "mb-1 font-semibold text-gray-800", children: "Restaurants" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-gray-600", children: [
                town.restaurants.slice(0, 3).map((restaurant, index) => /* @__PURE__ */ jsxs("li", { children: [
                  "• ",
                  restaurant
                ] }, index)),
                town.restaurants.length > 3 && /* @__PURE__ */ jsxs("li", { className: "text-gray-500", children: [
                  "+",
                  town.restaurants.length - 3,
                  " more"
                ] })
              ] })
            ] }),
            town.signatureDishes && town.signatureDishes.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "mb-1 font-semibold text-gray-800", children: "Signature Dishes" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-gray-600", children: [
                town.signatureDishes.slice(0, 3).map((dish, index) => /* @__PURE__ */ jsxs("li", { children: [
                  "• ",
                  dish
                ] }, index)),
                town.signatureDishes.length > 3 && /* @__PURE__ */ jsxs("li", { className: "text-gray-500", children: [
                  "+",
                  town.signatureDishes.length - 3,
                  " more"
                ] })
              ] })
            ] })
          ] })
        ]
      },
      town._id
    )) })
  ] }) });
}
const TOWNS_QUERY = `*[
  _type == "Town"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, name, slug, description, imageUrl, rating, region, coordinates, attractions, restaurants, signatureDishes}`;
async function loader() {
  return {
    towns: await client.fetch(TOWNS_QUERY)
  };
}
const sanity = UNSAFE_withComponentProps(function Sanity({
  loaderData
}) {
  return /* @__PURE__ */ jsx(SanityPage, {
    loaderData
  });
});
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sanity,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BXL70K6x.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-VEu87NQP.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js"], "css": ["/assets/root-u_UwMf8E.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/_index-CBCnhEa9.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/Layout-BbLTx4uF.js", "/assets/Header-XvGzTZe9.js", "/assets/StarRating-6WyaSG9N.js", "/assets/map-pin-02LOxmSd.js", "/assets/FoodCard-C-bWe4_H.js", "/assets/Beaches-K6asU0J4.js", "/assets/attractions-CONOYAjf.js", "/assets/TownCard-3jDkRNNw.js", "/assets/phone-DPgxErNY.js", "/assets/beaches-BIBgfdYD.js", "/assets/external-link-BBJ-j-I-.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/towns._index": { "id": "routes/towns._index", "parentId": "root", "path": "towns", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/towns._index-7WZj32m8.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/HeaderOnlyLayout-tM95PujP.js", "/assets/TownCard-3jDkRNNw.js", "/assets/Beaches-K6asU0J4.js", "/assets/attractions-CONOYAjf.js", "/assets/Header-XvGzTZe9.js", "/assets/map-pin-02LOxmSd.js", "/assets/StarRating-6WyaSG9N.js", "/assets/beaches-BIBgfdYD.js", "/assets/external-link-BBJ-j-I-.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/towns.top-cities": { "id": "routes/towns.top-cities", "parentId": "root", "path": "towns/top-cities", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/towns.top-cities-D6CuCGMa.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/attractions-CONOYAjf.js", "/assets/TownCard-3jDkRNNw.js", "/assets/HeaderOnlyLayout-tM95PujP.js", "/assets/arrow-left-BAyEw0sM.js", "/assets/StarRating-6WyaSG9N.js", "/assets/map-pin-02LOxmSd.js", "/assets/external-link-BBJ-j-I-.js", "/assets/Header-XvGzTZe9.js", "/assets/beaches-BIBgfdYD.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/towns.shan-highlands": { "id": "routes/towns.shan-highlands", "parentId": "root", "path": "towns/shan-highlands", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/towns.shan-highlands-CXHFhlmb.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/attractions-CONOYAjf.js", "/assets/TownCard-3jDkRNNw.js", "/assets/HeaderOnlyLayout-tM95PujP.js", "/assets/arrow-left-BAyEw0sM.js", "/assets/StarRating-6WyaSG9N.js", "/assets/map-pin-02LOxmSd.js", "/assets/external-link-BBJ-j-I-.js", "/assets/Header-XvGzTZe9.js", "/assets/beaches-BIBgfdYD.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/towns.southeast": { "id": "routes/towns.southeast", "parentId": "root", "path": "towns/southeast", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/towns.southeast-BzQPxwL8.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/attractions-CONOYAjf.js", "/assets/TownCard-3jDkRNNw.js", "/assets/HeaderOnlyLayout-tM95PujP.js", "/assets/arrow-left-BAyEw0sM.js", "/assets/StarRating-6WyaSG9N.js", "/assets/map-pin-02LOxmSd.js", "/assets/external-link-BBJ-j-I-.js", "/assets/Header-XvGzTZe9.js", "/assets/beaches-BIBgfdYD.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/towns.$id": { "id": "routes/towns.$id", "parentId": "root", "path": "towns/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/towns._id-oM9Qglme.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/attractions-CONOYAjf.js", "/assets/dishes-DVYzN-ut.js", "/assets/StarRating-6WyaSG9N.js", "/assets/RestaurantCard-BWmi4hrH.js", "/assets/map-pin-02LOxmSd.js", "/assets/external-link-BBJ-j-I-.js", "/assets/arrow-left-BAyEw0sM.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/towns-sanity": { "id": "routes/towns-sanity", "parentId": "root", "path": "towns-sanity", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/towns-sanity-DE2RYyrL.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/HeaderOnlyLayout-tM95PujP.js", "/assets/TownCard-3jDkRNNw.js", "/assets/Header-XvGzTZe9.js", "/assets/map-pin-02LOxmSd.js", "/assets/StarRating-6WyaSG9N.js", "/assets/attractions-CONOYAjf.js", "/assets/beaches-BIBgfdYD.js", "/assets/external-link-BBJ-j-I-.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/beaches._index": { "id": "routes/beaches._index", "parentId": "root", "path": "beaches", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/beaches._index-C0HbETKi.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/beaches-BIBgfdYD.js", "/assets/Layout-BbLTx4uF.js", "/assets/Beaches-K6asU0J4.js", "/assets/arrow-left-BAyEw0sM.js", "/assets/Header-XvGzTZe9.js", "/assets/map-pin-02LOxmSd.js", "/assets/StarRating-6WyaSG9N.js", "/assets/attractions-CONOYAjf.js", "/assets/phone-DPgxErNY.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/beaches.$id": { "id": "routes/beaches.$id", "parentId": "root", "path": "beaches/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/beaches._id-Ck9TEyLz.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/beaches-BIBgfdYD.js", "/assets/StarRating-6WyaSG9N.js", "/assets/RestaurantCard-BWmi4hrH.js", "/assets/arrow-left-BAyEw0sM.js", "/assets/map-pin-02LOxmSd.js", "/assets/external-link-BBJ-j-I-.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/foods": { "id": "routes/foods", "parentId": "root", "path": "foods", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/foods-BDZ7Gktc.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/HeaderOnlyLayout-tM95PujP.js", "/assets/FoodCard-C-bWe4_H.js", "/assets/Header-XvGzTZe9.js", "/assets/dishes-DVYzN-ut.js", "/assets/StarRating-6WyaSG9N.js", "/assets/map-pin-02LOxmSd.js", "/assets/external-link-BBJ-j-I-.js", "/assets/attractions-CONOYAjf.js", "/assets/beaches-BIBgfdYD.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/contact-CGvO719L.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js", "/assets/map-pin-02LOxmSd.js", "/assets/phone-DPgxErNY.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/sanity": { "id": "routes/sanity", "parentId": "root", "path": "sanity", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/sanity-CoZ0Thj_.js", "imports": ["/assets/chunk-B7RQU5TL-B5HybwCP.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-6cb2e0c4.js", "version": "6cb2e0c4", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/towns._index": {
    id: "routes/towns._index",
    parentId: "root",
    path: "towns",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/towns.top-cities": {
    id: "routes/towns.top-cities",
    parentId: "root",
    path: "towns/top-cities",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/towns.shan-highlands": {
    id: "routes/towns.shan-highlands",
    parentId: "root",
    path: "towns/shan-highlands",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/towns.southeast": {
    id: "routes/towns.southeast",
    parentId: "root",
    path: "towns/southeast",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/towns.$id": {
    id: "routes/towns.$id",
    parentId: "root",
    path: "towns/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/towns-sanity": {
    id: "routes/towns-sanity",
    parentId: "root",
    path: "towns-sanity",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/beaches._index": {
    id: "routes/beaches._index",
    parentId: "root",
    path: "beaches",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/beaches.$id": {
    id: "routes/beaches.$id",
    parentId: "root",
    path: "beaches/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/foods": {
    id: "routes/foods",
    parentId: "root",
    path: "foods",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/sanity": {
    id: "routes/sanity",
    parentId: "root",
    path: "sanity",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
