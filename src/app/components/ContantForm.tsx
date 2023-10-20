import React from "react";
import HeadingCategory from "./HeadingCategory";

const ContantForm = () => {
  return (
    <div className="flex justify-center bg-grey-600 pt-10">
      <div className="flex flex-col">
        <div className="flex justify-center text-center">
          <HeadingCategory title="Hello" subtitle="Throw Me a Challenge" />
        </div>
        <div>
          <form action="">
            <div className="flex flex-col gap-10">
              <label htmlFor="Name" className="flex flex-col gap-3">
                Name:
                <input
                  className=" border-spacing-5 p-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </label>
              <label htmlFor="Email" className="flex flex-col gap-3">
                Email:
                <input
                  className=" border-spacing-5 p-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </label>
              <label htmlFor="phone" className="flex flex-col gap-3">
                Phone:
                <input
                  className=" border-spacing-5 p-2"
                  type="tel"
                  placeholder="Enter Your Phone No."
                />
              </label>
              <label htmlFor="Message" className="flex flex-col gap-3">
                Message:
                <input
                  className=" border-spacing-5 p-4"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                />
              </label>
              <button
                type="submit"
                className="text-center text-white font-bold text-2xl xl:text-4xl p-4 bg-black m-4"
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
