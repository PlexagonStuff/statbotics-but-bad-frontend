import React from "react";
import Image from "next/image";
//import {getDataFromURL, getDataFromURLHeaders} from "../../utils/urlfetch.js"
import useSWR from "swr";

const fetcher = (url) => fetch(url,).then((res) => res.json());


function teamColor(url) {
    const { data, error, isLoading } = useSWR(
    url,
    fetcher
    );
    if (error) return "#e4e4e7";
    if (isLoading) return "#e4e4e7";
    return data["color"];
}
function teamRecord(url) {
    const { data, error, isLoading } = useSWR(
    url,
    fetcher
    );
    if (error) return {"wins":0,"losses":0,"ties":0};
    if (isLoading) return {"wins":0,"losses":0,"ties":0};
    return data;
}


export function TeamHeader ({teamNumber, imageData, teamName, teamPhoto, numOfBlueBanners, numOfTeamAwards}) {
    const teamKey = "frc"+teamNumber
    


    return (
        <div className="border border-cyan-400 rounded-md max-w-none mt-16 py-8 h-96 mx-60 bg-zinc-800 flex">
        <div>
        <p>
        <Image
        src={"data:image/png;base64,"+ imageData}
        className="flex ml-10 border border-cyan-400 mr-2 drop-shadow-md rounded inline-flex"
        width = {40}
        height = {40}
        alt="This sure is a logo"
        />
        <span style={{color: teamColor("https://statboticsbutbad.online/team/"+teamKey+"/year/2023/icon/color")}} className="text-3xl">{teamNumber}-{teamName}</span>
        </p>
        <div className="flex space-x-10">
        <img
        src={teamPhoto}
        className="ml-10 border border-cyan-400 mt-6 drop-shadow-md rounded max-h-64 max-w-xs"
        alt="This sure is a robot photo"
        />
        <ul className="list-none text-zinc-200 mt-6 text-2xl space-y-20">
            <li>Record: {teamRecord("https://statboticsbutbad.online/team/"+teamKey+"/year/2023/record")["wins"]}-{teamRecord("https://statboticsbutbad.online/team/"+teamKey+"/year/2023/record")["losses"]}-{teamRecord("https://statboticsbutbad.online/team/"+teamKey+"/year/2023/record")["ties"]} </li>
            <li>Awards: {numOfTeamAwards}  </li>
            <li>Blue Banners: {numOfBlueBanners} </li>
        </ul>
        </div>
        </div>
        </div> 

    )
}