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

const index = ({ heroes }) => {
  return (
    <div className="container">
      <h1 className="display-2">Superhero Identity manager</h1>
      <div>

        {/* shows the length of hero on page */}
        {heroes.map(hero => {
          return (
            <MDBCard className='border border-2 my-2'>
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>
                  Reveal Identity
                </MDBCardText>
                <Link href={`/${hero._id}`}><MDBBtn className='mx-2'>View Hero</MDBBtn></Link>
                <Link href={`/${hero._id}/edit`}><MDBBtn>edit Hero</MDBBtn></Link>
              </MDBCardBody>
            </MDBCard>
          )
        })}

      </div>

    </div>
  )
}

export async function getServerSideProps(context) {

  // first make a request
  const res = await axios(`http://localhost:3000/api/hero`)
  // console.log(res.data.hero);

  // extracting/fetching data
  const { hero } = res.data
  // console.log(hero);
  return {
    props: { heroes: hero }
  }
}
export default index
