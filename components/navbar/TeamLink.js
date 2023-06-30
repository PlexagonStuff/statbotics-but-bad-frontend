import React from "react";
import {useRouter} from "next/router"
import Link from "next/link"

export function TeamLink({teamInfo}) {
    const teamNumber = teamInfo.split("-")[0]
    return (
        <Link href={'/teams/'+teamNumber}>
        <span className="flex  p-1 rounded-md w-48 text-zinc-200 text-center text-sm tracking-wider font-thin hover:text-cyan-400">{teamInfo}</span>
        </Link>
    )

}