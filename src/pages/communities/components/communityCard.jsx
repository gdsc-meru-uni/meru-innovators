/* eslint-disable react/prop-types */
const CommunityCard = ({ title }) => {
  return (
    <div className="w-full rounded-2xl bg-blue text-center">
      <div className="mb-10 p-8">
        <h3 className="text-4xl font-bold text-maroon sm:text-4xl">{title}</h3>
        <p className="my-8 text-lg text-white sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores tempore dolorem
          commodi porro similique sapiente eius sequi dolore molestiae fugiat, modi optio, officia
          facere voluptate veritatis blanditiis dolores doloribus facilis sint totam aperiam!
          Exercitationem nulla temporibus recusandae repellendus libero! Nostrum fuga recusandae
        </p>
        <h4 className="text-xl font-bold text-yellow sm:text-2xl">Meeting days</h4>
        <div className="mt-3 flex items-center justify-center gap-4 sm:gap-8">
          <span className="text-md text-maroon sm:text-lg">Monday</span>
          <span className="text-md text-maroon sm:text-lg">9am - 1pm</span>
          <span className="text-md text-maroon sm:text-lg">ECA 25</span>
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 sm:gap-8">
          <span className="text-md text-maroon sm:text-lg">Tuesday</span>
          <span className="text-md text-maroon sm:text-lg">9am - 1pm</span>
          <span className="text-md text-maroon sm:text-lg">ECA 25</span>
        </div>
        <div className="mt-3 flex items-center justify-center gap-4 sm:gap-8">
          <span className="text-md text-maroon sm:text-lg">Friday</span>
          <span className="text-md text-maroon sm:text-lg">9am - 1pm</span>
          <span className="text-md text-maroon sm:text-lg">ECA 25</span>
        </div>
        <button className="mt-10 rounded-full bg-white px-20 py-4 text-center text-lg font-bold text-blue">
          JOIN
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;
