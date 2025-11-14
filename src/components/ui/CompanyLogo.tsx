import logoLight from '@/assets/mauber-informatica-logo-curto.png';

interface CompanyLogoProps {
	size?: 'sm' | 'md' | 'lg';
}

/**
 * Logo da empresa com otimização para carregamento
 * Usa a versão curta do logo com shadow otimizada
 */
export function CompanyLogo({ size = 'lg' }: CompanyLogoProps) {
	const sizeClasses = {
		sm: 'w-32 h-32 md:w-40 md:h-40',
		md: 'w-40 h-40 md:w-48 md:h-48',
		lg: 'w-48 h-48 md:w-56 md:h-56',
	};

	const dimensions = {
		sm: { width: 160, height: 160 },
		md: { width: 192, height: 192 },
		lg: { width: 224, height: 224 },
	};

	return (
		<div className="mb-8 flex justify-center">
			<div className={`relative ${sizeClasses[size]}`}>
				<img
					src={logoLight}
					alt="Mauber Informática - Logo da empresa"
					className="w-full h-full object-contain drop-shadow-2xl"
					loading="lazy"
					width={dimensions[size].width}
					height={dimensions[size].height}
				/>
			</div>
		</div>
	);
}
