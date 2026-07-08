import { fieldErrorClasses } from '@shared/ui/fieldStyles';

const ERROR_CLASSES = fieldErrorClasses.split(' ');

/**
 * Aplica/limpia el estado de error de un campo renderizado con
 * shared/ui/Input.astro, Select.astro, Textarea.astro o Checkbox.astro.
 * Depende de las convenciones `data-field="<name>"` en el control y
 * `id="<control-id>-error"` en el párrafo de error (ambas ya presentes en
 * esos componentes).
 */
export function setFieldError(root: HTMLElement, name: string, message: string): void {
  const field = root.querySelector<HTMLElement>(`[data-field="${name}"]`);
  if (!field) return;

  field.classList.add(...ERROR_CLASSES);
  field.setAttribute('aria-invalid', 'true');

  const errorEl = field.id ? root.querySelector<HTMLElement>(`#${field.id}-error`) : null;
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
  }
}

export function clearFieldErrors(root: HTMLElement): void {
  root.querySelectorAll<HTMLElement>('[data-field]').forEach((field) => {
    field.classList.remove(...ERROR_CLASSES);
    field.setAttribute('aria-invalid', 'false');

    const errorEl = field.id ? root.querySelector<HTMLElement>(`#${field.id}-error`) : null;
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
  });
}

export function focusFirstInvalidField(root: HTMLElement): void {
  root.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
}
