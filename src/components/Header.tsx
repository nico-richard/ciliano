// components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'
import {Button} from '@/components/ui/button'

const navItems = [
    {label: 'Accueil', href: '/'},
    {label: 'Coaching', href: '/coaching'},
    {label: 'Réserver', href: '/book'},
    {label: 'A propos', href: '/about'},
    {label: 'Contact', href: '/contact'},
]

export default function Header() {
    return (
        <header className="bg-black text-primary py-4 px-6 shadow">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Image src={'/ciliano.png'} alt='ciliano' width={100} height={100}></Image>
                {/* Navigation */}
                <nav className="flex gap-5">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-accent transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <Button className="bg-primary text-background hover:bg-accent cursor-pointer">
                    Réserver
                </Button>
            </div>
        </header>
    )
}
