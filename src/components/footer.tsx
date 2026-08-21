import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className='w-full flex justify-center items-center pb-6 sm:pb-8'>
            <Image
                src={'/collaborator.png'}
                alt='collaborators'
                width={610}
                height={183}
                className='w-64 sm:w-80 md:w-96 lg:w-112 h-auto'
            />
        </footer>
    );
};

export default Footer;