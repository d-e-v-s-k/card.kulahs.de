import React from 'react';
import Typed from 'typed.js';

const Facts = ({firstname, lastname, factPrefix, facts}) => {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    const factStringsFallback = [
        'a software developer.',
        'a SEO-Manager.',
        'a UX enthusiast.',
        'a web & mobile developer.',
        'an adventurer.',
        'a blogger.',
        'a trainer of apprentices.'
    ]

    if (!facts) {
        facts = factStringsFallback;
    }

    //  init typed.js
    React.useEffect(() => {
        const options = {
            strings: facts,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2500,
            loop: true,
            loopCount: Infinity,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="facts">
            <div className="facts__name">
                <h1>
                    <span className="facts__name-default">{firstname} </span>
                    <span className="facts__name-highlight">{lastname}</span>
                </h1>
            </div>
            <div className="facts__detail">
                <p>{factPrefix} <span className="facts__item" ref={el} /></p>
            </div>
        </div>
    );
};

export default Facts;
