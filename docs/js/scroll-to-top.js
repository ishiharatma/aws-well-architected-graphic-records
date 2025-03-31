document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    // スクロールイベントでボタンの表示/非表示を切り替え
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // スクロール位置が300pxを超えたら表示
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    // ボタンクリックでトップにスクロール
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // スムーズにスクロール
        });
    });
});