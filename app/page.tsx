import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import MobileCTA from '@/components/common/MobileCTA';
import Hero from '@/components/sections/Hero';
import WarningSigns from '@/components/sections/WarningSigns';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import Technology from '@/components/sections/Technology';
import DIYTest from '@/components/sections/DIYTest';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import EmergencyCTA from '@/components/sections/EmergencyCTA';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import ServiceAreas from '@/components/sections/ServiceAreas';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WarningSigns />
        <Services />
        <HowItWorks />
        <Technology />
        <DIYTest />
        <WhyChooseUs />
        <EmergencyCTA />
        <Testimonials />
        <FAQ />
        <ServiceAreas />
        <ContactForm />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
