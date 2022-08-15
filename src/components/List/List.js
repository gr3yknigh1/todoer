import { ListItem } from "./ListItem";

export function List() {
  const labels = ["Buy milk", "Review pool request", "Clean dishes"];

  const elements = labels.map((label, index) => {
    return <ListItem label={label} key={index} />;
  });

  return (
    <ul>{elements}</ul>
  );
}
