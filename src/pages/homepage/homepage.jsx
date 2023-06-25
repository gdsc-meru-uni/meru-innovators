import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import RSVPCard from './components/rsvpcard';
import PartnerCard from './components/partnerCard';
import TestimonialCard from './components/testimonialCard';
import BlogCard from './components/blogCard';
import BorderComponent from './components/border';
import Footer from '../../components/footer';
import aboutImage from '../../assets/images/group-1.jpg';

const Homepage = () => {
  return (
    <>
      <header className="header relative mb-12 bg-cover bg-top bg-no-repeat px-3 py-4">
        <div className="container relative">
          <Navbar />
          <section className="flex items-center justify-start py-20">
            <div className="">
              <h1 className="text-5xl uppercase text-white sm:text-8xl">Invention</h1>
              <h1 className="my-2 text-5xl uppercase text-white sm:text-8xl">Through</h1>
              <h1 className="text-5xl uppercase text-white sm:text-8xl">Innovation</h1>
            </div>
          </section>
        </div>
      </header>
      <section className="mb-12">
        <div className="container px-3">
          <h2 className="mb-10 text-center text-3xl font-bold text-blue sm:text-5xl">About Us</h2>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-16">
              <figure>
                <img
                  src={aboutImage}
                  className="w-full max-w-[500px] rounded-3xl"
                  alt="about-image"
                  loading="lazy"
                />
                <figcaption className="hidden">about-image</figcaption>
              </figure>
              <div>
                <p className="text-xl font-medium leading-relaxed sm:text-2xl">
                  We are a peer to peer learning community
                </p>
                <div className="mt-10 flex w-full justify-center sm:justify-start">
                  <Link to="/communities">
                    <button className="text-black block w-[300px] rounded-lg bg-yellow py-4 text-lg">
                      View Communities
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BorderComponent />
      <section className="my-12">
        <div className="container px-3">
          <h2 className="mb-10 text-center text-3xl font-bold text-blue sm:text-5xl">
            Upcoming Events
          </h2>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <RSVPCard />
              <RSVPCard />
              <RSVPCard />
            </div>
          </div>
          <div className="mt-10 flex w-full items-center justify-center">
            <Link to="/events">
              <button className="block w-[300px] rounded-lg bg-blue py-4 text-lg text-white">
                View More Events
              </button>
            </Link>
          </div>
        </div>
      </section>
      <BorderComponent />
      <section className="my-12">
        <div className="container px-3">
          <h2 className="mb-10 text-center text-3xl font-bold text-blue sm:text-5xl">
            Our Partners
          </h2>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
              <PartnerCard />
            </div>
          </div>
        </div>
      </section>
      <BorderComponent />
      <section className="my-12">
        <div className="container px-3">
          <h2 className="mb-10 text-center text-3xl font-bold text-blue sm:text-5xl">
            Testimonials
          </h2>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
          </div>
        </div>
      </section>
      <BorderComponent />
      <section className="my-12">
        <div className="container px-3">
          <h2 className="mb-10 text-center text-3xl font-bold text-blue sm:text-5xl">
            Latest Blogs
          </h2>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <BlogCard />
              <BlogCard />
            </div>
          </div>
          <div className="mt-10 flex w-full items-center justify-center">
            <Link to="/blogs">
              <button className="text-black block w-[300px] rounded-lg bg-yellow py-4 text-lg">
                View More Blogs
              </button>
            </Link>
          </div>
        </div>
      </section>
      <BorderComponent />
      <Footer />
    </>
  );
};

export default Homepage;
