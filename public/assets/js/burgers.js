$(function() {
    $.ajax("/burgers", {
        type: "GET"
    }).then(data => {
        let burgers= data.burgers;
        let list= $("#listburgs");
        let eaten= $("#devoured");

        for (let el of burgers) {         
            if (el.devoured === 0) { 
                let html= `<div class= "row eat"> 
            <div class= "col-md-8 eat"> ${el.id}. ${el.burger_name} </div>
            <div class= "col-md-4"> <button class= "btn eat" value= ${el.id}> Devour </button></div>
            </div>`
                list.append(html);
            } else {
                let html= `<div class= "row del"> 
            <div class= "col-md-8 del"> ${el.id}. ${el.burger_name} </div>
            <div class= "col-md-4"> <button class= "btn del" value= ${el.id}> Delete </button></div>
            </div>`
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