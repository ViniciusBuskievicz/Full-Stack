
interface MemberProps {
imagem: string;
name: string;
role: string;
github: string;
}

export function MemberCard({ imagem, name, role, github }: MemberProps) {
return (
<div className="p-4 border border-slate-800 rounded-lg hover:border-blue-500 transition-colors text-center">
<img src={imagem} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
<h3 className="text-xl font-bold text-white">{name}</h3>

<p className="text-slate-400">{role}</p>

<a className="text-blue-400 hover:text-blue-300" href={github} target="_blank">GitHub Profile</a>
</div>
        )
    }