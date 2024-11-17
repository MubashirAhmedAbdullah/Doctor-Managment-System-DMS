import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const doctors = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    specialty: "Cardiologist",
    categories: ["Heart Disease", "Hypertension", "Arrhythmia"],
    description: "Dr. Smith is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She specializes in interventional cardiology and has pioneered several minimally invasive procedures.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Dr. John Doe",
    specialty: "Pediatrician",
    categories: ["Child Development", "Pediatric Immunology", "Behavioral Disorders"],
    description: "Dr. Doe is a compassionate pediatrician dedicated to providing comprehensive care for children from infancy through adolescence. He has a special interest in childhood obesity prevention and adolescent mental health.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    specialty: "Neurologist",
    categories: ["Stroke", "Epilepsy", "Multiple Sclerosis"],
    description: "Dr. Brown is a highly skilled neurologist known for her expertise in diagnosing and treating complex neurological disorders. She leads our hospital's stroke unit and is actively involved in clinical research on neurodegenerative diseases.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Dr. Michael Lee",
    specialty: "Orthopedic Surgeon",
    categories: ["Joint Replacement", "Sports Injuries", "Spinal Disorders"],
    description: "Dr. Lee is a renowned orthopedic surgeon specializing in minimally invasive techniques for joint replacements and sports-related injuries. He has treated numerous professional athletes and is a pioneer in robotic-assisted orthopedic surgeries.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
]

export default function DoctorTeam() {
  return (
    <section className="bg-indigo-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Our Expert Doctor Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="relative h-64 md:h-auto md:w-1/3">
                <Image
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-semibold text-indigo-900 mb-1">{doctor.name}</h3>
                <p className="text-indigo-600 font-medium mb-2">{doctor.specialty}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-1">Specialist Categories:</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.categories.map((category, index) => (
                      <span key={index} className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-4">{doctor.description}</p>
                <Button
                  asChild
                  className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  <Link href={`/doctors/${doctor.id}`}>See Full Profile</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="text-indigo-600 border-indigo-600 hover:bg-indigo-100"
          >
            <Link href="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}