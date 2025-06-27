// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeIn } from "../framerMotion/variants"

export default function About() {
	return (

		<section id="about" className="py-16 sm:py-20 bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">

					<motion.div className="w-full md:w-1/2 lg:w-2/5 animate-fade-in-up"
						variants={fadeIn("right", 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
					>
						<img
							src="/images/about_image.png"
							alt="Sejarah Soto Ayam Semarang"
							className="rounded-lg shadow-xl w-full h-auto object-cover border-4 border-white"
						/>
					</motion.div>


					<div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left animate-fade-in-right">

						<motion.h2
							className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight"
							variants={fadeIn("down", 0.4)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
						>
							Kisah di Balik Lezatnya <br className="hidden sm:inline" /> <span>Soto Ayam Semarang</span>
						</motion.h2>

						<motion.p
							className="text-base sm:text-lg text-black leading-relaxed font-aref mb-4"
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
						>
							Berdiri sejak tahun 2010, Soto Ayam Semarang kami telah menjadi ikon kuliner yang tak lekang oleh waktu. Resep turun-temurun yang dijaga kerahasiaannya, memadukan kekayaan rempah alami pilihan dengan kaldu ayam kampung asli yang dimasak perlahan hingga menghasilkan kuah bening yang kaya rasa dan aroma menggoda.
						</motion.p>
						<motion.p
							className="text-base sm:text-lg text-black leading-relaxed font-aref mb-4"
							variants={fadeIn("up", 0.6)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
						>
							Kami percaya bahwa setiap hidangan adalah sebuah cerita. Dengan dedikasi pada kualitas bahan baku terbaik dan pelayanan yang ramah, kami berkomitmen untuk menyajikan pengalaman kuliner yang tidak hanya memuaskan selera, tetapi juga menghangatkan hati setiap pelanggan.
						</motion.p>
						<motion.p
							className="text-base sm:text-lg text-black leading-relaxed font-aref"
							variants={fadeIn("up", 0.6)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.3 }}
						>
							Datang dan rasakan sendiri keaslian cita rasa Soto Ayam Semarang yang legendaris, sebuah warisan kuliner yang patut untuk dinikmati dan diceritakan.
						</motion.p>

					</div>

				</div>

			</div>

		</section>

	)

}
