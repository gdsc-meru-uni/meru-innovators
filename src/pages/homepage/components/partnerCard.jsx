import microsoft from '../../../assets/images/google.png';

const PartnerCard = () => {
  return (
    <div className="flex h-[200px] w-full items-center justify-center rounded-2xl bg-white shadow-2xl">
      <figure className="p-6">
        <img
          src={microsoft}
          alt="Microsoft Image"
          loading="lazy"
          className="h-full w-full rounded-[50%]"
        />
        <figcaption className="hidden">Partner Image</figcaption>
      </figure>
    </div>
  );
};

export default PartnerCard;
