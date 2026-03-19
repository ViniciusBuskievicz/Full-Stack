import Link from "next/link";
import {ReactNode} from "react";

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

export function NavLink({href, children}: NavLinkProps) {
    return (
        <Link href={href} className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors mb-2">
            {children}
        </Link>
    );
}