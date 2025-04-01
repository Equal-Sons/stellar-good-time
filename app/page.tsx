import Image from "next/image";
import ContactForm from "@/components/contact-form";

export default function Home() {
	return (
		<main className="min-h-screen bg-rose">
			{/* Hero Section */}
			<section className="min-h-screen flex flex-col justify-center font-[Goldage] px-4 py-6 text-center 2xl:max-w-[60%] md:mx-auto">
				<div>
					<div className="leading-none">
						<h1 className="text-[5em] sm:text-[8em] md:text-[10em] lg:text-[14em] 3xl:text-[24em] italic text-pink mb-2">
							Stellar
						</h1>
						<h1 className="text-[3em] sm:text-[5em] md:text-[6em] lg:text-[8em] 3xl:text-[14em] text-white mb-8">
							Good <span className="text-pink">Time</span>
						</h1>
					</div>
					<div className="text-md md:text-2xl lg:text-5xl font-bold flex justify-around font-sans space-x-8 text-pink tracking-widest">
						<span>GOODS</span>
						<span>JEWELS</span>
						<span>DESIGNS</span>
					</div>
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

					<div className="flex mt-12 gap-3">
						<div className="flex flex-col basis-1/3 gap-3">
							<div className="bg-pink aspect-square">
								<Image
									src="/stellargoodtime-jewelry.png?height=200&width=200"
									alt="Vintage ring"
									width={200}
									height={200}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="bg-yellow aspect-square">
								<Image
									src="/stellargoodtime-design.png?height=200&width=200"
									alt="Vintage cards"
									width={200}
									height={200}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className="bg-green basis-2/3">
							<Image
								src="/stellargoodtime-home-goods.png?height=400&width=400"
								alt="White bird on green background"
								width={400}
								height={400}
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
