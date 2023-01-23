import React from 'react';
import Facts from "../facts/facts";
import axios from 'axios';

const Content = () => {

    const [data, setData] = React.useState();
    const [error, setError] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);

    //  get api data
    React.useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://mocki.io/v1/f3334e90-0d1f-482b-b1e2-d0402bea3c95')
            .then((response) => {
                setData(response.data.facts);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (error) {
        console.log(`An error occured: ${error}`);
    }

    if (isLoading) {
        return <>Still loading...</>;
    }

    //  map response to array
    const factsArray = data && data.map(function (obj) {
        return obj.fact;
    });

    const factStrings = (factsArray) ? factsArray : false;

    return (
        <div className="content-container">
            <Facts firstname="Sebastian" lastname="Kulahs" factPrefix="I am" facts={factStrings} />
        </div>
    );
};

export default Content;
