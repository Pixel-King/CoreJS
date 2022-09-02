import * as  React from "react";
import loadImg  from  "./loadGif.gif"

interface LoadProps {
    classStr: {
        width: string;
    }
}

export default function Loading({ classStr }: LoadProps) {
    return(
        <>
            <img src={loadImg} alt="load..." style={classStr}/>
        </>
    );
}
