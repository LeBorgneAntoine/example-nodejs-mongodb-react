const Axios = require('axios');

/**
 * Create a simple form to send data to the server
 * @returns {JSX.Element}
 * @constructor
 */
function FormPage () {

    /**
     * trigger on the submit
     * @param event
     */
    let handleSubmit = (event) => {

        let fieldAValue = document.getElementById("field-a").value;
        let fieldBValue = document.getElementById("field-b").value;

        //send the data via post request
        Axios.post("http://localhost:8080/mongodb/insertOne", {
            fieldA: fieldAValue,
            fieldB: fieldBValue
        }).then(result => {



        })

        event.preventDefault();// prevent page from reload
    }


    return <>
        <form className="form-container" onSubmit={handleSubmit}>
            <label form="field-a">fieldA</label>
            <input id="field-a" type="text" />

            <label form="field-b">fieldA</label>
            <input id="field-b" type="number" />

            <input type={"submit"} value="insert"/>
        </form>
    </>

}

export default FormPage;