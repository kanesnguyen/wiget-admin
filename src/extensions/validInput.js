export const validInput = (input) => {
    //eslint-disable-next-line
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(input)){
        console.log(input);
        return input.replace(/.$/, '');
      } else {
        return input.charAt(0) === ' ' ? input.trim() : input;
      }
}