import Link from 'next/link';
import logo from "../../public/LOGO-removebg-preview.png"
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className=" mx-auto px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image src={logo}
             alt= "logo"
             className='h-16 w-44 text-white mb-4'
             />
            <p className="text-gray-400 mb-6 max-w-md">
              Creating exceptional interior spaces that reflect your unique style and enhance your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.728-2.257 5.273-.686.781-1.557 1.302-2.568 1.302-.897 0-1.742-.442-2.257-1.302C9.104 11.888 8.377 10.018 8.208 8.16c-.169-1.858.442-3.728 1.803-5.273C10.697 2.106 11.568 1.585 12.568 1.585c.897 0 1.742.442 2.257 1.302 1.361 1.545 2.088 3.415 2.257 5.273z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Residential Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Commercial Design</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Space Planning</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Consultation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Design Street</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@luxeinteriors.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BlueShine Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}