'use strict';

//ドロワーメニューを開く関数
const drawerToggle = (e, menu) => {
  e.currentTarget.classList.toggle('is-open');
  document.getElementById(menu).classList.toggle('is-open');
  document.getElementsByTagName('body')[0].classList.toggle('is-open');
}

//ドロワーメニューを閉じる関数
const drawerClose = (menu) => {
  document.getElementById(menu).classList.remove('is-open');
  document.getElementsByTagName('body')[0].classList.remove('is-open');
}

// ハンバーガーアイコンにイベントリスナーを追加
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.getElementById('hamburger-icon');
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener('click', (e) => {
      drawerToggle(e, 'drawer-menu');
    });
  }
});