import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createES } from '../../../shared/apicallsbooking';
import { useNavigate } from 'react-router-dom';

const NewES = () => {

    const navigate = useNavigate()

    const [es, setES] = useState({
        name:"",
        capacity:0,
        floor:0
    })

    const handleChange = (e) => {
        setES({
            ...es,
            [e.target.id]: e.target.value
        })    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createES(es)
        .then(res => {
            if(res.length){
                alert("Created Event Space")
                navigate('/')
            } else {
                alert("Failed to create")
            }
        })

    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Room Name:</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Name'
                        onChange={handleChange}
                        value={es.name}       
                        id='name'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Floor:</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Floor'
                        onChange={handleChange}
                        value={es.floor}
                        id='floor'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Capacity:</Form.Label>
                    <Form.Control
                        required
                        type='number'
                        placeholder='Capacity'
                        onChange={handleChange}
                        value={es.capacity}
                        id='capacity'
                    />
                </Form.Group>
                <button type="submit">Submit</button>
            </Form>
        </div>
    );
}

export default NewES;
