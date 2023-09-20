import Link from 'next/link';
import React from 'react'

export default function Button({
    text,
    href,
    variant,
    onClick,
    className,
}: ButtonP) {
    const type = 
    variant === 'primary'
    ? 'bg-primary-100 text-white'
    : 'bg-white border border-primary-50 text-black';
    if (href) {
        return (
            <Link href={href}
            className={`${className} flex justify-center items-center gap-2.5 p-4 py-2 rounded-normal ${type}`}>
                <p className='flex-grow-0 flex-shrink-0'>{text}</p>
            </Link>
          );
        }
          else {
            return(
                <button
                onClick={onClick}
                className={`${className} flex justify-center items-center gap-2.5 p-4 py-2 rounded-normal ${type}`}>
                    <p className='flex-grow-0 flex-shrink-0'>{text}</p>
                </button>
            );
          }
    }

 
