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
            Free 20 minute Consultation Phone Call. Discuss your questions or
            concerns regarding your child's current program and decide if you
            would like to work with an advocate.
          </td>
        </tr>
        <tr>
          <td className="service-name-col">Records Review</td>
          <td className="service-descr-col">
            Review of all of your child’s documentation (IEP’s, 504’s, School
            Academic and Achievement Testing, IHP, etc.)
          </td>
        </tr>
        <tr>
          <td className="service-name-col">Initial Meeting (In Person)</td>
          <td className="service-descr-col">
            The first planning meeting can be in person or remotely via Zoom.
            Margie will explain your child’s school reports and evaluations.
            Together, we will prioritize the issues and create a plan for moving
            forward.
          </td>
        </tr>
        <tr>
          <td className="service-name-col">IEP Team Meetings</td>
          <td className="service-descr-col">
            Make the most out of Team Meetings. Margie will help you communicate
            your concerns with the Team while collaborating to improve their IEP
            or 504 or help in finding eligibility.
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
          <td className="service-name-col">Correspondence with School</td>
          <td className="service-descr-col">
            Margie will write formal letters requesting school records and
            addressing issues as they arise.
          </td>
        </tr>
        <tr>
          <td className="service-name-col">Mediation</td>
          <td className="service-descr-col">
            When districts and parents cannot agree on the best programming for
            a student, mediation can be a powerful tool. Margie can support you
            through this process.
          </td>
        </tr>
      </tbody>
    </table>
  )
}
