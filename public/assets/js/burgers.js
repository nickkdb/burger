$(function() {
    $.ajax("/burgers", {
        type: "GET"
    }).then(data => {
        let burgers= data.burgers;
        let list= $("#listburgs");
        let eaten= $("#devoured");

        for (let el of burgers) {
            let html= `<p> ${el.id}. ${el.burger_name}`
            if (el.devoured === 0) {
                list.append(html);
            } else {
                eaten.append(html);
            }
        }
    });

    $(document).on("click", "#submit", function(e) {
        
        let newBurg = {
            name: $("#addburg").val().trim(),
            devoured: 0
        };

        $.ajax("/burgers", {
            type: "POST",
            data: JSON.stringify(newBurg),
            dataType: 'json',
            contentType: 'application/json'
        }).then(function() {
            console.log("burger added!");
            location.reload();
        });
    });
})