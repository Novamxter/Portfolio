const percentage = [80,99,90,50]
const titles = ['HTML','CSS','JS','React']
const toolList = ['VS code','Git','Github','AcodeX']

export function setSkillProgress(){
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
export function setToolProgress(){
  let html ='';
  for(let i = 0;i<toolList.length;i++){
    html+=`
    <div class="tool-progress">
      <div class="p-info">
        <p>${toolList[i]}</p>
      </div>
      <div class="p-bar tool-bar"></div>
    </div>`
  }
  document.querySelector('.tools').innerHTML = html
}
