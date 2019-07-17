import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const About = () => {
  return (
    <Container
      fluid
      id="aboutSection"
      className="d-flex flex-column align-items-center"
    >
      <div id="about">
        <h1 className=" m-8">About</h1>
      </div>
      <div className="m-3">
        <div id="rbcard" className="card mb-3" style={{maxWidth: '140vmin'}}>
          <div className="row no-gutters">
            <div className="col-lg-4">
              <img fluid src="images/roberto2.png" className="card-img" />
            </div>
            <div className="col-lg-8">
              <div className="card-body">
                <h4 className="card-title">
                  <b>My Journey</b>
                </h4>
                <Card.Text className="text-justify">
                  I’ve always sought out challenges that are meaningful to me.
                  My professional path has shifted from analyzing consumer
                  behavior to building useful and accessible software for
                  consumers, but I've always had a laser focus on the end user,
                  and I have never stopped engaging my passion for helping
                  others and solving complex problems.
                </Card.Text>
                <Card.Text className="text-justify">
                  As a web developer, I enjoy using my attention to detail, my
                  need to constantly learn, and my love for making things, to
                  create the innvoation that drives forward progress in the
                  world.
                </Card.Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
