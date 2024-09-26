import db from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

export const VerifyRequest = async () => {
    const user = await db.user.current();
    if (user) redirect(`${process.env.NEXT_PUBLIC_PAGE_LOGGED_HOME}`);
    return (
        <>
            <h2 className="text-xl font-semibold">Check your email</h2>
            <p>A sign in link has been sent to your email address.</p>
        </>
    );
};

export default VerifyRequest;