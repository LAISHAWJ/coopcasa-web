/**
 * Clases Tailwind compartidas por todos los controles de formulario
 * (Input, Select, Textarea) para que el estilo de campo sea idéntico en
 * todo el sitio, tal como en el prototipo (`inpStyle` / `.fld:focus`).
 */
export const fieldClasses =
  'w-full rounded-xl border-[1.5px] border-ink-900/10 bg-surface-50/90 px-[15px] py-[13px] text-[14.5px] text-ink-900 transition-[border-color,box-shadow] duration-200 placeholder:text-body-100 focus:border-brand-600 focus:shadow-[0_0_0_4px_rgba(43,168,44,0.12)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60';

export const fieldErrorClasses = 'border-danger focus:border-danger focus:shadow-[0_0_0_4px_rgba(224,72,61,0.12)]';
