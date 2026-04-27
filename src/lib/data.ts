export const NAV_LINKS = [
  { id: "about", label: "Бидний тухай" },
  { id: "products", label: "Бүтээгдэхүүн" },
  { id: "partners", label: "Хамтрагчид" },
  { id: "contact", label: "Холбоо барих" },
];

export const HERO_STATS = [
  { num: "12+", label: "Жилийн туршлага" },
  { num: "40+", label: "Эмнэлэг, түнш" },
  { num: "ISO 13485", label: "Чанарын баталгаа" },
];

export const ABOUT_FEATURES = [
  {
    num: "01",
    title: "Албан ёсны төлөөлөл",
    desc: "Дэлхийн тэргүүлэгч брэндүүдтэй албан ёсны гэрээтэй, шууд гарал үүсэлтэй ханган нийлүүлэлт.",
  },
  {
    num: "02",
    title: "Бүрэн логистик шийдэл",
    desc: "Үйлдвэрээс эмнэлгийн өрөө хүртэлх ачаа тээвэр, гааль, суурилуулалтыг бид хариуцна.",
  },
  {
    num: "03",
    title: "Засвар, сургалт, дэмжлэг",
    desc: "Инженерүүд эмнэлэгт очиж сургалт явуулж, гэрээт хугацаандаа баталгаат үйлчилгээ үзүүлнэ.",
  },
];

export const STATS = [
  { num: "12+", label: "Жилийн\nүйл ажиллагаа" },
  { num: "40+", label: "Хамтрагч\nэмнэлэг" },
  { num: "180+", label: "Нийлүүлсэн\nтөхөөрөмж" },
  { num: "15", label: "Гарал үүслийн\nулсууд" },
];

export const PRODUCTS = [
  {
    cat: "Дүрс оношилгоо",
    title: "MRI ба CT системүүд",
    origin: "Герман · Япон",
    desc: "Өндөр нягтаршилтай 1.5T–3T соронзон резонансын болон олон зүсмэлт CT төхөөрөмжүүд.",
  },
  {
    cat: "Хагалгааны өрөө",
    title: "Хагалгааны ширээ ба гэрэлтүүлэг",
    origin: "Герман · Швейцарь",
    desc: "Олон үйлдэлт цахилгаан-гидравлик ширээ, LED шинэлэг гэрэлтүүлгийн систем.",
  },
  {
    cat: "Эрчимт эмчилгээ",
    title: "ICU мониторинг ба амьсгалын аппарат",
    origin: "АНУ · Герман",
    desc: "Олон үзүүлэлтийн мониторинг, насанд хүрэгчид болон нярайн амьсгалын аппаратууд.",
  },
  {
    cat: "Лаборатори",
    title: "Биохими ба гематологийн анализатор",
    origin: "Япон · АНУ",
    desc: "Бүрэн автомат биохимийн систем, иммуноанализатор, гематологийн оношлуурууд.",
  },
  {
    cat: "Зүрх судас",
    title: "Эхо ба ECG төхөөрөмж",
    origin: "Япон · Солонгос",
    desc: "Өндөр нягтаршилтай ультрасоник эхо системүүд, 12 холбогчтой ECG бүртгэгчид.",
  },
  {
    cat: "Эндоскопи",
    title: "Видео эндоскопийн систем",
    origin: "Япон · Герман",
    desc: "4K видео процессор, гастро- болон бронхоскопын иж бүрэн төхөөрөмжүүд.",
  },
];

export const PARTNERS = [
  { name: "SIEMENS", sub: "Healthineers · DE" },
  { name: "GE", sub: "HealthCare · USA" },
  { name: "PHILIPS", sub: "Healthcare · NL" },
  { name: "MINDRAY", sub: "Medical · CN" },
  { name: "DRÄGER", sub: "Medical · DE" },
  { name: "MAQUET", sub: "Getinge Group · SE" },
  { name: "OLYMPUS", sub: "Medical · JP" },
  { name: "CANON", sub: "Medical Systems · JP" },
  { name: "FUJIFILM", sub: "Healthcare · JP" },
  { name: "STORZ", sub: "Karl Storz · DE" },
  { name: "MASIMO", sub: "Medical · USA" },
  { name: "B|BRAUN", sub: "Melsungen · DE" },
];

export const INTERESTS = [
  "Дүрс оношилгоо (MRI / CT)",
  "Хагалгааны өрөөний тоног",
  "ICU ба амьсгалын аппарат",
  "Лабораторийн анализатор",
  "Зүрх судасны төхөөрөмж",
  "Эндоскопийн систем",
  "Засвар, баталгаат үйлчилгээ",
  "Бусад / зөвлөгөө",
];

export const SLOTS = ["10:00", "11:00", "13:30", "14:30", "16:00"];

export const CONTACT_INFO = [
  { lbl: "Утас", val: "+976 7700 0000", sub: "Даваа–Баасан · 09:00–18:00" },
  { lbl: "И-мэйл", val: "info@mmd.mn", sub: "Хариу 24 цагийн дотор" },
  { lbl: "Хаяг", val: "Улаанбаатар хот", sub: "Сүхбаатар дүүрэг, 1-р хороо" },
];

// Generate next 5 weekdays dynamically
export function getNextWeekdays(count = 5) {
  const days: { d: string; num: string; mon: string; date: Date }[] = [];
  const dayNames = ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"];
  const monthNames = [
    "1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар",
    "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар",
  ];
  const today = new Date();
  let current = new Date(today);
  current.setDate(current.getDate() + 1);

  while (days.length < count) {
    const dow = current.getDay();
    if (dow !== 0 && dow !== 6) {
      days.push({
        d: dayNames[dow],
        num: current.getDate().toString().padStart(2, "0"),
        mon: monthNames[current.getMonth()],
        date: new Date(current),
      });
    }
    current.setDate(current.getDate() + 1);
  }
  return days;
}
