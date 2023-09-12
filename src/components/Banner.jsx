import * as FaIcons from 'react-icons/fa'

const Banner = () => {
  return (
    <div id="banner">
      <div id="leftSide">
        <h1>Hi, I'm Daniel</h1>
        <p style={{ color: 'grey' }}>
          I'm a Full Stack Web Developer who loves coming up with plans, solving
          problems, being a thought partner, and losing myself in my work.
        </p>
        <br />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <a
            href="https://github.com/loewenst"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <FaIcons.FaGithubSquare size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-z-loewenstein/"
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
          >
            <FaIcons.FaLinkedin size={40} />
          </a>
        </div>
      </div>
      <div id="rightSide">
        <img
          src="https://i.imgur.com/LBG2nzQ.jpg"
          alt=""
          style={{ borderRadius: '50%', border: '5px teal solid' }}
        />
      </div>
    </div>
  )
}

export default Banner
