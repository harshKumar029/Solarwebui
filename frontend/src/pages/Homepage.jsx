import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import logo from '../assets/logo.svg'
import bgimg from '../assets/bgimg.webp'
import architech1 from '../assets/architecture 1.webp'
import architech2 from '../assets/architecture 2.webp'
import architech3 from '../assets/architecture 3.webp'
import solarvillage from '../assets/solar-panel3 1.webp'
import house_material1 from '../assets/house_material 1.webp'
import house_material2 from '../assets/house_material 2.webp'
import house_material3 from '../assets/house_material 3.webp'
import people from '../assets/people.jpeg'
import tick from '../assets/tick.svg'

import product1 from '../assets/product1.webp'
import product2 from '../assets/product2.webp'
import product3 from '../assets/product3.webp'
import product4 from '../assets/product4.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Homepage = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <nav className={`flex fixed md:flex-row items-center h-[92px] w-[100%] z-20 justify-between p-4 transition-colors duration-300 ${isScrolled ? 'bg-[#15151599]' : 'bg-transparent'}`}>
                <div className='flex items-center w-[87%] justify-between max-w-[90%] m-auto'>
                    <img src={logo} alt="Logo" className=" w-[7rem] mb-4 md:mb-0" />
                    <div className='flex items-center gap-16'>
                        <ul className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-[#B2B2B2]">
                            <li className="hover:text-[#5b5b5b] cursor-pointer">Home</li>
                            <li className="hover:text-[#5b5b5b] cursor-pointer">About</li>
                            <li className="hover:text-[#5b5b5b] cursor-pointer">Products</li>
                            <li className="hover:text-[#5b5b5b] cursor-pointer">Contact us</li>
                        </ul>
                        <button className="hidden md:block mt-4 md:mt-0 border border-[#B2B2B2] text-[#B2B2B2] py-1 px-6 rounded hover:border-[#5b5b5b]">
                            Why Us
                        </button>
                    </div>
                </div>
            </nav>

            <div className="h-[100vh] w-full bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bgimg})` }} data-aos="fade-up">
                <h1 className="text-[#B2B2B2] max-w-[45rem] font-extrabold text-5xl mb-4 text-center">Harness the Power of the Sun with Our Advanced Solar Plates</h1>
                <div className="flex space-x-8 mt-4">
                    <button className="bg-[#D6D5D5] text-black py-1 px-5 rounded hover:bg-[#ababab]">Learn More</button>
                    <button className="bg-[#B89E40] text-black py-1 px-8 rounded hover:bg-[#9a8536]">Buy Now</button>
                </div>
            </div>


            <div className='max-w-[80%] m-auto flex flex-wrap justify-between mt-10 pt-10 border-t border-[#4E4E4E]' data-aos="fade-up">
                <img data-aos="fade-right" className="w-[30%] mb-4" src={architech1} alt='architech1' />
                <img  className="w-[30%] mb-4" src={architech2} alt='architech2' />
                <img data-aos="fade-left" className="w-[30%] mb-4" src={architech3} alt='architech3' />
            </div>


            <div className='my-[10rem] max-w-[80%] mx-auto pt-10' data-aos="fade-up">
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='mb-8 lg:mb-0 lg:mr-8' >
                        <h1 className='text-[#B2B2B2] max-w-[35rem] font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4'>
                            Company's domestic sales perform over 300Cr in the last 3 months.
                        </h1>
                        <div className='flex space-x-8 mt-8'>
                            {/* <button className="bg-[#D6D5D5] text-black py-1 px-5 rounded hover:bg-[#ababab]">Learn More</button> */}
                            <button className="bg-[#B89E40] text-black py-1 px-8 rounded hover:bg-[#9a8536]">Buy Now</button>
                        </div>
                    </div>
                    <div className='max-w-[26rem]'>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Pharetra aenean nostra elit diam condimentum mauris mollis at. Nascetur laoreet dis urna nam rhoncus tristique curae consectetur. Platea curabitur maecenas ante praesent posuere. Quis pretium mattis lectus ornare; nulla lacus eget. Donec ante vulputate velit justo; tellus justo class semper Pulvinar volutpat dis suspendisse fusce ultrices vulputate. Rutrum pretium egestas cubilia dui lobortis, elit curae condimentum. Nisi sapien sed per egestas senectus sed sociosqu. Augue mi convalli</p>
                    </div>
                </div>
            </div>


            <div className='max-w-[80%] m-auto mt-10 pt-10' data-aos="fade-up">
                <h1 className='text-[#B2B2B2] max-w-[35rem] font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4'>
                    Why <span className='text-[#B89E40]'> EcoSun?</span>
                </h1>
                <div className='flex flex-col lg:flex-row mt-11 items-center lg:items-start justify-between'>
                    <div className='max-w-[35rem] space-y-8 lg:space-y-20 mb-8 lg:mb-0'>
                        <div className='space-y-3'>
                            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>Sustainable Solutions</h2>
                            <h3 className='text-lg sm:text-xl font-regular text-[#6D6D6D]'>Harnessing the Power of Nature</h3>
                        </div>
                        <p className='text-[#4F4F4F]'>
                            EcoSun is dedicated to providing environmentally friendly solar energy solutions that reduce your carbon footprint and lower your energy bills. Our innovative technology and commitment to sustainability ensure that you’re making a positive impact on the planet while enjoying reliable and efficient energy.
                        </p>
                    </div>
                    <img className="w-full sm:w-[48%] lg:w-[25rem]" src={solarvillage} alt='solarvillage' />
                </div>
            </div>


            <div className='max-w-[80%] m-auto my-[10rem] pt-10' data-aos="fade-up">
                <div className='flex flex-col-reverse lg:flex-row mt-11 items-center justify-between'>
                    <div className='flex flex-col space-y-5 lg:space-y-5 lg:flex-col mt-8 lg:mt-0'>
                        <img data-aos="fade-up" className="w-full sm:w-[48%] lg:w-[75%]" src={house_material1} alt='house_material1' />
                        <img data-aos="fade-up" className="w-full sm:w-[48%] lg:w-[75%]" src={house_material3} alt='house_material2' />
                        <img data-aos="fade-up" className="w-full sm:w-[48%] lg:w-[75%]" src={house_material2} alt='house_material3' />
                    </div>
                    <div className='max-w-[35rem] mt-10 lg:mt-0 lg:ml-10 space-y-10'>
                        <h1 className='text-[#B2B2B2] font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4'>
                            Material <br /> <span className='text-[#B89E40]'> Characteristics</span>
                        </h1>
                        <div className='space-y-3'>
                            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>What material we use.</h2>
                        </div>
                        <p className='text-[#4F4F4F]'>
                            EcoSun is dedicated to providing environmentally friendly solar energy solutions that reduce your carbon footprint and lower your energy bills. Our innovative technology and commitment to sustainability ensure that you’re making a positive impact on the planet while enjoying reliable and efficient energy.
                        </p>
                    </div>
                </div>
            </div>


            <div className='my-[10rem] max-w-[80%] m-auto pt-10' data-aos="fade-up">
                <h1 className='text-[#B2B2B2] max-w-[35rem] font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4'>
                    Client <br /> <span className='text-[#B89E40]'>Testimonials </span>
                </h1>
                <div className='flex flex-col lg:flex-row mt-11 lg:items-center  justify-between'>
                    <div className='space-y-4 '>
                        <p className='flex gap-3 text-lg sm:text-xl font-semibold items-center'>
                            <img className='w-6 sm:w-8' src={tick} alt='tick' /> Fast Return policy
                        </p>
                        <p className='flex gap-3 text-lg sm:text-xl font-semibold items-center'>
                            <img className='w-6 sm:w-8' src={tick} alt='tick' /> Top Quality panels
                        </p>
                        <p className='flex gap-3 text-lg sm:text-xl font-semibold items-center'>
                            <img className='w-6 sm:w-8' src={tick} alt='tick' /> 30 Years product guarantee
                        </p>
                    </div>
                    <div className='mt-10 lg:mt-0 lg:ml-10 max-w-[35rem] p-5 rounded-md bg-[#191919]'>
                        <div className='flex flex-col lg:flex-row lg:space-x-4'>
                            <img className='w-24 h-24 rounded-full object-cover' src={people} alt='people' />
                            <p className='mt-4 lg:mt-0'>
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Pharetra aenean nostra elit diam condimentum mauris mollis at. Nascetur laoreet dis urna nam rhoncus tristique convallis rutrum parturient orci arcu purus torquent. Mattis placerat vel ornare praesent himenaeos. Mi ultrices vivamus et; nibh purus cras. Purus etiam netus non bibendum molestie tincidunt mattis. Adipiscing a laoreet sem ipsu
                            </p>
                        </div>
                        <p className='mt-4 lg:mt-0 text-right'>
                            ⎯ Saw Jam
                        </p>
                    </div>
                </div>
            </div>


            <div className='my-[10rem] max-w-[80%] m-auto pt-10' data-aos="fade-up">
                <h1 className='text-[#B2B2B2] font-extrabold text-4xl sm:text-5xl mb-24'>
                    Our <span className='text-[#B89E40]'> Products</span>
                </h1>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                    <img className='w-full h-80 cursor-pointer lg:max-w-[85%] rounded-lg' src={product1} alt='Product 1' />
                    <img className='w-full h-80 cursor-pointer  lg:max-w-[85%] rounded-lg' src={product2} alt='Product 2' />
                    <img className='w-full h-80 cursor-pointer lg:max-w-[85%] rounded-lg' src={product3} alt='Product 3' />
                    <img className='w-full h-80 cursor-pointer lg:max-w-[85%] rounded-lg' src={product4} alt='Product 4' />

                </div>
            </div>



            <div className="mt-8 mb-5 text-[#8f8f8f] rounded-lg py-10 max-w-[84%] mx-auto bg-[#1c1c1c]" data-aos="fade-up">
                <div className='max-w-[84%] m-auto mb-10'>
                    <img src={logo} alt="Logo" className=" w-[10rem] " />
                </div>
                <div className="max-w-[84%] m-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 px-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul>
                            <li><a href="/about-us" className="hover:underline">About Us</a></li>
                            <li><a href="/careers" className="hover:underline">Careers</a></li>
                            <li><a href="/investor-relations" className="hover:underline">Investor Relations</a></li>
                            <li><a href="/report" className="hover:underline">Report</a></li>
                        </ul>
                </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul>
                            <li><a href="/faq" className="hover:underline">FAQ</a></li>
                            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Blog</h3>
                        <ul>
                            <li><a href="/blog" className="hover:underline">Latest Posts</a></li>
                            <li><a href="/blog/category/industry" className="hover:underline">Industry Insights</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Promotions</h3>
                        <ul>
                            <li><a href="/promotions" className="hover:underline">Current Offers</a></li>
                            <li><a href="/promotions/subscribe" className="hover:underline">Subscribe for Deals</a></li>
                        </ul>
                    </div>
                    <div className=" w-min col-span-2 sm:col-span-1 lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-white hover:text-gray-400" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://twitter.com" className="text-white hover:text-gray-400" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://instagram.com" className="text-white hover:text-gray-400" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://linkedin.com" className="text-white hover:text-gray-400" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://youtube.com" className="text-white hover:text-gray-400" aria-label="YouTube">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center gap-8 font-semibold text-sm text-center mt-8">
                    <p>&copy; 2024 EcoSun. All rights reserved.</p>
                    <p>
                        <a href="/privacy-policy" className=" hover:underline">Privacy Policy</a> |
                        <a href="/terms-of-service" className=" hover:underline">Terms of Service</a>
                    </p>
                </div>
            </div>



        </div>
    )
}

export default Homepage