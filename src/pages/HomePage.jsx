import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';

const HomePage = () => {
  return (
    <main id="beranda">
      <Hero />
      <About />
      <Products />
      <Features />
      <Testimonials />
      <Gallery />
      <Blog />
    </main>
  );
};

export default HomePage;
