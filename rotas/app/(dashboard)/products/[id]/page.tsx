import Link from 'next/link';

interface ProductDetailsProps{
    params: Promise<{id: string}>;
}

export default async function ProductDetails({params} : ProductDetailsProps){
    const {id} = await params;
    const products = [
        {id: '1', name: 'Assinatura Premium', description: 'Acesso ilimitado a todos os recursos premium por um ano, incluindo suporte prioritário e atualizações exclusivas.'},
        {id: '2', name: 'Pack de Templates', description: 'Coleção completa de templates profissionais para websites, apresentações e documentos, prontos para uso imediato.'},
        {id: '3', name: 'Consultoria Individual', description: 'Sessão personalizada de consultoria com especialistas para otimizar seus projetos e estratégias de negócio.'},
    ];

    const product = products.find(p => p.id === id);
    const currentIndex = products.findIndex(p => p.id === id);
    const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
    const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

    if (!product) {
        return <div className="min-h-screen bg-gray-100 p-8"><h1 className="text-2xl font-bold text-red-600">Produto não encontrado</h1><p>ID procurado: {id}</p><p>IDs disponíveis: {products.map(p => p.id).join(', ')}</p></div>;
    }

    return(
        <div>
            <div className="mb-8 flex justify-between items-center">
                <Link href="/products" className="inline-flex items-center bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
                    ← Voltar aos Produtos
                </Link>
                <div className="flex space-x-4">
                    {prevProduct && (
                        <Link href={`/products/${prevProduct.id}`} className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                            ← Anterior
                        </Link>
                    )}
                    {nextProduct && (
                        <Link href={`/products/${nextProduct.id}`} className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                            Próximo →
                        </Link>
                    )}
                </div>
            </div>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Detalhes do Produto</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">Nome:</h3>
                    <p className="text-gray-600">{product.name}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">ID:</h3>
                    <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">{id}</code>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">Descrição:</h3>
                    <p className="text-gray-600">{product.description}</p>
                </div>
            </div>
        </div>
    );
}