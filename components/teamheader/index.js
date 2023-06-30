import React from "react";
import Image from "next/image";
import {getDataFromURL, getDataFromURLHeaders} from "../../utils/urlfetch.js"
export function TeamHeader ({teamNumber}) {
    const teamKey = "frc"+teamNumber
    const firstAPIHeader = {"Authorization":"Basic cGxleGFnb246YjRhNDZkMjQtMjk3MS00YWU3LWJjMTMtZGZmZGI5NDQ5OWRk"}
    const tbaHeader = {"X-TBA-Auth-Key":"taNNHN48xLHMTafxhcWk32hWxvYxufm5ghT0dTXx8AORWU5gOQhDLhDBRsSJXcgz"} //"Authorization:"+ process.env.FIRSTINSPIRES
    const teamImage = //getDataFromURLHeaders("https://www.thebluealliance.com/api/v3/team/"+teamKey,tbaHeader)
    getDataFromURLHeaders("https://frc-api.firstinspires.org/v3.0/2023/avatars?teamNumber="+teamNumber,firstAPIHeader)
    console.log(teamImage)
    console.log(firstAPIHeader)
    return (
        <>
        {/* <Image
        src={"data:image/png;base64,"+ teamImage}
        className="flex ml-10 mr-2 drop-shadow-md rounded-full"
        width = {40}
        height = {40}
        alt="This sure is a logo"
        /> */}
        {teamImage}
        </> 




    )

}