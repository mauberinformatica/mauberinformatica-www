/**
 * Página 404 - Página não encontrada
 * Seguindo o mesmo look and feel da landing page principal
 */

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { CompanyLogo } from '@/components/ui/CompanyLogo';
import { Button } from '@/components/ui/button';

/**
 * Componente da página 404
 * Página de erro personalizada com navegação de volta para home
 */
export function NotFound() {
	const { t } = useTranslation('translation');
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate('/');
	};

	return (
		<main
			id="main"
			className="flex-1 flex items-center justify-center px-4 py-20"
			role="main"
		>
			<div className="max-w-2xl w-full text-center">
				{/* Logo da empresa - mesmo da landing page */}
				<CompanyLogo />

				{/* Título da página 404 */}
				<h1 className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
					{t('notFound.title')}
				</h1>

				{/* Descrição do erro */}
				<p className="text-lg md:text-xl text-gray-700 mb-12 max-w-xl mx-auto leading-relaxed">
					{t('notFound.description')}
				</p>

				{/* Botão para voltar à home */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Button
						onClick={handleGoHome}
						className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-md transition-colors duration-200 font-medium inline-flex items-center justify-center gap-3"
						style={{ width: '260px', height: '65px' }}
						aria-label={t('notFound.backHome')}
					>
						<Home className="w-5 h-5" aria-hidden="true" />
						{t('notFound.backHome')}
					</Button>
				</div>

				{/* Informação adicional discreta */}
				<div className="mt-16 text-sm text-gray-500">
					<p>
						{t('header.company')} • {t('header.tagline')}
					</p>
				</div>
			</div>
		</main>
	);
}
