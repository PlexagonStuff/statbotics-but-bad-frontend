import React from "react";
import useSWR from "swr";
import axios from "axios";
import {Navbar} from "@/components/navbar"

const fetcher = url => axios.get(url).then(res => res.data)
export default function Index() {
  return (
  <div>
  <Navbar/>
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