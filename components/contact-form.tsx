"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		service: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSelectChange = (value: string) => {
		setFormData((prev) => ({ ...prev, service: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		const response = await fetch("/.netlify/functions/get-rsvp-list");
		const json = await response.json();

		console.log(json);

		setIsSubmitting(false);
		setSubmitted(true);

		// Reset form after 3 seconds
		setTimeout(() => {
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				service: "",
				message: "",
			});
			setSubmitted(false);
		}, 3000);
	};

	return (
		<div>
			<h2 className="text-4xl font-[Goldage] mb-8">Contact Us</h2>
			<div className="border-t border-rose mb-8" />

			{submitted ? (
				<div className="text-center py-8">
					<h3 className="text-2xl mb-4">Thank you!</h3>
					<p>Your message has been sent successfully.</p>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="mb-6">
						<label htmlFor="fullName" className="block mb-2">
							Full Name <span className="">*</span>
						</label>
						<div className="flex gap-4">
							<div className="w-1/2">
								<Input
									id="firstName"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									placeholder="First Name"
									required
									className="bg-white text-black"
								/>
								<span className="text-sm mt-1 block">First Name</span>
							</div>
							<div className="w-1/2">
								<Input
									id="lastName"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									placeholder="Last Name"
									required
									className="bg-white text-black"
								/>
								<span className="text-sm mt-1 block">Last Name</span>
							</div>
						</div>
					</div>

					<div className="mb-6">
						<label htmlFor="email" className="block mb-2">
							E-mail <span className="">*</span>
						</label>
						<Input
							id="email"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="example@example.com"
							required
							className="bg-white text-black"
						/>
					</div>

					<div className="mb-6">
						<label htmlFor="service" className="block mb-2">
							Services <span className="">*</span>
						</label>
						<Select
							value={formData.service}
							onValueChange={handleSelectChange}
							required
						>
							<SelectTrigger className="bg-white text-gray-500">
								<SelectValue placeholder="Please Select" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="home-goods">Home Goods</SelectItem>
								<SelectItem value="jewelry">Jewelry</SelectItem>
								<SelectItem value="marketing">Marketing Services</SelectItem>
								<SelectItem value="event-design">Event Design</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="mb-8">
						<label htmlFor="message" className="block mb-2">
							Message <span className="">*</span>
						</label>
						<Textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							className="bg-white text-black min-h-[120px]"
						/>
					</div>

					<div className="flex justify-end">
						<Button
							type="submit"
							disabled={isSubmitting}
							className="bg-white text-pink hover:bg-rose hover:text-black px-8"
						>
							{isSubmitting ? "SUBMITTING..." : "SUBMIT"}
						</Button>
					</div>
				</form>
			)}
		</div>
	);
}
