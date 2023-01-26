// função bem simples 

export default function Primeiro(){
  const msg =  ' Seja bem vindo(a)' // exportando por padrão, ou pode ser como 'Comp'
  return(
    <div>
      <h2> Primeiro Componente</h2>  
      <p>{msg}</p>
    </div>
  ) 
}