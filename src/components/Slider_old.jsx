<<<<<<< HEAD
import { EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

export default () => {
  return (
    <Swiper
      modules={[EffectCards, Pagination]}
      effect={"cards"}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-blue-400 to-blue-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
          Servicios Básicos
        </h3>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Corte de pelo: 10€
        </h4>
        <h4 class=" text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Cortar y lavar: 11€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Barba con ritual: 7€
        </h4>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-green-400 to-green-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
          Servicios Básicos
        </h3>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Corte de pelo y barba: 16€
        </h4>
        <h4 class=" text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Jubilados: 8€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Niños menores de 10 años: 8€
        </h4>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-orange-400 to-orange-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
          Otros Servicios
        </h3>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Depilación con hilo: 5€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Depilación con cuchilla: 2€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Afeitado de cabeza: 8€
        </h4>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-red-400 to-red-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
          Tratamientos faciales
        </h3>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Tratamiento facial clásico: 10€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Tratamiento facial complejo: 20€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Corte, barba y tratamiento: 22€/35€
        </h4>
      </SwiperSlide>
    </Swiper>
  );
};
=======
import { EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

export default () => {
  return (
    <Swiper
      modules={[EffectCards, Pagination]}
      effect={"cards"}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-blue-400 to-blue-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
          Servicios Básicos
        </h3>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Corte de pelo: 10€
        </h4>
        <h4 class=" text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Cortar y lavar: 11€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Barba con ritual: 7€
        </h4>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-green-400 to-green-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
          Servicios Básicos
        </h3>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Corte de pelo y barba: 16€
        </h4>
        <h4 class=" text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Jubilados: 8€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Niños menores de 10 años: 8€
        </h4>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-orange-400 to-orange-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
          Otros Servicios
        </h3>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Depilación con hilo: 5€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Depilación con cuchilla: 2€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Afeitado de cabeza: 8€
        </h4>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-red-400 to-red-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
          Tratamientos faciales
        </h3>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Tratamiento facial clásico: 10€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Tratamiento facial complejo: 20€
        </h4>
        <h4 class="text-center text-sm lg:text-xl tracking-tight font-extrabold text-white">
          Corte, barba y tratamiento: 22€/35€
        </h4>
      </SwiperSlide>
    </Swiper>
  );
};
>>>>>>> e6fd68155ffec9042f985c5cda4d3b777f6188c6
