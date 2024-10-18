// スムーススクロールの機能を追加
document.addEventListener("DOMContentLoaded", (event) => {
  // ページ内リンクにイベントリスナーを設定
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // デフォルトの動作をキャンセル

      // スクロール先の要素を取得
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // スムーススクロールを実行
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
});
