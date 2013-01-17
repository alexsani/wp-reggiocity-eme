ReggioCity Event Made Easy Plugins
----------------------------------
Prodotto Wordpress per estendere "Events Made Easy" migliorando la grafica


Widget Lista Eventi
----------------------------------
Il widget lista eventi deve avere il seguente formato (lo si imposta
direttamente nel widget):

<ul class="widget_eme_list">
    <li>
        <p class="calendar_icon">#j <em>#M #y</em></p>
        <p class="event_desc">
        #_LINKEDNAME
        <br />
        #_TOWN
        </p>
    </li>
</ul>


Vista Evento Singolo
----------------------------------
Per visualizzare anche le immagini nell'evento singolo, in
Eventi -> Impostazioni -> Formato evento -> Fomato predefinito di un singolo evento
aggiungere:

<p>#_EVENTIMAGE</p>
