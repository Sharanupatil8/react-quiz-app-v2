import React from "react";

import Option from "./Option";

function Options(props) {
  console.log(props);
  return (
    <ul className="flex flex-col space-y-5  mt-8 md:mt-6">
      {props.options.map((option, index) => (
        <Option
          option={option}
          key={index}
          questions={props.questions}
          index={index}
          setAnswered={props.setAnswered}
          answered={props.answered}
          handleSetUserPoints={props.handleSetUserPoints}
        />
      ))}
    </ul>
  );
}

export default Options;
