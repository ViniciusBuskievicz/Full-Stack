import React from 'react';
import { SearchBar } from "@/src/components/molecules/SearchBar";

export function Header(){
  return (
        <header className="flex justify-between items-center mb-10 p-6">
        <h1 className="text-3xl font-bold">Membros do Grupo</h1>
        <SearchBar />
      </header>
      )
    }