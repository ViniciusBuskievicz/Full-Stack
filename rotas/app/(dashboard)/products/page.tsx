import Link from 'next/link';

export default function ProductsPage(){
    const products = [
        {id: '1', name: 'Assinatura Premium', description: 'Acesso ilimitado a todos os recursos premium por um ano, incluindo suporte prioritário e atualizações exclusivas.'},
        {id: '2', name: 'Pack de Templates', description: 'Coleção completa de templates profissionais para websites, apresentações e documentos, prontos para uso imediato.'},
        {id: '3', name: 'Consultoria Individual', description: 'Sessão personalizada de consultoria com especialistas para otimizar seus projetos e estratégias de negócio.'},
    ];

    return(
        <div>
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
                    ← Voltar à Home
                </Link>
            </div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Meus Produtos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) =>(
                    <Link key={product.id} href={`/products/${product.id}`} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <span className="text-blue-500 font-medium">Ver detalhes →</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}