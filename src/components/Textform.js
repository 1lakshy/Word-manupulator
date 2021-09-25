import React from 'react';
import { useState } from 'react';

export default function Textform(props) {
    const [text, settext] = useState('entertext here')

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        settext(newText)
    }

    const handleDownClick = () => {
        let secondText = text.toLowerCase();
        settext(secondText)
    }

    let btn = document.getElementById("copyBtn")
    let writtenText = document.getElementById("text")

    const handleCopy = () => {
        writtenText.select();
        document.execCommand("copy");
        btn.innertext = "Text copied"
    }
    const handleOnChanged = (event) => {
        console.log("on changed");
        settext(event.target.value);
    }


    return (
        <>
            <div style={{ color: props.mode === "dark" ? "white" : 'grey' }}>
                <h1 className="my-3">{props.heading}</h1>
                <div className="mb-3">
                    <label for="Textarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="text" value={text} onChange={handleOnChanged} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : 'grey' }} id="Textarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-3" id="copyBtn" onClick={handleCopy}>Copy your text</button>
            </div>

            {/* summary wala part */}

            <div className="container">
                <h1>Your text summary</h1>
                <p>{text.split("").length} words and {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>



        </>
    )
}
