import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traduções
import ptBR from '../locales/pt-BR/common.json';
import ptPT from '../locales/pt-PT/common.json';
import en from '../locales/en/common.json';
import es from '../locales/es/common.json';
import ja from '../locales/ja/common.json';

/**
 * Configuração do i18next para internacionalização
 * Suporte a 5 idiomas com detecção automática e persistência
 */

// Recursos de tradução organizados por idioma
const resources = {
	'pt-BR': {
		common: ptBR,
	},
	'pt-PT': {
		common: ptPT,
	},
	en: {
		common: en,
	},
	es: {
		common: es,
	},
	ja: {
		common: ja,
	},
} as const;

// Idiomas suportados
export const supportedLanguages = ['pt-BR', 'pt-PT', 'en', 'es', 'ja'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

// Configuração de detecção de idioma
const detectionOptions = {
	// Ordem de prioridade para detecção
	order: ['localStorage', 'navigator', 'htmlTag'] as const,

	// Cache no localStorage
	caches: ['localStorage'] as const,

	// Chave no localStorage
	lookupLocalStorage: 'mauber-language',
};
i18n
	// Detectar idioma automaticamente
	.use(LanguageDetector)
	// Passar o i18n para react-i18next
	.use(initReactI18next)
	// Inicializar i18next
	.init({
		resources,

		// Idioma padrão
		fallbackLng: 'pt-BR',

		// Namespace padrão
		defaultNS: 'common',

		// Configurações de detecção
		detection: detectionOptions,

		// Configurações de desenvolvimento
		debug: process.env.NODE_ENV === 'development',

		// Interpolação
		interpolation: {
			escapeValue: false, // React já faz escape
		},

		// Configurações de carregamento
		load: 'languageOnly', // Carregar apenas 'en' ao invés de 'en-US'

		// Manter idioma definido mesmo se não houver tradução
		cleanCode: true,

		// Retornar a chave se a tradução não for encontrada
		returnEmptyString: false,
	});

export default i18n;
