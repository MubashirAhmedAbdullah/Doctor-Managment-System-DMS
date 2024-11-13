import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Phone, Tooth, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="border h-screen w-7/12">
      <div>
        <h1 className="break-words text-6xl font-bold pt-14">
          Get Ready For Your Best Ever <span className="underline" style={{color: "#1377f8"}}>Dental Experience!</span>
        </h1>
      </div>


      <div className="pt-10 text-xl text-gray-400">
        We use only the best quality materiels on th market in order to provide the best productsto our patients, So don't worry about anything and bookk yourself.
      </div>


      <div className="mt-12 gap-5">
        <Button className = "p-5 w-60 text-xl h-12 rounded-lg" style={{backgroundColor: "#1376f8"}}>Book An Appoinment</Button>
        <Button className = "p-5 w-60 text-xl h-12 rounded-lg" style={{backgroundColor: "#1376f8"}}>Dental </Button>
      </div>


      </div>
    </div>
  );
}
