var currentID = 0;

$(document).ready(function() {
    //enableDraggingAndResizing();

    $("#addRectangle").click(function(event) {
        event.stopPropagation();
        $("#content").append($("<div>").addClass("wrapper objectWrapper").attr("id",""+currentID).append($("<div>").addClass("object")));
        $("#layers").prepend($("<li>").addClass("layer").attr("id","l_"+currentID).text("layer_"+currentID));
        $("#"+currentID).click(function(event) {
            event.stopPropagation();
            disableAllDraggingAndResizing();
            $(this).draggable({ grid : [4,4], containment: "parent" }).resizable({ grid: 4, handles: 'nw, n, e, se, s, w, ne, sw' }).css("border-style","dashed").css("padding","3px");
            $("#l_" + $(this).attr("id")).css("background-color","white").css("border-color","#0094ff");
        });
        $("#l_"+currentID).click(function(event) {
            event.stopPropagation();
            disableAllDraggingAndResizing();
            $("#"+$(this).attr("id").substring(2)).draggable({ grid : [4,4], containment: "parent" }).resizable({ grid: 4, handles: 'nw, n, e, se, s, w, ne, sw' }).css("border-style","dashed").css("padding","3px");
            $(this).css("background-color","white").css("border-color","#0094ff");
        });
        reLayer();
        currentID++;
    });

    $("#addText").click(function() {
        event.stopPropagation();
        $("#content").append($("<div>").addClass("wrapper textWrapper").attr("id",""+currentID).append($("<div>").addClass("text").text("This is some sample text")));
        $("#layers").prepend($("<li>").addClass("layer").attr("id","l_"+currentID).text("layer_"+currentID));
        $("#"+currentID).click(function(event) {
            event.stopPropagation();
            disableAllDraggingAndResizing();
            $(this).draggable({ grid : [4,4], containment: "parent" }).resizable({ grid: 4, handles: 'e, w' }).css("border-style","dashed").css("padding","3px");
            $("#l_" + $(this).attr("id")).css("background-color","white").css("border-color","#0094ff");
        });
        $("#l_"+currentID).click(function(event) {
            event.stopPropagation();
            disableAllDraggingAndResizing();
            $("#"+$(this).attr("id").substring(2)).draggable({ grid : [4,4], containment: "parent" }).resizable({ grid: 4, handles: 'e, w' }).css("border-style","dashed").css("padding","3px");
            $(this).css("background-color","white").css("border-color","#0094ff");
        });
        reLayer();
        currentID++;
    });

    $("#content").click(function() {
        disableAllDraggingAndResizing();
    });

    $("#layers").sortable();
    $( "#layers" ).bind("sortupdate", function(event, ui) {
        reLayer();
    });
});

function disableAllDraggingAndResizing() {
    $(".wrapper").draggable("destroy").resizable("destroy").css("border-style","hidden").css("padding","4px");
    $(".layer").css("background-color","#d9d9d9").css("border-color","black");
}

function reLayer() {
    $($(".layer").get().reverse()).each(function(index) {
        $("#"+$(this).attr("id").substring(2)).css("z-index",""+index);
    });
}