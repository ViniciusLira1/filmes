import { useForm } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import estilos from './Perfil.module.css'
 
const schemaPerfil = z.object({
    email: z.string()
    .email(),
    senha: z.string()
        .min(8, 'Informe 8 caracteres')
        .max(8,'maximo 8 caracteres')
       
    })
 
 
export default function Login(){
 
const{
    register,
    handleSubmit,
    formState:{errors}
}=useForm({
    resolver:zodResolver(schemaPerfil)
})
function obterDadosFormulario(data){
console.log(`Email: ${data.email}`)
console.log(`Senha: ${data.senha}`)
}
 
return(
    <div className={estilos.conteiner}>
        <p>Login</p>
        <form className={estilos.formulario} onSubmit ={handleSubmit(obterDadosFormulario)}> 
            <input  {...register('email')} className={estilos.campo} placeholder="Email"/>
            {errors.email &&(
                <p className={estilos.mensagem}>{errors.email.message}</p>
            )}
            <input {...register('senha')} className={estilos.campo} placeholder="Senha"/>
            {errors.senha &&(
                <p className={estilos.mensagem}>{errors.senha.message}</p>
            )}
            <button className={estilos.botao}>Confirmar</button>
 
        </form>
 
    </div>
)
 
 
}
