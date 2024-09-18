import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { faJsSquare, faReact, faHtml5, faPython, faJava, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import Nature from '../../Assets/images/nature.jpg'
import Football from '../../Assets/images/football.jpg'

const About = () => {
    const  [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for a role in 
                    an established or startup software engineering company with the opportunity to work on 
                    new, challenging and diverse projects.
                </p>
                <p>
                    I'm naturally curious and constantly working to continue to learn 
                    new languages and problem solving skills. 
                </p>
                <p>
                    If I had to define myself in one sentence it would have to be a nature lover, proud Jets fan, 
                    athlete, ambitious new techie, and willing to give 100% to any cause I participate in. 
                </p>
            </div>
            <div className='strange-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon ={faPython} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon ={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon ={faJava} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon ={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon ={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon ={faGithub} color="#EC4D" />
                    </div>
                </div>
            </div>
            <div className="nature-photo">
                <img src = {Nature} alt = "It's a me!" style={{height:350, width:233}}/>
            </div>
            <div className="Jets-photo">
                <img src = {Football} alt = "It's a me!" style={{height:250, width:400}}/>
            </div>
            <Loader type="pacman" />
        </div>
    )
}

export default About