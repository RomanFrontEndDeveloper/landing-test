'use client';

import { useState } from 'react';
import Link from 'next/link';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='w-full'>
			<div className='max-w-[1280px] mx-auto px-[80px] md:px-6 lg:px-8 flex justify-between h-[164px] items-center max-[550px]:px-[20px] max-[550px]:h-[124px]'>
				<Link href='/' className='block'>
					<div className='text-[20px] leading-[30px] font-medium'>
						Site name
					</div>
				</Link>

				<nav className='hidden md:flex items-center gap-8 h-[52px]'>
					<a
						href='#'
						className='text-[20px] leading-[30px] font-medium  inline-block transition-transform duration-200 hover:scale-105'
					>
						Page
					</a>
					<a
						href='#'
						className='text-[20px] leading-[30px] font-medium  inline-block
              transition-transform duration-200 
              hover:scale-105'
					>
						Page
					</a>
					<a
						href='#'
						className='text-[20px] leading-[30px] font-medium  inline-block
              transition-transform duration-200 
              hover:scale-105'
					>
						Page
					</a>

					<Link
						href='/contact'
						className='inline-flex items-center justify-center h-[52px] px-6 bg-black text-white rounded-md 
              hover:bg-zinc-800 active:bg-zinc-900 
              transition-colors duration-200'
					>
						Send form
					</Link>
				</nav>
				<button
					className='md:hidden flex items-center justify-center w-[54px] h-[30px] mr-5'
					onClick={() => setIsOpen(!isOpen)}
				>
					<img
						src='/buttt.png'
						alt='menu'
						className='w-[51px] h-auto object-contain'
					/>
				</button>
			</div>
			<div
				className={`fixed inset-0 bg-white z-50 flex flex-col
          transition-all duration-500 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full         pointer-events-none'}`}
			>
				{/* TOP */}
				<div className='flex justify-between items-center px-[80px] h-[164px] max-[550px]:px-[20px] max-[550px]:h-[124px] shrink-0'>
					<div className='text-[20px] leading-[30px] font-medium'>
						Site name
					</div>

					<button onClick={() => setIsOpen(false)}>
						{' '}
						<img
							src='/xbutton.png'
							alt='x-menu'
							className='w-[68px] h-auto object-contain'
						/>
					</button>
				</div>

				{/* MENU */}
				<div className='flex flex-col h-[826px] items-center mt-[80px] gap-[32px]'>
					<div className='w-full pl-[22px] pr-[146px] text-center'>
						<a
							href='#'
							className='block text-[20px] leading-[30px] font-medium inline-block transition-transform duration-200 hover:scale-105'
						>
							Page
						</a>

						<div className='mt-[10px] h-[1px] bg-[#E6E6E6]' />
					</div>
					<div className='w-full pl-[22px] pr-[146px] text-center'>
						<a
							href='#'
							className='block text-[20px] leading-[30px] font-medium inline-block transition-transform duration-200 hover:scale-105'
						>
							Page
						</a>

						<div className='mt-[10px] h-[1px] bg-[#E6E6E6]' />
					</div>
					<div className='w-full pl-[22px] pr-[146px] text-center'>
						<a
							href='#'
							className='block text-[20px] leading-[30px] font-medium inline-block transition-transform duration-200 hover:scale-105'
						>
							Page
						</a>

						<div className='mt-[10px] h-[1px] bg-[#E6E6E6]' />
					</div>

					<Link
						href='/contact'
						onClick={() => setIsOpen(false)}
						className='mt-[20px] w-[206px] h-[52px] 
              bg-black text-white 
              rounded-[8px] 
              flex items-center justify-center mr-32
              hover:bg-zinc-700 active:bg-zinc-900 
              transition-all duration-200'
					>
						Send form
					</Link>
				</div>
			</div>
		</header>
	);
};
