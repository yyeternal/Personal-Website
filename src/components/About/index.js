import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { faJsSquare, faReact, faHtml5, faPython, faJava, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import Nature from '../../Assets/images/nature.jpg'
import Football from '../../Assets/images/football.jpg'
import Me from '../../Assets/images/me.jpeg'
import Tree from '../../Assets/images/Nature.jpeg'
import Archery from '../../Assets/images/archery.jpeg'

const About = () => {
    const  [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='page-container'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Hi! AS you know my name is Jonathan. I am a graduate Computer Science student at WPI where I stay during the school year but 
                        I am originally from Long Island, NY. 
                    </p>
                    <p>
                        I'm a very ambitious full-stack developer looking for a role in 
                        an established or startup software engineering company with the opportunity to work on 
                        new, challenging and diverse projects.
                    </p>
                    <p>
                        I've done extensive work creating applications that serve real purposes and solve real world problems. 
                        I have done work with both software engineering along with embedded systems. 
                    </p>
                    <p>
                        Many of my projects involve personal interests of mine. Some of these interests can be seen on this page, but not all. I am a big DnD nerd;
                        I run a campaign of my own as a DM and I play in two others. I paint my own minis along with resin cure my own dice (happy to talk about that!).
                        I am also a diehard Jets fan and I really love to be active whether that is playing sports or going out on hikes. 
                    </p>
                </div>
                
                <div className='image-container'>
                    <div className="nature-photo">
                    <img src = {Nature} alt = "It's a me!" style={{height:350, width:233}}/>
                    </div>
                    <div className="Jets-photo">
                        <img src = {Football} alt = "It's a me!" style={{height:250, width:400}}/>
                    </div>
                    <div className="me-photo">
                        <img src = {Me} alt = "It's a me!" />
                    </div>
                    <div className="Tree-photo">
                        <img src = {Tree} alt = "It's a me!" />
                    </div>
                    <div className="archery-photo">
                        <img src = {Archery} alt = "It's a me!" />
                    </div>
                </div>
            </div>
            
            <Loader type="pacman" />
        </div>
    )
}

export default About