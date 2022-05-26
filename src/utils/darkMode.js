export default function toogleLocalTheme () {
   document.documentElement.classList.toggle('dark');
   if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
      return '🌞';
   }
   else {
      localStorage.setItem('theme', 'dark');
      return '🌚';
   }
}
