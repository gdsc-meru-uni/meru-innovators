import EventsCard from './components/eventsCard';
import Footer from '../../components/footer';

const Events = () => {
  return (
    <>
      <div className="container px-3">
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
