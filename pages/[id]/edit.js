// import React, { useEffect, useState } from "react";
import {
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';

// syantax to require axios
const axios = require('axios').default;

import Link from 'next/link'
import Router,{ useRouter } from 'next/router'
import {useState} from 'react';

function EditHero({heroes}) {
    const router = useRouter()

    const heroId = router.query.id
    const [form, setForm] = useState({
        superHero:heroes.superHero,
        realName:heroes.realName
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // creating method
    // handling a form
    const handleForm = async(e) => {
        e.preventDefault()
        try {
            const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(form)
            })
            Router.push('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container' >
            <h1 className='display-3'>Add a new hero identity</h1>
            <form onSubmit={handleForm}>
                <MDBInput
                    onChange={handleChange}
                    label='Superhero'
                    type='text'
                    name='superHero'
                    value={form.superHero}
                />
                <MDBInput
                className="my-2"
                    onChange={handleChange}
                    label='realName'
                    type='text'
                    name='realName'
                    value={form.realName}
                />
                <MDBBtn type='submit'>Edit a hero</MDBBtn>
            </form>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const id = params.id
    // first make a request
    const res = await axios(`http://localhost:3000/api/hero/${id}`)
    // console.log(res.data.hero);
  
    // extracting/fetching data
    const { hero } = res.data
    // console.log(hero);
    return {
      props: { heroes: hero }
    }
  }

export default EditHero
