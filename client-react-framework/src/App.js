import DataPage from "./pages/DataPage";
import {useState} from "react";
import FormPage from "./pages/FormPage";
import "./style.css";

/**
 * Holder page with a navigation system
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {

    //currentPage = state of the page, setState = function to change the state, by default = <DataPage/>
    const [currentPage, setPage] = useState(<DataPage/>);

    //return the application with the navigation bar and the current page
    return (
        <div className="App">
           <NavigationBar>
               <NavigationItem text="Data" goTo={() => setPage(<DataPage/>)}/>
               <NavigationItem text="Form" goTo={() => setPage(<FormPage/>)}/>
           </NavigationBar>
            {currentPage}
        </div>
    );
}

/**
 * create a navigation bar
 *
 * @param props the children, in this case "NavigationItem"
 * @returns {JSX.Element}
 * @constructor
 */
function NavigationBar(props){


    return <div className="nav-bar">
        {props.children}
    </div>

}

/**
 * An item of the NavigationBar
 *
 * @param props = {text="theTxtToDisplay", goTo={() => setPage(<PageX/>)}}
 * @returns {JSX.Element}
 * @constructor
 */
function NavigationItem(props){

    return <div onClick={props.goTo} className="nav-item-container">
        <h5>{props.text}</h5>
    </div>
}

export default App;
