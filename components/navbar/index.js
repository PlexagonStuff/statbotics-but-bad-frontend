import React from "react";
import Image from "next/image";
import {Search} from "./Search";
import {Dropdown} from "./Dropdown";
export function Navbar () {

    return (<><div className="sticky flex flex-initial items-center border border-cyan-400 rounded-md max-w-none mt-6 py-8 mx-20 bg-zinc-700">
        <Image
        src="/logo.png"
        className="flex ml-10 mr-2 drop-shadow-md rounded-full"
        width = {30}
        height = {15}
        alt="This sure is a logo"
        />
        <h1 className="flex text-2xl text-zinc-200 font-medium ">smh</h1>
        <div className="flex ml-10"></div>
        <a
              href="https://statboticsbutbad.online/docs"
              target="_blank"
              aria-label="API"
              className="flex text-2xl text-cyan-600 font-medium"
            >
              <h1>API</h1>
            </a>
            <div className="flex grow"></div>
            <Search/>


    </div>
</>)



}