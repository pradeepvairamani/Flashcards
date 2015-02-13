<!doctype html>
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Flash Cards</title>
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/style.css">
  
  <script src="http://handsontable.com/dist/handsontable.full.js"></script>
  <link rel="stylesheet" media="screen" href="http://handsontable.com/dist/handsontable.full.css">
  <link rel="stylesheet" media="screen" href="http://handsontable.com/demo/css/samples.css">

  <!-- <link href="http://fonts.googleapis.com/css?family=Schoolbell" rel="stylesheet" type="text/css"> -->
  <!-- <script src="js/vendor/modernizr-2.5.3.min.js"></script> -->
</head>
<body>

  <h1>Flash Cards</a></h1>

  <ul id="deck">
  </ul>

  <div id="nav_deck">
    <span class="icon" id="prev" data-icon="<"><span class="visuallyhidden">Previous</span></span>
    <span class="icon" id="flipper" data-icon="/"><span class="visuallyhidden">Flip</span></span>
    <span class="icon" id="next" data-icon=">"><span class="visuallyhidden">Next</span></span>
  </div>

  <div id="keyboard_shortcuts">
    <h2>Keyboard Shortcuts</h2>
    <table>
      <tbody>
        <tr>
          <td>Previous Card</td>
          <td>&larr;</td>
        </tr>
        <tr>
          <td>Next Card</td>
          <td>&rarr;</td>
        </tr>
        <tr>
          <td>Flip Card</td>
          <td>&uarr; <span class="or">/</span> &darr; <span class="or">/</span> Return <span class="or">/</span> Space </td>
        </tr>
        <tr>
          <td>Show/Hide Keyboard Shortcuts</td>
          <td>?</td>
        </tr>
      </tbody>
    </table>
  </div>

  <a href="#" id="opener" class="myButton">Create your own flashcards!!!</a>

  <div id="dialog1" class="popup" title="Enter flashcard data and then click the generate button" hidden="hidden">
    <button class="button-success" name="dump" data-dump="#example2" data-instance="hot2" title="Prints current data source to Firebug/Chrome Dev Tools">
      Generate Flashcards
    </button>
    <div id="example" class="handsontable"></div></div>
    
    

    <div class="icon" id="keyboard_shortcuts_toggle" data-icon="k"><span class="visuallyhidden">Keyboard Shortcuts</span></div>


    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    
    <script src="http://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>

    <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css" />

    <script src="js/jquery.cycle.js"></script>
    <script src="js/flash_cards.js"></script>
    <script src="js/jsons.js"></script>
  </body>
  </html>
