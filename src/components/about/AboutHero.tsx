import Image from "next/image";

export default function AboutHero() {
	return (
		<section
			className="relative bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden w-auto h-[97vh] m-2.5 rounded-[34px]"
		>
			<Image src="/images/about1.jpg" alt="About Us" fill className="object-cover" />
			{/* Main Content */ }
			<div className="flex items-center h-full relative z-10">
				<div className="w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center -mt-[250px]">
					<div className="space-y-6 p-6 bg-opacity-90 rounded-lg">
						<h1 className="text-4xl lg:text-5xl text-white font-extrabold leading-normal font-montserrat">
							About Us
						</h1>
						<p className="text-white leading-relaxed drop-shadow-md font-montserrat text-[16px] font-normal">
							Enat Bank, established by women, holds the distinction of being Ethiopia's
							first and only female-initiated bank. Since its inception on March 5, 2013, the
							bank has been at the forefront of providing comprehensive banking
							services. It stands as a leading institution in Ethiopia, dedicated to
							empowering women and setting new standards in inclusive finance.
						</p>
					</div>
				</div>
			</div>
			{/* Background overlay for better text readability */}
			<div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>

			{/* Background decorative elements */}
			{/*<div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 z-20"></div>
			<div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-300 rounded-full opacity-30 z-20"></div>
			<div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-400 rounded-full opacity-15 z-20"></div>*/}
		</section>
	);
}
