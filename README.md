# Playwright QA - TaskFlow

Tests de QA automation para aplicaciones web desplegadas.

## Arquitectura

```
PlaywrightG2/
├── .github/
│   └── workflows/
│       └── playwright.yml     # CI/CD con GitHub Actions
├── tests/
│   ├── smoke.spec.js          # Tests básicos de carga
│   ├── auth.spec.js           # Tests de autenticación
│   ├── navigation.spec.js      # Tests de navegación
│   ├── performance.spec.js    # Tests de rendimiento
│   └── errors.spec.js         # Tests de errores en consola
├── playwright.config.js       # Configuración de Playwright
├── package.json               # Dependencias
├── .gitignore                 # Archivos ignorados
└── README.md                  # Este archivo
```

## Comandos

```bash
# Instalar dependencias
npm install

# Ejecutar tests
npm test
```

## Configuración

- **URL objetivo**: Variable de entorno `BASE_URL` (secret: `APP_URL`)
- **Navegador**: Chromium

## Secrets (GitHub)

Agregar en Settings → Secrets → Actions:
- `APP_URL`: URL del proyecto a testear (ej: https://tu-app.vercel.app)

## Tests Incluidos

| Archivo | Tipo | Descripción |
|---------|------|-------------|
| `smoke.spec.js` | Smoke | Carga básica, formularios visibles |
| `auth.spec.js` | Funcional | Validaciones de login/register |
| `navigation.spec.js` | Navigation | Navegación entre páginas, URLs |
| `performance.spec.js` | Performance | Tiempos de carga |
| `errors.spec.js` | QA | Errores de consola JS |

## CI/CD

GitHub Actions ejecuta los tests automáticamente en push a `main`.

**URL**: https://github.com/DavCoder22/PlaywrightG2/actions