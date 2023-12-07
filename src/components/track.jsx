import {  useState, useEffect } from "react";

const Track = ({ammount, day, id}) => {
    const[date, setDate] = useState();
    const height = {
        height:`${ammount+30}px`
    }
    const current = {
        backgroundColor:'hsl(186, 34%, 60%)',
    }
    function hide(t){
        t.target.previousElementSibling.style.display="none";
    }
    function show(t){
        t.target.previousElementSibling.style.display="flex";
    }
    useEffect(()=>{
        const action = document.querySelectorAll(".ammountDay");
        action.forEach((i)=>{
            i.addEventListener("mouseover", show)
            i.addEventListener("mouseout", hide);
        })
    },[])
    useEffect(()=>{
        const atualDate = new Date();
        const atualDay = atualDate.getDay();
        if(atualDay==0){
            setDate(atualDay);
        }
        if(atualDay==1){
            setDate(atualDay);
        }
        if(atualDay==2){
            setDate(atualDay);
        }
        if(atualDay==3){
            setDate(atualDay);
        }
        if(atualDay==4){
            setDate(atualDay);
        }
        if(atualDay==5){
            setDate(atualDay);
        }
        if(atualDay==6){
            setDate(atualDay);
        }
        const listOfTracks = document.querySelectorAll(".ammountDay");
        listOfTracks.forEach((i)=>{
            i.id==date?i.style.backgroundColor="hsl(186, 34%, 60%)":i.style.backgroundColor="hsl(10, 79%, 65%)";
        })
    },[date])
    return(
        <div className="track">
            <span>{`$${ammount},00`}</span>
            <div className="ammountDay" style={height} id={id}></div>
            <span>{day}</span>
        </div>
    )
}

export default Track;