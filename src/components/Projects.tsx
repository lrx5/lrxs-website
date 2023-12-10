import { Link } from 'react-router-dom';
import ingen_T from '/assets/ingen_t.png';
import rx7_T from '/assets/rx7_t.png';
import cafeight_T from '/assets/cafeight_t.png';
import mw_T from '/assets/mw_t.jpg';
import startup_T from '/assets/startup_t.png';
import kt_T from '/assets/kingtiger_t.png';
import salad_T from '/assets/salad_t.jpg';
import caster_T from '/assets/casterwheel.png';
import memory_T from '/assets/memory_t.png';
import friendslist_T from '/assets/friendslistv_t.png';
import karzhyn_T from '/assets/karzhyn_t.png';
import '../Projects.css';

interface Project {
  id: number;
  file: string;
  title: string;
  description: string;
  img: string;
}

const Projects: React.FC = () => {
  // Dummy data for project cards
  const projects: Project[] = [
    { id: 11, file: 'karzhyn-website', title: 'Karzhyn Website', description: 'Bootstrap', img: karzhyn_T },
    { id: 10, file: 'friends-list-website', title: 'Friends List Website', description: 'Vanilla HTML', img: friendslist_T },
    { id: 9, file: 'create-with-clint-double-memory', title: 'Memory', description: 'Blender', img: memory_T },
    { id: 8, file: 'caster-wheel', title: 'Caster Wheel', description: 'Blender', img: caster_T },
    { id: 7, file: 'salad-kitchen', title: 'Salad Kitchen', description: 'Blender', img: salad_T },
    { id: 6, file: 'king-tiger', title: 'King Tiger', description: 'Blender', img: kt_T },
    { id: 5, file: 'start-up-themed-backgrounds', title: '"Start Up" Themed backgrounds', description: 'Blender', img: startup_T },
    { id: 4, file: 'mystery-word', title: 'Mystery Word: Five Letters', description: 'Unity', img: mw_T },
    { id: 3, file: 'cafeight', title: 'CafEight', description: 'Blender', img: cafeight_T },
    { id: 2, file: 'rx7-fd', title: 'RX-7 Model', description: 'Blender', img: rx7_T },
    { id: 1, file: 'ingen', title: 'Ingen', description: 'Blender', img: ingen_T },
    // Add more projects as needed
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <Link key={project.id} to={`/lrxs-website/${project.file}`}>
          <div className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div>
              <img src={project.img} />
            </div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
