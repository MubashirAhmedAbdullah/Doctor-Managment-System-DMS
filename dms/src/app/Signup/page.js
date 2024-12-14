"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, Lock, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Link from "next/link";

export default function CreateAccount() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [doctor, setDoctor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-up attempted with:", {
      userName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      doctor,
    });

    console.log(e);

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
      <Card className="w-full max-w-6xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-indigo-900">
            Create an Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="userName" className="text-indigo-900">
                Name
              </Label>
              <div className="relative">
                <Input
                  id="userName"
                  type="text"
                  placeholder="First Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="pl-10"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-indigo-900">
                Email
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-indigo-900">
                Phone Number
              </Label>
              <div className="relative">
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="pl-10"
                />
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-indigo-900">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-indigo-900">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="pl-10"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
              </div>
            </div>



            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-indigo-900">
                Apply For Doctor
              </Label>
              <div className="relative">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Apply For Doctor" />
                  </SelectTrigger>
                  <SelectContent
                    value={doctor}
                    id="doctor"
                    onChange={(e) => setDoctor(e.target.value)}>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>

              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-full flex justify-center">
              <Button type="submit" className="w-full max-w-sm bg-indigo-600 text-white hover:bg-indigo-700">
                Sign Up
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link className="font-semibold text-indigo-600 hover:underline" href={"/Login"}>Log in here</Link>

        </CardFooter>
      </Card>
    </div>
  );
}




