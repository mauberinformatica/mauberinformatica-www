/**
 * Configuração do Vite para o projeto Mauber Informática
 * Otimizada para desenvolvimento e build em produção
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
	plugins: [react()],

	resolve: {
		// Extensões de arquivo reconhecidas
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			// Alias para facilitar imports relativos
			'@': path.resolve(__dirname, './src'),
		},
	},

	// Configurações de build otimizadas
	build: {
		target: 'esnext',
		outDir: 'dist',
		sourcemap: true,
		// Otimizações para chunks
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					ui: ['@radix-ui/react-dropdown-menu', '@radix-ui/react-slot'],
					icons: ['lucide-react'],
				},
			},
		},
	},

	// Configurações do servidor de desenvolvimento
	server: {
		port: 3000,
		open: true,
		host: true, // Permite acesso externo
	},

	// Configurações de preview (build local)
	preview: {
		port: 3001,
		open: true,
	},

	// Define variáveis de ambiente disponíveis no cliente
	define: {
		__APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
	},
});
