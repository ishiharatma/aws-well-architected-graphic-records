import { initializeCardRendering } from './render-cards.js';

document.addEventListener('DOMContentLoaded', () => {
    const files = [
        {
            name: "xxx.html",
            title: { ja: "xxx", en: "xxx" },
            description: {
                ja: "xxx",
                en: "xxx"
            }
        },
        // 必要に応じて他のファイルを追加
    ];

    const basePath = './06-incident-response';
    initializeCardRendering('card-container', 'language-toggle', files, basePath);
});