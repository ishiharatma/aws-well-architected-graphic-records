import { initializeCardRendering } from './render-cards.js';

document.addEventListener('DOMContentLoaded', () => {
    const files = [
        {
            name: "SEC04-BP01.html",
            title: { ja: "SEC04-BP01", en: "SEC04-BP01" },
            description: {
                ja: "サービスとアプリケーションのログ記録を設定する",
                en: "Configure logging for services and applications"
            }
        },
        {
            name: "SEC04-BP02.html",
            title: { ja: "SEC04-BP02", en: "SEC04-BP02" },
            description: {
                ja: "標準化した場所にログ、検出結果、メトリクスを取り込む",
                en: "Ingest logs, findings, and metrics into a standardized location"
            }
        },
        {
            name: "SEC04-BP03.html",
            title: { ja: "SEC04-BP03", en: "SEC04-BP03" },
            description: {
                ja: "セキュリティアラートを相関付けて充実させる",
                en: "Correlate and enrich security alerts"
            }
        },
        {
            name: "SEC04-BP04.html",
            title: { ja: "SEC04-BP04", en: "SEC04-BP04" },
            description: {
                ja: "非準拠リソースの修復を開始する",
                en: "Initiate remediation of non-compliant resources"
            }
        },
        // 必要に応じて他のファイルを追加
    ];

    const basePath = './03-detection';
    initializeCardRendering('card-container', 'language-toggle', files, basePath);
});