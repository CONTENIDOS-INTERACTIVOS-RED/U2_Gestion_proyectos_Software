export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Planificación y control de proyectos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de planificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Planificación de proyectos ágiles vs. tradicionales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estimación de tiempos y costos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Desarrollo del WBS (<i>Work Breakdown Structure</i>)',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Planificación de recursos y asignación de tareas',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Definición de hitos y objetivos claros en proyectos de <i>software</i>',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Uso de diagramas de Gantt',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Creación de diagramas de Gantt con herramientas digitales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Visualización de hitos y dependencias',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Control de fechas de entrega y plazos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Seguimiento de progreso en el proyecto',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Ajustes en tiempos y recursos, según los avances del proyecto',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Seguimiento de KPIs',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Establecimiento de KPIs relevantes ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Herramientas para monitoreo de KPIs',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Monitoreo y reporte de KPIs',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Acción correctiva cuando los KPIs no se cumplen',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Análisis y evaluación continua del rendimiento',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Boero, C. (2020). <i>Evaluación de proyectos</i>. Jorge Sarmiento Editor - Universitas. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/172500',
    },
    {
      referencia:
        'Gómez Ruedas, J. (2014). <i>Dirección y gestión de proyectos de tecnologías de la información en la empresa</i>. FC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/114078?page=1',
    },
    {
      referencia:
        'López, D., Rodríguez, J. R., & González, J. J. (2019). <i>Gestión de programas de proyectos informáticos (y no informáticos)</i>. Editorial UOC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/113334?page=1',
    },
    {
      referencia:
        'Sarmiento Rojas, J. A., Correa Candamil, C. H. & Jiménez Roa, D. E. (2020). <i>Gestión de proyectos aplicada al PMBOK 6ED</i>. Editorial UPTC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/193943?page=1',
    },
    {
      referencia:
        'De Zunzunegui, A. (2023). <i>Gestión de proyectos en AGILE: cómo utilizar las metodologías ágiles para mejorar tu capacidad de respuesta y lanzar proyectos de éxito</i>. LID Editorial España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/270594?page=1',
    },
    {
      referencia:
        'Gutiérrez de Mesa, J. A. (2009). <i>Planificación y gestión de proyectos informáticos</i>. Editorial Universidad de Alcalá. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/53487?page=1',
    },
    {
      referencia:
        'Maigua, G. (2017). <i>Buenas prácticas en la dirección y gestión de proyectos informáticos</i>. D - Editorial de la Universidad Tecnológica Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/76993?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'Medidas tomadas para abordar desviaciones o incumplimientos de los objetivos del proyecto y volver a encarrilarlo.',
    },
    {
      termino: 'Alcance',
      significado:
        'Definición detallada de los entregables, características y funcionalidades, que se incluirán en un proyecto.',
    },
    {
      termino: 'Cronograma',
      significado:
        'Representación gráfica o tabla que muestra la secuencia y duración de las actividades de un proyecto.',
    },
    {
      termino: 'Diagrama de Gantt',
      significado:
        'Herramienta visual utilizada para planificar y programar proyectos, que representan las tareas, como barras horizontales en una escala de tiempo.',
    },
    {
      termino: 'Entregable',
      significado:
        'Producto, resultado o capacidad única y verificable que debe producirse para completar un proceso, fase o proyecto.',
    },
    {
      termino: 'Estructura de Desglose del Trabajo (EDT)',
      significado:
        '<i>Work Breakdown Structure</i> (WBS): descomposición jerárquica del alcance total de un proyecto en componentes más pequeños y manejables.',
    },
    {
      termino: 'Hito',
      significado:
        'Punto de referencia significativo que marca el logro de un entregable importante o un evento clave en el proyecto.',
    },
    {
      termino: 'Indicador Clave de Desempeño (KPI)',
      significado:
        'Métrica utilizada para medir y rastrear el rendimiento y el progreso de un proyecto, en relación con los objetivos específicos.',
    },
    {
      termino: 'Jira',
      significado:
        'Herramienta de gestión de proyectos y seguimiento de problemas, desarrollada por Atlassian.',
    },
    {
      termino: 'Método de la Ruta Crítica (CPM)',
      significado:
        'Técnica utilizada para predecir la duración del proyecto, analizando cuáles secuencias de actividades tienen la menor cantidad de flexibilidad en sus tiempos de inicio y finalización.',
    },
    {
      termino: 'Metodología ágil',
      significado:
        'Enfoque iterativo e incremental para la gestión de proyectos y el desarrollo de <i>software</i>, que se centra en la colaboración, la flexibilidad y la adaptación al cambio.',
    },
    {
      termino: 'Método PERT (<i>Program Evaluation and Review Technique</i>)',
      significado:
        'Técnica estadística utilizada para analizar y representar las tareas involucradas en completar un proyecto, especialmente cuando hay incertidumbre en las estimaciones de tiempo.',
    },
    {
      termino: 'Planificación de recursos',
      significado:
        'Proceso de determinar qué recursos (personas, equipos, materiales) y qué cantidades de cada uno se utilizarán para realizar las actividades del proyecto.',
    },
    {
      termino: 'PMBOK',
      significado:
        '(<i>Project Management Body of Knowledge</i>): guía estándar que describe las mejores prácticas de gestión de proyectos.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Estimación aprobada para el proyecto o cualquier componente de la estructura de desglose del trabajo u otra actividad del cronograma.',
    },
    {
      termino: 'PRINCE2',
      significado:
        '(<i>Projects In Controlled Environments</i>): Método estructurado de gestión de proyectos, basado en principios, temas y procesos.',
    },
    {
      termino: 'Ruta crítica',
      significado:
        'Secuencia de actividades que representan el camino más largo a través de un proyecto, lo que determina la menor duración posible del mismo.',
    },
    {
      termino: 'SCRUM',
      significado:
        'Marco de trabajo ágil para el desarrollo y mantenimiento de productos complejos, con un énfasis en la entrega incremental de valor.',
    },
    {
      termino: 'Trello',
      significado:
        'Herramienta de gestión de proyectos que utiliza un sistema de tarjetas y tableros para representar tareas e hitos.',
    },
    {
      termino: 'Waterfall (Cascada)',
      significado:
        'Enfoque secuencial de gestión de proyectos en el que el progreso fluye constantemente hacia abajo (como una cascada) a través de las fases de concepción, iniciación, análisis, diseño, construcción, pruebas, producción/implementación y mantenimiento.',
    },
  ],
}
