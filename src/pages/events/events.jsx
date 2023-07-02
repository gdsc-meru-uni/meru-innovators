import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import EventsCard from './components/eventsCard';

const Events = () => {
  return (
    <>
      <div className="container px-3">
        <div className="relative mb-12 py-4">
          <Navbar bg />
        </div>
        <main className="mb-20">
          <h2 className="my-12 text-center text-3xl font-bold text-blue sm:text-5xl">
            Upcoming Events
          </h2>
          <section>
            <EventsCard />
            <EventsCard />
            <EventsCard />
            <EventsCard />
            <EventsCard />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Events;
