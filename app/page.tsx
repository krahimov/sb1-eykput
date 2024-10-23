import { Header } from './components/header';
import { Footer } from './components/footer';
import { HeroSection } from './components/hero-section';
import { FeaturesSection } from './components/features-section';
import { ProcessSection } from './components/process-section';
import { CTASection } from './components/cta-section';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}