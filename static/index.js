
console.log('12')

var factory = kf.EditorFactory.create( $( "#kfEditorContainer" )[ 0 ], {
    render: {
        fontsize: 40
    },
    resource: {
        path: "../asset/formula/resource/"
    }
} );

factory.ready( function ( KFEditor ) {

    // this指向KFEditor

    this.execCommand( "render", "\\placeholder" );
    this.execCommand( "focus" );

    var _this = this;

    this.registerCommand( "clear", this, function ( str ) {
        console.log('情况'+str)
        //$$.publish( "data.select", '\\approx');
    } );

    this.execCommand('clear', 'all');
    window.kfe = this;


} );

$("#downloadBtn").click(function(){

    window.kfe.execCommand( "get.image.data", function (data) {

        console.log(data);

        console.log(data.img)

        var file = new File(data.img, "测试.png", {type: "image/png"});
        saveAs(file);

        jQuery("#base64").val(data.img);
        jQuery('#form-download').submit();

    } );

});