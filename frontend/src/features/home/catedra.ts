/**
 * Cátedra UNESCO de Educación y Desarrollo de Economías Circulares.
 *
 * Nace en febrero de 2025 a partir de la Red Universitaria para el Desarrollo
 * de la Economía Circular (Redec), iniciativa de la Universidad de La Habana.
 */
export const catedra = {
  titulo: 'Cátedra UNESCO de Educación y Desarrollo de Economías Circulares',
  fecha: 'Febrero de 2025',
  resumen:
    'Articula las facultades y universidades para generar conocimiento, formar talento y promover colectivamente soluciones circulares mediante investigación interdisciplinaria, colaboración multisectorial y acción territorial.',
  objetivos: [
    'Dar a conocer la economía circular en el medio universitario y en las comunidades.',
    'Conectar proyectos estudiantiles con barrios donde existan problemas socioeconómicos.',
    'Promover la eficiencia en el uso de los recursos y su reaprovechamiento.',
  ],
  proyectos: [
    {
      nombre: 'Eco-retazos',
      descripcion:
        'Tienda-boutique especializada en transformar materiales textiles recuperados en productos diferenciados.',
    },
    {
      nombre: 'Círculo Violeta',
      descripcion:
        'Empoderar a mujeres en temáticas de sostenibilidad y modelos de negocios sostenibles.',
    },
  ],
} as const
