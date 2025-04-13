  import React from 'react';
  import './Skills.css';

  const Skills = () => {
    const skills = [
      "HTML5", "CSS3", "JavaScript", "Figma", "UI/UX", "Web design",
      "Web developing", "VENOM", "Dota 2", "GOYDA Script", "Allāhu Akbar"
    ];

    return (
      <div className='skills-block'>
        <h1 style={{ fontSize: '52px' }}>MY SKILLS</h1>
        <p style={{ fontSize: '22px' }}>Developing 
        <span style={{ color: '#4824ff' }}> static </span> and <span style={{ color: '#4824ff' }}> animated </span>
        web sites in the following directions:</p>
        
        <div style={{ display: 'flex' }} className='tag-container'>
          {skills.map((skill, index) => (
            <div className='tag' key={index}>
              <span className='tag-icon'></span>
              {skill}
            </div>
          ))}
        </div>

        <p style={{ fontSize: '22px' }}>
          Free to discuss design creation/layout and other areas.
          <br/>Ready to discuss in more detail in <span style={{ color: '#4824ff' }}>personal correspondence.</span>
        </p>
      </div>
    )
  }

  export default Skills;