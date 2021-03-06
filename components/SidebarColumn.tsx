import React from 'react'
import { HeroIcon } from '../types/app'

interface Props {
  Icon: HeroIcon
  title: string
}

const SidebarColumn = ({ Icon, title }: Props) => {
  return (
    <div className="flex items-center px-4 py-3 space-x-2 transition-all duration-200 rounded-full cursor-pointer max-w-fit hover:bg-gray-100 group">
      <Icon className="w-6 h-6" />
      <p className="hidden text-base font-light capitalize group-hover:text-twitter md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default SidebarColumn
