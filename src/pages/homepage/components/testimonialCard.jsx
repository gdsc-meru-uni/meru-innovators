import { Link } from 'react-router-dom';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import me from '../../../assets/images/jacob.jpg';

const TestimonialCard = () => {
  return (
    <>
      <div className="w-full rounded-2xl bg-dark p-4 text-white shadow-xl">
        <div className="flex items-center gap-4">
          <figure>
            <img
              src={me}
              alt="me"
              loading="lazy"
              className="h-20 w-20 rounded-[50%] object-cover"
            />
            <figcaption className="hidden">My Image</figcaption>
          </figure>
          <div>
            <h2 className="mb-1 text-lg font-semibold">Jacob Kyalo</h2>
            <p className="text-sm text-grey">GDSC Web Lead, Alumni</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="mb-8 text-sm text-grey">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur labore quas minima,
            aut ducimus eos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            labore quas minima, aut ducimus eos.
          </p>
          <div className="flex items-center gap-6">
            <Link to="https://twitter.com" target="_blank">
              <BsTwitter size={25} />
            </Link>
            <Link to="https://linkedin.com" target="_blank">
              <BsLinkedin size={25} />
            </Link>
            <Link to="https://github.com" target="_blank">
              <BsGithub size={25} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
