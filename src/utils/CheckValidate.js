export const CheckValidate=(email,password)=>{
    const validemail= /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validpassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)
if(!validemail){
    return "Email is not valid"
}
if(!validpassword){
    return "Password is not valid"
}
return null;

}