let img = document.querySelectorAll(".img-items");
let cpuImage = document.querySelectorAll(".img-cpu-choosed")
for(let i = 0;i <= img.length - 1; i++){
    img[i].addEventListener("click",()=>{
        hiddenSelect(i);
        let randomCpu = Math.floor((Math.random()*10)/4);
        cpuImage[randomCpu].classList.remove('hidden');
        gameLogic(i,randomCpu);
    })
}

function hiddenSelect(i){
    for(let j = 0 ; j<= img.length - 1 ; j++ ){
        if(j !== i ){
            img[j].classList.add("hidden");
        }
    }
}

const refresh = ()=>{
    for(let i = 0;i <= img.length - 1; i++){
        img[i].classList.remove('hidden');
        cpuImage[i].classList.add('hidden');
    }
}

document.querySelector('button').addEventListener("click",refresh);
    


document.addEventListener("keydown",(e)=>{
    if(e.key == "r"){
    refresh();
    }
})

function gameLogic(user,cpu){
    const userpoint = document.querySelector("#user-point");
    const cpupoint = document.querySelector("#cpu-point");

  if(user !== cpu){
      if(user == 0 ){
          if(cpu == 1){
              userpoint.innerHTML = Number(userpoint.innerHTML) + 1
          }else{
            cpupoint.innerHTML = Number(cpupoint.innerHTML) + 1
          }
      }
      if(user == 1){
          if(cpu == 0){
            cpupoint.innerHTML = Number(cpupoint.innerHTML) + 1
          }else{
            userpoint.innerHTML = Number(userpoint.innerHTML) + 1
          }
      }
      if(user == 2){
          if(cpu == 0){
            userpoint.innerHTML = Number(userpoint.innerHTML) + 1
          }else{
            cpupoint.innerHTML = Number(cpupoint.innerHTML) + 1
          }
      }
  }
}


