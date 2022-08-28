window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip()
{
  
    var distance = document.querySelector("#billamt").value;
    var persons = document.querySelector("#peopleamt").value;
    if(distance === ''  || persons === '')
    {
        alert("Please Enter details");
        return;
    }
    let result;
    
    if (distance <= 10) {
      result = distance*5;
    } else if (distance <= 20) {
      result =   (distance-10)*2+50;
    } else {
      result= (distance-20)*1+70;
    }
     
    
    
    document.getElementById("total").innerHTML=result*persons;
}