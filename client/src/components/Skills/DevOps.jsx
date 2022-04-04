import React, { PureComponent } from "react"; // Import React
import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react"; // or @headlessui/react-disclosure
import { ChevronUpIcon } from "@heroicons/react/solid"; // Import the icon
import infoData from "../../config/info.json"; // Import the data
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const DevOps = () => {
  let [isShowing, setIsShowing] = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    maxWidth: "500px",
  };

  const data = {
    labels: ["Docker", "Kubernetes"],
    datasets: [
      {
        label: "Nivel de cunoștințe",
        data: [80, 60],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    // Return a component
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className="flex justify-between w-full px-4 py-2 text-2xl font-extrabold text-lime-400 bg-gray-900 rounded-lg hover:text-lime-500 dark:hover:bg-black hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-gray-800 focus-visible:ring-opacity-75"
            onClick={() => {
              setIsShowing(false);
              resetIsShowing();
            }}
          >
            <span className="">
              <span className="text-red-500 md:text-2xl">cat </span>
              <span
                className={`${
                  open ? "animate-pulse" : ""
                } text-gray-200 font-sans text-xl`}
              >
                ./DevOps.txt
              </span>
            </span>
            <div className="border rounded-xl px-2 hover:bg-gray-900 dark:hover:bg-gray-700">
              run
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-md md:text-xl text-center text-gray-200">
            <div className="flex flex-col items-center space-y-2 py-5">
              <div className="text-2xl">Dezvoltare-Operaționalizare</div>
              <div className="flex md:flex-row flex-col md:justify-between items-center">
                <div className="md:w-1/2" style={styles}>
                  <PolarArea data={data} />
                </div>
                <div className="md:w-1/2">
                  {" "}
                  <div className="flex flex-col flex-y-5">
                    <div className="flex md:flex-row space-x-5">
                      <div className="text-2xl text-cyan-400">Experiență:</div>
                      <div className="text-2xl text-gray-200">
                        {infoData[7].devops_years}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-x-5">
                      <div className="text-2xl text-left text-yellow-400">
                        Activitate:
                      </div>
                      <div className="text-2xl text-center text-gray-200 md:text-left">
                        {" "}
                        {infoData[7].devops_info}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default DevOps;
