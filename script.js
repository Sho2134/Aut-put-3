'use strict';

{
    const click = false;
    const text = document.getElementById('text');
    const btn = document.getElementById('btn');
    const div = document.getElementById('div');



        btn.classList.add('click');
    
    btn.addEventListener('click', () => {
        const textSend = text.value;
        if(textSend === '1') {
            div.textContent = '正解';
        } else {
            div.textContent = 'ハズレ'
        }


    })
}