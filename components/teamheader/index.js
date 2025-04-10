import React from "react";
import Image from "next/image";
//import {getDataFromURL, getDataFromURLHeaders} from "../../utils/urlfetch.js"
import useSWR from "swr";

const fetcher = (url) => fetch(url,).then((res) => res.json());


function useTeamColor(url) {
    const { data, error, isLoading } = useSWR(
    url,
    fetcher
    );
    if (error) return "#e4e4e7";
    if (isLoading) return "#e4e4e7";
    return data["color"];
}

function useTeamRecord(url) {
    const { data, error, isLoading } = useSWR(
    url,
    fetcher
    );
    if (error) return {"wins":0,"losses":0,"ties":0};
    if (isLoading) return {"wins":0,"losses":0,"ties":0};
    return data;
}

function useTeamAwards(url) {
    const { data, error, isLoading } = useSWR(
    url,
    fetcher
    );
    if (error) return {"awards":0,"blueBanners":0};
    if (isLoading) return {"awards":0,"blueBanners":0};
    return data;
}


export function TeamHeader ({teamNumber, imageData, teamName, teamPhoto}) {
    const teamKey = "frc"+teamNumber
    


    return (
        <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center border border-cyan-400 rounded-md w-fit h-fit bg-zinc-800 gap-2 m-6">
        
        <p>
        <Image
        src={"data:image/png;base64,"+ imageData}
        className="ml-10 border border-cyan-400 mr-2 drop-shadow-md rounded inline-flex"
        width = {40}
        height = {40}
        alt="This sure is a logo"
        />
        <span style={{color: useTeamColor("https://statbotics-but-bad-production.up.railway.app/team/"+teamKey+"/year/2023/icon/color")}} className="text-3xl">{teamNumber}-{teamName}</span>
        </p>
        <div className="space-x-10">
        <img
        src={teamPhoto}
        className="ml-10 border border-cyan-400 mt-6 drop-shadow-md rounded max-h-32 max-w-32 "
        alt="This sure is a robot photo"
        />
        <ul className="list-none text-zinc-200 mt-6 text-2xl">
            <li>Record: {useTeamRecord("https://statbotics-but-bad-production.up.railway.app/team/"+teamKey+"/year/2023/record")["wins"]}-{useTeamRecord("https://statbotics-but-bad-production.up.railway.app/team/"+teamKey+"/year/2023/record")["losses"]}-{useTeamRecord("https://statbotics-but-bad-production.up.railway.app/team/"+teamKey+"/year/2023/record")["ties"]} </li>
            <li>Awards: {useTeamAwards("https://statbotics-but-bad-production.up.railway.app/team/"+teamKey+"/year/2023/awards")["awards"]}  </li>
            <li>Blue Banners: {useTeamAwards("https://statbotics-but-bad-production.up.railway.app/team/"+teamKey+"/year/2023/awards")["blueBanners"]} </li>
        </ul>
        </div>
        </div>
        </div>

    )
}