
import React from "react";
import Body from "./Body";
import Button from "./Buttons";

function MainContainer()
{
    return (
        <div className="flex flex-col w-screen">
        <Button/>
        <Body/>
        </div>
    )
}

export default MainContainer;