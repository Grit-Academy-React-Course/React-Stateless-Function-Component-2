import { Fragment, useState } from "react";
import Form from "./components/form/Form";
import RenderData from "./components/renderData/RenderData";
import Button from "./UI/button/Button";
import Add from "./components/Add/Add";

const App = (props) => {

  const [list, setList] = useState([])

  const addNewUser = (formObj) => {
    setList(list => [...list, formObj])
  }
  const click = () => {
    alert("I'm button one")
  }
  const click2 = () => {
    alert("I'm button Two")
  }

  return (
    <Fragment>
       <Add />
      {   /*  <Form addNewUser={addNewUser} />
      <RenderData list={list}></RenderData>
      <Button btnText="I'm button one" click={click}></Button>
      <Button btnText="I'm button Two" click={click2}></Button>
      <Button btnText="I'm button three" click={click}></Button>
      <Button btnText="I'm button four" click={click}></Button> */}
    </Fragment>
  )
}

export default App;