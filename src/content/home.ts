import heroAmbassador from '../assets/hero-ambassador.jpg'
import heroVillage from '../assets/hero-village.jpg'
import workHousing from '../assets/work-housing.jpg'
import workRoad from '../assets/work-road.jpg'
import workSchool from '../assets/work-school.jpg'
import workFarmers from '../assets/work-farmers.jpg'
import socialEducation from '../assets/social-education.jpg'
import socialFarmer from '../assets/social-farmer.jpg'

export const homeHero = {
  headline: 'साथ मिलकर बनाएं विकसित सूर्यपुरा',
  subcopy:
    'शिक्षित गाँव, समृद्ध किसान, बेहतर सड़क, सशक्त पंचायत — यही हमारा संकल्प है।',
  cta: { label: 'हमारे गाँव के बारे में जानें', to: '/about' },
  quote: {
    text: 'मेरा सपना है कि सूर्यपुरा के हर घर और हर खेत में समृद्धि और खुशहाली हो।',
    author: 'विकास चौहान',
    role: 'ग्राम विकास दूत',
  },
  ambassadorSrc: heroAmbassador,
  villageSrc: heroVillage,
} as const

export const pillars = [
  {
    id: 'education',
    title: 'शिक्षा',
    description: 'हर बच्चे को गुणवत्तापूर्ण शिक्षा और बेहतर भविष्य।',
    to: '/education',
  },
  {
    id: 'farmers',
    title: 'किसान',
    description: 'आधुनिक तकनीक और योजनाओं से किसान समृद्धि।',
    to: '/farmers',
  },
  {
    id: 'roads',
    title: 'सड़क',
    description: 'मजबूत सड़कें, आसान आवागमन और नए अवसर।',
    to: '/roads',
  },
  {
    id: 'panchayat',
    title: 'पंचायत',
    description: 'पारदर्शी शासन और डिजिटल जन-सुविधाएँ।',
    to: '/panchayat',
  },
] as const

export const works = {
  title: 'हमारे विकास कार्य',
  subtitle: 'गाँव की प्रगति — पारदर्शिता और परिणामों के साथ।',
  cta: { label: 'सभी विकास कार्य देखें', to: '/works' },
  items: [
    {
      title: 'पीएम आवास योजना',
      meta: '१२० नए आवास पूर्ण',
      image: workHousing,
      to: '/works',
    },
    {
      title: 'गाँव सड़क निर्माण',
      meta: '१२ किमी सड़क पूर्ण',
      image: workRoad,
      to: '/roads',
    },
    {
      title: 'विद्यालय भवन उन्नयन',
      meta: 'नए कक्षा-कक्ष निर्मित',
      image: workSchool,
      to: '/education',
    },
    {
      title: 'किसान प्रशिक्षण कार्यक्रम',
      meta: '३५०+ किसान लाभान्वित',
      image: workFarmers,
      to: '/farmers',
    },
  ],
} as const

export const socialPosts = {
  title: 'सामाजिक संदेश',
  subtitle: 'शिक्षा और कृषि — सूर्यपुरा की पहचान।',
  items: [
    {
      title: 'शिक्षित बच्चा, सशक्त भविष्य',
      caption: 'हर कक्षा में समान अवसर — यही विकसित सूर्यपुरा का आधार है।',
      image: socialEducation,
      url: 'www.suryapura.gov.in',
      hashtags: '#EducationForDevelopment #Suryapura',
    },
    {
      title: 'समृद्ध किसान, समृद्ध सूर्यपुरा',
      caption: 'नई तकनीक और बेहतर उपज से खेतों में नई उम्मीद।',
      image: socialFarmer,
      url: 'www.suryapura.gov.in',
      hashtags: '#ProsperousFarmer #Suryapura',
    },
  ],
} as const
