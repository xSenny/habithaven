'use client'
import React from 'react'
import { sidebarLinks } from '@/lib/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/actions/auth.action'

type SidebarItemProps = {
  label: string,
  link: string,
  active: boolean
}

const Sidebar = () => {

  const pathname = usePathname();

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await getUser(),
  });

  return (
    <div className="h-screen fixed top-0 left-0 w-64 border-r-2 flex flex-col items-center gap-4 px-4 pt-24">
      {sidebarLinks.map(({link, label}) => (
        <SidebarItem label={label} link={link} key={link} active={pathname === link}/>
      ))}
      {!isLoading && data?.role === 'admin' && (
        <Link href={'/admin'} className={`w-full hover:bg-input py-4 pl-2 rounded-lg hover:border-primary border-2 border-background hover:text-primary cursor-pointer text-center ${pathname === '/admin' && 'text-primary border-primary bg-input'}`}>
          Admin
        </Link>
      )}
    </div>
  )
}

export default Sidebar


const SidebarItem = ({link, label, active}: SidebarItemProps) => {
  return (
    <Link href={link} className={`w-full hover:bg-input py-4 pl-2 rounded-lg hover:border-primary border-2 border-background hover:text-primary cursor-pointer text-center ${active && 'text-primary border-primary bg-input'}`}>
      {label}
    </Link>
  )
}