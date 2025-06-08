import { useState } from "react"
import { Link } from "react-scroll"

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	const navLinks = [
		{ name: "Beranda", section: "hero" },
        { name: "Tentang Kami", section: "about" },
        { name: "Menu Kami", section: "menu" },
        { name: "Lokasi", section: "location" },
        { name: "Testimoni", section: "testimonials" },
	]

	return (
		<header className="bg-primary shadow-lg sticky top-0 z-50 mx-auto w-full">
			<div className="container mx-auto px-6 md:px-20 py-4 flex justify-between items-center">

				<div className="flex items-center">
					<img src="/images/logo.png" alt="Logo Iam" className="h-10 w-auto mr-3 sm:h-12 md:mr-4 hidden md:flex" />
					<span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">Soto Ayam Semarang</span>
				</div>

				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-black focus:outline-none p-2 sm:p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
					>
						<svg className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							{isOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>

				<div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-10">
					<nav className="flex space-x-6 lg:space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.section}
								to={link.section}
								spy={true}
								smooth={true}
								duration={500}
								offset={-80}
								className="cursor-pointer text-black hover:text-secondary font-medium text-base lg:text-lg transition-colors duration-300"
								activeClass="font-bold text-secondary border-b-2 border-secondary pb-1"
							>
								{link.name}
							</Link>
						))}
					</nav>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden bg-primary py-4 sm:py-6 px-6 shadow-xl absolute top-full left-0 w-full z-40 rounded-b-lg border-t-4">
					<div className="flex flex-col space-y-4 sm:space-y-6 items-center">
						{navLinks.map((link) => (
							<Link
								key={link.section}
								to={link.section}
								spy={true}
								smooth={true}
								duration={500}
								offset={-70}
								className="cursor-pointer text-gray-800 hover:text-secondary font-medium text-lg sm:text-xl py-2 px-4 rounded-md transition-colors duration-300 w-full text-center" // Ukuran font mobile nav
								activeClass="font-bold text-secondary bg-secondary50"
								onClick={() => setIsOpen(false)}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</header>
	)
}