const Banner = () => {
  return (
    <div className=" pt-20 max-w-7xl" id="/">
      <img
        className="absolute w-[1280px] h-[calc(100vh-80px)]"
        src="https://th.bing.com/th/id/R.9bddfa0bd1b5ae93da13be438dc3b74c?rik=%2b9%2bpAIELThODuw&pid=ImgRaw&r=0"
        alt=""
      />
      <div className="relative h-[calc(100vh-80px)] flex items-center pl-14 bg-gradient-to-r from-[#000000c9] to-[#00000027] ">
        <div className="w-1/2 text-white space-y-5">
          <h1 className="text-4xl font-bold ">Welcome to our shop</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quod
            molestiae ullam hic exercitationem. Rem illo excepturi blanditiis
            dicta repellat sint veritatis consequatur facilis facere.
          </p>
          <button className="text-white btn btn-outline">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
