// Testimonials V3 from https://mdbootstrap.com/docs/jquery/sections/testimonials/

import React from "react"

export default function testimonialsV3() {
  return (
    <section className="team-section text-center my-5 mx-5">
      <h2 className="h1-responsive font-weight-bold my-5">Testimonials</h2>

      <div className="row text-center pb-5">
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
                I appreciate Ms. Margie Mikulskis for all things she helped us
                with. Her knowledge and experience to help both my daughters get
                more services from school, and besides that she helped me
                understand about autism diagnosis, consults, and ESY,...I wish
                for her to help me for a long time.
              </i>
            </p>
            <h5 className="font-weight-bold blue-text my-3">-- Brockton Parent</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-md-0 mb-5 mx-auto pt-5 pb-5">
        <div className="testimonial">
          <p className="font-weight-normal dark-grey-text">
            <i className="blockquote pr-2">
              I am happy to highly recommend Margie Mikulskis without
              reservation. Margie has been phenomenal in working with a little
              boy who is a medically complex client of mine. Margie agreed
              without reservation to take on this difficult case and become his
              special education advocate. I was immediately impressed by
              Margie’s extensive knowledge of special education, dedication and
              enthusiasm to help this little boy get more services. She
              immediately came up with a game plan to advocate. Her tenacity and
              persistence to collaborate with his multiple providers, parents
              and care coordinators demonstrated that Margie is a team player
              who values others’ input into the situation. She was resourceful,
              very caring and open minded to what the parent’s vision was for
              their son. She has special gifts with communication, organization,
              planning, research and collaboration. Margie was also very
              resourceful in getting the family a wheelchair ramp. She has made
              a real positive impact on this little boy’s quality of life. I was
              impressed with her enthusiasm, kindness, extensive knowledge of
              special education and her resourcefulness.
            </i>
          </p>
          <h5 className="font-weight-bold blue-text my-3">-- Barbara B.</h5>
          <h6 className="blue-text my-3">
            Complex Medical Program Coordinator, BAMSI
          </h6>
        </div>
      </div>
    </section>
  )
}
