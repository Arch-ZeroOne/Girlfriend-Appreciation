import { useEffect, useState } from "react";
import Carousel from "./assets/components/Carousel";
import { Toaster, toast } from "react-hot-toast";
import Image from "./assets/images/windyl.jpg";
import Player from "./assets/components/Player";

function App() {
  const [count, setCount] = useState(0);

  const sweetMessages = [
    { id: 1, message: "You make my world brighter just by being in it. 💖" },
    {
      id: 2,
      message: "Every moment with you feels like a beautiful dream. 🌸",
    },
    { id: 3, message: "You are my favorite reason to smile every day. 😊" },
    { id: 4, message: "I still get butterflies every time I see you. 🦋" },
    {
      id: 5,
      message: "No distance, no time, can lessen how much I adore you. 💌",
    },
    { id: 6, message: "You’re not just my love, you’re my safe place. 🤗" },
    {
      id: 7,
      message: "Life feels so sweet because I get to share it with you. 🍯",
    },
    { id: 8, message: "I love the way your smile makes everything okay. 🌼" },
    { id: 9, message: "You are the cutest part of my day, always. 🐻" },
    {
      id: 10,
      message: "I fall in love with you more and more every single day. 💞",
    },
  ];
  const generateMessage = () => {
    const message =
      sweetMessages[Math.ceil(Math.random() * sweetMessages.length) + 1];
    console.log(message);

    toast(message.message, {
      icon: "💘",
      style: {
        borderRadius: "16px",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // soft pink gradient
        color: "#4a0e23", // deep romantic text color
        fontWeight: "bold",
        padding: "12px 16px",
        fontSize: "15px",
      },
      position: "top-center", // romantic messages look nice centered 💕
    });
  };

  useEffect(() => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-custom-enter" : "animate-custom-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img className="h-10 w-10 rounded-full" src={Image} alt="" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Windyl Monton</p>
              <p className="mt-1 text-sm text-gray-500">
                Hi my Supeeer Pretyy Loveloveeeee!!!!!!!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-custom-enter" : "animate-custom-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img className="h-10 w-10 rounded-full" src={Image} alt="" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Windyl Monton</p>
              <p className="mt-1 text-sm text-gray-500">
                I love you sobra sobraaa!!!!!!!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  }, []);

  return (
    <>
      <Toaster />

      <Carousel />

      <Player />
      <div className="flex justify-center p-10  ">
        <button
          className="btn btn-soft btn-secondary "
          onClick={() => generateMessage()}
        >
          Click For Compliments
        </button>
      </div>
    </>
  );
}

export default App;
