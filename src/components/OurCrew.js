import React from 'react';

const OurCrew = () => {
    return (
        <section className="our-crew" id="our-crew">
        <div className="container">
          <h1>Our Team</h1>
          <div className="employee">
            <img src="https://picsum.photos/id/237/400/400" alt="pracownik 1" className="employee-photo" />
            <div className="employee-text">
              <h3>First name & Surname [ division ] </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Morbi vel massa et lacus egestas cursus a non magna.
                  Fusce scelerisque blandit nunc, id malesuada ex lobortis a.
                  Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula.
                  Duis efficitur lacinia enim, non tincidunt libero ultrices in.
                      </p>
            </div>
          </div>
          <div className="employee">
            <img src="https://picsum.photos/id/1025/400/400" alt="pracownik 2" className="employee-photo" />
            <div className="employee-text">
              <h3>First name & Surname [ division ] </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Morbi vel massa et lacus egestas cursus a non magna.
                  Fusce scelerisque blandit nunc, id malesuada ex lobortis a.
                  Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula.
                  Duis efficitur lacinia enim, non tincidunt libero ultrices in.
                      </p>
            </div>
          </div>
        </div>
      </section>
    )
}
export default OurCrew;