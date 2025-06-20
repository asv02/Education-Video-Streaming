import React, {useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YT_API } from "../constants";
import ShimmerList from "./ShimmerList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSideBar} from "../appSlice";

const Body = () => {

    const [videos,setVideos] = useState(null);
    const dispatch = useDispatch()


    const handletoggleSide = ()=>
        {
            dispatch(closeSideBar())
        }


    useEffect(() => {
        (async () => {
            const data = await (fetch(YT_API))
            const dataJson = await (data.json())
            console.log(dataJson)
            setVideos(dataJson)
        })()
    }, [])

    return !videos?<ShimmerList/>:(
        <div className="flex flex-wrap w-screen">
            {videos.items.map((res)=>
                {
                    return <Link to={`/watch?v=${res.id}`} key={res.id} onClick={handletoggleSide}><VideoCard detail={res}/></Link>
                })}
        </div>
    )
}

export default Body;