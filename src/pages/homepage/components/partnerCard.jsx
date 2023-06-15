import google from '../../../assets/images/microsoft.png';

const PartnerCard = () => {
  return (
    <div className="h-[200px] w-full items-center justify-center rounded-2xl bg-white shadow-2xl">
      <figure className="p-10">
        <img src={google} alt="Google Image" className="h-full w-full rounded-[50%]" />
        <figcaption className="hidden">Partner Image</figcaption>
      </figure>
    </div>
  );
};

export default PartnerCard;
