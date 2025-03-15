import React from 'react';
import { render, screen } from '@testing-library/react';
import Resume from './Resume';

// 模拟FontAwesomeIcon组件
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div data-testid="mock-icon" />
}));

// 模拟自定义图标组件
jest.mock('../images/profile', () => () => <div data-testid="mock-profile-image" />);
jest.mock('../images/SkillIcons', () => ({
  FigmaIcon: () => <div data-testid="mock-figma-icon" />,
  PhotoshopIcon: () => <div data-testid="mock-photoshop-icon" />,
  IllustratorIcon: () => <div data-testid="mock-illustrator-icon" />,
  XdIcon: () => <div data-testid="mock-xd-icon" />,
  IndesignIcon: () => <div data-testid="mock-indesign-icon" />
}));

describe('Resume Component', () => {
  test('renders personal information section', () => {
    render(<Resume />);
    
    // 检查个人信息是否渲染
    expect(screen.getByText('Justin')).toBeInTheDocument();
    expect(screen.getByText('Folly')).toBeInTheDocument();
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument();
  });

  test('renders contact information section', () => {
    render(<Resume />);
    
    // 检查联系信息是否渲染
    expect(screen.getByText('justinfolly123@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (123) 456-7890')).toBeInTheDocument();
    expect(screen.getByText('www.yoursitename.com')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
  });

  test('renders industry knowledge section', () => {
    render(<Resume />);
    
    // 检查行业知识部分是否渲染
    expect(screen.getByText('Industry Knowledge')).toBeInTheDocument();
    expect(screen.getByText('User Interface')).toBeInTheDocument();
    expect(screen.getByText('User Experience')).toBeInTheDocument();
    expect(screen.getByText('Product Design')).toBeInTheDocument();
    expect(screen.getByText('Interaction Design')).toBeInTheDocument();
    expect(screen.getByText('Design Research')).toBeInTheDocument();
    expect(screen.getByText('Web Design')).toBeInTheDocument();
  });

  test('renders languages section', () => {
    render(<Resume />);
    
    // 检查语言部分是否渲染
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Hindi')).toBeInTheDocument();
    expect(screen.getByText('French')).toBeInTheDocument();
  });

  test('renders social section', () => {
    render(<Resume />);
    
    // 检查社交媒体部分是否渲染
    expect(screen.getByText('Social')).toBeInTheDocument();
    expect(screen.getByText('Yoursitename.com')).toBeInTheDocument();
    expect(screen.getByText('linkedin.com/in/YourName')).toBeInTheDocument();
    expect(screen.getByText('dribbble.com/YourName')).toBeInTheDocument();
    expect(screen.getByText('behance.com/YourName')).toBeInTheDocument();
  });

  test('renders hobbies section', () => {
    render(<Resume />);
    
    // 检查爱好部分是否渲染
    expect(screen.getByText('Hobbies')).toBeInTheDocument();
    expect(screen.getByText('Reading')).toBeInTheDocument();
    expect(screen.getByText('Singing')).toBeInTheDocument();
    expect(screen.getByText('Football')).toBeInTheDocument();
    expect(screen.getByText('Dance')).toBeInTheDocument();
  });

  test('renders experience section', () => {
    render(<Resume />);
    
    // 检查经验部分是否渲染
    expect(screen.getByText('EXPERIENCE')).toBeInTheDocument();
    expect(screen.getByText('Blue Moon Consultency Studio')).toBeInTheDocument();
    expect(screen.getByText('Senior UI Designer')).toBeInTheDocument();
    expect(screen.getByText('Aug 2020 - Present - 1 year, New York')).toBeInTheDocument();
    expect(screen.getByText('Black Yark Product Design')).toBeInTheDocument();
    expect(screen.getByText('Senior UX Designer')).toBeInTheDocument();
    expect(screen.getByText('Aug 2015 - Aug 2020 - 5 years, New York')).toBeInTheDocument();
  });

  test('renders education section', () => {
    render(<Resume />);
    
    // 检查教育部分是否渲染
    expect(screen.getByText('EDUCATION')).toBeInTheDocument();
    expect(screen.getByText('Bachelor of Engineering in Information Technology')).toBeInTheDocument();
    expect(screen.getByText('SCAT Education Campus')).toBeInTheDocument();
    expect(screen.getByText('2011-2015, New York')).toBeInTheDocument();
    expect(screen.getByText('NJIT Higher')).toBeInTheDocument();
    expect(screen.getByText('AB Experiment Campus')).toBeInTheDocument();
    expect(screen.getByText('2009-2011, New York')).toBeInTheDocument();
  });

  test('renders skills section', () => {
    render(<Resume />);
    
    // 检查技能部分是否渲染
    expect(screen.getByText('MY SKILLS')).toBeInTheDocument();
    expect(screen.getByText('Figma')).toBeInTheDocument();
    expect(screen.getAllByText(/Adobe/i).length).toBeGreaterThan(0);
    expect(screen.getByText('OTHER SKILLS')).toBeInTheDocument();
    expect(screen.getByText('HTML 5')).toBeInTheDocument();
    expect(screen.getByText('CSS 3')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });
});
