// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { fadeIn } from "../framerMotion/variants"

const categorizedMenuItems = {
	sotoAyam: [
		{
			id: 1,
			name: "Soto Ayam",
			description: "Nikmati kelezatan soto khas Semarang yang legendaris, diracik dari resep turun-temurun dengan suwiran ayam kampung pilihan, telur rebus, tauge segar, taburan bawang goreng renyah, dan kuah kaldu asli yang gurih.",
			price: "Rp 6.000",
			image: "/images/soto_image.png",
		},
	],
	laukPauk: [
		{
			id: 2,
			name: "Tempe Goreng",
			description: "Potongan tempe pilihan, digoreng hingga renyah keemasan dengan bumbu sederhana yang meresap, menjadi pelengkap sempurna untuk setiap suapan soto Anda.",
			price: "Rp 500",
			image: "/images/tempe_image.png",
		},
		{
			id: 3,
			name: "Perkedel Kentang",
			description: "Perkedel kentang lembut dengan bumbu rempah khas, digoreng hingga bagian luarnya renyah. Rasanya gurih dan pas di lidah, cocok untuk menambah kenikmatan hidangan soto Anda.",
			price: "Rp 1.000",
			image: "/images/perkedel_image.png",
		},
		{
			id: 4,
			name: "Sate Usus Ayam",
			description: "Usus ayam bersih yang dibumbui dengan rempah spesial lalu dibakar sempurna. Tekstur kenyal dan rasa gurih manisnya akan membuat Anda ketagihan.",
			price: "Rp 2.000",
			image: "/images/sate_usus_image.png",
		},
		{
			id: 5,
			name: "Sate Telur Puyuh",
			description: "Telur puyuh rebus yang dimasak dengan bumbu kecap manis gurih dan dibakar, menghasilkan rasa yang kaya dan lezat. Pendamping ideal untuk soto Anda.",
			price: "Rp 2.000",
			image: "/images/sate_telur_image.png",
		},
		{
			id: 6,
			name: "Sate Ati Ayam",
			description: "Potongan ati ayam segar yang dibumbui dengan rempah dan dibakar hingga empuk. Sajian yang gurih dan beraroma, menambah cita rasa hidangan Anda.",
			price: "Rp 2.000",
			image: "/images/sate_ati_image.png",
		},
		{
			id: 7,
			name: "Sate Daging Ayam",
			description: "Daging ayam pilihan dipotong dadu, dibumbui dengan rempah khas dan dibakar, memberikan tekstur lembut dan rasa otentik yang memuaskan.",
			price: "Rp 2.000",
			image: "/images/sate_daging_image.png",
		},
		{
			id: 8,
			name: "Sate Kulit Ayam",
			description: "Kulit ayam yang dibumbui dengan saus manis gurih dan dibakar hingga sedikit gosong dan renyah. Pilihan favorit bagi pecinta kulit ayam.",
			price: "Rp 2.000",
			image: "/images/sate_kulit_image.png",
		},
		{
			id: 9,
			name: "Sate Kerang",
			description: "Kerang segar yang dimasak dengan bumbu pedas manis khas, lalu ditusuk sate. Rasanya unik, sedikit kenyal, dan sangat menggugah selera.",
			price: "Rp 2.000",
			image: "/images/sate_kerang_image.png",
		},
		{
			id: 10,
			name: "Sate Keong",
			description: "Keong sawah yang diolah dengan bumbu rempah tradisional hingga empuk dan gurih, disajikan dalam tusukan sate. Sensasi rasa yang autentik dan jarang ditemukan.",
			price: "Rp 2.000",
			image: "/images/sate_keong_image.png",
		},
	],
	minuman: [
		{
			id: 11,
			name: "Es Teh Manis",
			description: "Teh pilihan yang diseduh sempurna, disajikan dingin dengan takaran manis yang pas, sangat menyegarkan dan pelepas dahaga setelah menyantap soto hangat.",
			price: "Rp 3.000",
			image: "/images/es_teh_image.png",
		},
		{
			id: 12,
			name: "Jeruk Hangat/Es",
			description: "Perasan jeruk segar alami, disajikan hangat untuk menghangatkan tubuh atau dengan es batu untuk kesegaran maksimal. Pilihan sehat dan vitamin C.",
			price: "Rp 3.000",
			image: "/images/es_jeruk_image.png",
		},
		{
			id: 13,
			name: "Kopi Hitam",
			description: "Kopi hitam pekat dengan aroma kuat, diseduh untuk Anda yang mencari semangat tambahan. Nikmat disajikan hangat setelah hidangan utama.",
			price: "Rp 3.000",
			image: "/images/es_kopi_image.png",
		},
	],
}

const MenuItemCard = ({ item, index }) => (
	<motion.div
		key={item.id}
		className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
		variants={fadeIn("up", 0.1 + index * 0.1)}
		initial="hidden"
		whileInView="show"
		viewport={{ once: false, amount: 0.2 }}
	>
		<img
			src={item.image}
			alt={item.name}
			className="w-full h-48 sm:h-56 object-cover"
		/>
		<div className="p-5 sm:p-6">
			<h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
			<p className="font-aref text-gray-600 text-sm sm:text-base mb-3">{item.description}</p>
			<div className="flex justify-between items-center mt-4">
				<span className="text-black text-xl sm:text-2xl font-extrabold">{item.price}</span>
			</div>
		</div>
	</motion.div>
)

export default function Menu() {
	const sotoItem = categorizedMenuItems.sotoAyam[0]

	return (
		<section id="menu" className="py-16 sm:py-20 bg-primary">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10 sm:mb-12"
					variants={fadeIn("down", 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.5 }}
				>
					Daftar Menu Kami
				</motion.h2>

				{sotoItem && (
					<motion.div
						className="bg-primary-light rounded-lg shadow-2xl overflow-hidden mb-16 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-12"
						variants={fadeIn("up", 0.6)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.2 }}
					>
						<motion.div
							className="w-full md:w-1/2 lg:w-2/5 flex justify-center"
							variants={fadeIn("right", 0.9)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.2 }}
						>
							<img
								src={sotoItem.image}
								alt={sotoItem.name}
								className="w-full max-w-sm h-64 sm:h-80 object-cover rounded-lg shadow-xl border-4 border-white"
							/>
						</motion.div>

						<motion.div
							className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left text-gray-900"
							variants={fadeIn("left", 0.9)}
							initial="hidden"
							whileInView="show"
							viewport={{ once: false, amount: 0.2 }}
						>
							<h3 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
								{sotoItem.name}
							</h3>
							<p className="font-aref text-base sm:text-lg mb-6 leading-relaxed">
								{sotoItem.description}
							</p>
							<span className="text-secondary text-4xl sm:text-5xl font-extrabold block">
								{sotoItem.price}
							</span>
						</motion.div>
					</motion.div>
				)}

				<motion.h3
					className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 mt-12"
					variants={fadeIn("down", 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.5 }}
				>
					Lauk Pauk & Sate
				</motion.h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16">
					{categorizedMenuItems.laukPauk.map((item, index) => (
						<MenuItemCard key={item.id} item={item} index={index} />
					))}
				</div>

				<motion.h3
					className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 mt-12"
					variants={fadeIn("down", 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.5 }}
				>
					Minuman
				</motion.h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
					{categorizedMenuItems.minuman.map((item, index) => (
						<MenuItemCard key={item.id} item={item} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}