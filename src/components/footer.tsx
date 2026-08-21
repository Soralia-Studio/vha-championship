import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className='fixed bottom-0 w-full flex flex-col justify-center items-center mb-9'>
            <Image 
                src={'/collaborator.png'}
                alt='collaborator'
                width={610}
                height={183}
                className='w-full max-w-152 h-auto'
            />
        </footer>
    )
}

export default Footer;