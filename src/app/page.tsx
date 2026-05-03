import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen bg-zinc-100'>
			<main className='flex flex-col items-center text-center max-[1380px]:px-[40px]'>
				{/* HERO */}
				<section className='max-w-[857px] w-full pt-[110px] pb-[80px] flex flex-col items-center'>
					<h1 className='text-[64px] leading-[64px] font-bold tracking-[-0.02em]'>
						Landing page title
					</h1>

					<p className='mt-[24px] text-[24px] leading-[36px] text-gray-500'>
						And a subheading describing your site, too
					</p>

					<Link href='/contact'>
						<button className='mt-[24px] px-[24px] py-[14px] bg-black text-white rounded-[8px] hover:opacity-80 transition'>
							Send form
						</button>
					</Link>
				</section>

				{/* IMAGE */}
				<section className='max-w-[1280px] w-full pb-[80px]'>
					<div className='w-full h-[640px] rounded-[8px] overflow-hidden'>
						<Image
							src='/hero.png'
							alt='Food'
							width={1280}
							height={640}
							className='w-full h-full object-cover'
						/>
					</div>
				</section>

				{/* 3CARDS */}
				<section className='w-full max-w-[1280px] mx-auto pt-[7px] md:pt-[40px] pb-[120px]'>
					{/* Heading */}
					<div className='max-w-[733px] text-left'>
						<h2 className='text-[40px] leading-[110%] font-semibold'>
							Heading
						</h2>

						<p className='mt-[8px] text-[24px] leading-[150%] font-normal text-gray-500 text-left max-w-[625px]'>
							Subheading to introduce testimonials
						</p>
					</div>

					{/* Cards */}
					<div className='mt-[48px] md:mt-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]'>
						{/* Card1 */}
						<div
							className='h-[192px] p-[24px] rounded-[12px] border border-[#F7F7F7] bg-white 
                shadow-[-4px_8px_20px_rgba(0,0,0,0.1)] 
                hover:shadow-[-6px_12px_28px_rgba(0,0,0,0.15)] 
                hover:scale-105 
                transition-all duration-300'
						>
							<p className='text-[20px] leading-[150%] font-medium text-left'>
								“A terrific piece of praise”
							</p>

							<div className='mt-[48px] flex items-center'>
								<img
									src='/avatar1.png'
									alt='avatar'
									className='w-[45px] h-[45px] rounded-full object-cover'
								/>

								<div className='ml-[12px]'>
									<p className='text-[16px] font-medium text-left leading-[24px]'>
										Name
									</p>
									<p className='text-[14px] text-gray-500 leading-[21px] text-left'>
										Description
									</p>
								</div>
							</div>
						</div>

						{/* Card 2 */}
						<div
							className='h-[192px] p-[24px] rounded-[12px] border border-[#F7F7F7] bg-white 
                shadow-[-4px_8px_20px_rgba(0,0,0,0.1)] 
                hover:shadow-[-6px_12px_28px_rgba(0,0,0,0.15)] 
                hover:scale-105 
                transition-all duration-300'
						>
							<p className='text-[20px] leading-[150%] font-medium text-left'>
								“A fantastic bit of feedback”
							</p>

							<div className='mt-[48px] flex items-center'>
								<img
									src='/avatar2.png'
									alt='avatar'
									className='w-[45px] h-[45px] rounded-full object-cover'
								/>

								<div className='ml-[12px]'>
									<p className='text-[16px] font-medium text-left leading-[24px]'>
										Name
									</p>
									<p className='text-[14px] text-gray-500 leading-[21px] text-left'>
										Description
									</p>
								</div>
							</div>
						</div>

						{/* Card 3 */}
						<div
							className='h-[192px] p-[24px] rounded-[12px] border border-[#F7F7F7] bg-white 
                shadow-[-4px_8px_20px_rgba(0,0,0,0.1)] 
                hover:shadow-[-6px_12px_28px_rgba(0,0,0,0.15)] 
                hover:scale-105
                transition-all duration-300'
						>
							<p className='text-[20px] leading-[150%] font-medium text-left'>
								“A genuinely glowing review”
							</p>

							<div className='mt-[48px] flex items-center'>
								<img
									src='/avatar3.png'
									alt='avatar'
									className='w-[45px] h-[45px] rounded-full object-cover'
								/>

								<div className='ml-[12px]'>
									<p className='text-[16px] font-medium text-left leading-[24px]'>
										Name
									</p>
									<p className='text-[14px] text-gray-500 leading-[21px] text-left'>
										Description
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
