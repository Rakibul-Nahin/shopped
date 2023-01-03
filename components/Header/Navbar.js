import React from 'react'

import Image from 'next/image'

import shopping from "../../public/images/shopping.png"
import grocery from  "../../public/images/grocery.png"
import hamburger from  "../../public/images/hamburger.png"
import smartphone from  "../../public/images/smartphone.png"

function Navbar() {
	return (
		<div className='grid grid-cols-autofit gap-2 bg-indigo-500 '>
			<button>
				<div className=' navbar hover:bg-[#53fc91]'>
					<Image src={grocery} className="w-12 h-12"/>
					<h1 className='text-lg font-sans font-semibold'>Groceries</h1>
				</div>
			</button>

			<button>
				<div className=' navbar hover:bg-[#23c3fc]'>
					<Image src={shopping} className="w-12 h-12"/>
					<h1 className='text-lg font-sans font-semibold'>Shopping</h1>
				</div>
			</button>
			
			<button>
				<div className=' navbar hover:bg-[#ff8503]'>
					<Image src={smartphone} className="w-12 h-12"/>
					<h1 className='text-lg font-sans font-semibold'>Accessories</h1>
				</div>
			</button>
			
			<button>
				<div className=' navbar hover:bg-[#fc38b1]'>
					<Image src={hamburger} className="w-12 h-12"/>
					<h1 className='text-lg font-sans font-semibold'>Food delivery</h1>
				</div>
			</button>
			

		</div>
	)
}

export default Navbar