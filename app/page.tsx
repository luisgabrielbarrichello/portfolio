import Hero from './components/Hero/Hero';
import BenefitSection from './components/BenefitSection/BenefitSection';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import ConceptToLaunch from './components/ConceptToLaunch/ConceptToLaunch';
import MyServices from './components/MyServices/MyServices';
import Projects from './components/Projects/Projects';
import TestimonialSection from './components/TestimonialSection/TestimonialSection';
import FAQ from './components/FAQ/FAQ';
import QuoteForm from './components/QuoteForm/QuoteForm';
import CTA from './components/CTA/CTA';

export default function Home() {
    return (
        <>
            <Hero />
            <BenefitSection />
            <BeforeAfter />
            <ConceptToLaunch />
            <MyServices />
            <Projects />
            <TestimonialSection />
            <FAQ />
            <QuoteForm />
            <CTA />
        </>
    );
}
