
export const cleanInputColor = (input) => {
        const reg=/^#([0-9a-f]{3}){1,2}$/i;
        if(input.length > 9) {
            return  (reg.test(input) && !isNaN(reg.test(input))) ? input.trim() : "#008060"
        }
        return input.trim()
}