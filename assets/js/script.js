$( document ).ready(function() {

    //generate guids on button click
    $("#generate-guid").click(function() {
       var quantity = $("#quantity").val();

       var return_data = "";

       //loop to total quantity and generate guids
       for (let i = 0; i < quantity; i++) {
            return_data += generateGUID()+'\n';
        }

        //set guid input data
        $("#guid-data").val(return_data);

        //set hidden guid input data
        $("#guid-hidden-data").val(return_data);
    });


    //this functions generate a GUID
    function generateGUID(){
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
          );
    }

    //check if to change case
    $('#uppcase').click(function(){
        //get current guids
        var guids = $("#guid-data").val();

        //if guid field not empty
        if(guids !== ""){
            if($(this).prop("checked") == true){  
                //to uppercase
                $("#guid-data").val(guids.toUpperCase());

                //also set hidden guid input data
                $("#guid-hidden-data").val(guids.toUpperCase());
            }
            else if($(this).prop("checked") == false){
                //to lowercase
                $("#guid-data").val(guids.toLowerCase());

                //also set hidden guid input data
                $("#guid-hidden-data").val(guids.toLowerCase());
            }
        }
    });
    

    //check if to remove or add hyphens
    $('#hyphens').click(function(){
        //get current guids
        var guids = $("#guid-data").val();

        var hidden_guids = $("#guid-hidden-data").val();

        //if guid field not empty
        if(guids !== ""){
            if($(this).prop("checked") == true){  
                //set hyphens using hidden data
                $("#guid-data").val(hidden_guids);
            }
            else if($(this).prop("checked") == false){
                //remove hyphens
                $("#guid-data").val(guids.replace(/-/g, ""));
            }
        }
    });

});