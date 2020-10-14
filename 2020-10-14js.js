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
// 페이지하나로 만들기
function openVoca(evt, vocaName){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for(i = 0; i < tabcontent.length; i++){
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for(i = 0; i < tablinks.length; i++){
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(vocaName).style.display = "block";
  evt.currentTarget.className += " active"; //눌러진 버튼
}
document.getElementById("defaultOpen").click();