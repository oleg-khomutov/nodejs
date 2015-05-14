var userListData = [];

$(document).ready(function() {
  populateTable();
});

function populateTable() {
  var tableContent = '';

  $.getJSON('/users/userlist', function(data) {
    $.each(data, function(data) {
      tableContent += '<tr>';
      tableContent += '<td><a hred="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
      tableContent += '<td>' + this.email + '</td>';
      tableContent += '<td><a hred="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
      tableContent += '</tr>';

    });

    $('#userList table tbody').html(tableContent);
  });
};
