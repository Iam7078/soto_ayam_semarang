// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeIn } from "../framerMotion/variants"

export default function Location() {

    const address = "Jalan Raya Salatiga Muncul Sraten, Tuntang, Gedangan, Tuntang, Kecandran, Kec. Sidomukti, Kabupaten Semarang, Jawa Tengah 50773, Indonesia"

    const phoneNumber = "+62 859-5933-3750"

    const openingHours = "Setiap Hari: 06.00 - 14.00 WIB"

    const googleMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2985984815828!2d110.4759607!3d-7.3203173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a785fc1cf065f%3A0x1004415e2e0b4f05!2sSoto%20Ayam%20Semarang%20%22Bang%20Toni%20%22!5e0!3m2!1sid!2sid!4v1749366478646!5m2!1sid!2sid" 

	return (
		<section id="location" className="py-16 sm:py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10 sm:mb-12"
					variants={fadeIn("down", 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.5 }}
				>
					Lokasi & Kontak Kami
				</motion.h2>

				<motion.div
					className="bg-white rounded-lg shadow-xl overflow-hidden md:flex md:flex-row-reverse"
					variants={fadeIn("up", 0.6)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.2 }}
				>
					<motion.div
						className="w-full md:w-3/5 lg:w-2/3 h-80 sm:h-96 md:h-[500px]"
						variants={fadeIn("right", 0.9)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.2 }}
					>
						<iframe
							src={googleMapsEmbedSrc}
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Google Maps Location"
						></iframe>
					</motion.div>

					<motion.div
						className="w-full md:w-2/5 lg:w-1/3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center"
						variants={fadeIn("left", 0.9)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.2 }}
					>
						<motion.h3
							className="text-2xl sm:text-3xl font-bold text-black mb-4"
							variants={fadeIn("up", 1)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.2 }}
						>
							Temukan Kami
						</motion.h3>

						<motion.div
							className="mb-6"
							variants={fadeIn("up", 1.1)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.2 }}
						>
							<p className="text-black text-base sm:text-lg font-semibold mb-2">Alamat:</p>
							<address className="text-gray-600 font-aref font-bold text-sm sm:text-base not-italic">
								{address}
							</address>
						</motion.div>

						<motion.div
							className="mb-6"
							variants={fadeIn("up", 1.2)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.2 }}
						>
							<p className="text-black text-base sm:text-lg font-semibold mb-2">Jam Buka:</p>
							<p className="text-gray-600 font-aref font-bold text-sm sm:text-base">
								{openingHours}
							</p>
						</motion.div>

						<motion.div
							className="mb-6"
							variants={fadeIn("up", 1.3)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.2 }}
						>
							<p className="text-black text-base sm:text-lg font-semibold mb-2">Hubungi Kami:</p>
							<p className="text-gray-600 font-aref font-bold text-sm sm:text-base mb-1">
								Telepon: <a href={`tel:${phoneNumber.replace(/-/g, '')}`} className="text-blue-600 hover:underline">{phoneNumber}</a>
							</p>
						</motion.div>

						{/* Animasi untuk Tombol */}
						<motion.div
							className="mt-4"
							variants={fadeIn("up", 1.5)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.2 }}
						>
							<a
								href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`} 
								target="_blank"
								rel="noopener noreferrer"
								className="bg-primary text-black px-6 py-3 rounded-lg hover:bg-secondary-dark transition-colors duration-300 text-center font-medium shadow-md inline-block" // Tambahkan inline-block agar animasi bekerja pada elemen <a>
							>
								Dapatkan Petunjuk Arah
							</a>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}