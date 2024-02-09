let saved = -1;
let input = document.getElementById('number_buttons');
let number;

function updateNumber() {
   number = parseInt(input.value, 10);
 }
 input.addEventListener('input', updateNumber);
     let nr;

function  FoundButton() { 
   nr = number;
   for(let i = 0; i < number; ++i) { 
         ++saved;
           document.getElementById('numberButton').innerHTML +=`
   <div id = '${saved}'>
       <br>
          <div class="card"
              style="text-align:center">
                <div class ="card-header"></div>
                <div class="card-body">
              <buton class = "btn btn-success" id ="contor" onclick ='Win_Lose(${saved})'></buton>  
            </div>    
         </div>
      </div>`
     ; 
   }
   number = 0;
}
function getRandomInt(nr) {
   return Math.floor(Math.random() * nr);
 }

let check = 0;
let first = 0;
let check_first = 0;
function  Win_Lose(elementId) { 
if (first == 0) {
    check_first = getRandomInt(nr);
     first = 1;
}
      if (elementId == check_first && check == 0) {    
    document.getElementById(elementId).innerHTML =`<br><div class="card"
   style="text-align:center">
        <div class ="card-header"></div>
           <div class="card-body">
         <buton class = "btn btn-success" id ="contor" >winner</buton>
      </div>    
   </div>`
; 
check = 1;
}
else {
   document.getElementById(elementId).innerHTML =`<br><div class="card"
   style="text-align:center">
       <div class ="card-header"></div>
          <div class="card-body">
        <buton class = "btn btn-success" id ="contor" >Loser</buton>
      </div>    
   </div>`
; 
}

}
