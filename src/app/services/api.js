
"use server";

export async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products', {
            cache: 'no-store' 
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}