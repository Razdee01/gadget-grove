"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs"

// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

// export async function loginAction(formData) {
//   const email = formData.get("email");
//   const password = formData.get("password");

  
//   if (email === "admin@gadget.com" && password === "admin123") {
//     const cookieStore = await cookies();

//     // Set a cookie to remember the session
//     cookieStore.set("auth_token", "secure_mock_token", {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       maxAge: 60 * 60 * 24, // 24 hours
//       path: "/",
//     });

//     redirect("/add-item"); // Send them straight to the inventory portal
//   } else {
//     return { error: "ACCESS DENIED: INVALID CREDENTIALS" };
//   }
// }

// export async function logoutAction() {
//   const cookieStore = await cookies();
//   cookieStore.delete("auth_token");
//   redirect("/login");
// }
export const postUser=async(payload)=>{
  const {email,password,name}=payload

  if (!email || !password) return null;
  const isExist = await dbConnect(Collection.USERS).findOne({ email });
  if (isExist) {
    return null;
  }
  const newUser = {
    providerId: "credentials",
    name,
    email,
    password: (await bcrypt.hash) * (password, 14),
    role: "user",
  };
  const result=await dbConnect(Collection.USERS).insertOne(newUser)
  if(result.acknowledged){
    return{
      ...result , insertedId:result.insertedId.toString()
    }
  }

}

