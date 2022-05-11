(function () {
    document.addEventListener('DOMContentLoaded',function(){
        document.addEventListener('click',clickStart);
        const halfelim = document.querySelector('.inner-bg-type');
        const triggershow = document.querySelector('.show-next');
        const line3 = document.querySelector('.highlight-line3');
        const line4 = document.querySelector('.highlight-line4');
        const line5 = document.querySelector('.highlight-line5');

        const NextBtn = document.querySelector('.btn-next-step');
        const guideText = document.querySelectorAll('.text-guide');
        const btnMulti = document.querySelector('.btn-multi-event');

        function clickStart(e){
            //const pointerSingle = document.querySelector('.pointer.single-elm');
            const wRap = document.querySelector('.tutorial__wrap');
            if(e.target.classList.contains('btn-multi-event')){
                e.preventDefault();
                e.target.parentElement.parentElement.parentElement.style.display = 'none';
                if(wRap.classList.contains('is-stand')){
                    wRap.classList.remove('is-stand');
                }
                wRap.classList.add('is-active');
            }
        }



        if(triggershow){
            triggershow.addEventListener('click',function(){
                halfelim.classList.add('is-show');
                line3.style.display = 'block';
                line4.style.display = 'block';
                line5.style.display = 'block';
            });
        }


        NextBtn.addEventListener('click',function(){
            NextBtn.style.display = 'none';
            btnMulti.style.display = 'block';
            guideText[0].style.display = 'none';
            guideText[1].style.display = 'block';
        });
    });

})()