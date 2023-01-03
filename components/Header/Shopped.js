import React from 'react'
import Image from 'next/image'

const Shopped = () => {
  return (
    // <div className='grid grid-cols-4 grid-rows-1 row-span-2 items-center bg-orange-400'>
        
        // <div className='flex m-5 w-full'>
        //     <Image src={require("../../public/emoji.png")} className="w-24 h-20" />
        //     <h1 className='text-5xl m-5 font-serif font-bold self-center'>Shopped</h1>

        // </div>
        
        // <div className='flex h-full col-span-2 justify-center items-center'>
        //     <input placeholder='Search your choice, do not be a picki' className='w-96 h-12 rounded-full text-center border-2 border-cyan-400 bg-slate-800 text-white' />
        //     <button>
        //         <Image src={require("../../public/magnifier.png")} className="w-12 h-12"/>
        //     </button>
        
        // </div>

        // <div className='flex h-full col-span-1 justify-center items-center'>
        //     <h1 className='text-xl m-2 font-serif font-bold self-center'>Catagories:</h1>
        //     <select name='Categories' className='mr-5 rounded-full h-8 w-36 px-1 text-xl font-bold font-sans text-center'>
        //         <option className='text-xl font-bold font-sans' value="">......</option>
        //         <option className='text-xl font-bold font-sans' value="Men's">Men's</option>
        //         <option className='text-xl font-bold font-sans' value="Women's">Women's</option>
        //         <option className='text-xl font-bold font-sans' value="Accessories">Accessories</option>
        //         <option className='text-xl font-bold font-sans' value="Others">Others</option>

        //     </select>
        //     <Image src={require("../../public/basket.png")} className="w-12 h-12"/>
        // </div>

    // </div>

    <div className='grid grid-cols-autofit'>

        <div className='shoppedCards col-span-2 md:col-span-1'>
            <Image src={require("../../public/emoji.png")} className="w-20 h-20" />
            <h1 className='ml-5 text-5xl font-serif font-bold'>Shopped</h1>

        </div>

         <div className='shoppedCards col-span-2 '>
            <input placeholder='Search your choice, do not be a picki' className='w-96 h-12 rounded-full text-center border-2 border-cyan-400 bg-slate-800 text-white' />
            <button>
                <Image src={require("../../public/magnifier.png")} className="w-12 h-12"/>
            </button>
        
        </div>

        <div className='shoppedCards col-span-2 md:col-span-1'>
            <h1 className='text-xl m-2 font-serif font-bold'>Catagories:</h1>
            <select name='Categories' className='mr-5 rounded-full h-8 w-36 px-1 text-xl font-bold font-sans text-center'>
                <option className='text-xl font-bold font-sans' value="">......</option>
                <option className='text-xl font-bold font-sans' value="Men's">Men's</option>
                <option className='text-xl font-bold font-sans' value="Women's">Women's</option>
                <option className='text-xl font-bold font-sans' value="Accessories">Accessories</option>
                <option className='text-xl font-bold font-sans' value="Others">Others</option>

            </select>
            <Image src={require("../../public/basket.png")} className="w-12 h-12"/>
        </div>

    </div>
  )
}

export default Shopped