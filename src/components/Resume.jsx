import React from 'react'
import img1 from '../assets/img3.jpeg' 

const experiences = [
	{
		date: '2004-10-13',
		title: 'Lahir',
		description: 'lahir di kota Depok.',
	},
	{
		date: '2021-06-01',
		title: 'join Bisnis Center Smk',
		description: 'mengikuti bisnis center sekolah.',
		img: img1,
	},
	{
		date: '2022-01-10',
		title: 'Magang di Morfo',
		description: 'Photographer, Editor, Videographer, Designer, UI/ UX.',
		img: img1,
	},
	{
		date: '2022-10-15',
		title: 'IT suuport Smk',
		description: 'Menjadi IT suport Smk mengatur software dan hardware komputer.',
		img: img1,
	},
	{
		date: '2023-01-27',
		title: 'Memenangkan Lomba Creative Video KBOF',
		description: 'Juara 3 Lomba Creative Video KBOF.',
		img: img1,
	},
	{
		date: '2023-08-16',
		title: 'Masuk Universitas Gunadarma',
		description: 'masuk Universitas Gunadarma Jurusan Sistem Informasi.',
		img: img1,
	},
	{
		date: '2023-09-01',
		title: 'Memulai Bisnis Bot Whatsapp',
		description: 'Mulai membuat penyewaan dan mengembengkan bot Whatsapp.',
		img: img1,
	},
	{
		date: '2024-05-01',
		title: 'Join Contributor Betabotz REST API',
		description: 'Frontend web Rest API untuk tampilan yang modern dan responsive.',
		img: img1,
	},
	{
		date: '2025-xx-xx',
		title: 'Comming Soon',
		description: 'Comming Soon',
		img: img1,
	},
]

function Resume() {
	const isMobile = typeof window !== "undefined" && window.innerWidth < 600

	return (
		<div style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 80 }}>
			<div style={{
				width: isMobile ? '100%' : 540,
				minHeight: 400,
				maxWidth: isMobile ? 400 : 540,
				position: 'relative'
			}}>
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: 32,
					position: 'relative',
					zIndex: 2,
					paddingLeft: isMobile ? 16 : 0,
					paddingRight: isMobile ? 16 : 0,
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
				<div style={{ position: 'relative', width: '100%', minHeight: 400 }}>
					<div
						style={{
							position: 'absolute',
							left: isMobile ? '44px' : '50%',
							top: 0,
							bottom: 0,
							width: 4,
							background: 'linear-gradient(180deg, #6dd5ed 0%, #FFC0CB 100%)',
							transform: isMobile ? 'none' : 'translateX(-50%)',
							zIndex: 0,
							borderRadius: 2,
						}}
					/>
					{experiences.slice(1).map((exp, idx) => {
						const isLeft = (idx + 1) % 2 === 1 // zig-zag
						return (
							<div
								key={exp.date}
								style={{
									position: 'relative',
									display: 'flex',
									flexDirection: isMobile ? 'row' : 'column',
									alignItems: isMobile ? 'flex-start' : 'center',
									marginBottom: idx === experiences.length - 2 ? 0 : 48,
									zIndex: 1,
									minHeight: 90,
									paddingLeft: isMobile ? 0 : 0,
									paddingRight: isMobile ? 0 : 0,
								}}
							>
								<div
									style={{
										position: 'absolute',
										left: isMobile ? '44px' : '50%',
										top: 0,
										transform: isMobile ? 'translateX(-50%)' : 'translateX(-50%)',
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
										marginBottom: isMobile ? 0 : 8,
										marginTop: isMobile ? 0 : undefined,
										zIndex: 2,
										flexShrink: 0,
									}}
								/>
								{isMobile ? (
									<div
										style={{
											marginLeft: 80,
											padding: '4px 0',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'flex-start',
											textAlign: 'left',
											color: '#fff',
											width: 'calc(100% - 90px)',
											maxWidth: 320,
											overflowWrap: 'break-word',
											wordBreak: 'break-word'
										}}
									>
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
										<div style={{
											fontWeight: 'bold',
											marginBottom: 2,
											fontSize: 19,
											color: '#fff'
										}}>
											{exp.title}
										</div>
										<div style={{
											fontSize: 15,
											color: '#bdbdbd'
										}}>
											{exp.description}
										</div>
									</div>
								) : (
									<div
										style={{
											position: 'absolute',
											top: 0,
											left: isLeft ? undefined : 'calc(50% + 32px)',
											right: isLeft ? 'calc(50% + 32px)' : undefined,
											width: 320,
											minWidth: 0,
											maxWidth: 320,
											display: 'flex',
											flexDirection: 'column',
											alignItems: isLeft ? 'flex-end' : 'flex-start',
											textAlign: isLeft ? 'right' : 'left',
											color: '#fff',
											paddingLeft: isLeft ? 0 : 16,
											paddingRight: isLeft ? 16 : 0,
											marginTop: 0,
											justifyContent: 'center'
										}}
									>
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
										<div style={{
											fontWeight: 'bold',
											marginBottom: 2,
											fontSize: 19,
											color: '#fff'
										}}>
											{exp.title}
										</div>
										<div style={{
											fontSize: 15,
											color: '#bdbdbd'
										}}>
											{exp.description}
										</div>
									</div>
								)}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Resume