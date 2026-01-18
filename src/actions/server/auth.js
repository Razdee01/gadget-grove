"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = payload;

  // 1. Validation
  if (!email || !password || !name) return null;

  try {
    // 2. Connect and check existence
    // Use the string "users" directly to avoid "Collection is undefined" errors
    const collection = await dbConnect("users");
    const isExist = await collection.findOne({ email });

    if (isExist) {
      console.log("User already exists");
      return null;
    }

    // 3. Hash Password (Fixed your parenthesis syntax)
    const hashedPassword = await bcrypt.hash(password, 14);

    const newUser = {
      providerId: "credentials",
      name,
      email,
      password: hashedPassword,
      role: "user",
    };

    // 4. Insert
    const result = await collection.insertOne(newUser);

    if (result.acknowledged) {
      return {
        ...result,
        insertedId: result.insertedId.toString(),
      };
    }
  } catch (error) {
    console.error("DB Error in postUser:", error);
    return null;
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) return null;

  try {
    const collection = await dbConnect("users"); // Use "users" here too
    const user = await collection.findOne({ email });

    if (!user) return null;

    const isMatched = await bcrypt.compare(password, user.password);

    if (isMatched) {
      
      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("DB Error in loginUser:", error);
    return null;
  }
};
