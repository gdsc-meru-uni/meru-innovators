import { BsClock } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineCalendar } from 'react-icons/ai';
import eventImage from '../../../assets/images/tech-event2.jpg';

const EventsCard = () => {
  return (
    <div className="mb-8 w-full rounded-lg bg-white shadow-2xl ring-2 ring-yellow">
      <div className="p-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <img
              src={eventImage}
              alt="event-image"
              loading="lazy"
              className="h-full max-h-[350px] w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-maroon sm:text-4xl">Event Name</h3>
            <p className="text-black my-8 text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.” “Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do <span className="text-blue underline">Learn More</span>
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <AiOutlineCalendar size={20} className="text-yellow" />
                <span className="block text-sm">24th March, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <BsClock size={20} className="text-yellow" />
                <span className="block text-sm">2:00pm - 5:00pm</span>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn size={20} className="text-yellow" />
                <span className="block text-sm">ECA 25</span>
              </div>
            </div>
            <h2 className="mt-10 text-2xl font-bold text-green">RSVP!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
