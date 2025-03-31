import Image from "next/image";
import ContactForm from "@/components/contact-form";

export default function Home() {
	return (
		<main className="min-h-screen bg-rose">
			{/* Hero Section */}
			<section className="font-[Goldage] py-[16rem] px-4 text-center 2xl:max-w-[60%] mx-auto">
				<div className="leading-none">
					<h1 className="text-[6em] md:text-[10em] lg:text-[16em] 3xl:text-[24em] italic text-pink mb-2">
						Stellar
					</h1>
					<h1 className="text-[4em] md:text-[7em] lg:text-[10em] 3xl:text-[14em] text-white mb-8">
						Good <span className="text-pink">Time</span>
					</h1>
				</div>
				<div className="text-xl md:text-2xl lg:text-5xl font-bold flex justify-around font-sans space-x-8 text-pink tracking-widest">
					<span>GOODS</span>
					<span>JEWELS</span>
					<span>DESIGNS</span>
				</div>
			</section>

			{/* Content Section */}
			<div className="flex flex-col md:flex-row">
				{/* Left Column */}
				<div className="w-full md:w-1/2 p-8 md:p-16 bg-white">
					<h2 className="font-[Goldage] text-4xl lg:text-6xl text-pink mb-6">
						Welcome to Stellar Good Time
					</h2>
					<p className="lg:text-4xl text-pink mb-4">
						We're one part vintage shop, one part event designer, and one part
						marketing studio.{" "}
						<span className="font-bold">All parts good time.</span>
					</p>

					<div className="grid grid-cols-2 gap-4 mt-12">
						<div className="bg-pink aspect-square">
							<Image
								src="/stellargoodtime-jewelry.png?height=300&width=300"
								alt="Vintage ring"
								width={300}
								height={300}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="bg-green row-span-2">
							<Image
								src="/stellargoodtime-home-goods.png?height=600&width=300"
								alt="White bird on green background"
								width={300}
								height={600}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="bg-yellow aspect-square">
							<Image
								src="/stellargoodtime-design.png?height=300&width=300"
								alt="Vintage cards"
								width={300}
								height={300}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Right Column - Contact Form */}
				<div className="w-full md:w-1/2 bg-pink p-8 md:p-16 text-white">
					<ContactForm />
				</div>
			</div>
		</main>
	);
}
