// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeIn } from "../framerMotion/variants"

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
	return (
		<footer className="bg-primary text-black py-10 sm:py-12">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">

				<div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">

					<motion.div
						className="mb-6 md:mb-0 col-span-2"
						variants={fadeIn("up", 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.2 }}
					>
						<h3 className="text-xl font-bold text-black mb-4">Soto Ayam Semarang</h3>
						<p className="text-sm font-aref font-bold leading-relaxed">
							Menyajikan soto ayam kampung otentik dengan resep turun-temurun. Nikmati cita rasa gurih dan segar yang tak terlupakan!
						</p>
					</motion.div>

					<motion.div
						className="mb-6 md:mb-0 col-span-2"
						variants={fadeIn("up", 0.4)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.2 }}
					>
						<h3 className="text-lg font-semibold text-black mb-4">Hubungi Kami</h3>
						<p className="text-sm font-aref font-bold">
							Jalan Raya Salatiga Muncul Sraten, Tuntang, Gedangan, Tuntang, Kecandran, Kec. Sidomukti, Kabupaten Semarang, Jawa Tengah 50773, Indonesia<br />
							Email: <a href="mailto:info@sotoayamsemarang.com" className="hover:underline">sotoayamsemarang@gmail.com</a><br />
							Telepon: <a href="tel:+6281234567890" className="hover:underline">+62 812 3456 7890</a>
						</p>
					</motion.div>

					<motion.div
						className="mb-6 md:mb-0"
						variants={fadeIn("up", 0.4)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.2 }}
					>
						<h3 className="text-lg font-semibold text-black mb-4">Ikuti Kami</h3>
						<div className="flex space-x-4">
							<motion.a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black hover:text-gray-700 transition-colors duration-200"
								variants={fadeIn("up", 0.5)}
								initial="hidden"
								whileInView="show"
								viewport={{ once: false, amount: 0.2 }}
							>
								<FaFacebookF className="w-6 h-6" />
							</motion.a>
							<motion.a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black hover:text-gray-700 transition-colors duration-200"
								variants={fadeIn("up", 0.6)}
								initial="hidden"
								whileInView="show"
								viewport={{ once: false, amount: 0.2 }}
							>
								<FaInstagram className="w-6 h-6" />
							</motion.a>
							<motion.a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black hover:text-gray-700 transition-colors duration-200"
								variants={fadeIn("up", 0.7)}
								initial="hidden"
								whileInView="show"
								viewport={{ once: false, amount: 0.2 }}
							>
								<FaTwitter className="w-6 h-6" />
							</motion.a>
							<motion.a
								href="https://youtube.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black hover:text-gray-700 transition-colors duration-200"
								variants={fadeIn("up", 0.8)}
								initial="hidden"
								whileInView="show"
								viewport={{ once: false, amount: 0.2 }}
							>
								<FaYoutube className="w-6 h-6" />
							</motion.a>
						</div>
					</motion.div>
				</div>

				<motion.hr
					className="border-black my-8 border-2"
					variants={fadeIn("up", 0.8)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.2 }}
				/>

				<motion.div
					className="text-center text-sm font-aref font-bold text-gray-500"
					variants={fadeIn("up", 0.8)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.2 }}
				>
					© {new Date().getFullYear()} Soto Ayam Semarang. All rights reserved.
				</motion.div>
			</div>
		</footer>
	)
}