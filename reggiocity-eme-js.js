jQuery(document).ready( function() {
    
    //Verifico se sono all'interno di un evento
    if (jQuery("#eme-location-data").length > 0){
        //Sposto le opzioni non utilizzate in una nuova sezione
        jQuery("#urldiv").after('<div class="postbox closed" id="div_event_page_advances_option"></div>');
        jQuery("#div_event_page_advances_option").html('<div class="handlediv" title="Click to toggle"><br /></div>');
        jQuery("#div_event_page_advances_option .handlediv").after('<h3 class="hndle"><span> Opzioni Avanzate </span></h3>');
        jQuery("#div_event_page_advances_option .hndle").after('<div class="inside"></div>');
        jQuery("#div_event_page_title_format").appendTo("#div_event_page_advances_option .inside");
        jQuery("#div_event_single_event_format").appendTo("#div_event_page_advances_option .inside");
        jQuery("#div_event_contactperson_email_body").appendTo("#div_event_page_advances_option .inside");
        jQuery("#div_event_registration_recorded_ok_html").appendTo("#div_event_page_advances_option .inside");
        jQuery("#div_event_respondent_email_body").appendTo("#div_event_page_advances_option .inside");
        jQuery("#div_event_registration_pending_email_body").appendTo("#div_event_page_advances_option .inside");
        jQuery("#div_event_registration_form_format").appendTo("#div_event_page_advances_option .inside");
    }
    
    
    /* Hack per IE7 che non visualizza correttamente i filtri nella sezione admin */
    
    jQuery('select[name="scope"]').css('float', 'none');
    jQuery('select[name="event_status"]').css('float', 'none');
    jQuery('select[name="category"]').css('float', 'none');

    /* Fine hack per IE7 */
    
    
});