import React from "react";
import {useEffect,useState} from "react";

function Schedule(){

    const [loading,setloading] = useState(true);
    const [data,setdata] = useState([]);

    const options = {
        headers: {
            'X-RapidAPI-Key': 'a5550a9c63mshd86fe6bb3e5ec17p1c5481jsnd3f63fadd3a8',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        } 
    }

    useEffect(() => {

        setloading(true);
   
        fetch('https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international', options)
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
      
    }, [])

    const fdata = [];

    if(!loading)
    {
        data.matchScheduleMap.forEach((element) =>{

            if(element.scheduleAdWrapper)
            fdata.push(element.scheduleAdWrapper)
        })
    }

    console.log(fdata);

    return(
        <div className="h-5/6 bg-gray-100 overflow-auto no-scrollbar">
            {fdata.map((element) =>{

                return(
                    <div className="bg-gray-800 h-2/6 text-white mt-4 mx-4 p-4 shadow-2xl flex flex-row overflow-auto no-scrollbar content-center ">
                        <div className="text-2xl h-2/6 text-center p-8 ml-2 mr-8">
                        {element.date}
                        </div>

                        {element.matchScheduleList.map((element)=>

                        <div className="border-r-2 border-white basis-1/3 grow-0 shrink-0 shadow-2xl">

                            <div className="text-gray-500 text-center py-2 text-2xl">
                            {element.seriesName}
                        </div>


                        <div className="text-gray-100 py-2 flex ">
    
                            <div className=" ml-auto mr-auto text-xl ">
                            {element.matchInfo[0].team1.teamName}
                            </div>

                            <div className=" mr-auto ml-auto text-xl">
                            {element.matchInfo[0].team2.teamName}
                            </div>

                        </div>
                        </div>

                           
                            // <div className="text-xl h-2/6 text-center mx-4">
                            // {element.seriesName}
                            // </div>
                            
                            // console.log(element.seriesName)
                        
                        )}

                    </div>
                )
            })}

        </div>
    )

}



export default Schedule;