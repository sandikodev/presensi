"use client";

import { Container, Flex, IconButton, Link } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function Header() {
    const { setTheme } = useTheme();
    const { data: session, status } = useSession();
    const router = useRouter();

    const loading = status === "loading";

    return (
        <Container py={"5"} size="2">
            <Flex gap="5" align={"center"} justify={"center"} direction="row">
                {/* Link component come from radix ui */}
                <Link href="/radix-theme/" weight="medium">Home</Link>
                <Link href="/radix-theme/blogs" weight="medium">Blog</Link>
                <Link href="/radix-theme/about" weight="medium">About us</Link>
                <Link href="/radix-theme/contact" weight="medium">Contact us</Link>
                <div className="w-full h-16 px-4 flex items-center justify-between bg-gray-200 dark:bg-gray-800 rounded-b-lg">
                    <div className="text-left text-md font-semibold text-zinc-100">
                        {!session ? "Not signed in" : `Authenticated`}
                    </div>
                    {!session ? (
                        <>
                            <a
                                href={`/api/auth/signin`}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    signIn();
                                }}
                            >
                                Sign in
                            </a>
                        </>
                    ) : (
                        <a
                            href={`/api/auth/signout`}
                            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                            onClick={(e) => {
                                e.preventDefault();
                                signOut();
                                router.push("/");
                            }}
                        >
                            Sign out
                        </a>
                    )}
                </div>
                {/* Use it onClick event and pass the theme name as an argument. */}
                <IconButton variant="outline" onClick={() => setTheme("light")}>
                    <SunIcon />
                </IconButton>
                <IconButton variant="outline" onClick={() => setTheme("dark")}>
                    <MoonIcon />
                </IconButton>
            </Flex>
        </Container>
    );
}