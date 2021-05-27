if (/section/.test(window.location.href)) {
        document.getElementById('hiddenoverview').style.display = 'none';
      }

      $(function() {
        if ( $( "#accordion1, #accordion2" ).length ) {
                $("#accordion").accordion({
                        header: "h5",
                        collapsible: false,
                        heightStyle: "content",
                        active: 0,
                });
         }
       });
