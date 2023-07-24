import { Card, CardGroup, CardBody } from 'reactstrap'

const About = () => {
  return (
    <div>
      <div style={{ backgroundColor: 'teal', height: '35vh' }}>
        <br />
        <h5 className="sectionHeader">About Me</h5>
        <p className="sectionText">Some intro text about me.</p>
      </div>
      <CardGroup
        style={{
          marginLeft: '10vh',
          marginRight: '10vh',
          marginTop: '-100px',
          paddingTop: '30px'
        }}
      >
        <Card>
          <CardBody style={{ textAlign: 'center' }}>
            <br />
            Full-Stack Development
            <br />
            <br />
            I'm always learning and growing, so expect this list to change. For
            now, here are the technologies I use:
            <br />
            <br />
            <br />
            Languages and Frameworks:
            <br />
            <br />
            CSS3
            <br />
            Django
            <br />
            Django REST Framework
            <br />
            HTML5
            <br />
            JavaScript
            <br />
            Express
            <br />
            Node
            <br />
            Python
            <br />
            React
            <br />
            Reactstrap
            <br />
            <br />
            <br />
            Databases:
            <br />
            <br />
            MongoDB
            <br />
            PostgresQL
            <br />
            <br />
          </CardBody>
        </Card>
        <Card>
          <CardBody style={{ textAlign: 'center' }}>
            <br />
            Principles & Values
            <br />
            <br />
            Anyone who knows me can tell you, you don't know me if you don't
            know the values I hold. Here are some that are most relevant to a
            professional context:
            <br />
            <br />
            <br />
            Values:
            <br />
            <br />
            Accountability
            <br />
            Alignment
            <br />
            Communication
            <br />
            Commitment to the Bigger Picture
            <br />
            Egolessness
            <br />
            Respect
            <br />
            <br />
            <br />
            Principles:
            <br />
            <br />
            Deep Work
            <br />
            Flow
            <br />
            Playing to Strengths
            <br />
            Positivity
            <br />
          </CardBody>
        </Card>
        <Card>
          <CardBody style={{ textAlign: 'center' }}>Background</CardBody>
        </Card>
      </CardGroup>
    </div>
  )
}

export default About
