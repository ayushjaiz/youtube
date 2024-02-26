import React from 'react';

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    return (
        <div className="m-2 p-2 w-96 shadow-lg cursor-pointer">
            <img className="h-56 bg-cover" alt="thumbnail" src={thumbnails.medium.url}/>
            <ul>
                <li className="text-base font-semi bold">{title}</li>
                <li className="py-2">{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
            {/*<div className="h-24"><h1 className="text-base font-medium">{title}</h1>*/}
            {/*    <p className="text-xs">{channelTitle}</p></div>*/}
        </div>
    );
};

export default VideoCard;