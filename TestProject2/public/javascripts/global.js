var userListData = [];

$(document).ready(function() {
  populateTable();
});

function populateTalbe() {
  var tableContent = '';

  $.getJSON('/users/userlist', function(data) {
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<tr><a hred="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
      tableContent += '<tr>' + this.email + '</td>';
      tableContent += '<tr><a hred="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
      tableContent += '</tr>';

    });

    $('#userList table tbody').html(tableContent);
  });
};
