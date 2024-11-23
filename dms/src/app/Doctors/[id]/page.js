import { doctorsList } from "@/lib/data"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, MapPin, Award, ThumbsUp, Phone, Mail, Globe, DollarSign } from 'lucide-react'
import Link from "next/link"



export default function DoctorDetailsPage({ params }) {


    const doctorInfo = doctorsList.find((doctors) => doctors.id == params.id)
    return (
        <Card className="max-w-3xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 pb-6">
                <div className="relative w-40 h-40 md:w-48 md:h-48">
                    <Image
                        src={doctorInfo.photo}
                        alt={doctorInfo.name}
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="text-center md:text-left">
                    <CardTitle className="text-3xl font-bold text-indigo-900">{doctorInfo.name}</CardTitle>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                        {doctorInfo.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-800">
                                {specialty}
                            </Badge>
                        ))}
                    </div>
                    <div className="mt-2 text-indigo-600 font-semibold">
                        {doctorInfo.degrees.join(", ")}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg text-indigo-900 mb-2">About</h3>
                    <p className="text-slate-600">{doctorInfo.additionalDetails}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                        <Award className="text-indigo-600" />
                        <span>{doctorInfo.yearsOfExperience} years of experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <ThumbsUp className="text-indigo-600" />
                        <span>{doctorInfo.successfulOperations} successful operations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Calendar className="text-indigo-600" />
                        <span>Available: {doctorInfo.appointmentDays.join(", ")}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Clock className="text-indigo-600" />
                        <span>Clinic Hours: {doctorInfo.clinicTiming}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <DollarSign className="text-indigo-600" />
                        <span>Consultation Fee: {(doctorInfo.consultationFee)}</span>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg text-indigo-900 mb-2">Hospitals</h3>
                    {doctorInfo.hospitals.map((hospital, index) => (
                        <div key={index} className="flex items-start space-x-2 mb-2">
                            <MapPin className="text-indigo-600 mt-1 flex-shrink-0" />
                            <span>{hospital}</span>
                        </div>
                    ))}
                </div>
                <Separator />
                <div>
                    <h3 className="font-semibold text-lg text-indigo-900 mb-2">Contact Information</h3>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Phone className="text-indigo-600" />
                            <a href={`tel:${doctorInfo.phone}`} className="text-indigo-600 hover:underline">
                                {doctorInfo.phone}
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="text-indigo-600" />
                            <a href={`mailto:${doctorInfo.email}`} className="text-indigo-600 hover:underline">
                                {doctorInfo.email}
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe className="text-indigo-600" />
                            <a href={`https://${doctorInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                                {doctorInfo.website}
                            </a>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Link href={"/BookAppionment"}>
                    <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                        Book Appointment
                    </Button></Link>
            </CardFooter>
        </Card>
    )
}