'use strict';

{
    const opens = document.getElementsByClassName('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    for (let open of opens) {
        open.addEventListener('click', () => {
            modal.classList.remove('hidden');
            mask.classList.remove('hidden');
        });
    }    
    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });
    mask.addEventListener('click', () => {
        close.click();
    });
}

$(function(){
    function toggleChangeBtn() {
        var slideIndex = $('.slide').index($('.active'));
        $('.change-btn').show();
        if (slideIndex == 0) {
            $('.prev-btn').hide();
        } else if (slideIndex == $('.slide').length-1) {
            $('.next-btn').hide();
        }
    }
    
    $('.index-btn').click(function() {
        $('.active').removeClass('active');
        var clickedIndex = $('.index-btn').index($(this));
        $('.slide').eq(clickedIndex).addClass('active');
        toggleChangeBtn();
    });
    
    $('.change-btn').click(function() {
        var $displaySlide = $('.active');
        $displaySlide.removeClass('active');
        if ($(this).hasClass('next-btn')) {
            $displaySlide.next().addClass('active');
        } else {
            $displaySlide.prev().addClass('active');
        }
        toggleChangeBtn();
    });



});
