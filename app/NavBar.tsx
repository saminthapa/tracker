import Link from 'next/link'
import React from 'react'
import { VscDebug } from "react-icons/vsc";

const NavBar = () => {
    const links = [
        { label: 'Dashboard', herf: '/'},
        { label: 'Issues', herf: '/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><VscDebug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link =>
            <Link 
            key={link.herf} 
            className='text-zinc-500 hover:text-zinc-800 transition-colors' 
            href={link.herf}>{link.label}</Link>)}
            
        </ul>
    </nav>
  )
}

export default NavBar
