import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import styled from '@emotion/styled'
import { useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import { HomeImages } from '../Images'
import { map } from 'lodash'
import { v4 } from 'uuid'
import { Progress } from '@chakra-ui/react'
const CarouselWrapper = styled(Swiper)(
  ({ height }) => `
  width: 100%;
  height: ${height}px;
`
)

const Carousel = () => {
  const height = useBreakpointValue({
    base: 300,
    sm: 400,
    md: 500,
    lg: 620,
    xl: 800,
  })
  const [progressSlide, setProgressSlide] = useState(0)

  const onAutoplayTimeLeft = (s, time, progress) => {
    setProgressSlide((1 - progress) * 100)
  }

  return (
    <>
      <Progress colorScheme="facebook" size="xs" value={progressSlide} />
      <CarouselWrapper
        spaceBetween={30}
        centeredSlides={true}
        height={height}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {map(HomeImages.slider, (image) => (
          <SwiperSlide key={v4()} style={{ position: 'relative' }}>
            <Image {...image} style={{ height: height }} alt={image.alt} />
          </SwiperSlide>
        ))}
      </CarouselWrapper>
    </>
  )
}
export { Carousel }
