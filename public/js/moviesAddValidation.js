window.addEventListener('load', function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
 
    const $ = (e) => document.querySelector(e);
    const err = $('#err');

    const funcValidate = (obj) => {
        let arr = Object.values(obj);
        console.log(arr);
        if (!arr.includes(false)) {
            btn.disabled = false;
            btn.style.backgroundColor = "#198754"
        }else {
            btn.disabled = true;
            btn.style.backgroundColor = "gray"
        }
    }
    

    const inputTitulo = $('#title');
    const rating = $('#rating');
    const awards = $('#awards');
    const release_date = $('#release_date');
    const length = $('#length');
    const genre = $('#genre_id');
    
    const btn = $('#btn-Agregar');
    
    
    inputTitulo.focus()

    let errores = 0
    inputTitulo.addEventListener('blur', function(){
        switch (true) {
            case !this.value:
                this.classList.add('is-invalid')
                validate.inputTitulo = false
                err.classList.add('alert-warning')
                
                if (errores == 0) {
                    err.innerHTML += "<li id='tituloErr'>Este campo es obligatorio</li>"
                    errores++
                }else{
                    errores = 1
                }
                break;
        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                
                validate.inputTitulo = true
                if (errores == 1) {
                    errores = 0
                    $('#tituloErr').remove()
                }
                break;
        }
        funcValidate(validate);
    })
    let errores2 = 0
    rating.addEventListener('blur', function(){
        switch (true) {
            case !this.value:
                this.classList.add('is-invalid')
                validate.rating = false
                err.classList.add('alert-warning')
                
                if (errores2 == 0) {
                    err.innerHTML += "<li id='ratingErr'>Dede ingresar el rating</li>"
                    errores2++
                }else{
                    errores2 = 1
                }
                console.log(errores2)
                break;
            case (+this.value < 0 || +this.value > 10):
                this.classList.add('is-invalid')
                validate.rating = false
                err.classList.add('alert-warning')
                
                if (errores2 == 0) {
                    err.innerHTML += "<li id='ratingErr'>Debe ingresar un rating entre 0 y 10</li>"
                    errores2++
                }else if (errores2 == 1) {
                    $('#ratingErr').innerHTML = 'Debe ingresar un rating entre 0 y 10'
                }else{
                    errores2 = 1
                }

                break;
        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                
                validate.rating = true
                if (errores2 == 1) {
                    $('#ratingErr').remove()
                    errores2 = 0
                }
                break;
        }
        funcValidate(validate);
    })
    let errores3 = 0
    awards.addEventListener('blur', function(){
        switch (true) {
            case !this.value:
                this.classList.add('is-invalid')
                validate.awards = false
                err.classList.add('alert-warning')
                
                if (errores3 == 0) {
                    err.innerHTML += "<li id='awardsErr'>Dede ingresar la cantida de premios</li>"
                    errores3++
                }else{
                    errores3 = 1
                }
                break;
            case (+this.value < 0 || +this.value > 10):
                this.classList.add('is-invalid')
                validate.awards = false
                err.classList.add('alert-warning')
                
                if (errores3 == 0) {
                    err.innerHTML += "<li id='awardsErr'>Debe ingresar el valor entre 0 y 10</li>"
                    errores3++
                }else if (errores3 == 1) {
                    $('#awardsErr').innerHTML = 'Debe ingresar el valor entre 0 y 10'
                }else{
                    errores3 = 1
                }
                break;
        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                
                validate.awards = true
                if (errores3 == 1) {
                    $('#awardsErr').remove()
                    errores3 = 0
                }
                break;
        }
        funcValidate(validate);
    })
    let errores4 = 0
    release_date.addEventListener('blur', function(){
        switch (true) {
            case !this.value:
                this.classList.add('is-invalid')
                validate.release_date = false
                err.classList.add('alert-warning')
                
                if (errores4 == 0) {
                    err.innerHTML += "<li id='dateErr'>Dede ingresar la fecha de estreno</li>"
                    errores4++
                }else{
                    errores4 = 1
                }
                break;

            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                
                validate.release_date = true
                if (errores4 == 1) {
                    $('#dateErr').remove()
                    errores4 = 0  
                }
                break;
        }
        funcValidate(validate);
    })
    let errores5 = 0
    length.addEventListener('blur', function(){
        switch (true) {
            case !this.value:
                this.classList.add('is-invalid')
                validate.length = false
                err.classList.add('alert-warning')
                
                if (errores5 == 0) {
                    err.innerHTML += "<li id='lengthErr'>Dede ingresar la duracion</li>"
                    errores5++
                }else{
                    errores5 = 1
                }
                break;
            case (+this.value < 60 || +this.value > 360):
                this.classList.add('is-invalid')
                validate.length = false
                err.classList.add('alert-warning')
                
                if (errores5 == 0) {
                    err.innerHTML += "<li id='lengthErr'>Debe ingresar el valor entre 60 y 360</li>"
                    errores5++
                }else if (errores5 == 1) {
                    $('#lengthErr').innerHTML = 'Debe ingresar el valor entre 60 y 360'
                }else{
                    errores5 = 1
                }
                break;
            
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                
                validate.length = true
                if (errores5 == 1) { 
                    $('#lengthErr').remove()
                    errores5 = 0
                }
                break;
        }
        funcValidate(validate);
    })
    let errores6 = 0
    genre.addEventListener('blur', function(){
        switch (true) {
            case !this.value:
                this.classList.add('is-invalid')
                validate.genre = false
                err.classList.add('alert-warning')
                
                if (errores6 == 0) {
                    err.innerHTML += "<li id='genreErr'>Dede seleccionar el genero</li>"
                    errores6++
                }else{
                    errores6 = 1
                }
                break;
        
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                validate.genre = true
                if (errores6 == 1) { 
                    $('#genreErr').remove()
                    errores6 = 0
                }
                break;
        }
        funcValidate(validate);
    })

    btn.addEventListener('click', () => {
        window.alert('La película se guardó satisfactoriamente')
    })

    const validate = {
        inputTitulo: false,
        rating: false,
        awards: false,
        release_date: false,
        length: false,
        genre: false,
    }
 
    funcValidate(validate);
    
})