import {MemberCard} from '../components/MemberCard';

const members = [
  { name: 'Nicolas Miguel Uczak', role: 'Back-End Developer', github: 'https://github.com/Niccolaszak', imagem: "https://avatars.githubusercontent.com/u/177274693?s=400&u=1ada2b461a20f5fc33a9eccf87f08932d8dba338&v=4",  },
  { name: 'Vinicius Gabriel Buskievicz', role: 'DevOps', github: 'https://github.com/ViniciusBuskievicz', imagem: "https://avatars.githubusercontent.com/u/177274871?v=4"  },
  { name: 'Gabriel Beledeli Hul', role: 'Tech Lead', github: 'https://github.com/GabrielBeledeli', imagem: "https://avatars.githubusercontent.com/u/125688042?v=4" },
  { name: 'Alisson Eraldo Da Silva', role: 'Front-End Lead', github: 'https://github.com/AlissonnSilva', imagem: "https://avatars.githubusercontent.com/u/168883728?v=4"},
];

export default function Home() {
  return (
    <>
    <header>
      <h1 className="text-3xl font-bold text-center">Quarteto Fantastico</h1>
    </header>
    <main>
      <section>
        <h2 className="text-2xl font-semibold text-center mb-4">Integrantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {members.map((member, index) => (
            <MemberCard key={index} imagem={member.imagem} name={member.name} role={member.role} github={member.github} />
          ))}
        </div>
      </section>

    </main>
      </>    
  );
}
