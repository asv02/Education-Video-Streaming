import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../appSlice";
import randomName from '@scaleway/random-name'

const Chat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch()
    const chats = useSelector((appStore)=>appStore.ChatReducer.messages)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Api Polling")
            dispatch(addChat(
                {
                    name: randomName(),
                    content: "hi How are u?"
                }))
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    console.log("Chats->",chats)
    return (
        <div className="flex flex-col h-[400px] w-full bg-white border border-gray-200 rounded-lg shadow-md mx-3">
            {/* Chat Header */}
            <div className="p-3 border-b border-gray-200">
                <h2 className="font-semibold text-gray-800">Live Chat</h2>
            </div>

             {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 flex-col-reverse">
                {chats.map((message,ind)=>
                    {
                       return <ChatMessage key={ind} name={message.name} message={message.content}/>
                    })}
            </div>

            {/* Chat Input */}
            <form
                className="p-3 border-t border-gray-200 flex items-center gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addChat(
                        {
                            name:randomName(),
                            content:liveMessage
                        }
                    ))
                    console.log("Sending message:", liveMessage);
                    setLiveMessage("");
                }}
            >
                <input
                    type="text"
                    className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Chat..."
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 0010 16.57l5.303 2.121a.998.998 0 001.32-.903l-1.429-5a1 1 0 00-.586-.732l-5-1.428a1 1 0 00-.894.232l-1.293 1.292-1.414-1.414 3.535-3.536a1 1 0 000-1.414l-3.536-3.535-1.414 1.414 1.293 1.293a1 1 0 00-.232.894l1.428 5 1.429-5 .903-1.32-2.122-5.303z" />
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default Chat;
