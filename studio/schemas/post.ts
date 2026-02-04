import { Rule } from 'sanity';

/**
 * Schema definition for a news article. This schema includes fields for
 * textual content as well as media attachments (images, video embeds and
 * audio files). The slug field is generated from the title. The
 * publishedAt datetime is used to order posts in the frontend.
 */
const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().max(120),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Extracto',
      type: 'text',
      description: 'Un resumen corto que se mostrará en la lista de artículos.',
    },
    {
      name: 'publishedAt',
      title: 'Fecha y hora de publicación',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Imagen de portada',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description: 'Descripción de la imagen para accesibilidad.',
        },
      ],
    },
    {
      name: 'gallery',
      title: 'Galería de imágenes',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
            },
          ],
        },
      ],
    },
    {
      name: 'media',
      title: 'Medios',
      type: 'array',
      of: [
        {
          type: 'file',
          title: 'Archivo de audio',
          fields: [
            {
              name: 'description',
              type: 'string',
              title: 'Descripción del audio',
            },
          ],
        },
        {
          type: 'object',
          name: 'video',
          title: 'Video embebido',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'URL del video',
              description: 'Enlace de YouTube, Vimeo u otra plataforma de video.',
            },
            {
              name: 'title',
              type: 'string',
              title: 'Título del video',
            },
          ],
        },
      ],
    },
    {
      name: 'sourceName',
      title: 'Nombre de la fuente',
      type: 'string',
    },
    {
      name: 'sourceUrl',
      title: 'URL de la fuente',
      type: 'url',
    },
    {
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto alternativo',
            },
          ],
        },
      ],
    },
    {
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'string',
    },
    {
      name: 'isFeatured',
      title: 'Destacado',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'coverImage',
    },
  },
};

export default post;
