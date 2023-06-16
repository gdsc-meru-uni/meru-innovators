import { AiOutlineCalendar } from 'react-icons/ai';
import image from '../../../assets/images/tech-event.jpeg';
import { Link } from 'react-router-dom';

const RSVPCard = () => {
  return (
    <div>
      <div className="w-full overflow-hidden rounded-2xl bg-white shadow-xl">
        <figure>
          <img src={image} alt="tech-event-image" loading="lazy" />
          <figcaption className="hidden">Tech-Event Image</figcaption>
        </figure>
        <div className="bg-yellow p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">RSVP!</h2>
            <div className="flex items-center gap-2">
              <AiOutlineCalendar size={20} className="text-black font-bold" />
              <p className="font-bold leading-relaxed">May 15</p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Link to="/events">
              <button className="block rounded-lg bg-maroon px-4 py-2 text-lg text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVPCard;
