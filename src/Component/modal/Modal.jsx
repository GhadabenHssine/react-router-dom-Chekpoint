import * as React from 'react';
import stylee from "./modale.module.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"


import { FormControl, InputLabel, Input } from '@mui/material';

const BasicModal = ({ handleMovie }) => {
    const navigate=useNavigate()
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        height: 500,

        bgcolor: 'background.paper',
        borderRadius: "15px",
        boxShadow: 24 ,
        p: 4,
    };

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [posterURL, setPosterurl] = React.useState("");
    const [rating, setRating] = React.useState(0);



    return (
        <div  className={stylee.bloc} >

     

            <Box sx={style}>
            <InputLabel htmlFor="my-input"> <h3 style={{marginTop:"20px",textAlign:"left"}}>Add Movie</h3></InputLabel>
                <FormControl>
                  
                    <InputLabel htmlFor="my-input"> </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />

                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input"> </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setTitle(e.target.value)} />
                    <InputLabel htmlFor="my-input">title</InputLabel>

                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-input"> </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setDescription(e.target.value)} />
                    <InputLabel htmlFor="my-input" >description</InputLabel>

                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input"> </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setPosterurl(e.target.value)} />
                    <InputLabel htmlFor="my-input" >posterURL</InputLabel>

                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input"> </InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => setRating(e.target.value)} />
                    <InputLabel htmlFor="my-input" > rating</InputLabel>

                </FormControl>
                <FormControl>



                </FormControl>
                <Button style={{   backgroundColor: "black",color: "white",marginLeft: "30px", marginTop: "70px" }} 
                onClick={() => {handleMovie({ id: Math.random(), title, description, posterURL, rating });navigate("/") }}>Save Movie</Button>
            </Box>

         



        </div>

    );
}

export default BasicModal
