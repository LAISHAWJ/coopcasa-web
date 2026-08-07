# Modal de Términos y Condiciones / Política de Privacidad — Plan de Implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir los enlaces placeholder "Términos y Condiciones" / "Política de Privacidad" (checkbox de "Hazte Socio" y footer del sitio) en triggers de un modal reutilizable con contenido ficticio/genérico, sin tocar el diseño general de la Landing ni la lógica de envío del formulario.

**Architecture:** Se reutiliza el shell de modal ya existente (`src/shared/ui/Modal.astro` + `src/shared/utils/modal.ts`, basado en atributos `data-modal-*`). Un nuevo componente `LegalModal.astro` vive en `src/shared/components/` (junto a `Footer.astro`) y se monta una sola vez en `MainLayout.astro`, mostrando dos paneles alternables (Términos / Privacidad) siguiendo el mismo patrón de `ServiceModal.astro` (paneles + evento `modal:open` con payload). El contenido vive separado en `src/data/legal.ts`.

**Tech Stack:** Astro 7 (sin frameworks JS), TypeScript, Tailwind CSS v4 (tokens en `src/styles/global.css`), scripts inline vanilla (sin librerías nuevas).

## Global Constraints

- No inventar datos legales reales (nombres de dominio, emails, teléfonos, fechas de vigencia) — todo el contenido de `legal.ts` es genérico/ficticio, claramente reemplazable.
- No agregar dependencias nuevas ni frameworks (React/Vue/librerías de modal) — reutilizar `Modal.astro` y `modal.ts` existentes.
- No modificar la lógica de validación ni de envío de `MemberForm.astro` (`src/features/members/validation/memberValidation.ts`, `src/features/members/services/submitMemberApplication.ts` quedan intactos).
- No cambiar el diseño general de la Landing — el modal debe usar los tokens y patrones visuales ya existentes (`bg-white/97 backdrop-blur-xl rounded-[26px]`, `font-display`, colores `brand-*`/`ink-*`/`body-*`).
- Este proyecto no tiene suite de pruebas automatizadas para UI (`package.json` no define `test`); la verificación de cada tarea es `npx astro check`, `npm run build` y prueba manual en navegador vía `astro dev --background` (por CLAUDE.md).
- Node >=22.12.0, Astro 7, sin content collections — el contenido de la Landing vive en archivos TS planos bajo `src/data/`, como ya se hace en `membersPage.ts`/`footer.ts`.

---

### Task 1: Contenido ficticio + constante del modal (`src/data/legal.ts`)

**Files:**
- Create: `src/data/legal.ts`

**Interfaces:**
- Produces: `LEGAL_MODAL_ID: string` (valor `'legal-info'`), `legalModalContent: { tabs: { terms: string; privacy: string }; closeLabel: string }`, `legalDocuments: { terms: LegalDocument; privacy: LegalDocument }` donde `LegalDocument = { title: string; intro: string; sections: { heading: string; paragraphs: string[] }[] }`.

- [ ] **Step 1: Crear el archivo con el contenido y la constante**

```ts
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
```

- [ ] **Step 2: Verificar que el archivo compila**

Run: `npx astro check`
Expected: `0 errors` (el archivo no tiene consumidores todavía, pero debe tipar sin errores).

- [ ] **Step 3: Commit**

```bash
git add src/data/legal.ts
git commit -m "feat: agregar contenido ficticio de Términos y Privacidad"
```

---

### Task 2: Componente `LegalModal.astro` (shared)

**Files:**
- Create: `src/shared/components/LegalModal.astro`

**Interfaces:**
- Consumes: `LEGAL_MODAL_ID`, `legalModalContent`, `legalDocuments`, `LegalDocument` desde `@data/legal` (Task 1); `Modal` (`src/shared/ui/Modal.astro`, prop `id: string`, slot por defecto); `Icon` (`src/shared/ui/Icon.astro`, props `name: string`, `size?: number`, `color?: string`).
- Produces: componente `<LegalModal />` sin props, renderiza `<div data-modal={LEGAL_MODAL_ID}>` (vía `Modal`) escuchando `modal:open` con `detail` `'terms' | 'privacy' | undefined` para elegir la pestaña inicial (por defecto `'terms'`).

- [ ] **Step 1: Crear el componente**

```astro
---
// src/shared/components/LegalModal.astro
import Modal from '@shared/ui/Modal.astro';
import Icon from '@shared/ui/Icon.astro';
import { LEGAL_MODAL_ID, legalModalContent, legalDocuments } from '@data/legal';
import type { LegalDocument } from '@data/legal';

const tabs: Array<{ key: 'terms' | 'privacy'; label: string; document: LegalDocument }> = [
  { key: 'terms', label: legalModalContent.tabs.terms, document: legalDocuments.terms },
  { key: 'privacy', label: legalModalContent.tabs.privacy, document: legalDocuments.privacy },
];
---

<Modal id={LEGAL_MODAL_ID}>
  <div
    class="relative overflow-hidden rounded-t-[26px] bg-[linear-gradient(135deg,#0d1f14,#14361b)] px-6 pt-8 pb-6 sm:px-9"
  >
    <div
      class="pointer-events-none absolute -top-[60px] -right-[30px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(43,168,44,0.4),transparent_65%)]"
    >
    </div>
    <button
      type="button"
      data-modal-close={LEGAL_MODAL_ID}
      aria-label="Cerrar"
      class="absolute top-[22px] right-[22px] flex h-[38px] w-[38px] items-center justify-center rounded-[11px] border border-white/18 bg-white/10 text-white transition-colors hover:bg-white/22"
    >
      <Icon name="close" size={18} />
    </button>
    <div class="relative z-[1] flex flex-wrap gap-2.5 pr-12">
      {
        tabs.map((tab) => (
          <button
            type="button"
            data-legal-tab={tab.key}
            class="rounded-full border border-white/25 bg-white/10 px-4 py-[7px] text-[13px] font-semibold text-white/75 transition-colors data-[active=true]:border-white data-[active=true]:bg-white data-[active=true]:text-ink-900"
          >
            {tab.label}
          </button>
        ))
      }
    </div>
  </div>

  {
    tabs.map((tab) => (
      <div data-legal-panel={tab.key} class="hidden px-6 pt-7 pb-8 sm:px-9">
        <h3 class="mb-2.5 text-xl font-extrabold tracking-tight text-ink-900 sm:text-[22px]">
          {tab.document.title}
        </h3>
        <p class="mb-6 text-sm leading-relaxed text-body-400">{tab.document.intro}</p>
        <div class="flex flex-col gap-5">
          {tab.document.sections.map((section) => (
            <div>
              <h4 class="mb-1.5 font-display text-[14px] font-bold text-ink-900">
                {section.heading}
              </h4>
              <div class="flex flex-col gap-2">
                {section.paragraphs.map((paragraph) => (
                  <p class="text-[13.5px] leading-relaxed text-body-500">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ))
  }

  <div class="flex justify-end border-t border-ink-900/8 px-6 py-4 sm:px-9">
    <button
      type="button"
      data-modal-close={LEGAL_MODAL_ID}
      class="rounded-[13px] bg-[linear-gradient(135deg,#22a024,#2fb531)] px-6 py-[11px] font-display text-[14px] font-bold text-white shadow-[0_10px_26px_rgba(43,168,44,0.34)]"
    >
      {legalModalContent.closeLabel}
    </button>
  </div>
</Modal>

<script>
  const modal = document.querySelector<HTMLElement>('[data-modal="legal-info"]');
  const tabButtons = modal?.querySelectorAll<HTMLElement>('[data-legal-tab]');
  const panels = modal?.querySelectorAll<HTMLElement>('[data-legal-panel]');

  function showLegalPanel(key: string): void {
    panels?.forEach((panel) => {
      panel.classList.toggle('hidden', panel.dataset.legalPanel !== key);
    });
    tabButtons?.forEach((button) => {
      button.dataset.active = String(button.dataset.legalTab === key);
    });
    if (modal) modal.scrollTop = 0;
  }

  modal?.addEventListener('modal:open', ((event: CustomEvent<string | undefined>) => {
    showLegalPanel(event.detail === 'privacy' ? 'privacy' : 'terms');
  }) as EventListener);

  tabButtons?.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.legalTab) showLegalPanel(button.dataset.legalTab);
    });
  });
</script>
```

- [ ] **Step 2: Verificar tipos**

Run: `npx astro check`
Expected: `0 errors`.

- [ ] **Step 3: Commit**

```bash
git add src/shared/components/LegalModal.astro
git commit -m "feat: agregar LegalModal con pestañas de Términos y Privacidad"
```

---

### Task 3: Montar `LegalModal` en el layout principal

**Files:**
- Modify: `src/shared/layouts/MainLayout.astro:1-8` (imports), `:87-93` (body)

**Interfaces:**
- Consumes: `<LegalModal />` (Task 2, sin props).

- [ ] **Step 1: Importar y renderizar el componente**

En `src/shared/layouts/MainLayout.astro`, agregar el import junto a los demás componentes compartidos:

```astro
import JoinPanel from '@features/members/components/JoinPanel.astro';
import LegalModal from '@shared/components/LegalModal.astro';
```

Y renderizarlo junto a `JoinPanel` en el body, respetando el mismo guard `showChrome`:

```astro
    {showChrome && <Footer />}
    {showChrome && <WhatsAppButton />}
    {showChrome && <JoinPanel />}
    {showChrome && <LegalModal />}
```

- [ ] **Step 2: Verificar que compila**

Run: `npx astro check`
Expected: `0 errors`.

- [ ] **Step 3: Verificación manual en navegador**

Run: `astro dev --background` (según `CLAUDE.md`), abrir `http://localhost:4321/` en el navegador y confirmar que la página carga sin errores en la consola. Luego: `astro dev stop`.

- [ ] **Step 4: Commit**

```bash
git add src/shared/layouts/MainLayout.astro
git commit -m "feat: montar LegalModal en MainLayout"
```

---

### Task 4: Enlazar el checkbox de "Hazte Socio" al modal

**Files:**
- Modify: `src/features/members/components/MemberForm.astro:1-8` (imports), `:88-93` (checkbox)

**Interfaces:**
- Consumes: `LEGAL_MODAL_ID` desde `@data/legal` (Task 1).

- [ ] **Step 1: Importar la constante del modal**

```astro
import { referralSourceOptions } from '@data/members';
import { joinPanelContent, memberFormFields } from '@data/membersPage';
import { LEGAL_MODAL_ID } from '@data/legal';
```

- [ ] **Step 2: Reemplazar los enlaces placeholder del checkbox**

Reemplazar las líneas 88-93 actuales:

```astro
  <Checkbox id="member-acceptedTerms" name="acceptedTerms" required align="start">
    {joinPanelContent.termsPrefix}
    <a href="#" class="font-semibold text-brand-800">{joinPanelContent.termsLink}</a>
    {joinPanelContent.termsMiddle}
    <a href="#" class="font-semibold text-brand-800">{joinPanelContent.privacyLink}</a>.
  </Checkbox>
```

por:

```astro
  <Checkbox id="member-acceptedTerms" name="acceptedTerms" required align="start">
    {joinPanelContent.termsPrefix}
    <a
      href="#"
      data-modal-open={LEGAL_MODAL_ID}
      data-modal-payload="terms"
      class="font-semibold text-brand-800 hover:underline"
    >
      {joinPanelContent.termsLink}
    </a>
    {joinPanelContent.termsMiddle}
    <a
      href="#"
      data-modal-open={LEGAL_MODAL_ID}
      data-modal-payload="privacy"
      class="font-semibold text-brand-800 hover:underline"
    >
      {joinPanelContent.privacyLink}
    </a>.
  </Checkbox>
```

- [ ] **Step 3: Verificar que compila**

Run: `npx astro check`
Expected: `0 errors`.

- [ ] **Step 4: Verificación manual en navegador**

Run: `astro dev --background`. En `http://localhost:4321/hazte-socio`, abrir el panel "Hazte Socio", y confirmar:
- Clic en "Términos y Condiciones" abre `LegalModal` en la pestaña de Términos, sin marcar el checkbox.
- Clic en "Política de Privacidad" abre el mismo modal en la pestaña de Privacidad, sin marcar el checkbox.
- El checkbox sigue pudiendo marcarse/desmarcarse normalmente al hacer clic fuera de los enlaces.
- Cerrar el modal (botón X o "Cerrar") regresa al formulario sin perder los datos ya ingresados.

Run: `astro dev stop`.

- [ ] **Step 5: Commit**

```bash
git add src/features/members/components/MemberForm.astro
git commit -m "feat: enlazar checkbox de Hazte Socio al modal de Términos/Privacidad"
```

---

### Task 5: Enlazar los enlaces legales del footer al modal

**Files:**
- Modify: `src/data/footer.ts:1-2` (imports), `:36-41` (`legalLinks`)
- Modify: `src/shared/components/Footer.astro:1-15` (imports), `:127-134` (render de `legalLinks`)

**Interfaces:**
- Consumes: `LEGAL_MODAL_ID` desde `@data/legal` (Task 1); `NavLink` desde `@shared/types/nav`.
- Produces: `LegalLink` (interfaz local en `footer.ts`) con campos opcionales `modalId?: string` y `modalPayload?: string`, usados por `Footer.astro` para decidir si el enlace abre el modal o navega normalmente.

- [ ] **Step 1: Extender `legalLinks` en `footer.ts`**

En `src/data/footer.ts`, agregar el import y cambiar el tipo/contenido de `legalLinks`:

```ts
import type { NavLink } from '@shared/types/nav';
import { services } from './services';
import { LEGAL_MODAL_ID } from './legal';

// ...

/** Footer → enlaces legales en la barra inferior. Los de Términos/Privacidad
 * abren `LegalModal` (src/shared/components/LegalModal.astro); "Transparencia"
 * sigue siendo un enlace normal hasta que exista esa página. */
export interface LegalLink extends NavLink {
  modalId?: string;
  modalPayload?: string;
}

export const legalLinks: LegalLink[] = [
  { label: 'Términos', href: '#', modalId: LEGAL_MODAL_ID, modalPayload: 'terms' },
  { label: 'Privacidad', href: '#', modalId: LEGAL_MODAL_ID, modalPayload: 'privacy' },
  // Reemplazar "#" por la ruta real cuando exista la página de Transparencia.
  { label: 'Transparencia', href: '#' },
];
```

- [ ] **Step 2: Actualizar el render en `Footer.astro`**

Reemplazar el bloque actual (alrededor de las líneas 127-134):

```astro
        {
          legalLinks.map((link) => (
            <a href={link.href} class="transition-colors duration-200 hover:text-white">
              {link.label}
            </a>
          ))
        }
```

por:

```astro
        {
          legalLinks.map((link) => (
            <a
              href={link.href}
              data-modal-open={link.modalId}
              data-modal-payload={link.modalPayload}
              class="transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))
        }
```

(`data-modal-open`/`data-modal-payload` quedan como atributos vacíos y sin efecto en el enlace "Transparencia", que no define `modalId`.)

- [ ] **Step 3: Verificar que compila**

Run: `npx astro check`
Expected: `0 errors`.

- [ ] **Step 4: Verificación manual en navegador**

Run: `astro dev --background`. En cualquier página, ir al footer y confirmar:
- Clic en "Términos" abre `LegalModal` en la pestaña de Términos.
- Clic en "Privacidad" abre el mismo modal en la pestaña de Privacidad.
- Clic en "Transparencia" no abre el modal (sigue siendo un enlace `href="#"` normal).

Run: `astro dev stop`.

- [ ] **Step 5: Commit**

```bash
git add src/data/footer.ts src/shared/components/Footer.astro
git commit -m "feat: enlazar enlaces legales del footer al modal de Términos/Privacidad"
```

---

### Task 6: Verificación final (build + responsive)

**Files:** Ninguno (solo verificación).

- [ ] **Step 1: Build de producción**

Run: `npm run build`
Expected: build completa sin errores.

- [ ] **Step 2: Verificación responsive manual**

Run: `astro dev --background`. Con las herramientas de dispositivo del navegador (o redimensionando la ventana), abrir `LegalModal` desde el checkbox de "Hazte Socio" y desde el footer en tres anchos: desktop (≥1280px), tablet (~768px) y mobile (~375px). Confirmar en cada uno:
- El modal no genera scroll horizontal en la página.
- El contenido del modal tiene scroll interno vertical cuando excede el alto visible (`max-h-[88vh]` del `Modal` compartido).
- Las pestañas y el botón de cierre siguen siendo accesibles y legibles en mobile.

Run: `astro dev stop`.

- [ ] **Step 3: Confirmar que el checkbox y el envío del formulario siguen intactos**

En `/hazte-socio`, completar el formulario sin marcar el checkbox y confirmar que muestra el error de validación existente ("Debes aceptar los Términos y Condiciones."); luego marcarlo y confirmar que el formulario permite continuar con el envío como antes.

- [ ] **Step 4: Commit final (si hubo ajustes)**

Si algún ajuste fue necesario durante la verificación, confirmarlo con un commit adicional describiendo el fix puntual.
