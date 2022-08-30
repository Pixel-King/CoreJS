import * as React from "react";

const ProgressBar: React.FC = () => {
    const [percent, setPercent] = React.useState<number>(0);
    function progBar () {
        const windowScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setPercent(windowScroll / windowHeight * 100);
    }
    React.useEffect(() => {
        window.addEventListener("scroll", progBar);
        return () => window.removeEventListener("scroll", progBar);
    })
    return (
        <div className='progressBar' style={{ width: `${percent}%`, backgroundColor: percent >= 95 ? '#198754' : '#dc3545' }}></div>
    )
}

export default ProgressBar;