import { CartHead } from "../Components/cartHead"
import { Cart2 } from "../Components/cart2"
import { MainCart } from "../Components/CartMain"
import { Choose } from "../Components/choose"

export const Cart = () => {
    return (
        
        <div className="w-full bg-gray-100">
             <CartHead/>
        <Cart2/>
        <MainCart/>
        
        <Choose/>
       </div>
        
    )
}