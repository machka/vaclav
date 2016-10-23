$(document).ready(function() {
      // $('.thumbnail').click(function(event){
      //       $('.modal-body').empty();
      //       var title = $(this).parent('span').attr("title");
      //       $('.modal-title').html(title);
      //       $($(this).parents('div').html()).appendTo('.modal-body');
      //       $('#myModal').modal({show:true});
      //       event.preventDefault();
      // });
      
      var router = new Router()
      .addRoute('#/', function(req, next){
            // $("#tab-onas").show();
            $("#li-onas").addClass('active');

            $("#dynamic-content").html($("#template-onas").html());
      })
      .addRoute('#/onas', function(req, next){
            // $("#tab-onas").show();
            $("#li-onas").addClass('active');

            $("#dynamic-content").html($("#template-onas").html());
      })
      .addRoute('#/servis', function(req, next){
            // $("#tab-servis").show();
            $("#li-servis").addClass('active');

            $("#dynamic-content").html($("#template-servis").html());
      })
      .addRoute('#/bazar', function(req, next){
            // $("#tab-bazar").show();
            $("#li-bazar").addClass('active');

            $("#dynamic-content").html($("#template-bazar").html());
            
            $('ul.first').bsPhotoGallery({
                  "classes" : "col-lg-4 col-md-4 col-sm-4 col-xs-6",
                  "hasModal" : true
            });
      })
      .addRoute('#/kontakt', function(req, next){
            // $("#tab-kontakt").show();
            $("#li-kontakt").addClass('active');

            $("#dynamic-content").html($("#template-kontakt").html());

            var stred = SMap.Coords.fromWGS84(14.3771451, 50.1341075);
            var mapa = new SMap(JAK.gel("mapa"), stred, 17);
            mapa.addDefaultLayer(SMap.DEF_BASE).enable();
            mapa.addDefaultControls();

            var layer = new SMap.Layer.Marker();
            mapa.addLayer(layer);
            layer.enable();

            var options = {};
            var marker = new SMap.Marker(stred, "myMarker", options);
            layer.addMarker(marker);
      })
      .before(function(req,next){
            $("#tab-onas").hide();
            $("#tab-servis").hide();
            $("#tab-bazar").hide();
            $("#tab-kontakt").hide();
            $("ul.nav li").each(function(){
                $(this).removeClass('active');
            })
            next();
      })
      .run();
});