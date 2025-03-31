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
			<body>{children}</body>
		</html>
	);
}
