import { useSearchParams } from "react-router-dom";

const Watch = () => {
    
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v')

    return    (
        <div>
            <div id="videoSection">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}?si=Sy2RfUrd4JfyDJiu`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div id="Recommendation"></div>
            <div id="commentSection"></div>
        </div>
    )
}

export default Watch;