import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emailStyles = {
  container: `
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
  `,
  header: `
    background-color: #f97316;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px 8px 0 0;
    margin-bottom: 20px;
  `,
  section: `
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  `,
  sectionTitle: `
    color: #f97316;
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 18px;
    border-bottom: 2px solid #f97316;
    padding-bottom: 8px;
  `,
  field: `
    margin-bottom: 10px;
    color: #4b5563;
  `,
  label: `
    font-weight: bold;
    color: #374151;
  `,
  value: `
    margin-left: 5px;
  `,
  list: `
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  `,
  listItem: `
    padding: 8px 0;
    border-bottom: 1px solid #e5e7eb;
  `,
  footer: `
    text-align: center;
    color: #6b7280;
    font-size: 14px;
    margin-top: 20px;
  `
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Configuration email manquante. Veuillez contacter l\'administrateur.'
        }, 
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Helper functions for translations
    const getSocialRegimeLabel = (regime: string) => {
      const regimes: { [key: string]: string } = {
        'salarie': 'Salarié',
        'retraite': 'Retraité',
        'tns': 'TNS - Indépendant',
        'chef': 'Chef d\'entreprise',
        'etudiant': 'Étudiant',
        'sans_emploi': 'Sans emploi',
        'fonctionnaire': 'Fonctionnaire',
        'agent_territorial': 'Agent territorial',
        'agricole': 'Exploitant agricole',
        'alsace': 'Alsace - Moselle'
      };
      return regimes[regime] || regime;
    };

    const getMaritalStatusLabel = (status: string) => {
      const statuses: { [key: string]: string } = {
        'single': 'Célibataire',
        'married': 'Marié(e)',
        'divorced': 'Divorcé(e)',
        'widowed': 'Veuf(ve)'
      };
      return statuses[status] || status;
    };

    const getInsuranceTypeLabel = (type: string) => {
      const types: { [key: string]: string } = {
        'single': 'Individuelle',
        'couple': 'Couple',
        'parent': 'Parent avec enfants',
        'family': 'Famille complète'
      };
      return types[type] || type;
    };

    const formatDate = (dateString: string) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    };

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nouvelle demande d'assurance santé",
      html: `
        <div style="${emailStyles.container}">
          <div style="${emailStyles.header}">
            <h1 style="margin: 0;">Nouvelle demande d'assurance santé</h1>
            <p style="margin: 10px 0 0 0;">Reçue le ${new Date().toLocaleDateString('fr-FR')}</p>
          </div>

          <div style="${emailStyles.section}">
            <h2 style="${emailStyles.sectionTitle}">Type d'assurance</h2>
            <p style="${emailStyles.field}">${getInsuranceTypeLabel(body.insuranceType)}</p>
          </div>

          <div style="${emailStyles.section}">
            <h2 style="${emailStyles.sectionTitle}">Informations personnelles</h2>
            <div style="${emailStyles.field}">
              <span style="${emailStyles.label}">Nom:</span>
              <span style="${emailStyles.value}">${body.lastName?.toUpperCase()}</span>
            </div>
            <div style="${emailStyles.field}">
              <span style="${emailStyles.label}">Prénom:</span>
              <span style="${emailStyles.value}">${body.firstName}</span>
            </div>
            <div style="${emailStyles.field}">
              <span style="${emailStyles.label}">Date de naissance:</span>
              <span style="${emailStyles.value}">${formatDate(body.birthDate)}</span>
            </div>
            ${body.spouseBirthDate && (body.insuranceType === 'couple' || body.insuranceType === 'family') ? `
              <div style="${emailStyles.field}">
                <span style="${emailStyles.label}">Date de naissance du conjoint:</span>
                <span style="${emailStyles.value}">${formatDate(body.spouseBirthDate)}</span>
              </div>
            ` : ''}
            <div style="${emailStyles.field}">
              <span style="${emailStyles.label}">Genre:</span>
              <span style="${emailStyles.value}">${body.gender === 'male' ? 'Homme' : 'Femme'}</span>
            </div>
            <div style="${emailStyles.field}">
              <span style="${emailStyles.label}">Statut matrimonial:</span>
              <span style="${emailStyles.value}">${getMaritalStatusLabel(body.maritalStatus)}</span>
            </div>
          </div>

          <div style="${emailStyles.section}">
            <h2 style="${emailStyles.sectionTitle}">Régime social</h2>
            <p style="${emailStyles.field}">${getSocialRegimeLabel(body.socialRegime)}</p>
          </div>

          <div style="${emailStyles.section}">
            <h2 style="${emailStyles.sectionTitle}">Niveaux de remboursement souhaités</h2>
            <ul style="${emailStyles.list}">
              <li style="${emailStyles.listItem}"><span style="${emailStyles.label}">Médecine:</span> ${body.reimbursementLevels.medicine}</li>
              <li style="${emailStyles.listItem}"><span style="${emailStyles.label}">Dentaire:</span> ${body.reimbursementLevels.dental}</li>
              <li style="${emailStyles.listItem}"><span style="${emailStyles.label}">Optique:</span> ${body.reimbursementLevels.optical}</li>
              <li style="${emailStyles.listItem}"><span style="${emailStyles.label}">Hospitalisation:</span> ${body.reimbursementLevels.hospitalization}</li>
            </ul>
          </div>

          <div style="${emailStyles.section}">
            <h2 style="${emailStyles.sectionTitle}">Coordonnées</h2>
            <div style="${emailStyles.field}">
              <span style="${emailStyles.label}">Adresse:</span>
              <span style="${emailStyles.value}">${body.address}</span>
            </div>
            <div style="${emailStyles.field}">
              <span style="${emailStyles.label}">Code postal:</span>
              <span style="${emailStyles.value}">${body.postalCode}</span>
            </div>
            <div style="${emailStyles.field}">
              <span style="${emailStyles.label}">Ville:</span>
              <span style="${emailStyles.value}">${body.city}</span>
            </div>
            <div style="${emailStyles.field}">
              <span style="${emailStyles.label}">Téléphone:</span>
              <span style="${emailStyles.value}">${body.phone}</span>
            </div>
            <div style="${emailStyles.field}">
              <span style="${emailStyles.label}">Email:</span>
              <span style="${emailStyles.value}">${body.email}</span>
            </div>
          </div>

          <div style="${emailStyles.footer}">
            ${body.acceptOffers ? 
              '✓ Le client accepte de recevoir les offres des partenaires annonceurs' : 
              '✗ Le client ne souhaite pas recevoir les offres des partenaires annonceurs'}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ 
      success: true,
      message: 'Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.'
    });

  } catch (error) {
    let errorMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.';
    let statusCode = 500;

    if (error instanceof Error) {
      if (error.message.includes('configuration')) {
        errorMessage = 'Erreur de configuration. Veuillez contacter l\'administrateur.';
        statusCode = 400;
      } else if (error.message.includes('authentication')) {
        errorMessage = 'Erreur d\'authentification du service email.';
        statusCode = 401;
      } else if (error.message.includes('network')) {
        errorMessage = 'Problème de connexion. Vérifiez votre connexion internet.';
        statusCode = 503;
      }
    }

    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage
      }, 
      { status: statusCode }
    );
  }
}