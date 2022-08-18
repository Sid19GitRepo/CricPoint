import React from "react";
import {useState,useEffect} from "react" ;
import DataTable from "./DataTable";

function Rankings(){

    const [player,setplayer] = useState('batsmen');


    const options = {
        headers: {
            'X-RapidAPI-Key': 'a5550a9c63mshd86fe6bb3e5ec17p1c5481jsnd3f63fadd3a8',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        } 
    }

    

    return(
        <div className="bg-gray-100">
            <div className="bg-gray-700 ml-auto mr-auto w-fit basis-1/4 grow-0 shrink-0 flex text-white mt-8 shadow-xl  text-2xl">
                <button className="p-8 border border-white ml-auto " onClick={(e)=>setplayer('batsmen')} >Batsman</button>
                <button className="p-8 border border-white" onClick={(e)=>setplayer('bowlers')}>Bowler</button>
                <button className="p-8 border border-white mr-auto" onClick={(e)=>setplayer('allrounders')}>Allrounder</button>
            </div>

            <div className="flex m-4">
                <DataTable heading="Test" options={options} type={player} format="test"/>
                <DataTable heading="ODI"  options={options} type={player} format="odi"/>
                <DataTable heading="T20I" options={options} type={player} format="t20"/>
            </div>

        
        </div>
    )

}

export default Rankings