'use client'; // Obrigatório para usar hooks como useState
import { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { User, Image as ImageIcon, Save, Trash2, Plus, Edit, X } from 'lucide-react';

// ============================================
// 1. DEFINIÇÃO DOS TIPOS (Contrato de Engenharia)
// ============================================
interface UserProfile {
  name: string;
  role: string; 
  avatarUrl: string;
}

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

// 2. COMPONENTE PRINCIPAL
export default function PerfilPage() {
  // 2.1 Estado Único como Objeto
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Seu Nome',
    role: 'Sua Profissão',
    avatarUrl: 'https://github.com/github.png'
  });

  // 2.2 Handler de Mudanças de Input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // POR QUE NÃO FAZER: profile[name] = value?
    // Porque o React só re-renderiza se a referência do objeto mudar!
    setProfile((prevState) => ({
      ...prevState, // Copia tudo que já existia
      [name]: value // Sobrescreve apenas o campo que mudou
    }));
  };

  // 2.3 Handler de Submissão do Formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Perfil salvo com sucesso (Simulação)!');
    console.log('Dados enviados:', profile);
  };

  
  // ----------------------------------------
  // 3. SISTEMA DE ESTOQUE
  // ----------------------------------------

  // 3.1 Estado da Lista de Produtos
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Notebook', quantity: 5, price: 3000 },
    { id: '2', name: 'Mouse', quantity: 15, price: 50 },
    { id: '3', name: 'Teclado', quantity: 8, price: 150 }
  ]);

  // Estado para o formulário de novo produto
  const [newProduct, setNewProduct] = useState({
    name: '',
    quantity: 0,
    price: 0
  });

  // Estado para edição de produto
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState({
    name: '',
    quantity: 0,
    price: 0
  });

  // Estado para confirmação de exclusão
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deletingProductName, setDeletingProductName] = useState('');


  // 3.2 Handler para Mudanças no Formulário de Produto
  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: name === 'name' ? value : parseFloat(value) || 0
    }));
  };


  // 3.3 Handler para Adicionar Novo Produto
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name.trim()) {
      alert('Por favor, preencha o nome do produto!');
      return;
    }

    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name,
      quantity: newProduct.quantity,
      price: newProduct.price
    };

    setProducts([...products, product]);
    setNewProduct({ name: '', quantity: 0, price: 0 });
    console.log('Produto adicionado:', product);
  };


  // 3.4 Handler para Remover Produto
  const handleRemoveProduct = (id: string) => {
    const product = products.find(p => p.id === id);
    if (product) {
      setDeletingId(id);
      setDeletingProductName(product.name);
    }
  };


  // 3.4.1 Handler para Confirmar Exclusão
  const handleConfirmDelete = () => {
    if (deletingId) {
      setProducts(products.filter(product => product.id !== deletingId));
      console.log('Produto removido com ID:', deletingId);
      setDeletingId(null);
      setDeletingProductName('');
    }
  };


  // 3.4.2 Handler para Cancelar Exclusão
  const handleCancelDelete = () => {
    setDeletingId(null);
    setDeletingProductName('');
  };


  // 3.5 Handler para Atualizar Quantidade de Produto
  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };


  // ----------------------------------------
  // 3.6 Handlers para Edição de Produto
  // ----------------------------------------

  // 3.6.1 Handler para Abrir Formulário de Edição
  const handleOpenEdit = (product: Product) => {
    setEditingId(product.id);
    setEditingProduct({
      name: product.name,
      quantity: product.quantity,
      price: product.price
    });
  };


  // 3.6.2 Handler para Fechar Formulário de Edição
  const handleCloseEdit = () => {
    setEditingId(null);
    setEditingProduct({ name: '', quantity: 0, price: 0 });
  };


  // 3.6.3 Handler para Mudanças no Formulário de Edição
  const handleEditingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingProduct((prevState) => ({
      ...prevState,
      [name]: name === 'name' ? value : parseFloat(value) || 0
    }));
  };


  // 3.6.4 Handler para Salvar Edição
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct.name.trim()) {
      alert('Por favor, preencha o nome do produto!');
      return;
    }

    setProducts(products.map(product =>
      product.id === editingId
        ? { ...product, ...editingProduct }
        : product
    ));
    handleCloseEdit();
    console.log('Produto atualizado com ID:', editingId);
  };

  // 2.4 Renderização (JSX)
  return (
    <>
    <div className="min-h-screen bg-slate-950 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      
      {/*COLUNA 1: FORMULÁRIO*/}
      <Card>
        <CardHeader title="Editor de Perfil" description="Altere as informações abaixo." />
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Campo: Nome Completo */}
            <div>
              <label className="block text-sm font-medium mb-1 ">Nome Completo</label>
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
              />
            </div>

            {/* Campo: Cargo/Função */}
            <div>
              <label className="block text-sm font-medium mb-1">Cargo/Função</label>
              <input
                name="role"
                value={profile.role}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
              />
            </div>

            {/* Campo: URL da Foto */}
            <div>
              <label className="block text-sm font-medium mb-1">URL da Foto</label>
              <input
                name="avatarUrl"
                value={profile.avatarUrl}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
              />
            </div>

            {/* Botão de Submissão */}
            <Button type="submit" className="w-full" icon={<Save size={18} />}>
              Salvar Perfil
            </Button>

          </form>
        </CardContent>
      </Card>

      {/* COLUNA 2: PREVIEW DO CRACHÁ */}
      <div className="flex flex-col items-center">
        <h2 className=" font-bold mb-4 uppercase tracking-widest text-sm">
          Preview do Crachá
        </h2>

        {/* Container Principal do Crachá */}
        <div className="relative w-64 h-96 bg-black rounded-3xl shadow-2xl border-t-[12px] border-gray-800 overflow-hidden flex flex-col items-center p-6 text-center">
          
          {/* Avatar Circular */}
          <div className="w-32 h-32 rounded-full border-4 border-gray-800 overflow-hidden mb-4 bg-slate-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatarUrl}
              alt="Avatar"
              className="w-full h-full object-cover"
              onError={(e) => { 
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150' 
              }}
            />
          </div>

          {/* Nome */}
          <h3 className="text-xl font-bold text-slate-200 break-words w-full">
            {profile.name || 'Nome Vazio'}
          </h3>

          {/* Cargo */}
          <p className="text-blue-900 font-medium mb-4">
            {profile.role || 'Cargo Vazio'}
          </p>

          {/* Rodapé com Ícones */}
          <div className="mt-auto pt-4 border-t w-full flex justify-around text-slate-400">
            <User size={20} />
            <ImageIcon size={20} />
          </div>

          {/* Efeito de Detalhe (Topo do Crachá) */}
          <div className="absolute top-2 w-12 h-1.5 bg-gray-800 rounded-full" />

        </div>
        {/* Fim do Container do Crachá */}

      </div>
      {/* Fim da Coluna 2 */}

    </div>
    {/* Fim do Container Principal de Perfil */}

    {/* ========================================
        SEÇÃO 2: SISTEMA DE ESTOQUE
        ======================================== */}
    <div className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-3xl font-bold text-slate-200 mb-8">📦 Sistema de Estoque</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ========== COLUNA 1: FORMULÁRIO DE NOVO PRODUTO ========== */}
        <Card className="h-fit sticky top-8">
          <CardHeader title="Adicionar Produto" description="Insira os dados do novo produto." />
          <CardContent>
            <form onSubmit={handleAddProduct} className="space-y-4">
              
              {/* Campo: Nome do Produto */}
              <div>
                <label className="block text-sm font-medium mb-1">Nome do Produto</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleProductChange}
                  placeholder="Ex: Notebook"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
                />
              </div>

              {/* Campo: Quantidade */}
              <div>
                <label className="block text-sm font-medium mb-1">Quantidade</label>
                <input
                  type="number"
                  name="quantity"
                  value={newProduct.quantity}
                  onChange={handleProductChange}
                  min="0"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
                />
              </div>

              {/* Campo: Preço */}
              <div>
                <label className="block text-sm font-medium mb-1">Preço (R$)</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleProductChange}
                  min="0"
                  step="0.01"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
                />
              </div>

              {/* Botão de Submissão */}
              <Button type="submit" className="w-full" icon={<Plus size={18} />}>
                Adicionar Produto
              </Button>

            </form>
          </CardContent>
        </Card>

        {/* ========== COLUNA 2 E 3: LISTA DE PRODUTOS ========== */}
        <Card className="lg:col-span-2">
          <CardHeader title="Produtos em Estoque" description={`Total de produtos: ${products.length}`} />
          <CardContent>
            {products.length === 0 ? (
              <p className="text-slate-400 text-center py-8">Nenhum produto no estoque.</p>
            ) : (
              <div className="space-y-3">
                {products.map((product) => (
                  <div key={product.id} className="border rounded-lg p-4 bg-slate-900 border-slate-700 flex items-center justify-between gap-4">
                    
                    {/* Informações do Produto */}
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-200">{product.name}</h3>
                      
                      {/* Alerta de Estoque Baixo */}
                      {product.quantity < 4 && (
                        <div className="mt-2 px-3 py-2 bg-red-900 border border-red-700 rounded text-red-300 text-sm font-semibold">
                          ⚠️ ESTOQUE BAIXO - Apenas {product.quantity} unidade{product.quantity !== 1 ? 's' : ''} disponível!
                        </div>
                      )}

                      <div className="flex gap-4 mt-2 text-sm text-slate-400">
                        <span>Qtd: <span className="text-blue-400 font-semibold">{product.quantity}</span></span>
                        <span>Preço: <span className="text-green-400 font-semibold">R$ {product.price.toFixed(2)}</span></span>
                        <span>Total: <span className="text-yellow-400 font-semibold">R$ {(product.quantity * product.price).toFixed(2)}</span></span>
                      </div>
                    </div>

                    {/* Controles */}
                    <div className="flex gap-2 items-center">
                      {/* Botão Diminuir */}
                      <button
                        onClick={() => handleUpdateQuantity(product.id, Math.max(0, product.quantity - 1))}
                        className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-sm font-semibold text-slate-200"
                      >
                        −
                      </button>

                      {/* Botão Aumentar */}
                      <button
                        onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}
                        className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-sm font-semibold text-slate-200"
                      >
                        +
                      </button>

                      {/* Botão Editar */}
                      <button
                        onClick={() => handleOpenEdit(product)}
                        className="p-2 bg-blue-900 hover:bg-blue-800 rounded text-slate-200 transition"
                        title="Editar produto"
                      >
                        <Edit size={16} />
                      </button>

                      {/* Botão Deletar */}
                      <button
                        onClick={() => handleRemoveProduct(product.id)}
                        className="p-2 bg-red-900 hover:bg-red-800 rounded text-slate-200 transition"
                        title="Remover produto"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* Resumo Financeiro */}
            {products.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex justify-between items-center bg-slate-800 p-4 rounded-lg">
                  <span className="font-bold text-slate-200">Valor Total do Estoque:</span>
                  <span className="text-2xl font-bold text-green-400">
                    R$ {products.reduce((total, p) => total + (p.quantity * p.price), 0).toFixed(2)}
                  </span>
                </div>
              </div>
            )}

          </CardContent>
        </Card>

      </div>

      {/* ========== MODAL DE EDIÇÃO DE PRODUTO ========== */}
      {editingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader title="Editar Produto" description="Modifique os dados do produto." />
            <CardContent>
              <form onSubmit={handleSaveEdit} className="space-y-4">
                
                {/* Campo: Nome do Produto */}
                <div>
                  <label className="block text-sm font-medium mb-1">Nome do Produto</label>
                  <input
                    type="text"
                    name="name"
                    value={editingProduct.name}
                    onChange={handleEditingChange}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
                  />
                </div>

                {/* Campo: Quantidade */}
                <div>
                  <label className="block text-sm font-medium mb-1">Quantidade</label>
                  <input
                    type="number"
                    name="quantity"
                    value={editingProduct.quantity}
                    onChange={handleEditingChange}
                    min="0"
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
                  />
                </div>

                {/* Campo: Preço */}
                <div>
                  <label className="block text-sm font-medium mb-1">Preço (R$)</label>
                  <input
                    type="number"
                    name="price"
                    value={editingProduct.price}
                    onChange={handleEditingChange}
                    min="0"
                    step="0.01"
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
                  />
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-3">
                  <Button type="submit" className="flex-1" icon={<Save size={18} />}>
                    Salvar
                  </Button>
                  <button
                    type="button"
                    onClick={handleCloseEdit}
                    className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-slate-200 font-semibold flex items-center justify-center gap-2"
                  >
                    <X size={18} />
                    Cancelar
                  </button>
                </div>

              </form>
            </CardContent>
          </Card>
        </div>
      )}
      {/* Fim do Modal de Edição */}

      {/* ========== MODAL DE CONFIRMAÇÃO DE EXCLUSÃO ========== */}
      {deletingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="text-center">
                
                {/* Ícone de Aviso */}
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-red-900 rounded-full">
                    <Trash2 size={32} className="text-red-300" />
                  </div>
                </div>

                {/* Mensagem de Confirmação */}
                <h3 className="text-xl font-bold text-slate-200 mb-2">Confirmar Exclusão</h3>
                <p className="text-slate-400 mb-6">
                  Tem certeza que deseja deletar o produto <span className="font-bold text-slate-200">"{deletingProductName}"</span>? 
                  <br />
                  <span className="text-sm text-red-300 mt-2 block">Esta ação não pode ser desfeita.</span>
                </p>

                {/* Botões de Ação */}
                <div className="flex gap-3">
                  <button
                    onClick={handleCancelDelete}
                    className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-slate-200 font-semibold transition"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleConfirmDelete}
                    className="flex-1 px-4 py-2 bg-red-900 hover:bg-red-800 rounded-md text-slate-200 font-semibold transition flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} />
                    Deletar
                  </button>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {/* Fim do Modal de Confirmação */}
      
    </div>
    {/* Fim da Seção de Estoque */}
    </>
  );
}
