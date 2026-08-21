export const site = {
  name: 'सूर्यपुरा ग्राम विकास पोर्टल',
  shortName: 'सूर्यपुरा',
  location: 'सूर्यपुरा, उत्तर प्रदेश',
  phone: '1800-XXX-XXXX',
  email: 'info@suryapura.gov.in',
  tagline: 'शिक्षित गाँव, समृद्ध किसान, बेहतर सड़क, सशक्त पंचायत',
  disclaimer: 'यह एक काल्पनिक डेमो पोर्टल है — केवल प्रदर्शन हेतु।',
} as const

export const navLinks = [
  { to: '/', label: 'होम' },
  { to: '/about', label: 'हमारे बारे में' },
  { to: '/works', label: 'विकास कार्य' },
  { to: '/schemes', label: 'योजनाएँ' },
  { to: '/gallery', label: 'गैलरी' },
  { to: '/news', label: 'समाचार' },
  { to: '/panchayat', label: 'पंचायत' },
  { to: '/contact', label: 'संपर्क' },
] as const

export const ctaApply = {
  label: 'जन-सुविधा आवेदन',
  to: '/contact',
} as const
