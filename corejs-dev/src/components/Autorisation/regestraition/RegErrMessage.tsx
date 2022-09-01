import * as React from "react";

const RegErrMessage: React.FC<{err : string[]}> = ({err}) => {
    return (
        <>
        {err.map((e, idx)=>{
            return <p className="reg-err" key={idx}>{e}</p>
        })}
        </>
    );
}

export default RegErrMessage;