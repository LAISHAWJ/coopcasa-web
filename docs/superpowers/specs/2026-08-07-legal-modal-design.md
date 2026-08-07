# Modal de Términos y Condiciones / Política de Privacidad — Diseño

## Contexto

El formulario "Hazte Socio" (`src/features/members/components/MemberForm.astro`) tiene un
checkbox de aceptación con dos frases — "Términos y Condiciones" y "Política de Privacidad" —
que hoy son enlaces `<a href="#">` sin destino. El footer del sitio (`src/data/footer.ts`) tiene
el mismo problema: enlaces "Términos" y "Privacidad" apuntando a `#`.

Se requiere convertir ambos pares de enlaces en triggers de un modal que muestre contenido
ficticio/genérico de Términos y Política de Privacidad, consistente con el diseño visual actual,
sin backend ni servicios externos, y con el contenido separado de la estructura visual para que
Tecnología lo reemplace fácilmente más adelante.

## Alcance

- Formulario "Hazte Socio" (los dos enlaces del checkbox).
- Footer del sitio (los enlaces "Términos" y "Privacidad").
- Fuera de alcance: contenido legal real, backend, servicios externos, cambios al diseño general
  de la Landing o a la lógica de validación/envío del formulario.

## Arquitectura

Se reutiliza la infraestructura de modales ya existente en el proyecto
(`src/shared/ui/Modal.astro` + `src/shared/utils/modal.ts`, basada en atributos `data-modal-*` y
delegación de eventos, sin dependencias externas), siguiendo el mismo patrón de paneles
intercambiables que usa `ServiceModal.astro` (`data-service-panel` + evento `modal:open` con
payload).

### Componentes nuevos

- **`src/features/members/components/LegalModal.astro`**: modal centrado (`<Modal
  placement="center">`) con dos paneles — Términos y Privacidad — alternables mediante pestañas
  tipo pill, sin cerrar el modal. Usa `data-legal-panel="terms"|"privacy"` y escucha
  `modal:open` para mostrar el panel indicado por el payload (por defecto `"terms"`).
- **`LEGAL_MODAL_ID`**: nueva constante `'legal-info'` en `src/features/members/constants.ts`.

`LegalModal` se renderiza una única vez, dentro de `JoinPanel.astro` (junto al modal de "Hazte
Socio"), ya que agrupa a los triggers del formulario. Al ser un `id` de modal global
(`data-modal="legal-info"`), el footer puede abrir el mismo modal desde cualquier página sin
necesidad de una segunda instancia — igual que `JOIN_PANEL_MODAL_ID` puede abrirse desde
`ServiceModal` en la home.

### Datos (contenido reemplazable)

Nuevo archivo `src/data/legal.ts`, encabezado con un comentario explícito marcando el contenido
como ficticio/genérico. Exporta:

```ts
export const legalModalContent = {
  tabs: { terms: 'Términos y Condiciones', privacy: 'Política de Privacidad' },
  closeLabel: 'Cerrar',
};

export const legalDocuments = {
  terms: { title, intro, sections: [{ heading, paragraphs: string[] }] },
  privacy: { title, intro, sections: [{ heading, paragraphs: string[] }] },
};
```

Secciones genéricas típicas de este tipo de documento (aceptación, uso del servicio, cuentas y
responsabilidades del socio, tratamiento de datos, cambios al documento, ley aplicable, contacto),
sin inventar correos, teléfonos, direcciones ni fechas reales — el texto usa lenguaje genérico
("a través de los canales oficiales de contacto de COOPCASA") en vez de datos simulados que
parezcan reales.

`LegalModal.astro` solo itera sobre `sections` — cambiar el contenido no requiere tocar el
componente.

### Wiring

- **`MemberForm.astro`**: los dos `<a href="#">` dentro del `Checkbox` pasan a
  `data-modal-open={LEGAL_MODAL_ID} data-modal-payload="terms"` (y `"privacy"` en el segundo).
  El manejador global de `registerModalTriggers()` ya llama `event.preventDefault()` en clics con
  `data-modal-open`, por lo que el enlace no navega. Un clic en un enlace anidado dentro del
  `<label>` del checkbox no activa el control asociado (comportamiento estándar del navegador +
  `preventDefault`), así que el checkbox no se marca automáticamente.
- **`src/data/footer.ts`**: los `NavLink` de "Términos" y "Privacidad" (hoy `href: '#'`) se
  convierten en triggers del mismo modal. Si el componente que renderiza `legalLinks` en el footer
  espera `href`, se ajusta para soportar también un trigger de modal (mismo mecanismo `data-modal-*`
  ya usado en botones del sitio).
- Sin cambios en la lógica de validación o envío del formulario.

## Diseño visual del modal

- Header con título + pestañas tipo pill (Términos / Privacidad) + botón de cierre
  (`data-modal-close`), estilo consistente con el header de `ServiceModal`.
- Cuerpo con scroll interno (`max-h-[70vh] overflow-y-auto`), jerarquía tipográfica clara
  (`font-display` para encabezados de sección, `text-body-500` para párrafos).
- Responsive: mismo comportamiento que `ServiceModal` (overlay `p-8`, `max-w-full`), sin overflow
  horizontal en mobile/tablet/desktop.

## Testing / verificación

- Confirmar que el checkbox conserva su comportamiento (marcar/desmarcar, validación requerida).
- Confirmar que ambos enlaces del formulario abren el modal en la pestaña correcta.
- Confirmar que los enlaces del footer abren el mismo modal en la pestaña correcta.
- Verificar responsive (desktop/tablet/mobile) y ausencia de overflow horizontal.
- `astro build` (o `astro check`) sin errores.
