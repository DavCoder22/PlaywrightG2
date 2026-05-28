# Playwright QA - Print3dCot (impr3q)

Tests de QA automation para [Print3dCot](https://davcoder22.github.io/Print3dCot/) usando Playwright.

## Arquitectura

```
PlaywrightG2/
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI/CD con GitHub Actions
├── pom/                         # Page Object Model
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   └── index.js
├── tests/
│   ├── smoke.spec.js
│   ├── auth.spec.js
│   ├── navigation.spec.js
│   ├── errors.spec.js
│   ├── performance.spec.js
│   └── e2e-flow.spec.js
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## Comandos

```bash
npm install           # Instalar dependencias
npm test              # Ejecutar todos los tests
npm run test:report   # Ver reporte HTML
```

## Configuración

- **URL objetivo**: `process.env.BASE_URL` (GitHub secret: `APP_URL`)
- **Fallback local**: `https://davcoder22.github.io/Print3dCot/`
- **Browsers**: Chromium, Firefox, WebKit
- **CI**: Retry 2 veces en fallo, 1 worker

## CI/CD

Ejecuta tests automáticamente en push/PR a `main`.

**Actions**: https://github.com/DavCoder22/PlaywrightG2/actions

**Secret**: `APP_URL` → Settings → Secrets → Actions (valor: `https://davcoder22.github.io/Print3dCot/`)