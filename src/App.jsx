import './App.css'
import Header from "./components/Header/Header.jsx";
import Feature from "./components/Feature/Feature.jsx";
import Contents from "./components/Contents/Contents.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Partners from "./components/Partners/Partners.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Content from "./components/Content/Content.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
    return (
        <>
            <Header/>
            <Feature/>
            <Contents/>
            <Gallery/>
            <Partners/>
            <Testimonials/>
            <Content/>
            <Footer/>
        </>
    )
}

export default App
