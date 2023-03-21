import React from "react";

export default function Home({companies}) {
    return (
        <div>
            <h2  className="text-yellow-700 font-bold text-2xl text-center mt-5">Hello React</h2>
            <ul className="mx-5">
                {companies.map(company=><li>{company}</li>)}
            </ul>
        </div>
    )
}