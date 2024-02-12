import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SIDEBAR_LINKS } from '../../config/constants'
import classNames from 'classnames'

const Sidebar = () => {
    return (
        <>
            <div className="relative justify-center w-48 md:justify-center xl:w-full md:flex">
                <div className='p-2 justify-center flex my-3 h-16 xl:hidden'>
                    <img src={require("../../assets/image/FuntechGramLogoB.png")} alt="logo" className='h-full' />
                </div>
                <div className='p-2 justify-center flex my-3 h-16 minxl:hidden md:hidden'>
                    <img src={require("../../assets/image/FunW.png")} alt="logo" className='h-full' />
                </div>
                <div className='mt-5 md:flex md:mt-0 w-full justify-evenly'>
                    {/* {SIDEBAR_LINKS.map((link) => ( */}
                        <SidebarLink key={SIDEBAR_LINKS.key} link={SIDEBAR_LINKS[0]} />
                        <div className='md:hidden'>
                            <SidebarLink key={SIDEBAR_LINKS.key} link={SIDEBAR_LINKS[1]} />
                        </div>
                        <SidebarLink key={SIDEBAR_LINKS.key} link={SIDEBAR_LINKS[2]} />
                        <SidebarLink key={SIDEBAR_LINKS.key} link={SIDEBAR_LINKS[3]} />
                        <SidebarLink key={SIDEBAR_LINKS.key} link={SIDEBAR_LINKS[4]} />
                        <SidebarLink key={SIDEBAR_LINKS.key} link={SIDEBAR_LINKS[5]} />
                    {/* ))} */}
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