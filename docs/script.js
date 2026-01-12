// 简单交互：主题切换 + 示例按钮
(function(){
  const themeToggle = document.getElementById('theme-toggle');
  const demoAlert = document.getElementById('demo-alert');

  // 读取本地主题偏好
  const saved = localStorage.getItem('site-theme');
  if(saved) document.documentElement.setAttribute('data-theme', saved);

  themeToggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    if(next === 'dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('site-theme', next);
  });

  demoAlert.addEventListener('click', () => {
    alert('你好！这是一个简单的 GitHub Pages demo。');
  });
})();