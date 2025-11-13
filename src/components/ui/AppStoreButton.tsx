interface AppStoreButtonProps {
	text: string;
	comingSoonText: string;
	disabled?: boolean;
}

/**
 * Botão oficial da Apple App Store
 * Replica o design exato do botão oficial da Apple
 */
export function AppStoreButton({
	text,
	comingSoonText,
	disabled = true,
}: AppStoreButtonProps) {
	return (
		<button
			disabled={disabled}
			className="relative inline-flex items-center justify-start px-4 py-2.5 bg-black text-white rounded-md hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed border border-gray-700"
			style={{ width: '260px', height: '65px' }}
			aria-label={`${text} - ${comingSoonText}`}
		>
			{/* Ícone Apple */}
			<div className="flex-shrink-0 mr-3 ml-1" aria-hidden="true">
				<svg
					width="24"
					height="29"
					viewBox="0 0 24 29"
					fill="currentColor"
					className="text-white"
				>
					<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
				</svg>
			</div>

			{/* Textos */}
			<div className="text-left leading-none flex flex-col justify-center">
				<div className="text-[10px] font-normal text-white opacity-90 tracking-wide mb-0.5">
					{text}
				</div>
				<div className="text-[10px] font-normal text-white opacity-70">
					{comingSoonText}
				</div>
			</div>
		</button>
	);
}
interface GooglePlayButtonProps {
	text: string;
	comingSoonText: string;
	disabled?: boolean;
}

/**
 * Botão oficial do Google Play Store
 * Replica o design exato do botão oficial do Google Play
 */
export function GooglePlayButton({
	text,
	comingSoonText,
	disabled = true,
}: GooglePlayButtonProps) {
	return (
		<button
			disabled={disabled}
			className="relative inline-flex items-center justify-start px-4 py-2.5 bg-black text-white rounded-md hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed border border-gray-700"
			style={{ width: '260px', height: '65px' }}
			aria-label={`${text} - ${comingSoonText}`}
		>
			{/* Ícone Google Play com cores originais */}
			<div className="flex-shrink-0 mr-3 ml-1" aria-hidden="true">
				<svg
					width="20"
					height="22"
					viewBox="0 0 20 22"
					fill="none"
					className="text-white"
				>
					{/* Triângulo do Google Play com gradientes */}
					<defs>
						<linearGradient
							id="googlePlayGradient1"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop offset="0%" stopColor="#00D4FF" />
							<stop offset="100%" stopColor="#0085FF" />
						</linearGradient>
						<linearGradient
							id="googlePlayGradient2"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="#FFD500" />
							<stop offset="100%" stopColor="#FF8A00" />
						</linearGradient>
						<linearGradient
							id="googlePlayGradient3"
							x1="0%"
							y1="100%"
							x2="100%"
							y2="0%"
						>
							<stop offset="0%" stopColor="#FF3A44" />
							<stop offset="100%" stopColor="#FF8A00" />
						</linearGradient>
						<linearGradient
							id="googlePlayGradient4"
							x1="100%"
							y1="0%"
							x2="0%"
							y2="100%"
						>
							<stop offset="0%" stopColor="#00D4FF" />
							<stop offset="100%" stopColor="#00AC47" />
						</linearGradient>
					</defs>
					<path
						d="M1.58,0.91 L1.58,21.09 C1.58,21.48 1.78,21.82 2.12,21.99 L11.5,11 L2.12,0.01 C1.78,0.18 1.58,0.52 1.58,0.91 Z"
						fill="url(#googlePlayGradient1)"
					/>
					<path
						d="M15.47,14.25 L12.56,11 L15.47,7.75 L18.91,9.75 C19.69,10.25 19.69,11.75 18.91,12.25 L15.47,14.25 Z"
						fill="url(#googlePlayGradient2)"
					/>
					<path
						d="M12.56,11 L2.12,21.99 C2.46,22.16 2.89,22.12 3.25,21.87 L15.47,14.25 L12.56,11 Z"
						fill="url(#googlePlayGradient3)"
					/>
					<path
						d="M12.56,11 L15.47,7.75 L3.25,0.13 C2.89,-0.12 2.46,-0.16 2.12,0.01 L12.56,11 Z"
						fill="url(#googlePlayGradient4)"
					/>
				</svg>
			</div>

			{/* Textos */}
			<div className="text-left leading-none flex flex-col justify-center">
				<div className="text-[10px] font-normal text-white opacity-90 tracking-wide mb-0.5">
					{text}
				</div>
				<div className="text-[10px] font-normal text-white opacity-70">
					{comingSoonText}
				</div>
			</div>
		</button>
	);
}
