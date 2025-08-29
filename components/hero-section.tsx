import { Button } from "@/components/ui/button"
import { Users, Award, Clock } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="gradient-primary text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance" data-translate="heroTitle">
            Ingliz tilini professional darajada o'rganing
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto text-pretty"
            data-translate="heroSubtitle"
          >
            Bugun boshlangan bilim – ertaga IELTS, grant va katta imkoniyatlarga eshik ochadi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-3 w-full sm:w-auto"
                data-translate="freeLesson"
              >
                Bepul darsga yozilish
              </Button>
            </Link>
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto"
                data-translate="viewCourses"
              >
                Kurslarni ko'rish
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Users className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <div className="text-2xl font-bold">95%</div>
              <div className="text-white/80">Muvaffaqiyat</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Award className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <div className="text-2xl font-bold">3</div>
              <div className="text-white/80">Yil tajriba</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Clock className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-white/80">Qo'llab-quvvatlash</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
