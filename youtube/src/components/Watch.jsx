import CommentsContains from './CommentsContains'
import { useSearchParams } from "react-router-dom";
import Chat from './Chat';

const comments = [
    {
        name: "Akash Suryavanshi",
        date: "02/04/2017",
        content: "Writing a comment",
        replies:
            [{
                name: "Akash Suryavanshi",
                date: "02/04/2017",
                content: "Writing a comment",
                replies:
                    []
            },
            {
                name: "Akash Suryavanshi",
                date: "02/04/2017",
                content: "Writing a comment",
                replies:
                    [{
                        name: "Akash Suryavanshi",
                        date: "02/04/2017",
                        content: "Writing a comment",
                        replies: [{
                            name: "Akash Suryavanshi",
                            date: "02/04/2017",
                            content: "Writing a comment",
                            replies: []
                        }, {
                            name: "Akash Suryavanshi",
                            date: "02/04/2017",
                            content: "Writing a comment",
                            replies: []
                        },
                        {
                            name: "Akash Suryavanshi",
                            date: "02/04/2017",
                            content: "Writing a comment",
                            replies: [{
                                name: "Akash Suryavanshi",
                                date: "02/04/2017",
                                content: "Writing a comment",
                                replies: []
                            }]
                        }]
                    }]
            },]
    },
    {
        name: "Akash Suryavanshi",
        date: "02/04/2017",
        content: "Writing a comment",
        replies: []
    },
    {
        name: "Akash Suryavanshi",
        date: "02/04/2017",
        content: "Writing a comment",
        replies: [
            {
                name: "Akash Suryavanshi",
                date: "02/04/2017",
                content: "Writing a comment",
                replies: []
            },
            {
                name: "Akash Suryavanshi",
                date: "02/04/2017",
                content: "Writing a comment",
                replies: [{
                    name: "Akash Suryavanshi",
                    date: "02/04/2017",
                    content: "Writing a comment",
                    replies: []
                }, {
                    name: "Akash Suryavanshi",
                    date: "02/04/2017",
                    content: "Writing a comment",
                    replies: []
                }]
            }]
    }]



const Watch = () => {

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v')

    return (
        <div className='flex w-full'>
            <div className='flex flex-col'>
                <div id="videoSection">
                    <iframe width="800" height="400" src={`https://www.youtube.com/embed/${videoId}?si=Sy2RfUrd4JfyDJiu`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div id="Recommendation"></div>
                <div id="commentSection">
                    <CommentsContains comments={comments} />
                </div>
            </div>
            <Chat/>
        </div>
    )
}

export default Watch;