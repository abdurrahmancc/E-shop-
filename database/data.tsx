import { CategoryItemsTypes, ProductModel, BlogsModel, TrendingCategoryType } from "../types/types";
import blog1 from "../assets/blogs/blog-1.png";
import blog2 from "../assets/blogs/blog-2.png";
import blog3 from "../assets/blogs/blog-3.png";
import blog4 from "../assets/blogs/blog-4.png";
import blog5 from "../assets/blogs/blog-5.png";
import blog6 from "../assets/blogs/blog-6.png";
import category1 from "../assets/categories-img/computer.png";
import category2 from "../assets/categories-img/headphone.png";
import category3 from "../assets/categories-img/laptop.png";
import category4 from "../assets/categories-img/phone.png";
import category5 from "../assets/categories-img/tablets.png";
import category6 from "../assets/categories-img/watch.png";
import category7 from "../assets/categories-img/computer.png";
import category8 from "../assets/categories-img/laptop.png";
import product1 from "../assets/product-Image/product-1.png";
import product2 from "../assets/product-Image/product-2.png";
import product3 from "../assets/product-Image/product-3.png";
import product4 from "../assets/product-Image/product-4.png";
import product5 from "../assets/product-Image/product-5.png";
import product6 from "../assets/product-Image/product-6.png";
import product7 from "../assets/product-Image/product-7.png";
import product8 from "../assets/product-Image/product-8.png";
import product9 from "../assets/product-Image/product-9.png";
import product10 from "../assets/product-Image/product-10.png";
import product11 from "../assets/product-Image/product-11.png";
import product12 from "../assets/product-Image/product-12.png";
import product13 from "../assets/product-Image/product-13.png";
import product14 from "../assets/product-Image/product-14.png";
import product15 from "../assets/product-Image/product-15.png";
import product16 from "../assets/product-Image/product-16.png";
import product17 from "../assets/product-Image/product-17.png";
import product18 from "../assets/product-Image/product-18.png";
import product19 from "../assets/product-Image/product-19.png";
import product20 from "../assets/product-Image/product-20.png";
import product21 from "../assets/product-Image/product-21.png";
import product22 from "../assets/product-Image/product-22.png";
import product23 from "../assets/product-Image/product-23.png";
import product24 from "../assets/product-Image/product-24.png";
import product25 from "../assets/product-Image/product-25.png";
import product26 from "../assets/product-Image/product-26.png";
import product27 from "../assets/product-Image/product-27.png";
import product28 from "../assets/product-Image/product-28.png";
import product29 from "../assets/product-Image/product-29.png";
import product30 from "../assets/product-Image/product-30.png";
import product31 from "../assets/product-Image/product-31.png";

export const categories: CategoryItemsTypes[] = [
  {
    _id: "1",
    name: "Monitor",
    features: ["Samsung Monitors", "Asus Monitors", "LG Monitors", "Gigabyte Monitors"],
    img: "https://i.ibb.co/446nGRg/product-6.png",
  },
  {
    _id: "2",
    name: "Laptop",
    features: ["All Laptop", "Laptop accessories", "Apple Macbook", "Gaming Laptop"],
    img: "https://i.ibb.co/v3JspkB/product-7.png",
  },
  {
    _id: "3",
    name: "Gaming",
    features: ["Gaming chair", "Gaming mouse", "Gaming Keyboard ", "Gaming Headphone"],
    img: "https://i.ibb.co/St7pJJC/product-8.png",
  },
  {
    _id: "4",
    name: "Desktop",
    features: ["Brand pC", "Desktop Parts", "Apple imac", "Apple mac studio"],
    img: "https://i.ibb.co/FgqfBWj/product-11.png",
  },
  {
    _id: "5",
    name: "Tablet",
    features: ["Apple ipad", "Amazon", "Samsung", "Realme"],
    img: "https://i.ibb.co/WWMJ90v/product-10.png",
  },
  {
    _id: "6",
    name: "Accessories",
    features: ["Smart Watch", "Ear Phone", "Bluetooth Speakers", "Drones"],
    img: "https://i.ibb.co/CQgHD0f/product-9.png",
  },
];

export const categories2: CategoryItemsTypes[] = [
  {
    _id: "1",
    name: "Desktop",
    features: ["Brand pC", "Desktop Parts", "Apple imac", "Apple mac studio"],
    img: "https://i.ibb.co/wSSt8n0/computer.png",
  },
  {
    _id: "2",
    name: "Laptop",
    features: ["All Laptop", "Laptop accessories", "Apple Macbook", "Gaming Laptop"],
    img: "https://i.ibb.co/gV9sS2R/laptop.png",
  },
  {
    _id: "3",
    name: "Gadget",
    features: ["Smart Watch", "Ear Phone", "Power Bank", "Drones"],
    img: "https://i.ibb.co/xj684k9/watch.png",
  },
];

export const trendingCategoriesData: TrendingCategoryType[] = [
  { _id: "1", img: category1, name: "computer" },
  { _id: "2", img: category2, name: "headphone" },
  { _id: "3", img: category3, name: "laptop" },
  { _id: "4", img: category4, name: "phone" },
  { _id: "5", img: category5, name: "tablets" },
  { _id: "6", img: category6, name: "watch" },
  { _id: "7", img: category7, name: "computer" },
  { _id: "8", img: category8, name: "laptop" },
];

export const productsData: ProductModel[] = [
  {
    _id: "1",
    name: "Apple Watch Series 6 A2292 (M00D3)",
    fullName: "Apple Watch Series 6 A2292 (M00E3LL/A) 44mm Sport Band (GOLD)",
    price: 20,
    regularPrice: 32,
    quantity: 324,
    reviewQuantity: 11,
    category: "smartWatch",
    subCategory: "smartWatch",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 11,
    img: [product1, product2, product3, product4],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYLfs4/A",
    SKU: "BE34fFDJ",
    shortFeatures: [
      "Apple Watch Series 6 A2292",
      "LTPO OLED Always-On Retina Display ",
      "Water-Resistant up to 164' ",
      "Generate Your Own ECG",
      "Fall Detection + SOS Emergency ",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "2",
    name: "Sony SRS-XG500 X-Series Wireless Speaker",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 25,
    regularPrice: 30,
    quantity: 344,
    reviewQuantity: 15,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 16,
    img: [product5, product6, product7, product8],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      "Up to 30 Hours of Playback",
      "IP66 Water and Dust Resistance",
      "Sony X-Balanced Speaker Design",
      "Two Passive Radiators",
      "Integrated LED Lighting Effects",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "3",
    name: "Apple MacBook Air 13.3-Inch 10th Gen",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 33,
    regularPrice: 35,
    quantity: 3424,
    reviewQuantity: 16,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 12,
    img: [product9, product10, product11, product12],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "4",
    name: "Hoco BS45 Portable True Wireless Speaker",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 36,
    regularPrice: 37,
    quantity: 3424,
    reviewQuantity: 13,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 17,
    img: [product13, product14, product15, product16],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "5",
    name: "Apex Android phone (2016) 5G",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 12,
    regularPrice: 15,
    quantity: 3424,
    reviewQuantity: 17,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 15,
    img: [product17, product18, product19, product20],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "6",
    name: "Huawei Watch GT 2 Smart Watch ",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 67,
    regularPrice: 68,
    quantity: 3424,
    reviewQuantity: 15,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 18,
    img: [product21, product22, product23, product24],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "7",
    name: "Apple iPhone 13 pro max with 8 GB",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 34,
    regularPrice: 35,
    quantity: 3424,
    reviewQuantity: 18,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 22,
    img: [product25, product26, product27, product28],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "8",
    name: "Corsair Force 480GB NVMe PCIe Gen3 M.2 SSD",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 36,
    regularPrice: 39,
    quantity: 3424,
    reviewQuantity: 35,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 17,
    img: [product29, product30, product31, product1],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "9",
    name: "Apple iPhone SE (2022) with 4 GB",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 57,
    regularPrice: 67,
    quantity: 3424,
    reviewQuantity: 16,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 11,
    img: [product2, product3, product4, product5],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "10",
    name: "Lenovo IdeaPad 3 Ryzen 7 14 FHD Laptop",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 46,
    regularPrice: 67,
    quantity: 3424,
    reviewQuantity: 11,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 12,
    img: [product6, product7, product8, product9],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "11",
    name: "DigitalX X-F360BT 2.1 Sound Speaker",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 20,
    regularPrice: 33,
    quantity: 3424,
    reviewQuantity: 12,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 12,
    img: [product10, product11, product12, product13],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "12",
    name: "Apple iPhone 8 pro max with 4 GB",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 10,
    regularPrice: 36,
    quantity: 3424,
    reviewQuantity: 24,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 10,
    img: [product14, product15, product16, product17],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "13",
    name: "SanDisk SSD Plus 240GB 2.5'' SATA III SSD",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 40,
    regularPrice: 45,
    quantity: 3424,
    reviewQuantity: 14,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 13,
    img: [product18, product19, product20, product21],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "14",
    name: "Beats EP On-Ear Wired Headphone",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 50,
    regularPrice: 75,
    quantity: 3424,
    reviewQuantity: 12,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 12,
    img: [product22, product23, product24, product25],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "15",
    name: "Nikon D500 DSLR Camera With lens",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 20,
    regularPrice: 25,
    quantity: 3424,
    reviewQuantity: 14,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 16,
    img: [product26, product27, product28, product29],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "16",
    name: "Samsung 32' Smart HD LED Television",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 10,
    regularPrice: 15,
    quantity: 3424,
    reviewQuantity: 16,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 13,
    img: [product30, product31, product1, product2],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "17",
    name: "Apple MacBook Air 13.3-Inch 10th Gen",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 40,
    regularPrice: 45,
    quantity: 3424,
    reviewQuantity: 16,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 16,
    img: [product3, product4, product5, product6],
    description:
      "Apple iMac (MHK33ZP/A) comes with Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz), 8GB of 2666MHz DDR4 onboard memory, 256GB SSD with Radeon Pro 560X with 4GB of VRAM Graphics. This iMac is built in 21.5 Inch (4096 x 2304) 4K Retina Display, 500 nits brightness and Wide color (P3). It has Stereo speakers, Microphone, 3.5 mm headphone jack, Bluetooth 4.2 wireless technology, Display port: Two Thunderbolt 3 (USB-C), Two Thunderbolt 3 (USB-C) ports with support for DisplayPort, Thunderbolt (up to 40 Gbps), USB 3.1 Gen 2 (up to 10 Gbps), Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately). 10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector). Kensington lock slot. This latest iMac supports macOS Sierra operating system.",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "18",
    name: "Samsung EVO 500GB 2.5 Inch SATA",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 13,
    regularPrice: 15,
    quantity: 3424,
    reviewQuantity: 13,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 15,
    img: [product7, product8, product9, product10],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "19",
    name: "Apple iMac 21.5-inch Full HD Display",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 32,
    regularPrice: 35,
    quantity: 3424,
    reviewQuantity: 11,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 11,
    img: [product11, product12, product13, product14],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
  {
    _id: "20",
    name: "Dell Inspiron 3264 Core i3 All In One PC",
    fullName:
      "Apple iMac 21.5-inch 4K Retina Display, Core i5 8th Gen, 8GB RAM, Radeon Pro 560X 4GB Graphics (MHK33ZP/A)",
    price: 30,
    regularPrice: 35,
    quantity: 3424,
    reviewQuantity: 12,
    category: "computer&Laptop",
    subCategory: "computer",
    date: "2022-12-08T13:09:29.764Z",
    status: "In Stock",
    review: 12,
    img: [product15, product15, product17, product18],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quisquam similique itaque iste earum fuga unde, esse impedit quae ea! Officiis velit, provident nihil minus consequatur reprehenderit temporibus nulla dolor, assumenda alias officia quod culpa sed id aspernatur labore expedita ipsam maiores voluptates ullam autem. Possimus, ut expedita, minima, quia sunt obcaecati nobis quibusdam debitis consectetur perferendis repellat voluptatibus magnam iusto reprehenderit! Beatae inventore, officia, nemo omnis voluptate vero et aliquid facere doloribus obcaecati mollitia consequatur neque magni eos nisi a esse ipsam. Libero, atque. Sunt, dicta explicabo, libero laboriosam maxime vel tempore, autem repellendus ut incidunt amet repudiandae molestias!",
    badge: "new",
    model: "MYL324/A",
    SKU: "BE34DFDJ",
    shortFeatures: [
      'Apple iMac 21.5" Radeon Pro 560X',
      "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)",
      "8GB RAM + 256GB SSD",
      "Retina 4K 4096 x 2304 P3 display",
      "Radeon Pro 560X 4GB Graphics",
    ],
    Specification: [
      {
        ["basic Info"]: [
          { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
          { ram: "8GB 2666MHz DDR4 RAM" },
          { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
          { storage: "256GB SSD" },
          {
            monitor: [
              "21.5-inch (diagonal) Retina 4K display",
              "4096-by-2304 resolution with support for one billion colors",
              "500 nits brightness",
              "Wide color (P3)",
            ],
          },
          {
            audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
          },
          {
            ["Network Wireless Connectivity"]: [
              `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
              "LAN:",
              "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
              "Wi-Fi:",
              "802.11ac Wi-Fi wireless networking",
              "IEEE 802.11a/b/g/n compatible",
              "Bluetooth:",
              "Bluetooth 4.2 wireless technology",
              "Connections and Expansion:",
              "SDXC card slot",
              "Four USB-A ports",
              "Two Thunderbolt 3 (USB-C) ports with support for:",
              "DisplayPort",
              "Thunderbolt (up to 40Gb/s)",
              "USB 3.1 Gen 2 (up to 10Gb/s)",
              "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
            ],
          },
          { ["operating System"]: `macOS` },
        ],
      },
      {
        ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
      },
    ],
    updatedAt: "2022-12-08T13:09:29.764Z",
    createdAt: "2022-12-08T13:09:29.764Z",
  },
];

export const blogsData: BlogsModel[] = [
  {
    _id: "1",
    title: "Choosing The Right Projector: 5 Key Points to Consider",
    img: blog1,
    author: "Brown",
    date: "June 14, 2022",
    commentsQuantity: 23,
    category: "development",
    tags: ["development", "Enterprise", "startups"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum vitae debitis, quam, dolore eligendi molestiae amet quasi quas quos vero odio. Ipsam commodi similique natus, corporis est dicta quae in non blanditiis velit consectetur deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    _id: "2",
    title: "Best White Laptops For Students in 2023",
    author: "Smelley",
    date: "June 15, 2022",
    commentsQuantity: 22,
    img: blog2,
    category: "development",
    tags: ["development", "Enterprise", "startups"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum vitae debitis, quam, dolore eligendi molestiae amet quasi quas quos vero odio. Ipsam commodi similique natus, corporis est dicta quae in non blanditiis velit consectetur deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    _id: "3",
    title: "Best Gaming Headphones, You Can Buy in 2023",
    img: blog3,
    author: "Brown",
    date: "June 14, 2022",
    commentsQuantity: 23,
    category: "development",
    tags: ["development", "Enterprise", "startups"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum vitae debitis, quam, dolore eligendi molestiae amet quasi quas quos vero odio. Ipsam commodi similique natus, corporis est dicta quae in non blanditiis velit consectetur deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    _id: "4",
    title: "Convert Your Basic TV into a Smart TV",
    img: blog4,
    author: "Jason",
    date: "June 12, 2022",
    commentsQuantity: 13,
    category: "development",
    tags: ["development", "Enterprise", "startups"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum vitae debitis, quam, dolore eligendi molestiae amet quasi quas quos vero odio. Ipsam commodi similique natus, corporis est dicta quae in non blanditiis velit consectetur deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    _id: "5",
    title: "What is Compliance Testing?",
    img: blog5,
    author: "Brown",
    date: "June 14, 2022",
    commentsQuantity: 23,
    category: "development",
    tags: ["development", "Enterprise", "startups"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum vitae debitis, quam, dolore eligendi molestiae amet quasi quas quos vero odio. Ipsam commodi similique natus, corporis est dicta quae in non blanditiis velit consectetur deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    _id: "6",
    title: "What is Compliance Testing?",
    img: blog6,
    author: "Brown",
    date: "June 14, 2022",
    commentsQuantity: 23,
    category: "development",
    tags: ["development", "Enterprise", "startups"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum vitae debitis, quam, dolore eligendi molestiae amet quasi quas quos vero odio. Ipsam commodi similique natus, corporis est dicta quae in non blanditiis velit consectetur deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];
