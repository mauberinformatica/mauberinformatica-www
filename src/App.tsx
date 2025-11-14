/**
 * Aplicação principal da Mauber Informática
 * Website corporativo para divulgação dos aplicativos móveis da empresa
 * Usa react-i18next para internacionalização avançada e React Router para navegação
 */

import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

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
 * App principal com React Router para navegação entre páginas
 * Inclui rota para home (/) e página 404 para todas as outras rotas
 */
export default function App() {
	return (
		<Suspense fallback={<LoadingFallback />}>
			<Router>
				<Layout>
					<Routes>
						{/* Página inicial */}
						<Route path="/" element={<Home />} />

						{/* Página 404 - captura todas as rotas não encontradas */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</Router>
		</Suspense>
	);
}
