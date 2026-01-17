"use client"

import { usePathname, useRouter } from "next/navigation";


const CartButton = ({item}) => {
    const isLogin=false;
    const router=useRouter();
    const path=usePathname()
    const add2Cart=()=>{

        if (isLogin) alert(item._id)
            else{
              // Change this line in your CartButton.jsx:
              router.push(`/login?callback=${path}`); // Added / before login
            }
    }
    return (
        
      <div>
        <button
        onClick={add2Cart}
        className="btn btn-primary btn-lg w-full rounded-2xl italic font-black uppercase">
          Add to Cart
        </button>
      </div>
    );
};

export default CartButton;