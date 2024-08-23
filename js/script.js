
const frm = document.querySelector('form');
const resp = document.querySelector('pre');

const lista = [];

frm.addEventListener('submit', (e) =>{
    e.preventDefault(); 

    const inNome = frm.inNome.value;
    lista.push(inNome);

    let list = ''

    lista.forEach((item,i) => list +=  ` ${i + 1}. ${item}\n `);

    resp.innerText = list

    frm.reset();
    frm.inNome.focus();
})

frm.btRemover.addEventListener('click', (e) =>{

    lista.shift();

    let list = ''

    lista.forEach((item,i) => list += `${i + 1}. ${item} \n ` );

    resp.innerText = list
})

frm.btPrioridade.addEventListener('click', (e) =>{

    const inNome = frm.inNome.value;
    if(inNome == ''){
        Swal.fire({
            title: "Olá :D",
            text: "Insira o nome do cliente",
            icon: "warning"
          });       
    }else{
        lista.unshift(inNome);

        let list = ''
    
        lista.forEach((item,i) => list += `${i + 1}. ${item} \n ` );
    
        resp.innerText = list
    
        frm.reset();
        frm.inNome.focus();
    }

})

frm.btCancelar.addEventListener('click', (e) =>{
    let num = Number(frm.inNome.value);
    let del = num - 1;

    if(num != Number(frm.inNome.value) || num == ''){
        Swal.fire({
            title: "Olá :D",
            text: "Informe o número do cliente",
            icon: "warning"
          });       }

    else{

        lista.splice(del,1);


        let list = ''
    
        lista.forEach((item,i) => list += `${i + 1}. ${item} \n ` );
    
        resp.innerText = list
    
        frm.reset();
        frm.inNome.focus();
    }
  
}
)



