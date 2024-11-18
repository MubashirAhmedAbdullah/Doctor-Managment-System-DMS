import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function DoctorArticle() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Featured Healthcare Insight</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/3">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1612276529731-4b21494e6d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGRvY3RvciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Dr. Jane Smith"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-indigo-900">Dr. Jane Smith</h3>
              <p className="text-slate-600">Chief Medical Officer</p>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">The Importance of Regular Health Check-ups</h3>
              <p className="text-slate-600 mb-6">
                Regular health check-ups are crucial for maintaining good health and preventing serious illnesses. 
                These routine examinations allow doctors to detect potential health issues early, often before 
                symptoms appear. Early detection can lead to more effective treatment and better outcomes.
              </p>
              <p className="text-slate-600 mb-6">
                During a check-up, your doctor will review your medical history, perform a physical exam, and may 
                order various screening tests based on your age, gender, and risk factors. These might include 
                blood pressure measurements, cholesterol tests, and cancer screenings.
              </p>
              <p className="text-slate-600 mb-6">
                By prioritizing regular check-ups, you're taking an active role in your health. It's an opportunity 
                to discuss any health concerns with your doctor and receive guidance on lifestyle changes that can 
                improve your overall well-being.
              </p>
              <div className="flex justify-between items-center text-sm text-indigo-600 mb-6">
                <span>Dr. Jane Smith</span>
                <span>May 15, 2023</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-indigo-600 text-white hover:bg-indigo-700 flex-1"
                >
                  <Link href="/articles/importance-of-regular-health-checkups" className="flex items-center justify-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="text-indigo-600 border-indigo-600 hover:bg-indigo-100 flex-1"
                >
                  <Link href="/articles?author=dr-jane-smith" className="flex items-center justify-center">
                    More Articles by Dr. Smith
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 my-10">
          <div className="w-full md:w-1/3">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1612276529731-4b21494e6d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGRvY3RvciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Dr. Jane Smith"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-indigo-900">Dr. Jane Smith</h3>
              <p className="text-slate-600">Chief Medical Officer</p>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">The Importance of Regular Health Check-ups</h3>
              <p className="text-slate-600 mb-6">
                Regular health check-ups are crucial for maintaining good health and preventing serious illnesses. 
                These routine examinations allow doctors to detect potential health issues early, often before 
                symptoms appear. Early detection can lead to more effective treatment and better outcomes.
              </p>
              <p className="text-slate-600 mb-6">
                During a check-up, your doctor will review your medical history, perform a physical exam, and may 
                order various screening tests based on your age, gender, and risk factors. These might include 
                blood pressure measurements, cholesterol tests, and cancer screenings.
              </p>
              <p className="text-slate-600 mb-6">
                By prioritizing regular check-ups, you're taking an active role in your health. It's an opportunity 
                to discuss any health concerns with your doctor and receive guidance on lifestyle changes that can 
                improve your overall well-being.
              </p>
              <div className="flex justify-between items-center text-sm text-indigo-600 mb-6">
                <span>Dr. Jane Smith</span>
                <span>May 15, 2023</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-indigo-600 text-white hover:bg-indigo-700 flex-1"
                >
                  <Link href="/articles/importance-of-regular-health-checkups" className="flex items-center justify-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="text-indigo-600 border-indigo-600 hover:bg-indigo-100 flex-1"
                >
                  <Link href="/articles?author=dr-jane-smith" className="flex items-center justify-center">
                    More Articles by Dr. Smith
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/3">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1612276529731-4b21494e6d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGRvY3RvciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Dr. Jane Smith"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-indigo-900">Dr. Jane Smith</h3>
              <p className="text-slate-600">Chief Medical Officer</p>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">The Importance of Regular Health Check-ups</h3>
              <p className="text-slate-600 mb-6">
                Regular health check-ups are crucial for maintaining good health and preventing serious illnesses. 
                These routine examinations allow doctors to detect potential health issues early, often before 
                symptoms appear. Early detection can lead to more effective treatment and better outcomes.
              </p>
              <p className="text-slate-600 mb-6">
                During a check-up, your doctor will review your medical history, perform a physical exam, and may 
                order various screening tests based on your age, gender, and risk factors. These might include 
                blood pressure measurements, cholesterol tests, and cancer screenings.
              </p>
              <p className="text-slate-600 mb-6">
                By prioritizing regular check-ups, you're taking an active role in your health. It's an opportunity 
                to discuss any health concerns with your doctor and receive guidance on lifestyle changes that can 
                improve your overall well-being.
              </p>
              <div className="flex justify-between items-center text-sm text-indigo-600 mb-6">
                <span>Dr. Jane Smith</span>
                <span>May 15, 2023</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-indigo-600 text-white hover:bg-indigo-700 flex-1"
                >
                  <Link href="/articles/importance-of-regular-health-checkups" className="flex items-center justify-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="text-indigo-600 border-indigo-600 hover:bg-indigo-100 flex-1"
                >
                  <Link href="/articles?author=dr-jane-smith" className="flex items-center justify-center">
                    More Articles by Dr. Smith
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}