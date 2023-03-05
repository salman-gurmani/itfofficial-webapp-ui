import Image0 from '../../public/images/tour/_DSC3410.jpg'
import Image1 from '../../public/images/tour/_DSC3471.jpg'
import Image2 from '../../public/images/tour/27.6.2011Bilder 035.jpg'
import Image3 from '../../public/images/tour/28.06.2011Bilder 093.jpg'
import Image4 from '../../public/images/tour/20150411_111412.jpg'
import Image5 from '../../public/images/tour/DSC_3240.jpg'
import Image6 from '../../public/images/tour/DSC_3571.jpg'
import Image7 from '../../public/images/tour/DSC_3575.jpg'
import Image8 from '../../public/images/tour/DSC01107.jpg'
import Image9 from '../../public/images/tour/DSC03556.jpg'
import Image10 from '../../public/images/tour/DSC05141.jpg'
import Image11 from '../../public/images/tour/DSC05152.jpg'
import Image12 from '../../public/images/tour/DSC05154.jpg'
import Image13 from '../../public/images/tour/DSC05270.jpg'
// import Image14 from '../../public/images/tour/DSC05565.jpg'
// import Image15 from '../../public/images/tour/DSC05632.jpg'
// import Image16 from '../../public/images/tour/DSC05654.jpg'
// import Image17 from '../../public/images/tour/DSC05686.jpg'
// import Image18 from '../../public/images/tour/DSC05695.jpg'
// import Image19 from '../../public/images/tour/DSC05867.jpg'
// import Image20 from '../../public/images/tour/DSC05878.jpg'
// import Image21 from '../../public/images/tour/DSC05927.jpg'
// import Image22 from '../../public/images/tour/DSC05933.jpg'
// import Image23 from '../../public/images/tour/DSC06050.jpg'
// import Image24 from '../../public/images/tour/DSC06146.jpg'
// import Image25 from '../../public/images/tour/DSC06148.jpg'
// import Image26 from '../../public/images/tour/DSC06183.jpg'
// import Image27 from '../../public/images/tour/DSC06190.jpg'
// import Image28 from '../../public/images/tour/DSCF3035.jpg'
// import Image29 from '../../public/images/tour/IMG_3440.jpg'
// import Image30 from '../../public/images/tour/IMG_3462.jpg'
// import Image31 from '../../public/images/tour/IMG_4574.jpg'
// import Image32 from '../../public/images/tour/L1010584.jpg'
// import Image33 from '../../public/images/tour/L1010622.jpg'
// import Image34 from '../../public/images/tour/L1010637.jpg'
// import Image35 from '../../public/images/tour/L1010639.jpg'
// import Image36 from '../../public/images/tour/L1040371.jpg'
// import Image37 from '../../public/images/tour/L1040376.jpg'
// import Image38 from '../../public/images/tour/L1040408.jpg'
// import Image39 from '../../public/images/tour/L1050071.jpg'
// import Image40 from '../../public/images/tour/L1050079.jpg'
// import Image41 from '../../public/images/tour/L1050102.jpg'
// import Image42 from '../../public/images/tour/L1050169.jpg'

// import Image45 from '../../public/images/tour/tour/L1050216.jpg'
// import Image46 from '../../public/images/tour/tour/L1050231.jpg'
// import Image47 from '../../public/images/tour/tour/L1050247.jpg'
// import Image48 from '../../public/images/tour/tour/L1050250.jpg'
// import Image49 from '../../public/images/tour/tour/L1050279.jpg'
// import Image50 from '../../public/images/tour/tour/L1050300.jpg'
// import Image51 from '../../public/images/tour/tour/L1050308.jpg'
// import Image52 from '../../public/images/tour/tour/L1050363.jpg'
// import Image53 from '../../public/images/tour/tour/L1050380.jpg'
// import Image54 from '../../public/images/tour/tour/L1050428.jpg'
// import Image55 from '../../public/images/tour/tour/L1050429.jpg'
// import Image56 from '../../public/images/tour/tour/L1050449.jpg'
// import Image57 from '../../public/images/tour/tour/L1050469.jpg'
// import Image58 from '../../public/images/tour/tour/L1050542.jpg'
// import Image59 from '../../public/images/tour/tour/L1050566.jpg'
// import Image60 from '../../public/images/tour/tour/L1050782.jpg'
// import Image61 from '../../public/images/tour/tour/L1050789.jpg'
// import Image62 from '../../public/images/tour/tour/L1050817.jpg'
// import Image63 from '../../public/images/tour/tour/L1050861.jpg'
// import Image64 from '../../public/images/tour/tour/L1070670.jpg'
// import Image65 from '../../public/images/tour/tour/L1070695.jpg'
// import Image66 from '../../public/images/tour/tour/L1070900.jpg'
// import Image67 from '../../public/images/tour/tour/SAM_0250.jpg'
// import Image68 from '../../public/images/tour/tour/SAM_1426.jpg'
// import Image69 from '../../public/images/tour/tour/김성연 틀투어 태권도종주국체험.jpg'
// import Image70 from '../../public/images/tour/tour/도산틀.jpg'
// import Image71 from '../../public/images/tour/tour/중근틀.jpg'
// import Image72 from '../../public/images/tour/tour/중근틀2.jpg'
// import Image73 from '../../public/images/tour/tour/중근틀3.jpg'
// import Image74 from '../../public/images/tour/tour/태권도종주국방문투어4.jpg'
// import Image75 from '../../public/images/tour/tour/투개장.jpg'

import singleMembership from '../../public/images/Home/singleMembership.png'
import groupMembership from '../../public/images/Home/groupMembership.png'
import danForm from '../../public/images/Home/taekwondo.png'

import { ImageProps } from 'next/image'

/**
 * Logo
 */
import Logo from '../../public/images/logo/logo.png'

type HomeImagesObject = {
  slider: ImageProps[]
  logo: ImageProps
  groupMembership: ImageProps
  singleMembership: ImageProps
  danFormImage: ImageProps
}

export const HomeImages: HomeImagesObject = {
  slider: [
    {
      src: Image1,
      alt: 'Taekwondo participants at a tournament',
    },
    {
      src: Image2,
      alt: 'Taekwondo participants performing a kick',
    },
    {
      src: Image3,
      alt: 'Taekwondo participants in action',
      style: { objectFit: 'cover', objectPosition: '50% 30%', width: '100%' },
    },
    {
      src: Image4,
      alt: 'Taekwondo participants in a sparring match',
      style: { objectFit: 'cover', objectPosition: '70% 70%', width: '100%' },
    },
    {
      src: Image5,
      alt: 'Taekwondo participants practicing a form',
      style: { objectFit: 'contain' },
    },
    {
      src: Image6,
      alt: 'Taekwondo participants training with focus pads',
    },
    {
      src: Image7,
      alt: 'Taekwondo participants practicing self-defense techniques',
    },
    {
      src: Image8,
      alt: 'Taekwondo participants doing a group warm-up',
    },
    {
      src: Image9,
      alt: 'Taekwondo participants breaking boards',
    },
    {
      src: Image10,
      alt: 'Taekwondo participants practicing with nunchucks',
    },
    {
      src: Image11,
      alt: 'Taekwondo participants sparring with protective gear',
    },
    {
      src: Image12,
      alt: 'Taekwondo participants doing a flying kick',
    },
    {
      src: Image13,
      alt: 'Taekwondo participants bowing in respect',
    },
    {
      src: Image0,
      alt: 'Taekwondo participants bowing in respect',
    },
  ],
  logo: {
    src: Logo,
    alt: 'ITF Logo',
  },
  groupMembership: {
    src: groupMembership,
    alt: 'Group Member ',
  },
  singleMembership: {
    src: singleMembership,
    alt: 'Single Member',
  },
  danFormImage: {
    src: danForm,
    alt: 'Dan Form',
  },
}
