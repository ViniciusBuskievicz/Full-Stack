import DefaultLayout from "../templates/DefaultLayout";
import {MemberCard} from "../molecules/MemberCard";



export default function ComunidadePage() {
    const members = [
      {
        name: "Ana Silva",
        role: "Front-end Developer",
        description: "Especialista em React e apaixonada por interfaces intuitivas.",
        avatarGradientFrom: "from-pink-500",
        avatarGradientTo: "to-yellow-500",
      },
      { 
        name: "Bruno Costa",
        role: "UI/UX Designer",
        description: "Focado em acessibilidade e design systems escaláveis.",   
        avatarGradientFrom: "from-green-500",
        avatarGradientTo: "to-teal-500",
      },
        {
        name: "Carla Dias",
        role: "DevOps Engineer",
        description: "Mestre em Kubernetes e automação de pipelines CI/CD.",    
        avatarGradientFrom: "from-orange-500",
        avatarGradientTo: "to-red-500",
        },
    ];
return (
    <DefaultLayout>
        {members.map((member, index) => (
            <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                description={member.description}
                avatarGradientFrom={member.avatarGradientFrom}
                avatarGradientTo={member.avatarGradientTo}
                onViewProfile={() => alert(`Visualizando perfil de ${member.name}`)}
            />
        ))}
    </DefaultLayout>
  );
}

