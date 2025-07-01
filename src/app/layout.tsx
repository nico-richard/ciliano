import type {Metadata} from "next";
import {Rajdhani} from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-rajdhani',
})

export const metadata: Metadata = {
    title: "Ciliano",
    description: "Améliore ton niveau sur League of Legends",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${rajdhani.variable}`}
        >
        {children}
        </body>
        </html>
    );
}
