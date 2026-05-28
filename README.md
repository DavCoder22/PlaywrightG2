# Playwright QA - TaskFlow

Tests de QA automation para aplicaciones web usando Playwright.

## Arquitectura

```
PlaywrightG2/
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI/CD con GitHub Actions
├── pom/                         # Page Object Model
│   ├── BasePage.js              # Clase base con métodos comunes
│   ├── LoginPage.js             # POM de la página de login
│   ├── RegisterPage.js          # POM de la página de registro
│   └── index.js                 # Exportaciones
├── tests/
│   ├── smoke.spec.js            # Tests básicos de carga y visibilidad
│   ├── auth.spec.js             # Tests de validación de formularios (usa POM)
│   ├── navigation.spec.js       # Tests de navegación entre páginas
│   ├── errors.spec.js           # Tests de errores en consola JS
│   ├── performance.spec.js      # Tests de rendimiento (métricas reales)
│   └── e2e-flow.spec.js         # Tests de flujo completo E2E
├── playwright.config.js         # Config (Chromium, Firefox, WebKit)
├── package.json
├── .gitignore
└── README.md
```

## Comandos

```bash
npm install       # Instalar dependencias
npm test          # Ejecutar todos los tests
npm run test:report   # Ver reporte HTML
```

## Configuración

- **URL objetivo**: `process.env.BASE_URL` (GitHub secret: `APP_URL`)
- **Browsers**: Chromium, Firefox, WebKit
- **CI**: Retry 2 veces en fallo, 1 worker

## Tests incluidos

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `smoke.spec.js` | Smoke | Carga de páginas, formularios visibles |
| `auth.spec.js` | Unit (POM) | Validaciones de login y registro |
| `navigation.spec.js` | Navigation | Rutas, redirecciones, 404 |
| `errors.spec.js` | QA | Detección de errores JS en consola |
| `performance.spec.js` | Perf | Tiempos de carga con `performance.timing` |
| `e2e-flow.spec.js` | E2E | Flujo completo registro → login → validaciones |

## CI/CD

Ejecuta tests automáticamente en push/PR a `main`.

**Actions**: https://github.com/DavCoder22/PlaywrightG2/actions

**Secret**: `APP_URL` → Settings → Secrets → Actions