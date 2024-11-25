"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, ThumbsUp } from 'lucide-react'
import { doctorsList } from '@/lib/data'







export default function Appointment() {
  return (
    <div className="container mx-auto">
      <section className="bg-indigo-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Our Expert Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorsList.map((doctor) => (
              <Card key={doctor.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-0">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=${doctor.photo}`}
                      alt={doctor.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-indigo-900">{doctor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4 mt-5">
                    {doctor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-800">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-slate-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{doctor.hospital}</span>
                  </div>
                  <div className="flex items-center text-slate-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Available: {doctor.appointmentDays.join(', ')}</span>
                  </div>
                  <div className="flex items-center text-slate-600 mb-2">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Experience: {doctor.yearsOfExperience} years</span>
                  </div>
                  <div className="flex items-center text-slate-600 mb-4">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    <span>Successful Operations: {doctor.successfulOperations}</span>
                  </div>
                  <p className="text-slate-700 text-sm">{doctor.additionalDetails}</p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/BookAppionments/${doctor.id}`}>
                    <Button className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700">
                      Book Appointment
                    </Button>
                  </Link>

                  <Link href={`/Doctors/${doctor.id}`}>
                    <Button variant="outline" className="w-full sm:w-auto text-indigo-600 border-indigo-600 hover:bg-indigo-100">
                      View More Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}