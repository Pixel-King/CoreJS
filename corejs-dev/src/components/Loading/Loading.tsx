import * as  React from "react";
import loadImg  from  "./loadGif.gif"

interface LoadProps {
    classStr: {
        width: string;
    }
}

const Loading: React.FC<{width: string}> = ({width}) => {
    return(
        <>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <img src={loadImg} alt="load..." style={{"width": width}}/>
            </div>
        </>
    );
}

export default Loading;
