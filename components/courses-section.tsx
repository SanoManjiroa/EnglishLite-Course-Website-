"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, MapPin, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

export function CoursesSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" data-translate="ourCourses">
            Bizning kurslarimiz
          </h2>
          <p className="text-xl text-primary max-w-2xl mx-auto" data-translate="coursesSubtitle">
            Har bir yosh guruh uchun maxsus ishlab chiqilgan dasturlar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Adults Course */}
          <Card className="animate-slide-up hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/adult-classroom.jpg"
                alt="Kattalar uchun ingliz tili darsi"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-primary text-primary-foreground" data-translate="adultsCourse">
                  Kattalar uchun
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-white/90">
                  18+ yosh
                </Badge>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl text-primary" data-translate="englishCourse">
                Ingliz tili kursi
              </CardTitle>
              <CardDescription className="text-lg text-green-600 font-medium" data-translate="adultDescription">
                18 yoshdan yuqori o'quvchilar uchun professional ingliz tili kursi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-green-700">
                  ✅ <span data-translate="learnFromZero">Noldan o'rganasiz</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  ✅ <span data-translate="realConversation">Real muloqotga asoslangan darslar</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  ✅ <span data-translate="ieltsOriented">IELTS va CEFR imtihonlariga yo'naltirilgan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  ✅ <span data-translate="careerGrowth">Kariyerada o'sish imkoniyati</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  ✅ <span data-translate="abroadOpportunity">Chet elda yashash va ishlash uchun qulay</span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-green-600" data-translate="adultLocation">
                  <MapPin className="h-4 w-4" />
                  <span>Yuqori Chirchiq tumani, hokimiyat binosi yonida</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600" data-translate="frequency">
                  <Clock className="h-4 w-4" />
                  <span>Haftasiga 3 marta</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600" data-translate="adultGroupSize">
                  <Users className="h-4 w-4" />
                  <span>Kichik guruhlar (8-10 kishi)</span>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2" data-translate="adultPrice">
                  300,000 so'm
                </div>
                <div className="text-sm text-green-600" data-translate="monthlyPayment">
                  Oylik to'lov
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <Phone className="h-4 w-4 text-primary" />
                  <div className="flex gap-2">
                    <a href="tel:+998992397752" className="hover:text-primary transition-colors">
                      +998 99 239 77 52
                    </a>
                    <span>,</span>
                    <a href="tel:+998943815981" className="hover:text-primary transition-colors">
                      +998 94 381 59 81
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <a
                    href="https://t.me/meemooryreeboot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @meemooryreeboot
                  </a>
                </div>
              </div>

              <Button className="w-full gradient-primary text-white" data-translate="register">
                Ro'yxatdan o'tish
              </Button>
            </CardContent>
          </Card>

          {/* Kids Course */}
          <Card
            className="animate-slide-up hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/children-classroom.jpg"
                alt="Bolalar uchun ingliz tili darsi"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-accent text-accent-foreground" data-translate="kidsCourse">
                  Bolalar uchun
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge variant="outline" className="bg-white/90">
                  7-11 yosh
                </Badge>
                <Badge className="bg-red-500 text-white" data-translate="discount">
                  25% chegirma
                </Badge>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-2xl text-primary" data-translate="englishCourse">
                Ingliz tili kursi
              </CardTitle>
              <CardDescription className="text-lg text-green-600 font-medium" data-translate="kidsDescription">
                6-17 yosh oralig'idagi bolalar uchun qiziqarli va interaktiv darslar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-green-700">
                  ✅ <span data-translate="kidsAge">7–11 yoshdan boshlab noldan o'rgatiladi</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  ✅ <span data-translate="smallSteps">Har bir dars – kichik qadam, katta kelajak sari!</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  ✅ <span data-translate="individualAttention">Har bir bola – e'tibor markazida</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  ✅ <span data-translate="smallGroup">Har bir guruh – atigi 10 ta bola</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  🧨{" "}
                  <span className="font-semibold text-destructive" data-translate="limitedSeats">
                    Joylar soni cheklangan
                  </span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-green-600" data-translate="kidsLocation">
                  <MapPin className="h-4 w-4" />
                  <span>Yuqori Chirchiq tumani, hokimiyat binosi</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600" data-translate="frequency">
                  <Clock className="h-4 w-4" />
                  <span>Haftasiga 3 marta</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600" data-translate="kidsGroupSize">
                  <Users className="h-4 w-4" />
                  <span>Kichik guruhlar (maksimal 10 bola)</span>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg text-green-600 line-through" data-translate="originalPrice">
                    200,000 so'm
                  </span>
                  <span className="text-2xl font-bold text-primary" data-translate="discountedPrice">
                    150,000 so'm
                  </span>
                </div>
                <div className="text-sm text-green-600" data-translate="monthlyDiscount">
                  Oylik to'lov (25% chegirma bilan)
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <Phone className="h-4 w-4 text-primary" />
                  <div className="flex gap-2">
                    <a href="tel:+998992397752" className="hover:text-primary transition-colors">
                      +998 99 239 77 52
                    </a>
                    <span>,</span>
                    <a href="tel:+998943815981" className="hover:text-primary transition-colors">
                      +998 94 381 59 81
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <a
                    href="https://t.me/meemooryreeboot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @meemooryreeboot
                  </a>
                </div>
              </div>

              <Button className="w-full gradient-primary text-white" data-translate="register">
                Ro'yxatdan o'tish
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-2 text-white" data-translate="heroSubtitle">
              "Bugun boshlangan bilim – ertaga IELTS, grant va katta imkoniyatlarga eshik ochadi."
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
