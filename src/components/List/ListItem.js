import { useCallback, useEffect, useState } from "react";



export function ListItem(props) {
  const [label, setLabel] = useState(props.label)
  const [isChecked, setIsChecked] = useState(false);
  const [isInserting, setIsInserting] = useState(false);

  const onCheckboxChange = useCallback((checkbox) => {
    setIsChecked(checkbox.target.checked);
  }, [setIsChecked]);

  const onLabelClick = useCallback(() => {
    setIsInserting(true)
  }, [setIsInserting])

  const onInputChange = useCallback((input) => {
    setLabel(input.target.value)
  }, [])

  const onEnterPress = useCallback((ev) => {
      if (ev.key === 'Enter') {
        setIsInserting(false)
      }
  }, [setIsInserting])

  useEffect(() => {
    document.addEventListener('keypress', onEnterPress)
    return () => {
      document.removeEventListener('keypress', onEnterPress)
    }
  }, [onEnterPress])

  return (
    <>
      <li className="listItem" key={props.index}>
        <input
          className="checkbox"
          type="checkbox"
          onChange={onCheckboxChange} />
        {
          isInserting ?
            <input className="labelInput" type="text" onChange={onInputChange} value={label}></input> :
            <span className="text" onClick={onLabelClick}>
              {isChecked ? <s>{label}</s> : label}
            </span>
        }
      </li>
    </>
  );
}
