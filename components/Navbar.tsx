'use client'

import { useAuth } from "@clerk/nextjs"



export function Navbar(){
   const {userId} = useAuth()
}