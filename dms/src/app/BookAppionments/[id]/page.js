"use client"


import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { CalendarIcon, Clock, DollarSign } from 'lucide-react';

const doctor = {
    id: 1,
    name: "Dr. Aisha Abdullah",
    photo: "/images/dr_aisha.jpg",
    specialties: ["Cardiologist", "Internal Medicine"],
    appointmentDays: ["Monday", "Wednesday", "Friday"],
    clinicTiming: "9:00 AM - 5:00 PM",
    hospitals: ["City Heart Center", "General Hospital", "Metropolitan Health Institute"],
    consultationFee: "$200"
};

export default function BookAppointmentForm() {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("")
    const [hospital, setHospital] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Appointment booked');
        console.log("e==>", e.target);

    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 md:p-8">
            <Card className="max-w-4xl mx-auto">
                <CardHeader className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                        <Image
                            src={doctor.photo}
                            alt={doctor.name}
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <CardTitle className="text-2xl font-bold text-indigo-900">{doctor.name}</CardTitle>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                            {doctor.specialties.map((specialty, index) => (
                                <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-800">
                                    {specialty}
                                </Badge>
                            ))}
                        </div>
                        <CardDescription className="mt-2 text-indigo-600">
                            Book an appointment with {doctor.name}
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" placeholder="John" required onValueChange={setName}/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" placeholder="Doe" required onValueChange={setLastName}/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" required onValueChange={setEmail}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required onValueChange={setPhone}/>
                        </div>
                        <div className="space-y-2">
                            <Label>Preferred Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        disabled={(date) => {
                                            const day = date.getDay();
                                            return ![1, 3, 5].includes(day); // Monday, Wednesday, Friday
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="time">Preferred Time</Label>
                            <Select>
                                <SelectTrigger id="time">
                                    <SelectValue placeholder="Select a time slot" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="09:00">09:00 AM</SelectItem>
                                    <SelectItem value="10:00">10:00 AM</SelectItem>
                                    <SelectItem value="11:00">11:00 AM</SelectItem>
                                    <SelectItem value="14:00">02:00 PM</SelectItem>
                                    <SelectItem value="15:00">03:00 PM</SelectItem>
                                    <SelectItem value="16:00">04:00 PM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="hospital">Hospital</Label>
                            <Select value={hospital} onValueChange={setHospital}>
                                <SelectTrigger id="hospital">
                                    <SelectValue placeholder="Select a hospital" />
                                </SelectTrigger>
                                <SelectContent>
                                    {doctor.hospitals.map((h, index) => (
                                        <SelectItem key={index} value={h}>{h}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="reason">Reason for Visit</Label>
                            <Textarea id="reason" placeholder="Please briefly describe your reason for the appointment" />
                        </div>
                        <div className="flex items-center space-x-2 text-indigo-600">
                            <DollarSign className="h-5 w-5" />
                            <span>Consultation Fee: {doctor.consultationFee}</span>
                        </div>
                        <CardFooter>
                            <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                                Book Appointment
                                <Clock className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
