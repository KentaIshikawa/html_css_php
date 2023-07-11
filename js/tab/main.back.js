$('#tab02').hide();
$('#tab03').hide();
$('#tab04').hide();

//ボタン1をクリックすると
$('.btn01').on('click', (e) => {
    //tab1以外を消す
    $('#tab02').hide();
    $('#tab03').hide();
    $('#tab04').hide();

    //tab1がフェードインする
    $('#tab01').fadeIn();

    //ボタン1以外のselectedをとる
    $('.btn02').removeClass('selected');
    $('.btn03').removeClass('selected');
    $('.btn04').removeClass('selected');

    //ボタン1にクラスselectedを付加する
    $(e.currentTarget).addClass('selected');

    //aタグの機能をオフにする
    return false;
});




//ボタン2をクリックすると
$('.btn02').on('click', (e) => {
    //tab2以外を消す
    $('#tab01').hide();
    $('#tab03').hide();
    $('#tab04').hide();

    //tab2がフェードインする
    $('#tab02').fadeIn();

    //ボタン2以外のselectedをとる
    $('.btn01').removeClass('selected');
    $('.btn03').removeClass('selected');
    $('.btn04').removeClass('selected');

    //ボタン２にクラスselectedを付加する
    $(e.currentTarget).addClass('selected');

    //aタグの機能をオフにする
    return false;
});

//ボタン3をクリックすると
$('.btn03').on('click', (e) => {
    //tab3以外を消す
    $('#tab01').hide();
    $('#tab02').hide();
    $('#tab04').hide();

    //tab3をフェードイン
    $('#tab03').fadeIn();

    //ボタン3以外のselectedをとる
    $('.btn01').removeClass('selected');
    $('.btn02').removeClass('selected');
    $('.btn04').removeClass('selected');

    //ボタン3(クリックされた自分)にselectedを付加
    $(e.currentTarget).addClass('selected');

    //aタグの機能をオフにする
    return false;
});


//ボタン4をクリックすると
$('.btn04').on('click', (e) => {
    //tab4以外を消す
    $('#tab01').hide();
    $('#tab02').hide();
    $('#tab03').hide();

    //tab4をフェードイン
    $('#tab04').fadeIn();

    //ボタン4以外のselectedをとる
    $('.btn01').removeClass('selected');
    $('.btn02').removeClass('selected');
    $('.btn03').removeClass('selected');

    //ボタン4(クリックされた自分)にselectedを付加
    $(e.currentTarget).addClass('selected');

    //aタグの機能をオフにする
    return false;
});