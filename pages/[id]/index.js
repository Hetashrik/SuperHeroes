import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
  // syantax to require axios
  const axios = require('axios').default;
  
  import Link from 'next/link'
  import {useRouter} from 'next/router'

function EachHero({heroes}) {
    const router = useRouter()

    const heroId = router.query.id


    // functionality for delteting the values
    const deleteHero = async() => {
        try {
            const deleteHero = await axios(`http://localhost:3000/api/hero/${heroId}`,{
                method: "DELETE"
            });
            router.push('/')
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='container'>
        <h1 className='display-3'>Identity of hero</h1>
        <MDBCard className='border border-2 my-2'>
              <MDBCardBody>
                <MDBCardTitle>{heroes.superHero}</MDBCardTitle>
                <MDBCardText>
                {/* Reveal Identity */}
                    {/* {heroId} */}
                  {heroes.realName}
                </MDBCardText>
                {/* <Link href={`/${hero._id}`}><MDBBtn className='mx-2'>View Hero</MDBBtn></Link> */}
                <Link href={`/`}><MDBBtn className='mx-2'>Edit Hero</MDBBtn></Link>
                <MDBBtn 
                onClick={deleteHero}
                className='btn btn-danger'>Delete Hero</MDBBtn>
              </MDBCardBody>
            </MDBCard>
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

export default EachHero
