import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { BookOpen, Users, Award, Clock, Star, Target, Lightbulb, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-yellow-400/5 to-primary/5 rounded-3xl -z-10 animate-pulse"></div>
            <div className="py-12">
              <h1
                className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in"
                data-translate="about-title"
              >
                Biz haqimizda
              </h1>
              <p className="text-xl text-primary max-w-3xl mx-auto" data-translate="about-subtitle">
                EnglishLite - zamonaviy ingliz tili o'qitish markazi
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-primary" data-translate="our-mission">
                  Bizning missiyamiz
                </h2>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-lg text-foreground mb-4" data-translate="mission-text1">
                  EnglishLite o'quv markazi sifatida bizning asosiy maqsadimiz - har bir yoshdagi o'quvchilarga ingliz
                  tilini samarali va qiziqarli tarzda o'rgatishdir.
                </p>
                <p className="text-lg text-foreground mb-4" data-translate="mission-text2">
                  Biz zamonaviy o'qitish metodlari va texnologiyalaridan foydalanib, o'quvchilarimizga yuqori sifatli
                  ta'lim berishga intilamiz.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-foreground" data-translate="experienced-teachers">
                    Tajribali va malakali o'qituvchilar
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  <span className="text-foreground" data-translate="interactive-lessons">
                    Interaktiv darslar va zamonaviy metodlar
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <span className="text-foreground" data-translate="small-groups">
                    Kichik guruhlar (6-8 kishi)
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Heart className="w-6 h-6 text-red-400" />
                  <span className="text-foreground" data-translate="individual-approach">
                    Individual yondashuv har bir o'quvchiga
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src="/images/adult-classroom.jpg"
                  alt="Adult English Class"
                  width={600}
                  height={400}
                  className="relative rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-primary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src="/images/children-classroom.jpg"
                  alt="Children English Class"
                  width={600}
                  height={400}
                  className="relative rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-primary" data-translate="our-advantages">
                  Bizning afzalliklarimiz
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-lg hover:from-green-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-green-600 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1" data-translate="modern-methods">
                      Zamonaviy metodlar
                    </h3>
                    <p className="text-foreground" data-translate="modern-methods-desc">
                      Eng so'nggi o'qitish metodlari va texnologiyalar
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gradient-to-r from-yellow-50 to-transparent p-4 rounded-lg hover:from-yellow-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1" data-translate="flexible-schedule">
                      Moslashuvchan jadval
                    </h3>
                    <p className="text-foreground" data-translate="flexible-schedule-desc">
                      Sizning vaqtingizga mos keladigan dars vaqtlari
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg hover:from-blue-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-primary flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1" data-translate="certificates">
                      Sertifikatlar
                    </h3>
                    <p className="text-foreground" data-translate="certificates-desc">
                      Kurs yakunida rasmiy sertifikat berish
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gradient-to-r from-purple-50 to-transparent p-4 rounded-lg hover:from-purple-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1" data-translate="affordable-prices">
                      Qulay narxlar
                    </h3>
                    <p className="text-foreground" data-translate="affordable-prices-desc">
                      Hamyonbop narxlar va chegirmalar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
