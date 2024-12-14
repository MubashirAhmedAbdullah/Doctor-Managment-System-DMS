"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {  Calendar, Home, LogIn, Menu, Settings, User, UserPlus, } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'

const mainNavItems = [
    { title: "Home", href: "/", icon: Home },
    // { title: "Doctors", href: "/patients", icon: Users },
    { title: "Doctors", href: "/Doctors", icon: Calendar },
    { title: "Profile", href: "/Profile", icon: User },
    // { title: "Settings", href: "/settings", icon: Settings },

    

]

const secondNainNavItems = [
    { title: "Home", href: "/", icon: Home },
    // { title: "Doctors", href: "/patients", icon: Users },
    { title: "Doctors", href: "/Doctors", icon: Calendar },
    // { title: "Profile", href: "/Profile", icon: User },
    // { title: "Settings", href: "/settings", icon: Settings },

    

]

// const moreNavItems = [
//     { title: "Billing", href: "/billing", icon: CreditCard },
//     { title: "Staff", href: "/staff", icon: Users },
//     { title: "Settings", href: "/settings", icon: Settings },
//     { title: "Profile", href: "/profile", icon: User }
// ]

export default function Navigationbar() {

    const pathname = usePathname()
    const session = true
    



    return (
        <div>
            <nav className="bg-indigo-50 border-b border-indigo-200 container mx-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <Link href="/" className="flex-shrink-0 flex items-center">
                                <div>
                                    <Image src={"/favicon.jpg"}
                                    width={80}
                                    height={80}
                                    alt='Happy Health' />
                                </div>
                                <span className="ml-2 text-xl font-bold text-indigo-800">Happy Health</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex md:items-center md:space-x-4">

                            { session ? (
                               mainNavItems.map((item) => (
                                <Button
                                    key={item.href}
                                    variant={pathname === item.href ? "secondary" : "ghost"}
                                    className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100"
                                    asChild
                                >
                                    <Link href={item.href}>
                                        <item.icon className="h-4 w-4 mr-2" />
                                        {item.title}
                                    </Link>
                                </Button>
                            )) 
                            ) : (
                                secondNainNavItems.map((item) => (
                                    <Button
                                        key={item.href}
                                        variant={pathname === item.href ? "secondary" : "ghost"}
                                        className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100"
                                        asChild
                                    >
                                        <Link href={item.href}>
                                            <item.icon className="h-4 w-4 mr-2" />
                                            {item.title}
                                        </Link>
                                    </Button>
                                ))
                            )}
                            {/* {mainNavItems.map((item) => (
                                <Button
                                    key={item.href}
                                    variant={pathname === item.href ? "secondary" : "ghost"}
                                    className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100"
                                    asChild
                                >
                                    <Link href={item.href}>
                                        <item.icon className="h-4 w-4 mr-2" />
                                        {item.title}
                                    </Link>
                                </Button>
                            ))} */}
                            {/* <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100">
                                        <ChevronDown className="h-4 w-4 mr-2" />
                                        More
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56 bg-white">
                                    {moreNavItems.map((item) => (
                                        <DropdownMenuItem key={item.href} asChild>
                                            <Link
                                                href={item.href}
                                                className="flex items-center text-slate-700 hover:bg-indigo-50 hover:text-indigo-800"
                                            >
                                                <item.icon className="h-4 w-4 mr-2" />
                                                {item.title}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu> */}
                        </div>
                        <div className="hidden md:flex md:items-center md:space-x-4">
                            <Link href={"/Login"}>
                                <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100">
                                    <LogIn className="h-4 w-4 mr-2" />
                                    Login
                                </Button>
                            </Link>
                            <Link href={"/Signup"}>
                                <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                                    <UserPlus className="h-4 w-4 mr-2" />
                                    Create Account
                                </Button>
                            </Link>
                        </div>
                        <div className="flex items-center md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100">
                                        <Menu className="h-6 w-6" />
                                        <span className="sr-only">Open main menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                    <nav className="flex flex-col space-y-4 mt-4">
                                        {mainNavItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${pathname === item.href
                                                    ? 'bg-indigo-100 text-indigo-800'
                                                    : 'text-slate-600 hover:bg-indigo-50 hover:text-indigo-800'
                                                    }`}
                                            >
                                                <item.icon className="h-5 w-5 mr-3" />
                                                {item.title}
                                            </Link>
                                        ))}
                                        {/* {moreNavItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-800 rounded-md"
                                            >
                                                <item.icon className="h-5 w-5 mr-3" />
                                                {item.title}
                                            </Link>
                                        ))} */}
                                        <hr className="border-indigo-200" />
                                        <Link href={"/Login"}
                                            className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-800 rounded-md"
                                        >
                                            <LogIn className="h-5 w-5 mr-3" />
                                            Login
                                        </Link>
                                        <Link
                                            href={"/Signup"}
                                            className="flex items-center px-4 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 rounded-md"
                                        >
                                            <UserPlus className="h-5 w-5 mr-3" />
                                            Create Account
                                        </Link>
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}