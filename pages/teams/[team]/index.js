import React from "react";
import {Navbar} from "@/components/navbar"
import Head from "next/head.js";
import {useRouter} from "next/router"
import {getDataFromURL, getDataFromURLHeaders} from "../../../utils/urlfetch.js"
import { TeamHeader } from "@/components/teamheader/index.js";

export default function Team(props) {
    // const router = useRouter();
    // const team = router.query["team"]
    // console.log(team)
    return (
    <div>
        <Head>
            <link rel="icon" type="image/x-icon" href={"data:image/png;base64,"+props.imageData}/>
            <title>{props.team}-{props.teamName}</title>
        </Head>
    <Navbar/>
    <TeamHeader teamNumber={props.team} imageData = {props.imageData} teamName={props.teamName} teamPhoto={props.teamPhoto} numOfTeamAwards={props.numOfTeamAwards} numOfBlueBanners={props.numOfBlueBanners}/>

    </div>)
}

export const getServerSideProps = async (context) => {
    const team = context.params["team"]
    const teamKey = "frc"+team
    
    //The avatar has to be generated server-side, since FIRST does not allow browser requests, because they are lame smh
    const res = await fetch("https://frc-api.firstinspires.org/v3.0/2023/avatars?teamNumber="+team,{headers: {"Authorization":process.env.FIRSTINSPIRES}})
    const response = await res.json()
    const imageData = response["teams"][0]["encodedAvatar"]

    const teamName = (await fetch("https://www.thebluealliance.com/api/v3/team/"+teamKey,{headers: {"X-TBA-Auth-Key":process.env.TBA}}).then((res)=>res.json()))["nickname"]
    const teamPhoto = (await fetch("https://www.thebluealliance.com/api/v3/team/"+teamKey+"/media/"+2023,{headers: {"X-TBA-Auth-Key":process.env.TBA}}).then((res)=>res.json()))[1]["direct_url"]
    const teamAwards = (await fetch("https://www.thebluealliance.com/api/v3/team/"+teamKey+"/awards/2023",{headers: {"X-TBA-Auth-Key":process.env.TBA}}).then((res)=>res.json()))
    const numOfTeamAwards = teamAwards.length
    const numOfBlueBanners = teamAwards.filter((team)=>team["award_type"]== 0 || team["award_type"]== 1).length
    return { props: { team, imageData, teamName, teamPhoto, numOfTeamAwards, numOfBlueBanners } }
  }



