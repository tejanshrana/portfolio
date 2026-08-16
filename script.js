const root = document.documentElement;
const themeSwitch = document.getElementById('theme-switch');
function setTheme(theme) {
  root.dataset.theme = theme;
  const isLight = theme === 'light';
  themeSwitch.textContent = isLight ? '◐' : '☼';
  themeSwitch.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
}
setTheme(localStorage.getItem('theme') || 'dark');
themeSwitch.addEventListener('click', () => {
  const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  setTheme(theme);
});
