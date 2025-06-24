<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Seguimiento de KPIs'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/34.png", data-aos="zoom-in")      
      .col-lg-8
        p(data-aos="fade-down") El seguimiento de los Indicadores Claves de Desempeño (KPIs), es otro aspecto crítico en la gestión de proyectos de software. Los KPIs son métricas cuantificables que le permiten evaluar el rendimiento o el progreso del proyecto en relación con los objetivos establecidos. Al analizar regularmente los KPIs, se podrá identificar áreas de mejora, tomar decisiones informadas y asegurarse de que el proyecto avance según lo previsto.

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/35.svg")
            .col-lg
              h5 Establecer KPIs relevantes es el primer paso para un seguimiento efectivo.

              p Se deben definir métricas que estén alineadas con los objetivos del proyecto, que reflejen los aspectos más importantes, como la calidad, el tiempo, los costos y la satisfacción del cliente.	  

              h5.mb-0 Una vez que se hayan establecido los KPIs, se necesitará utilizar herramientas pertinentes, para monitorearlos y generar informes periódicos. 

        p(data-aos="fade-down") En esta sección, se aprenderá a establecer KPIs significativos para su proyecto, utilizar herramientas populares como Jira y Trello, para realizar un seguimiento efectivo. Se explorará cómo monitorear y reportar regularmente los KPIs, cómo tomar acciones correctivas cuando los indicadores no cumplan con los objetivos establecidos. Además, se comprenderá la importancia del análisis y la evaluación continua del rendimiento para identificar tendencias, realizar mejoras y mantener el proyecto, en el camino hacia el éxito. 

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Establecimiento de KPIs relevantes 
    p(data-aos="fade-down") El primer paso en el seguimiento de los KPI es establecer métricas relevantes o significativas para el proyecto. Los KPI deben estar alineados con los objetivos del proyecto y los criterios de éxito definidos. Algunos KPI comunes en los proyectos de desarrollo de software incluyen:
    div.row.justify-content-center.align-items-stretch.text-center.mb-5
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/36.svg" alt="" style="width: 90px")
          h5 Calidad
          p.mb-0 Tasa de defectos, cobertura de pruebas, cumplimiento de los requisitos.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/37.svg" alt="" style="width: 90px")
          h5 Tiempo
          p.mb-0 Variación del cronograma, porcentaje de tareas completadas a tiempo.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/38.svg" alt="" style="width: 90px")
          h5 Costos
          p.mb-0 Variación del presupuesto, costo real vs. Planificado.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/39.svg" alt="" style="width: 90px")
          h5 Satisfacción del cliente
          p.mb-0 Puntaje de satisfacción del cliente, tiempo de respuesta a las consultas de los clientes.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") Es importante seleccionar un conjunto manejable de KPI que brinden una imagen completa del desempeño del proyecto, sin abrumar al equipo con un seguimiento excesivo. Los KPI deben ser específicos, medibles, alcanzables, relevantes y oportunos (SMART).

        .bg-color-2.p-5.j1.mb-4(data-aos="fade-left")
          p.mb-0 Maigua (2017), sugiere involucrar al equipo del proyecto y a los interesados claves en el proceso de establecimiento de KPI. Esto asegura que los KPI seleccionados sean relevantes y aceptados por aquellos responsables de lograrlos.

        p(data-aos="fade-down") Ejemplo. En un proyecto de desarrollo de software, el equipo podría establecer los siguientes KPI:
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/45.png", data-aos="zoom-in")             

    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/41.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="2.5%" y="33.6%" numero="+")
                  h5 Tiempo
                  p Variación del cronograma, porcentaje de tareas completadas a tiempo.

                .bg-color-white.box-shadow.p-3(x="2.6%" y="72.5%" numero="+")
                  h5 Costos
                  p Variación del presupuesto, costo real vs. Planificado.
                .bg-color-white.box-shadow.p-3(x="85.5%" y="28.7%" numero="+")
                  h5 Calidad
                  p Tasa de defectos, cobertura de pruebas, cumplimiento de los requisitos.
                .bg-color-white.box-shadow.p-3(x="97.6%" y="70.8%" numero="+")
                  h5 Satisfacción del cliente
                  p Puntaje de satisfacción del cliente, tiempo de respuesta a las consultas de los clientes.


    p(data-aos="fade-down") Estos KPI brindan una visión integral del desempeño del proyecto y ayudan al equipo a enfocarse en áreas clave de éxito.

    .titulo-figura(data-aos="fade-right")
      h5 Figura 3. 
      span Criterios SMART en los KPIs
    .bg-color-5.p-4.mb-5(data-aos="fade-right")
      figure
        img.img-a.img-t(src="@/assets/curso/temas/42.svg", data-aos="zoom-in")

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Herramientas para monitoreo de KPIs 

    p(data-aos="fade-down") Existen varias herramientas de gestión de proyectos, que facilitan el monitoreo y seguimiento de los KPI. Dos de las herramientas más populares son: Jira y Trello.

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/43.png")          
            .col-lg-7
              h5 Jira
              p Es una herramienta poderosa para la gestión de proyectos y el seguimiento de problemas. Permite a los equipos capturar, asignar y realizar un seguimiento de las tareas, los errores, las solicitudes de funciones. Jira ofrece funcionalidades de informes, paneles que permiten a los gerentes de proyectos monitorear KPI claves, como la velocidad del equipo, el trabajo pendiente y las tendencias de los problemas. Jira se integra bien con otras herramientas de desarrollo, como Git y Jenkins, lo que permite un seguimiento integral del proyecto.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/44.png")          
            .col-lg-7
              h5 Trello
              p Es una herramienta de gestión de proyectos más visual y simplificada. Utiliza un sistema de tarjetas y tableros para representar tareas e hitos. Los equipos pueden crear tarjetas para cada tarea, asignar miembros del equipo, establecer fechas de vencimiento y rastrear el progreso moviendo las tarjetas a través de diferentes columnas en el tablero. Aunque Trello puede no tener las mismas capacidades robustas de informes como Jira, su simplicidad y enfoque visual lo convierten en una herramienta efectiva para el seguimiento de KPI en proyectos más pequeños o equipos que prefieren un enfoque más ágil.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0  
        .bg-color-2.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Boero (2020), recomienda elegir una herramienta de monitoreo de KPI que se alinee con la metodología y las necesidades específicas del proyecto. La herramienta debe ser fácil de usar, proporcionar una visibilidad adecuada del progreso y permitir una colaboración efectiva entre los miembros del equipo. 
        p(data-aos="fade-down") #[b Ejemplo.] En un proyecto de desarrollo de software, el equipo decide utilizar Jira para el seguimiento de KPI. Configuran un panel que muestra métricas clave como la velocidad del equipo, el conteo de errores pendientes y el porcentaje de tareas completadas a tiempo. Cada miembro del equipo actualiza regularmente el estado de sus tareas en Jira, lo que permite al gerente del proyecto monitorear el progreso, identificar cualquier problema potencial de manera oportuna. El panel de KPI se revisa en las reuniones semanales del equipo para evaluar el desempeño y realizar ajustes según sea necesario.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/46.png", data-aos="zoom-in")    

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Monitoreo y reporte de KPIs
    p(data-aos="fade-down") Para conocer sobre esta temática, lo invitamos a ver el siguiente video. 

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Tr2AdymFAuQ?si=cd4WG7y0FunMHNPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Acción correctiva cuando los KPIs no se cumplen

    p(data-aos="fade-down") A pesar de la planificación y el monitoreo cuidadosos, habrá ocasiones en las que los KPI no cumplan con los objetivos establecidos. En estos casos, es crucial que los gerentes de proyectos tomen medidas correctivas oportunas, para volver a encauzar el proyecto.

    h5(data-aos="fade-down") Las acciones correctivas pueden incluir:

    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/47.png", alt="")     
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Reasignación de recursos")
            p Asignar recursos adicionales o reasignar recursos de tareas de menor prioridad a áreas problemáticas.
          .div(titulo="Ajuste del alcance")
            p Revisar y ajustar el alcance del proyecto, en consulta con los interesados para alinearlo con las restricciones de recursos y tiempo.
          .div(titulo="Mejora de procesos")
            p Identificar y abordar ineficiencias en los procesos de desarrollo, pruebas o gestión de proyectos.
          .div(titulo="Gestión de riesgos")
            p Implementar planes de mitigación para riesgos identificados que puedan estar impactando los KPI.
          .div(titulo="Comunicación y colaboración")
            p Mejorar la comunicación o la colaboración dentro del equipo del proyecto, al igual que con los interesados para abordar los desafíos y alinear las expectativas.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") Es importante que las acciones correctivas se basen en datos y se centren en las causas fundamentales de los problemas, en lugar de simplemente tratar los síntomas. Los gerentes de proyectos deben involucrar al equipo y a los interesados relevantes en el proceso de toma de decisiones comunicando claramente cualquier cambio en el plan del proyecto. 

        .bg-color-8.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 López et al. (2019), enfatizan la importancia de la proactividad en la toma de acciones correctivas. Los gerentes de proyectos deben monitorear de cerca los KPI y estar preparados para actuar rápidamente cuando se detecten problemas potenciales, en lugar de esperar hasta que los problemas se vuelvan críticos
        p(data-aos="fade-down") #[b Ejemplo.] En un proyecto de desarrollo de software, el KPI de tasa de defectos ha estado consistentemente por encima del objetivo del 0.5 defectos por cada 1000 líneas de código. El gerente del proyecto investiga y descubre que la causa principal es una falta de pruebas automatizadas integrales. Como acción correctiva, asignan un desarrollador dedicado para implementar pruebas automatizadas para las funcionalidades claves. También organizan una sesión de capacitación para todo el equipo, sobre las mejores prácticas de pruebas y hacen de las pruebas una parte integral del proceso de desarrollo. Con el tiempo, estas acciones correctivas resultan en una disminución de la tasa de defectos y ayudan al proyecto, a cumplir con el objetivo.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/48.png", data-aos="zoom-in")                                              
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Análisis y evaluación continua del rendimiento

    p(data-aos="fade-down") El seguimiento de KPI no es un evento único; es un proceso continuo que debe integrarse en todo el ciclo de vida del proyecto. El análisis y la evaluación regulares del rendimiento, ayudan a los equipos a identificar patrones, tendencias y oportunidades de mejora:                         

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/49.png")          
            .col-lg-7
              p Los gerentes de proyectos deben programar revisiones periódicas del rendimiento, donde se analizan los datos de KPI, se evalúa el progreso general del proyecto y se identifican áreas de éxito y áreas que necesitan atención. Estas revisiones pueden coincidir con hitos claves del proyecto, como el final de una fase o la entrega de un incremento importante.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/50.png")          
            .col-lg-7
              p Durante las revisiones de rendimiento, es importante involucrar a todo el equipo del proyecto, fomentando un diálogo abierto y honesto. Los miembros del equipo deben sentirse cómodos al compartir sus éxitos, desafíos y sugerencias para mejorar. El objetivo es fomentar una cultura de mejora continua y aprendizaje.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0  
        .bg-color-2.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Sarmiento Rojas et al. (2020), sugieren usar el análisis de tendencias para identificar patrones en el rendimiento a lo largo del tiempo. Esto implica comparar los KPI actuales con los valores históricos para ver si el rendimiento está mejorando, se mantiene estable o se deteriora. Esta información puede ayudar a los gerentes de proyectos a tomar decisiones informadas sobre asignación de recursos, capacitación del equipo o adopción de nuevas metodologías.

        p(data-aos="fade-down") #[b Ejemplo.] En un proyecto de desarrollo de software, el equipo realiza una revisión trimestral del rendimiento. Analizan los datos de KPI de los últimos tres meses, incluyendo la velocidad del equipo, la tasa de defectos y la satisfacción del cliente. Notan una tendencia positiva en la velocidad del equipo, pero observan que la satisfacción del cliente ha disminuido ligeramente. Durante la revisión, el equipo discute posibles razones para la disminución de la satisfacción del cliente y propone acciones para mejorar, como una mayor participación del cliente en las revisiones de sprint y una comunicación más frecuente sobre el progreso. Estas ideas se incorporan al plan del proyecto para el próximo trimestre, con KPI actualizados para medir su efectividad.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/51.png", data-aos="zoom-in")  

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/52.png", data-aos="zoom-in")      
      .col-lg-8 
        p(data-aos="fade-down") A lo largo de esta unidad, se han explorado los aspectos fundamentales de la planificación y control de proyectos de software. Desde las técnicas de planificación hasta el uso de diagramas de Gantt y el seguimiento de KPIs, cada tema abordado contribuye a una gestión efectiva de los proyectos.
        p(data-aos="fade-down") Comprender las diferencias entre los enfoques ágiles y tradicionales, permite adaptar la estrategia de planificación, según las necesidades específicas del proyecto.

        .bg-color-1.p-4.j1.mb-4(data-aos="fade-left")
          p Las técnicas de estimación de tiempos y costos ayudan a establecer expectativas realistas y asignar recursos de manera efectiva. El desarrollo de una estructura de desglose del trabajo (WBS) proporciona una hoja de ruta clara para el equipo y facilita el seguimiento del progreso.

          p Los diagramas de Gantt han demostrado ser una herramienta valiosa para visualizar el cronograma del proyecto, gestionar dependencias y comunicar hitos claves. Su uso fomenta la transparencia y la colaboración dentro del equipo.

          p.mb-0 El seguimiento de los Indicadores Claves de Desempeño (KPI) es esencial para medir el éxito del proyecto y tomar decisiones basadas en datos. Al establecer KPIs relevantes, monitorearlos regularmente y tomar acciones correctivas cuando sea necesario, se puede mantener el proyecto en camino y entregar resultados de alta calidad.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") Sin embargo, es importante recordar que la planificación y el control de proyectos no se tratan solo de herramientas y técnicas. También requieren habilidades interpersonales, como la comunicación efectiva, el liderazgo y la resolución de problemas. Fomentar una cultura de mejora continua y aprendizaje dentro del equipo, es igual de crucial para el éxito del proyecto.

        .bg-color-2.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Como futuros ingenieros de software, dominar estas habilidades de gestión de proyectos los preparará para los desafíos del mundo real. Permitirá no solo entregar software de alta calidad a tiempo y dentro del presupuesto, sino también innovar, adaptarse al cambio y crear valor para las organizaciones y clientes.

        p(data-aos="fade-down") En última instancia, la planificación y el control efectivos de proyectos, son fundamentales para el éxito de cualquier iniciativa de desarrollo de software. Al aplicar los conceptos y prácticas discutidos en esta unidad, estarán bien preparados para enfrentar la complejidad inherente a los proyectos de software y liderar equipos hacia el logro de sus objetivos.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/53.png", data-aos="zoom-in")  


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://clickup.com/es-ES/blog/156960/desarrollo-de-software-kpisClickUp" target="_blank" rel="noopener noreferrer") ClickUp. (2025). 25 KPI de desarrollo de software con ejemplos.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://amaliagomez.es/definir-y-monitorear-kpis-en-desarrollo-software/" target="_blank" rel="noopener noreferrer") Gómez, A. (2023). Cómo definir y monitorear KPIs en el desarrollo de software. Amalia Gómez Blog. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://clickup.com/es-ES/blog/243088/generadores-de-kpi " target="_blank" rel="noopener noreferrer") ClickUp. (2024). 15 generadores de KPIs impulsados por IA.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://clickup.com/es-ES/blog/65830/software-kpi" target="_blank" rel="noopener noreferrer") ClickUp. (2024). 10 herramientas de software para seguimiento de KPIs con IA.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/YY-zQGBmhJM" target="_blank" rel="noopener noreferrer") pascualbravovirtual. (2021). MOOC - Metodología para el diseño de indicadores [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/XLi06GkL2ME" target="_blank" rel="noopener noreferrer") Prof Matias Garcia. (2022). Introducción a la gestión de proyectos con Trello [video]. 
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Planificación y control de proyectos',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué herramienta visual permite planificar tareas en el tiempo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Matriz de prioridades.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Diagrama de Gantt.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Gráfica de barras simple.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Árbol de decisiones.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué es un KPI en la gestión de proyectos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un software de control.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Un indicador clave de desempeño.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Un proveedor externo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Un procedimiento contable.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes es un objetivo de la planificación del proyecto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Contratar personal administrativo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Establecer tareas, tiempos y recursos necesarios.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Automatizar correos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Cancelar tareas innecesarias.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué técnica ayuda a definir la secuencia lógica de tareas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Método de Monte Carlo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ruta crítica (CPM).',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Técnica de lluvia de ideas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Diagrama de Venn.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Por qué es importante el seguimiento del proyecto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Para evitar reuniones.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Para comparar el avance real con el planificado.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Para registrar gastos contables.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Para cambiar el alcance frecuentemente.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
