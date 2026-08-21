import Footer  from '@/components/footer';
import Image from 'next/image';

export default function Home() {
    return (
        <div className='h-screen min-w-full flex'>
            <div className='flex flex-col justify-center items-center mx-auto'>
                <Image 
                    src={'/soralia_logo.png'}
                    alt='logo'
                    width={2560}
                    height={3840}
                    className='w-75 sm:w-100 lg:w-125 h-auto mx-auto'
                />
                <span className='font-bold text-6xl'>CAFE</span>
            </div>
            <Footer />
        </div>
    );
}
