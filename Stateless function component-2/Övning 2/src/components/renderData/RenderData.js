const RenderData = (props) => {
    return (
        <ul>
            {props.users.map((value) => {
                return (
                    <li key={value.id}>
                        <span>{value.name}  -  {value.username}  -  { value.email}</span>
                    </li>
                )
            })}
        </ul>
    )
}
export default RenderData