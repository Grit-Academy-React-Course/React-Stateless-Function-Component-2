import Li from "./Li";
const RenderData = (props) => {
    return (
        <ul>
            {props.list.map((value, index) => {
                return (
                  <Li key={index} value={value}></Li>
                )
            })}
        </ul>
    )
}
export default RenderData;