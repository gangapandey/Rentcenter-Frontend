import Signupform from "../../global/component/forms/Signupform"
import Navbar from "../../global/component/navbar/Navbar"
import Hero from "./components/Hero"
import Homecards from "./components/Homecards"
import Productshow from "./components/Productshow"
import Section from "./components/Section"

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]

export default function Home() {
    return (
        <>

        <Hero />

        <Homecards />

        <Productshow />

        <Section /> 
        </>
    )
}
