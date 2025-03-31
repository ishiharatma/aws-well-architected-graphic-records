import { initializeCardRendering } from './render-cards.js';

document.addEventListener('DOMContentLoaded', () => {
    const files = [
        {
            name: "SEC05-BP01.html",
            title: { ja: "SEC05-BP01", en: "SEC05-BP01" },
            description: {
                ja: "ネットワークレイヤーを作成する",
                en: "Create a network layer"
            }
        },
        {
            name: "SEC05-BP02.html",
            title: { ja: "SEC05-BP02", en: "SEC05-BP02" },
            description: {
                ja: "ネットワークレイヤー内のトラフィックフローを制御する",
                en: "Control traffic flow within the network layer"
            }
        },
        {
            name: "SEC05-BP03.html",
            title: { ja: "SEC05-BP03", en: "SEC05-BP03" },
            description: {
                ja: "検査に基づく保護を実装する",
                en: "Implement protection based on inspection"
            }
        },
        {
            name: "SEC05-BP04.html",
            title: { ja: "SEC05-BP04", en: "SEC05-BP04" },
            description: {
                ja: "ネットワーク保護を自動化する",
                en: "Automate network protection"
            }
        },
        {
            name: "SEC06-BP01.html",
            title: { ja: "SEC06-BP01", en: "SEC06-BP01" },
            description: {
                ja: "脆弱性管理を実行する",
                en: "Perform vulnerability management"
            }
        },
        {
            name: "SEC06-BP02.html",
            title: { ja: "SEC06-BP02", en: "SEC06-BP02" },
            description: {
                ja: "強化されたイメージからコンピューティングをプロビジョニングする",
                en: "Provision computing from hardened images"
            }
        },
        {
            name: "SEC06-BP03.html",
            title: { ja: "SEC06-BP03", en: "SEC06-BP03" },
            description: {
                ja: "手動管理とインタラクティブアクセスを削減する",
                en: "Reduce manual management and interactive access"
            }
        },
        {
            name: "SEC06-BP04.html",
            title: { ja: "SEC06-BP04", en: "SEC06-BP04" },
            description: {
                ja: "ソフトウェアの整合性を検証する",
                en: "Verify software integrity"
            }
        },
        {
            name: "SEC06-BP05.html",
            title: { ja: "SEC06-BP05", en: "SEC06-BP05" },
            description: {
                ja: "コンピューティング保護を自動化する",
                en: "Automate computing protection"
            }
        },
        // 必要に応じて他のファイルを追加
    ];

    const basePath = './04-performance-efficiency';
    initializeCardRendering('card-container', 'language-toggle', files, basePath);
});