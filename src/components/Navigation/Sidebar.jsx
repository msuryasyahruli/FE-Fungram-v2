import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SIDEBAR_LINKS, Setting_LINKS } from '../../config/constants'
import classNames from 'classnames'

const Sidebar = () => {
    return (
        <div className="relative justify-center w-48 md:justify-center xl:w-full md:flex">
            <div className='p-2 justify-center flex my-3 h-16 xl:hidden'>
                <img src={require("../../assets/image/FuntechGramLogoW.png")} alt="logo" className='h-full' />
            </div>
            <div className='p-2 justify-center flex my-3 h-16 minxl:hidden md:hidden'>
                <img src={require("../../assets/image/FunB.png")} alt="logo" className='h-full' />
            </div>
            <div className='mt-5 md:flex md:mt-0'>
                {SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className="bottom-0 absolute w-full md:hidden">
                {Setting_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar

const linkClass =
    'flex items-center gap-3 font-light px-4 hover:bg-gray-900 hover:no-underline hover:text-gray active:font-medium rounded h-11 transition-all text-base minmd:m-2 md:my-2'

function SidebarLink({ link }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'font-medium' : 'font-normal', linkClass)}
        >
            <span className="text-2xl">{pathname === link.path ? link.iconFill : link.icon}</span>
            <span className="text-lg mx-2 xl:hidden">{link.key}</span>
        </Link>
    )
}