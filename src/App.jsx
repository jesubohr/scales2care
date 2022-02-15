import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { nameTitles, nameScales } from './utils/scales';
import AppHeader from './components/AppHeader';

function getCurrentPath (pathname) {
   const paths = pathname
      .split('/')
      .filter(path => path !== '')
      .map(path => path.charAt(0)
         .toUpperCase()
         .concat(path.slice(1)));
   return (paths.length === 1) ? paths[0] : paths[paths.length - 1];
}

function App () {
   const { pathname } = useLocation();
   const currentPath = getCurrentPath(pathname);
   const navigate = useNavigate();
   const scaleId = Number(currentPath) - 1;

   useEffect(() => {
      if (currentPath === 'App') navigate('/app/categories');
      if (currentPath === 'Scale') navigate('/app/scales');
      if (scaleId <= -1 || scaleId >= 17) navigate('/app/scales');
   }, []);

   return (
      <>
         <AppHeader title={ nameScales[scaleId] || nameTitles[currentPath] } />
         <Outlet />
      </>
   );
}

export default App;
