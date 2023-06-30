import React from "react";
import {teamList} from "../../utils/teamList.js";
import {TeamLink} from "./TeamLink.js"
const teams = teamList();
export function Dropdown ({searchText}) {
    const filteredTeams = teams.filter((team)=>team.toLowerCase().includes(searchText.toLowerCase()))
    const teamsList = filteredTeams.map((team,index) => (
        // <span className="flex  p-1 rounded-md w-48 text-zinc-200 text-center text-sm tracking-wider font-thin" key={index}>{team}</span>)
        <TeamLink teamInfo={team}/>));
    return (<div>
        <div className="grid mt-10 grid-rows-10 grid-cols-1 overflow-x-clip w-48 max-h-40 bg-zinc-700 rounded-md">
             {teamsList}
        </div>
    </div>)
}