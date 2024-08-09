let urrency=document.querySelectorAll('#Currency');
let textcurr=document.querySelector('#textcurr');
let textcurrency=document.querySelector('#textcurrency');
const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    let enties=Object.entries(data);
   console.log(enties);
   for(let i=0; i<enties.length; i++){
   urrency[0].innerHTML +=`<option value="${enties[i][0]}">${enties[i][0]}</option>`;
   urrency[1].innerHTML +=`<option value="${enties[i][0]}">${enties[i][0]}</option>`;
   }
  });
    function datachange(){
      let varchange=textcurr.value;
      if(urrency[0].value !=urrency[1].value){
        console.log('right')
        const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${varchange}&from=${urrency[0].value}&to=${urrency[1].value}`)
  .then((val) => val.json())
  .then((val) => {
    textcurrency.value=Object.values(val.rates)[0];
  });
      }else
      console.log('choose different')
    }