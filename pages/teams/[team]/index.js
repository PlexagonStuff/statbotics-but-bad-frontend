import React from "react";
import {Navbar} from "@/components/navbar"
import {useRouter} from "next/router"
import {getDataFromURL, getDataFromURLHeaders} from "../../../utils/urlfetch.js"
import { TeamHeader } from "@/components/teamheader/index.js";

export default function Team() {
    const router = useRouter();
    const team = router.query["team"]
    console.log(team)
    return (
    <div>
    <Navbar/>
    <TeamHeader teamNumber={team}/>

    </div>)
}



