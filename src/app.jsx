import React, {useState} from "react";
import Item from "./item";
import InputArea from "./input";


function App(props) {

    const [items, setItems] = useState([]);

    function btnClicked(item){
        setItems(prevValue => {
            return([...prevValue, item]);
        })
    }

    function deleteItem(id) {
        setItems((prevValue)=>{
            return(
                prevValue.filter((item, index)=>{
                    return index !== id;
                })
            )
        })
    }
    return(
        <div>
            <div className="container" id="big-container">
                <div className="container" id="heading-container">
                    <h1>To Do List</h1>
                </div>
                <div>
                    <InputArea 
                    onClick = {btnClicked}/>

                    {items.map((todoItem, index) => (
                        <Item 
                        key= {index}
                        id = {index}
                        text={todoItem} 
                        clicked={deleteItem}/>
                    ))}                
                </div>
            </div>
        </div>
    )
}

export default App