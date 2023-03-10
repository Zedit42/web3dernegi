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
    return randomRange(0, 10000);
  }

  return (
    <div
    >
      <div
        onClick={async () => {

          setIsList(!isList);

          var index = Tweetle();
          
          const starCountRef = ref(database, "Data/" + index);
          onValue(starCountRef, (snapshot) => {
            window.location.href = snapshot.val();
            // javascript: void window.open("https://www.oracle.com/", "_blank");
            // window.open(snapshot.val(), "_blank");
          });
        }}
        className=" max-w-[14rem] py-4 px-6 mb-4 shadow rounded bg-green-600 hover:bg-green-600/90 font-medium leading-none text-white text-center flex items-center justify-center mx-auto cursor-pointer"
      >
        Tweet For Ahbap
        <Image src="/twitterW.svg" width={25} height={50} className=" ml-3" />
      </div>
    </div>
  );
};
export default Index;
