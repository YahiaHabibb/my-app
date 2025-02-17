import { EllipsisVertical } from 'lucide-react'
import CartButton from './cart-button'



const Menu = ({ forAdmin = false }: { forAdmin?: boolean }) => {

    return (
        <div className='flex justify-end'>
            <nav className='md:flex gap-3 hidden w-full'>
        
                {forAdmin ? null : <CartButton />}
            </nav>
            <nav className='md:hidden'>

            <EllipsisVertical className='h-6 w-6' />

                <div className='flex items-center justify-between '>

                </div>

            <CartButton />
        </nav>
    </div>
)
}

export default Menu
