import { ShoppingCartIcon, } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
    return (
        <div className='flex justify-end'>
            <nav className='flex gap-3 w-full'>

                <Link href='/cart' className='header-button'>
                    <div className='flex items-end'>
                    <ShoppingCartIcon className='h-6 w-6' />
                    </div>
                </Link>
                <Link href='/signin' className='flex items-center header-button'>
                Hello, Sign in
                </Link>

            </nav>
        </div>
    )
}