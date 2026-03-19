import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div>
      <header className="mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Bem-vindo ao Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Gerencie seus produtos, visualize relatórios e acesse todas as funcionalidades do seu painel administrativo.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Produtos</h2>
          <p className="text-gray-600 mb-6">
            Visualize e gerencie todos os seus produtos disponíveis no sistema.
          </p>
          <Link
            href="/products"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Ver Produtos
          </Link>
        </div>
      </div>

      <footer className="text-center text-gray-500">
        <p>&copy; 2026 Dashboard App. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}