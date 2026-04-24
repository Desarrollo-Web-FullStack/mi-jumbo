import { db } from "../src/back/database.js";
import { setDoc, doc, terminate } from "firebase/firestore";

const initialProducts = [
    {
        id: 1,
        name: "Organic Hass Avocados, Pack of 4",
        price: 4.99,
        category: "Groceries",
        badge: "Fresh",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=300&h=300&fit=crop",
    },
    {
        id: 2,
        name: "Nike Air Zoom Pegasus 39 Men's",
        price: 120.0,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    },
    {
        id: 3,
        name: "Apple Watch Series 8 GPS 41mm",
        price: 349.0,
        originalPrice: 399.0,
        category: "Electronics",
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=300&h=300&fit=crop",
    },
    {
        id: 4,
        name: "Premium Whole Bean Espresso Roast 1kg",
        price: 24.5,
        category: "Groceries",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
    },
    {
        id: 5,
        name: "Hydrating Hyaluronic Acid Serum 30ml",
        price: 32.0,
        category: "Beauty",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
    },
    {
        id: 6,
        name: "Monstera Deliciosa - Medium Pot",
        price: 45.0,
        category: "Home & Living",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&h=300&fit=crop",
    },
    {
        id: 7,
        name: "Sony WH-1000XM5 Noise Cancelling",
        price: 348.0,
        category: "Electronics",
        badge: "Safe Work",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
    },
    {
        id: 8,
        name: "Artisan Sourdough Loaf",
        price: 6.5,
        category: "Groceries",
        badge: "Fresh",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
    },
];

const allProducts = [...initialProducts];

// Generate up to 100 products
for (let i = 9; i <= 100; i++) {
    const baseProduct = initialProducts[(i - 1) % initialProducts.length];
    allProducts.push({
        ...baseProduct,
        id: i,
        name: `${baseProduct.name.split(' (')[0]} - Edition ${i}`,
        price: +(baseProduct.price + (Math.random() * 15)).toFixed(2),
    });
}

const seed = async () => {
    console.log("🚀 Seeding 100 products into Firestore...");

    for (const product of allProducts) {
        try {

            const metaData = doc(db, "products", product.id.toString())

            await setDoc(metaData, product);
            console.log(`✅ Added product ${product.id}: ${product.name}`);
        } catch (e) {
            console.error(`❌ Error adding product ${product.id}: `, e);
        }
    }

    console.log("\n✨ Seeding completed successfully!");
    await terminate(db);
};

seed();
