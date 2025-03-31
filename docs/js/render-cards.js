export function initializeCardRendering(cardContainerId, languageToggleId, files, basePath) {
    const cardContainer = document.getElementById(cardContainerId);
    const languageToggle = document.getElementById(languageToggleId);

    // 現在の言語（デフォルトは日本語）
    let currentLanguage = 'ja';

    // カードを生成する関数
    const renderCards = () => {
        cardContainer.innerHTML = ''; // 既存のカードをクリア
        files.forEach(file => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <h2>${file.title[currentLanguage]}</h2>
                <p>${file.description[currentLanguage]}</p>
                <a href="${basePath}/${file.name}" class="btn">
                    ${currentLanguage === 'ja' ? '詳細を見る' : 'View Details'}
                </a>
            `;

            cardContainer.appendChild(card);
        });
    };

    // 言語切替ボタンのイベントリスナー
    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
        languageToggle.textContent = currentLanguage === 'ja' ? 'English' : '日本語';
        renderCards();
    });

    // 初期表示
    renderCards();
}