// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// // import "swiper/components/effect-coverflow/effect-coverflow.min.css";
// // import "swiper/components/pagination/pagination.min.css";
// // import "swiper/components/navigation/navigation.min.css";
// import "./test.css";
// import SwiperCore, {
//   EffectCoverflow,
//   Pagination,
//   Navigation
// } from "swiper/core";

// SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

// export default function App() {
//   return (
//     <div className="container">
//       <div className="title_wrapper">
//         <div className="reactLogo">
//           <img src="images/react.png" />
//         </div>
//         <div className="title_">
//           <span>React</span>Swiper Slider
//         </div>
//       </div>
//       <Swiper
//         navigation={true}
//         effect={"coverflow"}
//         centeredSlides={true}
//         slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
//         loop={false}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true
//         }}
//         pagination={{
//           clickable: true
//         }}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="images/1.jpg" alt="1" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="images/2.jpg" alt="2" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="images/3.jpg" alt="3" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="images/4.jpg" alt="4" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="images/5.jpg" alt="5" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="images/6.jpg" alt="6" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }