/**
 * Página de Política de Privacidade - Mauber Informática
 * Informações sobre coleta e uso de dados
 */

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CompanyLogo } from '@/components/ui/CompanyLogo';
import { Shield, Home } from 'lucide-react';

/**
 * Componente da página de privacidade
 * Renderiza a política de privacidade da empresa
 */
export function Privacy() {
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
						<Shield className="w-8 h-8 text-purple-600" aria-hidden="true" />
						<h1 className="text-3xl md:text-4xl text-gray-900 font-bold">
							{t('privacy.title')}
						</h1>
					</div>

					<p className="text-gray-600 max-w-2xl mx-auto">
						{t('privacy.subtitle')}
					</p>
				</div>

				{/* Conteúdo da política */}
				<div className="prose prose-gray max-w-none">
					{/* Introdução */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('privacy.introduction.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('privacy.introduction.content')}
						</p>
					</section>

					{/* Coleta de Informações */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('privacy.dataCollection.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('privacy.dataCollection.content')}
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
							<li>{t('privacy.dataCollection.items.0')}</li>
							<li>{t('privacy.dataCollection.items.1')}</li>
							<li>{t('privacy.dataCollection.items.2')}</li>
							<li>{t('privacy.dataCollection.items.3')}</li>
						</ul>
					</section>

					{/* Uso das Informações */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('privacy.dataUsage.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('privacy.dataUsage.content')}
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
							<li>{t('privacy.dataUsage.items.0')}</li>
							<li>{t('privacy.dataUsage.items.1')}</li>
							<li>{t('privacy.dataUsage.items.2')}</li>
							<li>{t('privacy.dataUsage.items.3')}</li>
						</ul>
					</section>

					{/* Compartilhamento de Dados */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('privacy.dataSharing.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('privacy.dataSharing.content')}
						</p>
					</section>

					{/* Segurança */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('privacy.security.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('privacy.security.content')}
						</p>
					</section>

					{/* Direitos do Usuário */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('privacy.userRights.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('privacy.userRights.content')}
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
							<li>{t('privacy.userRights.items.0')}</li>
							<li>{t('privacy.userRights.items.1')}</li>
							<li>{t('privacy.userRights.items.2')}</li>
							<li>{t('privacy.userRights.items.3')}</li>
						</ul>
					</section>

					{/* Cookies */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('privacy.cookies.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('privacy.cookies.content')}
						</p>
					</section>

					{/* Alterações na Política */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('privacy.changes.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('privacy.changes.content')}
						</p>
					</section>

					{/* Contato */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('privacy.contact.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('privacy.contact.content')}
						</p>
						<p className="text-gray-700">
							<strong>Email:</strong>{' '}
							<a
								href="mailto:contato@mauberinformatica.com"
								className="text-purple-600 hover:text-purple-700 transition-colors"
							>
								contato@mauberinformatica.com
							</a>
						</p>
					</section>

					{/* Data de atualização */}
					<div className="text-center mt-12 pt-8 border-t border-gray-200">
						<p className="text-sm text-gray-500">{t('privacy.lastUpdated')}</p>
					</div>
				</div>
			</div>
		</main>
	);
}
