/**
 * Página inicial - Landing page da Mauber Informática
 * Conteúdo principal com informações da empresa e botões das lojas
 */

import { useTranslation } from 'react-i18next';
import { CompanyLogo } from '@/components/ui/CompanyLogo';
import {
	AppStoreButton,
	GooglePlayButton,
} from '@/components/ui/AppStoreButton';

/**
 * Componente da página inicial
 * Renderiza o conteúdo principal da landing page
 */
export function Home() {
	const { t } = useTranslation('translation');

	return (
		<main
			id="main"
			className="flex-1 flex items-center justify-center px-4 py-20"
			role="main"
		>
			<div className="max-w-2xl w-full text-center">
				{/* Logo da empresa */}
				<CompanyLogo />

				{/* Nome da empresa */}
				<h1 className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
					{t('header.company')}
				</h1>

				{/* Slogan principal */}
				<h2 className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
					{t('header.tagline')}
				</h2>

				{/* Descrição detalhada */}
				<p className="text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
					{t('hero.description')}
				</p>

				{/* Botões das lojas de aplicativos */}
				<section
					className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
					aria-label={t('accessibility.storeLinks')}
				>
					<AppStoreButton
						text={t('buttons.appStore')}
						comingSoonText={t('buttons.comingSoon')}
						disabled={true}
					/>

					<GooglePlayButton
						text={t('buttons.googlePlay')}
						comingSoonText={t('buttons.comingSoon')}
						disabled={true}
					/>
				</section>
			</div>
		</main>
	);
}
