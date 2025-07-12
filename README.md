# Personal Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Computer Science student at Universitas Amikom Yogyakarta, built with Next.js and the Once UI design system.

## 👨‍💻 About Me

I'm **Fairul Muhammad**, a Computer Science student passionate about:
- **Front-End Development**: HTML5, CSS3, JavaScript, PHP with CodeIgniter 3
- **Back-End Development**: Database design with MySQL, API development
- **Python Programming**: Calculator systems, automation scripts, and problem-solving
- **DevOps**: Docker containerization, microservices, CI/CD pipelines, monitoring with Grafana, Prometheus, and Loki

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Theme**: Automatic theme switching based on user preference
- **Project Showcase**: Detailed case studies of my development projects
- **Technical Blog**: Articles about my learning journey and technical insights
- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework for production
- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Typed JavaScript for better development experience
- **SCSS Modules** - Styled components with CSS modules
- **Once UI** - Modern design system

### Development Tools
- **Git** - Version control
- **VS Code** - Development environment
- **npm** - Package management

## 📝 Projects Featured

### 1. Python Calculator System
- Object-oriented programming implementation
- Error handling and input validation
- Memory functions and calculation history
- **Technologies**: Python, OOP principles

### 2. Web Development with CodeIgniter 3
- Full-stack web applications using MVC architecture
- MySQL database integration
- User authentication and session management
- **Technologies**: PHP, CodeIgniter 3, MySQL, HTML5, CSS3, JavaScript

### 3. DevOps Infrastructure Project
- Microservices architecture with Docker
- CI/CD pipeline implementation
- Monitoring stack with Grafana, Prometheus, and Loki
- **Technologies**: Docker, Docker Compose, Grafana, Prometheus, Loki

## 🎓 Education

**Universitas Amikom Yogyakarta**  
Bachelor's Degree in Computer Science (Teknik Informatika)  
*2022 - Present*

## 📧 Contact

- **Email**: muhammadfairul13@gmail.com
- **GitHub**: [fairulmuhammad](https://github.com/fairulmuhammad)
- **LinkedIn**: [Muhammad Fairul](https://www.linkedin.com/in/muhammad-fairul-b5aa37312/)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fairulmuhammad/web-portfolio.git
cd web-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── blog/posts/          # Blog articles
│   │   ├── work/projects/       # Project case studies
│   │   └── resources/           # Content configuration
│   ├── components/              # Reusable React components
│   └── once-ui/                 # Design system components
├── public/
│   └── images/                  # Static images and assets
└── README.md
```

## 🔧 Customization

### Adding New Projects
1. Create a new `.mdx` file in `src/app/work/projects/`
2. Follow the existing project structure
3. Add project images to `public/images/projects/`

### Adding Blog Posts
1. Create a new `.mdx` file in `src/app/blog/posts/`
2. Include proper frontmatter (title, date, summary)
3. Write your content using Markdown

### Updating Personal Information
Edit `src/app/resources/content.js` to update:
- Personal details
- Social media links
- Skills and experience
- Project descriptions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Once UI** - For the beautiful design system
- **Universitas Amikom Yogyakarta** - For the educational foundation
- **Open Source Community** - For the tools and inspiration

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ by Fairul Muhammad*

## **SEO**
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

## **Design**
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

## **Content**
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

## **Localization**
- A localized version of Magic Portfolio is available with the next-intl library
- To use localization, switch to the 'i18n' branch

# **Authors**

Connect with us on Threads or LinkedIn.

Lorant Toth: [Threads](https://www.threads.net/@lorant.one), [LinkedIn](https://www.linkedin.com/in/tothlorant/)  
Zsofia Komaromi: [Threads](https://www.threads.net/@zsofia_kom), [LinkedIn](https://www.linkedin.com/in/zsofiakomaromi/)

Localization added by [François Hernandez](https://github.com/francoishernandez)

# **Get involved**

- Join the [Design Engineers Club on Discord](https://discord.com/invite/5EyAQ4eNdS) and share your portfolio with us!
- Report a [bug](https://github.com/once-ui-system/magic-portfolio/issues/new?labels=bug&template=bug_report.md).

# **License**

Distributed under the CC BY-NC 4.0 License.
- Commercial usage is not allowed.
- Attribution is required.
- You can extend the license to commercial use by purchasing a [Once UI Pro](https://once-ui.com/pricing) license.

See `LICENSE.txt` for more information.

# **Deploy with Vercel**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&project-name=portfolio&repository-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&demo-title=Magic%20Portfolio&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fmagic-portfolio%2Fmain%2Fpublic%2Fimages%2Fog%2Fhome.jpg)