// have imported Link from Material bootstrap
import Link from 'next/link'

// have imported button from Material bootstrap
import {MDBBtn} from 'mdb-react-ui-kit'
import React from 'react'

function Navbar() {
  return (
    <nav className='navbar container'>

    {/* have to make clickable superhero so have use of Link tag and Link tag will help that the page will not reload the page after the click on Superhero identity */}
        <Link href="/">
            Superhero identity  
        </Link>      

          {/* if this is called as add then the new file which is creating also named as add  becaus that called refrencing*/}
        <Link href="/add">   
            <MDBBtn>Create New Identity</MDBBtn> 
        </Link>        
    </nav>
  )
}

export default Navbar
