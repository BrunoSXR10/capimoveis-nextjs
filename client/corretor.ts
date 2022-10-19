export default class TypeCorretor {
    nome: string
    creci: string
    email: string
    qtdImov: number

    constructor(nome: string, creci: string, email: string, qtdImov: number){
        this.nome = nome
        this.creci = creci
        this.email = email
        this.qtdImov = qtdImov
    }
    
    static vazio(){
        return new TypeCorretor ('', '', '', 0)
    }

    // get nome(){
    //     return this.nome
    // }

    // get cpf(){
    //     return this.cpf
    // }
    
    // get email(){
    //     return this.email
    // }

}
