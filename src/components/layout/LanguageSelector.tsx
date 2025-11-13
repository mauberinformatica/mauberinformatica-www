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
 * Configuração de idiomas com bandeiras e informações
 */
const languageConfig: Record<
	SupportedLanguage,
	{
		flag: string;
		name: string;
		nativeName: string;
	}
> = {
	'pt-BR': {
		flag: brFlag,
		name: 'Português (Brasil)',
		nativeName: 'Português (Brasil)',
	},
	'pt-PT': {
		flag: ptFlag,
		name: 'Português (Portugal)',
		nativeName: 'Português (Portugal)',
	},
	en: {
		flag: usFlag,
		name: 'English',
		nativeName: 'English',
	},
	es: {
		flag: esFlag,
		name: 'Español',
		nativeName: 'Español',
	},
	ja: {
		flag: jpFlag,
		name: 'Japanese',
		nativeName: '日本語',
	},
	fr: {
		flag: frFlag,
		name: 'Français',
		nativeName: 'Français',
	},
	de: {
		flag: deFlag,
		name: 'Deutsch',
		nativeName: 'Deutsch',
	},
	it: {
		flag: itFlag,
		name: 'Italiano',
		nativeName: 'Italiano',
	},
};

/**
 * Seletor de idioma com bandeiras reais em imagens
 * Suporte expandido para 8 idiomas diferentes
 */
export function LanguageSelector() {
	const { i18n, t } = useTranslation('translation');
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
				{/* Botão trigger - bandeira real em imagem (tamanho bem pequeno) */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							setIsOpen(!isOpen);
						}
					}}
					className="shadow-lg hover:shadow-xl transition-all duration-200 w-6 h-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 overflow-hidden border border-gray-200"
					aria-label={`${t('accessibility.selectLanguage')} - ${
						currentConfig.nativeName
					}`}
					aria-expanded={isOpen}
					aria-haspopup="listbox"
					type="button"
				>
					<img
						src={currentConfig.flag}
						alt={`${currentConfig.name} flag`}
						className="w-full h-full object-cover"
						loading="lazy"
					/>
				</button>

				{/* Dropdown content - bandeiras reais em imagem (tamanho bem pequeno) */}
				{isOpen && (
					<div
						className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-xl rounded-lg z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200 p-1.5"
						role="listbox"
						aria-label="Selecionar idioma"
					>
						<div className="grid grid-cols-2 gap-1">
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
									className={`relative hover:bg-gray-50 focus:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-6 h-4 rounded overflow-hidden border border-gray-200 ${
										currentLanguage === code ? 'ring-2 ring-blue-500' : ''
									}`}
									role="option"
									aria-selected={currentLanguage === code}
									aria-label={config.nativeName}
									type="button"
									title={config.nativeName}
								>
									<img
										src={config.flag}
										alt={`${config.name} flag`}
										className="w-full h-full object-cover"
										loading="lazy"
									/>
									{currentLanguage === code && (
										<Check
											className="w-2 h-2 text-blue-600 absolute -top-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-sm"
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
