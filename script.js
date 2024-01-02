// JavaScript

console.log('Hello world!');

//画面が読み込まれたら animation を呼び出す
window.addEventListener('load', animation);

// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

//画面が読み込まれたら animation を呼び出す
window.addEventListener('load', animation);



const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');
const text = document.querySelector('#caption');

thumbs.forEach(function(item, index) {
  item.onclick = function() {
    // console.log(this.dataset.image);
    main.src = this.dataset.image;
  }
});

  //マウスオーバー
thumbs.forEach(function(item, index) {
    item.onmouseover = function() {
      main.src = this.dataset.image;
      text.textContent = this.title;
    }
  });

  $('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top;	//idの上部の距離を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });

  const map = L.map('map').setView([35.022407, 135.756855], 13);
  //拡大率は0〜18で設定
  
  // タイルレイヤーを作成し、地図にセットする
  
  // Open Street Map
  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  // }).addTo(map);
  
  // 国土地理院
  // L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  //   maxZoom: 18,
  //   attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
  // }).addTo(map);
  
  // Open Street Map hot
  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
  }).addTo(map);
  
  //アイコン
  // const whiteIcon = L.icon({
  //   iconUrl: 'ico.png',
  //   shadowUrl: 'ico_shadow.png',
  // 
  // iconSize:     [40, 40], // size of the icon
  // shadowSize:   [40, 40], // size of the shadow
  // iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  // shadowAnchor: [20, 40],  // the same for the shadow
  // popupAnchor:  [0, 42] // point from which the popup should open relative to the iconAnchor
  // });
  
  //複数アイコンをまとめて定義
  const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
    blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });
  
  L.marker([35.026917, 135.798397], { icon: whiteIcon }).addTo(map)
    .bindPopup('銀閣<br><img src="images/img01.png" alt="img">');
  // .openPopup();
  // openPopupの追加で最初から吹き出し表示
  
  L.marker([35.039453, 135.729706], { icon: pinkIcon }).addTo(map)
    .bindPopup('金閣<br><img src="images/kinkaku.png" alt="img">');
  
  L.marker([34.994531, 135.784476], { icon: blueIcon }).addTo(map)
    .bindPopup('清水寺<br><img src="images/kiyomizu.png" alt="img">');
  

  
  // クリック位置の緯度経度表示
  const popup = L.popup();
  
  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("ここは " + e.latlng.toString() + " です")
      .openOn(map);
  }
  
  map.on('click', onMapClick);
