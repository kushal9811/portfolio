import React from 'react'
// import { ReactComponent as GithubIcon } from '../../assets/github-alt.svg';
// import { ReactComponent as GithubIcon } from '../../assets/github-alt.svg';
import GithubIcon from '../../assets/github-alt.svg';
import LeetCodeIcon from '../../assets/leetcode.svg';
import LinkedIn from '../../assets/icons8-linkedin.svg';
const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/kushal9811" className="home__social-icon" target="_blank">
          <img src={GithubIcon} alt="GitHub Icon" style={{height:'20px',width:"20px"}}/>
      {/* Other content */}
        </a>
        <a href="https://www.linkedin.com/in/kushal-gangwar-9a7709253/" className="home__social-icon" target="_blank">
          <img src={LinkedIn} alt="LinkedIn icon" style={{height:'20px',width:"20px"}}/>
        </a>
        <a href="https://leetcode.com/u/kushalgangwar98/" className="home__social-icon" target="_blank">
          <img src={LeetCodeIcon} alt="LeetCode Icon" style={{height:'20px',width:"20px"}}/>
        </a>
    </div>
  )
}

export default Social