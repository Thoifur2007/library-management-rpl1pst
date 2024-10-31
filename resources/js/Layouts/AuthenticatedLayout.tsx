import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Sidebar, SidebarBody, SidebarLink } from '@/Components/ui/sidebar';
import { Head, Link, usePage } from '@inertiajs/react';
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from '@tabler/icons-react';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

        const links = [
            {
              label: "Dashboard",
              href: "#",
              icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            },
            {
              label: "Profile",
              href: "#",
              icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            },
            {
              label: "Settings",
              href: "#",
              icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            },
            {
              label: "Logout",
              href: "#",
              icon: (
                <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            },
          ];
          const [open, setOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100-100 dark:bg-neutral-900">
        	<Sidebar open={open} setOpen={setOpen}>
            	<SidebarBody className="justify-between gap-10">
                	<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    	<Logo />
                    	<div className="mt-8 flex flex-col gap-2">
                        	{links.map((link, idx) => (
                            	<SidebarLink key={idx} link={link} />
                        	))}
                    	</div>
                	</div>
                	<div>
                    	<SidebarLink
                        	link={{
                            	label: user.name,
                            	href: "#",
                            	icon: (
                                	<img
                                    	src="https://assets.aceternity.com/manu.png"
                                    	className="h-7 w-7 flex-shrink-0 rounded-full"
                                    	width={50}
                                    	height={50}
                                    	alt="Avatar"
                                	/>
                            	),
                        	}}
                    	/>
                	</div>
            	</SidebarBody>
        	</Sidebar>

        	<div className="flex-1 flex flex-col">
            	<Head title="Dashboard" />

            	{header && (
                	<header className="bg-white shadow dark:bg-neutral-800">
                    	<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-gray-800 dark:text-white">
                        	{header}
                    	</div>
                	</header>
            	)}

            	<main className="flex-1 p-4">
                	{children}
            	</main>
        	</div>
    	</div>
	);
}

// Komponen Logo untuk sidebar
function Logo() {
	return (
    	<Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black dark:text-white py-1 relative z-20">
        	<img src='image/foto2.png' alt='logo buku' className="h-5 w-6 dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        	<span className="font-medium">Library Pesat IT XPRO</span>
    	</Link>
	);
}

    
