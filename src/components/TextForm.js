import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [changedText, changedSetText] = useState('')
    const uppercase = () => {
        // console.log("uclicked");
        let nTU = text.toUpperCase();
        changedSetText(nTU)
    }
    const lowercase = () => {
        // console.log("lclicked");
        let nTU = text.toLowerCase();
        changedSetText(nTU)

    }
    const minify = () => {
        // console.log("mclicked");
        let nTU = text.replace(/\n|\t|\s/g, "");
        // nTU.replace(/[" "]/gm, "");
        changedSetText(nTU)

    }
    const clear = () => {
        // console.log("lclicked");
        setText('');
        changedSetText('');


    }
    const change = (event) => {
        // console.log("canchahah")
        setText(event.target.value)
    }

    return (
        <>
            <div class="form-floating d-flex flex-column justify-content-center align-items-center">
                <h3 className='mt-3'>{props.title1}</h3>
                <textarea class="form-control" value={text} id="floatingTextarea2" onChange={change} row="8" style={{width:"90%", alignSelf:"center",backgroundColor: props.mode==="dark" ? "#000" : "#fff", color: props.mode==="dark" ? "#fff" : "#046ec4" ,height: "25vh", border:props.mode === "dark" ? "2px solid white" :"2px solid #046ec4"}}></textarea>
                <h3 className='mt-3'>{props.title2}</h3>
                <textarea class="form-control" value={changedText} id="floatingTextarea2" row="8" style={{width:"90%",backgroundColor: props.mode==="dark" ? "#000" : "#fff", color: props.mode==="dark" ? "#fff" : "#046ec4", height: "25vh", border:props.mode === "dark" ? "2px solid white" :"2px solid #046ec4" ,alignSelf:"center"}}></textarea>
                <div className='buttons d-flex flex-row flex-wrap mt-4 justify-content-center align-items-center'>
                <button className='btn btn-primary mt-1 col-2.5  rounded-30 mx-3' onClick={uppercase}>Text Uppercase</button>
                <button className='btn btn-success mt-1  col-2.5 rounded-30 mx-3' onClick={lowercase}>Text LowerCase</button>
                <button className='btn btn-warning mt-1  col-2.5 rounded-30 mx-3' onClick={minify}>Minify the CSS</button>
                <button className='btn btn-danger mt-1 col-2.5  rounded-30 mx-3' onClick={clear}>Clear Textfield</button>
                </div>
                <div className='textcounter mt-2'>
                <h3 className='text-center mx-4 d-flex'>Counter</h3>
                <p className='text-center text-warning'><b>CHARACTERS: </b>{text.length}<br/> <b>WORDS: </b>{text.split(" ").length - 1}</p>

                </div>
            </div>
        </>
    )
}
