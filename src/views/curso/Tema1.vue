<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Técnicas de planificación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
       p(data-aos="fade-down") La planificación es un componente fundamental en la gestión de proyectos de software. Es el proceso para definir el alcance del proyecto, establecer objetivos claros y determinar las acciones necesarias para alcanzarlos. Una planificación efectiva sienta las bases para el éxito del proyecto, dado que ayuda a garantizar que todos los miembros del equipo se encuentren alineados y trabajen hacia un objetivo común.
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/6.svg")
            .col-lg
              h5 Las técnicas de planificación son herramientas o métodos utilizados para desarrollar un plan de proyecto sólido y realista.

              p.mb-0 Estas técnicas ayudan a los gerentes de proyectos a definir el alcance, identificar los recursos necesarios, estimar tiempos, costos, y crear un cronograma detallado. La selección de las técnicas de planificación pertinentes, depende de diversos factores, como el tamaño, la complejidad del proyecto, los requisitos del cliente y las limitaciones de recursos.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/7.png", data-aos="zoom-in")   

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/8.png", data-aos="zoom-in")    
      .col-lg-8
        p(data-aos="fade-down") En esta sección, se exploran varias técnicas de planificación, esenciales en el contexto de la gestión de proyectos de software. Se inicia realizando un análisis de las diferencias entre la planificación de proyectos ágiles y tradicionales y cómo cada enfoque se adapta a diferentes tipos de proyectos. Luego, se aborda la estimación de tiempos y costos, una habilidad crítica para establecer expectativas realistas y asignar recursos, de manera efectiva.      

        .bg-color-2.p-5.j1(data-aos="fade-left")
          p.mb-0 También se aprende sobre el desarrollo de la Estructura de Desglose del Trabajo (WBS), una herramienta valiosa para descomponer el proyecto en tareas manejables. Además, se discute la planificación de recursos, la asignación de tareas, la definición de hitos y objetivos claros, todo lo cual contribuye a un plan de proyecto completo y bien estructurado.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Planificación de proyectos ágiles vs. tradicionales

    p(data-aos="fade-down") Existen dos enfoques principales para la planificación de proyectos de software: ágil y tradicional:
    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Planificación ágil
              p Se centra en la adaptabilidad y la colaboración, con un enfoque iterativo y basado en incrementos. Los equipos ágiles trabajan en ciclos cortos llamados sprints, donde se priorizan las funcionalidades y se entregan incrementos funcionales del software.     
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/9.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Planificación tradicional
              p Como el modelo en cascada, sigue un enfoque más secuencial y estructurado. Se enfatiza la planificación detallada por adelantado y se divide el proyecto en diferentes fases, como análisis, diseño, implementación y pruebas. Cada fase debe completarse antes de pasar a la siguiente.     
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/10.png")

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/11.png", data-aos="zoom-in")    
      .col-lg-8
        .bg-color-4.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Según Gómez Ruedas (2014), la elección entre un enfoque ágil o tradicional, depende de factores como el tamaño del proyecto, los requisitos del cliente y la estabilidad de los requerimientos. Los proyectos con requisitos cambiantes y la necesidad de una rápida retroalimentación del cliente, se benefician de la planificación ágil, mientras que los proyectos con requisitos estables y un alcance bien definido, pueden optar por un enfoque tradicional. 
        p(data-aos="fade-down") Por ejemplo, en el desarrollo de una aplicación móvil innovadora, donde los requisitos pueden evolucionar rápidamente, basados en la retroalimentación de los usuarios, un enfoque ágil sería más adecuado. El equipo podría trabajar en sprints de dos semanas, priorizando las funcionalidades más valiosas y entregando versiones incrementales de la aplicación para obtener comentarios tempranos y realizar ajustes según sea necesario.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Estimación de tiempos y costos
    p(data-aos="fade-down") La estimación precisa de tiempos y costos, es fundamental para una planificación efectiva del proyecto. Implica determinar la duración de las tareas y los recursos necesarios para completarlas. Existen varias técnicas de estimación:  


    div.row.justify-content-center.align-items-stretch.text-center
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/12.svg" alt="" style="width: 90px")
          h5 Estimación análoga
          p.mb-0 Utiliza datos históricos de proyectos similares, para estimar la duración y los costos del proyecto actual.
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/13.svg" alt="" style="width: 90px")
          h5 Estimación paramétrica
          p.mb-0 Se basa en modelos matemáticos que consideran variables como el tamaño del software y la productividad del equipo.
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/14.svg" alt="" style="width: 90px")
          h5 Estimación por tres valores
          p.mb-0 Implica proporcionar estimaciones optimistas, más probables y pesimistas para cada tarea; luego se calcula un promedio ponderado.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-2.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 De acuerdo con Sarmiento Rojas et al. (2020), la técnica de estimación por tres valores, también conocida como método PERT (Program Evaluation and Review Technique), es ampliamente utilizada en la gestión de proyectos. Esta técnica considera la incertidumbre y proporciona un rango de estimaciones, en lugar de un único valor determinista.
        p(data-aos="fade-down") #[b Ejemplo]. En un proyecto de desarrollo de software, se puede aplicar la estimación por tres valores para una tarea de programación específica. La estimación optimista podría ser de 5 días, la más probable de 8 días y la pesimista, de 13 días. Utilizando la fórmula PERT, se calcula el tiempo esperado como (5 + 4 × 8 + 13) ÷ 6, lo que da como resultado una estimación de aproximadamente 8.5 días para esa tarea.     

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/8.png", data-aos="zoom-in")    

    .titulo-figura(data-aos="fade-right")
      h5 Figura 1. 
      span Ejemplo estimación tiempo técnica PERT
    .bg-color-5.p-4.mb-5(data-aos="fade-right")
      figure
        img.img-a.img-t(src="@/assets/curso/temas/15.svg", data-aos="zoom-in")

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Desarrollo del WBS (#[i Work Breakdown Structure]) 
    p(data-aos="fade-down") La estructuración clara del trabajo es clave para el éxito de cualquier proyecto.

    .bg-full-width.bg-color-10.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/16.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Desarrollo del WBS 
            p.mb-4(data-aos="fade-right") En el PDF Desarrollo del WBS, se explica cómo descomponer un proyecto en componentes manejables, mediante una estructura jerárquica que facilita la planificación, asignación de tareas y seguimiento del progreso. A través de ejemplos prácticos, se ilustra cómo aplicar esta herramienta para lograr una visión integral del alcance del proyecto y fortalecer la coordinación del equipo.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Desarrollo del WBS 

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Planificación de recursos y asignación de tareas

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
       p(data-aos="fade-down") La planificación de recursos implica identificar y asignar los recursos necesarios, como personal, equipos y materiales, para completar las tareas del proyecto. Es crucial asegurar que los recursos estén disponibles cuando se necesiten, al igual que se utilicen de manera eficiente.
        .bg-color-8.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/17.svg")
            .col-lg
              p.mb-0 La asignación de tareas implica asignar responsabilidades específicas a los miembros del equipo del proyecto en función de sus habilidades y disponibilidad. Es importante considerar la carga de trabajo de cada miembro del equipo, asegurar que las tareas se distribuyan de forma equitativa, para evitar cuellos de botella o sobreasignaciones.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/18.png", data-aos="zoom-in")   

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/19.png", data-aos="zoom-in")    
      .col-lg-8
        .bg-color-1.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Maigua (2017), enfatiza la importancia de utilizar herramientas de gestión de proyectos para facilitar la planificación de recursos y la asignación de tareas. Estas herramientas, como Microsoft Project o Jira, permiten crear un plan de proyecto detallado, asignar recursos a tareas específicas, realizar un seguimiento del progreso y la utilización de los recursos. 

        p(data-aos="fade-down") #[b Ejemplo.] En un proyecto de desarrollo de software, la planificación de recursos podría implicar asignar desarrolladores con habilidades específicas a diferentes módulos del sistema. Por ejemplo, un desarrollador con experiencia en bases de datos podría ser asignado a las tareas relacionadas con el diseño y la implementación del modelo de datos, mientras que un desarrollador con habilidades en interfaz de usuario podría ser asignado a las tareas relacionadas con el desarrollo de la interfaz de usuario.    

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Definición de hitos y objetivos claros en proyectos de software


    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0  
        p(data-aos="fade-down") Los hitos son puntos de referencia significativos que marcan el progreso y los logros claves a lo largo del proyecto. Ayudan a dividir el proyecto en segmentos más manejables, proporcionan una indicación clara de si el proyecto está avanzando, según lo previsto. Los objetivos, por otro lado, son declaraciones específicas y medibles que definen lo que se debe lograr en el proyecto.

        .bg-color-1.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 La definición de hitos y objetivos claros, es esencial para mantener al equipo del proyecto enfocado y motivado. Los objetivos deben ser SMART: específicos, medibles, alcanzables, relevantes y con un plazo determinado. Los hitos deben colocarse en puntos estratégicos del proyecto, como la finalización de una fase importante o la entrega de un entregable clave.  

        p(data-aos="fade-down") Boero (2020), destaca la importancia de comunicar claramente los hitos y objetivos a todos los interesados del proyecto. Esto asegura que todos tengan una comprensión común de lo que se espera lograr y cuándo.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/20.png", data-aos="zoom-in")  

    .bg-full-width.bg-color-7(data-aos="fade-right")
      .px-4.p-md-3
        .row.px-5
          .col-lg-4.p-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/21.png", data-aos="zoom-in")        
          .col-lg-8.mb-3.mb-lg-0.j1 
            p(data-aos="fade-down") Ejemplo. En un proyecto de desarrollo de software, los hitos podrían incluir:
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Finalización de la especificación de requisitos.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Aprobación del diseño de la arquitectura del sistema.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Finalización del desarrollo del primer módulo funcional.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Finalización de las pruebas de integración.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Lanzamiento de la versión beta a un grupo selecto de usuarios.

            p(data-aos="fade-down") Un objetivo relacionado podría ser: “Desarrollar y lanzar un sistema de gestión de inventario completamente funcional que mejore la eficiencia del proceso de inventario en un 20 % dentro de los 6 meses posteriores al inicio del proyecto”.




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.hostragons.com/es/blog/estimacion-y-planificacion-de-proyectos-de-software/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer") Hostragons. (2025, marzo 13). Técnicas de planificación y estimación de proyectos de software. Hostragons Blog. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://juanjoblog.com/las-mejores-tecnicas-estimacion-de-proyectos-agiles/" target="_blank" rel="noopener noreferrer") González, J. (2024). Las mejores técnicas de estimación de proyectos ágiles. Juanjo’s Blog. Ingeniería de Software. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://creati.ai/es/ai-tools/blueprint/" target="_blank" rel="noopener noreferrer") Creati.ai. (2024). Blueprint – Planificación automática de proyectos con IA.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://pmideas.es/blogroll/2024/04/inteligencia-artificial-7-herramientas-de-gestion-de-proyectos-agil-a-destacar-en-2024/" target="_blank" rel="noopener noreferrer") PMIdeas. (2024, abril). Taskade: IA para automatización de tareas y planificación ágil.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/TP9DSe_BC4U" target="_blank" rel="noopener noreferrer") Madrid, J. S. (2021). IO 038 | Clase Practica | TP 9: Planificación, Programación y Control de Proyectos [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/e9-EJhuEKq4" target="_blank" rel="noopener noreferrer") Lara Sierra, J. (Mgs). (2021). Gestión del cronograma [video]. 
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
