# Quarteto Fantástico 🦸

Um site moderno para apresentar os membros de um time de desenvolvimento. Exibe informações e perfis do GitHub de cada integrante do grupo com uma interface responsiva e elegante.

## 📋 Sobre o Projeto

**Quarteto Fantástico** é uma página web criada para showcase dos integrantes do time de desenvolvimento. O projeto apresenta cada membro com sua foto de perfil, cargo/função e link direto para o GitHub.

### Integrantes

- **Nicolas Miguel Uczak** - Back-End Developer
- **Vinicius Gabriel Buskievicz** - DevOps
- **Gabriel Beledeli Hul** - Tech Lead
- **Alisson Eraldo Da Silva** - Front-End Lead

## 🛠️ Tecnologias Utilizadas

- **[Next.js 16.1.6](https://nextjs.org/)** - Framework React com renderização otimizada
- **[React 19.2.3](https://react.dev/)** - Biblioteca para construção da UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilities-first
- **[ESLint](https://eslint.org/)** - Ferramenta de linting para manter a qualidade do código

## 🚀 Como Começar

### Pré-requisitos

Você precisa ter instalado:
- Node.js (versão 18+)
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:

```bash
git clone <seu-repositorio>
cd pagina-grupo
```

2. Instale as dependências:

```bash
npm install
```

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

A página será atualizada automaticamente quando você fazer alterações nos arquivos.

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
pagina-grupo/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal da aplicação
│   └── page.tsx             # Página inicial com lista de membros
├── components/
│   └── MemberCard.tsx       # Componente para exibir cada membro
├── public/                  # Arquivos estáticos
├── package.json             # Dependências do projeto
├── tsconfig.json            # Configuração do TypeScript
├── next.config.ts           # Configuração do Next.js
├── eslint.config.mjs        # Configuração do ESLint
└── README.md                # Este arquivo
```

## 🧩 Componentes

### MemberCard

Componente reutilizável que exibe informações de um membro do time.

**Props:**
- `imagem` (string) - URL da foto de perfil
- `name` (string) - Nome do membro
- `role` (string) - Cargo/função do membro
- `github` (string) - URL do perfil GitHub

```tsx
<MemberCard 
  imagem="https://..." 
  name="Nome" 
  role="Função" 
  github="https://github.com/..." 
/>
```

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| npm run dev | Inicia o servidor de desenvolvimento |
| npm run build | Cria a build otimizada para produção |
| npm start | Inicia o servidor em produção |
| npm run lint | Executa o ESLint para verificar a qualidade do código |

## 🎨 Estilos

O projeto utiliza **Tailwind CSS** para estilização. As classes estão distribuídas nos componentes para criar uma interface responsiva que se adapta a diferentes tamanhos de tela:

- **Mobile**: 1 coluna
- **Tablet**: 2 colunas
- **Desktop**: 4 colunas

## 🚢 Deploy

### Vercel (Recomendado)

A forma mais fácil de fazer deploy é usando a [Plataforma Vercel](https://vercel.com):

1. Conecte seu repositório Git ao Vercel
2. Clique em Deploy
3. Sua aplicação estará online automaticamente

Para mais detalhes, confira a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

## 📚 Referências

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação React](https://react.dev/learn)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Como Adicionar Novos Membros

Para adicionar um novo membro ao time, edite o arquivo `app/page.tsx` e adicione um novo objeto ao array `members`:

```tsx
const members = [
  // ... membros existentes
  { 
    name: 'Seu Nome', 
    role: 'Sua Função', 
    github: 'https://github.com/seu-usuario', 
    imagem: 'url-da-sua-foto' 
  },
];
```

## 📄 Licença

Este projeto está livre para uso e modificação.

---
