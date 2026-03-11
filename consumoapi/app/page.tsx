'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { User, Loader2, AlertCircle, Search } from 'lucide-react';

//Contrato
interface UserData {
  id: number;
  name: string;
  email: string;
  company: {name: string;};

}

export default function UsusariosPage() { 
  const [users, setUsers] = useState<UserData[]>([]);// dados
  const [loading, setLoading] = useState(true);// carregamento de dados
  const [error, setError] = useState<string | null>(null);//erro
  const [searchTerm, setSearchTerm] = useState('') //termo de busca

  //Conexão com API
  useEffect(()=> {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //tratamento de erros
        if (!response.ok){
          throw new Error('Falha ao conectar com servidor');
        }
        const data: UserData[] = await response.json();
        setUsers(data);
      }
      catch (err){
        setError("erro desconhecido");
      }
      finally{
        setLoading(false);
      }
    }
    fetchUsers();
  },[]);

  //buscar
  const filtro = users.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <header>
        <h1>Diretório de Usuários</h1>
        <div>
          <Search/>
          <input type='text' placeholder='Filtrar por nome...' onChange = {(e)=>setSearchTerm(e.target.value)}/>
        </div>
      </header>
      {/*Renderização condicional*/}
      {loading && (<div><Loader2/><p>Sincronizando Dados...</p></div>)}
    </div>
  )


}