function isNumber(number){
    return /^\d$/.test(number);
  }
  
  function isSC(character){
    return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(character);
  }
  function Cipher(character){
    const text = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return character.replace(/[a-z]/gi, letter => text[text.indexOf(letter) + 13]);
    
  }
  function rot13(message){
    //your code here
    let encoded = ''
    for(let i=0; i<message.length; i++){
      if(isNumber(message[i]) == true || isSC(message[i]) == true){
        encoded += message[i];
      }
      else{
        encoded += Cipher(message[i]);
      }
    }
    return encoded
  }