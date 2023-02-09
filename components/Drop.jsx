import Image from "next/image";
import { useState } from "react";
import Copy from './Copy'

const Index = () => {
    const [isList, setIsList] = useState(false);
    return (
        <div>
            <div onClick={() => setIsList(!isList)} className=" max-w-[8rem] py-4 px-6 shadow rounded bg-[#00acee] font-medium leading-none text-white text-center flex items-center justify-center mx-auto cursor-pointer">
                Tweet
                <Image
                    src="/twitterW.svg"
                    width={25}
                    height={50}
                    className=" ml-3"
                />
            </div>

            {isList && (
                <div className=" justify-center flex mt-2 p-4 bg-white shadow rounded">
                    <div className="flex items-center justify-center">
                        <div className=" text-black"> 
                            <Copy/>
                        </div>
                    </div>

                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>
        </div>
    );
};
export default Index;
