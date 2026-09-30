import type { Metadata } from 'next'
import { HotelBooking } from './HotelBooking'

export const metadata: Metadata = {
  title: 'Hotel Booking System | Koeuk Dev',
  description:
    'A full-featured hotel booking and management platform built with Laravel 12, React 18, Inertia.js and Tailwind CSS: room availability, payments, coupons, reviews and an admin dashboard.',
}

export default function HotelBookingPage() {
  return <HotelBooking />
}
