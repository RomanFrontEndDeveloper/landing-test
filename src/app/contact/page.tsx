export default function ContactPage() {
	return (
		<section className='w-full mt-[80px] mb-[55px]'>
			<div className='max-w-[1280px] mx-auto px-[80px] md:px-6 lg:px-8 max-[550px]:px-[16px]'>
				<div className='flex flex-col-reverse lg:flex-row justify-between items-start gap-[64px] max-[550px]:gap-[32px]'>
					{/* LEFT — FORM */}
					<div className='w-full max-w-[626px] mx-auto lg:mx-0'>
						<h1 className='text-[64px] leading-[100%] tracking-[-0.02em] font-bold text-center md:text-left max-[550px]:text-[36px]'>
							Contact us
						</h1>

						<p className='mt-[16px] text-[24px] leading-[150%] font-normal text-gray-500 text-left max-[550px]:text-[16px]'>
							Subheading for description or instructions
						</p>

						<form className='mt-[32px] flex flex-col gap-[24px] max-[550px]:gap-[16px]'>
							{/* ROW */}
							<div className='flex flex-col md:flex-row gap-[16px]'>
								<div className='flex flex-col gap-[8px] w-full'>
									<label className='text-[14px] leading-[21px]'>
										First name
									</label>
									<input
										placeholder='Jane'
										className='h-[52px] max-[550px]:h-[44px] px-[16px] border border-gray-200 rounded-md'
									/>
								</div>

								<div className='flex flex-col gap-[8px] w-full'>
									<label className='text-[14px] leading-[21px]'>
										Last name
									</label>
									<input
										placeholder='Smitherton'
										className='h-[52px] max-[550px]:h-[44px] px-[16px] border border-gray-200 rounded-md'
									/>
								</div>
							</div>

							{/* EMAIL */}
							<div className='flex flex-col gap-[8px]'>
								<label className='text-[14px] leading-[21px]'>
									Email address
								</label>
								<input
									placeholder='email@janesfakedomain.net'
									className='h-[52px] max-[550px]:h-[44px] px-[16px] border border-gray-200 rounded-md'
								/>
							</div>

							{/* NUMBER */}
							<div className='flex flex-col gap-[8px]'>
								<label className='text-[14px] leading-[21px]'>
									Number
								</label>
								<input
									placeholder='+380-XX-XX-XX-XXX'
									className='h-[52px] max-[550px]:h-[44px] px-[16px] border border-gray-200 rounded-md'
								/>
							</div>

							{/* MESSAGE */}
							<div className='flex flex-col gap-[8px]'>
								<label className='text-[14px] leading-[21px]'>
									Your message
								</label>
								<textarea
									placeholder='Enter your question or message'
									className='min-h-[120px] max-[550px]:min-h-[100px] px-[16px] py-[12px] border border-gray-200 rounded-md resize-none'
								/>
							</div>

							{/* BUTTON */}
							<button className='h-[62px] max-[550px]:h-[48px] text-[16px] bg-black text-white rounded-md hover:bg-zinc-800 transition'>
								Submit
							</button>
						</form>
					</div>

					{/* RIGHT — IMAGE */}
					<div className='w-full flex justify-center lg:justify-end'>
						<img
							src='/contact.png'
							alt='contact'
							className='w-full max-w-[508px] h-auto object-cover rounded-[12px] max-[550px]:max-w-full'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
