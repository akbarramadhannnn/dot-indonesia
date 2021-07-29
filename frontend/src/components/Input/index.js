import { Fragment, useEffect, createRef, useCallback, useState } from 'react';
import Input, { Select, Suggestion, SuggestionList } from './InputStyles';

const Index = ({
  type,
  value,
  onChange,
  name,
  placeholder,
  suggestion,
  dataSelect,
}) => {
  const ref = createRef();
  const [inputSuggestion, setInputSuggestion] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current) {
        setInputSuggestion(ref.current.contains(event.target));
      }
      // if (
      //   inputSuggestion.current &&
      //   !inputSuggestion.current.contains(event.target)
      // ) {
      //   setInputSuggestion(false);
      // }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleMouseDown = useCallback(
    (data) => {
      if (suggestion) {
        suggestion.handleChange(data);
      }
      setInputSuggestion(false);
    },
    [suggestion]
  );

  const filterData =
    suggestion &&
    suggestion.dataSuggestion &&
    suggestion.dataSuggestion.filter((item) => {
      const lowerCase = value.toLowerCase();
      return Object.keys(item.label).some((key) =>
        item.label.toLowerCase().includes(lowerCase)
      );
    });

  return (
    <Fragment>
      {(type === 'text' || type === 'number') && (
        <Input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
        />
      )}

      {type === 'select' && (
        <Select value={value} onChange={onChange}>
          <option value="">Pilih Kurir</option>
          {dataSelect &&
            dataSelect.map((data, i) => {
              return <option key={i} value={data.value}>{data.label}</option>;
            })}
        </Select>
      )}

      {inputSuggestion && suggestion && suggestion.isSuggestion && (
        <Suggestion ref={ref}>
          {suggestion.isLoading && <p>Loading ....</p>}

          {!suggestion.isLoading && (
            <Fragment>
              {filterData.length > 0 &&
                filterData.map((data, i) => {
                  return (
                    <SuggestionList
                      key={i}
                      onMouseDown={() =>
                        handleMouseDown((data = { data, name }))
                      }
                    >
                      {data.label}
                    </SuggestionList>
                  );
                })}

              {!filterData.length && <p>Tidak tersedia</p>}
            </Fragment>
          )}
        </Suggestion>
      )}
    </Fragment>
  );
};

export default Index;
