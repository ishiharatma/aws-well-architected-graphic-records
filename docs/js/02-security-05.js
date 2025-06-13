import { initializeCardRendering } from './render-cards.js';

document.addEventListener('DOMContentLoaded', () => {
    const files = [
        // データ保護
        {
            name: "SEC07-BP01.html",
            title: { ja: "SEC07-BP01", en: "SEC07-BP01" },
            description: {
                ja: "データ分類スキームを理解する",
                en: "Understand your data classification scheme"
            }
        },
        {
            name: "SEC07-BP02.html",
            title: { ja: "SEC07-BP02", en: "SEC07-BP02" },
            description: {
                ja: "データの機密性に基づいてデータ保護統制を適用する",
                en: "Apply data protection controls based on data sensitivity"
            }
        },
        {
            name: "SEC07-BP03.html",
            title: { ja: "SEC07-BP03", en: "SEC07-BP03" },
            description: {
                ja: "識別および分類を自動化する",
                en: "Automate identification and classification"
            }
        },
        {
            name: "SEC07-BP04.html",
            title: { ja: "SEC07-BP04", en: "SEC07-BP04" },
            description: {
                ja: "スケーラブルなデータのライフサイクル管理を定義する",
                en: "Define scalable data lifecycle management"
            }
         },
        // 保管中のデータの保護
        {
            name: "SEC08-BP01.html",
            title: { ja: "SEC08-BP01", en: "SEC08-BP01" },
            description: {
                ja: "安全なキー管理を実装する",
                en: "Implement secure key management"
            }
        },
        {
            name: "SEC08-BP02.html",
            title: { ja: "SEC08-BP02", en: "SEC08-BP02" },
            description: {
                ja: "保管中に暗号化を適用する",
                en: "Enforce encryption at rest"
            }
        },
        {
            name: "SEC08-BP03.html",
            title: { ja: "SEC08-BP03", en: "SEC08-BP03" },
            description: {
                ja: "保管中のデータの保護を自動化する",
                en: "Automate data at rest protection"
            }
        },
        {
            name: "SEC08-BP04.html",
            title: { ja: "SEC08-BP04", en: "SEC08-BBP04P01" },
            description: {
                ja: "アクセスコントロールを適用する",
                en: "Enforce access control"
            }
        },
        // 転送中のデータ保護
        {
            name: "SEC09-BP01.html",
            title: { ja: "SEC09-BP01", en: "SEC09-BP01" },
            description: {
                ja: "安全な鍵および証明書管理を実装する",
                en: "Implement secure key and certificate management"
            }
        },
        {
            name: "SEC09-BP02.html",
            title: { ja: "SEC09-BP02", en: "SEC09-BP02" },
            description: {
                ja: "伝送中に暗号化を適用する",
                en: "Enforce encryption in transit"
            }
        },
        {
            name: "SEC09-BP03.html",
            title: { ja: "SEC09-BP03", en: "SEC09-BP03" },
            description: {
                ja: "ネットワーク通信を認証する",
                en: "Authenticate network communications"
            }
        }
    ];

    const basePath = './05-data-protection';
    initializeCardRendering('card-container', 'language-toggle', files, basePath);
});