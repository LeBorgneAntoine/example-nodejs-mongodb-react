import React from "react";

const Axios = require('axios');//package to make request post/get/put...

/**
 * Main page which display the data
 */
class DataPage extends React.Component{

    _mounted = false

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this._mounted = true
        this.updateData()
    }

    /**
     * update the data from de server
     */
    updateData = () => {
        Axios.get('http://localhost:8080/mongodb/getData')//request the data server side (Proxy can be setup in package.json to avoid typing "http://localhost:8080")
            .then(result => {
                if(result.data.result){
                    if(this._mounted)
                        this.setState({
                            data: result.data.data
                        })
                }else{
                    console.log(result.data)
                }
            })//update the 'dataState' state

    }

    componentWillUnmount() {
        this._mounted = false
    }

    /**
     *
     *
     * @param fieldA the data to delete
     */
    handleDelete = (fieldA) => {

        Axios.post('http://localhost:8080/mongodb/deleteOne', { fieldA: fieldA  })
            .then(result => {
                if(result.data.deleted){
                  this.updateData()
                }else{
                    console.log(result.data)
                }
            })//update the 'dataState' state

    }


    /**
     * for each data element in the data array state create an Item object
     * list updated when data state change with "setState({data: [new, state]})"
     * @returns {JSX.Element}
     */
    render(){
        return <>

            {this.state.data.map((data, index) => <Item delete={this.handleDelete} key={index} data1={data.fieldA} data2={data.fieldB}/>)}

        </>
    }

}



/**
 * Item with a data on it
 * in the props = {data1="a text", data2=12, delete=handleDelete(data1)}
 */
class Item extends React.Component{

    /**
     * on delete click execute the delete function passed by props in the data page
     */
    handleDelete = () => {

        this.props.delete(this.props.data1)

    }

    render() {
        return <div className="data-row">
            <h1>{this.props.data1}</h1>
            <h3>{this.props.data2}</h3>
            <input type="submit" onClick={this.handleDelete} value="delete"/>
        </div>
    }

}



export default DataPage