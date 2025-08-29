import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/englishlite-logo-hd.png"
                alt="EnglishLite"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
              />
              <span className="text-xl font-bold">EnglishLite</span>
            </Link>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Professional ingliz tili kurslari - kattalar va bolalar uchun. Noldan boshlab IELTS darajasigacha.
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/meemooryreeboot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" data-translate="quickLinks">
              Tezkor havolalar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-translate="home"
                >
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-translate="about"
                >
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-translate="courses"
                >
                  Kurslar
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-translate="contact"
                >
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4" data-translate="contactInfo">
              Aloqa ma'lumotlari
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <div>
                  <a href="+998992397752" className="hover:text-primary-foreground transition-colors">
                    +998 99 239 77 52
                  </a>
                  <br />
                  <a href="+998943815981" className="hover:text-primary-foreground transition-colors">
                    +998 94 381 59 81
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Yuqori Chirchiq tumani, hokimiyat binosi yonida</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MessageCircle className="h-4 w-4" />
                <a
                  href="https://t.me/meemooryreeboot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  @meemooryreeboot
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Image
              src="/images/englishlite-logo-hd.png"
              alt="EnglishLite"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <span className="font-semibold">EnglishLite</span>
          </div>
                    <p className="text-primary-foreground/60">
            © 2025 EnglishLite. <span data-translate="copyright">Barcha huquqlar himoyalangan.</span>
             <span data-translate="copyright">Author: Komilova Irodabonu</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
