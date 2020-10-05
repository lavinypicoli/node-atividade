(function readyJS(win, doc){
    if(doc.querySelectorAll('.excluir')){
        for(let i=0; i<doc.querySelectorAll('.excluir').length; i++){
            doc.querySelectorAll('.excluir')[i].addEventListener('click', function(event){
                if(confirm("Deseja mesmo apagar esta estação?")){
                    return true;
                }else{
                    event.preventDefault();
                }
            });
        }
    }
})(window, document);


(function readyJS(win, doc){
    if(doc.querySelectorAll('.excluirDados')){
        for(let i=0; i<doc.querySelectorAll('.excluirDados').length; i++){
            doc.querySelectorAll('.excluirDados')[i].addEventListener('click', function(event){
                if(confirm("Deseja mesmo apagar este dado?")){
                    return true;
                }else{
                    event.preventDefault();
                }
            });
        }
    }
})(window, document);