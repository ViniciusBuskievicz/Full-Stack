import React from 'react';
import { Input } from "@/src/components/atoms/Input";
import { Button } from "@/src/components/atoms/button";

export function SearchBar(){
    return <div className="flex gap-2">
          <Input placeholder="Buscar..."/>
          <Button >
            Buscar
          </Button>
        </div>
}
