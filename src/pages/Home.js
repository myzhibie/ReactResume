import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>欢迎来到我的个人网站</h1>
        <p>前端开发工程师 | React专家 | UI/UX爱好者</p>
        <div className="hero-buttons">
          <Link to="/resume" className="btn btn-primary">
            查看我的简历
          </Link>
        </div>
      </div>
      
      <div className="intro-section">
        <h2>关于我</h2>
        <p>
          你好！我是一名充满激情的前端开发工程师，专注于创建用户友好、高性能的web应用。
          我热爱学习新技术，并将它们应用到实际项目中。
        </p>
        <p>
          我擅长React、Vue等前端框架，并且对Node.js后端开发也有丰富经验。
          如果你对我的工作感兴趣，请查看我的简历或与我联系。
        </p>
      </div>
    </div>
  );
}

export default Home;