import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from "flowbite-react";
import { FaStar } from "react-icons/fa6";
import ProPic from "../assets/profile.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Review() {
  return (
    <div className="my-12 px-4 lg:px-24">
      <div className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                <p className="mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                  officiis natus at eius corporis. Adipisci culpa accusamus, ut
                  mollitia, voluptatibus, est magni dolorum eveniet rerum
                  aliquam facilis natus. Quibusdam, accusamus!
                </p>
                <Avatar
                  img={ProPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Sarah Josh</h5>
                <p className="text-base"> CEO, ABC company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                <p className="mb-5">
                  Absolutely love Read Spot! The atmosphere is so cozy and
                  inviting, perfect for curling up with a good book and a cup of
                  coffee. The staff is always friendly and knowledgeable, and
                  I've discovered so many new favorite reads thanks to their
                  recommendations. Highly recommend for any book lover
                </p>
                <Avatar
                  img={ProPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Sarah Josh</h5>
                <p className="text-base"> CEO, ABC company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                <p className="mb-5">
                  Read Spot is my go-to bookstore in town. I appreciate their
                  diverse selection of books across genres, including
                  lesser-known titles and local authors. The reading nooks are
                  perfect for escaping the hustle and bustle of the city,
                </p>
                <Avatar
                  img={ProPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Sarah Josh</h5>
                <p className="text-base"> CEO, ABC company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                <p className="mb-5">
                  I stumbled upon Read Spot while exploring the neighborhood,
                  and I'm so glad I did! The store has such a charming ambiance,
                  and I love browsing through their carefully curated collection
                  of books. The staff is incredibly helpful and passionate
                </p>
                <Avatar
                  img={ProPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Sarah Josh</h5>
                <p className="text-base"> CEO, ABC company</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                <p className="mb-5">
                  I stumbled upon Read Spot while exploring the neighborhood,
                  and I'm so glad I did! The store has such a charming ambiance,
                  and I love browsing through their carefully curated collection
                  of books. The staff is incredibly helpful and passionate about
                  literature, making every visi
                </p>
                <Avatar
                  img={ProPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Sarah Josh</h5>
                <p className="text-base"> CEO, ABC company</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Review;
