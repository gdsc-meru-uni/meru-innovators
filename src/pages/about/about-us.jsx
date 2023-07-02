import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const AboutUs = () => {
  return (
    <div className="container px-3">
      <div className="relative mb-12 py-4">
        <Navbar bg />
      </div>
      <main>
        <h1 className="text-2xl">AboutUs</h1>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
