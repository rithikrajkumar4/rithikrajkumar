import React from "react";
import HeadingCategory from "./HeadingCategory";

const ContantForm = () => {
  return (
    <div className="flex justify-center bg-grey-600 pt-10">
      <div className="flex flex-col">
        <div className="flex justify-center text-center">
          <HeadingCategory title="Hello" subtitle="Throw me a challenge" />
        </div>
        <div>
          <form action="no-action" method="post">
            <div className="flex flex-col gap-10 font-serif text-2xl">
              <label htmlFor="Name" className="flex flex-col gap-3 ">
                <p className="font-bold">Name:</p>
                <input
                  className=" border-spacing-5 p-2 bg-white"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </label>
              <label htmlFor="Email" className="flex flex-col gap-3">
                <p className="font-bold">Email:</p>
                <input
                  className=" border-spacing-5 p-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </label>
              <label htmlFor="phone" className="flex flex-col gap-3">
                <p className="font-bold">Phone No.:</p>
                <input
                  className=" border-spacing-5 p-2"
                  type="tel"
                  placeholder="Enter Your Phone No."
                />
              </label>
              <label htmlFor="Message" className="flex flex-col gap-3">
                <p className="font-bold">Message:</p>
                <input
                  className=" border-spacing-5 p-8"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                />
              </label>
              <button
                type="submit"
                className="text-center text-white font-bold text-2xl xl:text-4xl p-4 bg-black m-4 rounded-full hover:text-green-300"
              >
                Challenged!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContantForm;
