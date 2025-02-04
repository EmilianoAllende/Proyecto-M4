"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProducts } from "../context/useProducts";
import { IProduct } from "@/interfaces/Product";
import { getRoute } from "@/app/shared/utils/getRoute";
import { Route } from "@/app/shared/constants/routes";

const SearchBar = () => {
  const { products } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredProducts(
        products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const navigateToProduct = (id: string) => {
    router.push(getRoute(Route.PRODUCT, { id }));
    
    setSearchTerm("");
    setFilteredProducts([]);
  };


  return (
    <div className="relative w-80">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="border p-1 rounded-lg w-full"
      />
      {filteredProducts.length > 0 && (
        <ul className="absolute z-30 bg-white shadow-lg w-full mt-1 max-h-60 overflow-y-auto">
          {filteredProducts.map(product => (
            <li
              key={product.id}
              onClick={() => navigateToProduct(String(product.id))}
              className="p-1 hover:bg-gray-200 cursor-pointer"
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;