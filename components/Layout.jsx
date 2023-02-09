import Navbar from "./Navbar"



// children - anybody can pass on any component (one or more than one) and we render that component
function Layout({children}) {
  return (
    <>
      <Navbar/>

      {/* load the children */}
      {children}
    </>
  )
}

export default Layout
