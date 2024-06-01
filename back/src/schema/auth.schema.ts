import {z} from "zod";


const registerSchema = z.object({
  name: z.string({
    required_error: "Nombre es requerido"
  }),
  email: z.string({
    required_error: "Email es requerido"
  }).email({
    message: "Email invalido"
  }),
  birthdate: z.string().datetime(),
  nDni: z.string({
    required_error: "DNI es requerido"
  }).min(8,{
    message: "El DNI dene tener 8 caracteres"
  }).max(8,{
    message:"El DNI dene tener 8 caracteres"}),
  username: z.string({
    required_error: "Nombre de usuario es requerido"
  }).min(3,{
    message: "Debe tener 3 o mas caracteres"
  }).max(20,{
    message: "El nombre de usuario puede tener hasta un maximo de 20 caracteres"
  }),
  password: z.string({
    required_error: "La contraseña es requerida"
  }).min(6,{
    message:"La contraseña debe conterner 6 caracteres"
  }).refine(
    password => /[!@#$%^&*()_+{}:;"'<>,.?/~`-]/.test(password),{
      message: "La contraseña debe contener al menos un carácter especial"
    }
  ).refine(password => /\d/.test(password),{
    message: "La contraseña debe contener al menos un numero"
  })
})


const loginSchema = z.object({
  username: z.string().min(3,{
    message: "Must be 3 or more characters long"
  }),
  password: z.string().min(6,{
    message:"The password must be at least 6 characters"
  })
})



export {loginSchema,registerSchema}