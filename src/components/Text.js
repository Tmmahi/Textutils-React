import React, { useState } from "react";

export default function Text(props) {
    const [text, setText] = useState("");

    const tolowcase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success', 'converted into lowercase', 'success')
    };

   const toupcase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success', 'converted into upercase', 'success')
    };

    const tochange = (event) => {
        setText(event.target.value);
    };

    
    return (
        <div className=" container my-5" >
            <div className="mb-3">
                <h3>Enter Your Text Here</h3>
                <textarea
                    className="form-control"
                    value={text}
                    onChange={tochange}
                    id="exampleFormControlTextarea1"
                    rows="8"
                    style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                ></textarea>
                <p>{text.length} characters {text.split(' ').length} wards</p>
                <button className=" btn-primary btn my-4" onClick={toupcase}>
                    ToUperCase
                </button>
                <button className=" btn-success btn my-4 mx-3" onClick={tolowcase}>
                    ToLowerCase
                </button>
            </div>
        </div>
    );
}
