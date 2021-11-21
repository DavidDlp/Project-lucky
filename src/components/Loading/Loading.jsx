import React from 'react';

//Images
import loading from './../../assets/img/loading.png';
import Loader from "react-js-loader";


const Loading = () => {

    return (
        <div className="loading">
            <img src={loading} alt="" />
            <div className="loading__animation">
                <Loader type="bubble-loop" bgColor={"#01748e"} color={'#01748e'} size={100} />
            </div>
        </div>
    )
}

export default Loading;