import { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '@/lib/i18n';

// Importar imagens das bandeiras
import brFlag from '@/assets/flags/br-flag.gif';
import ptFlag from '@/assets/flags/po-flag.gif';
import usFlag from '@/assets/flags/us-flag.gif';
import esFlag from '@/assets/flags/sp-flag.gif';
import jpFlag from '@/assets/flags/ja-flag.gif';
import frFlag from '@/assets/flags/fr-flag.gif';
import deFlag from '@/assets/flags/gm-flag.gif';
import itFlag from '@/assets/flags/it-flag.gif';

/**
 * Componente de bandeira CSS retangular
 */
interface FlagProps {
	country: SupportedLanguage;
	className?: string;
}

function Flag({ country, className = '' }: FlagProps) {
	const baseClasses = 'inline-block border border-gray-300 shadow-sm';

	switch (country) {
		case 'pt-BR':
			return (
				<div
					className={`${baseClasses} ${className}`}
					style={{
						background:
							'linear-gradient(to bottom, #00923f 33.33%, #fed100 33.33%, #fed100 66.66%, #002776 66.66%)',
					}}
				>
					<div className="w-full h-full flex items-center justify-center">
						<div className="w-8 h-8 bg-white rounded-full border-2 border-blue-800 flex items-center justify-center">
							<div className="w-4 h-1 bg-blue-800 rounded"></div>
						</div>
					</div>
				</div>
			);
		case 'pt-PT':
			return (
				<div className={`${baseClasses} ${className} flex`}>
					<div className="w-2/5 bg-green-600"></div>
					<div className="w-3/5 bg-red-600"></div>
				</div>
			);
		case 'en':
			return (
				<div
					className={`${baseClasses} ${className}`}
					style={{
						background:
							'linear-gradient(to bottom, #b22234 7.69%, white 7.69%, white 15.38%, #b22234 15.38%, #b22234 23.08%, white 23.08%, white 30.77%, #b22234 30.77%, #b22234 38.46%, white 38.46%, white 46.15%, #b22234 46.15%, #b22234 53.85%, white 53.85%, white 61.54%, #b22234 61.54%, #b22234 69.23%, white 69.23%, white 76.92%, #b22234 76.92%, #b22234 84.62%, white 84.62%, white 92.31%, #b22234 92.31%)',
					}}
				>
					<div className="w-2/5 h-7/13 bg-blue-800"></div>
				</div>
			);
		case 'es':
			return (
				<div
					className={`${baseClasses} ${className}`}
					style={{
						background:
							'linear-gradient(to bottom, #aa151b 25%, #f1bf00 25%, #f1bf00 75%, #aa151b 75%)',
					}}
				></div>
			);
		case 'ja':
			return (
				<div
					className={`${baseClasses} ${className} bg-white flex items-center justify-center`}
				>
					<div className="w-8 h-8 bg-red-600 rounded-full"></div>
				</div>
			);
		default:
			return <div className={`${baseClasses} ${className} bg-gray-200`}></div>;
	}
}

/**
 * Configuração de idiomas com informações
 */
const languageConfig: Record<
	SupportedLanguage,
	{
		name: string;
		nativeName: string;
	}
> = {
	'pt-BR': {
		name: 'Português (Brasil)',
		nativeName: 'Português (Brasil)',
	},
	'pt-PT': {
		name: 'Português (Portugal)',
		nativeName: 'Português (Portugal)',
	},
	en: {
		name: 'English',
		nativeName: 'English',
	},
	es: {
		name: 'Español',
		nativeName: 'Español',
	},
	ja: {
		name: 'Japanese',
		nativeName: '日本語',
	},
};
/**
 * Seletor de idioma funcional e acessível
 * Implementação manual sem dependências externas problemáticas
 */
export function LanguageSelector() {
	const { i18n, t } = useTranslation('common');
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const currentLanguage = i18n.language as SupportedLanguage;
	const currentConfig =
		languageConfig[currentLanguage] || languageConfig['pt-BR'];

	const handleLanguageChange = (language: SupportedLanguage) => {
		i18n.changeLanguage(language);
		setIsOpen(false);
	};

	// Fechar dropdown ao clicar fora
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Fechar dropdown com ESC
	useEffect(() => {
		function handleEscapeKey(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		}

		document.addEventListener('keydown', handleEscapeKey);
		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, []);

	return (
		<div className="fixed top-6 right-6 z-50" ref={dropdownRef}>
			<div className="relative">
				{/* Botão trigger - bandeira grande retangular */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							setIsOpen(!isOpen);
						}
					}}
					className="shadow-lg hover:shadow-xl transition-all duration-200 w-20 h-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 overflow-hidden"
					aria-label={`${t('accessibility.selectLanguage')} - ${
						currentConfig.nativeName
					}`}
					aria-expanded={isOpen}
					aria-haspopup="listbox"
					type="button"
				>
					<Flag country={currentLanguage} className="w-full h-full" />
				</button>

				{/* Dropdown content - bandeiras grandes retangulares */}
				{isOpen && (
					<div
						className="absolute right-0 mt-4 bg-white border border-gray-200 shadow-xl rounded-2xl z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200 p-3"
						role="listbox"
						aria-label="Selecionar idioma"
					>
						<div className="grid grid-cols-1 gap-2">
							{Object.entries(languageConfig).map(([code, config]) => (
								<button
									key={code}
									onClick={() =>
										handleLanguageChange(code as SupportedLanguage)
									}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											handleLanguageChange(code as SupportedLanguage);
										}
									}}
									className={`relative hover:bg-gray-50 focus:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-20 h-14 rounded-lg overflow-hidden ${
										currentLanguage === code ? 'ring-2 ring-blue-500' : ''
									}`}
									role="option"
									aria-selected={currentLanguage === code}
									aria-label={config.nativeName}
									type="button"
									title={config.nativeName}
								>
									<Flag
										country={code as SupportedLanguage}
										className="w-full h-full"
									/>
									{currentLanguage === code && (
										<Check
											className="w-4 h-4 text-blue-600 absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm"
											aria-hidden="true"
										/>
									)}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
