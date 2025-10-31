import Header from "../components/Global/Header.jsx";
import Hero from "../components/Home/Hero.jsx";
import Product from "../components/Home/Product.jsx";
import SocialProof from "../components/Home/SocialProof.jsx";
import Purpose from "../components/Home/Purpose.jsx";
import CTASection from "../components/Home/CTASection.jsx";
import SiteFooter from "../components/Shared/SiteFooter.jsx";

export default function Home() {

    return (
        <div>
            <Header />
            <Hero />
            <Product />
            <SocialProof />
            <Purpose />
            <CTASection />
            <SiteFooter />
        </div>
    )
}