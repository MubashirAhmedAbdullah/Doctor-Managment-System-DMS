"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import {
  CalendarIcon,
  Camera,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  Book,
  Shield,
} from "lucide-react";

export default function Profile() {
  const [date, setDate] = useState();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 md:p-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <Avatar className="w-24 h-24 md:w-32 md:h-32">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="User Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left flex-grow">
            <CardTitle className="text-2xl md:text-3xl font-bold text-indigo-900">John Doe</CardTitle>
            <CardDescription className="text-indigo-600">Patient</CardDescription>
            <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
              <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                Verified
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Active
              </Badge>
            </div>
          </div>
          <Button className="w-full md:w-auto mt-4 md:mt-0 bg-indigo-600 text-white hover:bg-indigo-700">
            <Camera className="mr-2 h-4 w-4" /> Change Photo
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal" className="mt-6">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 flex items-center justify-center">
              <TabsTrigger value="personal" className="w-full">Personal Info</TabsTrigger>
              {/* <TabsTrigger value="medical" className="w-full">Medical History</TabsTrigger>
              <TabsTrigger value="settings" className="w-full">Account Settings</TabsTrigger> */}
            </TabsList>
            <TabsContent value="personal" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 000-0000" className="w-full" />
                </div>
                <div className="space-y-2">
                  <Label>Date of Birth</Label>
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
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select defaultValue="male">
                    <SelectTrigger id="gender" className="w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Enter your full address" className="w-full resize-none" />
              </div>
            </TabsContent>
            <TabsContent value="medical" className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="allergies">Allergies</Label>
                <Textarea id="allergies" placeholder="List any allergies" className="w-full resize-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="medications">Current Medications</Label>
                <Textarea id="medications" placeholder="List current medications" className="w-full resize-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="conditions">Existing Medical Conditions</Label>
                <Textarea id="conditions" placeholder="List any existing medical conditions" className="w-full resize-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="surgeries">Past Surgeries</Label>
                <Textarea id="surgeries" placeholder="List any past surgeries" className="w-full resize-none" />
              </div>
            </TabsContent>
            <TabsContent value="settings" className="mt-4 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive email about your account activity.</p>
                </div>
                <Switch id="notifications" className="mt-2 md:mt-0" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
                </div>
                <Switch id="twoFactor" className="mt-2 md:mt-0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Change Password</Label>
                <Input id="newPassword" type="password" placeholder="Enter new password" className="w-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm new password" className="w-full" />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-2">
          <Button variant="outline" className="w-full md:w-auto">Cancel</Button>
          <Button className="w-full md:w-auto bg-indigo-600 text-white hover:bg-indigo-700">Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
