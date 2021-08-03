import React, { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    
    const postData = () => {
        axios.post(`https://6101bac049a53700178712ad.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
    
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}