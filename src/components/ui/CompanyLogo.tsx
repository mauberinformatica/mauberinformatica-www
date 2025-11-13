import logoLight from '@/assets/mauber-informatica-logo-curto.png';

/**
 * Logo da empresa com otimização para carregamento
 * Usa a versão curta do logo com shadow otimizada
 */
export function CompanyLogo() {
	return (
		<div className="mb-8 flex justify-center">
			<div className="relative w-48 h-48 md:w-56 md:h-56">
				<img
					src={logoLight}
					alt="Mauber Informática - Logo da empresa"
					className="w-full h-full object-contain drop-shadow-2xl"
					loading="lazy"
					width={224}
					height={224}
				/>
			</div>
		</div>
	);
}
