import React from "react"

export default function servicesList() {
  return (
    <table className="table table-hover mx-auto col-10">
      <thead className="mx-auto">
        <tr>
          <th scope="col" className="service-name-col">
            Service
          </th>
          <th scope="col" className="service-descr-col text-center">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="service-name-col">Intake Phone Call or Email</td>
          <td className="service-descr-col">
            Free 30 minute Consultation Phone Call. Contact Margie with your
            questions or concerns about your child's current program and decide
            if you would like to proceed with a Records Review.
          </td>
        </tr>
        <tr>
          <td className="service-name-col">Records Review</td>
          <td className="service-descr-col">
            Margie will review all of your child’s documentation (IEP’s, 504’s,
            School, Academic and Medical Testing records) and have a in
            preparation for initial meeting with parent.
          </td>
        </tr>
        <tr>
          <td className="service-name-col">Initial Meeting (In Person)</td>
          <td className="service-descr-col">
            The first planning meeting is in person. Together, we will begin
            prioritizing the issues and creating a plan for moving forward.
          </td>
        </tr>
        <tr>
          <td className="service-name-col">IEP Team Meetings</td>
          <td className="service-descr-col">
            Make the most out of Team Meetings with Margie there to help you
            communicate to the Team your concerns and child’s needs while
            collaboratively improving the IEP. Learn how to navigate the special
            education process with Margie by your side.
          </td>
        </tr>
        <tr>
          <td className="service-name-col">IEP Development</td>
          <td className="service-descr-col">
            Work from evaluations, observations and Progress Reports and data to
            utilize the IEP to provide appropriate supports, goals and services
            for your child. From the mission statement to the goals &
            objectives, Margie will teach you the ins & outs and how to utilize
            your student's IEP. 
          </td>
        </tr>
        <tr>
          <td className="service-name-col">Mediation</td>
          <td className="service-descr-col">
            When districts and parents can not agree on the best programming for
            a student, mediation can be a very powerful tool. Margie can support
            you through this process as well. 
          </td>
        </tr>
      </tbody>
    </table>
  )
}
