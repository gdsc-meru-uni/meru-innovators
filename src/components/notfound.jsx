import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex h-[100vh] w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-center text-3xl text-dark opacity-80 sm:text-6xl">
          404 Page Not Found
        </h1>
        <Link to="/">
          <button className="block w-[300px] rounded-lg bg-green py-4 text-lg text-white">
            Go Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
