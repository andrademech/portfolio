import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a laborum quod ut? Consequuntur deleniti reprehenderit at quo facilis delectus veritatis dolorum, odio ipsam eveniet aperiam sunt quaerat dolorem repellat?',
  },
  {
    avatar: AVTR2,
    name: 'Shata Wale',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a laborum quod ut? Consequuntur deleniti reprehenderit at quo facilis delectus veritatis dolorum, odio ipsam eveniet aperiam sunt quaerat dolorem repellat?',
  },
  {
    avatar: AVTR3,
    name: 'Tina Show',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a laborum quod ut? Consequuntur deleniti reprehenderit at quo facilis delectus veritatis dolorum, odio ipsam eveniet aperiam sunt quaerat dolorem repellat?',
  },
  {
    avatar: AVTR4,
    name: 'Kwame Despite',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a laborum quod ut? Consequuntur deleniti reprehenderit at quo facilis delectus veritatis dolorum, odio ipsam eveniet aperiam sunt quaerat dolorem repellat?',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
