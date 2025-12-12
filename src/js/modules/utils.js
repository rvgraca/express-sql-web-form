export function nameValidation(name) {
    //length > 2
    let length = name.length <= 2 ? false : true;
    
    //no spaces
    let noSpace = !name.includes(" ");
    
    //not numnbers 
    let noNumbers = !/[0-9]/.test(name);
    
    //not special char
    let noSpecial = !/[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~]/.test(name);
    
    
    let output = noSpecial && noNumbers && noSpace && length; 

    return output;
 }

export function emailValidation(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function phoneValidation(phone) {
  // allows +54 11 1234-5678, (011) 4567-8901, 1123456789, etc.
  const regex = /^[+\d\s()-]{7,20}$/;

  // Also we check for enough real numbers
  const onlyNumbers = phone.replace(/\D/g, "");
  const quantity = onlyNumbers.length;

  return regex.test(phone) && quantity >= 7 && quantity <= 15;
}



export function subjectValidation (subject) {
  //no empty strings
  if (!subject || !subject.trim()) return false;

  // Between 3 and 100 visible char
  const limpio = subject.trim();
  return limpio.length >= 3 && limpio.length <= 100;
}


export function messageValidation(message) {
  if (!message || !message.trim()) return false;

  const clean = message.trim();
  return clean.length >= 10 && clean.length <= 1000;
}
