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


    window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};

    formbutton("create", {
        action: "https://formspree.io/f/xoqbvlpo",
        title: "¿Cómo puedo ayudarte?",
        fields: [
          { 
            type: "email", 
            label: "Email:", 
            name: "email",
            required: true,
            placeholder: "tucorreo@email.com"
          },
          {
            type: "textarea",
            label: "Mensaje:",
            name: "message",
            placeholder: "Escribe tu mensaje",
          },
          
          { type: "submit" }      
        ],
        styles: {
          title: {
            backgroundColor: "black"
          },
          button: {
            backgroundColor: "white",
            margin: "11px",
            bottom: "80px",
            width: "4rem",
            height: "4rem",
            background: "white",
            boxShadow: "0 2px 20px rgb(0 0 0 / 20%)"
          }
        }
      });