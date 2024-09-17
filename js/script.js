$(function () {
  //top-slider
  $('.slick-top').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    variableWidth: true,
    centerMode: true,
  });

  // マウスホイールでのスクロールを有効にする
  $('.slider-top').on('wheel', function(e) {
    e.preventDefault(); // デフォルトのスクロール動作を無効にする

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev'); // 上にスクロールすると前のスライドへ
    } else {
      $(this).slick('slickNext'); // 下にスクロールすると次のスライドへ
    }
  });

  // message-slider
  $('.product-slick').slick({
    dots: true,        // ドットを表示
    arrows: false,
    infinite: true,
    slidesToShow: 1,   // 表示するスライド数
    slidesToScroll: 1, // スクロールするスライド数
    responsive: [
      {
        breakpoint: 768, // 画面幅が768px以下の時の設定
        settings: {
          slidesToShow: 1, // 1枚表示
          slidesToScroll: 1, // 1枚ずつスクロール
          infinite: true,
          arrows: true,
          dots: true,
        }
      }
    ]
  });

  // benefit スライダー(上)
  $('.slider-up').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 7000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 3, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    // responsive: [
    //   {
    //     breakpoint: 750,
    //     settings: {
    //       slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
    //     }
    //   }
    // ]
  });

  // benefit スライダー(下)
  $('.slider-down').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 7000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 3, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    rtl: true,
    // responsive: [
    //   {
    //     breakpoint: 750,
    //     settings: {
    //       slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
    //     }
    //   }
    // ]
  });

  // introduction スライダー
  $('.slick-introduction').slick({
    dots: true,        // ドットを表示
    arrows: true,
    infinite: true,
    slidesToShow: 1,   // 表示するスライド数
    slidesToScroll: 1, // スクロールするスライド数
    prevArrow: '<img src="../images/arrow-left.png" class="slide-arrow prev-arrow" alt="前へ">',
    nextArrow: '<img src="../images/arrow-right.png" class="slide-arrow next-arrow" alt=""次へ>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        }
      }
    ]
  });
});
