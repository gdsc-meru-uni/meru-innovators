import { BiLike } from 'react-icons/bi';
import { FaRegComment, FaRegBookmark } from 'react-icons/fa';
import blog from '../../../assets/images/nodejs.png';
import me from '../../../assets/images/jacob.jpg';

const BlogCard = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-xl">
      <figure>
        <img src={blog} alt="blog" className="w-full" />
      </figure>
      <div className="p-4">
        <div className="flex items-center gap-4">
          <figure>
            <img
              src={me}
              alt="me"
              loading="lazy"
              className="h-20 w-20 rounded-[50%] object-cover"
            />
            <figcaption className="hidden">Blog card Image</figcaption>
          </figure>
          <div>
            <h2 className="mb-1 text-lg font-semibold">Jacob Kyalo</h2>
            <p className="text-black text-sm opacity-90">GDSC Web Lead, Alumni</p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="mb-1 text-lg font-semibold sm:text-2xl">
            Getting Started with Nodejs for API Development
          </h2>
          <div className="mt-3 flex items-center gap-4">
            <p>#nodejs</p>
            <p>#apidevelopment</p>
            <p>#javascript</p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <BiLike /> 50 Likes
              <FaRegComment /> 10 Comments
            </div>
            <div>
              <FaRegBookmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
