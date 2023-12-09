import { useLocation } from 'react-router-dom';

const RootComponent = () => {
  const location = useLocation();
  const isAbout = location.pathname === '/about';

  return <div id="root" className={isAbout ? 'fullpage' : ''}></div>;
};

export default RootComponent;
