export const Footer = () => {
	return (
		<footer className='max-[1380px]:px-[40px]'>
			<div className='max-w-[1280px] border-t border-[#E5E5E5] mx-auto pb-[48px]'>
				{/* Верхня частина */}
				<div className='flex justify-between max-[590px]:flex-col max-[540px]:gap-[32px]'>
					{/* LEFT */}
					<div className='mr-[185px] max-[768px]:mr-[clamp(20px,10vw,185px)]'>
						<div className='pt-[52px]'>
							<p className='text-[24px] leading-[36px] font-normal'>
								Site name
							</p>
						</div>

						<div className='mt-[88px] w-[184px] h-[40px] flex items-center justify-between'>
							<img
								src='/facebook.png'
								className='w-[24px] h-[24px] cursor-pointer 
                  hover:brightness-75 
                  transition duration-200'
							/>
							<img
								src='/linked.png'
								className='w-[24px] h-[24px] cursor-pointer 
                  hover:brightness-75 
                  transition duration-200'
							/>
							<img
								src='/youtube.png'
								className='w-[24px] h-[24px] cursor-pointer 
                  hover:brightness-75 
                  transition duration-200'
							/>
							<img
								src='/insta.png'
								className='w-[24px] h-[24px] cursor-pointer 
                  hover:brightness-75 
                  transition duration-200                '
							/>
						</div>
					</div>

					{/* RIGHT */}
					<div className='flex gap-[59px] mt-[48px]'>
						{/* Column */}
						<div className='w-[187px] max-[1050px]:w-[100px] max-[840px]:w-[46px] max-[590px]:w-[80px] flex flex-col gap-[24px]'>
							<p className='text-[16px] leading-[24px] font-medium'>
								Topic
							</p>

							<p className='text-[16px] leading-[24px] text-gray-500'>
								Page
							</p>

							<p className='text-[16px] leading-[24px] text-gray-500'>
								Page
							</p>

							<p className='text-[16px] leading-[24px] text-gray-500'>
								Page
							</p>
						</div>
						<div className='w-[187px] max-[1050px]:w-[100px] max-[840px]:w-[46px] max-[590px]:w-[80px] flex flex-col gap-[24px]'>
							<p className='text-[16px] leading-[24px] font-medium'>
								Topic
							</p>

							<p className='text-[16px] leading-[24px] text-gray-500'>
								Page
							</p>

							<p className='text-[16px] leading-[24px] text-gray-500'>
								Page
							</p>

							<p className='text-[16px] leading-[24px] text-gray-500'>
								Page
							</p>
						</div>
						<div className='w-[187px] max-[1050px]:w-[100px] max-[840px]:w-[46px] max-[590px]:w-[80px] flex flex-col gap-[24px]'>
							<p className='text-[16px] leading-[24px] font-medium'>
								Topic
							</p>

							<p className='text-[16px] leading-[24px] text-gray-500'>
								Page
							</p>

							<p className='text-[16px] leading-[24px] text-gray-500'>
								Page
							</p>

							<p className='text-[16px] leading-[24px] text-gray-500'>
								Page
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
