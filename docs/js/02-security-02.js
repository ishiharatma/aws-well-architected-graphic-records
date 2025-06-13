import { initializeCardRendering } from './render-cards.js';

document.addEventListener('DOMContentLoaded', () => {
    const files = [
        {
            name: "SEC02-BP01.html",
            title: { ja: "SEC02-BP01", en: "SEC02-BP01" },
            description: {
                ja: "強力なサインインメカニズムを使用する",
                en: "Use strong sign-in mechanisms"
            }
        },
        {
            name: "SEC02-BP02.html",
            title: { ja: "SEC02-BP02", en: "SEC02-BP02" },
            description: {
                ja: "一時的な認証情報を使用する",
                en: "Use temporary credentials"
            }
        },
        {
            name: "SEC02-BP03.html",
            title: { ja: "SEC02-BP03", en: "SEC02-BP03" },
            description: {
                ja: "シークレットを安全に保存して使用する",
                en: "Store and use secrets securely"
            }
        },
        {
            name: "SEC02-BP04.html",
            title: { ja: "SEC02-BP04", en: "SEC02-BP04" },
            description: {
                ja: "一元化された ID プロバイダーを利用する",
                en: "Rely on a centralized identity provider"
            }
        },
        {
            name: "SEC02-BP05.html",
            title: { ja: "SEC02-BP05", en: "SEC02-BP05" },
            description: {
                ja: "定期的に認証情報を監査およびローテーションする",
                en: "Audit and rotate credentials periodically"
            }
        },
        {
            name: "SEC02-BP06.html",
            title: { ja: "SEC02-BP06", en: "SEC02-BP06" },
            description: {
                ja: "ユーザーグループと属性を採用する",
                en: "Employ user groups and attributes"
            }
        }
    ];

    const basePath = './02-iam';
    initializeCardRendering('card-container', 'language-toggle', files, basePath);
});