"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'




export default function CreateAccount(){


    const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = ( React) => {
    e.preventDefault()
    // Handle sign-up logic here
    console.log('Sign-up attempted with:', { userName, email, phoneNumber, password, confirmPassword })
  }



    return(
         <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center text-indigo-900">Create an Account</CardTitle>
          <CardDescription className="text-center text-indigo-600">
            Sign up to join DocManager and start managing your practice
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userName" className="text-indigo-900">User Name</Label>
              <div className="relative">
                <Input
                  id="userName"
                  type="text"
                  placeholder="Dr. John Doe"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="pl-10"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-indigo-900">Email</Label>
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
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-indigo-900">Phone Number</Label>
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
            <div className="space-y-2">
              <Label htmlFor="password" className="text-indigo-900">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-indigo-900">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="pl-10"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
              </div>
            </div>
            <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
              Sign Up
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </form>

          <div>
            <Separator>
              <span className="px-2 text-sm text-slate-500">Or sign up with</span>
            </Separator>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button variant="outline" className="w-full border-indigo-200 hover:bg-indigo-50">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full border-indigo-200 hover:bg-indigo-50">
                <Mail className="w-5 h-5 mr-2" />
                Google
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-indigo-600 hover:underline">
              Log in here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
    )
}