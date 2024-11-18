import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, ThumbsUp } from 'lucide-react'

const doctorsList = [
    {
      id: 1,
      name: "Dr. Aisha Abdullah",
      specialties: ["Cardiologist", "Internal Medicine"],
      appointmentDays: ["Monday", "Wednesday", "Friday"],
      hospital: "City Heart Center",
      yearsOfExperience: 15,
      successfulOperations: 500,
      additionalDetails: "Expert in interventional cardiology and heart failure management."
    },
    {
      id: 2,
      name: "Dr. Ahmed Malik",
      specialties: ["Dermatologist", "Cosmetologist"],
      appointmentDays: ["Tuesday", "Thursday", "Saturday"],
      hospital: "SkinCare Hospital",
      yearsOfExperience: 10,
      successfulOperations: 300,
      additionalDetails: "Specializes in treating skin conditions and performing cosmetic procedures."
    },
    {
      id: 3,
      name: "Dr. Fatima Rahman",
      specialties: ["Pediatrician", "Neonatologist"],
      appointmentDays: ["Monday", "Thursday", "Saturday"],
      hospital: "Happy Kids Clinic",
      yearsOfExperience: 8,
      successfulOperations: 200,
      additionalDetails: "Focuses on newborn care and pediatric health."
    },
    {
      id: 4,
      name: "Dr. Ali Hussain",
      specialties: ["Orthopedic Surgeon", "Sports Medicine"],
      appointmentDays: ["Tuesday", "Friday", "Sunday"],
      hospital: "OrthoCare Hospital",
      yearsOfExperience: 20,
      successfulOperations: 700,
      additionalDetails: "Renowned for joint replacement surgeries and sports injury treatments."
    },
    {
      id: 5,
      name: "Dr. Layla Khan",
      specialties: ["Neurologist", "Neurophysiologist"],
      appointmentDays: ["Monday", "Wednesday", "Saturday"],
      hospital: "Neuro Health Center",
      yearsOfExperience: 12,
      successfulOperations: 250,
      additionalDetails: "Expert in treating epilepsy and neurodegenerative disorders."
    },
    {
      id: 6,
      name: "Dr. Yusuf Ahmed",
      specialties: ["General Practitioner", "Family Medicine"],
      appointmentDays: ["Tuesday", "Thursday", "Saturday"],
      hospital: "City General Hospital",
      yearsOfExperience: 18,
      successfulOperations: 150,
      additionalDetails: "Provides comprehensive primary care and family health services."
    },
    {
      id: 7,
      name: "Dr. Maryam Akhtar",
      specialties: ["Gynecologist", "Obstetrician"],
      appointmentDays: ["Wednesday", "Friday", "Sunday"],
      hospital: "Women's Health Clinic",
      yearsOfExperience: 14,
      successfulOperations: 400,
      additionalDetails: "Specializes in women's reproductive health and prenatal care."
    },
    {
      id: 8,
      name: "Dr. Bilal Sheikh",
      specialties: ["Endocrinologist", "Diabetologist"],
      appointmentDays: ["Monday", "Thursday", "Friday"],
      hospital: "EndoCare Center",
      yearsOfExperience: 11,
      successfulOperations: 180,
      additionalDetails: "Expert in hormone-related disorders and diabetes management."
    },
    {
      id: 9,
      name: "Dr. Zainab Jamil",
      specialties: ["Ophthalmologist", "Retina Specialist"],
      appointmentDays: ["Tuesday", "Thursday", "Saturday"],
      hospital: "VisionCare Hospital",
      yearsOfExperience: 16,
      successfulOperations: 600,
      additionalDetails: "Specializes in eye surgeries and retinal treatments."
    },
    {
      id: 10,
      name: "Dr. Ibrahim Saeed",
      specialties: ["Psychiatrist", "Psychotherapist"],
      appointmentDays: ["Monday", "Wednesday", "Friday"],
      hospital: "Mental Health Clinic",
      yearsOfExperience: 22,
      successfulOperations: 100,
      additionalDetails: "Focuses on mental health therapies and psychological counseling."
    },
    {
      id: 11,
      name: "Dr. Amina Siddiqui",
      specialties: ["Oncologist", "Hematologist"],
      appointmentDays: ["Tuesday", "Friday", "Sunday"],
      hospital: "Cancer Care Center",
      yearsOfExperience: 19,
      successfulOperations: 350,
      additionalDetails: "Expert in cancer diagnosis, treatment, and blood disorders."
    },
    {
      id: 12,
      name: "Dr. Tariq Shah",
      specialties: ["Urologist", "Andrologist"],
      appointmentDays: ["Monday", "Wednesday", "Saturday"],
      hospital: "Urology Health Clinic",
      yearsOfExperience: 13,
      successfulOperations: 280,
      additionalDetails: "Specializes in urinary tract and male reproductive health."
    },
    {
      id: 13,
      name: "Dr. Samira Hadi",
      specialties: ["Rheumatologist", "Immunologist"],
      appointmentDays: ["Tuesday", "Thursday", "Friday"],
      hospital: "Arthritis and Rheumatology Center",
      yearsOfExperience: 15,
      successfulOperations: 230,
      additionalDetails: "Expert in treating arthritis and autoimmune diseases."
    },
    {
      id: 14,
      name: "Dr. Hasan Qureshi",
      specialties: ["Pulmonologist", "Critical Care Medicine"],
      appointmentDays: ["Monday", "Wednesday", "Sunday"],
      hospital: "Lung Health Hospital",
      yearsOfExperience: 17,
      successfulOperations: 320,
      additionalDetails: "Specializes in lung and respiratory disorders."
    },
    {
      id: 15,
      name: "Dr. Safiya Kamal",
      specialties: ["Gastroenterologist", "Hepatologist"],
      appointmentDays: ["Tuesday", "Thursday", "Saturday"],
      hospital: "Digestive Health Center",
      yearsOfExperience: 20,
      successfulOperations: 450,
      additionalDetails: "Expert in digestive system and liver diseases."
    },
    {
      id: 16,
      name: "Dr. Khalid Farooq",
      specialties: ["Nephrologist", "Transplant Specialist"],
      appointmentDays: ["Wednesday", "Friday", "Sunday"],
      hospital: "Kidney Health Clinic",
      yearsOfExperience: 18,
      successfulOperations: 400,
      additionalDetails: "Focuses on kidney health, dialysis, and transplants."
    },
    {
      id: 17,
      name: "Dr. Laila Hassan",
      specialties: ["Immunologist", "Allergist"],
      appointmentDays: ["Monday", "Thursday", "Saturday"],
      hospital: "Allergy and Immunology Center",
      yearsOfExperience: 12,
      successfulOperations: 210,
      additionalDetails: "Specializes in immune system disorders and allergies."
    },
    {
      id: 18,
      name: "Dr. Omar Yasin",
      specialties: ["Hematologist", "Oncologist"],
      appointmentDays: ["Tuesday", "Friday", "Sunday"],
      hospital: "Blood Health Clinic",
      yearsOfExperience: 14,
      successfulOperations: 300,
      additionalDetails: "Expert in blood-related diseases and cancer treatments."
    },
    {
      id: 19,
      name: "Dr. Nadia Tariq",
      specialties: ["Infectious Disease Specialist", "Travel Medicine"],
      appointmentDays: ["Monday", "Wednesday", "Saturday"],
      hospital: "Infectious Disease Center",
      yearsOfExperience: 9,
      successfulOperations: 100,
      additionalDetails: "Focuses on infectious diseases and travel-related health issues."
    },
    {
      id: 20,
      name: "Dr. Faisal Karim",
      specialties: ["Plastic Surgeon", "Reconstructive Surgeon"],
      appointmentDays: ["Tuesday", "Thursday", "Saturday"],
      hospital: "Aesthetic Surgery Clinic",
      yearsOfExperience: 15,
      successfulOperations: 550,
      additionalDetails: "Specializes in cosmetic and reconstructive surgeries."
    }
  ];
  
  



export default function Appointment (){
    return(
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
                    src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(doctor.name)}`}
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
                <Button className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700">
                  Book Appointment
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-indigo-600 border-indigo-600 hover:bg-indigo-100">
                  View More Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>

        </div>
    )
}