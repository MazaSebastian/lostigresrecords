'use client';

import { useState } from 'react';
import styles from './Contacto.module.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    'Auditoría Musical Inicial - 1.000 USD',
    'Proyecto Básico - 5.000 a 10.000 USD',
    'Proyecto Intermedio - 10.000 a 25.000 USD',
    'Proyecto Avanzado - 25.000 a 50.000 USD',
    'Proyecto Premium - 50.000 a 100.000 USD',
    'Proyecto Exclusivo - Más de 100.000 USD'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    setTimeout(() => {
      console.log('Formulario enviado:', formData);
      alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
      setFormData({ name: '', email: '', message: '', budget: '' });
      setCurrentStep(1);
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section id="contacto" className={styles.contacto}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>¿ESTÁS PREPARADO?</h2>
          <p className={styles.subtitle}>
            Asesórate con profesionales especializados en la industria de la música para consultar sobre tu proyecto musical.
          </p>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h3>Formulario</h3>
            <div className={styles.steps}>
              <div className={`${styles.step} ${currentStep >= 1 ? styles.active : ''}`}>
                <span>1</span>
                <p>Datos Personales</p>
              </div>
              <div className={`${styles.step} ${currentStep >= 2 ? styles.active : ''}`}>
                <span>2</span>
                <p>Inversión del Cliente</p>
              </div>
              <div className={`${styles.step} ${currentStep >= 3 ? styles.active : ''}`}>
                <span>3</span>
                <p>Auditoría Musical</p>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className={styles.stepContent}>
                <h4>Datos Personales</h4>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="button" className={styles.nextButton} onClick={nextStep}>
                  SIGUIENTE
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className={styles.stepContent}>
                <h4>¿Cuál es su rango de presupuesto?</h4>
                <div className={styles.budgetOptions}>
                  {budgetOptions.map((option, index) => (
                    <label key={index} className={styles.budgetOption}>
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={formData.budget === option}
                        onChange={handleChange}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                <div className={styles.stepButtons}>
                  <button type="button" className={styles.prevButton} onClick={prevStep}>
                    ANTERIOR
                  </button>
                  <button type="button" className={styles.nextButton} onClick={nextStep}>
                    SIGUIENTE
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className={styles.stepContent}>
                <h4>Cuéntanos sobre tu proyecto</h4>
                <div className={styles.inputGroup}>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Describe tu proyecto musical, objetivos y expectativas..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className={styles.stepButtons}>
                  <button type="button" className={styles.prevButton} onClick={prevStep}>
                    ANTERIOR
                  </button>
                  <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className={styles.newsletter}>
          <h3>Newsletter</h3>
          <p>Suscríbete al boletín informativo de nuestra productora para acceder a promociones y convertirte en nuestro insider musical con beneficios exclusivos únicos.</p>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Tu email" />
            <button type="button">SUSCRIBIRME</button>
          </div>
        </div>
      </div>
    </section>
  );
}
