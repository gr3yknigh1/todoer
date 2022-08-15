import { useCallback, useState } from "react"
import "./App.css"


function ListItem(props) {

  const [isChecked, setIsChecked] = useState(false)

  const onCheckboxChange = useCallback((checkbox) => {
    setIsChecked(checkbox.target.checked)
  }, [setIsChecked])

  return (
    <>
      <li className="listItem" key={props.index}>
        <input
          className="checkbox"
          type="checkbox"
          onChange={onCheckboxChange}
        />
        <span className="text">
          { isChecked ? <s>{props.label}</s> : props.label }
        </span>
      </li>
    </>
  )
}


function List() {
  const labels = ["Buy milk", "Review pool request", "Clean dishes"]

  const elements = labels.map((label, index) => {
    return <ListItem label={label} key={index} />
  })

  return (
    <ul>{elements}</ul>
  )
}

function App() {
  return (
    <div>
      <h1 className="text">To do</h1>
      <List/>
    </div>
  );
}

export default App;
