import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact by email" />
      <div className="col-10 col-sm-8 col-md-6 mx-auto">
        <form action="https://formspree.io/margietm@gmail.com" method="POST">
          {/* name */}
          <div className="form-group">
            <label htmlFor="name" className="required-field">Name</label>
            <input
              type="text"
              className="form-control"
              required="true"
              name="name"
              id="name"
              placeholder="First Last"
            />
          </div>
          {/* email */}
          <div className="form-group">
            <label htmlFor="email" className="required-field">Email</label>
            <input
              type="email"
              className="form-control"
              required="true"
              name="email"
              id="email"
              placeholder="email@domain.com"
            />
          </div>
          {/* phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              id="phone"
            />
          </div>
          {/* description */}
          <div className="form-group">
            <label htmlFor="description" className="required-field">Your Inquiry</label>
            <textarea
              className="form-control"
              required="true"
              name="description"
              id="description"
              rows="5"
            ></textarea>
          </div>
          {/* submit */}
          <button
            type="submit"
            className="btn btn-yellow btn-block text-capitalize mt-5"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  )
}
