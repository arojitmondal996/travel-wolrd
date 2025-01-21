import { navLinks } from '@/constanr/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"
    return (
        <div>
            {/* Overlay */}
            <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}>
            </div>
            {/* Navlink */}
            <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
                {navLinks.map((link) => {
                    return <Link key={link.id} href={link.url}>
                        <p className='text-white w-[180px] text-[16px] ml-12 pb-1 border-white sm:text-[30px]'>
                            {link.label}
                        </p>
                    </Link>
                })}
                {/* close button */}
                <CgClose onClick={closeNav} className='absolute top-[0.1rem] right-[1.7rem] sm:w-8 sm:h-8 w-6 h-6'></CgClose>
            </div>
        </div>
    );
};

export default MobileNav;