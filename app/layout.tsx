import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "Stellar Good Time",
	description:
		"Your one-stop shop for stellar home goods, vintage jewelry, event design, and marketing for people and brands that love to stand out.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
				</style>
			</head>
			<body>{children}</body>
		</html>
	);
}
