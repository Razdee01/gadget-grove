"use server";

import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

const COLLECTION_NAME = "items";

// 1. Get All Products (For the Items Page)
export async function getAllProducts() {
  try {
    const collection = dbConnect(COLLECTION_NAME);
    const items = await collection.find({}).toArray();
    return items.map((item) => ({ ...item, _id: item._id.toString() }));
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
}

// 2. Get Featured Products (For Home Page - limit 3)
export async function getFeaturedProducts() {
  try {
    const collection = dbConnect(COLLECTION_NAME);
    const items = await collection.find({}).limit(3).toArray();
    return items.map((item) => ({ ...item, _id: item._id.toString() }));
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

// 3. Get Single Product 
export async function getSingleProduct(id) {
  try {
    // 1. Validate if 'id' exists and is exactly 24 hex characters
    if (!id || typeof id !== "string" || id.length !== 24) {
      console.warn("Invalid ID format provided:", id);
      return null;
    }

    const collection = dbConnect("items");

    // 2. Perform the find
    const item = await collection.findOne({ _id: new ObjectId(id) });

    if (!item) return null;

    // 3. Return the plain object
    return { ...item, _id: item._id.toString() };
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// 4. Add New Product
export async function addProduct(formData) {
  try {
    const collection = dbConnect("items");
    const newItem = {
      name: formData.get("name"),
      price: parseFloat(formData.get("price")),
      description: formData.get("description"),
      image: formData.get("image"),
      category: formData.get("category"),
    };

    const result = await collection.insertOne(newItem);


    revalidatePath("/items");
    return { success: true, id: result.insertedId.toString() };
  } catch (error) {
    console.error("Error adding product:", error);
    return { success: false };
  }
}
