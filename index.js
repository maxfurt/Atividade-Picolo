class Pessoa{
    setNome(nome){
      this.nome = nome
    }
    setEndereço(endereço){
      this.endereço = endereço
    }
    setTelefone(telefone){
      this.telefone = telefone
    }
      getNome(){
        return this.nome
      }
      getEndereço(){
        return this.endereço
      }
      getTelefone(){
        return this.telefone
      }
}
class Fornecedor extends Pessoa {
  constructor(valorcredito, valordivida){
    super();
    this.valorcredito = valorcredito
    this.valordivida = valordivida
  }

  obterSaldo(){
      return this.valorcredito - this.divida  
    }  
     retornar(){
       if(this.valorcredito= 0){
         return this.valorcredito
       }
       else{
         throw new Pessoa("O valor atribuido não pode ser menor que zero")
       }
    }
  obter(){
    try{
      return this.valorcredito
    }
    catch(error){
      return erro.valorcredito()
    }
  }
}

let fornecer = new Fornecedor(-100, 1000)
console.log(fornecer.obter());

  
  