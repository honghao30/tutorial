(function () {
    document.addEventListener('click',clickStart);
    function clickStart(e){        
        const pointerSingle = document.querySelector('.pointer.single-elm');
        if(e.target.classList.contains('btn-this-event')){
            console.log(e.target);
            e.preventDefault();
            pointerSingle.style.display = 'block';
            e.target.parentElement.parentElement.parentElement.style.display = 'none';
        }
        if(e.target.classList.contains('btn-multi-event')){
            e.preventDefault();
            e.target.parentElement.parentElement.parentElement.style.display = 'none';
            const wRap = document.querySelector('.tutorial__wrap');
            wRap.classList.add('is-active');
        }
    }
})()