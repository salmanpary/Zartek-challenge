import React from "react"
import { FiArrowLeft } from "react-icons/fi";
import {FaShoppingCart} from "react-icons/fa"
const Navbar=(props)=>{
    return(
        <nav className="flex m-3">
<FiArrowLeft color="gray" size="1.5em" className="md:hidden"/>
<a href="/" className="text-tiny font-bold text-gray-500 px-3">UNI Resto Cafe</a>
<a href="/" className="ml-auto text-tiny font-semibold text-gray-500 px-3">My Orders</a>
<div className="">
<FaShoppingCart color="gray" size="1.5em" className="mx-2"/>
<div className="bg-red-600 text-center rounded-3xl w-4 relative mx-6 -my-7 text-xs text-white">
{props.value}
</div>
</div>
        </nav>
    )

}
export default Navbar