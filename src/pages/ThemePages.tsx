import { themePages } from '../content/pages'
import { ThemePageView } from '../components/ThemePageView'

export function EducationPage() {
  return <ThemePageView page={themePages.education} />
}

export function FarmersPage() {
  return <ThemePageView page={themePages.farmers} />
}

export function RoadsPage() {
  return <ThemePageView page={themePages.roads} />
}

export function PanchayatPage() {
  return <ThemePageView page={themePages.panchayat} />
}
