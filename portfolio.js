$(document).ready(()=>{
    $('.nav-item a').click((event)=>{
      let navItem = $(event.currentTarget);
      $('.nav-item a').removeClass('active')
    navItem.addClass('active') 
   })
  })