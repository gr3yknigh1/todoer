import { useCallback, useState } from "react";



export function ListItem(props) {

  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxChange = useCallback((checkbox) => {
    setIsChecked(checkbox.target.checked);
  }, [setIsChecked]);

  return (
    <>
      <li className="listItem" key={props.index}>
        <input
          className="checkbox"
          type="checkbox"
          onChange={onCheckboxChange} />
        <span className="text">
          {isChecked ? <s>{props.label}</s> : props.label}
        </span>
      </li>
    </>
  );
}
