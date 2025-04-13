import React from "react";






export function EventScreen({eventName, eventData}) {
    console.log("hello")
    return (
        <div>
            <div class = "relative w-full px-5 bg-zinc-800">
                <table>
                    <tbody>
                     
                    </tbody>
                </table>
                <p>{Object.keys(eventData)}</p>
            </div>
        </div>
    )
}