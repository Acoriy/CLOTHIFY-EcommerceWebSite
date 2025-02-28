
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/'>
              <img src={Logo} alt="" className='w-32'/>
            </Link>
            <p className='mt-2 text-sm'>High-quality, sustainable clothing at affordable prices.</p>
            <p className='mt-2 text-sm'>123 Fashion St, Style City, NY 10001</p>
            <p className='text-sm'>Email: support@clothify.com</p>
            <p className='text-sm'>Phone: (123) 456-7890</p>
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Customer Service</h3>
            <ul className='mt-2 text-sm space-y-2'>
                <li className='hover:opacity-[0.7] hover:cursor-pointer '>Contact Us</li>
                <li className='hover:opacity-[0.7] hover:cursor-pointer '>Shipping & Returns</li>
                <li className='hover:opacity-[0.7] hover:cursor-pointer '>FAQs</li>
                <li className='hover:opacity-[0.7] hover:cursor-pointer '>Order Tracking</li>
                <li className='hover:opacity-[0.7] hover:cursor-pointer '>Size Guide</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 mt-2'>
                <FaFacebook size={22} className='hover:text-red-600 hover:cursor-pointer transition-transform duration-300 ease-in-out'/>
                <FaInstagram size={22} className='hover:text-red-600 hover:cursor-pointer transition-transform duration-300 ease-in-out'/>
                <FaTwitterSquare size={22} className='hover:text-red-600 hover:cursor-pointer transition-transform duration-300 ease-in-out'/>
                <FaPinterest size={22} className='hover:text-red-600 hover:cursor-pointer transition-transform duration-300 ease-in-out'/>
            </div>
        </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
            <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
            <form action="" className='mt-4 flex'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
                <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()}<span className='text-red-500'>Clothify</span>.All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
