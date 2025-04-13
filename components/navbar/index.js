import React from "react";
import Image from "next/image";
import {Search} from "./Search";
import {Dropdown} from "./Dropdown";
import Link from "next/link"
export function Navbar () {

    return (<><div className="sticky flex flex-initial items-center border border-cyan-400 rounded-md max-w-none mt-6 py-8 mx-20 bg-zinc-800">
      <Link href={'/'}>
        <p>
        <img
        src="/logo.png"
        className="ml-10 mr-2 drop-shadow-md rounded-full inline-flex"
        width = {30}
        height = {30}
        alt="This sure is a logo"
        />
        <span className="text-2xl text-zinc-200 font-medium ">smh</span>
        </p>
        </Link>
        <div className="flex ml-10"></div>
        <a
              href="https://statbotics-but-bad-production.up.railway.app/docs"
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