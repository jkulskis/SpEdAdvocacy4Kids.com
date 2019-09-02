// Testimonials V3 from https://mdbootstrap.com/docs/jquery/sections/testimonials/

import React from "react"

export default function testimonialsV3() {
  return (
    <section className="team-section text-center my-5 mx-5">
      <h2 className="h1-responsive font-weight-bold my-5">Testimonials</h2>

      <div className="row text-center">
        <div className="col-md-4 mb-md-0 mb-5 mx-auto">
          <div className="testimonial">
            {/* <div className="avatar mx-auto">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                className="rounded-circle z-depth-1 img-fluid"
              />
            </div> */}
            <p className="font-weight-normal dark-grey-text">
              <i className="blockquote pr-2">
                We were having difficulty with our daughter in the Belmont
                Public Schools.  Margie used her advocacy skills to ensure our
                daughter get the correct services.  She helped us to find the
                right expert to evaluate our daughter and obtain an IEP from the
                school.  She worked with our Team to build attainable IEP
                goals.  She introduced us to many useful resources.  Margie is
                an inspriation to me.  She really cares.  It isn't just a job
                for her.
              </i>
            </p>
            <h5 className="font-weight-bold blue-text my-3">
              -- Belmont High School Parent
            </h5>
          </div>
        </div>
        <div className="col-md-4 mb-md-0 mb-5 mx-auto">
          <div className="testimonial">
            <p className="font-weight-normal dark-grey-text">
              <i className="blockquote pr-2">
                We were having difficulty with our daughter in the Belmont
                Public Schools.  Margie used her advocacy skills to ensure our
                daughter get the correct services.  She helped us to find the
                right expert to evaluate our daughter and obtain an IEP from the
                school.  She worked with our Team to build attainable IEP
                goals.  She introduced us to many useful resources.  Margie is
                an inspriation to me.  She really cares.  It isn't just a job
                for her.
              </i>
            </p>
            <h5 className="font-weight-bold blue-text my-3">-- Barbara B.</h5>
            <h6 className="blue-text my-3">
              Complex Medical Program Coordinator, BAMSI
            </h6>
          </div>
        </div>
      </div>
    </section>
  )
}
