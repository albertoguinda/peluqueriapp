# 💇 PeluqueriApp

> **Web app de reservas para peluquerías**  
> Interfaz moderna y responsive, con calendario embebido y galería de fotos.

---

[![Live Demo](https://img.shields.io/badge/Live-Demo-10C8FF?logo=vercel)](https://peluqueriapp.vercel.app)  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-181717?logo=github)](https://github.com/albertoguinda/peluqueriapp)

---

## 🛠️ Tecnologías

- **Frontend:** Astro · React · TypeScript
- **Estilos:** TailwindCSS
- **UI Components:** Swiper (carrusel) · PhotoSwipe (galería)
- **Integraciones:** Calendly (iframe)
- **Deployment:** Vercel

---

## 📂 Estructura

```bash
/
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public/
│ ├── favicon.svg
│ └── img/
│ ├── 404.gif
│ ├── instagram.png
│ ├── logo.jpg
│ └── estilos/
│ ├── img-1.jpg
│ ├── img-2.jpg
│ ├── img-3.jpg
│ ├── img-4.jpg
│ ├── img-5.jpg
│ ├── img-6.jpg
│ ├── img-7.jpg
│ ├── img-8.jpg
│ ├── img-9.jpg
│ ├── img-10.jpg
│ ├── img-11.jpg
│ ├── img-12.jpg
│ ├── img-13.jpg
│ ├── img-14.jpg
│ ├── img-15.jpg
│ ├── img-16.jpg
│ └── img-17.jpg
├── README.md
├── src/
│ ├── components/
│ │ ├── CalendarSwitcher.jsx
│ │ ├── Galeria.astro
│ │ ├── Header.astro
│ │ ├── HeaderButton.astro
│ │ ├── ListadoCitas.astro
│ │ ├── Slider_cambios.jsx
│ │ └── Slider_old.jsx
│ ├── css/
│ │ └── Galeria.css
│ ├── env.d.ts
│ ├── layouts/
│ │ └── Layout.astro
│ └── pages/
│ ├── 404.astro
│ ├── index.astro
│ ├── pedirCita.astro
│ └── verCitas.astro
├── tailwind.config.mjs
└── tsconfig.json
```

---

## ⚙️ Funcionalidades

1. **Página de inicio**

   - Slider de imágenes del salón (Swiper + PhotoSwipe).

2. **Reservar cita** (`/pedirCita`)

   - Calendario embebido (iframe de Calendly).

3. **Ver mis citas** (`/verCitas`)
   - Listado de próximas reservas en un componente Astro.

---

## 🚀 Ejecución local

```bash
git clone https://github.com/albertoguinda/peluqueriapp.git
cd peluqueriapp
npm install
npm run dev

# Abre http://localhost:3000

📈 Métricas y optimización
Lighthouse score: 95/100 en Performance y Accessibility

TTFB: < 200 ms

Deploy automático en Vercel tras cada push a main

📝 Créditos
Desarrollado por Alberto Guinda Sevilla
LinkedIn | Portfolio
```
