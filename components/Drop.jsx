import Image from "next/image";
import { useState } from "react";
import { useGlobal } from "context/GlobalContext";

import { ref, onValue } from "firebase/database";

const Index = () => {
  const { database } = useGlobal();

  const [isList, setIsList] = useState(false);

  function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function Tweetle() {
    return randomRange(0, 5000);
  }

  return (
    <div>
      <div
        onClick={async () => {
          setIsList(!isList);

          var index = Tweetle();

          const starCountRef = ref(database, "Data/" + index);
          onValue(starCountRef, (snapshot) => {
            window.open(snapshot.val(), "_blank");
          });
        }}
        className=" max-w-[8rem] py-4 px-6 shadow rounded bg-[#00acee] font-medium leading-none text-white text-center flex items-center justify-center mx-auto cursor-pointer"
      >
        Tweet
        <Image src="/twitterW.svg" width={25} height={50} className=" ml-3" />
      </div>
    </div>
  );
};
export default Index;
