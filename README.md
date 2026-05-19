# TaskFlow QA - Playwright Testing Project

Proyecto de QA automation con Playwright para auditar la aplicación TaskFlow.

## Estructura

```
├── app/              # Código fuente de la app (clonado del repositorio original)
├── tests/            # Tests de Playwright
├── playwright.config.js
├── Dockerfile        # Imagen para ejecutar tests
├── docker-compose.yml
└── .env.example
```

## Requisitos

- Node.js 18+
- Docker (opcional)

## Uso Local

```bash
# Instalar dependencias
npm install
cd app && npm install && cd ..

# Ejecutar tests (levanta la app automáticamente)
npm test

# Ejecutar con UI
npm run test:ui
```

## Uso con Docker

```bash
# Ejecutar todo con Docker
npm run docker:up
npm run docker:test
npm run docker:down
```

## Tests Incluidos

- **Smoke Tests**: Carga básica, navegación
- **Login Tests**: Validaciones de formulario
- **Register Tests**: Validaciones de registro
- **Todos Tests**: Funcionalidad de tareas

## Subir a GitHub

```bash
# Inicializar repositorio
git init
git add .
git commit -m "Initial QA project with Playwright"

# Crear repositorio en GitHub y vincular
git remote add origin https://github.com/TU_USUARIO/taskflow-qa.git
git push -u origin main
```

## Notas

- Los tests de autenticación reales requieren configurar Supabase en .env
- Los tests actuales validan UI/UX sin conexión a backend