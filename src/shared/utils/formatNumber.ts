/**
 * Formatea un número entero con separador de miles (es-DO usa el mismo
 * formato que en-US: coma como separador de miles).
 */
export function formatInteger(value: number): string {
  return Math.round(value).toLocaleString('en-US');
}

/**
 * Construye el texto mostrado para una estadística animada (contador),
 * combinando prefijo, valor formateado con decimales y sufijo.
 * Usado tanto por el render inicial (SSR) como por el script de conteo
 * en el cliente (ver shared/utils/countUp.ts).
 */
export function formatStatValue(
  value: number,
  { prefix = '', suffix = '', decimals = 0 }: { prefix?: string; suffix?: string; decimals?: number }
): string {
  const formatted =
    decimals > 0 ? value.toFixed(decimals) : formatInteger(value);
  return `${prefix}${formatted}${suffix}`;
}
