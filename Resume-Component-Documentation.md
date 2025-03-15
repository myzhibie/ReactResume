# Resume 组件文档

![Resume Component](https://via.placeholder.com/800x400?text=Resume+Component)

## 概述

Resume组件是一个基于React的简历展示组件，根据Figma设计实现，采用了现代化的双栏布局设计。左侧为个人信息区域，使用渐变蓝紫色背景；右侧为专业经历和技能区域，使用白色背景。

## 功能特点

- 响应式设计，适配不同屏幕尺寸
- 模块化组件结构，易于维护和扩展
- 自定义SVG图标，减少外部依赖
- 完整的单元测试覆盖

## 组件结构

```
Resume/
├── 左侧栏 (个人信息)
│   ├── 个人资料
│   ├── 联系信息
│   ├── 行业知识
│   ├── 语言能力
│   ├── 社交媒体
│   └── 爱好
└── 右侧栏 (专业经历)
    ├── 工作经验
    ├── 教育背景
    ├── 技能 (设计软件)
    └── 其他技能 (编程语言)
```

## 技术栈

- React 19.0.0
- React Router DOM
- Font Awesome (图标库)
- 自定义SVG组件

## 安装与使用

### 安装依赖

```bash
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
```

### 组件引用

```jsx
import Resume from './pages/Resume';

// 在路由中使用
<Route path="/resume" element={<Resume />} />
```

## 组件详解

### 个人资料

个人资料部分包含头像、姓名和职位信息。头像使用自定义SVG组件实现。

```jsx
<div className="profile">
  <div className="profile-img">
    <ProfileImage />
  </div>
  <h1 className="profile-name">Justin</h1>
  <h2 className="profile-lastname">Folly</h2>
  <p className="profile-title">UI/UX Designer</p>
</div>
```

### 技能展示

技能部分使用点状指示器显示熟练程度，并使用自定义图标展示设计软件技能。

```jsx
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
```

### 设计软件图标

使用自定义SVG组件实现设计软件图标，确保视觉一致性。

```jsx
<div className="skill-icon-item">
  <div className="skill-icon">
    <FigmaIcon />
  </div>
  <span className="skill-icon-name">Figma</span>
</div>
```

## 测试

组件包含完整的单元测试，使用Jest和React Testing Library实现。

```jsx
// Resume.test.js
describe('Resume Component', () => {
  test('renders personal information section', () => {
    render(<Resume />);
    expect(screen.getByText('Justin')).toBeInTheDocument();
    expect(screen.getByText('Folly')).toBeInTheDocument();
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument();
  });
  
  // 更多测试...
});
```

## 测试结果

测试覆盖了组件的所有主要部分，包括：

- 个人信息部分
- 联系信息部分
- 行业知识部分
- 语言部分
- 社交媒体部分
- 爱好部分
- 经验部分
- 教育部分
- 技能部分

所有测试均通过，确保组件的稳定性和可靠性。

## 与Fetch MCP集成

Resume组件可以与Fetch MCP服务器集成，实现动态数据获取功能。

### Fetch MCP简介

Fetch MCP是一个提供Web内容获取功能的MCP服务器，支持多种格式的内容获取，包括HTML、JSON、纯文本和Markdown。

### 集成方案

可以使用Fetch MCP的工具获取简历数据，然后动态渲染到Resume组件中：

```jsx
// 使用fetch_json工具获取简历数据
const resumeData = await useMcpTool('fetch', 'fetch_json', {
  url: 'https://api.example.com/resume-data.json'
});

// 渲染Resume组件
<Resume data={resumeData} />
```

### 支持的数据格式

- **HTML**: 使用`fetch_html`工具获取HTML格式的简历数据
- **JSON**: 使用`fetch_json`工具获取JSON格式的简历数据
- **纯文本**: 使用`fetch_txt`工具获取纯文本格式的简历数据
- **Markdown**: 使用`fetch_markdown`工具获取Markdown格式的简历数据

## 未来计划

- 添加更多自定义主题
- 实现PDF导出功能
- 添加国际化支持
- 集成更多数据源

## 贡献

欢迎提交问题和拉取请求，共同改进Resume组件。

## 许可

本项目采用MIT许可证。
