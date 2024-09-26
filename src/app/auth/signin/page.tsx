import db from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import SignIn from "./SignIn";

export default async function SignInPage() {
    const user = await db.user.current();
    if (user) redirect("/dashboard");
    return <SignIn />;
}