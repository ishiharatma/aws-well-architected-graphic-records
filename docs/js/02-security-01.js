import { initializeCardRendering } from './render-cards.js';

document.addEventListener('DOMContentLoaded', () => {
    const files = [
        {
            name: "SEC01-BP01.html",
            title: { ja: "SEC01-BP01", en: "SEC01-BP01" },
            description: {
                ja: "アカウントを使用してワークロードを分ける",
                en: "Separate workloads using accounts"
            }
        },
        {
            name: "SEC01-BP02.html",
            title: { ja: "SEC01-BP02", en: "SEC01-BP02" },
            description: {
                ja: "セキュアアカウントのルートユーザーおよびプロパティ",
                en: "Secure account root user and properties"
            }
        },
        {
            name: "SEC01-BP03.html",
            title: { ja: "SEC01-BP03", en: "SEC01-BP03" },
            description: {
                ja: "管理目標を特定および検証する",
                en: "Identify and validate control objectives"
            }
        },
        {
            name: "SEC01-BP04.html",
            title: { ja: "SEC01-BP04", en: "SEC01-BP04" },
            description: {
                ja: "セキュリティの脅威と推奨事項の最新情報を入手する",
                en: "Stay up to date with security threats and recommendations"
            }
        },
        {
            name: "SEC01-BP05.html",
            title: { ja: "SEC01-BP05", en: "SEC01-BP05" },
            description: {
                ja: "セキュリティ管理のスコープを縮小する",
                en: "Reduce security management scope"
            }
        },
        {
            name: "SEC01-BP06.html",
            title: { ja: "SEC01-BP06", en: "SEC01-BP06" },
            description: {
                ja: "標準的なセキュリティ統制のデプロイを自動化する",
                en: "Automate deployment of standard security controls"
            }
        },
        {
            name: "SEC01-BP07.html",
            title: { ja: "SEC01-BP07", en: "SEC01-BP07" },
            description: {
                ja: "脅威モデルを使用して脅威を特定し、緩和策の優先順位を付ける",
                en: "Identify threats and prioritize mitigations using a threat model"
            }
        },
        {
            name: "SEC01-BP08.html",
            title: { ja: "SEC01-BP08", en: "SEC01-BP08" },
            description: {
                ja: "新しいセキュリティサービスと機能を定期的に評価および実装する",
                en: "Evaluate and implement new security services and features regularly"
            }
        }
    ];

    const basePath = './01-security';
    initializeCardRendering('card-container', 'language-toggle', files, basePath);
});