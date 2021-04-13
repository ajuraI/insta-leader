$(function(){
    const imgLikes = $('.imgLikes');
    let var1 = "32%";
    let var2 = "27.5%";
    const play = $('.play');
    const video = $('#video');
    const src = video.attr('src');
    const ytPicture = $('.ytVideo>img');
    const menuBtn = $('.socialBtn');
    const cross = $('.cross');
    const soc = $('.soc');
    const hideBlock = $('.hideBlock');
    const telegram = $('.tg');
    const whatsup = $('.wts');
    const viber = $('.vbr');
    const vk = $('.vk');
    const phone = $('.ph');
    const iconsClass = $('.socialBtn>.box>.icons');
    let IsPageActive = true;
    const flash = $('.flash');
    let count = 0;
    window.onblur = function(){IsPageActive = false;}
    window.onfocus = function(){IsPageActive = true;}
    imgLikes.animate({top: var2 }, 1000, 'linear');

    menuBtn.click(function() {
        if (hideBlock.hasClass('btn-social')) {
            hideBlock.removeClass('btn-social');
            hideBlock.addClass('btn-cross');
            soc.css({height: '0',width: '0'});
            cross.css({height: '16px',width: '16px'});
            telegram.css({top: '-80%'});
            whatsup.css({top: '-200%'});
            viber.css({top: '-320%'});
            vk.css({top: '-440%'});
            phone.css({top: '-560%'});
            iconsClass.css({'box-shadow': '0 0 20px 0 rgba(0,0,0,.3)'});
        }
        else {
            hideBlock.removeClass('btn-cross');
            hideBlock.addClass('btn-social');
            cross.css({height: '0',width: '0'});
            soc.css({height: '32px', width: '35px'});
            telegram.css({top: '50%'});
            whatsup.css({top: '50%'});
            viber.css({top: '50%'});
            vk.css({top: '50%'});
            phone.css({top: '50%'});
            iconsClass.css({'box-shadow': 'none'});
        }
    });

    setInterval(() => {
        if (count === 0)  {
            imgLikes.animate({top: var1 }, 1000, 'linear');
            count++;
        }
        else {
            imgLikes.animate({top: var2 }, 1000, 'linear');
            count--;
        }
    }, 1010);

    setInterval(() => { 
            if (IsPageActive == true){
            flash.animate({left: '120%' }, 800, 'linear');
            flash.animate({left: '-85px' }, 0);
        }
    }, 3000);

    play.click(function() {
        play.removeClass('d-flex');
        play.hide();
        ytPicture.hide();
        video.attr('src', src + '?autoplay=1')
    });
})



