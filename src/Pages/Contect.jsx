import Lottie from "lottie-react";
import anime2 from "../assets/contact.json";
const Contect = () => {
  const sendMessage = () => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const data2 = { name, email, message };
    const data = { data2 };
    console.log(data2, data);
  };
  return (
    <div id="contact" className="mt-28">
      <h1 className="text-5xl text-center mb-10 font-semibold ">Contact Us</h1>
      <div className="md:flex">
        <div className="md:w-1/2 w-full">
          <Lottie
            className="w-full h-full"
            animationData={anime2}
            loop={true}
          ></Lottie>
        </div>
        <div className="w-full mx-auto md:w-1/2 md:mt-20">
          <form onSubmit={sendMessage} className="space-y-2">
            <input
              required
              className="border-2 w-2/3 focus:outline-none p-2 ml-3"
              type="text"
              name="name"
              placeholder="First Name"
            />
            <br />
            <input
              required
              className="border-2 w-2/3 focus:outline-none p-2 ml-3"
              type="file"
              multiple
              name="email"
              placeholder="Email"
            />
            <br />
            <textarea
              required
              className="border-2 w-2/3 focus:outline-none p-2 ml-3"
              name="message"
              cols="23"
              rows="5"
              placeholder="Type your message"
            ></textarea>
            <br />
            <input
              className="btn ml-3 px-5 text-center btn-success"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contect;
