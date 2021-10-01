import React from 'react'

function Footer() {
  return (
    <div>
      <footer style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        textAlign: "center",
        height: "50px",
        backgroundColor: "#0d6efd",
        width: "100%",
        fontSize: "18px",
        color: "#fff",
        paddingTop: "1.25rem",
        paddingBottom: "2.5rem"
      }}>
        <div>
          <span>© 2021 Todos los derechos reservados: </span>
          <i><a style={{color: "inherit", textDecoration: "none"}} href="https://www.digitalhouse.com/ar">DigitalHouse.com</a></i>
        </div>  
      </footer>
    </div>
  )
}

export default Footer
