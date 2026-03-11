'use client';

import { Button } from "./components/ui/button";
import { Card, CardHeader, CardContent } from "./components/ui/card";
import {Trash2} from 'lucide-react';

export default function App(){
  return (
    <div className="">
      <Card className="">
        <CardHeader title="Novo Produto" description="gerencie os detalhes do item abaixo." />
        <CardContent>
          <p>Deseja excluir este produto?</p>
          <div className="">
            <Button variant="ghost">Cancelar</Button>
            <Button variant="danger" icon={<Trash2 size ={18}/>} onClick={()=>alert("Deletado!")}>Confirmar Exclusão</Button>
          </div>

        </CardContent>
      
      </Card>
    </div>
  );
}