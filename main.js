// function to convert number into word
 function NumInWords (number) {
    const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const mad = ['', 'thousand', 'million'];
    let word = '';

    if(isNaN(number)) return 'This is not a valid number';
    if ((number = number.toString()).length > 9) return 'overflow';
   for (let i = 0; i < mad.length; i++) {
      let tempNumber = number%(100*Math.pow(1000,i));
      if (Math.floor(tempNumber/Math.pow(1000,i)) !== 0) {
        if (Math.floor(tempNumber/Math.pow(1000,i)) < 20) {
          word = first[Math.floor(tempNumber/Math.pow(1000,i))] + mad[i] + ' ' + word;
        } else {
          word = tens[Math.floor(tempNumber/(10*Math.pow(1000,i)))] + ' ' + first[Math.floor(tempNumber/Math.pow(1000,i))%10] + mad[i] + ' ' + word;
        }
      }
  
      tempNumber = number%(Math.pow(1000,i+1));
      if (Math.floor(tempNumber/(100*Math.pow(1000,i))) !== 0) word = first[Math.floor(tempNumber/(100*Math.pow(1000,i)))] + 'hunderd and ' + word;
    } 
   
      return word;
  }

  // this function is to display the output
  function showText() {
    var inputValue = input_number.value;
    var hold =NumInWords(inputValue);
    output.innerHTML = hold;
}
    // input and output from DOM
    var input_number=document.getElementById("input_number");
    var output=document.getElementById('demo'); 
    input_number.addEventListener('input',showText);
   