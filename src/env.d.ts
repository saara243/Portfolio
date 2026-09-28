interface ImportMetaEnv {
  /** ID de Formspree para el formulario de contacto. Vacío = sin formulario. */
  readonly PUBLIC_FORMSPREE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
