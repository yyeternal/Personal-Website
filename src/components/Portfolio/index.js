import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import dndImage from '../../Assets/images/DnD.png'
import pythonImage from '../../Assets/images/pythonlogo.jpg'
import saImage from '../../Assets/images/SA.png'

const imageMap = {
  'DnD.png': dndImage,
  'pythonlogo.jpg': pythonImage,
  'SA.png': saImage,
}

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  console.log(portfolioData)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={imageMap[port.cover.split('/').pop()]}
                className="portfolio-image"
                alt={port.title}
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
