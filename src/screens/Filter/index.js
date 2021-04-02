import React, { useState } from "react";
import Select from 'react-select'

import { Alert } from "./../../components";
import { useAlert } from "./../../contexts";
import { ALERT_TYPES, PREDICTION_TYPES, SEVERITY_TYPES } from "./../../constants";

import * as S from "./style";

const mapSelectOptions = types => types.map(type => ({ value: type, label: typeof type === "string" ? type : type.toString()}));
const typeOptions = mapSelectOptions([...ALERT_TYPES]);
const severityOptions = mapSelectOptions([...SEVERITY_TYPES]);
const predictionOptions = mapSelectOptions([...PREDICTION_TYPES]);

const initialState = {
  type: [],
  severity: [],
  prediction: true
}


const Filter = props => {
    const {
    items
  } = useAlert();

  const [filters, setFilters] = useState({
    ...initialState
  });

  const data = items
    .filter(item => {
      return filters.prediction ? item : !item.isPrediction
    })
    .filter(item => {
      return filters.type.includes(item.type)
        && filters.severity.includes(item.severity);
    });
  
  const handleChange = (val, filterType) => {
    const isArr = !!val.length
    const mappedVal = isArr ?
      val.map(el => el.value).flat() :
      val.value;

    setFilters({
      ...filters,
      [filterType]: mappedVal
    })
  }

  return (
    <>
      <S.List>
        {data
          .map(
            (alert) => (
              <Alert
                key={alert.key}
                alert={alert}  
              />
            )
        )}
      </S.List>
      <S.FilterWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>Type</S.FieldLabel>
          <Select
            options={typeOptions}
            isMulti={true}
            onChange={(val) => handleChange(val, 'type')}
          />
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>Severity</S.FieldLabel>
          <Select
            options={severityOptions}
            isMulti={true}
            onChange={(val) => handleChange(val, 'severity')}
          />
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>Include predictions</S.FieldLabel>
          <Select
            value={{label: filters.prediction.toString(), value: filters.prediction}}
            options={predictionOptions}
            onChange={(val) => handleChange(val, 'prediction')}
          />
        </S.FieldWrapper>

      </S.FilterWrapper>
    </>
  );
}

export { Filter }