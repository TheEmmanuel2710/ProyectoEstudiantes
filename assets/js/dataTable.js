  var idioma = {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar:",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
      "sFirst": "Primero",
      "sLast": "Último",
      "sNext": "Siguiente",
      "sPrevious": "Anterior"
    },
    "oAria": {
      "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    },
    "buttons": {
      "copyTitle": 'Informacion copiada',
      "copyKeys": 'Use your keyboard or menu to select the copy command',
      "copySuccess": {
        "_": '%d filas copiadas al portapapeles',
        "1": '1 fila copiada al portapapeles'
      },
      "pageLength": {
        "_": "Mostrar %d filas",
        "-1": "Mostrar Todo"
      }
    }
  };

  var empresa = "SISTEMA GESTIÓN DE ESTUDIANTES";
  var fecha   = new Date();
  var hoy     = fecha.getDate()  +"/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();

  /**
   *
   * @param {*} tabla tabla a utilizar
   * @param {*} titulo titulo a colocar en el documento a exportar
   * @param {*} columnas número de columnas en el datatable
   */
  function cargarDataTable(tabla,titulo,col) {
    var columnas = [];
    for (i = 0; i<col; i++) {
      columnas.push(i);
    }
    if (col>6) {
      orientacion = "landscape";
    } else {
      orientacion = "portrait";
    }
    tabla.dataTable({
      "paging": true,
      "destroy":true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true,
      "language": idioma,
      "lengthMenu": [[5, 20, 50, -1], [5, 20, 50, "Mostrar Todo"]],
      dom: 'Bfrtip',
      buttons: {
        dom: {
          container: {
            tag: 'div',
                  
          },
          buttonLiner: {
            tag: null
          }
        },
        buttons: [
          {
            extend: 'pageLength',
            titleAttr: 'Registros a mostrar',
            lassName: 'selectTable'
          },
          {
            extend: 'copyHtml5',
            title: empresa,
            className:'bg-dark',
            titleAttr:'Copiar Datos',
            text:'<i class="fa fa-files-o text-white fw-bold"></i>',
            messageTop: titulo + "       Fecha: " + hoy,
            exportOptions: {
              columns:columnas
            }
          },
          {
            extend: 'pdfHtml5',
            footer: true,
            title: empresa,
            titleAttr:'Generar PDF',
            className:"bg-dark",
            download:'open',
            text:'<i class="fa fa-file-pdf-o text-white sytle="fon-size:2rem;"></i>',
            messageTop: titulo,
            orientation: orientacion,
            pageSize: 'LETTER',
            exportOptions: {
              columns: columnas
            },
            customize: function (doc) {
              doc.content[1].margin = [5, 5, 5, 5],
              doc.pageMargins = [20, 35, 20,30 ],
              doc.styles.title = {
                color: 'black',
                fontSize: '18',
                alignment: 'center'
              },
              doc.styles.message = {
                color: 'black',
                fontSize: '14',
                alignment: 'center'
              },
              doc.styles['td:nth-child(2)'] = {
                width: '100px',
                'max-width': '150px'
              },
              doc.styles.tableHeader = {
                fillColor: '#00324D',
                color: 'white',
                alignment: 'center',
              },
              doc['footer']=(function(page, pages) {
                return {
                  columns: [
                    {
                      text: "Fecha: " + hoy,
                      alignment: 'lef',
                      color:'black',
                    },
                    {
                      text: "IT MANAGEMENT",
                      alignment: 'center',
                      color:'black',
                    },
                    {
                      alignment: 'right',
                      color:'black',
                      text: ['página ', { text: page.toString() },  ' de ', { text: pages.toString() }]
                    }
                  ],
                  margin: [50, 0]
                }
              });
            }
          },
          {
            extend: 'excelHtml5', 
            title: empresa,
            titleAttr:'Generar Excel',
            className:'bg-dark',
            text: '<i class="fa fa-file-excel-o text-white"></i>',
            messageTop: titulo + "       Fecha: " + hoy,
            exportOptions: {
              columns: columnas
            },
          },
          {
            extend: 'csvHtml5', 
            title: empresa,
            titleAttr:'Generar CSV',
            className:'bg-dark',
            text: '<i class="fa fa-file-text-o text-white"></i>',
            messageTop: titulo + "       Fecha: " + hoy,
            exportOptions: {
              columns: columnas
            }
         },
         {
            extend: 'print',
            title: empresa,
            titleAttr:'Imprimir',
            className:'bg-dark',
            text:'<i class="fa fa-print text-white"></i>',
            messageTop: titulo + "       Fecha: "+hoy,
            exportOptions: {
              columns: columnas
            }
         },
        ]
      }
    });
  }