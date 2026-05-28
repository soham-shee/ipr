import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className='bg-black py-12 px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-7xl mx-auto'>
            
                    <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            
                        <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                            <a href="https://www.legalshades.com">
                                <img src="https://ik.imagekit.io/sohamshee/Legal%20Shades/logo_S1yKpT4vL.png" alt="Logo" className='w-50' />
                            </a>
                            <div className='w-full max-w-52 h-px mt-8 bg-linear-to-r from-black via-white/25 to-black'></div>
                            <p className='text-sm text-white/60 mt-6 max-w-sm leading-relaxed'>
                                Partner with us to secure your ideas and grow with confidence.
                            </p>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className='text-sm text-white font-medium'>Important Links</h3>
                            <div className="flex flex-col gap-2 mt-2">
                                <div className="flex flex-col gap-2 mt-1">
                                    <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">
                                        Home
                                    </Link>

                                    <Link to="/trademark" className="text-sm text-white/60 hover:text-white transition-colors">
                                        Trademark
                                    </Link>

                                    <Link to="/design" className="text-sm text-white/60 hover:text-white transition-colors">
                                        Design
                                    </Link>

                                    <Link to="/copyright" className="text-sm text-white/60 hover:text-white transition-colors">
                                        Copyright
                                    </Link>

                                    <Link to="/misc" className="text-sm text-white/60 hover:text-white transition-colors">
                                        Misc.
                                    </Link>
                                    </div>
                            </div>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className='text-sm text-white font-medium'>Social Links</h3>
                            <div className="flex flex-col gap-2 mt-2">
                                {/* <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Twitter</a> */}
                                <a href="https://www.instagram.com/legalshades?igsh=aTMxbGR2dW53ZnZ1&utm_source=qr" className='text-sm text-white/60 hover:text-white transition-colors'>Instagram</a>
                                <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Youtube</a>
                                <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Linkedin</a>
                            </div>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className='text-sm text-white font-medium'>Reach out to us</h3>
                            <div className="flex items-center border gap-2 border-white/20 h-13 max-w-80 w-full rounded-full overflow-hidden mt-4">
                                <input type="email" placeholder="Enter your email.." className="w-full h-full pl-6 outline-none text-sm bg-transparent text-white placeholder-white/60 placeholder:text-xs" required />
                                <button type="submit" className="bg-linear-to-b from-[#5623D8] to-[#7B53E2] active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer mr-1.5">Contact Us</button>
                            </div>
                        </div>
            
                    </div>
            
                    <div className='w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black'></div>
            
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className='text-xs text-white/60'>© 2026 Legal Shades. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};