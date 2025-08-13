import '../App.css';
import { Link } from 'react-router-dom';
import AboutUsHeader from '../Images/AboutUs.png';

const AboutUs = () => {
  return (
    <>
      <div style={{ backgroundColor: '#f8f9fa' }}>
        <div className="header-img">
          <img
            src={AboutUsHeader}
            alt="About Us"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="container py-5">
          <div className="p-4 p-md-5 shadow rounded-4 bg-white">
            <h2 className="fw-bold display-5 mb-3 text-center">About Us</h2>
            <div
              style={{
                height: "4px",
                width: "80px",
                margin: "0 auto 2.5rem auto",
                background: "linear-gradient(to right, #2B5DAE, #34a3da)",
                borderRadius: "5px",
              }}
            ></div>
            <p className="text-start">
              <strong>Taskify</strong> is a comprehensive task management platform designed to help individuals
              and teams organize, prioritize, and track their work efficiently. 
              Users can create tasks, set deadlines, assign responsibilities, and monitor progress 
              in real time. The system supports secure user authentication with role-based access,
              allowing team members to collaborate while giving administrators full control over 
              project oversight. Taskify also provides an interactive dashboard with detailed analytics
              and productivity insights, enabling smarter decision-making. Built with modern technologies 
              such as React, Spring Boot, and Recharts, Taskify ensures a smooth and reliable 
              user experience.
            </p>
            <hr className="my-5" />
            <p className="text-start">
              Taskify was developed by a team of five students from the University of Macedonia, Department of Applied Informatics,
              as part of the course <em>"Special Topics in Web Programming"</em>.
            </p>
            <p className="text-start mt-4">
              <strong>The programmers of this project are:</strong> Cenko Florian, Rizoulis Vaios, Samoli Vaia,
              Sousloglou Kyriakos, Stigkas Panteleimon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
