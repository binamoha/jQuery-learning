$(document).ready(function() {                    // Lorsque le document est chargé
    $(".load_page_on_click").click(function() {   // Lorsque l’on clique sur un élément d'attribut class "load_page_on_click"
        var email = $("input[name=email]").val(); // Variable contenant la valeur d'un élément input d'attribut name "email"
        $.ajax({                         // Exécution d’une requête Ajax avec la configuration donnée par l'objet suivant :
            async: "true",               // - requête asynchrone
            type: "GET",                 // - type HTTP GET
            url: "mapage.php",           // - URL de la page à charger
            data: "email=" + encodeURIComponent(email) + "&action=get_email", // - données à envoyer
            error: function(errorData) { // - fonction de rappel en cas d’erreur
                $("#error").html(errorData);
            },
            success: function(data) {    // - fonction de rappel pour le traitement des données reçues en cas de succès
                $("#container").html(data); $("#error").append("Contenu chargé");
            }
        }); // Fermeture de l'appel à la fonction $.ajax
    });     // Fermeture de la fonction de rappel du $(".load_page_on_click").click
});         // Fermeture de la fonction de rappel du $(document).ready