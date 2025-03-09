import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-black to-teal-500 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hey there! I'm Adduri Deepthi</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">A passionate tech explorer who loves turning ideas into reality. From building smart applications to exploring AI, I enjoy creating innovative solutions. Let's connect and build something amazing together!</p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"> 
                Let's Connect!
              </a>
              <a href="/resume.pdf" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                <Download size={20} /> Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-white" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Programming Languages', skills: ['Python', 'C', 'Java'] },
              { title: 'Web Technologies & Styling', skills: ['HTML5', 'CSS3','Javascript'] },
              { title: 'IDE & Development Tools', skills: ['VS Code', 'PyCharm', 'Eclipse', 'Jupyter Notebook'] },
              { title: 'Version Control', skills: ['Git 2.43', 'GitHub'] },
              { title: 'Software & Productivity', skills: ['Microsoft Office Suite', 'SharePoint', 'PowerPoint'] },
              { title: 'Soft Skills', skills: ['Leadership', 'Critical Thinking', 'Attention to Detail', 'Teamwork', 'Effective Communication'] }
            ].map((category, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fake News Detection',
                description: 'Built a robust backend application that processes and analyzes news articles using advanced NLP techniques. The system extracts key textual features, applies machine learning models, and delivers real-time predictions through a Flask-powered API. This project highlights expertise in data preprocessing, backend logic development, and API integration, ensuring scalable and efficient misinformation detection.',
                image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
                tech: ['Python', 'HTML', 'CSS', 'Javascript']
              },
              {
                title: '2.5 Steps General',
                description: 'Designed an intelligent algorithm that efficiently explores all possible knight moves to determine feasible tour paths across the chessboard. Leveraged backtracking and heuristic techniques to optimize search depth and improve computational efficiency. This project showcases expertise in algorithm design, problem-solving, and strategic path optimization in Python.',
                image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=800&q=80',
                tech: ['Python', 'Backtracking', 'Heuristic Optimization', 'Pycharm']
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Drop a Message</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              <a href="mailto:deepthiadduri00@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                <Mail size={24} />
                <span>deepthiadduri00@gmail.com</span>
              </a>
              <a href="https://github.com/Adduri-Deepthi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/deepthi-adduri-661a28259/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Adduri Deepthi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
