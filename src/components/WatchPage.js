import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {closeMenu} from "../utils/appSlice";
import {useSearchParams} from "react-router-dom";

const WatchPage = () => {
    const [searchParams] = useSearchParams();

    const videoId = searchParams.get("v");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

    return (
        <div className="px-5">
            <iframe width="960" height="540" src={"https://www.youtube.com/embed/" + videoId}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    );
};

export default WatchPage;