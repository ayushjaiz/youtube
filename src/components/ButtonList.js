import React from 'react';
import Button from "./Button";

const list = ["All", "Live", "Gaming", "Cricket", "Soccer", "Cooking", "Music"];
const ButtonList = () => {
    return (
        <div className="flex">
            {list.map((l) => <Button key={l} name={l}/>)}
        </div>);
};

export default ButtonList;