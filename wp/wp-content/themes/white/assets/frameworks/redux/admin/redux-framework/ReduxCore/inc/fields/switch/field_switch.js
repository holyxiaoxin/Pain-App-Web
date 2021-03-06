/* global redux_change */

/**
 * Switch
 * Dependencies        : jquery
 * Feature added by    : Smartik - http://smartik.ws/
 * Date            : 03.17.2013
 */

(function( $ ) {
    "use strict";

    $.reduxSwitch = $.reduxSwitch || {};

    $( document ).ready(
        function() {
            $.reduxSwitch.init();
        }
    );

    $.reduxSwitch.init = function() {
        $( ".cb-enable" ).click(
            function() {
                if ( $( this ).hasClass( 'selected' ) ) {
                    return;
                }

                var parent = $( this ).parents( '.switch-options' );

                $( '.cb-disable', parent ).removeClass( 'selected' );
                $( this ).addClass( 'selected' );
                $( '.checkbox-input', parent ).val( 1 );

                redux_change( $( '.checkbox-input', parent ) );

                //fold/unfold related options
                var obj = $( this );
                var $fold = '.f_' + obj.data( 'id' );

                $( $fold ).slideDown( 'normal', "swing" );
            }
        );

        $( ".cb-disable" ).click(
            function() {
                if ( $( this ).hasClass( 'selected' ) ) {
                    return;
                }

                var parent = $( this ).parents( '.switch-options' );

                $( '.cb-enable', parent ).removeClass( 'selected' );
                $( this ).addClass( 'selected' );
                $( '.checkbox-input', parent ).val( 0 );

                redux_change( $( '.checkbox-input', parent ) );

                //fold/unfold related options
                var obj = $( this );
                var $fold = '.f_' + obj.data( 'id' );

                $( $fold ).slideUp( 'normal', "swing" );
            }
        );

        $( '.cb-enable span, .cb-disable span' ).find().attr( 'unselectable', 'on' );
    };
})( jQuery );