import React from "react";

export const DropDownList = props => (
    <div className="form-group">
        <select className="form-control" >
            {props.li.map(item => 
                <option key={item} value={item}>{item}</option>
            )}
            
        </select>
    </div>
);
