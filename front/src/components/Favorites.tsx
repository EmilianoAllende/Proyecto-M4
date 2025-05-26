"use client";

import { useFavorites } from "@/contexts/FavoritesContext";
import Card from "@/components/Card/Card";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export const Favorites = () => {
    const { favorites } = useFavorites();
    const { user } = useAuth();
    const router = useRouter();

    if(!user) {
        router.push("/home");
    };

    if (favorites.length === 0) {
        return <p className="text-center text-xl mt-10">You have no favorite products yet.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {favorites.map(product => (
            <Card key={product.id} product={product} />
        ))}
        </div>
    );
};