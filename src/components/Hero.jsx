// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeIn } from "../framerMotion/variants"

export default function Hero() {
	return (
		<section
			id="hero"
			className="bg-[url('/images/hero_image.png')] bg-cover bg-left md:bg-center relative h-[calc(100vh-80px)] flex items-center justify-center text-center"
		>
			<motion.div
				className="text-black max-w-2xl mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-12"
				variants={fadeIn("up", 0.6)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0 }}
			>
				<motion.h1
					className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
					variants={fadeIn("down", 0.6)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.5 }}
				>
					Soto Ayam Semarang Asli, Rasa yang Tak Terlupakan
				</motion.h1>

				<motion.p
					className="text-base sm:text-lg md:text-xl lg:text-2xl font-aref leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mt-4 sm:mt-6 md:mt-8"
					variants={fadeIn("up", 0.6)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.5 }}
				>
					Nikmati kehangatan cita rasa khas Semarang dalam setiap sendoknya segar, gurih, dan penuh kenangan.
				</motion.p>
			</motion.div>
		</section>
	)
}