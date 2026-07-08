/**
 * Mecanismo genérico de apertura/cierre para shared/ui/Modal.astro (usado por
 * el ServiceModal de la home y el JoinPanel de "Hazte Socio"). Basado en
 * delegación de eventos + atributos `data-*`, sin dependencias externas.
 *
 * Marcado esperado:
 * - Disparador de apertura: `data-modal-open="<id>"` (opcional `data-modal-payload`)
 * - Disparador de cierre:   `data-modal-close="<id>"`
 * - Contenedor del modal:   `data-modal="<id>" data-state="closed|open"`
 * - Superficie de fondo:    `data-modal-backdrop="<id>"`
 */

declare global {
  interface Window {
    __coopcasaModalTriggersRegistered?: boolean;
  }
}

export function openModal(id: string, payload?: string): void {
  const modal = document.querySelector<HTMLElement>(`[data-modal="${id}"]`);
  if (!modal) return;
  modal.dataset.state = 'open';
  document.body.style.overflow = 'hidden';
  modal.dispatchEvent(new CustomEvent('modal:open', { detail: payload }));
}

export function closeModal(id: string): void {
  const modal = document.querySelector<HTMLElement>(`[data-modal="${id}"]`);
  if (!modal) return;
  modal.dataset.state = 'closed';
  document.body.style.overflow = '';
}

function closeAllOpenModals(): void {
  document.querySelectorAll<HTMLElement>('[data-modal][data-state="open"]').forEach((modal) => {
    if (modal.dataset.modal) closeModal(modal.dataset.modal);
  });
}

export function registerModalTriggers(): void {
  if (window.__coopcasaModalTriggersRegistered) return;
  window.__coopcasaModalTriggersRegistered = true;

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const actionable = target.closest<HTMLElement>(
      '[data-modal-open], [data-modal-close], [data-modal-backdrop]',
    );
    if (!actionable) return;

    // Un mismo elemento puede cerrar un modal y abrir otro a la vez (ej. pasar
    // del modal de servicio al panel de "Hazte Socio"); ambas acciones corren
    // en el mismo click en vez de excluirse mutuamente.
    if (actionable.dataset.modalClose) {
      event.preventDefault();
      closeModal(actionable.dataset.modalClose);
    }
    if (actionable.dataset.modalOpen) {
      event.preventDefault();
      openModal(actionable.dataset.modalOpen, actionable.dataset.modalPayload);
    }
    if (actionable.dataset.modalBackdrop) {
      closeModal(actionable.dataset.modalBackdrop);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAllOpenModals();
  });
}
