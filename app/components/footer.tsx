import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MortgageAI</h3>
            <p className="text-muted-foreground">
              Transforming the mortgage industry with AI-powered automation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Security</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          © {new Date().getFullYear()} MortgageAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}