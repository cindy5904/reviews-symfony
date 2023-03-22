import React, { useState } from "react";

export default function Home({companies}) {
    let [search, setSearch] = useState();
    return (
        <div>
            <h2  className="text-yellow-700 font-bold text-2xl text-center mt-5">Hello React</h2>
           <input value={search} onChange={(e) =>setSearch(e.target.value)} />
            <ul className="mx-5">
                {companies.filter(company =>company.includes(search)).map(company=><li>{company}</li>)}
            </ul>
        </div>
    )
}