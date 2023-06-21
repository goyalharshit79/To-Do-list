import React from "react";

function Item(props){

    return(
        <div>
            <ul>
                <li onClick={()=>props.clicked(props.id)}>
                    {props.text}
                </li>

            </ul>
        </div>
    )
}

export default Item