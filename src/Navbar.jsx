import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`bg-gray-800 text-white p-4 relative ${isScrolled ? 'fixed top-0 left-0' : ''}`}>
            <div className={`text-2xl font-bold mb-4 font-serif tracking-widest`}>Verdure</div>

            <div className="md:hidden">
                <button onClick={toggleMobileMenu}>
                    <svg
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>


            <nav className="hidden md:block">
                <ul>
                    <div class="flex">
                        <svg class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <li className="mb-2 pl-1 hover:bg-red-900 w-full hover:rounded-lg"><a href="#">Home</a></li>
                    </div>

                    <div class="flex">
                        <svg class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <li className="mb-2 pl-1 hover:bg-red-900 w-full hover:rounded-lg"><a href="#">Appointments</a></li>
                    </div>

                    <div class="flex">
                        <svg class="h-5 w-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="21 12 17 12 14 20 10 4 7 12 3 12" /></svg>
                        <li className="mb-2 pl-1 hover:bg-red-900 w-full hover:rounded-lg"><a href="#">Prescribed Treatments</a></li>
                    </div>

                    <div class="flex">
                        <svg class="h-5 w-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                        <li className="mb-2 pl-1 hover:bg-red-900 w-full hover:rounded-lg"><a href="#">Profile</a></li>
                    </div>
                </ul>
            </nav>

            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <ul>
                        <div class="flex">
                            <svg class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <li className="mb-2 pl-1"><a href="#">Home</a></li>
                        </div>

                        <div class="flex">
                            <svg class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <li className="mb-2 pl-1"><a href="#">Appointments</a></li>
                        </div>

                        <div class="flex">
                            <svg class="h-5 w-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="21 12 17 12 14 20 10 4 7 12 3 12" /></svg>
                            <li className="mb-2 pl-1"><a href="#">Prescribed Treatments</a></li>
                        </div>

                        <div class="flex">
                            <svg class="h-5 w-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                            <li className="mb-2 pl-1"><a href="#">Profile</a></li>
                        </div>
                    </ul>
                </div>
            )}

            <div className={`absolute bottom-4 left-4`}>
                <hr className="border-t border-gray-600 my-2" />

                <div className="flex items-center">
                    <img src="https://placekitten.com/40/40" alt="User" className="rounded-full h-8 w-8 mr-2" />
                    <div>
                        <div className="text-sm font-semibold">John Doe</div>
                        <div className="text-xs text-gray-500">john.doe@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
