const Services = () => {
  const services = [
    {
      id: 1,
      name: "home delivary",
      img: "https://th.bing.com/th/id/OIP.-y820Hwyd75rSJe9qa5bKQHaFf?pid=ImgDet&rs=1",
    },
    {
      id: 2,
      name: "work full time",
      img: "https://static.thenounproject.com/png/8230-200.png",
    },
    {
      id: 3,
      name: "carefull on work",
      img: "https://th.bing.com/th/id/OIP.X-8cPUrliriM-7CthvQRwQHaJS?pid=ImgDet&rs=1",
    },
    {
      id: 4,
      name: "timely delivary",
      img: "https://th.bing.com/th/id/OIP.mSZBoMSDFrsSq2jnnZmSgQHaHa?pid=ImgDet&rs=1",
    },
  ];
  return (
    <div className="w-screen mb-10" id="service">
      <h1 className="text-5xl mb-16 object-cover font-semibold text-center ">
        Services
      </h1>
      <div className=" md:grid md:grid-cols-4 w-full flex flex-col items-center justify-center gap-4">
        {services.map((service, index) => (
          <div key={index} className="card w-60 bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-32 object-cover"
                src={service.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body mx-auto capitalize">
              <h2 className="card-title">{service.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
