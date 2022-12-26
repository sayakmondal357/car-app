import React from 'react';
import styles from './Find.module.css';
import Card from './Card';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const Find = () => {
    return (
        <div className={styles.find}>
            <div className={styles.heading}>
                <h1>Find your drive</h1>
                <div className={styles.text_bg}>
                    <p>
                        <span>Explore the world's largest car sharing marketplace</span>
                    </p>
                </div>
            </div>
            <div className={styles.slider_container}>
                <Swiper
                    // install swiper module
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                    breakpoints={{
                        // when window width is >= 340px
                        340: {
                            width: 200,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 4,
                        },
                        // when window width is >= 1040px
                        1040: {
                            width: 1040,
                            slidesPerView: 5,
                        },
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwYXVkaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' make='Audi'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1615240697225-e9c0a61c24ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' make='BMW'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1624001010212-f7bfd7cc74cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhciUyMGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' make='Chevrolet'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1644952599197-e8c140d684c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkxfHxjYXIlMjBhdWRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' make='Mercedes-Benz'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI3fHxjYXIlMjBhdWRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' make='Nissan'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1596639771731-c3610a895cf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhciUyMHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' make='Toyota'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1612911912327-57b3aff278c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNhciUyMGplZXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' make='Jeep'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1634693928843-9a34acd12b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhciUyMGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' make='Ford'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1626217020518-f963d4988082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGNhciUyMHRlc2xhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' make='Tesla'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1609363990946-420bc7cdf51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhciUyMHBvcnNjaGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' make='Porsche'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1595342274661-480b44488999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMEhvbmRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' make='Honda'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1666903818824-1a4ff98fc70d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGNhciUyMFN1YmFydXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' make='Subaru'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1651683477179-6e5aad41349c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNhciUyMENhZGlsbGFjfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' make='Cadillac'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1517271710308-aa99f1519490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwVm9sa3N3YWdlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' make='Volkswagen'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhciUyMEZlcnJhcml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' make='Ferrari'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1664188288368-92de235c947a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhciUyMFZvbHZvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' make='Volvo'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1591415969410-e9443b9a28c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhciUyMEphZ3VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' make='Jaguar'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1633867179970-c54688bcfa33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' make='Thar'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1564861996752-484b6d88eedc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWN1cmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' make='Acura'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8SHl1bmRhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' make='Hyundai'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1607853203379-a5cd4466323a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVuYXVsdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' make='Renault'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1618486613525-c694bf152b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8QXN0b24lMjBNYXJ0aW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' make='Aston Martin'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8QnVnYXR0aXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' make='Bugatti'/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Find
