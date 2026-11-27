    const erros = [];

    const {nome, cargaHoraria, nivel, status, preco} = atualizarCurso;

    if(nome.trim().length <=3 || nome.trim().length >= 80){
        erros.push("O nome do curso deve ser uma string entre 3 e 80 caracteres.")
    }

    if(cargaHoraria <= 20 || cargaHoraria >= 400){
        erros.push("A carga horária deve ser um número positivo entre 20 e 400.")
    }

    if(!["BASICO", "INTERMEDIARIO", "AVANCADO"].includes(nivel)){
        erros.push("O nível do curso deve ser 'BASICO', 'INTERMEDIARIO' ou 'AVANCADO'.")
    }

    if(typeof preco !== 'number' || preco <=0 || preco === Infinity || Number.isNaN(preco)){
        erros.push("O preço deve ser numérico e maior que 0.")
    }
    if(typeof status !== 'boolean'){
        return res.status(400).json({error: "O campo 'ativo deve ser true ou false"});
    }

    if (erros.length > 0){
        return res.status(400).json({ erros });
    }