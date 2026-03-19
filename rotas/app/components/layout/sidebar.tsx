import {NavLink} from "../ui/nav-link";
import {Home, Package} from 'lucide-react';

export function SideBar() {
    return(
        <aside className="w-64 bg-white shadow-lg">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800">SaaS Core</h1>
            </div>
            <nav className="px-4">
                <NavLink href="/"><Home size={20} className="mr-2"/>Home</NavLink>
                <NavLink href="/products"><Package size={20} className="mr-2"/>Produtos</NavLink>
            </nav>
        </aside>
    );
}