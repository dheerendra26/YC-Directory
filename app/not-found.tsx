import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
    return (
        <section className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-12 text-center">
            <div className="relative mb-8">
                <div className="flex size-24 items-center justify-center rounded-full bg-primary/10">
                    <Compass className="size-12 animate-[spin_12s_linear_infinite] text-primary" />
                </div>
                <span className="absolute -right-1 -top-1 size-4 animate-pulse rounded-full bg-secondary" />
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                404 · Page Not Found
            </p>

            <h1 className="mb-4 text-5xl font-black tracking-tight text-black sm:text-7xl">
                Lost your way?
            </h1>

            <p className="mb-8 max-w-md text-base leading-relaxed text-gray-500 sm:text-lg">
                Looks like this page hasn&apos;t made it into our directory yet.
                Let&apos;s get you back to discovering amazing startups.
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-primary px-7 py-3 font-bold text-black shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
                <ArrowLeft className="size-4" />
                Back to Home
            </Link>

            <p className="mt-12 text-xs font-medium tracking-widest text-gray-400">
                KEEP DISCOVERING. KEEP BUILDING.
            </p>
        </section>
    );
}
