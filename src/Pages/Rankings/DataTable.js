import React from "react";
import {useState,useEffect} from "react" ;

function DataTable(props){

    const [loading,setloading] = useState(true);
    const [data,setdata] = useState([])

    useEffect(() => {

        setloading(true);

        console.log('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/'+props.type+'?formatType=' + props.format)
        
        fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/'+props.type+'?formatType=' + props.format, props.options)
        .then((res) => res.json())
        .then((data) => {
            setdata(data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setloading(false);
        });
      
    }, [props.type])

    

    return(
        <>
        {!loading ?
        <div className="p-2 flex flex-col items-center bg-gray-700 text-lg text-white mt-12 h-3/6 overflow-auto no-scrollbar w-4/12  mb-4 shadow-2xl ml-auto" >
            <div className="text-3xl">
                {props.heading}
            </div>
                
            <div className="flex p-2 ">
                <table className="m-4 table-auto" >
                    <thead>
                        <tr>
                            <th className="p-4 ml-auto">Rank</th>
                            <th className="p-4 mx-2">Name</th>
                            <th className="p-4 mx-2">Country</th>
                            <th className="p-4 mr-auto">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.rank.map(element =>{
                            return(
                                <tr className="border-b-2 border-white">
                                    <td className="text-lg ml-auto p-4">{element.rank}</td>
                                    <td className="text-lg mx-3 p-4">{element.name}</td>
                                    <td className="text-lg mx-3 p-4">{element.country}</td>
                                    <td className="text-lg mr-auto p-4">{element.rating}</td>
                                </tr>
                        )})}
                    </tbody>
                </table>
             </div>
        </div>:
        <></>}
        </>
    )

}

export default DataTable