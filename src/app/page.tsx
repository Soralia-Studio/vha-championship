import Footer from '@/components/footer';
import Image from 'next/image';

export default function Home() {
    return (
        <div className='h-screen overflow-hidden flex flex-col'>
            {/* Hero content — centered vertically in the viewport */}
            <div className='flex-1 flex flex-col items-center justify-center pt-20 sm:pt-24 pb-2'>
                <div className='flex flex-col items-center gap-1'>
                    <Image
                        src={'/ManCafe.png'}
                        alt='logo'
                        width={2560}
                        height={3840}
                        className='h-[38vh] sm:h-[42vh] lg:h-[46vh] w-auto mx-auto drop-shadow-2xl'
                        priority
                    />
                    <span className='font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-widest drop-shadow-lg select-none'>
                        CAFE
                    </span>
                </div>
            </div>

            {/* Footer — sponsors at the bottom */}
            <Footer />
        </div>
    );
}
