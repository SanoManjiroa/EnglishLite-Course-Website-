import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Clock, Users, BookOpen, Star } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/englishlite-logo.png"
                alt="EnglishLite"
                width={100}
                height={100}
                className="w-25 h-25 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-translate="ourCourses">
              Bizning kurslarimiz
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto" data-translate="coursesSubtitle">
              Har bir yosh guruhi uchun maxsus ishlab chiqilgan dasturlar
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Adult Course */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/adult-classroom.jpg"
                  alt="Kattalar uchun ingliz tili kursi"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white" data-translate="adultsCourse">
                    Kattalar uchun
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  <span data-translate="adultsCourse">Kattalar uchun</span>{" "}
                  <span data-translate="englishCourse">ingliz tili</span>
                </CardTitle>
                <CardDescription className="text-lg text-green-600" data-translate="adultDescription">
                  18 yoshdan yuqori o'quvchilar uchun professional ingliz tili kursi
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Dars davomiyligi: 1.5 soat</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>
                    Guruh hajmi: <span data-translate="adultGroupSize">6-8 kishi</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Kurs davomiyligi: 6 oy</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Barcha darajalar: Beginner - Advanced</span>
                </div>
                <div className="pt-4">
                  <div className="text-2xl font-bold text-primary mb-2" data-translate="adultPrice">
                    300,000 so'm/oy
                  </div>
                  <Button className="w-full gradient-primary text-white" data-translate="register">
                    Ro'yxatdan o'tish
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Children Course */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/children-classroom.jpg"
                  alt="Bolalar uchun ingliz tili kursi"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-white" data-translate="kidsCourse">
                    Bolalar uchun
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-500 text-white" data-translate="discount">
                    25% chegirma
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  <span data-translate="kidsCourse">Bolalar uchun</span>{" "}
                  <span data-translate="englishCourse">ingliz tili</span>
                </CardTitle>
                <CardDescription className="text-lg text-green-600" data-translate="kidsDescription">
                  6-17 yosh oralig'idagi bolalar uchun qiziqarli va interaktiv darslar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Dars davomiyligi: 1 soat</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>
                    Guruh hajmi: <span data-translate="kidsGroupSize">6-8 kishi</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Kurs davomiyligi: 6 oy</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Yosh guruhlari: 6-10, 11-14, 15-17</span>
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg text-muted-foreground line-through" data-translate="originalPrice">
                      200,000 so'm
                    </span>
                    <span className="text-2xl font-bold text-primary" data-translate="discountedPrice">
                      150,000 so'm/oy
                    </span>
                  </div>
                  <Button className="w-full gradient-primary text-white" data-translate="register">
                    Ro'yxatdan o'tish
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="bg-card rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Nega aynan EnglishLite?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Zamonaviy dastur</h3>
                <p className="text-muted-foreground">Eng so'nggi o'qitish metodlari va materiallar</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Tajribali o'qituvchilar</h3>
                <p className="text-muted-foreground">Malakali va tajribali ingliz tili o'qituvchilari</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Kafolatlangan natija</h3>
                <p className="text-muted-foreground">6 oy ichida ingliz tilini erkin gaplashish</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
