'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Course from "@/components/Course";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingWidget";


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

  return (
    <>
      <Header />
      <Hero animation="fade-up" />
      <About animation="fade-up" />
      <Course animation="fade-up" />
      <Testimonials />
      <Faq />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </>

) ;
  
};
