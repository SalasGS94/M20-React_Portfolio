import React from 'react';


export default function Resume() {
  return (
    <div id="About-Me" className="form About-Me">
      <h2>Resume</h2>
      <form>
      <a href="https://drive.google.com/file/d/1U4oNK73Qr88FKHRiA2vQmb16QeDg0_hy/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Download my resume</a>      
      <h3>Front-end Proficiencies</h3>
      <ul className="cs-ul">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul className="cs-ul">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      </form>      
    </div>
  );
}