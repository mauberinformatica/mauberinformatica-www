/**
 * Layout principal da aplicação
 * Container comum para todas as páginas com header, footer e background
 */

import { Suspense, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '@/components/layout/LanguageSelector';
import { Footer } from '@/components/layout/Footer';
import { APP_CONFIG } from '@/constants';

interface LayoutProps {
	children: ReactNode;
}

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
 * Layout principal com background, seletor de idioma e footer
 * Mantém o mesmo visual para todas as páginas
 */
export function Layout({ children }: LayoutProps) {
	const { i18n } = useTranslation('translation');

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

			{/* Conteúdo das páginas */}
			<Suspense fallback={<LoadingFallback />}>{children}</Suspense>

			{/* Rodapé com links e copyright */}
			<Footer currentYear={APP_CONFIG.currentYear} />
		</div>
	);
}
