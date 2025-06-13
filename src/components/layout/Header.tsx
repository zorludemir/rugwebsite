import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import type { FC } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-green-100/95 backdrop-blur supports-[backdrop-filter]:bg-green-100/60">
      <div className="container flex h-20 items-center"> {/* Reduced height from h-24 to h-20 */}
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <Image
            src="/icon.png"
            alt="EuroserPOD Logo"
            width={32}
            height={32}
            className="h-14 w-14"
          />
          <span className="font-bold text-xl">EuroserPOD</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-grow">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <nav className="grid gap-6 text-lg font-medium pt-8">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                   <Image
                    src="/icon.png"
                    alt="EuroserPOD Logo"
                    width={24}
                    height={24}
                    className="h-7 w-7"
                  />
                  <span className="font-bold text-xl">EuroserPOD</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 transition-colors hover:text-accent text-foreground/80"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
