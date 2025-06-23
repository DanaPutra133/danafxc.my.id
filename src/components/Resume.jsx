import React from 'react'
import img1 from '../assets/img3.jpeg' // ganti sesuai gambar yang kamu punya

const experiences = [
	{
		date: '2004-10-13',
		title: 'Lahir',
		description: 'Saya lahir di kota Depok.',
		img: img1,
	},
	{
		date: '2015-06-01',
		title: 'Masuk SMP',
		description: 'Memulai pendidikan di SMP Negeri 1 Lorem.',
		img: img1,
	},
	{
		date: '2018-07-01',
		title: 'Lulus SMP',
		description: 'Lulus dari SMP dengan nilai memuaskan.',
		img: img1,
	},
	{
		date: '2018-07-15',
		title: 'Masuk SMA',
		description: 'Diterima di SMA Lorem Ipsum.',
		img: img1,
	},
	{
		date: '2021-06-01',
		title: 'Lulus SMA',
		description: 'Lulus dari SMA Lorem Ipsum dengan prestasi.',
		img: img1,
	},
	{
		date: '2021-08-01',
		title: 'Masuk Universitas',
		description: 'Mulai kuliah di Universitas Ipsum jurusan Informatika.',
		img: img1,
	},
	{
		date: '2022-08-01',
		title: 'Magang di Ipsum Corp',
		description: 'Magang sebagai Frontend Developer di Ipsum Corp.',
		img: img1,
	},
	{
		date: '2023-01-01',
		title: 'Juara Lomba Coding',
		description: 'Memenangkan lomba coding tingkat nasional.',
		img: img1,
	},
	{
		date: '2023-09-01',
		title: 'Bekerja di Dolor Ltd',
		description: 'Bekerja sebagai Software Engineer di Dolor Ltd.',
		img: img1,
	},
	{
		date: '2024-03-01',
		title: 'Freelance Project',
		description: 'Menyelesaikan beberapa project freelance web development.',
		img: img1,
	},
]

function Resume() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 80 }}>
			<div style={{ width: 340, minHeight: 400 }}>
				{/* Blok tanggal lahir di paling atas, tidak dilewati garis */}
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: 32,
					position: 'relative',
					zIndex: 2,
				}}>
					<div
						style={{
							width: 22,
							height: 22,
							borderRadius: '50%',
							background: 'linear-gradient(135deg, #6dd5ed 0%, #FFC0CB 100%)',
							border: '3px solid #6dd5ed',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: '#fff',
							fontWeight: 'bold',
							fontSize: 13,
							marginBottom: 8,
							boxShadow: '0 2px 8px 0 rgba(109,213,237,0.18)',
						}}
					>
						★
					</div>
					<div style={{
						fontWeight: 'bold',
						background: 'linear-gradient(90deg, #6dd5ed 0%, #FFC0CB 100%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						marginBottom: 2,
						fontSize: 15,
						textAlign: 'center'
					}}>
						{experiences[0].date}
					</div>
					<div style={{ fontWeight: 'bold', marginBottom: 2, fontSize: 17, color: '#fff', textAlign: 'center' }}>{experiences[0].title}</div>
					<div style={{ fontSize: 13, color: '#bdbdbd', textAlign: 'center' }}>{experiences[0].description}</div>
				</div>
				{/* Container timeline dengan garis dan event */}
				<div style={{ position: 'relative', width: '100%', minHeight: 400 }}>
					{/* Garis Vertikal */}
					<div
						style={{
							position: 'absolute',
							left: '50%',
							top: 0,
							bottom: 0,
							width: 4,
							background: 'linear-gradient(180deg, #6dd5ed 0%, #FFC0CB 100%)',
							transform: 'translateX(-50%)',
							zIndex: 0,
							borderRadius: 2,
						}}
					/>
					{/* Item Timeline (skip index 0/"Lahir") */}
					{experiences.slice(1).map((exp, idx) => {
						const isLeft = (idx + 1) % 2 === 1 // zig-zag
						return (
							<div
								key={exp.date}
								style={{
									position: 'relative',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									marginBottom: idx === experiences.length - 2 ? 0 : 48,
									zIndex: 1,
									minHeight: 90,
								}}
							>
								{/* Lingkaran */}
								<div
									style={{
										width: 22,
										height: 22,
										borderRadius: '50%',
										background: '#fff',
										border: '3px solid #6dd5ed',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										color: '#6dd5ed',
										fontWeight: 'bold',
										fontSize: 13,
										marginBottom: 8,
										zIndex: 2,
									}}
								/>
								{/* Konten dan Gambar */}
								<div
									style={{
										position: 'absolute',
										top: 0,
										left: isLeft ? undefined : 'calc(50% + 24px)',
										right: isLeft ? 'calc(50% + 24px)' : undefined,
										width: 220,
										display: 'flex',
										flexDirection: isLeft ? 'row-reverse' : 'row',
										alignItems: 'center',
										textAlign: isLeft ? 'right' : 'left',
										color: '#fff',
										paddingLeft: isLeft ? 0 : 8,
										paddingRight: isLeft ? 8 : 0,
									}}
								>
									<img
										src={exp.img}
										alt={exp.title}
										style={{
											width: 48,
											height: 48,
											borderRadius: 12,
											objectFit: 'cover',
											marginLeft: isLeft ? 12 : 0,
											marginRight: isLeft ? 0 : 12,
											boxShadow: '0 2px 8px 0 rgba(109,213,237,0.10)'
										}}
									/>
									<div style={{ maxWidth: 150 }}>
										<div style={{
											fontWeight: 'bold',
											background: 'linear-gradient(90deg, #6dd5ed 0%, #FFC0CB 100%)',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
											marginBottom: 2,
											fontSize: 15
										}}>
											{exp.date}
										</div>
										<div style={{ fontWeight: 'bold', marginBottom: 2, fontSize: 17 }}>{exp.title}</div>
										<div style={{ fontSize: 13, color: '#bdbdbd' }}>{exp.description}</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Resume