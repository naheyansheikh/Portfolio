import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      {}
      <Headings title="About" subtitle="Hi!👋 I'm Naheyan." />{' '}
      {}
      <p className="about-text">
        I&apos;m currently in my third year at the University of British Columbia, 
        pursuing a degree in Computer Science. My journey into the world of programming began with coursework, 
        where I delved into languages like Java, JavaScript, C, C++, and Python. However, my thirst for knowledge led me 
        to explore beyond the classroom, diving into self-learning to deepen my understanding and mastery of these languages.<br />

        What truly sets my heart racing is AI Development. The potential of artificial intelligence to revolutionize industries 
        and improve lives is what drives my passion. I&apos;m dedicated to shaping my academic path and future career towards this fascinating field.<br />

        In addition to my academic pursuits, I&apos;m an avid creator. I&apos;ve embarked on personal projects that tackle my everyday challenges, honing my skills 
        and creativity. These ventures have allowed me to apply my knowledge in practical scenarios and explore the endless possibilities technology offers.
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
