import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-1">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-capitalize">
            <p>
              all rights reserved &copy;{new Date().getFullYear().toString()} Margaret Mikulskis
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
