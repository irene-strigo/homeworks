//форма

function check()
 {
    let text = document.getElementById ('name');
    document.getElementById('errorMessage') 
    .innerHTML= "";

 if(text.value == "")
    {
    document.getElementById('errorMessage') 
    .innerHTML+= "Напишите ваше имя<br>";}
    


    let number = document.getElementById ('phone');
 
 if(number.value == "")
 
    {
 document.getElementById('errorMessage') 
 .innerHTML+= "Напишите ваш телефон<br>";}

 let number1 = document.getElementById ('phonecopy');
 if(number1.value == "")
 {
 document.getElementById('errorMessage') 
 .innerHTML+= "Повторите ваш телефон<br>";}

 let numbercompare = document.getElementById ('phone, phonecopy');
 if(number1.value != number.value)
 {
 document.getElementById('errorMessage') 
 .innerHTML+= "Номера телефонов не совпадают<br>";}

 let text1 = document.getElementById ('textmessage');
   
 if(text1.value == "")
 {
    document.getElementById('errorMessage') 
    .innerHTML+= "Напишите сообщение<br>";}

 let checkbox = document.getElementById ('agreement');
 document.getElementById('errorMessage1') 
 .innerHTML= "";

 if(checkbox.checked == "")
 {
 document.getElementById('errorMessage1') 
 .innerHTML+= "Необходимо согласие на обработку данных<br>";}

 let welcome = document.getElementById ('welcome'); 
 document.getElementById('welcome') 
 .innerHTML= "";
 if((checkbox.checked != "")&&(text.value != "")&&(number.value != "")&&(text1.value != "")&&(number1.value == number.value))
  {
 document.getElementById('welcome').innerHTML = (document.getElementById('name').value) + ","+" ваша информация отправлена!";}
 }



 
//калькулятор

function myAlert1(text) {
    document.getElementById('result').value = `Результат ${text}`


}

function sum() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    myAlert1(Number(a) + Number(b));

}

function minus() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    myAlert1(Number(a) - Number(b));
   

}

function multip() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    myAlert1(Number(a) * Number(b));

}

function division() {
    const a = document.getElementById('first').value;
    const b = document.getElementById('second').value;
    myAlert1(Number(a) / Number(b));
    if (Number(b)=="") {
        document.getElementById('result').value = `на ноль делить нельзя`
};

}

function result (){ 
    switch (document.querySelector('input[name="count"]:checked').value)
    {case "sum": return sum ();
    case "minus": return minus ();
    case "multip": return multip ();
    case "division": return division ();
   }
}

   //цвет фона
   function show ()
   {
    switch (document.getElementById ("color").value)
    {case "gray": document.body.style.background =  'rgb(101, 98, 98)';
    break; 
    case "blue": document.body.style.background =  'rgb(111, 135, 222)'; 
    break; 
    case "bege": document.body.style.background =  'rgb(230, 229, 204)';
    break; 
    case "white": document.body.style.background =  'white';
    break; 

}
    
   }