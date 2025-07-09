<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Uso de diagramas de Gantt'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p(data-aos="fade-down") Los diagramas de Gantt son una herramienta poderosa para planificar y controlar proyectos de software. Estos diagramas proporcionan una representación visual clara del cronograma del proyecto, mostrando las tareas, las dependencias y los hitos claves en una escala de tiempo. Al utilizar diagramas de Gantt, se podrá comunicar de manera efectiva, el plan del proyecto a su equipo y a las partes interesadas; además, permite realizar un seguimiento del progreso a medida que avanza el proyecto.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-6.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/21.svg")
            .col-lg
              p.mb-0 La creación de diagramas de Gantt se ha simplificado gracias a las herramientas digitales modernas. Estas herramientas le permiten crear y personalizar fácilmente los diagramas, asignar recursos a las tareas, estableciendo dependencias entre ellas. Los diagramas de Gantt también facilitan la visualización de hitos importantes y la identificación de la ruta crítica del proyecto, lo que ayuda a priorizar las tareas, al igual que asignar los recursos de manera efectiva. 
        p(data-aos="fade-down") En esta sección, se aprenderá a crear diagramas de Gantt utilizando herramientas digitales, aprovechando al máximo sus funcionalidades. Se explorará cómo visualizar hitos y dependencias, controlar fechas de entrega y plazos, y realizar un seguimiento del progreso del proyecto. También se aprenderá a realizar ajustes en los tiempos o recursos, según sea necesario, basándose en los avances del proyecto o en los cambios que puedan surgir. Al dominar el uso de los diagramas de Gantt, se estará mejor equipado para planificar y controlar los proyectos de software, de manera permanente.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/22.png", data-aos="zoom-in")  

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Creación de diagramas de Gantt con herramientas digitales

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/23.png", data-aos="zoom-in")    
      .col-lg-8
        .bg-color-2.p-5.j1.mb-4(data-aos="fade-left")
          p.mb-0 Existen varias herramientas digitales que facilitan la creación de diagramas de Gantt, como Microsoft Project, Smartsheet y GanttPro. Estas herramientas permiten a los gerentes de proyectos crear o personalizar diagramas de Gantt de manera eficiente, asignar recursos a tareas y realizar un seguimiento del progreso en tiempo real.

        p(data-aos="fade-down") Para crear un diagrama de Gantt en una herramienta digital, se comienza definiendo las tareas del proyecto y estimando su duración. Luego, se establecen las relaciones de dependencia entre las tareas, indicando qué tareas deben completarse antes de que puedan comenzar otras. A medida que avanza el proyecto, se actualiza el diagrama de Gantt para reflejar el progreso real y realizar ajustes, según sea necesario.     

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0  
        .bg-color-1.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Gutiérrez de Mesa (2009), recomienda utilizar herramientas de gestión de proyectos que integren diagramas de Gantt para mejorar la planificación y el seguimiento de los proyectos de software. Estas herramientas permiten a los equipos colaborar eficazmente, compartir información actualizada y tomar decisiones informadas basadas en datos en tiempo real. 

        p(data-aos="fade-down") #[b Ejemplo.] En un proyecto de desarrollo de software, se puede crear un diagrama de Gantt utilizando Microsoft Project. Se definen las tareas principales, como el análisis de requisitos, el diseño, la implementación y las pruebas, y se estima la duración de cada tarea. Luego, se establecen las dependencias entre las tareas, como la necesidad de completar el análisis de requisitos, antes de comenzar el diseño. El diagrama de Gantt resultante, proporciona una representación visual clara del cronograma del proyecto y permite realizar un seguimiento del progreso, a medida que se completan las tareas.    
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/24.png", data-aos="zoom-in")    

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Visualización de hitos y dependencias
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/25.png", data-aos="zoom-in")      
      .col-lg-8 
        .bg-color-7.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/26.svg")
            .col-lg
              p.mb-0 Los diagramas de Gantt permiten visualizar claramente los hitos del proyecto y las dependencias entre tareas. Los hitos se representan típicamente como rombos o puntos en el diagrama, indicando puntos clave de logros o entregables importantes. Las dependencias se muestran como flechas que conectan las tareas, ilustrando las relaciones y restricciones entre ellas. 
        p(data-aos="fade-down") La visualización de hitos y dependencias, es crucial para comprender la ruta crítica del proyecto, que es la secuencia de tareas que deben completarse a tiempo, para que el proyecto se entregue, según lo programado. Las tareas en la ruta crítica no tienen holgura o tiempo adicional, lo que significa que cualquier retraso en estas tareas, afectará directamente la fecha de finalización del proyecto. 

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0  
        .bg-color-2.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Según De Zunzunegui (2023), la identificación y gestión cuidadosa de la ruta crítica, es esencial para el éxito del proyecto. Los gerentes de proyectos deben prestar especial atención a las tareas en la ruta crítica, asignar recursos adecuados y monitorear de cerca el progreso para mitigar cualquier riesgo potencial de retrasos.

        p(data-aos="fade-down") #[b Ejemplo.] En un diagrama de Gantt para un proyecto de desarrollo de software, los hitos podrían incluir la finalización del documento de especificación de requisitos, la aprobación del diseño de la arquitectura y la finalización de las pruebas de aceptación del usuario. Las dependencias podrían mostrar que la fase de implementación no puede comenzar hasta que se complete y apruebe el diseño de la arquitectura. Al visualizar estos hitos y dependencias, el equipo del proyecto puede comprender mejor las relaciones entre las tareas y planificar en consecuencia.   
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/27.png", data-aos="zoom-in")  


    .titulo-figura(data-aos="fade-right")
      h5 Figura 2. 
      span Ejemplo de hitos y dependencias en el diagrama de Gantt
    .bg-color-5.p-4.mb-5(data-aos="fade-right")
      figure
        img.img-a.img-t(src="@/assets/curso/temas/28.svg", data-aos="zoom-in")

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Control de fechas de entrega y plazos
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/29.png", data-aos="zoom-in")    
      .col-lg-8
        p(data-aos="fade-down") Los diagramas de Gantt son una herramienta efectiva para controlar las fechas de entrega y los plazos del proyecto. Al visualizar las tareas en una escala de tiempo, los gerentes de proyectos pueden identificar fácilmente las fechas de inicio y finalización, planificadas para cada tarea, lo que permite realizar un seguimiento del progreso en relación con estos plazos.  

        .bg-color-1.p-4.j1(data-aos="fade-left")
          p.mb-0 Cuando se producen retrasos o cambios en el proyecto, los diagramas de Gantt permiten, a los gerentes de proyectos, ajustar las fechas de inicio y finalización de las tareas afectadas observando cómo estos cambios impactan en el cronograma general del proyecto. Esto les deja tomar decisiones informadas sobre la reasignación de recursos, la modificación de las dependencias o la comunicación de los cambios a los interesados. 


    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0  
        .bg-color-2.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 López et al. (2019) enfatizan la importancia de las actualizaciones periódicas y la comunicación de cualquier cambio en las fechas de entrega o plazos a los miembros del equipo y a las partes interesadas. Esto asegura que, como consecuencia, todos estén alineados y puedan ajustar sus esfuerzos y expectativas.
        p(data-aos="fade-down") #[b Ejemplo.] En un proyecto de desarrollo de software, el diagrama de Gantt podría indicar que la fase de pruebas está programada para completarse en una fecha específica. Sin embargo, debido a algunos desafíos imprevistos durante la fase de implementación, la fase de pruebas se retrasa. El gerente del proyecto actualiza el diagrama de Gantt para reflejar las nuevas fechas de inicio y finalización de la fase de pruebas, luego comunica este cambio al equipo del proyecto y a las partes interesadas, asegurando que todos estén al tanto del impacto, en el cronograma general.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/30.png", data-aos="zoom-in")    


    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Seguimiento de progreso en el proyecto
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/29.png", data-aos="zoom-in")    
      .col-lg-8
        p(data-aos="fade-down") Los diagramas de Gantt son una herramienta valiosa para realizar un seguimiento del progreso del proyecto. A medida que el proyecto avanza, los gerentes de proyectos pueden actualizar el diagrama de Gantt para reflejar el progreso real de cada tarea. Esto implica marcar las tareas como completadas, ajustar las fechas de inicio y finalización, según sea necesario y resaltar cualquier desviación del plan original.

        .bg-color-4.p-4.j1(data-aos="fade-left")
          p.mb-0 El seguimiento regular del progreso permite a los gerentes de proyectos identificar posibles problemas o retrasos temprano y tomar medidas correctivas. También proporciona una visibilidad clara del estado actual del proyecto, lo que facilita la comunicación con los interesados y la toma de decisiones informadas. 


    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0  
        .bg-color-8.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Sarmiento Rojas et al. (2020), sugieren utilizar métricas claves de rendimiento (KPI) junto con los diagramas de Gantt, para medir y monitorear el progreso del proyecto. Estos KPI pueden incluir el porcentaje de tareas completadas, el índice de rendimiento del cronograma (SPI) y la variación del cronograma (SV), que brindan información cuantitativa sobre el desempeño del proyecto en relación con el plan original.
        p(data-aos="fade-down") #[b Ejemplo.] En un proyecto de desarrollo de software, el gerente del proyecto actualiza regularmente el diagrama de Gantt a medida que el equipo completa las tareas. Marcan las tareas completadas, ajustan las fechas de inicio y finalización, según sea necesario, anotan cualquier problema o retraso encontrado. Además, calculan el porcentaje de tareas completadas, el SPI para evaluar el rendimiento general del proyecto. Estas actualizaciones y métricas se comunican al equipo e interesados, en reuniones de estado periódicas, lo que permite un seguimiento y una comunicación transparentes del progreso.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/30.png", data-aos="zoom-in")  

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Ajustes en tiempos y recursos, según los avances del proyecto
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/31.png", data-aos="zoom-in")      
      .col-lg-8
        p(data-aos="fade-down") A medida que el proyecto avanza, es común que surjan cambios o desafíos imprevistos que requieran ajustes en los tiempos y recursos. Los diagramas de Gantt facilitan estos ajustes al proporcionar una visión general visual del cronograma del proyecto, además de las dependencias entre tareas.

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/32.svg")
            .col-lg
              p.mb-0 Cuando se necesitan ajustes, los gerentes de proyectos pueden actualizar el diagrama de Gantt para reflejar los cambios en las fechas de inicio y finalización de las tareas afectadas, reasignar recursos, según sea necesario y modificar las dependencias si es requerido. Estos ajustes permiten al equipo adaptarse a los cambios y mantener el proyecto en camino. 


    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0  
        .bg-color-2.p-5.j1.mb-4(data-aos="fade-left")
          p.mb-0 De Zunzunegui (2023), destaca la importancia de la flexibilidad y la adaptabilidad en la gestión de proyectos, especialmente en entornos ágiles. Los gerentes de proyectos deben estar preparados para realizar ajustes rápidos en el plan del proyecto basados en la retroalimentación, los cambios en los requisitos o los desafíos imprevistos.

        p(data-aos="fade-down") #[b Ejemplo.] Durante el desarrollo de un software, el equipo descubre que una funcionalidad específica es más compleja de lo previsto por lo que requerirá más tiempo y recursos para completarse. El gerente del proyecto ajusta el diagrama de Gantt para asignar más tiempo y desarrolladores adicionales a esa tarea específica. También revisan las dependencias, ajustan las fechas de inicio y finalización de las tareas posteriores afectadas. Estos ajustes se comunican al equipo y se reflejan en una versión actualizada del diagrama de Gantt, asegurando que todos estén al tanto de los cambios y trabajen, de acuerdo con el nuevo plan.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/33.png", data-aos="zoom-in")

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://write.as/jocelyn-bernal-reynoso/diagrama-de-gantt-de-un-proyecto-de-software-ejemplo-y-utilidad" target="_blank" rel="noopener noreferrer") Bernal Reynoso, J. (2021, octubre 15). Diagrama de Gantt de un proyecto de software: ejemplo y utilidad. Write.as. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.projectmanager.com/es/diagrama-de-gantt" target="_blank" rel="noopener noreferrer") Tristancho, C. (2025). Guía para el uso del diagrama de Gantt en la Gestión de Proyectos. ProjectManageR.               

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://creati.ai/es/ai-tools/gantt-chart-ai/" target="_blank" rel="noopener noreferrer") Creati.ai. (2024). Gantt Chart AI – Crea diagramas de Gantt automáticamente con IA. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.instagantt.com/es/ai" target="_blank" rel="noopener noreferrer") Instagantt. (2024). Instagantt AI – Creador inteligente de diagramas de Gantt para proyectos. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/8_1qFZz5eHs" target="_blank" rel="noopener noreferrer") pascualbravovirtual. (2021). Ejemplo de Diagrama de Gantt (Tutorial) [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Ed_bMdzY9XE" target="_blank" rel="noopener noreferrer") Pozo, D. (2023). 2.1.Gestión de proyectos: Clickup [video]. 
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
