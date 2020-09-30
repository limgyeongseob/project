function btn01_off(self){  //원래 있던 this를 self로 바꿔준다
  let val = document.querySelectorAll('.kan');
  if(self.value === 'off'){
    self.value = 'on';

    let kan01 = document.querySelectorAll('.kan');
      for(let i = 0; i < kan01.length; i++){
        kan01[i].style.color = 'white';
      }
  }
  else{
    self.value = 'off'

    let kan01 = document.querySelectorAll('.kan');
      for(let i = 0; i < kan01.length; i++){
        kan01[i].style.color = 'black';
      }
  }
}

function btn02_off(self){  
  let val = document.querySelectorAll('.bal');
  if(self.value === 'off'){
    self.value = 'on';

    let kan01 = document.querySelectorAll('.bal');
      for(let i = 0; i < kan01.length; i++){
        kan01[i].style.color = 'white';
      }
  }
  else{
    self.value = 'off'

    let kan01 = document.querySelectorAll('.bal');
      for(let i = 0; i < kan01.length; i++){
        kan01[i].style.color = 'black';
      }
  }
}

function btn03_off(self){ 
  let val = document.querySelectorAll('.tut');
  if(self.value === 'off'){
    self.value = 'on';

    let kan01 = document.querySelectorAll('.tut');
      for(let i = 0; i < kan01.length; i++){
        kan01[i].style.color = 'white';
      }
  }
  else{
    self.value = 'off'

    let kan01 = document.querySelectorAll('.tut');
      for(let i = 0; i < kan01.length; i++){
        kan01[i].style.color = 'black';
      }
  }
}

function btn04_off(self){  
  let val = document.querySelectorAll('.hal');
  if(self.value === 'off'){
    self.value = 'on';

    let kan01 = document.querySelectorAll('.hal');
      for(let i = 0; i < kan01.length; i++){
        kan01[i].style.color = 'white';
      }
  }
  else{
    self.value = 'off'

    let kan01 = document.querySelectorAll('.hal');
      for(let i = 0; i < kan01.length; i++){
        kan01[i].style.color = 'black';
      }
  }
}