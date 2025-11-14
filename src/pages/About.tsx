/**
 * Página Sobre - Mauber Informática
 * Informações sobre a empresa, missão e serviços
 */

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CompanyLogo } from '@/components/ui/CompanyLogo';
import { Info, Home } from 'lucide-react';

/**
 * Componente da página sobre a empresa
 * Renderiza informações institucionais da Mauber Informática
 */
export function About() {
	const { t } = useTranslation('translation');

	return (
		<main id="main" className="flex-1 px-4 py-12 md:py-20" role="main">
			{/* Botão flutuante para voltar à home */}
			<Link
				to="/"
				className="fixed bottom-8 right-8 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
				aria-label={t('navigation.backToHome')}
				title={t('navigation.backToHome')}
			>
				<Home className="w-5 h-5" aria-hidden="true" />
			</Link>

			<div className="max-w-4xl mx-auto">
				{/* Cabeçalho com logo e título */}
				<div className="text-center mb-12">
					<div className="flex justify-center mb-6">
						<CompanyLogo size="md" />
					</div>

					<div className="flex items-center justify-center gap-3 mb-4">
						<Info className="w-8 h-8 text-purple-600" aria-hidden="true" />
						<h1 className="text-3xl md:text-4xl text-gray-900 font-bold">
							{t('about.title')}
						</h1>
					</div>

					<p className="text-gray-600 max-w-2xl mx-auto">
						{t('about.subtitle')}
					</p>
				</div>

				{/* Conteúdo sobre a empresa */}
				<div className="prose prose-gray max-w-none">
					{/* Introdução */}
					<section className="mb-8">
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('about.introduction.content1')}
						</p>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('about.introduction.content2')}
						</p>
					</section>

					{/* Quem Somos */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('about.whoWeAre.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('about.whoWeAre.content')}
						</p>
					</section>

					{/* Nosso Trabalho */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('about.ourWork.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('about.ourWork.content')}
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
							<li>{t('about.ourWork.items.0')}</li>
							<li>{t('about.ourWork.items.1')}</li>
							<li>{t('about.ourWork.items.2')}</li>
							<li>{t('about.ourWork.items.3')}</li>
						</ul>
						<p className="text-gray-700 leading-relaxed mt-4">
							{t('about.ourWork.commitment')}
						</p>
					</section>

					{/* Missão */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('about.mission.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('about.mission.content')}
						</p>
					</section>

					{/* Contato */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('about.contact.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('about.contact.content')}
						</p>
						<p className="text-gray-700 mb-2">
							<strong>Email:</strong>{' '}
							<a
								href="mailto:contato@mauberinformatica.com"
								className="text-purple-600 hover:text-purple-700 transition-colors"
							>
								contato@mauberinformatica.com
							</a>
						</p>
						<p className="text-gray-700">
							<strong>Website:</strong>{' '}
							<a
								href="https://mauberinformatica.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-purple-600 hover:text-purple-700 transition-colors"
							>
								https://mauberinformatica.com
							</a>
						</p>
					</section>

					{/* Links Importantes */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('about.importantLinks.title')}
						</h2>
						<ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
							<li>
								<Link
									to="/privacy"
									className="text-purple-600 hover:text-purple-700 transition-colors"
								>
									{t('about.importantLinks.privacy')}
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="text-purple-600 hover:text-purple-700 transition-colors"
								>
									{t('about.importantLinks.terms')}
								</Link>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</main>
	);
}
