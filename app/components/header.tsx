import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl">MortgageAI</div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-muted-foreground hover:text-foreground">Features</Link>
          <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </header>
  );
}