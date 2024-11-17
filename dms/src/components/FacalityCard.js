import Image from 'next/image'
import { Calendar, Users, FileText, CreditCard, Activity, Package } from 'lucide-react'

const features = [
  {
    title: "Appointment Management",
    description: "Efficiently schedule and manage patient appointments with our intuitive calendar system.",
    icon: Calendar,
  },
  {
    title: "Patient Records",
    description: "Securely store and access comprehensive patient records, including medical history and treatment plans.",
    icon: Users,
  },
  {
    title: "Medical Charting",
    description: "Create and maintain detailed medical charts with our user-friendly interface.",
    icon: FileText,
  },
  {
    title: "Billing & Invoicing",
    description: "Streamline your billing process with integrated invoicing and payment tracking.",
    icon: CreditCard,
  },
  {
    title: "Analytics & Reporting",
    description: "Gain valuable insights into your practice with comprehensive analytics and customizable reports.",
    icon: Activity,
  },
  {
    title: "Inventory Management",
    description: "Keep track of medical supplies and equipment with our built-in inventory management system.",
    icon: Package,
  },
]

export default function FeatureCards() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-indigo-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-indigo-900">{feature.title}</h3>
              </div>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}