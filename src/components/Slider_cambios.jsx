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
        Corte de pelo y barba: 15€
        </h3>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-blue-400 to-blue-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
        Corte de pelo: 10€
        </h3>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-green-400 to-green-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
        Cortar y lavar: 11€
        </h3>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-green-400 to-green-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
        Jubilados y Niños menores de 10 años: 8€
        </h3>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-orange-400 to-orange-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
        Afeitado de cabeza: 8€
        </h3>
      </SwiperSlide>

      <SwiperSlide className="rounded-3xl p-4 shadow-xl bg-gradient-to-br from-red-400 to-red-800 text-white">
        <h3 class="py-2 mb-4 text-center text-2xl lg:text-3xl tracking-tight font-extrabold text-white">
        Corte, barba y tratamiento: 22€/35€
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};
