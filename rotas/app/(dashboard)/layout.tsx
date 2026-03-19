import { SideBar } from "@/app/components/layout/sidebar";

export default function DashboardLayout({children} : {children: React.ReactNode}){
    return (
        <div className="flex min-h-screen bg-gray-100">
            <SideBar/>
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}