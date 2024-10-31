import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <img src="image/foto1.png" alt=""  className='w-full max-w-md'/>
                <h1 className='font-bold text-xl mt-4'>Selamat Datang di e Perpustakaan SMK Pesat IT XPRO</h1>
                <p className='text-center max-w-screen-lg mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur dolorum repellendus quod quae, voluptates libero! Qui excepturi rem in necessitatibus pariatur eum, voluptatum officiis reprehenderit temporibus odio corporis corrupti?</p>
                <Link href={route('login')} className='p-2 bg-gray-400 mt-2 rounded-lg hover:bg-black hover:text-white'>Explore</Link>
            </div>
        </>
    );
}
