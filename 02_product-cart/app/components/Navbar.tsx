import Link from "next/link"


const Navbar = () => {
  return (
    <>
        <nav className="bg-black text-white p-2 mb-3 flex items-center">
            <ul className="flex items-center ">
              <Link href={"/"}>  <li className="mx-8 text-red-500 cursor-pointer">Home</li></Link>
              <Link href={"/cart"}>  <li className="mx-8 text-red-500 cursor-pointer">Cart</li></Link>
                
            </ul>

            <span className="mx-6">Carts Items: 0</span>
        </nav>
    </>
  )
}

export default Navbar
