import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Home() {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()

    console.log(data.user?.confirmed_at)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <header>
                <h1>Selamat datang di aplikasi presensi </h1>
            </header>
            <section>
                <div>
                    <div>Welcome, <strong>{data.user ? data.user.user_metadata.full_name : 'Guest'}</strong>!</div>
                    <div className="flex gap-2 text-sm mt-1">
                        <LinkButton href="/login">Login</LinkButton>
                        {/* <LinkButton href="/logout">Logout</LinkButton> */}
                    </div>
                </div>
            </section>
            <footer>
                <p>created by sandikodev</p>
            </footer>
        </main>
    );
}

const LinkButton = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return <Link href={href} className="hover:text-gray-700 dark:text-white/30 dark:hover:text-white transition duration-100 ease-in-out">{children}</Link>
}
