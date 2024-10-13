'use client'

import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react";



export function Navbar(){
   const {userId} = useAuth();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect

   return <div>
    Navbar
   </div>
}