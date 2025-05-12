import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Printer } from 'lucide-react'; // Printer icon can be generic for "HALISER"
import type { FC } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' }, // Changed from Gallery to Products
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Using a generic Printer icon for HALISER, can be changed if a specific logo is available */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M7 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M17 17h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M17 9V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4"></path><rect width="10" height="8" x="7" y="12"></rect></svg>
          <span className="font-bold text-lg">HALISER</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-lr font-medium flex-grow">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent text-foreground/70"
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
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium pt-8">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M7 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M17 17h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M17 9V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4"></path><rect width="10" height="8" x="7" y="12"></rect></svg>
                  <span className="font-bold text-lg">HALISER</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-accent text-foreground/70"
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
