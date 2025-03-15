import React from 'react';
import '../styles/ResumeNew.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faGlobe, 
  faLocationDot,
  faBook,
  faMusic,
  faFutbol,
  faPersonRunning
} from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';
import ProfileImage from '../images/profile';
import { 
  FigmaIcon, 
  PhotoshopIcon, 
  IllustratorIcon, 
  XdIcon, 
  IndesignIcon 
} from '../images/SkillIcons';

function Resume() {
  return (
    <div className="resume-container">
      {/* 左侧部分 - 个人信息 (About Me) */}
      <div className="resume-left">
        {/* 个人资料 */}
        <div className="profile">
          <div className="profile-img">
            <ProfileImage />
          </div>
          <h1 className="profile-name">Justin</h1>
          <h2 className="profile-lastname">Folly</h2>
          <p className="profile-title">UI/UX Designer</p>
        </div>

        {/* 联系信息 */}
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>justinfolly123@gmail.com</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
            <span>www.yoursitename.com</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
            <span>New York</span>
          </div>
        </div>

        {/* 行业知识 */}
        <div className="knowledge-section">
          <h3 className="section-title">Industry Knowledge</h3>
          
          <div className="skill-item">
            <span className="skill-name">User Interface</span>
            <div className="skill-dots">
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
            </div>
          </div>
          
          <div className="skill-item">
            <span className="skill-name">User Experience</span>
            <div className="skill-dots">
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
            </div>
          </div>
          
          <div className="skill-item">
            <span className="skill-name">Product Design</span>
            <div className="skill-dots">
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
            </div>
          </div>
          
          <div className="skill-item">
            <span className="skill-name">Interaction Design</span>
            <div className="skill-dots">
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
            </div>
          </div>
          
          <div className="skill-item">
            <span className="skill-name">Design Research</span>
            <div className="skill-dots">
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
            </div>
          </div>
          
          <div className="skill-item">
            <span className="skill-name">Web Design</span>
            <div className="skill-dots">
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
            </div>
          </div>
        </div>

        {/* 语言 */}
        <div className="knowledge-section">
          <h3 className="section-title">Languages</h3>
          
          <div className="skill-item">
            <span className="skill-name">English</span>
            <div className="skill-dots">
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
            </div>
          </div>
          
          <div className="skill-item">
            <span className="skill-name">Hindi</span>
            <div className="skill-dots">
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-empty"></span>
            </div>
          </div>
          
          <div className="skill-item">
            <span className="skill-name">French</span>
            <div className="skill-dots">
              <span className="dot dot-filled"></span>
              <span className="dot dot-filled"></span>
              <span className="dot dot-empty"></span>
              <span className="dot dot-empty"></span>
              <span className="dot dot-empty"></span>
            </div>
          </div>
        </div>

        {/* 社交媒体 */}
        <div className="social-section">
          <h3 className="section-title">Social</h3>
          <div className="social-item">Yoursitename.com</div>
          <div className="social-item">linkedin.com/in/YourName</div>
          <div className="social-item">dribbble.com/YourName</div>
          <div className="social-item">behance.com/YourName</div>
        </div>

        {/* 爱好 */}
        <div className="hobbies-section">
          <h3 className="section-title">Hobbies</h3>
          <div className="hobbies-container">
            <div className="hobby-item">
              <FontAwesomeIcon icon={faBook} className="hobby-icon" />
              <span className="hobby-name">Reading</span>
            </div>
            <div className="hobby-item">
              <FontAwesomeIcon icon={faPersonRunning} className="hobby-icon" />
              <span className="hobby-name">Dance</span>
            </div>
            <div className="hobby-item">
              <FontAwesomeIcon icon={faMusic} className="hobby-icon" />
              <span className="hobby-name">Singing</span>
            </div>
            <div className="hobby-item">
              <FontAwesomeIcon icon={faFutbol} className="hobby-icon" />
              <span className="hobby-name">Football</span>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧部分 - 教育和技能 */}
      <div className="resume-right">
        {/* 经验 */}
        <div className="experience-section">
          <div className="section-header">
            <h2>EXPERIENCE</h2>
            <div className="line"></div>
          </div>

          <div className="experience-item">
            <h3 className="item-title">Blue Moon Consultency Studio</h3>
            <p className="item-subtitle">Senior UI Designer</p>
            <p className="item-period">Aug 2020 - Present - 1 year, New York</p>
            <p className="item-description">
              Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.
            </p>
          </div>

          <div className="experience-item">
            <h3 className="item-title">Black Yark Product Design</h3>
            <p className="item-subtitle">Senior UX Designer</p>
            <p className="item-period">Aug 2015 - Aug 2020 - 5 years, New York</p>
            <p className="item-description">
              Lead the UI design with the accountability of the design system, collaborated with product and development teams on core projects to improve product interfaces and experiences.
            </p>
          </div>
        </div>

        {/* 教育 */}
        <div className="education-section">
          <div className="section-header">
            <h2>EDUCATION</h2>
            <div className="line"></div>
          </div>

          <div className="education-item">
            <h3 className="item-title">Bachelor of Engineering in Information Technology</h3>
            <p className="item-subtitle">SCAT Education Campus</p>
            <p className="item-period">2011-2015, New York</p>
          </div>

          <div className="education-item">
            <h3 className="item-title">NJIT Higher</h3>
            <p className="item-subtitle">AB Experiment Campus</p>
            <p className="item-period">2009-2011, New York</p>
          </div>
        </div>

        {/* 我的技能 */}
        <div className="my-skills-section">
          <div className="section-header">
            <h2>MY SKILLS</h2>
            <div className="line"></div>
          </div>

          <div className="skills-container">
            <div className="skill-icon-item">
              <div className="skill-icon">
                <FigmaIcon />
              </div>
              <span className="skill-icon-name">Figma</span>
            </div>
            
            <div className="skill-icon-item">
              <div className="skill-icon">
                <PhotoshopIcon />
              </div>
              <span className="skill-icon-name">Adobe<br/>Photoshop</span>
            </div>
            
            <div className="skill-icon-item">
              <div className="skill-icon">
                <IllustratorIcon />
              </div>
              <span className="skill-icon-name">Adobe<br/>Illustrator</span>
            </div>
            
            <div className="skill-icon-item">
              <div className="skill-icon">
                <XdIcon />
              </div>
              <span className="skill-icon-name">Adobe XD</span>
            </div>
            
            <div className="skill-icon-item">
              <div className="skill-icon">
                <IndesignIcon />
              </div>
              <span className="skill-icon-name">Adobe<br/>InDesign</span>
            </div>
          </div>
        </div>

        {/* 其他技能 */}
        <div className="other-skills-section">
          <div className="section-header">
            <h2>OTHER SKILLS</h2>
            <div className="line"></div>
          </div>

          <div className="skills-container">
            <div className="skill-icon-item">
              <div className="skill-icon">
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <span className="skill-icon-name">HTML 5</span>
            </div>
            
            <div className="skill-icon-item">
              <div className="skill-icon">
                <FontAwesomeIcon icon={faCss3Alt} />
              </div>
              <span className="skill-icon-name">CSS 3</span>
            </div>
            
            <div className="skill-icon-item">
              <div className="skill-icon">
                <FontAwesomeIcon icon={faJs} />
              </div>
              <span className="skill-icon-name">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
