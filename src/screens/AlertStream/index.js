import React from "react";
import styled from "styled-components";

import { Alert } from "@components";
import { useAlert } from "@contexts";

// Data available
// ------------------
// The alert data is generated using the Chance library.
// The definitions can be seen below.
// ------------------
// key: chance.guid(),
// title: chance.sentence({ words: 5 }),
// severity: chance.integer({ min: 1, max: 5 }), (1 = highest, 5 = lowest)
// type: chance.pickone(["mechanical", "software", "human"]),
// isPrediction: chance.pickone([true, false]),
// predictionConfidence: chance.integer({ min: 70, max: 99 }), (99% = almost certain to happen)
// description: chance.paragraph({ sentences: 2 }),
// time: new Date()

const AlertItems = styled.ul`
  padding: 0;
`;

const AlertStream = () => {
  const data = useAlert();
  return (
    <AlertItems>
      {data.map(
        (alert) => (
          <Alert key={alert.key} {...alert}/>
        )
      )}
    </AlertItems>
  )
};

export { AlertStream };
