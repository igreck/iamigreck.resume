import React from "react";
import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react"; // or @headlessui/react-disclosure
import { ChevronUpIcon } from "@heroicons/react/solid"; // Import the icon
import { useTimeoutFn } from "react-use"; // Import the hook
import { Transition } from "@headlessui/react";

import data from "../config/info.json"; // Import the data

import Courses from "./Specializations/Courses";
import Articles from "./Specializations/Articles";
import Conferences from "./Specializations/Conferences";

const Specialization = () => {
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  return (
    // Return a component
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-extrabold text-lime-400 bg-gray-900 rounded-lg hover:text-lime-500 dark:hover:bg-black hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-gray-800 focus-visible:ring-opacity-75">
            <span className="">
              @igreck:-$ <span className="text-red-500 md:text-2xl">cd </span>
              <span
                className={`${
                  open ? "animate-pulse" : ""
                } text-gray-200 font-sans text-xl`}
              >
                ~/Formare-Specializare
              </span>
            </span>
            <div className="border rounded-xl px-2 hover:bg-gray-900 dark:hover:bg-gray-700">
              run
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-md md:text-xl text-center text-gray-200">
            <Transition
              as={Fragment}
              show={isShowing}
              enter="transform transition duration-[1000ms]"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <div className="flex flex-col space-y-2">
                <Courses />
                <Articles />
                <Conferences />
              </div>
            </Transition>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Specialization;