const Form = (props) => {
    const formObj = {
        firstName: "",
        lastName: "",
        age: 0
    }
 
    const submitForm = (e) => {
        e.preventDefault();
        console.log(e);
        //To remove what the user wrote in the inputs efter submitting
        for (const item of e.target.children) {
            item.value = ""
        }
        //console.log(formObj);
        props.addNewUser(formObj);
    }

    return (
        <form onSubmit={submitForm}>
            <input
                type="text"
                placeholder="Firstname"
                onChange={(event) => formObj.firstName = event.target.value} />
            <input
                type="text"
                placeholder="Lastname"
                onChange={(event) => formObj.lastName = event.target.value} />
            <input
                type="number"
                min="18"
                max="52"
                required
                placeholder="age"
                onChange={(event) => formObj.age = +event.target.value} />
            <input type="submit" value="Submit" />
        </form>
    )
}
export default Form;