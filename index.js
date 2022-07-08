    const d=document;
    d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a");
});

function hamburgerMenu(panelBtn,panel,menuLink){
    
    d.addEventListener("click",(e)=>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
    
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    });
    }

    const test = Array.from(d.getElementsByClassName('question-text'))
    test.forEach(item =>{
        item.addEventListener('click',(e) =>{
            e.target.parentElement.classList.toggle('my-active')
        })
    })

    