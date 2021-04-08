(function (window, document){
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    function toggleElements(){
        //빈배열로 유사배열만들어줌
        [].forEach.call($toggles, function (toggle){
            toggle.classList.toggle('on');
        });
    }
})(window, document)