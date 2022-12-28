import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[300px] xl:h-[600px] 2xl:h-[700px]">
      <img
        className=""
        src="https://wallpaperaccess.com/full/3713165.jpg"
        alt="banner img"
      />
      <div className="absolute top-1/4 w-full text-center">
        <p className="text-sm sm:text-lg text-white">Airbnb Anywhere.</p>

        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Show me
        </button>
      </div>
    </div>
  );
}
export default Banner;
