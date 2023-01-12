const About = () => {
  return (
    <section className="about">
      <img src="/images/education.png" alt="" />
      <i class="fa-solid fa-arrow-down"></i>
      <div className="edu card">
        <div>
          <h3>Education:</h3>
          <span className="place">Shenkar Collage</span>
          <br />
          <span className="deg">Software Practical</span>
          <br />
          <span className="date">10/2021 - 10/2023</span>
        </div>
        <div className="sec">
          <span className="place">Blich High School</span>
          <br />
          <span className="deg">Torts And Civil Procedures</span>
          <br />
          <span className="date">09/2012 - 09/2016</span>
        </div>
      </div>
      <img src="/images/working.png" alt="" />
      <i class="fa-solid fa-arrow-down"></i>

      <div className="work card">
        <h3>Work Experience:</h3>
        <div>
          <span className="place">Technical Support Engineer</span>
          <br />
          <span className="deg">Comax</span>
          <br />
          <span className="date">04/2022 - Present</span>
          <br />
          <span className="info">
            <ul>
              <li>Familiarity with all parts of the computer</li>
              <li>SQL</li>
              <li>Internet Information Security</li>
            </ul>
          </span>
        </div>
        <div className="sec">
          <span className="place">Combat Officer</span>
          <br />
          <span className="deg">IDF</span>
          <br />
          <span className="date">11/2016 - 07-2021</span>
          <br />
          <span className="info">
            <ul>
              <li>Commanders course</li>
              <li>Officers Course</li>
              <li>Deputy Company Commander Course</li>
            </ul>
          </span>
        </div>
      </div>
<img src="/images/certificate.png" alt="" />
      <i class="fa-solid fa-arrow-down"></i>
      <div className="certif card">
        <h3>Certificates:</h3>
        <div>
          <span className="place">Software Practical - An Honors Student</span>
          <br />
          <span className="deg">Shenkar College</span>
        </div>
        <div className="sec">
          <span className="place">Outstanding Officer</span>
          <br />
          <span className="deg">IDF</span>
        </div>
        <div className="sec">
          <span className="place">Matriculation Certificate</span>
          <br />
          <span className="deg">Blich High School</span>
        </div>
        <div className="sec">
          <span className="place">Excellence and Volunteering In Society</span>
          <br />
          <span className="deg">Blich High School</span>
        </div>
      </div>
    </section>
  );
};
export default About;
