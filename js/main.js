$(document).ready(function() {
  var table = $('#example').DataTable({
    columns: [{
      "title": "Code",
      "data": "Code"
    }, {
      "title": "Name",
      "data": "Name"
    },{
      "title": "Provider",
      "data": "Provider"
    }, {
      "title": "Index",
      "data": "Index"
    }, {
      "title": "Class",
      "data": "Class"
    }, {
      "title": "Location",
      "data": "Location"
    }, {
      "title": "Annual Fee (%)",
      "data": "Annual Fee"
    }, {
      "title": "TC (%)",
      "data": "TC"
    }, {
      "title": "TER (%)",
      "data": "TER"
    }, {
      "title": "TIC (%)",
      "data": "TIC"
    }],
    paging: false,
    fixedHeader: true,
    order: [[ 0, "asc" ]]
  });

  load(table);
});

function load(table) {
  var file = 'data/etfs.csv';
  $.get(file, function(csv) {
    table.rows.add($.csv.toObjects(csv)).draw();
  });
}
