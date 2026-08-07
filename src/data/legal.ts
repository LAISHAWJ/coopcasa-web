// src/data/legal.ts

/**
 * Contenido ficticio/genérico para el modal de Términos y Condiciones /
 * Política de Privacidad (src/shared/components/LegalModal.astro).
 *
 * IMPORTANTE: este texto es simulado, con estructura típica de este tipo de
 * documento. Tecnología debe reemplazarlo por los Términos y la Política de
 * Privacidad oficiales de COOPCASA antes de publicar en producción. No
 * contiene datos legales reales (fechas, correos, teléfonos, etc.).
 */

/** Id del modal (src/shared/ui/Modal.astro). Cualquier enlace del sitio puede
 * abrirlo con `data-modal-open={LEGAL_MODAL_ID}` y, opcionalmente,
 * `data-modal-payload="terms"` o `"privacy"` para elegir la pestaña inicial. */
export const LEGAL_MODAL_ID = 'legal-info';

/** Textos de la interfaz del modal (pestañas y botón de cierre). */
export const legalModalContent = {
  tabs: {
    terms: 'Términos y Condiciones',
    privacy: 'Política de Privacidad',
  },
  closeLabel: 'Cerrar',
};

export interface LegalDocumentSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  intro: string;
  sections: LegalDocumentSection[];
}

export const legalDocuments: { terms: LegalDocument; privacy: LegalDocument } = {
  terms: {
    title: 'Términos y Condiciones',
    intro:
      'Estos Términos y Condiciones establecen las reglas generales de uso de los servicios de COOPCASA. Al continuar con tu proceso de afiliación, confirmas que los has leído y estás de acuerdo con ellos.',
    sections: [
      {
        heading: '1. Aceptación de los Términos',
        paragraphs: [
          'Al registrarte como socio o utilizar los servicios de COOPCASA, aceptas cumplir estos Términos y Condiciones, así como las políticas internas y estatutos que rigen a la cooperativa.',
          'Si no estás de acuerdo con alguna parte de estos Términos, no debes completar tu proceso de afiliación.',
        ],
      },
      {
        heading: '2. Descripción del servicio',
        paragraphs: [
          'COOPCASA ofrece servicios de ahorro, crédito y beneficios asociativos a sus socios, sujetos a la evaluación y aprobación correspondiente según los reglamentos internos vigentes.',
        ],
      },
      {
        heading: '3. Elegibilidad y registro como socio',
        paragraphs: [
          'Para afiliarte debes proporcionar información veraz, completa y actualizada en el formulario de registro. COOPCASA se reserva el derecho de verificar dicha información antes de aprobar la afiliación.',
        ],
      },
      {
        heading: '4. Responsabilidades del socio',
        paragraphs: [
          'El socio se compromete a mantener actualizados sus datos de contacto y a hacer un uso adecuado de los productos y servicios de la cooperativa.',
          'El incumplimiento de los reglamentos internos puede resultar en la suspensión temporal o definitiva de los servicios asociados.',
        ],
      },
      {
        heading: '5. Propiedad intelectual',
        paragraphs: [
          'Los contenidos, marcas y materiales publicados en este sitio son propiedad de COOPCASA o de sus respectivos titulares y no pueden reproducirse sin autorización previa.',
        ],
      },
      {
        heading: '6. Modificaciones a estos Términos',
        paragraphs: [
          'COOPCASA podrá actualizar estos Términos en cualquier momento. Los cambios se comunicarán a través de los canales oficiales de la cooperativa y entrarán en vigor a partir de su publicación.',
        ],
      },
      {
        heading: '7. Ley aplicable',
        paragraphs: [
          'Estos Términos se rigen por las leyes de la República Dominicana y por los estatutos internos de COOPCASA como cooperativa de ahorro y crédito.',
        ],
      },
      {
        heading: '8. Contacto',
        paragraphs: [
          'Para consultas sobre estos Términos y Condiciones, puedes comunicarte a través de los canales oficiales de contacto de COOPCASA.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de Privacidad',
    intro:
      'Esta Política de Privacidad describe, de forma general, cómo COOPCASA recopila, usa y protege la información personal de sus socios y visitantes del sitio.',
    sections: [
      {
        heading: '1. Información que recopilamos',
        paragraphs: [
          'Recopilamos la información que proporcionas voluntariamente en nuestros formularios (por ejemplo, nombre, cédula, teléfono, correo y dirección) con el fin de gestionar tu proceso de afiliación y los servicios cooperativos.',
        ],
      },
      {
        heading: '2. Cómo usamos tu información',
        paragraphs: [
          'Utilizamos tu información para evaluar solicitudes de afiliación, brindarte atención personalizada y mantenerte informado sobre los servicios de la cooperativa.',
        ],
      },
      {
        heading: '3. Compartición de información con terceros',
        paragraphs: [
          'No compartimos tu información personal con terceros para fines comerciales. Solo podrá compartirse cuando exista una obligación legal o regulatoria que así lo requiera.',
        ],
      },
      {
        heading: '4. Seguridad de la información',
        paragraphs: [
          'COOPCASA implementa medidas razonables, administrativas y técnicas, para proteger tu información personal contra accesos no autorizados, pérdida o uso indebido.',
        ],
      },
      {
        heading: '5. Derechos del titular de los datos',
        paragraphs: [
          'Puedes solicitar acceso, actualización o corrección de tus datos personales en cualquier momento a través de los canales oficiales de contacto de COOPCASA.',
        ],
      },
      {
        heading: '6. Conservación de los datos',
        paragraphs: [
          'Conservamos tu información personal durante el tiempo necesario para cumplir con los fines descritos en esta Política y con las obligaciones legales aplicables.',
        ],
      },
      {
        heading: '7. Cambios a esta Política',
        paragraphs: [
          'Esta Política puede actualizarse periódicamente. Cualquier cambio relevante será comunicado a través de los canales oficiales de la cooperativa.',
        ],
      },
      {
        heading: '8. Contacto',
        paragraphs: [
          'Para ejercer tus derechos o realizar consultas sobre el tratamiento de tu información, puedes comunicarte a través de los canales oficiales de contacto de COOPCASA.',
        ],
      },
    ],
  },
};
