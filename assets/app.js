/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import React from 'react';
import Header from './js/components/common/header';
import Footer from './js/components/common/footer';
import Columns from './js/components/home/3column';
import Hero from './js/components/home/hero';
import ContactForm from './js/components/contact/contactform';
import DevisCreator from './js/components/outil/outil';
import Savoir from './js/components/savoir/savoir';
import Equipe from './js/components/equipe/equipe';
import Reference from './js/components/reference/reference';

import { createRoot } from 'react-dom/client';
import './styles/tailwind.css'; // Adjust path as necessary

document.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.getElementById('react-header');
    const footerElement = document.getElementById('react-footer');
    const columnElement = document.getElementById('react-column');
    const heroElement = document.getElementById('react-hero');
    const contactElement = document.getElementById('react-contact');
    const devisElement = document.getElementById('react-devis');
    const savoirElement = document.getElementById('react-savoir');
    const equipeElement = document.getElementById('react-equipe');
    const referenceElement = document.getElementById('react-reference');

    if (headerElement) {
        createRoot(headerElement).render(<Header />);
    }
    if (footerElement) {
        createRoot(footerElement).render(<Footer />);
    }
    if (columnElement) {
        createRoot(columnElement).render(<Columns />);
    }
    if (heroElement) {
        createRoot(heroElement).render(<Hero />);
    }
    if (contactElement) {
        createRoot(contactElement).render(<ContactForm />);
    }
    if (devisElement) {
        createRoot(devisElement).render(<DevisCreator />);
    }
    if (savoirElement) {
        createRoot(savoirElement).render(<Savoir />);
    }
    if (equipeElement) {
        createRoot(equipeElement).render(<Equipe />);
    }
    if (referenceElement) {
        createRoot(referenceElement).render(<Reference />);
    }
    console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
});


