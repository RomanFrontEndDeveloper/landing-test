import Image from 'next/image';
import { Header } from '@/components/Header';

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen bg-zinc-100'>
			<Header />

			<main className='flex flex-col items-center text-center max-[1380px]:px-[40px]'>
				{/* HERO */}
				<section className='max-w-[857px] w-full pt-[110px] pb-[80px] flex flex-col items-center'>
					<h1 className='text-[64px] leading-[64px] font-bold tracking-[-0.02em]'>
						Landing page title
					</h1>

					<p className='mt-[24px] text-[24px] leading-[36px] text-gray-500'>
						And a subheading describing your site, too
					</p>

					<button className='mt-[24px] px-[24px] py-[14px] bg-black text-white rounded-[8px] hover:opacity-80 transition'>
						Send form
					</button>
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
			</main>
		</div>
	);
}
