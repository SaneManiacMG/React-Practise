import React from "react";

const Greet = (props) => {
    const { firstWord, secondWord } = props;

    console.log("firstWord: ", firstWord);
    console.log("secondWord: ", secondWord);
    return (
        <>
            <h1>{firstWord}</h1>
            <h1>{secondWord}</h1>
        </>
    );
};

export default Greet;
