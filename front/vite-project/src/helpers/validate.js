const validate = (input)=>{
   const errors = {};
   if(RegisterData.name.length < 6){
      validate.name= "El nombre debe tener al menos 6 caracteres";
   }
   return errors;
}

export default validate;