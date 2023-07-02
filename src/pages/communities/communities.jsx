import { HiUserGroup } from 'react-icons/hi';
import CommunityCard from './components/communityCard';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Communities = () => {
  return (
    <>
      <div className="container px-3">
        <div className="relative mb-12 py-4">
          <Navbar bg />
        </div>
        <main className="mb-20">
          <div className="my-10 flex items-center justify-center gap-8">
            <HiUserGroup size={70} className="text-green" />
            <h2 className="text-center text-3xl font-bold text-blue sm:text-5xl">Communitites</h2>
          </div>
          <section>
            <CommunityCard title="Robotics" />
            <CommunityCard title="Android" />
            <CommunityCard title="Web Design" />
            <CommunityCard title="Machine Learning & AI" />
            <CommunityCard title="Graphic Design" />
            <CommunityCard title="Cyber Security" />
            <CommunityCard title="Physics" />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Communities;
