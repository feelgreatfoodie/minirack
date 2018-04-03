$(document).ready(function() {

  $('#btn-go').click((event) => {
    $.ajax({
      url: '/minidiscs',
      type: 'GET',
      success: (data) => {
        console.log(data)
        // UPDATE DOM!
        for (var i = 0; i < data.length; i++) {
          $('.doohickey').append(`
            <li data-recordid="${data[i].id}">
              ${data[i].artist} - ${data[i].title}
              <img class="cover" src="${data[i].cover_url}"/>
              <button class="del">X</button>
            </li>
          `)
        }
        $('.del').click(deleteHandler)

      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log('OOPS:', errorThrown)
      }
    })
  })
})

function deleteHandler(event) {
  var id = $(event.target).parent().attr('data-recordid')
  console.log('id', id)

  $.ajax({
    url: `/minidiscs/${id}`,
    type: 'DELETE',
    success: (data) => {
      console.log(data)
    },
    error: function(jqXhr, textStatus, errorThrown) {
      console.log('OOPS:', errorThrown)
    }
  })
}
