import React, { useEffect, useState } from "react";

function Home() {

    const [livedata, setlivedata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [news,setnews] = useState([]);
    const [load,setload] = useState(true);


    useEffect(() => {
        
        setload(true);
        setLoading(true);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a5550a9c63mshd86fe6bb3e5ec17p1c5481jsnd3f63fadd3a8',
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
              
        };
  
        fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', options)
        .then((res) => res.json())
        .then((data) => {
            setlivedata(data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
        });

      
        fetch('https://cricbuzz-cricket.p.rapidapi.com/news/v1/index', options)
        .then((res) => res.json())
        .then((data) => {
            setnews(data);
            setload(false);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setload(false);
        });


    }, []);


   const finaldata = [];
   const livematches = [];
   const fnews = [];

    
   if(!loading && !load)
   {

        news.storyList.forEach(element => {

        if(element.story)
        {
            fnews.push(element.story);
        }
        })

        console.log(livedata);

        
        const flivedata = livedata.typeMatches.filter((element) =>{

            return (element.matchType === 'International' || element.matchType === 'League' || element.matchType === 'Domestic' || element.matchType === 'Women')

        });


        flivedata.forEach(element => {
            
         
           element.seriesMatches.forEach((element) => {
            
            if(element.seriesAdWrapper)
            {
                finaldata.push(element.seriesAdWrapper);
            }


           })

        
        });

  

        finaldata.forEach(element => {

            element.matches.forEach(element => {
                livematches.push(element);
            });
            
        });

        return(
            <>
            <div className="flex flex-row flex-nowrap flex-none bg-gray-700 p-4 overflow-auto scrollbar-hide shadow-2xl" >

                {livematches.map(element => {
                 
                    return(

                        <div className="border-r-2 border-white basis-1/3 grow-0 shrink-0 shadow-2xl">

                            <div className="text-gray-500 text-center py-2 text-2xl">
                            {element.matchInfo.seriesName}
                            </div>
                            
                            
                            <div className="text-gray-100 py-2 flex ">
                                
                                <div className=" ml-auto mr-auto text-xl ">
                                {element.matchInfo.team1.teamName}
                                </div>

                                <div className=" mr-auto ml-auto text-xl">
                                {element.matchInfo.team2.teamName}
                                </div>

                            </div>

                                
                                {element.matchScore && element.matchScore.team1Score && element.matchScore.team2Score? 
                                    <>
                                {element.matchInfo.matchFormat === "TEST" ?
                                
                                    <div className="text-gray-100 py-2 flex ">
                                
                                        <div className=" ml-auto mr-auto text-lg flex ">
                                            {element.matchScore.team1Score.inngs1?<div>{element.matchScore.team1Score.inngs1.runs}/{element.matchScore.team1Score.inngs1.wickets}</div>:<div></div>}
                                            <div className="mx-1">{''}</div>
                                            {element.matchScore.team1Score.inngs2?<div>and {element.matchScore.team1Score.inngs2.runs}/{element.matchScore.team1Score.inngs2.wickets}</div>:<div></div>}
                                        </div>

                                        <div className=" mr-auto ml-auto text-lg flex">
                                            {element.matchScore.team2Score.inngs1?<div>{element.matchScore.team2Score.inngs1.runs}/{element.matchScore.team2Score.inngs1.wickets} </div>:<div></div>}
                                            {element.matchScore.team2Score.inngs2?<div> and {element.matchScore.team2Score.inngs2.runs}/{element.matchScore.team2Score.inngs2.wickets}</div>:<div></div>}
                                        </div>

                                    </div>:

                                    <div className="text-gray-100 py-2 flex ">
                                
                                    <div className=" ml-auto mr-auto text-lg flex ">
                                    {element.matchScore.team1Score.inngs1?<div>{element.matchScore.team1Score.inngs1.runs}/{element.matchScore.team1Score.inngs1.wickets} in {element.matchScore.team1Score.inngs1.overs}overs</div>:<div></div>}
                                        
                                    </div>

                                    <div className=" mr-auto ml-auto text-lg flex">
                                    {element.matchScore.team2Score.inngs1?<div>{element.matchScore.team2Score.inngs1.runs}/{element.matchScore.team2Score.inngs1.wickets} in {element.matchScore.team2Score.inngs1.overs}overs </div>:<div></div>}

                                    </div>
                                    
                                    </div>
                                }
                                </>:
                                <></>
                            }
                                
                            <div className="text-gray-100 py-2 text-center text-lg">
                                {element.matchInfo.status}
                            </div>
                                
                        </div>
                    )
                        
                })}

            </div>

        <div className="bg-gray-100 flex content-start h-8/12 m-4 flex-wrap">
                
        {fnews.map(element =>{
    
            return(
                <div className="bg-gray-100 shadow-xl w-2/12 grow-0 shrink-0 p-4 m-4 mr-auto">
                    <div className="text-center text-black text-xl">
                    {element.hline}   
                    </div>

                    <div className="text-gray-600 text-lg">
                    {element.intro}
                    </div>
                </div>
            )
    

        })}

        </div>
        </>
        )
   }
   




}


export default Home;