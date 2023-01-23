import React from 'react';

const BackgroundContainer = ({classname}) => {
    return (
        <div className={classname ? classname : ""}></div>
    );
};

export default BackgroundContainer;
