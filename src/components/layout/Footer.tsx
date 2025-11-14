import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface FooterProps {
	currentYear: number;
}

/**
 * Rodapé da aplicação com links de navegação e informações de copyright
 * Inclui links para diferentes seções e e-mail de contato
 * Usa react-i18next para tradução automática
 */
export function Footer({ currentYear }: FooterProps) {
	const { t } = useTranslation('translation');

	return (
		<footer className="py-8 px-4" role="contentinfo">
			<div className="max-w-4xl mx-auto">
				{/* Links de navegação */}
				<nav className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-gray-600">
					<a
						href="#about"
						className="hover:text-gray-900 transition-colors focus:outline-none focus:text-gray-900"
					>
						{t('navigation.about')}
					</a>
					<a
						href="#apps"
						className="hover:text-gray-900 transition-colors focus:outline-none focus:text-gray-900"
					>
						{t('navigation.apps')}
					</a>
					<Link
						to="/privacy"
						className="hover:text-gray-900 transition-colors focus:outline-none focus:text-gray-900"
					>
						{t('navigation.privacy')}
					</Link>
					<a
						href="mailto:contato@mauberinformatica.com"
						className="hover:text-gray-900 transition-colors inline-flex items-center focus:outline-none focus:text-gray-900"
						aria-label={t('accessibility.contactEmail')}
					>
						<Mail className="w-4 h-4 mr-1" aria-hidden="true" />
						{t('navigation.contact')}
					</a>
				</nav>

				{/* Copyright */}
				<div className="text-center text-sm text-gray-500">
					© {currentYear} Mauber Informática. {t('footer.rights')}
				</div>
			</div>
		</footer>
	);
}
