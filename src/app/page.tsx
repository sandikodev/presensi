import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <header>
                <h1>selamat datang di aplikasi presensi </h1>
            </header>
            <section>
                <div>
                    <div>Welcome, <strong>Guest</strong>!</div>
                    <div className="flex gap-2 text-sm mt-1">
                        <LinkButton href="/login">Login</LinkButton>
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
    return <Link href={href} className="text-white/30 hover:text-white transition duration-100 ease-in-out">{children}</Link>
}
