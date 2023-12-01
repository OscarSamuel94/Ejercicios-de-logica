/* 

20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

*/

  const validarEmail = (email = "", patron = undefined)=>{
    if(!email || typeof email !== "string" || email === "") return console.warn(`No has intriducido ningun email`);
    if(!patron || !(patron instanceof RegExp)) return console.warn(`No has intriducido ningun patron`);
    
    let emailRegExp = patron.test(email);
    return (emailRegExp)? console.info(`Email valido.`): console.info(`Email NO valido.`)
  }

  let patron = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

  validarEmail("sam_ram@gmail.com", RegExp(patron,"i"));