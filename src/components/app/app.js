import React from 'react';
import BackgroundContainer from "../background/background";
import Content from "../content/content";

const App = () => {
    return (
        <section>
            <BackgroundContainer classname="bg-container" />
            <Content />
        </section>
    );
};

export default App;
