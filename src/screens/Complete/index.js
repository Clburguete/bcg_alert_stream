import React, { useState } from "react";

import { Alert, SearchBar } from "./../../components";
import { useAlert } from "./../../contexts";


import * as S from "./style";
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


const Complete = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const {
    items
  } = useAlert();
  const data = items;
  return (
    <>
      <S.List>
        {data
          .filter(elem => elem.title.toLowerCase().includes(searchTerm))
          .map(
            (alert) => (
              <Alert
                key={alert.key}
                alert={alert}  
              />
            )
        )}
      </S.List>
      <S.SearchWrapper>
        <SearchBar value={searchTerm} handleChange={setSearchTerm}/>
      </S.SearchWrapper>
    </>
  )
};

export { Complete };
