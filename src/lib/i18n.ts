import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traduções com estrutura simplificada
import ptBR from '../locales/pt-BR.json';
import ptPT from '../locales/pt-PT.json';
import en from '../locales/en.json';
import es from '../locales/es.json';
import ja from '../locales/ja.json';
import fr from '../locales/fr.json';
import de from '../locales/de.json';
import it from '../locales/it.json';

/**
 * Configuração do i18next para internacionalização
 * Suporte a 8 idiomas com detecção automática e persistência
 */

// Recursos de tradução com estrutura simplificada
const resources = {
	'pt-BR': {
		translation: ptBR,
	},
	'pt-PT': {
		translation: ptPT,
	},
	en: {
		translation: en,
	},
	es: {
		translation: es,
	},
	ja: {
		translation: ja,
	},
	fr: {
		translation: fr,
	},
	de: {
		translation: de,
	},
	it: {
		translation: it,
	},
};

// Idiomas suportados
export const supportedLanguages = [
	'pt-BR',
	'pt-PT',
	'en',
	'es',
	'ja',
	'fr',
	'de',
	'it',
] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'pt-BR',
		defaultNS: 'translation',

		detection: {
			// Ordem de detecção: localStorage primeiro, depois navegador, depois querystring, depois cookie
			order: ['localStorage', 'navigator', 'querystring', 'cookie'],
			// Cache no localStorage para lembrar a escolha do usuário
			caches: ['localStorage'],
			// Nome da chave no localStorage
			lookupLocalStorage: 'mauber-language',
			// Nome do parâmetro na URL (ex: ?lng=en)
			lookupQuerystring: 'lng',
			// Nome do cookie
			lookupCookie: 'mauber-language',

			// Usar apenas os idiomas da whitelist
			convertDetectedLanguage: (lng: string) => {
				// Mapear códigos de idioma do navegador para nossos códigos suportados
				const languageMap: Record<string, SupportedLanguage> = {
					'pt-br': 'pt-BR',
					'pt-BR': 'pt-BR',
					pt: 'pt-BR', // Português genérico -> Brasil
					'pt-pt': 'pt-PT',
					'pt-PT': 'pt-PT',
					en: 'en',
					'en-us': 'en',
					'en-gb': 'en',
					'en-ca': 'en',
					'en-au': 'en',
					es: 'es',
					'es-es': 'es',
					'es-mx': 'es',
					'es-ar': 'es',
					ja: 'ja',
					'ja-jp': 'ja',
					fr: 'fr',
					'fr-fr': 'fr',
					'fr-ca': 'fr',
					de: 'de',
					'de-de': 'de',
					'de-at': 'de',
					'de-ch': 'de',
					it: 'it',
					'it-it': 'it',
				};

				const normalizedLng = lng.toLowerCase();
				return languageMap[normalizedLng] || 'pt-BR'; // Fallback para português Brasil
			},
		},

		// Lista de idiomas suportados para validação
		supportedLngs: supportedLanguages,

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
