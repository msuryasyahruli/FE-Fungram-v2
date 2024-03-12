import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SIDEBAR_LINKS } from '../../config/constants'
import classNames from 'classnames'

const Sidebar = () => {
    const SIDEBAR_LINKS_MOBILE = SIDEBAR_LINKS.slice(0, 1).concat(SIDEBAR_LINKS.slice(2).slice(0,-1))
    // console.log(SIDEBAR_LINKS_MOBILE)
    return (
        <>
            <div className="w-48 xl:w-full md:flex">
                <div className='p-2 justify-center flex my-3 h-16 md:hidden'>
                    <img src={require("../../assets/image/FuntechGramLogoB.png")} alt="logo" className='h-full xl:hidden' />
                    <img src={require("../../assets/image/FunW.png")} alt="logo" className='h-full minxl:hidden' />
                </div>
                <div className='md:flex w-full justify-around'>
                    {SIDEBAR_LINKS_MOBILE.map((link) => (
                        <SidebarLink key={link.key} link={link} />
                    ))}
                </div>
                <div className="bottom-0 absolute w-full md:hidden">
                    <SidebarLink key={SIDEBAR_LINKS.key} link={SIDEBAR_LINKS[6]} />
                </div>
            </div>
        </>
    )
}

export default Sidebar

const linkClass =
    'flex items-center gap-3 font-light minmd:px-4 hover:bg-gray-300 hover:no-underline hover:text-gray active:font-medium rounded h-11 transition-all text-base minmd:m-2 md:py-6 md:w-full md:justify-center'

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