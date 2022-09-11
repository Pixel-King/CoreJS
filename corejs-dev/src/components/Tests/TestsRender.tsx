import React from "react";
import CardTest from "./CardTest";

export default function TestsRender(props: {type: string}) {
    return (
        CardTest(props.type)
    )
}
