"use client"

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast, Toaster } from 'react-hot-toast';

const containerStyles = {
  backgroundImage: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
  minHeight: '100vh',
  padding: '1rem',
  width: '100%',
  overflowX: 'hidden'
};

interface FormData {
  firstName: string;
  lastName: string;
  birthDate: string;
  spouseBirthDate: string;
  insuranceType: string;
  gender: string;
  maritalStatus: string;
  socialRegime: string;
  postalCode: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  acceptOffers: boolean;
  reimbursementLevels: {
    medicine: string;
    dental: string;
    optical: string;
    hospitalization: string;
  };
}

const InsuranceForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    birthDate: '',
    spouseBirthDate: '',
    insuranceType: '',
    gender: '',
    maritalStatus: '',
    socialRegime: '',
    postalCode: '',
    city: '',
    address: '',
    phone: '',
    email: '',
    acceptOffers: false,
    reimbursementLevels: {
      medicine: '100%',
      dental: '100%',
      optical: '50€',
      hospitalization: '100%'
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    const loadingToast = toast.loading('Envoi en cours...');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      toast.dismiss(loadingToast);

      if (data.success) {
        toast.success(data.message || 'Formulaire envoyé avec succès !', {
          duration: 5000,
          style: {
            backgroundColor: '#10B981',
            color: 'white',
            fontSize: '16px',
            padding: '16px',
            borderRadius: '8px',
          },
        });

        setFormData({
          firstName: '',
          lastName: '',
          birthDate: '',
          spouseBirthDate: '',
          insuranceType: '',
          gender: '',
          maritalStatus: '',
          socialRegime: '',
          postalCode: '',
          city: '',
          address: '',
          phone: '',
          email: '',
          acceptOffers: false,
          reimbursementLevels: {
            medicine: '100%',
            dental: '100%',
            optical: '50€',
            hospitalization: '100%'
          }
        });
        setStep(1);
      } else {
        throw new Error(data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error instanceof Error ? error.message : 'Une erreur est survenue', {
        duration: 5000,
        style: {
          backgroundColor: '#EF4444',
          color: 'white',
          fontSize: '16px',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4 sm:space-y-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-orange-500 text-center">Qui souhaitez-vous assurer ?</h2>
      <p className="text-base sm:text-xl text-gray-600 text-center">Dites nous en plus sur vous. Ces informations permettront de calculer les tarifs proposés par les assureurs.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        {[
          { id: 'single', label: 'VOUS', img: '/assets/single.png' },
          { id: 'couple', label: 'VOUS ET VOTRE CONJOINT', img: '/assets/couple.png' },
          { id: 'parent', label: 'VOUS ET VOS ENFANTS', img: '/assets/parent.png' },
          { id: 'family', label: 'VOUS, VOTRE CONJOINT ET VOS ENFANTS', img: '/assets/family.png' }
        ].map((option) => (
          <Card
            key={option.id}
            className={`p-3 sm:p-6 cursor-pointer transition-all hover:shadow-xl ${
              formData.insuranceType === option.id ? 'ring-2 ring-orange-500' : ''
            }`}
            onClick={() => setFormData({ ...formData, insuranceType: option.id })}
          >
            <div className="aspect-square relative mb-2 sm:mb-4">
              <img
                src={option.img}
                alt={option.label}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-sm sm:text-lg font-medium">{option.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4 sm:space-y-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-orange-500 text-center">Profil</h2>
      <p className="text-base sm:text-xl text-gray-600 text-center">Merci de remplir le formulaire</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-base sm:text-lg font-medium mb-1 sm:mb-2">Votre nom</label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Votre nom"
              className="w-full text-base sm:text-lg p-2 sm:p-3"
              required
            />
          </div>
          <div>
            <label className="block text-base sm:text-lg font-medium mb-1 sm:mb-2">Votre prénom</label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Votre prénom"
              className="w-full text-base sm:text-lg p-2 sm:p-3"
              required
            />
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-base sm:text-lg font-medium mb-1 sm:mb-2">Votre date de naissance</label>
            <Input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              className="w-full text-base sm:text-lg p-2 sm:p-3"
              required
            />
          </div>
          {(formData.insuranceType === 'couple' || formData.insuranceType === 'family') && (
            <div>
              <label className="block text-base sm:text-lg font-medium mb-1 sm:mb-2">Date de naissance de votre conjoint</label>
              <Input
                type="date"
                name="spouseBirthDate"
                value={formData.spouseBirthDate}
                onChange={handleInputChange}
                className="w-full text-base sm:text-lg p-2 sm:p-3"
                required
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4 sm:space-y-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-orange-500 text-center">Vous êtes ?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto">
        {[
          { id: 'male', label: 'UN HOMME', img: '/assets/male.png' },
          { id: 'female', label: 'UNE FEMME', img: '/assets/female.png' }
        ].map((option) => (
          <Card
            key={option.id}
            className={`p-3 sm:p-6 cursor-pointer transition-all hover:shadow-xl ${
              formData.gender === option.id ? 'ring-2 ring-orange-500' : ''
            }`}
            onClick={() => setFormData({ ...formData, gender: option.id })}
          >
            <div className="aspect-square relative mb-2 sm:mb-4">
              <img
                src={option.img}
                alt={option.label}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-base sm:text-xl font-medium">{option.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4 sm:space-y-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-orange-500 text-center">Quel est votre statut matrimonial ?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto">
        {[
          { id: 'single', label: 'CÉLIBATAIRE' },
          { id: 'married', label: 'MARIÉ(E)' },
          { id: 'divorced', label: 'DIVORCÉ(E)' },
          { id: 'widowed', label: 'VEUF(VE)' }
        ].map((option) => (
          <Card
            key={option.id}
            className={`p-3 sm:p-6 cursor-pointer transition-all hover:shadow-xl ${
              formData.maritalStatus === option.id ? 'ring-2 ring-orange-500' : ''
            }`}
            onClick={() => setFormData({ ...formData, maritalStatus: option.id })}
          >
            <p className="text-center text-base sm:text-xl font-medium">{option.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-4 sm:space-y-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-orange-500 text-center">Quel est votre régime social ?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto">
        {[
          { id: 'salarie', label: 'SALARIÉ' },
          { id: 'retraite', label: 'RETRAITÉ' },
          { id: 'tns', label: 'TNS - INDÉPENDANT' },
          { id: 'chef', label: 'CHEF D\'ENTREPRISE' },
          { id: 'etudiant', label: 'ÉTUDIANT' },
          { id: 'sans_emploi', label: 'SANS EMPLOI' },
          { id: 'fonctionnaire', label: 'FONCTIONNAIRE' },
          { id: 'agent_territorial', label: 'AGENT TERRITORIAL' },
          { id: 'agricole', label: 'EXPLOITANT AGRICOLE' },
          { id: 'alsace', label: 'ALSACE - MOSELLE' }
        ].map((option) => (
          <Card
            key={option.id}
            className={`p-3 sm:p-6 cursor-pointer transition-all hover:shadow-xl ${
              formData.socialRegime === option.id ? 'ring-2 ring-orange-500' : ''
            }`}
            onClick={() => setFormData({ ...formData, socialRegime: option.id })}
          >
            <p className="text-center text-base sm:text-xl font-medium">{option.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="space-y-4 sm:space-y-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-orange-500 text-center">
        Quel niveau de remboursement souhaitez-vous ?
      </h2>
      <p className="text-base sm:text-xl text-gray-600 text-center">
        Evaluez vos besoins sur ces quatre principaux postes de santé afin de vous proposer des formules adaptées.
      </p>
      <div className="space-y-6 sm:space-y-10 max-w-3xl mx-auto">
        {[
          {
            label: 'Médecine',
            options: [
              { id: 'med-100', value: '100%', label: '100%', subLabel: 'Minimum' },
              { id: 'med-150', value: '150%', label: '150%', subLabel: 'Moyen' },
              { id: 'med-200', value: '200%', label: '200%', subLabel: 'Elevé' },
              { id: 'med-300', value: '300%', label: '+300%', subLabel: 'Maximum' }
            ],
            field: 'medicine'
          },
          {
            label: 'Dentaire',
            options: [
              { id: 'dent-100', value: '100%', label: '100%', subLabel: 'Minimum' },
              { id: 'dent-200', value: '200%', label: '200%', subLabel: 'Moyen' },
              { id: 'dent-300', value: '300%', label: '300%', subLabel: 'Elevé' },
              { id: 'dent-400', value: '400%', label: '+400%', subLabel: 'Maximum' }
            ],
            field: 'dental'
          },
          {
            label: 'Optique',
            options: [
              { id: 'opt-50', value: '50€', label: '50€', subLabel: 'Minimum' },
              { id: 'opt-150', value: '150€', label: '150€', subLabel: 'Moyen' },
              { id: 'opt-250', value: '250€', label: '250€', subLabel: 'Elevé' },
              { id: 'opt-300', value: '300€', label: '+300€', subLabel: 'Maximum' }
            ],
            field: 'optical'
          },
          {
            label: 'Hospitalisation',
            options: [
              { id: 'hosp-100', value: '100%', label: '100%', subLabel: 'Minimum' },
              { id: 'hosp-175', value: '175%', label: '175%', subLabel: 'Moyen' },
              { id: 'hosp-250', value: '250%', label: '250%', subLabel: 'Elevé' },
              { id: 'hosp-250-plus', value: '+250%', label: '+250%', subLabel: 'Maximum' }
            ],
            field: 'hospitalization'
          }
        ].map((category) => (
          <div key={category.field} className="space-y-2 sm:space-y-4">
            <div className="text-lg sm:text-xl font-medium">{category.label}</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
              {category.options.map((option) => (
                <Card
                  key={option.id}
                  className={`p-3 sm:p-6 cursor-pointer transition-all hover:shadow-xl ${
                    formData.reimbursementLevels[category.field as keyof typeof formData.reimbursementLevels] === option.value
                      ? 'ring-2 ring-orange-500'
                      : ''
                  }`}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      reimbursementLevels: {
                        ...formData.reimbursementLevels,
                        [category.field]: option.value
                      }
                    })
                  }
                >
                  <div className="text-center space-y-1 sm:space-y-2">
                    <p className="text-base sm:text-lg font-medium">{option.label}</p>
                    <p className="text-sm sm:text-base text-gray-500">{option.subLabel}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep7 = () => (
    <div className="space-y-4 sm:space-y-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-orange-500 text-center">Infos</h2>
      <p className="text-base sm:text-xl text-gray-600 text-center">Dernière étape avant d'accéder aux offres.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div>
          <label className="block text-base sm:text-lg font-medium mb-1 sm:mb-2">Code postal</label>
          <Input
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            placeholder="Code postal"
            className="w-full text-base sm:text-lg p-2 sm:p-3"
            required
          />
        </div>
        <div>
          <label className="block text-base sm:text-lg font-medium mb-1 sm:mb-2">Ville</label>
          <Input
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Ville"
            className="w-full text-base sm:text-lg p-2 sm:p-3"
            required
          />
          </div>
      </div>

      <div>
        <label className="block text-base sm:text-lg font-medium mb-1 sm:mb-2">Adresse</label>
        <Input
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Adresse"
          className="w-full text-base sm:text-lg p-2 sm:p-3"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div>
          <label className="block text-base sm:text-lg font-medium mb-1 sm:mb-2">Téléphone</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3">
              <img 
                src="/assets/france-flag-png-xl.png" 
                alt="France" 
                className="h-4 w-6 sm:h-5 sm:w-7"
              />
            </div>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+33"
              className="w-full text-base sm:text-lg p-2 sm:p-3 pl-10 sm:pl-12"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-base sm:text-lg font-medium mb-1 sm:mb-2">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full text-base sm:text-lg p-2 sm:p-3"
            required
          />
        </div>
      </div>

      <div className="flex items-start sm:items-center gap-2 sm:gap-3">
        <input
          type="checkbox"
          id="acceptOffers"
          name="acceptOffers"
          checked={formData.acceptOffers}
          onChange={(e) => setFormData({
            ...formData,
            acceptOffers: e.target.checked
          })}
          className="h-4 w-4 sm:h-5 sm:w-5 mt-1 sm:mt-0 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
        />
        <label htmlFor="acceptOffers" className="text-sm sm:text-lg text-gray-600">
          J'accepte de recevoir les offres des partenaires annonceurs.
        </label>
      </div>
    </div>
  );

  return (
<div className="container-styles">      
  <Toaster 
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: '16px',
            padding: '16px',
            borderRadius: '8px',
          },
        }} 
      />
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-6">
        <Card className="p-4 sm:p-8 shadow-2xl">
          {step === 1 && renderStep3()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep1()}
          {step === 4 && renderStep4()}
          {step === 5 && renderStep5()}
          {step === 6 && renderStep6()}
          {step === 7 && renderStep7()}

          <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-12 gap-3 sm:gap-4">
            {step > 1 && (
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-base sm:text-lg px-4 sm:px-8 py-2 sm:py-3"
              >
                PRÉCÉDENT
              </Button>
            )}
            {step < 7 && (
              <Button
                onClick={handleNext}
                className="w-full sm:w-auto ml-0 sm:ml-auto bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg px-4 sm:px-8 py-2 sm:py-3"
              >
                SUIVANT
              </Button>
            )}
            {step === 7 && (
              <Button
                onClick={handleSubmit}
                className="w-full sm:w-auto ml-0 sm:ml-auto bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg px-4 sm:px-8 py-2 sm:py-3"
              >
                VOIR LES OFFRES
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InsuranceForm;
