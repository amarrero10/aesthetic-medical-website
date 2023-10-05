import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import testimonials from "./testimonials.js";

function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <section class="px-6" ref={sliderRef}>
      <div class="mx-auto xl:w-full sm:max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't just take our word for it...
            </h2>

            <p class="mt-4 ">
              We're thrilled to share some heartfelt testimonials from our satisfied customers.
              Their kind words speak volumes about their experiences with us.
            </p>

            {loaded && instanceRef.current && (
              <div className=" flex items-center justify-around mx-auto w-[200px]">
                <DesktopArrow
                  left
                  onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                  disabled={currentSlide === 0}
                />

                <DesktopArrow
                  onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                  disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                />
              </div>
            )}
          </div>

          <div class="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" class="keen-slider">
              {testimonials.map((testimonial, idx) => {
                return (
                  <div class="keen-slider__slide cursor-pointer">
                    <blockquote class="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div class="flex gap-0.5 text-green-500">
                          <svg
                            class="h-5 w-5"
                            fill="#8a9a5b"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="h-5 w-5"
                            fill="#8a9a5b"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="h-5 w-5"
                            fill="#8a9a5b"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="h-5 w-5"
                            fill="#8a9a5b"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>

                          <svg
                            class="h-5 w-5"
                            fill="#8a9a5b"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div class="mt-4">
                          <p class="text-xl font-bold  sm:text-3xl">{testimonial.title}</p>

                          <p class="mt-4 leading-relaxed sm:w-[600px] text-justify sm:text-left mr-8">
                            {testimonial.quote}
                          </p>
                        </div>
                      </div>

                      <footer class="text-periwinkle mt-4 text-sm font-medium  sm:mt-6 ">
                        &mdash; {testimonial.name}
                      </footer>
                    </blockquote>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className=" flex items-center justify-around mx-auto w-[200px]">
            <Arrow
              left
              onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";

  return (
    <div className="mt-8 flex justify-center gap-4 lg:hidden">
      <button
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        }${disabled} rounded-full border border-rose-600 p-4  transition hover:bg-rose-600 hover:text-white`}
        aria-label={props.left ? "Previous slide" : "Next slide"}
        id={props.left ? "keen-slider-previous" : "keen-slider-next"}
      >
        <svg
          className={`h-5 w-5 ${props.left ? "-rotate-180 transform" : ""}`}
          fill="none"
          stroke="#8a9a5b"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}
function DesktopArrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";

  return (
    <div className="mt-8 sm:flex justify-center gap-4 hidden ">
      <button
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        }${disabled} rounded-full border border-rose-600 p-4  transition hover:bg-rose-600 hover:text-white`}
        aria-label={props.left ? "Previous slide" : "Next slide"}
        id={props.left ? "keen-slider-previous" : "keen-slider-next"}
      >
        <svg
          className={`h-5 w-5 ${props.left ? "-rotate-180 transform" : ""}`}
          fill="none"
          stroke="#8a9a5b"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}

export default TestimonialSlider;

//   <div class="keen-slider__slide">
//     <blockquote class="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
//       <div>
//         <div class="flex gap-0.5 text-green-500">
//           <svg
//             class="h-5 w-5"
//             fill="#8a9a5b"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>

//           <svg
//             class="h-5 w-5"
//             fill="#8a9a5b"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>

//           <svg
//             class="h-5 w-5"
//             fill="#8a9a5b"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>

//           <svg
//             class="h-5 w-5"
//             fill="#8a9a5b"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>

//           <svg
//             class="h-5 w-5"
//             fill="#8a9a5b"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         </div>

//         <div class="mt-4">
//           <p class="text-2xl font-bold  sm:text-3xl">Stayin' Alive</p>

//           <p class="mt-4 leading-relaxed ">
//             No, Rose, they are not breathing. And they have no arms or legs … Where are
//             they? You know what? If we come across somebody with no arms or legs, do we
//             bother resuscitating them? I mean, what quality of life do we have there?
//           </p>
//         </div>
//       </div>

//       <footer class="text-periwinkle mt-4 text-sm font-medium  sm:mt-6">
//         &mdash; Mia G.
//       </footer>
//     </blockquote>
//   </div>;
