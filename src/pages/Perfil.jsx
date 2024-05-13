import { useForm } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import estilos from './Perfil.module.css'
 
const schemaPerfil = z.object({
    nome: z.string()
        .min(1, 'Informe um nome')
        .max(25,'Maximo 25 caracteres'),
    usuario: z.string()
        .min(5, 'Minimo de 5 caracteres')
        .max(10, 'Maximo de 10 carateres'),
    senha: z.string()
        .min(8, 'Informe 8 caracteres')
        .max(8,'maximo 8 caracteres')
       
    })
 
 
export default function Perfil(){
 
const{
    register,
    handleSubmit,
    formState:{errors}
}=useForm({
    resolver:zodResolver(schemaPerfil)
})
function obterDadosFormulario(data){
console.log(`Nome: ${data.nome}`)
console.log(`Usuário: ${data.usuario}`)
console.log(`Senha: ${data.senha}`)
 
 
}
 
return (
    
        
    
    <div className="page" style={{ backgroundColor: '#480ca8', color: '#fff' }}>
      <div className="formLogin">
        <h1>Perfil</h1>
        <form onSubmit={handleSubmit(obterDadosFormulario)}>
          <div className="inputContainer">
            <input {...register('nome')} className="campo" style={{ marginBottom: '10px' }} placeholder="Nome" />
            {errors.nome && <p className="mensagem">{errors.nome.message}</p>}
          </div>
          <div className="inputContainer">
            <input {...register('usuario')} className="campo" placeholder="Usuário" />
            {errors.usuario && <p className="mensagem">{errors.usuario.message}</p>}
          </div>
          <div className="inputContainer">
            <input {...register('senha')} className="campo" placeholder="Senha" />
            {errors.senha && <p className="mensagem">{errors.senha.message}</p>}
          </div>
          <button className="btn" type="submit">Confirmar</button>
        </form>
      </div>
    </div>
    
  );
 }