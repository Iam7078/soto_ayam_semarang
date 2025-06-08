// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeIn } from "../framerMotion/variants"

const testimonials = [
	{
		id: 1,
		name: "Budi Santoso",
		title: "Pelanggan Setia",
		quote: "Soto Ayam Kampung di sini sungguh luar biasa! Kuahnya bening, gurihnya pas, dan suwiran ayamnya melimpah. Selalu jadi pilihan utama saya saat kangen masakan Semarang. Bintang lima!",
		rating: 5,
		avatar: "https://randomuser.me/api/portraits/men/32.jpg",
	},
	{
		id: 2,
		name: "Siti Rahayu",
		title: "Food Blogger",
		quote: "Saya sudah mencoba banyak soto ayam, tapi Soto Ayam Semarang ini punya cita rasa otentik yang beda. Rempahnya terasa, bikin nagih. Tempatnya juga nyaman untuk makan siang.",
		rating: 5,
		avatar: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		id: 3,
		name: "Ahmad Dhani",
		title: "Pecinta Kuliner",
		quote: "Lauk pauknya juara! Sate telur puyuh dan perkedel kentangnya cocok banget dimakan bareng soto. Pelayanannya cepat dan ramah. Highly recommended!",
		rating: 4,
		avatar: "https://randomuser.me/api/portraits/men/50.jpg",
	},
	{
		id: 4,
		name: "Dewi Lestari",
		title: "Wisatawan",
		quote: "Peta di websitenya sangat membantu menemukan lokasi. Begitu sampai, sotonya memang tidak mengecewakan. Rasanya seperti masakan rumahan.",
		rating: 5,
		avatar: "https://randomuser.me/api/portraits/women/23.jpg",
	},
	{
		id: 5,
		name: "Tomy Kurniawan",
		title: "Karyawan Kantor",
		quote: "Selalu jadi tempat andalan untuk makan siang bareng teman-teman. Soto hangatnya bikin semangat kerja lagi. Harga juga terjangkau.",
		rating: 4,
		avatar: "https://randomuser.me/api/portraits/men/19.jpg",
	},
]

const StarRating = ({ rating }) => {
	const stars = []
	for (let i = 1; i <= 5; i++) {
		stars.push(
			<svg
				key={i}
				className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 f0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
			</svg>
		)
	}
	return <div className="flex">{stars}</div>
}

export default function Testimonials() {
	const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

	return (
		<section id="testimonials" className="py-16 sm:py-20 bg-gray-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10 sm:mb-12"
					variants={fadeIn("down", 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.5 }}
				>
					Apa Kata Pelanggan Kami?
				</motion.h2>

				<div className="relative w-full overflow-hidden">
					<style jsx>{`
                        @keyframes scroll-left {
                            0% { transform: translateX(0%); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-scroll {
                            animation: scroll-left 60s linear infinite;
                            width: max-content;
                        }
                    `}</style>
					<div className="flex animate-scroll space-x-6 sm:space-x-8 lg:space-x-10">
						{duplicatedTestimonials.map((testimonial, index) => (
							<motion.div
								key={`${testimonial.id}-${index}`}
								className="flex-shrink-0 w-80 sm:w-96 md:w-[400px] lg:w-[450px] bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-gray-200 transform transition-transform duration-300 hover:scale-[1.01]"
								variants={fadeIn("up", 0.1 + (index % testimonials.length) * 0.1)}
								initial="hidden"
								whileInView="show"
								viewport={{ once: false, amount: 0.2 }}
							>
								<div className="flex items-center mb-4">
									<img
										src={testimonial.avatar}
										alt={testimonial.name}
										className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4 border-2 border-primary"
									/>
									<div>
										<p className="text-lg sm:text-xl font-bold text-gray-900">{testimonial.name}</p>
										<p className="text-sm text-gray-600">{testimonial.title}</p>
									</div>
								</div>
								<StarRating rating={testimonial.rating} />
								<p className="text-gray-700 text-base font-aref sm:text-lg italic mt-4 leading-relaxed">
									"{testimonial.quote}"
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}