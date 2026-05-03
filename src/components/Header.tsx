'use client';

import { useState } from 'react';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='w-full'>
			<div className='max-w-[1280px] mx-auto px-[80px] md:px-6 lg:px-8 flex justify-between h-[164px] items-center'>
				<div className='text-[20px] leading-[30px] font-medium'>
					Site name
				</div>

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

					<button
						className='h-[52px] px-6 bg-black text-white rounded-md  hover:bg-zinc-800 active:bg-zinc-900 
  transition-colors duration-200'
					>
						Send form
					</button>
				</nav>
				<button
					className='md:hidden flex items-center justify-center w-[54px] h-[30px]'
					onClick={() => setIsOpen(!isOpen)}
				>
					<img
						src='/buttt.png'
						alt='menu'
						className='w-[51px] h-auto object-contain'
					/>
				</button>
			</div>

			{isOpen && (
				<div className='fixed  inset-0 bg-white z-50 flex flex-col'>
					{/* TOP */}
					<div className='flex h-[164px] justify-between items-center px-[80px]'>
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

						<button
							className='mt-[20px] w-[206px] h-[52px] 
                bg-black text-white 
                rounded-[8px] 
                flex items-center justify-center mr-32
                hover:bg-zinc-700 active:bg-zinc-900 
                transition-all duration-200'
						>
							Send form
						</button>
					</div>
				</div>
			)}
		</header>
	);
};
