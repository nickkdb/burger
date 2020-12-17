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
                html += `<button class= "eat" value= ${el.id}> Devour </button> </p>`
                list.append(html);
            } else {
                html += `<button class= "btn" value= ${el.id}> Delete </button> </p>`
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

    $(document).on("click", ".eat", function() {
        let id = $(this).val();
        let status = {
            devoured: true
        }


        $.ajax(`/burgers/${id}`, {
            type: "PUT",
            data: JSON.stringify(status),
            dataType: 'json',
            contentType: 'application/json'
        }).then(function() {
            console.log("changed status to devoured!");
            location.reload();
        });
    })
})