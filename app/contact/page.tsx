import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-translate="contact">
              Aloqa
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto" data-translate="contactSubtitle">
              Biz bilan bog'laning va ingliz tili o'rganishni boshlang!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary" data-translate="contactInfo">
                    Bog'lanish ma'lumotlari
                  </CardTitle>
                  <CardDescription className="text-foreground" data-translate="contactDescription">
                    Bizga qo'ng'iroq qiling yoki tashrif buyuring
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1" data-translate="phoneNumbers">
                        Telefon raqamlar
                      </h3>
                      <a
                        href="tel:+998992397752"
                        className="text-primary hover:text-primary/80 transition-colors block"
                      >
                        +998 99 239 77 52
                      </a>
                      <a
                        href="tel:+998943815981"
                        className="text-primary hover:text-primary/80 transition-colors block"
                      >
                        +998 94 381 59 81
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1" data-translate="address">
                        Manzil
                      </h3>
                      <p className="text-foreground" data-translate="fullAddress">
                        Toshkent viloyati, Yuqori Chirchiq tumani,
                        <br />
                        Yangibozor, hokimiyat binosi yonida
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1" data-translate="workingHours">
                        Ish vaqti
                      </h3>
                      <p className="text-foreground" data-translate="mondayFriday">
                        Dushanba - Juma: 9:00 - 20:00
                      </p>
                      <p className="text-foreground" data-translate="saturday">
                        Shanba: 9:00 - 16:00
                      </p>
                      <p className="text-foreground" data-translate="sunday">
                        Yakshanba: Dam olish kuni
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Telegram Groups */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    <span data-translate="joinTelegramGroups">Telegram guruhlarga qo'shiling</span>
                  </CardTitle>
                  <CardDescription className="text-foreground" data-translate="telegramDescription">
                    O'quvchilar bilan muloqot qiling va yangiliklar oling
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* G01 Group */}
                    <div className="text-center space-y-4">
                      <h3 className="font-semibold text-foreground" data-translate="studentsGroupG01">
                        O'quvchilar guruhi G01
                      </h3>
                      <div className="flex justify-center">
                        <Image
                          src="/images/qr-g01.png"
                          alt="G01 Telegram Group QR Code"
                          width={150}
                          height={150}
                          className="border rounded-lg"
                        />
                      </div>
                      <Button asChild className="w-full gradient-primary text-white">
                        <a
                          href="https://t.me/+_q7fiGbp6vk0MmFi"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-translate="joinG01"
                        >
                          G01 guruhiga qo'shilish
                        </a>
                      </Button>
                    </div>

                    {/* K01 Group */}
                    <div className="text-center space-y-4">
                      <h3 className="font-semibold text-foreground" data-translate="studentsGroupK01">
                        O'quvchilar guruhi K01
                      </h3>
                      <div className="flex justify-center">
                        <Image
                          src="/images/qr-k01.png"
                          alt="K01 Telegram Group QR Code"
                          width={150}
                          height={150}
                          className="border rounded-lg"
                        />
                      </div>
                      <Button asChild className="w-full gradient-primary text-white">
                        <a
                          href="https://t.me/+fZs8bym0ALtjN2Qy"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-translate="joinK01"
                        >
                          K01 guruhiga qo'shilish
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Map */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary" data-translate="ourLocation">
                  Bizning joylashuvimiz
                </CardTitle>
                <CardDescription className="text-foreground" data-translate="locationDescription">
                  Yangibozor, Yuqori Chirchiq tumani
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 rounded-lg overflow-hidden border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8!2d69.6!3d41.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI0JzAwLjAiTiA2OcKwMzYnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EnglishLite Location - Yangibozor, Yuqori Chirchiq"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <Button asChild className="gradient-primary text-white">
                    <a
                      href="https://maps.google.com/?q=Yangibozor,Yuqori+Chirchiq,Toshkent+viloyati,Uzbekistan"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-translate="openInGoogleMaps"
                    >
                      Google Maps'da ochish
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
