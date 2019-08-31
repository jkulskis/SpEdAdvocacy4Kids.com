// Testimonials V3 from https://mdbootstrap.com/docs/jquery/sections/testimonials/

import React from "react"

export default function testimonialsV3() {
  return (
    <section class="team-section text-center my-5 mx-5">
      <h2 class="h1-responsive font-weight-bold my-5">Testimonials</h2>
      <h5 class="dark-grey-text w-responsive mx-auto mb-5">
        See what some of our clients are saying
      </h5>

      <div class="row text-center">
        <div class="col-md-4 mb-md-0 mb-5 mx-auto">
          <div class="testimonial">
            {/* <div class="avatar mx-auto">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                class="rounded-circle z-depth-1 img-fluid"
              />
            </div> */}
            <h4 class="font-weight-bold dark-grey-text mt-4">-</h4>
            <h6 class="font-weight-bold blue-text my-3">
              Belmont High School Parent
            </h6>
            <p class="font-weight-normal dark-grey-text">
              <i class="blockquote pr-2"></i>We were having difficulty with our
              daughter in the Belmont Public Schools.  Margie used her advocacy
              skills to ensure our daughter get the correct services.  She
              helped us to find the right expert to evaluate our daughter and
              obtain an IEP from the school.  She worked with our Team to build
              attainable IEP goals.  She introduced us to many useful
              resources.  Margie is an inspriation to me.  She really cares.  It
              isn't just a job for her.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
