import { initializeCardRendering } from './render-cards.js';

document.addEventListener('DOMContentLoaded', () => {
    const files = [
        {
            name: "SEC10-BP01.html",
            title: { ja: "SEC10-BP01", en: "SEC10-BP01" },
            description: {
                ja: "重要な人員と外部リソースを特定する",
                en: "Identify key personnel and external resources"
            }
        },
        {
            name: "SEC10-BP02.html",
            title: { ja: "SEC10-BP02", en: "SEC10-BP02" },
            description: {
                ja: "インシデント管理計画を作成する",
                en: "Develop incident management plans"
            }
        },
        {
            name: "SEC10-BP03.html",
            title: { ja: "SEC10-BP03", en: "SEC10-BP03" },
            description: {
                ja: "フォレンジック機能を備える",
                en: "Prepare forensic capabilities"
            }
        },
        {
            name: "SEC10-BP04-07.html",
            title: { ja: "SEC10-BP04,BP05,BP06,BP07", en: "SEC10-BP04,BP05,BP06,BP07" },
            description: {
                ja: "SEC10-BP04,BP05,BP06,BP07",
                en: "SEC10-BP04,BP05,BP06,BP07"
            }
        }
        // 必要に応じて他のファイルを追加
    ];

    const basePath = './06-incident-response';
    initializeCardRendering('card-container', 'language-toggle', files, basePath);
});