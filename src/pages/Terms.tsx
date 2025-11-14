/**
 * Página de Termos de Uso - Mauber Informática
 * Informações sobre os termos e condições de uso dos serviços
 */

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CompanyLogo } from '@/components/ui/CompanyLogo';
import { FileText, Home } from 'lucide-react';

/**
 * Componente da página de termos de uso
 * Renderiza os termos e condições de uso da empresa
 */
export function Terms() {
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
						<FileText className="w-8 h-8 text-purple-600" aria-hidden="true" />
						<h1 className="text-3xl md:text-4xl text-gray-900 font-bold">
							{t('terms.title')}
						</h1>
					</div>

					<p className="text-gray-600 max-w-2xl mx-auto">
						{t('terms.subtitle')}
					</p>
				</div>

				{/* Conteúdo dos termos */}
				<div className="prose prose-gray max-w-none">
					{/* Aceitação dos Termos */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('terms.acceptance.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('terms.acceptance.content')}
						</p>
					</section>

					{/* Descrição dos Serviços */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('terms.services.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('terms.services.content')}
						</p>
					</section>

					{/* Conta de Usuário */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('terms.userAccount.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('terms.userAccount.content')}
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
							<li>{t('terms.userAccount.items.0')}</li>
							<li>{t('terms.userAccount.items.1')}</li>
							<li>{t('terms.userAccount.items.2')}</li>
							<li>{t('terms.userAccount.items.3')}</li>
						</ul>
					</section>

					{/* Uso Aceitável */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('terms.acceptableUse.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('terms.acceptableUse.content')}
						</p>
						<ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
							<li>{t('terms.acceptableUse.items.0')}</li>
							<li>{t('terms.acceptableUse.items.1')}</li>
							<li>{t('terms.acceptableUse.items.2')}</li>
							<li>{t('terms.acceptableUse.items.3')}</li>
							<li>{t('terms.acceptableUse.items.4')}</li>
						</ul>
					</section>

					{/* Propriedade Intelectual */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('terms.intellectualProperty.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('terms.intellectualProperty.content')}
						</p>
					</section>

					{/* Limitação de Responsabilidade */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('terms.liability.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('terms.liability.content')}
						</p>
					</section>

					{/* Modificações dos Serviços */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('terms.modifications.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('terms.modifications.content')}
						</p>
					</section>

					{/* Rescisão */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('terms.termination.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('terms.termination.content')}
						</p>
					</section>

					{/* Lei Aplicável */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('terms.governingLaw.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('terms.governingLaw.content')}
						</p>
					</section>

					{/* Contato */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							{t('terms.contact.title')}
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							{t('terms.contact.content')}
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
						<p className="text-sm text-gray-500">{t('terms.lastUpdated')}</p>
					</div>
				</div>
			</div>
		</main>
	);
}
