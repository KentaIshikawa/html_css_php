$('.tab_contents').hide();
$('#tab01').show();

$('ul li a').on('click', (e) => {
    //全部消す
    $('.tab_contents').hide();

    //クリックされたaタグに該当するタブをフェードイン
    const target = $(e.currentTarget).attr('href');
    $(target).fadeIn();

    $('ul li a').removeClass('selected');

    $(e.currentTarget).addClass('selected');

    return false;
});