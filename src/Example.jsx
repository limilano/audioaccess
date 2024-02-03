import React, {useRef, useEffect, useState} from "react";
import axios from "axios";

const key = `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`;
const model = "whisper-1";

const Example = () => {
    const inputRef = useRef();
    const [file, setFile] = useState();
    const [response, setResponse] = useState(null);
    console.log(key);

    const onChangeFile = () => {
        setFile(inputRef.current.files[0]);
    };

    useEffect(() => {
        const fetchAudioFile = async () => {
            if(!file) {
                return;
            }

            const formData = new FormData();
            formData.append("model", model);
            formData.append("file",file);

            axios 
             .post("https://api.openai.com/v1/audio/transcriptions",formData,{
                headers: {
                    "Content-Type" : "multipart/form-data",
                    Authorization: `Bearer ${key}`,
                },
             })
             .then((res) => {
                console.log(res.data);
                setResponse(res.data);
             })
             .catch((err) => {
                console.log(err);
             }) 
        };
        fetchAudioFile();
    },[file]);

    return <div>
        Whisper 
        <input type = "file" ref = {inputRef} accept = ".mp3" 
            onChange = {onChangeFile} style = {{display:"block", marginTop:"20px" }}/>

        {response && <div>{JSON.stringify(response, null,2)}</div>}
    </div>;
};

export default Example;