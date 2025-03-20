import React from "react";
import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";

const Checkout = () => {
  return (
    <>
      <HeaderSection />
      <div className="container p-3 mx-auto sm:p-10">
        {/* Checkout Layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* Payment Form */}
          <div className="w-full p-10 bg-white rounded-lg shadow-md lg:w-2/4">
            <h2 className="text-xl font-semibold sm:text-center dark:text-black">
              Checkout
            </h2>
            <p className="mb-6 text-gray-600 sm:text-center">Card Type</p>

            {/* Card Logos */}
            <div className="flex justify-center mb-6 space-x-4">
              <Image
                src="/paypal.png"
                width={60}
                height={60}
                alt="Paypal"
                className="border-[1px] rounded-lg"
              />
              <Image
                src="/ae.webp"
                width={60}
                height={60}
                alt="American Express"
                className="border-[1px] rounded-lg"
              />
              <Image
                src="/visa.png"
                width={60}
                height={60}
                alt="Visa"
                className="border-[1px] rounded-lg"
              />
              <Image
                src="/master.png"
                width={80}
                height={80}
                alt="MasterCard"
                className="border-[1px] rounded-lg"
              />
            </div>

            {/* Form Inputs */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700">
                  Name on Card
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter name on Card"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Card Number"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm text-gray-700">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm text-gray-700">CVC</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="CVC"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="save-info" className="mr-2" />
                <label htmlFor="save-info" className="text-sm text-gray-600">
                  Save my information for faster checkout
                </label>
              </div>

              {/* Submit Button */}
              <button className="w-full p-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                Confirm Payment
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 h-96 bg-[#F0F5FC] p-3 rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold dark:text-black">
              Summary
            </h2>
            <div className="space-y-4">
              {/* Summary Items */}
              <div className="flex items-center justify-between">
                <Image
                  src="/item.webp"
                  width={60}
                  height={60}
                  alt="Item Image"
                  className="rounded-lg"
                />
                <div className="text-sm">
                  <p className="font-semibold dark:text-black">
                    Adipiscing elit
                  </p>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet...</p>
                </div>
                <p className="font-bold dark:text-black">$24.69</p>
              </div>
              <div className="flex items-center justify-between">
                <Image
                  src="/item.webp"
                  width={60}
                  height={60}
                  alt="Item Image"
                  className="rounded-lg"
                />
                <div className="text-sm">
                  <p className="font-semibold dark:text-black">
                    Adipiscing elit
                  </p>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet...</p>
                </div>
                <p className="font-bold dark:text-black">$24.69</p>
              </div>

              {/* Price Details */}
              <div className="flex flex-col gap-2 space-y-2 text-gray-700">
                <div className="flex justify-between border-b-[1px] border-black">
                  <p>Subtotal</p>
                  <p>$51.38</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-black">
                  <p>Coupon Discount</p>
                  <p>0%</p>
                </div>
                <div className="flex justify-between border-b-[1px] border-black">
                  <p>TAX</p>
                  <p>$5</p>
                </div>
                <div className="flex justify-between font-bold ">
                  <p>Total</p>
                  <p>$56.38</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
