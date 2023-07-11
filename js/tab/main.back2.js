$('.tab_contents').hide();
$('#tab01').show();

//ボタン1をクリックすると
$('.btn01').on('click', (e) => {
    //tab1以外を消す
    $('.tab_contents').hide();

    //tab1がフェードインする
    $('#tab01').fadeIn();

    //ボタン1以外のselectedをとる
    $('ul li a').removeClass('selected');

    //ボタン1にクラスselectedを付加する
    $(e.currentTarget).addClass('selected');

    //aタグの機能をオフにする
    return false;
});




//ボタン2をクリックすると
$('.btn02').on('click', (e) => {
    //tab2以外を消す
    $('.tab_contents').hide();

    //tab2がフェードインする
    $('#tab02').fadeIn();

    //ボタン2以外のselectedをとる
    $('ul li a').removeClass('selected');

    //ボタン２にクラスselectedを付加する
    $(e.currentTarget).addClass('selected');

    //aタグの機能をオフにする
    return false;
});

$('.btn03').on('click', (e) => {
    $('.tab_contents').hide();
    $('#tab03').fadeIn();
    $('ul li a').removeClass('selected');
    $(e.currentTarget).addClass('selected');
    return false;
});

$('.btn04').on('click', (e) => {
    $('.tab_contents').hide();
    $('#tab04').fadeIn();
    $('ul li a').removeClass('selected');
    $(e.currentTarget).addClass('selected');
    return false;
});