
import React from "react";
import useSWR from "swr";
import Head from "next/head.js";
import axios from "axios";
import {Navbar} from "@/components/navbar"
import { useFormStatus } from "react-dom";

const fetcher = url => axios.get(url).then(res => res.data)


function Submit() {
  //const { pending } = useFormStatus();
  return (
    <button className='appearance-none rounded-md mr-20 text-sm font-thin tracking-wide text-zinc-200 p-1.5 ring-2 caret-cyan-400 ring-cyan-400 outline-none bg-zinc-900 peer' type="submit" disabled={false}>
      {false ? "Calculating..." : "Calculate Alliance Score"}
    </button>
  );
}

export default function Index() {
  async function getTeamPrediction(event) {
    event.preventDefault();
    var formData = new FormData(document.querySelector("form"));
    var res = await fetch("https://statbotics-but-bad-production.up.railway.app/sim/year/2025/teams/frc"+formData.get("team1").toString()+"/frc"+formData.get("team2").toString()+"/frc"+formData.get("team3").toString())
    const response = await res.json()
    var tBody = document.getElementById("tableBody");
    var tList = document.createElement("tr");
    for (var data in response) {
        var tData = document.createElement("td");
        tData.textContent = response[data].toString();
        tData.className = "border border-cyan-400 p-2"
        tList.appendChild(tData);
    }
    tBody.appendChild(tList);
  }
  return (
    <div>
  <Head>
        <link rel="icon" type="image/x-icon" href={"logo.png"}/>
        <title>smh</title>
  </Head>
  <div>
  <Navbar/>
  </div>
  <div className="text-zinc-200 flex flex-col flex-initial items-center justify-items-center border border-cyan-400 rounded-md max-w-none mt-6 py-8 mx-20 bg-zinc-800">
    
    <form onSubmit={getTeamPrediction}>
      <label htmlFor="team1">Enter team number: </label>
      <input className='appearance-none rounded-md mr-20 text-sm font-thin tracking-wide text-zinc-200 p-1.5 ring-2 caret-cyan-400 ring-cyan-400 outline-none bg-zinc-900 peer' type ="number" name="team1" id="team1"></input>
      <label htmlFor="team2">Enter team number: </label>
      <input className='appearance-none rounded-md mr-20 text-sm font-thin tracking-wide text-zinc-200 p-1.5 ring-2 caret-cyan-400 ring-cyan-400 outline-none bg-zinc-900 peer' type ="number" name="team2" id="team2"></input>
      <label htmlFor="team3">Enter team number: </label>
      <input className='appearance-none rounded-md mr-20 text-sm font-thin tracking-wide text-zinc-200 p-1.5 ring-2 caret-cyan-400 ring-cyan-400 outline-none bg-zinc-900 peer' type ="number" name ="team3" id="team3"></input>
     <Submit />
    </form>
    <table className='border-separate border-spacing-2 border border-cyan-400 appearance-none rounded-md mt-10 mr-20 text-sm font-thin tracking-wide text-zinc-200 p-2 outline-none bg-zinc-900 '>
      <thead>
        <tr>
          <th className="border border-cyan-400 p-2">Alliance</th>
          <th className="border border-cyan-400 p-2">Total Score</th>
          <th className="border border-cyan-400 p-2">Auto Score</th>
          <th className="border border-cyan-400 p-2">Teleop Score</th>
          <th className="border border-cyan-400 p-2">Barge Score</th>
          <th className="border border-cyan-400 p-2">Auto L4</th>
          <th className="border border-cyan-400 p-2">Auto L3</th>
          <th className="border border-cyan-400 p-2">Auto L2</th>
          <th className="border border-cyan-400 p-2">Auto L1</th>
          <th className="border border-cyan-400 p-2">Total L4</th>
          <th className="border border-cyan-400 p-2">Total L3</th>
          <th className="border border-cyan-400 p-2">Total L2</th>
          <th className="border border-cyan-400 p-2">Total L1</th>
          <th className="border border-cyan-400 p-2">Processor Algae</th>
          <th className="border border-cyan-400 p-2">Net Algae</th>
        </tr>
      </thead>
      <tbody id="tableBody">

      </tbody>
    </table>
  </div>
  </div>)
//     const { data, error, isLoading } = useSWR(
//         "https://statboticsbutbad.online/team/frc33/year/2023/icon/color",
//         //"https://api.statbotics.io/v2/team/2337",
//         fetcher
//       );
//       console.log(data)
//       if (isLoading) return "Lol";
//       if (error) return error.message;
//       return <h1 style={{color: data.color}}> Wassup? </h1>
}