//Lista de compras
let itens = [{ nome: 'biscoito', preco: 101, quantidade: 3 }, { nome: 'refrigerante', preco: 75, quantidade: 2 }, { nome: 'salgadinho', preco: 150, quantidade: 5 }, { nome: 'chocolate', preco: 500, quantidade: 6 }];

//Lista de clientes
let clientes = ['raphael@gmail.com', 'donatelo@gmail.com', 'michelangelo@gmail.com', 'leonardo@gmail.com', 'splinter@gmail.com'];

function compras(itens, clientes) {
    let totalItem = 0;
    let somaValores = 0;
    let totalUnitario = 0;
    let resto = 0;

    if (!itens.length || !clientes.length) {
        console.log("Lista vazia!");
    } else {
        for (let i = 0; i < itens.length; i++) {
            totalItem = itens[i].preco * itens[i].quantidade;
            somaValores += totalItem;
        }
        totalUnitario = Math.floor(somaValores / clientes.length);
        resto = somaValores % clientes.length;

    }


    let mapa = {};
    for (let i = 0; i < clientes.length; i++) {
        if (resto > 0) {
            mapa[clientes[i]] = totalUnitario + 1;
            resto--;
        } else {
            mapa[clientes[i]] = totalUnitario;
        }

    }

    return mapa;
}


compras(itens, clientes);