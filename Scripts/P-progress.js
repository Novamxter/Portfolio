const percentage = [80,99,90,50]
const colors = ['red','cyan','pink','yellow']
const titles = ['HTML','CSS','JS','React']
const shadow = ['red','cyan','pink','yellow']
document.addEventListener('DOMContentLoaded',()=>{
  const blocks = document.querySelectorAll('.block');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        handleProgress(entry);
        observer.unobserve(entry.target);
      }
    });
  });
  blocks.forEach(block => observer.observe(block));
});
export function setProgress(){
  let html = ''
  for(let i = 0;i<percentage.length;i++){
    html+=`
    <div class="progress-container">
      <div class="p-info">
        <p>${titles[i]}</p>
        <p>${percentage[i]}%</p>
      </div>
      <div class="p-bar">
        <div class="p-bar-fill" style="--progress-width:${percentage[i]}%;"></div>
      </div>
    </div>
    `
  }
  document.querySelector('.progress').innerHTML = html
}

