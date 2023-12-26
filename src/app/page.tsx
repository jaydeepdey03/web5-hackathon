import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="f h-screen min-h-screen w-screen p-5 font-poppins">
      <div className="flex h-full w-full justify-center p-5 font-poppins">
        <div className="relative flex h-full w-full flex-col rounded-xl bg-blue-900 xl:flex-row">
          <div className="grid h-full w-full place-items-center rounded-xl ">
            <div className="flex flex-col items-center space-y-8 xl:items-start">
              <p className="text-8xl font-extrabold text-pink-200">MedBlock</p>
              <p className="text-xl font-semibold text-pink-100">
                Your Decentralized Patient ID for Modern Appointments
              </p>
              <Button className="group flex w-[200px] space-x-2 rounded-full bg-pink-400 hover:bg-pink-500">
                <span>Create Patient ID</span>
                <ArrowRight className="mr-2 h-4 w-4 duration-200 ease-in-out group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative flex h-full w-full items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/doctor2.png"
              alt="doctor2"
              className="absolute h-full xl:bottom-0 xl:mt-auto xl:h-[80%]"
            />
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col gap-5 p-5 xl:flex-row">
        <div className="rounded-3xl bg-pink-300 p-6 px-3 duration-150 ease-in-out hover:scale-105 xl:h-[450px] xl:w-1/4">
          <div
            className="flex h-full w-full
           flex-col items-center justify-around space-y-7 text-center xl:space-x-0"
          >
            <p className="text-3xl font-bold text-blue-900 2xl:text-5xl">
              Decentralized Patient IDs
            </p>
            <p className="text-lg text-blue-950">
              Seize control of your health with decentralized IDs for a private,
              modern experience
            </p>
            <div className="relative">
              {/* <div className="bg-stone-400 rounded-full h-24 w-24 z-10 -top-5 -left-5 blur-2xl absolute" /> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/card.png"
                alt="card"
                className="relative z-20 h-32 w-auto" // Set a higher z-index value
              />
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-yellow-400 p-6 px-3 duration-150 ease-in-out hover:scale-105 xl:h-[450px] xl:w-1/4">
          <div
            className="flex h-full w-full
           flex-col items-center justify-around space-y-7 text-center xl:space-x-0"
          >
            <p className="text-3xl font-bold text-blue-900 2xl:text-5xl">
              Seamless Appointment Booking
            </p>
            <p className="text-lg text-blue-950">
              Seize control of your health with decentralized IDs for a private,
              modern experience
            </p>
            <div className="relative">
              {/* <div className="bg-stone-400 rounded-full h-24 w-24 z-10 -top-5 -left-5 blur-2xl absolute" /> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/booking.png"
                alt="booking"
                className="relative z-20 h-32 w-auto" // Set a higher z-index value
              />
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-purple-300 p-6 px-3 duration-150 ease-in-out hover:scale-105 xl:h-[450px] xl:w-1/4">
          <div
            className="flex h-full w-full
           flex-col items-center justify-around space-y-7 text-center xl:space-x-0"
          >
            <p className="text-3xl font-bold text-blue-900 2xl:text-5xl">
              Empowering Telehealth
            </p>
            <p className="text-lg text-blue-950">
              Telehealth anywhere: Use your decentralized ID for secure medical
              expertise at home
            </p>
            <div className="relative">
              {/* <div className="bg-stone-400 rounded-full h-24 w-24 z-10 -top-5 -left-5 blur-2xl absolute" /> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/consult.png"
                alt="consult"
                className="relative z-20 h-32 w-auto" // Set a higher z-index value
              />
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-red-300 p-6 px-3 duration-150 ease-in-out hover:scale-105 xl:h-[450px] xl:w-1/4">
          <div
            className="flex h-full w-full
           flex-col items-center justify-around space-y-7 text-center xl:space-x-0"
          >
            <p className="text-3xl font-bold text-blue-900 2xl:text-5xl">
              Interconnected Health Records
            </p>
            <p className="text-lg text-blue-950">
              Connected healthcare: ID links seamlessly with records for
              comprehensive information across providers.
            </p>
            <div className="relative">
              {/* <div className="bg-stone-400 rounded-full h-24 w-24 z-10 -top-5 -left-5 blur-2xl absolute" /> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/record.png"
                alt="record"
                className="relative z-20 h-32 w-auto" // Set a higher z-index value
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
