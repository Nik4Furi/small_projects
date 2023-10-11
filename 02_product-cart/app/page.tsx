import ProductCard from "./components/ProductCard";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <>
    {/* Navbar to navigate the pages  */}
    <Navbar />
      <main className="m-auto p-2 w-4/5">

        <h1 className="text-center">Welcome in product-cart app</h1>
        <p className="text-sm">Here we learn how to create a producat cart using <span className="text-red-500 font-bold">typescript, nextjs and tailwind css</span>, and to store the products use the <span className="text-red-500 font-bold">useReducer </span> hook to performing the methods, I don't know what i am writing but this app is amazing</p>

        {/* Product card to show our products  */}
        <div className="m-2 p-2">
          <h3 className="text-start text-md">Cart our products, and for buying our products gets more profit comparision to others</h3>
          <div className="flex items-center m-2">

            <ProductCard />
          </div>
        </div>
      </main>

    </>
  )
}
