import React from 'react'

const Header = () => {


    return (
        <div>

            <nav className='px-[10%] flex justify-between items-center'>
                <div>
                    <img className='mt-2' src="src/assets/brand_logo.png" alt="" srcset="" />
                </div>

                {/* list of header names */}
                <ol className='flex space-x-10 font-poppins uppercase ' style={{ 'font-weight': '600', 'font-size': '10px' }}>
                    <li href='#'>Home</li>
                    <li href='#'>About</li>
                    <li href='#'>About</li>
                    <li href='#'>Contact</li>
                </ol>

                <button className='bg-red-700 px-4 py-1 text-white font-semibold'>Login</button>
            </nav>
        </div >


    )
}

export default Header
