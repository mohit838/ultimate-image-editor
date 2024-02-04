import ImageEditor from "../ImageEditor/ImageEditor";

const Home = () => {
  return (
    <div className="grid grid-cols-1 place-content-center place-items-center">
      <div className="bg-[#2b2b2b] drop-shadow-lg rounded-lg mobile:w-[20rem] mobile:h-[20rem] tablet:w-[70rem] tablet:h-[30rem] text-white">
        <ImageEditor />
      </div>
    </div>
  );
};

export default Home;
