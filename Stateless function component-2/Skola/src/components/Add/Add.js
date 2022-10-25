import { useState, useEffect } from "react";
import Button from "../../UI/button/Button";

/* 
    NO:
    componentDidMount
    componentDidUpdate
    componentWillUnmount
*/

const Add = () => {
    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [number3, setNumber3] = useState(0)

    //First scenario
    /* useEffect(() => {
        console.log("componentDidMount and componentDidUpdate");
    }) */

    //Second scenario
    /*  useEffect(() => {
         //Fetch data
         console.log("componentDidMount");
     },[]) */

    //Third scenario
    /* useEffect(() => {
        //setNumber(number => number * 2) NOT GOODDDD
        console.log("componentDidMount and when dependencies state changes [number, number2]");
    }, [number, number2]) */

    //Fourth scenario
    /*   useEffect(() => {
          console.log("componentDidMount");
          return () => {
              console.log("componentWillUnmount");
          }
      },[number]) */

    const increase = () => {
        setNumber(number => number + 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <Button btnText="Increase" click={increase}></Button>
        </div>
    )
}
export default Add;