import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="bg-indigo-50 container mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
              Streamline Your Medical Practice
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Efficiently manage patients, appointments, and records with our comprehensive doctor management system.
            </p>
            <div className="space-x-4">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                Get Started
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/heroImage.jpg"
              alt="Doctor using management system"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}