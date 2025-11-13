import { Globe, Check } from 'lucide-react';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '@/lib/i18n';

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
		flag: '🇧🇷',
		name: 'Português (Brasil)',
		nativeName: 'Português (Brasil)',
	},
	'pt-PT': {
		flag: '🇵🇹',
		name: 'Português (Portugal)',
		nativeName: 'Português (Portugal)',
	},
	en: {
		flag: '🇺🇸',
		name: 'English',
		nativeName: 'English',
	},
	es: {
		flag: '🇪🇸',
		name: 'Español',
		nativeName: 'Español',
	},
	ja: {
		flag: '🇯🇵',
		name: 'Japanese',
		nativeName: '日本語',
	},
};

/**
 * Seletor de idioma moderno com bandeiras e nomes nativos
 * Usa react-i18next para persistência e detecção automática
 */
export function LanguageSelector() {
	const { i18n, t } = useTranslation('common');

	const currentLanguage = i18n.language as SupportedLanguage;
	const currentConfig =
		languageConfig[currentLanguage] || languageConfig['pt-BR'];

	const handleLanguageChange = (language: SupportedLanguage) => {
		i18n.changeLanguage(language);
	};

	return (
		<div className="fixed top-6 right-6 z-50">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 border border-white/20 min-w-[100px]"
						aria-label={t('accessibility.selectLanguage')}
					>
						<div className="flex items-center gap-2">
							<span className="text-lg" role="img" aria-hidden="true">
								{currentConfig.flag}
							</span>
							<span className="hidden sm:inline text-sm font-medium text-gray-700">
								{currentLanguage.toUpperCase()}
							</span>
							<Globe
								className="w-4 h-4 text-gray-500 ml-1"
								aria-hidden="true"
							/>
						</div>
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent
					align="end"
					className="w-56 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl"
				>
					{Object.entries(languageConfig).map(([code, config]) => (
						<DropdownMenuItem
							key={code}
							onClick={() => handleLanguageChange(code as SupportedLanguage)}
							className="flex items-center justify-between px-3 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors"
						>
							<div className="flex items-center gap-3">
								<span
									className="text-lg"
									role="img"
									aria-label={`${config.name} flag`}
								>
									{config.flag}
								</span>
								<div className="flex flex-col items-start">
									<span className="text-sm font-medium text-gray-800">
										{config.nativeName}
									</span>
									<span className="text-xs text-gray-500">{config.name}</span>
								</div>
							</div>

							{currentLanguage === code && (
								<Check className="w-4 h-4 text-blue-600" aria-hidden="true" />
							)}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
