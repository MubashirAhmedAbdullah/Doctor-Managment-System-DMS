import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Happy Health</h2>
            <p className="text-indigo-200 mb-4">Streamlining healthcare management for better patient care.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-indigo-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-indigo-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-indigo-200 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/doctors" className="text-indigo-200 hover:text-white transition-colors">Our Doctors</Link></li>
              <li><Link href="/contact" className="text-indigo-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/appointments" className="text-indigo-200 hover:text-white transition-colors">Appointment Scheduling</Link></li>
              <li><Link href="/services/records" className="text-indigo-200 hover:text-white transition-colors">Medical Records</Link></li>
              <li><Link href="/services/billing" className="text-indigo-200 hover:text-white transition-colors">Billing Management</Link></li>
              <li><Link href="/services/telemedicine" className="text-indigo-200 hover:text-white transition-colors">Telemedicine</Link></li>
              <li><Link href="/services/pharmacy" className="text-indigo-200 hover:text-white transition-colors">Pharmacy Integration</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-300" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-300" />
                <a href="mailto:info@docmanager.com" className="text-indigo-200 hover:text-white transition-colors">info@docmanager.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-indigo-300" />
                <span>123 Healthcare Ave,<br />Medical District,<br />City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-indigo-200">
          <p>&copy; 2023 DocManager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}