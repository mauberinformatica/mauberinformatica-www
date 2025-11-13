/**
 * Aplicação principal da Mauber Informática
 * Website corporativo para divulgação dos aplicativos móveis da empresa
 * Usa react-i18next para internacionalização avançada
 */

import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './components/layout/LanguageSelector';
import { Footer } from './components/layout/Footer';
import { CompanyLogo } from './components/ui/CompanyLogo';
import {
	AppStoreButton,
	GooglePlayButton,
} from './components/ui/AppStoreButton';
import { APP_CONFIG } from './constants';

/**
 * Componente de loading para Suspense
 */
function LoadingFallback() {
	return (
		<div
			className="min-h-screen flex items-center justify-center"
			style={{
				background:
					'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #f3e8ff 100%)',
			}}
		>
			<div className="text-gray-700">Carregando...</div>
		</div>
	);
}

/**
 * Componente principal da aplicação
 * Renderiza uma landing page responsiva com seletor de idioma i18n,
 * informações da empresa e botões das lojas de aplicativos
 */
function AppContent() {
	const { t, i18n } = useTranslation('translation');

	// Atualizar atributo lang do HTML dinamicamente
	document.documentElement.lang = i18n.language;

	return (
		<div
			className="min-h-screen flex flex-col"
			style={{
				background:
					'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #f3e8ff 100%)',
			}}
		>
			{/* Seletor de idioma moderno no canto superior direito */}
			<LanguageSelector />

			{/* Conteúdo principal */}
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

			{/* Rodapé com links e copyright */}
			<Footer currentYear={APP_CONFIG.currentYear} />
		</div>
	);
}

/**
 * App principal com Suspense para carregamento das traduções
 */
export default function App() {
	return (
		<Suspense fallback={<LoadingFallback />}>
			<AppContent />
		</Suspense>
	);
}
