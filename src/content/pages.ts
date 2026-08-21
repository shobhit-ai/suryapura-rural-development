import socialEducation from '../assets/social-education.jpg'
import socialFarmer from '../assets/social-farmer.jpg'
import workRoad from '../assets/work-road.jpg'
import workSchool from '../assets/work-school.jpg'
import workFarmers from '../assets/work-farmers.jpg'
import workHousing from '../assets/work-housing.jpg'

export type ThemePage = {
  path: string
  title: string
  eyebrow: string
  summary: string
  image: string
  narrative: string
  bullets: string[]
  relatedLabel: string
}

export const themePages: Record<string, ThemePage> = {
  education: {
    path: '/education',
    title: 'शिक्षा',
    eyebrow: 'विकास का स्तंभ',
    summary: 'हर बच्चे को गुणवत्तापूर्ण शिक्षा और सुरक्षित विद्यालय वातावरण।',
    image: socialEducation,
    narrative:
      'सूर्यपुरा में हम विद्यालय भवन, शिक्षक प्रशिक्षण और डिजिटल कक्षाओं पर काम कर रहे हैं ताकि गाँव का हर बच्चा आगे बढ़ सके।',
    bullets: [
      'नए कक्षा-कक्ष और बेहतर स्वच्छता सुविधाएँ',
      'छात्रवृत्ति व शिक्षा जागरूकता अभियान',
      'अभिभावक-शिक्षक संवाद और सामुदायिक भागीदारी',
    ],
    relatedLabel: 'विद्यालय संबंधी कार्य देखें',
  },
  farmers: {
    path: '/farmers',
    title: 'किसान',
    eyebrow: 'खेत से समृद्धि',
    summary: 'आधुनिक खेती, प्रशिक्षण और योजनाओं से किसान सशक्तिकरण।',
    image: socialFarmer,
    narrative:
      'बीज, सिंचाई, प्रशिक्षण और बाज़ार पहुँच — सूर्यपुरा के किसानों को हर कड़ी में सहयोग मिलना चाहिए।',
    bullets: [
      'फसल विविधीकरण और मिट्टी स्वास्थ्य शिविर',
      'योजनाओं की जानकारी सरल भाषा में',
      'सहकारी समूह और सामूहिक विपणन',
    ],
    relatedLabel: 'किसान कार्यक्रम देखें',
  },
  roads: {
    path: '/roads',
    title: 'सड़क',
    eyebrow: 'आवागमन और अवसर',
    summary: 'मज़बूत सड़कें — स्वास्थ्य, शिक्षा और बाज़ार तक आसान पहुँच।',
    image: workRoad,
    narrative:
      'ग्रामीण सड़कें विकास की धमनियाँ हैं। हम टिकाऊ निर्माण और रखरखाव पर ध्यान दे रहे हैं।',
    bullets: [
      'मुख्य व संपर्क मार्गों का उन्नयन',
      'सुरक्षा और जल निकासी व्यवस्था',
      'पारदर्शी प्रगति रिपोर्टिंग',
    ],
    relatedLabel: 'सड़क कार्य देखें',
  },
  panchayat: {
    path: '/panchayat',
    title: 'पंचायत',
    eyebrow: 'डिजिटल पहचान व शासन',
    summary: 'पारदर्शी पंचायत, जन-सुनवाई और डिजिटल सेवाएँ।',
    image: workHousing,
    narrative:
      'पंचायत स्तर पर सूचना, सेवा और भागीदारी आसान हो — यही डिजिटल सूर्यपुरा का लक्ष्य है।',
    bullets: [
      'जन-सुविधा आवेदनों की सरल प्रक्रिया',
      'बैठकों व निर्णयों की सार्वजनिक जानकारी',
      'युवा व महिलाओं की सक्रिय भागीदारी',
    ],
    relatedLabel: 'विकास कार्य देखें',
  },
}

export const stubPages: Record<
  string,
  { title: string; summary: string; body: string; image?: string }
> = {
  about: {
    title: 'हमारे बारे में',
    summary: 'सूर्यपुरा ग्राम विकास पोर्टल — गाँव की आवाज़, विकास की दिशा।',
    body: 'यह पोर्टल शिक्षा, कृषि, आधारभूत संरचना और पंचायत सेवाओं को एक जगह लाता है ताकि नागरिक प्रगति देख सकें और जुड़ सकें। विकास दूत विकास चौहान के नेतृत्व में हम सामूहिक प्रयास से विकसित सूर्यपुरा बना रहे हैं।',
    image: workSchool,
  },
  works: {
    title: 'विकास कार्य',
    summary: 'आवास, सड़क, शिक्षा और कृषि — चल रहे व पूर्ण कार्य।',
    body: 'यहाँ सूर्यपुरा के प्रमुख विकास कार्यों की झलक दी गई है। विस्तृत रिपोर्ट और दस्तावेज़ वास्तविक परिनियोजन में जोड़े जा सकते हैं।',
    image: workFarmers,
  },
  schemes: {
    title: 'योजनाएँ',
    summary: 'केंद्र व राज्य की प्रमुख योजनाओं की सरल जानकारी।',
    body: 'आवास, कृषि, शिक्षा और स्वरोजगार योजनाओं की पात्रता व आवेदन मार्गदर्शिका इस खंड में उपलब्ध कराई जाएगी।',
  },
  gallery: {
    title: 'गैलरी',
    summary: 'गाँव की तस्वीरें — उत्सव, निर्माण और सामुदायिक कार्यक्रम।',
    body: 'गैलरी में सूर्यपुरा के विकास क्षण संकलित किए जाएँगे। वर्तमान डेमो में मुख्य पृष्ठ की तस्वीरें देखें।',
  },
  news: {
    title: 'समाचार',
    summary: 'पंचायत अपडेट, शिविर और जन-सूचनाएँ।',
    body: 'नवीनतम समाचार और सूचनाएँ यहाँ प्रकाशित होंगी। डेमो में नमूना सामग्री उपलब्ध है।',
  },
  contact: {
    title: 'संपर्क / जन-सुविधा आवेदन',
    summary: 'प्रश्न, सुझाव या आवेदन — हमसे जुड़ें।',
    body: 'यह एक डेमो फॉर्म है। वास्तविक प्रणाली में आपका अनुरोध पंचायत कार्यालय तक पहुँचेगा।',
  },
}
