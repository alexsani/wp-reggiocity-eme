ReggioCity Event Made Easy Plugins
==================================
Prodotto Wordpress per estendere "Events Made Easy" migliorando la grafica


Widget Lista Eventi
----------------------------------
Il widget lista eventi deve avere il seguente formato (lo si imposta
direttamente nel widget):

    <ul class="widget_eme_list">
        <li>
            <p class="calendar_icon">#j <em>#M #y</em></p>
            <p class="event_desc">#_LINKEDNAME<br />#_TOWN</p>
        </li>
    </ul>


Vista Evento Singolo
----------------------------------
Per visualizzare anche le immagini nell'evento singolo, in
Eventi -> Impostazioni -> Formato evento -> Fomato predefinito di un singolo evento
aggiungere:

    <p>#_EVENTIMAGE</p>

Esempio:

    <p><span class="bold">Inizio:</span> #j #M #Y - #H:#i</p>
    <p><span class="bold">Fine: </span>#@j #@M #@Y - #@H:#@i</p>
    <p>#_NOTES</p>
    [events_if tag='#ESC_TOWN']
    <pre>
        <span class="bold">Dove:</span>
        <span>#_LOCATIONNAME</span>
        <span>#_ADDRESS, #_TOWN</span>
    </pre>
    <p>#_MAP</p>
    [/events_if]
    <hr />
    <p>#_EVENTIMAGE</p>

