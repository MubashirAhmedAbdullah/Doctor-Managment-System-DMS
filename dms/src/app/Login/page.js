"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Github, Mail, Lock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
        console.log('Login attempted with:', email, password, 'Remember me:', rememberMe)
    }

    return (
        <div className="max-h-screen pt-16">
            <div className="flex items-center justify-center  bg-indigo-50 p-4">
                <Card className="w-full max-w-md shadow-xl">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold text-center text-indigo-900">Welcome Back</CardTitle>
                        <CardDescription className="text-center text-indigo-600">
                            Enter your credentials to access DocManager
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form onSubmit={handleSubmit} className="space-y-4">
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
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" size={18} />
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
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="remember"
                                        checked={rememberMe}
                                        onCheckedChange={(checked) => setRememberMe(checked)}
                                    />
                                    <label htmlFor="remember" className="text-sm text-indigo-900 cursor-pointer">Remember me</label>
                                </div>
                                <Link href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                                Log in
                                <ArrowRight className="ml-2" size={18} />
                            </Button>
                        </form>
                        <div>
                            <Separator>
                                <span className="px-2 text-sm text-slate-500">Or continue with</span>
                            </Separator>
                            <div className="grid grid-cols-2 gap-4 mt-10">
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
                            Don't have an account?{' '}
                            <Link href={"/Signup"} className="font-semibold text-indigo-600 hover:underline">
                                Create one here
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
