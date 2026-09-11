export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  badge?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "burgery",
    title: "Kurczak burgery",
    subtitle: "Chrupiąca panierka, soczysty środek",
    items: [
      { name: "Kurczak-Burger Classic", desc: "Bułka, polędwiczka, autorski sos", price: "14,99" },
      {
        name: "Kurczak-Burger Vegas",
        desc: "Bułka, polędwiczka, cheddar, sałata lodowa, świeży ogórek, rukola, autorski sos",
        price: "19,99",
      },
      {
        name: "Royal Vegas",
        desc: "Sałata lodowa, rukola, chrupiące polędwiczki, żurawina, ser camembert, ogórek burgerowy, autorski sos",
        price: "29,99",
        badge: "Bestseller",
      },
      {
        name: "Spicy Vegas",
        desc: "Sałata lodowa, rukola, podwójny cheddar, cebula czerwona, papryczki jalapeño, chrupiące polędwiczki, pomidor, autorski sos, sriracha mayo",
        price: "29,99",
        badge: "Ostry",
      },
    ],
  },
  {
    id: "hot-dogi",
    title: "Hot-dog amerykański",
    subtitle: "Bułka, parówka, kabanos, sos",
    items: [
      { name: "Hot-Dog Classic", desc: "Bułka, parówka, kabanos, sos", price: "8,00" },
      { name: "Hot-Dog Crunchy", desc: "Ogórek konserwowy, prażona cebulka, sos", price: "10,00" },
      {
        name: "Hot-Dog Deluxe",
        desc: "Cebula czerwona, pomidor, sałata lodowa, czerwona kapusta, szczypiorek, sos",
        price: "12,00",
      },
      { name: "Hot-Dog Smoky", desc: "Bekon, szynka, salami, prażona cebula, sos", price: "14,00" },
      { name: "Hot-Dog Cheesy", desc: "Ser cheddar, ser mozzarella, sos", price: "12,00" },
      { name: "Hot-Dog Royal", desc: "Ser camembert, żurawina, rukola, sos", price: "14,00" },
      { name: "Hot-Dog Italiano", desc: "Jalapeño, salami, mozzarella, bazylia, sos", price: "13,00" },
    ],
  },
  {
    id: "zapiekanki",
    title: "Zapiekanka na świeżej bagietce",
    items: [
      {
        name: "Zapiekanka Klasyczna",
        desc: "Masło lub masło czosnkowe, pasta pomidorowa, farsz pieczarkowy, sos do wyboru",
        price: "15,00",
      },
      { name: "Zapiekanka Salami", desc: "Jak klasyczna + salami", price: "17,00" },
      { name: "Zapiekanka Serowa", desc: "Cheddar, mozzarella, rukola", price: "18,00" },
      { name: "Zapiekanka Rzeźnicka", desc: "Bekon, szynka, chorizo, salami", price: "20,00" },
      { name: "Zapiekanka z Warzywami", desc: "Cebula, pomidor, szczypiorek", price: "17,00" },
      { name: "Prażona cebulka", desc: "Dodatek", price: "2,00" },
    ],
  },
  {
    id: "kurczak",
    title: "Panierowany kurczak",
    subtitle: "Extra chrupiący",
    items: [
      { name: "5 skrzydełek + 2 stripsy + sos", price: "24,99", badge: "Nowość" },
      { name: "Box Skrzydełka 10 szt.", desc: "1x frytki, sos do wyboru", price: "41,99" },
      { name: "Box Skrzydełka 15 szt.", desc: "2x frytki, 2 sosy do wyboru", price: "59,99" },
      { name: "Box Stripsy 5 szt.", desc: "1x frytki, sos do wyboru", price: "41,99" },
      { name: "Box Stripsy 8 szt.", desc: "2x frytki, 2 sosy do wyboru", price: "59,99" },
      {
        name: "Box Big Deal",
        desc: "10 skrzydełek, 3 polędwiczki, 2x frytki, 2 sosy do wyboru",
        price: "69,99",
      },
      {
        name: "Box Jackpot",
        desc: "15 skrzydełek, 5 polędwiczek, 4x frytki, 4x krążki cebulowe, 2 sosy do wyboru",
        price: "99,99",
        badge: "Na imprezę",
      },
      { name: "Box Kids Burger", desc: "Kurczak-burger, 1x frytki, sok do wyboru", price: "23,99" },
      {
        name: "Box Kids Strips",
        desc: "2 polędwiczki, 3 paluszki z mozzarella, 1x frytki, sok do wyboru",
        price: "22,99",
      },
      {
        name: "Box Kids Skrzydełka",
        desc: "4 skrzydełka, 3 paluszki z mozzarella, 1x frytki, sok do wyboru",
        price: "22,99",
      },
    ],
  },
  {
    id: "dodatki",
    title: "Dodatki",
    subtitle: "Uzupełnij smak",
    items: [
      { name: "Frytki małe", price: "5,99" },
      { name: "Frytki duże", price: "7,99" },
      { name: "5x krążki cebulowe", price: "6,99" },
      { name: "10x krążki cebulowe", price: "12,99" },
      { name: "5x paluszki z mozzarella", price: "10,99" },
      { name: "10x paluszki z mozzarella", price: "16,99" },
      { name: "Napój 200ml", desc: "Cola, Cola Zero, Pepsi, Pepsi Zero, Fanta, Sprite", price: "5,99" },
      { name: "Sok owocowy 200ml", price: "5,49" },
      {
        name: "Kawa mrożona 400ml",
        desc: "Gałka lodów, bita śmietana, polewa do wyboru",
        price: "14,99",
      },
      { name: "Posypka do frytek", price: "1,99" },
      { name: "Dodatkowy sos 80ml", price: "3,99" },
    ],
  },
];

export const sosy =
  "Ketchup, czosnkowy, gold, musztarda, musztarda dijon, musztardowo-miodowy, amerykański, BBQ, bekonowy, serowy, arabski łagodny lub pikantny, meksykański, tysiąca wysp, słodkie chilli, majonez";

export const posypki = "Papryka, ser, bekon, pizza, mexicana, cebula, chilli, kurczak, szynka";

export const polewy = "Czekoladowa, truskawkowa, malinowa, toffi, biała czekolada";

export const hours = [
  { day: "Poniedziałek", hours: "Zamknięte" },
  { day: "Wtorek", hours: "13:00–20:00" },
  { day: "Środa", hours: "13:00–20:00" },
  { day: "Czwartek", hours: "13:00–20:00" },
  { day: "Piątek", hours: "13:00–21:00" },
  { day: "Sobota", hours: "13:00–21:00" },
  { day: "Niedziela", hours: "13:00–20:00" },
];

export const contact = {
  name: "Bar Vegas",
  phone: "886 561 189",
  phoneHref: "tel:886561189",
  facebook: "https://www.facebook.com/profile.php?id=61570009561248",
  city: "Skoki",
};
