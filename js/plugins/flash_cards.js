$(document).ready(function() {
    // FLIP
    $('#flipper').bind('click', function() {
        $('.card.current').toggleClass('flip');
    });

    var obj = words;
    // Spreadsheet start
    var data = [
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', '']
        ],
        container = document.getElementById('example'),
        hot;

    hot2 = new Handsontable(container, {
        data: data,
        minSpareRows: 1,
        colHeaders: true,
        colWidths: [285, 285],
        colHeaders: ['Side 1', 'Side 2'],
    });
    

    function bindDumpButton() {

        Handsontable.Dom.addEvent(document.body, 'click', function(e) {

            var element = e.target || e.srcElement;

            if (element.nodeName == "BUTTON" && element.name == 'dump') {
                var name = element.getAttribute('data-dump');
                var instance = element.getAttribute('data-instance');
                var hot = window[instance];
                this.obj = hot.getData();
                populateCards(this.obj);
                $("#dialog1").dialog('close');
            }
        });
    }

    bindDumpButton();
    
    populateCards(obj);
    
    // Populate the cards here
    
    function populateCards(obj){
    obj_length = obj.length;
    $("#deck").empty();
    for (var i = 0; i < obj_length; i++) {
        prop = obj[i];
        if(prop[0]){
            new_card = '<li class="card"><div class="side_one"><p>' + prop[0] + '</p></div><div class="side_two"><p>' + prop[1] + '</p></div</li>';
            $("#deck").append(new_card);
        }
    }
    new_card = '<li class="card"><div class="side_one"><p>Last card</p></div><div class="side_two"><p>Press right arrow to start again</p></div</li>';
    $("#deck").append(new_card);
    if($("#deck li").length > 1){
        cycle();
    }
    }

    //Modal Popup

    $(function() {
        $("#dialog1").dialog({
            autoOpen: false,
            width: 600,
            height: 540,
            modal: false
        });

        $("#opener").click(function() {
            $("#dialog1").dialog('open');
        });
    });

    // CYCLE
    function cycle(){
    $('#deck').cycle({
        after: onAfter,
        before: onBefore,
        fx: 'shuffle',
        next: '#next',
        prev: '#prev',
        shuffle: {
            top: -30,
            left: 20
        },
        timeout: 0,
        speed: "fast"
    });
    };

    function onBefore() {
        $(this).parent().find('.current').removeClass('current');
    }

    function onAfter() {
            $(this).addClass('current');
        }
        // Keyboard Nav
    $(document).keydown(function(e) {
        var keyCode = e.keyCode || e.which;
        key = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            enter: 13,
            space: 32,
            questionMark: 191
        };

        switch (keyCode) {
            case key.left:
                $('#deck').cycle('prev');
                e.preventDefault();
                break;
            case key.right:
                $('#deck').cycle('next');
                e.preventDefault();
                break;
            case key.up:
            case key.down:
            case key.enter:
            case key.space:
                if($("#dialog1").dialog('isOpen'))
                {
                    return true;
                }
                else {
                $('.current').toggleClass('flip');
                e.preventDefault();
                break;
                }
            case key.questionMark:
                $('#keyboard_shortcuts').fadeToggle();
                e.preventDefault();
                break;
        }
    });
    $('#keyboard_shortcuts_toggle').click(function() {
        $('#keyboard_shortcuts').fadeToggle();
    });
});