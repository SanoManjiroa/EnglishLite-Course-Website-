"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

const languages = [
  { code: "uz", name: "UZ", flag: "🇺🇿" },
  { code: "en", name: "EN", flag: "🇺🇸" },
  { code: "ru", name: "RU", flag: "🇷🇺" },
  { code: "ja", name: "JP", flag: "🇯🇵" },
]

const translations = {
  uz: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    courses: "Kurslar",
    contact: "Aloqa",
    register: "Ro'yxatdan o'tish",
    heroTitle: "Ingliz tilini professional darajada o'rganing",
    heroSubtitle: "Bugun boshlangan bilim – ertaga IELTS, grant va katta imkoniyatlarga eshik ochadi.",
    freeLesson: "Bepul darsga yozilish",
    viewCourses: "Kurslarni ko'rish",
    ourCourses: "Bizning kurslarimiz",
    coursesSubtitle: "Har bir yosh guruhi uchun maxsus ishlab chiqilgan dasturlar",
    learnFromScratch: "Noldan bosqichma-bosqich va amaliy dasturlar bilan o'rganing!",
    adultsCourse: "Kattalar uchun",
    kidsCourse: "Bolalar uchun",
    englishCourse: "ingliz tili",
    adultDescription: "18 yoshdan yuqori o'quvchilar uchun professional ingliz tili kursi",
    kidsDescription: "6-17 yosh oralig'idagi bolalar uchun qiziqarli va interaktiv darslar",
    learnFromZero: "Noldan o'rganasiz",
    realConversation: "Real muloqotga asoslangan darslar",
    ieltsOriented: "IELTS va CEFR imtihonlariga yo'naltirilgan",
    careerGrowth: "Kariyerada o'sish imkoniyati",
    abroadOpportunity: "Chet elda yashash va ishlash uchun qulay",
    adultLocation: "Yuqori Chirchiq tumani, hokimiyat binosi yonida",
    kidsLocation: "Yuqori Chirchiq tumani, hokimiyat binosi",
    frequency: "Haftasiga 3 marta",
    adultGroupSize: "6-8 kishi",
    kidsGroupSize: "maksimal 10 bola",
    adultPrice: "300,000 so'm/oy",
    originalPrice: "200,000 so'm",
    discountedPrice: "150,000 so'm/oy",
    monthlyPayment: "Oylik to'lov",
    monthlyDiscount: "Oylik to'lov (25% chegirma bilan)",
    discount: "25% chegirma",
    kidsAge: "7–11 yoshdan boshlab noldan o'rgatiladi",
    smallSteps: "Har bir dars – kichik qadam, katta kelajak sari!",
    individualAttention: "Har bir bola – e'tibor markazida",
    smallGroup: "Har bir guruh – atigi 10 ta bola",
    limitedSeats: "Joylar soni cheklangan",
    quickLinks: "Tezkor havolalar",
    contactInfo: "Aloqa ma'lumotlari",
    copyright: "Barcha huquqlar himoyalangan.",
    contactSubtitle: "Biz bilan bog'laning va ingliz tili o'rganishni boshlang!",
    phoneNumbers: "Telefon raqamlar",
    address: "Manzil",
    fullAddress: "Toshkent viloyati, Yuqori Chirchiq tumani, Yangibozor, hokimiyat binosi yonida",
    workingHours: "Ish vaqti",
    mondayFriday: "Dushanba - Juma: 9:00 - 20:00",
    saturday: "Shanba: 9:00 - 16:00",
    sunday: "Yakshanba: Dam olish kuni",
    joinTelegramGroups: "Telegram guruhlarga qo'shiling",
    telegramDescription: "O'quvchilar bilan muloqot qiling va yangiliklar oling",
    studentsGroupG01: "O'quvchilar guruhi G01",
    studentsGroupK01: "O'quvchilar guruhi K01",
    joinG01: "G01 guruhiga qo'shilish",
    joinK01: "K01 guruhiga qo'shilish",
    ourLocation: "Bizning joylashuvimiz",
    locationDescription: "Yangibozor, Yuqori Chirchiq tumani",
    openInGoogleMaps: "Google Maps'da ochish",
    contactDescription: "Bizga qo'ng'iroq qiling yoki tashrif buyuring",
    "about-title": "Biz haqimizda",
    "about-subtitle": "EnglishLite - zamonaviy ingliz tili o'qitish markazi",
    "our-mission": "Bizning missiyamiz",
    "mission-text1":
      "EnglishLite o'quv markazi sifatida bizning asosiy maqsadimiz - har bir yoshdagi o'quvchilarga ingliz tilini samarali va qiziqarli tarzda o'rgatishdir.",
    "mission-text2":
      "Biz zamonaviy o'qitish metodlari va texnologiyalaridan foydalanib, o'quvchilarimizga yuqori sifatli ta'lim berishga intilamiz.",
    "experienced-teachers": "Tajribali va malakali o'qituvchilar",
    "interactive-lessons": "Interaktiv darslar va zamonaviy metodlar",
    "small-groups": "Kichik guruhlar (6-8 kishi)",
    "individual-approach": "Individual yondashuv har bir o'quvchiga",
    "our-advantages": "Bizning afzalliklarimiz",
    "modern-methods": "Zamonaviy metodlar",
    "modern-methods-desc": "Eng so'nggi o'qitish metodlari va texnologiyalar",
    "flexible-schedule": "Moslashuvchan jadval",
    "flexible-schedule-desc": "Sizning vaqtingizga mos keladigan dars vaqtlari",
    certificates: "Sertifikatlar",
    "certificates-desc": "Kurs yakunida rasmiy sertifikat berish",
    "affordable-prices": "Qulay narxlar",
    "affordable-prices-desc": "Hamyonbop narxlar va chegirmalar",
  },
  en: {
    home: "Home",
    about: "About Us",
    courses: "Courses",
    contact: "Contact",
    register: "Register",
    heroTitle: "Learn English at a Professional Level",
    heroSubtitle: "Knowledge started today opens doors to IELTS, grants and great opportunities tomorrow.",
    freeLesson: "Register for Free Lesson",
    viewCourses: "View Courses",
    ourCourses: "Our Courses",
    coursesSubtitle: "Specially designed programs for each age group",
    learnFromScratch: "Learn step by step from scratch with practical programs!",
    adultsCourse: "For Adults",
    kidsCourse: "For Kids",
    englishCourse: "English",
    adultDescription: "Professional English course for students 18 years and older",
    kidsDescription: "Fun and interactive lessons for children aged 6-17",
    learnFromZero: "Learn from scratch",
    realConversation: "Real conversation-based lessons",
    ieltsOriented: "IELTS and CEFR exam oriented",
    careerGrowth: "Career growth opportunities",
    abroadOpportunity: "Convenient for living and working abroad",
    adultLocation: "Yuqori Chirchiq district, near government building",
    kidsLocation: "Yuqori Chirchiq district, government building",
    frequency: "3 times a week",
    adultGroupSize: "6-8 people",
    kidsGroupSize: "maximum 10 children",
    adultPrice: "300,000 som/month",
    originalPrice: "200,000 som",
    discountedPrice: "150,000 som/month",
    monthlyPayment: "Monthly payment",
    monthlyDiscount: "Monthly payment (25% discount)",
    discount: "25% discount",
    kidsAge: "Taught from scratch starting from ages 7-11",
    smallSteps: "Each lesson is a small step towards a great future!",
    individualAttention: "Each child is the center of attention",
    smallGroup: "Each group has only 10 children",
    limitedSeats: "Limited seats available",
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    copyright: "All rights reserved.",
    contactSubtitle: "Contact us and start learning English!",
    phoneNumbers: "Phone Numbers",
    address: "Address",
    fullAddress: "Tashkent region, Yuqori Chirchiq district, Yangibozor, near government building",
    workingHours: "Working Hours",
    mondayFriday: "Monday - Friday: 9:00 - 20:00",
    saturday: "Saturday: 9:00 - 16:00",
    sunday: "Sunday: Rest day",
    joinTelegramGroups: "Join Telegram Groups",
    telegramDescription: "Communicate with students and get updates",
    studentsGroupG01: "Students Group G01",
    studentsGroupK01: "Students Group K01",
    joinG01: "Join G01 Group",
    joinK01: "Join K01 Group",
    ourLocation: "Our Location",
    locationDescription: "Yangibozor, Yuqori Chirchiq district",
    openInGoogleMaps: "Open in Google Maps",
    contactDescription: "Call us or visit us",
    "about-title": "About Us",
    "about-subtitle": "EnglishLite - Modern English Language Learning Center",
    "our-mission": "Our Mission",
    "mission-text1":
      "As EnglishLite learning center, our main goal is to teach English effectively and interestingly to students of all ages.",
    "mission-text2":
      "We strive to provide high-quality education to our students using modern teaching methods and technologies.",
    "experienced-teachers": "Experienced and qualified teachers",
    "interactive-lessons": "Interactive lessons and modern methods",
    "small-groups": "Small groups (6-8 people)",
    "individual-approach": "Individual approach to each student",
    "our-advantages": "Our Advantages",
    "modern-methods": "Modern Methods",
    "modern-methods-desc": "Latest teaching methods and technologies",
    "flexible-schedule": "Flexible Schedule",
    "flexible-schedule-desc": "Class times that fit your schedule",
    certificates: "Certificates",
    "certificates-desc": "Official certificate upon course completion",
    "affordable-prices": "Affordable Prices",
    "affordable-prices-desc": "Budget-friendly prices and discounts",
  },
  ru: {
    home: "Главная",
    about: "О нас",
    courses: "Курсы",
    contact: "Контакты",
    register: "Регистрация",
    heroTitle: "Изучайте английский на профессиональном уровне",
    heroSubtitle: "Знания, начатые сегодня, открывают двери к IELTS, грантам и большим возможностям завтра.",
    freeLesson: "Записаться на бесплатный урок",
    viewCourses: "Посмотреть курсы",
    ourCourses: "Наши курсы",
    coursesSubtitle: "Специально разработанные программы для каждой возрастной группы",
    learnFromScratch: "Изучайте пошагово с нуля с практическими программами!",
    adultsCourse: "Для взрослых",
    kidsCourse: "Для детей",
    englishCourse: "английский язык",
    adultDescription: "Профессиональный курс английского языка для студентов от 18 лет",
    kidsDescription: "Увлекательные и интерактивные уроки для детей 6-17 лет",
    learnFromZero: "Изучайте с нуля",
    realConversation: "Уроки на основе реального общения",
    ieltsOriented: "Ориентированы на экзамены IELTS и CEFR",
    careerGrowth: "Возможности карьерного роста",
    abroadOpportunity: "Удобно для жизни и работы за границей",
    adultLocation: "Юкори Чирчик район, рядом с правительственным зданием",
    kidsLocation: "Юкори Чирчик район, правительственное здание",
    frequency: "3 раза в неделю",
    adultGroupSize: "6-8 человек",
    kidsGroupSize: "максимум 10 детей",
    adultPrice: "300,000 сум/месяц",
    originalPrice: "200,000 сум",
    discountedPrice: "150,000 сум/месяц",
    monthlyPayment: "Ежемесячная оплата",
    monthlyDiscount: "Ежемесячная оплата (скидка 25%)",
    discount: "Скидка 25%",
    kidsAge: "Обучение с нуля начиная с 7-11 лет",
    smallSteps: "Каждый урок - маленький шаг к большому будущему!",
    individualAttention: "Каждый ребенок в центре внимания",
    smallGroup: "В каждой группе только 10 детей",
    limitedSeats: "Ограниченное количество мест",
    quickLinks: "Быстрые ссылки",
    contactInfo: "Контактная информация",
    copyright: "Все права защищены.",
    contactSubtitle: "Свяжитесь с нами и начните изучать английский!",
    phoneNumbers: "Номера телефонов",
    address: "Адрес",
    fullAddress: "Ташкентская область, Юкори Чирчик район, Янгибозор, рядом с правительственным зданием",
    workingHours: "Рабочие часы",
    mondayFriday: "Понедельник - Пятница: 9:00 - 20:00",
    saturday: "Суббота: 9:00 - 16:00",
    sunday: "Воскресенье: Выходной день",
    joinTelegramGroups: "Присоединиться к Telegram группам",
    telegramDescription: "Общайтесь со студентами и получайте обновления",
    studentsGroupG01: "Группа студентов G01",
    studentsGroupK01: "Группа студентов K01",
    joinG01: "Присоединиться к группе G01",
    joinK01: "Присоединиться к группе K01",
    ourLocation: "Наше местоположение",
    locationDescription: "Янгибозор, Юкори Чирчик район",
    openInGoogleMaps: "Открыть в Google Maps",
    contactDescription: "Позвоните нам или посетите нас",
    "about-title": "О нас",
    "about-subtitle": "EnglishLite - Современный центр изучения английского языка",
    "our-mission": "Наша миссия",
    "mission-text1":
      "Как учебный центр EnglishLite, наша главная цель - эффективно и интересно обучать английскому языку студентов всех возрастов.",
    "mission-text2":
      "Мы стремимся предоставить высококачественное образование нашим студентам, используя современные методы обучения и технологии.",
    "experienced-teachers": "Опытные и квалифицированные преподаватели",
    "interactive-lessons": "Интерактивные уроки и современные методы",
    "small-groups": "Малые группы (6-8 человек)",
    "individual-approach": "Индивидуальный подход к каждому студенту",
    "our-advantages": "Наши преимущества",
    "modern-methods": "Современные методы",
    "modern-methods-desc": "Новейшие методы обучения и технологии",
    "flexible-schedule": "Гибкое расписание",
    "flexible-schedule-desc": "Время занятий, подходящее вашему графику",
    certificates: "Сертификаты",
    "certificates-desc": "Официальный сертификат по окончании курса",
    "affordable-prices": "Доступные цены",
    "affordable-prices-desc": "Бюджетные цены и скидки",
  },
  ja: {
    home: "ホーム",
    about: "わたしたちについて",
    courses: "コース",
    contact: "お問い合わせ",
    register: "とうろく",
    heroTitle: "プロレベルでえいごを学ぶ",
    heroSubtitle: "今日始めた知識は、明日のIELTS、奨学金、そして大きな機会への扉を開きます。",
    freeLesson: "無料レッスンに登録",
    viewCourses: "コースを見る",
    ourCourses: "わたしたちのコース",
    coursesSubtitle: "かくねんれいそうむけにとくべつにせっけいされたプログラム",
    learnFromScratch: "実践的なプログラムでゼロから段階的に学びましょう！",
    adultsCourse: "おとなむけ",
    kidsCourse: "こどもむけ",
    englishCourse: "えいご",
    adultDescription: "じゅうはっさいいじょうのがくせいむけプロフェッショナルえいごコース",
    kidsDescription: "ろくさいからじゅうななさいのこどもむけたのしくインタラクティブなレッスン",
    learnFromZero: "ゼロから学ぶ",
    realConversation: "実際の会話に基づくレッスン",
    ieltsOriented: "IELTSとCEFR試験に対応",
    careerGrowth: "キャリア成長の機会",
    abroadOpportunity: "海外での生活と仕事に便利",
    adultLocation: "ユコリ・チルチク地区、政府庁舎近く",
    kidsLocation: "ユコリ・チルチク地区、政府庁舎",
    frequency: "週3回",
    adultGroupSize: "ろくからはちにん",
    kidsGroupSize: "さいだいじゅうにんのこども",
    adultPrice: "さんじゅうまんスム/つき",
    originalPrice: "にじゅうまんスム",
    discountedPrice: "じゅうごまんスム/つき",
    monthlyPayment: "月額支払い",
    monthlyDiscount: "月額支払い（にじゅうごパーセントわりびき）",
    discount: "にじゅうごパーセントわりびき",
    kidsAge: "7-11歳からゼロから教えます",
    smallSteps: "各レッスンは大きな未来への小さな一歩！",
    individualAttention: "各子供が注目の中心",
    smallGroup: "各グループは10人の子供のみ",
    limitedSeats: "席数限定",
    quickLinks: "クイックリンク",
    contactInfo: "連絡先情報",
    copyright: "全著作権所有。",
    contactSubtitle: "お問い合わせしてえいごがくしゅうを始めましょう！",
    phoneNumbers: "電話番号",
    address: "住所",
    fullAddress: "タシケント州、ユコリ・チルチク地区、ヤンギボザール、政府庁舎近く",
    workingHours: "営業時間",
    mondayFriday: "月曜日 - 金曜日: 9:00 - 20:00",
    saturday: "土曜日: 9:00 - 16:00",
    sunday: "日曜日: 休業日",
    joinTelegramGroups: "Telegramグループに参加",
    telegramDescription: "学生と交流し、最新情報を入手",
    studentsGroupG01: "学生グループG01",
    studentsGroupK01: "学生グループK01",
    joinG01: "G01グループに参加",
    joinK01: "K01グループに参加",
    ourLocation: "私たちの場所",
    locationDescription: "ヤンギボザール、ユコリ・チルチク地区",
    openInGoogleMaps: "Google Mapsで開く",
    contactDescription: "お電話またはご来店ください",
    "about-title": "わたしたちについて",
    "about-subtitle": "EnglishLite - モダンなえいごがくしゅうセンター",
    "our-mission": "わたしたちのミッション",
    "mission-text1":
      "EnglishLiteがくしゅうセンターとして、わたしたちのしゅようなもくひょうは、すべてのねんれいのがくせいにえいごをこうかてきでおもしろくおしえることです。",
    "mission-text2":
      "わたしたちはモダンなきょういくほうほうとテクノロジーをつかって、がくせいにこうひんしつなきょういくをていきょうすることにどりょくしています。",
    "experienced-teachers": "けいけんゆたかでしかくをもつせんせい",
    "interactive-lessons": "インタラクティブなレッスンとモダンなほうほう",
    "small-groups": "しょうグループ（ろくからはちにん）",
    "individual-approach": "かくがくせいへのこじんてきアプローチ",
    "our-advantages": "わたしたちのゆうい",
    "modern-methods": "モダンなほうほう",
    "modern-methods-desc": "さいしんのきょういくほうほうとテクノロジー",
    "flexible-schedule": "じゅうなんなスケジュール",
    "flexible-schedule-desc": "あなたのスケジュールにあうじゅぎょうじかん",
    certificates: "しょうめいしょ",
    "certificates-desc": "コースしゅうりょうじにこうしきしょうめいしょ",
    "affordable-prices": "てごろなかかく",
    "affordable-prices-desc": "よさんにやさしいかかくとわりびき",
  },
}

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState("uz")

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    localStorage.setItem("language", langCode)

    const selectedTranslations = translations[langCode as keyof typeof translations]

    // Update all elements with data-translate attributes
    const translatableElements = document.querySelectorAll("[data-translate]")
    translatableElements.forEach((element) => {
      const key = element.getAttribute("data-translate")
      if (key && selectedTranslations[key as keyof typeof selectedTranslations]) {
        element.textContent = selectedTranslations[key as keyof typeof selectedTranslations]
      }
    })

    // Update navigation items
    const navLinks = document.querySelectorAll("nav a")
    navLinks.forEach((link) => {
      const href = link.getAttribute("href")
      if (href === "/") link.textContent = selectedTranslations.home
      if (href === "/about") link.textContent = selectedTranslations.about
      if (href === "/courses") link.textContent = selectedTranslations.courses
      if (href === "/contact") link.textContent = selectedTranslations.contact
    })

    // Update footer items
    const footerLinks = document.querySelectorAll("footer a")
    footerLinks.forEach((link) => {
      const href = link.getAttribute("href")
      if (href === "/") link.textContent = selectedTranslations.home
      if (href === "/about") link.textContent = selectedTranslations.about
      if (href === "/courses") link.textContent = selectedTranslations.courses
      if (href === "/contact") link.textContent = selectedTranslations.contact
    })

    // Update footer headings
    const footerHeadings = document.querySelectorAll("footer h3")
    footerHeadings.forEach((heading) => {
      if (
        heading.textContent?.includes("Tezkor havolalar") ||
        heading.textContent?.includes("Quick Links") ||
        heading.textContent?.includes("Быстрые ссылки") ||
        heading.textContent?.includes("クイックリンク")
      ) {
        heading.textContent = selectedTranslations.quickLinks
      }
      if (
        heading.textContent?.includes("Aloqa ma'lumotlari") ||
        heading.textContent?.includes("Contact Information") ||
        heading.textContent?.includes("Контактная информация") ||
        heading.textContent?.includes("連絡先情報")
      ) {
        heading.textContent = selectedTranslations.contactInfo
      }
    })

    // Dispatch custom event for other components
    const event = new CustomEvent("languageChanged", {
      detail: { language: langCode, translations: selectedTranslations },
    })
    window.dispatchEvent(event)
  }

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("language")
    if (savedLang && languages.find((lang) => lang.code === savedLang)) {
      setCurrentLang(savedLang)
      handleLanguageChange(savedLang)
    }
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Globe className="h-4 w-4" />
          {languages.find((lang) => lang.code === currentLang)?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="gap-2">
            <span>{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
