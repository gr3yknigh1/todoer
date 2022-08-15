import { useCallback, useState } from "react";
import { ListItem } from "./ListItem";

function AddListItemBtn(props) {
  return (
    <button onClick={props.onClick}>
      Add item
    </button>
  )
}

export function List() {
  const [labels, setLabels] = useState([])

  const elements = labels.map((label, index) => {
    return <ListItem label={label} key={index} />;
  });

  const onAddButtonClick = useCallback(() => {
    setLabels([...labels, "new task"])
  }, [setLabels, labels])

  return (
    <>
      <ul>{elements}</ul>
      <AddListItemBtn onClick={onAddButtonClick}/>
    </>
  );
}
