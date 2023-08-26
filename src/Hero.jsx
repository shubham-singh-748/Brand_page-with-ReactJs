import React from 'react'

const Hero = () => {
    return (
        <div className='px-[10%]'>
            <div className='flex mt-[10%] justify-between'>

                <div className="left_side uppercase w-[50%] flex-nowrap font-poppins">
                    <p className='text-8xl font-extrabold' style={{ 'font-weight': 800 }}>
                        your feet deserve the best
                    </p>
                    <p className='mt-[10%] text-2xl tracking-wide w-[80%]'>
                        your feet deserve the best and we're here to help you with our shoes. your feet deserve the best and we're here to help you with our shoes.
                    </p>

                    <div className='flex mt-[3%] gap-[5%]'>
                        <button className='bg-red-700 text-white px-3 text-2xl font-bold py-2 capitalize hover:bg-red-900'>shop now</button>
                        <button className='text-gray-500 border border-black border-x-2 px-3 text-2xl font-bold py-2 capitalize hover:text-gray-700'>category</button>
                    </div>
                    <p className='capitalize mt-[8%] text-gray-700 text-xl'>also availabe on</p>
                    <div className='flex items-center gap-[6%] mt-[2%]'>
                        
                        <img src="src/assets/flipkart(1).png" alt="" />
                        <img src="src/assets/amazon.png" alt="" />
                    </div>
                </div>

                <div className="right_side w-[50%] flex items-center justify-center">
                    <img src="src/assets/shoe_image.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Hero