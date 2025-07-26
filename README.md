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

/
├── public/ # Assets estáticos (img, logo, favicons)
├── src/
│ ├── components/ # Header, Galería, Listado de citas…
│ ├── layouts/ # Layout principal
│ ├── pages/ # index.astro, pedirCita.astro, verCitas.astro
│ └── css/ # Estilos específicos de Galería
├── astro.config.mjs # Configuración Astro + Tailwind
├── tailwind.config.mjs
├── tsconfig.json
└── README.md

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
