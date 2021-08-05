
//#region Variables

//#region Rotores
const rotors = new Array(3);
const list_rotors = new Array(3);

const static_abecedary = ([
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X",
  "Y", "Z"]).reverse();

const rotor_type_I = {
  "A": 'E', "B": 'K', "C": 'M', "D": 'F',
  "E": 'L', "F": 'G', "G": 'D', "H": 'Q',
  "I": 'V', "J": 'Z', "K": 'N', "L": 'T',
  "M": 'O', "N": 'W', "O": 'Y', "P": 'H',
  "Q": 'X', "R": 'U', "S": 'S', "T": 'P',
  "U": 'A', "V": 'I', "W": 'B', "X": 'R',
  "Y": 'C', "Z": 'J',
  "trigger": "Q"
};

const rotor_type_II = {
  "A": 'A', "B": 'J', "C": 'D', "D": 'K',
  "E": 'S', "F": 'I', "G": 'R', "H": 'U',
  "I": 'X', "J": 'B', "K": 'L', "L": 'H',
  "M": 'W', "N": 'T', "O": 'M', "P": 'C',
  "Q": 'Q', "R": 'G', "S": 'Z', "T": 'N',
  "U": 'P', "V": 'Y', "W": 'F', "X": 'V',
  "Y": 'O', "Z": 'E',
  "trigger": "E"
};

const rotor_type_III = {
  "A": 'B', "B": 'D', "C": 'F', "D": 'H',
  "E": 'J', "F": 'L', "G": 'C', "H": 'P',
  "I": 'R', "J": 'T', "K": 'X', "L": 'V',
  "M": 'Z', "N": 'N', "O": 'Y', "P": 'E',
  "Q": 'I', "R": 'W', "S": 'G', "T": 'A',
  "U": 'K', "V": 'M', "W": 'U', "X": 'S',
  "Y": 'Q', "Z": 'O',
  "trigger": "V"
};

const rotor_type_IV = {
  "A": 'E', "B": 'S', "C": 'O', "D": 'V',
  "E": 'P', "F": 'Z', "G": 'J', "H": 'A',
  "I": 'Y', "J": 'Q', "K": 'U', "L": 'I',
  "M": 'R', "N": 'H', "O": 'X', "P": 'L',
  "Q": 'N', "R": 'F', "S": 'T', "T": 'G',
  "U": 'K', "V": 'D', "W": 'C', "X": 'M',
  "Y": 'W', "Z": 'B',
  "trigger": "J"
};

const rotor_type_V = {
  "A": 'V', "B": 'Z', "C": 'B', "D": 'R',
  "E": 'G', "F": 'I', "G": 'T', "H": 'Y',
  "I": 'U', "J": 'P', "K": 'S', "L": 'D',
  "M": 'N', "N": 'H', "O": 'L', "P": 'X',
  "Q": 'A', "R": 'W', "S": 'M', "T": 'J',
  "U": 'Q', "V": 'O', "W": 'F', "X": 'E',
  "Y": 'C', "Z": 'K',
  "trigger": "Z"
};

const type_rotors = {
  'I': rotor_type_I,
  'II': rotor_type_II,
  'III': rotor_type_III,
  'IV': rotor_type_IV,
  'V': rotor_type_V
};

const rotor_1 = Object.fromEntries(Object.entries(type_rotors).slice());
const rotor_2 = Object.fromEntries(Object.entries(type_rotors).slice());
const rotor_3 = Object.fromEntries(Object.entries(type_rotors).slice());

list_rotors[0] = static_abecedary.slice();
list_rotors[1] = static_abecedary.slice();
list_rotors[2] = static_abecedary.slice();

//#endregion

//#region  Reflectores


const reflector_type_B = {
  "A": 'Y', "B": 'R', "C": 'U', "D": 'H',
  "E": 'Q', "F": 'S', "G": 'L', "H": 'D',
  "I": 'P', "J": 'X', "K": 'N', "L": 'G',
  "M": 'O', "N": 'K', "O": 'M', "P": 'I',
  "Q": 'E', "R": 'B', "S": 'F', "T": 'Z',
  "U": 'C', "V": 'W', "W": 'V', "X": 'J',
  "Y": 'A', "Z": 'T'
};

const reflector_type_C = {
  "A": 'F', "B": 'V', "C": 'P', "D": 'J',
  "E": 'I', "F": 'A', "G": 'O', "H": 'Y',
  "I": 'E', "J": 'D', "K": 'R', "L": 'Z',
  "M": 'X', "N": 'W', "O": 'G', "P": 'C',
  "Q": 'T', "R": 'K', "S": 'U', "T": 'Q',
  "U": 'S', "V": 'B', "W": 'N', "X": 'M',
  "Y": 'H', "Z": 'L'
};

const reflector = { 'UKW-B': reflector_type_B, 'UKW-C': reflector_type_C }

//#endregion

const plug_board = new Array()


let list_colors = ["red", "yellow", "blue", "green", "magenta", "cyan", "olive", "orange", "maroon", "indigo", "sienna", "lime", "teal"]
var silent = false;

let primary_key = null;
let color = null;
let next_key = false;
//#endregion

//#region Rotores
for (let index = 0; index < 3; index++) {
  $('.rotors').append('<div class="rotor" id="rotor-' + (3 - index) + '"></div>');

  $('#rotor-' + (3 - index)).append('\
    <div class = "next-letter">\
      B\
    </div >\
    <div class="current-letter">\
      A\
    </div>\
    <div class="last-letter">\
      Z\
    </div>');
}

$(".rotor").children().click(function () {
  const index = $(this).parent().attr("id").toString().replace(/\D/g, '') - 1;
  switch ($(this).attr("class")) {
    case "last-letter":
      desplazar_lista(index, -1)

      play_sound("rotor");
      break;
    case "current-letter":
      $(".enigma--settings").css("display", "block")
      break;
    case "next-letter":
      desplazar_lista(index, 1)

      play_sound("rotor");
      break;
  }

});


function desplazar_por_disparador(index, displacement) {


  const type_rotor_current = $("#rotor" + (index + 1) + "Selection option:selected").text()

  if (index + 2 <= list_rotors.length)
    type_rotor_next = $("#rotor" + (index + 2) + "Selection option:selected").text()
  else
    type_rotor_next = null

  switch (type_rotor_current) {
    case "I":
      if (list_rotors[index][0] == rotor_type_I.trigger && type_rotor_next != null) {
        desplazar_lista(index + 1, displacement);
        desplazar_por_disparador(index + 1, displacement)
      }
      break;
    case "II":
      if (list_rotors[index][0] == rotor_type_II.trigger && type_rotor_next != null) {
        desplazar_lista(index + 1, displacement);
        desplazar_por_disparador(index + 1, displacement)
      }
      break;
    case "III":
      if (list_rotors[index][0] == rotor_type_III.trigger && type_rotor_next != null) {
        desplazar_lista(index + 1, displacement);
        desplazar_por_disparador(index + 1, displacement)
      }
      break;
    case "IV":
      if (list_rotors[index][0] == rotor_type_IV.trigger && type_rotor_next != null) {
        desplazar_lista(index + 1, displacement);
        desplazar_por_disparador(index + 1, displacement)
      }
      break;

    case "V":
      if (list_rotors[index][0] == rotor_type_V.trigger && type_rotor_next != null) {
        desplazar_lista(index + 1, displacement);
        desplazar_por_disparador(index + 1, displacement)
      }
      break;
  }
}

function desplazar_lista(index_rotor, displacement) {
  if (displacement == 0)
    return;
  if (displacement > 0)
    displacement = (displacement > list_rotors[index_rotor].length / 2) ? displacement - list_rotors[index_rotor].length : displacement;
  else
    displacement = (displacement * -1 > list_rotors[index_rotor].length / 2) ? displacement + list_rotors[index_rotor].length : displacement;

  const aux = list_rotors[index_rotor].slice()
  for (let i = 0; i < list_rotors[index_rotor].length; i++) {
    let displace = i + displacement;
    displace = (displace >= list_rotors[index_rotor].length) ? displace - list_rotors[index_rotor].length : displace;
    displace = (displace < 0) ? displace + list_rotors[index_rotor].length : displace;
    list_rotors[index_rotor][displace] = aux[i];
  }

  $("#rotor-" + (index_rotor + 1) + " > .next-letter").text(list_rotors[index_rotor][list_rotors[index_rotor].length - 2]);
  $("#rotor-" + (index_rotor + 1) + " > .current-letter").text(list_rotors[index_rotor][list_rotors[index_rotor].length - 1]);
  $("#rotor-" + (index_rotor + 1) + " > .last-letter").text(list_rotors[index_rotor][0]);
  //$("#rotor" + (index_rotor + 1) + "Position").val(list_rotors[index_rotor][list_rotors[index_rotor].length - 1]);

}

//#endregion

//#region Añadiendo opciones en configuración

static_abecedary.slice().reverse().forEach(element => {
  $(".rotorPosition").append("<option value =" + element + ">" + element + "</option>")
})
//#endregion

//#region Añadir Teclas QWRTZ

$('.add-keys').append('\
<div class="key-row">\
<div class="key" data-char="Q">Q</div>\
<div class="key" data-char="W">W</div>\
<div class="key" data-char="E">E</div>\
<div class="key" data-char="R">R</div>\
<div class="key" data-char="T">T</div>\
<div class="key" data-char="Z">Z</div>\
<div class="key" data-char="U">U</div>\
<div class="key" data-char="I">I</div>\
<div class="key" data-char="O">O</div>\
</div>\
<br />\
<div class="key-row">\
<div class="key" data-char="A">A</div>\
<div class="key" data-char="S">S</div>\
<div class="key" data-char="D">D</div>\
<div class="key" data-char="F">F</div>\
<div class="key" data-char="G">G</div>\
<div class="key" data-char="H">H</div>\
<div class="key" data-char="J">J</div>\
<div class="key" data-char="K">K</div>\
</div>\
<div class="key-row">\
<div class="key" data-char="Y">Y</div>\
<div class="key" data-char="X">X</div>\
<div class="key" data-char="P">P</div>\
<div class="key" data-char="C">C</div>\
<div class="key" data-char="V">V</div>\
<div class="key" data-char="B">B</div>\
<div class="key" data-char="N">N</div>\
<div class="key" data-char="M">M</div>\
<div class="key" data-char="L">L</div>\
</div>\
');
$('.plug-board > .key-row > .key').append('<div class="circle"></div>')

//#endregion

//#region Configuración de Enigma
/*
var modal = document.getElementsByClassName("enigma--settings")[0];
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}
*/

$("#close").click(function () {
  $(".enigma--settings").css("display", "none")
});

window.onclick = function (event) {
  if (event.target == $(".enigma--settings")[0]) {
    $(".enigma--settings").css("display", "none")
  }
}


$(".rotorPosition")
  .change(function () {
    const index_rotor = $(this).attr('id').toString().replace(/\D/g, '') - 1;
    const value = $(this).children("option:selected").val();
    const displace = list_rotors[index_rotor].indexOf(value) + 1;
  });

//#endregion

//#region Keyboard

$(".key-board > .key-row > .key").click(function () { Enigma($(this).text()); });

window.onkeydown = function (event) {
  switch (event.keyCode) {
    case 8: //Borrar
      if ($('#plain-text').text().replace(/[| \n]/g, "").length > 0) {
        const last_character = $('#plain-text').text().charAt($('#plain-text').text().length - 2)
        if (last_character != ' ' && last_character != "\n") {

          desplazar_por_disparador(0, -1)
          desplazar_lista(0, -1);
        }
        const plain_text = $('#plain-text').text()
        const encrypt_text = $('#encrypt-text').text()

        $('#plain-text').text(plain_text.substr(0, plain_text.length - 2) + '|');
        $('#encrypt-text').text(encrypt_text.substr(0, encrypt_text.length - 2) + '|');

      }
      break;
    case 13: //Enter
      Add_character("\n");
      break;
    case 32: //ESC
      event.preventDefault();
      break;
    default: // Abecedario
      if ((event.keyCode >= 65 && event.keyCode < 91) || (event.keyCode >= 97 && event.keyCode < 123)) {

        Enigma(String.fromCharCode(event.keyCode).toUpperCase());

      }
      break;
  }

  /*
  if (event.keyCode == 32) {
    event.preventDefault();
  } else {
    if (event.keyCode == 13) {
      Add_character("\n")
    }
    else {
      if ((event.keyCode == 13)) {

      } else {
        if ((event.keyCode >= 65 && event.keyCode < 91) || (event.keyCode >= 97 && event.keyCode < 123)) {
          Enigma(String.fromCharCode(event.keyCode).toUpperCase());
        }
      }
    }
  }*/
};

//#endregion

//#region Plugboard
primary_key = null
next_key = false
color = null
$(".plug-board > .key-row > .key  > .circle").click(function () {
  if (!$(this).parent().hasClass("key-busy")) { //Se verifica si la tecla ya esta ocupada


    //  Ser verifica si es el inicio de la conexión o 
    //  si es una nueva conexión o si una tecla ya fue seleccionada

    if (!next_key) {
      // Si es es una nueva conexión las variables primary_key y next_key se inicializan
      primary_key = $(this)
      next_key = true
      // Se obtiene el color de la lista list_colors, y además se elimina de esa lista (para no tener repetidos)
      const index = Math.floor(Math.random() * (list_colors.length));
      color = list_colors[index];
      list_colors.splice(index, 1);
    } else {
      //Cuando se finaliza la conexión se agregan las 2 letras al array plug_board para hacer el intercambio más adelante
      plug_board.push([primary_key.parent().text(), $(this).parent().text()]) //Se agrega como array para hacer el intercambio fácilmente
      //Las variables se resetean
      next_key = false
      primary_key = null;
    }

    play_sound("plugboard")
    $(this).css("background-color", color);
    $(this).parent().addClass("key-busy");

  }
  else { //Quiere decir que la tecla presionada ya esta ocupada
    if (!next_key) { //Si la variable next_key es falso quiere decir que se esta eliminando una conexión completa

      list_colors.push($(this).css("background-color")); //Se devuelve el color a lista list_colors
      play_sound("plugboard-out")

      plug_board.forEach((element, index) => { //Se busca la letra en el array plug_board para eliminar o liberar las 2 teclas al mismo tiempo
        //Como plug_board es un array que contiene asociado las 2 letras, puedo refirme como indice 0 o indice 1
        if ($(this).parent().text().trim() == element[0] || $(this).parent().text().trim() == element[1]) {
          //Se remueve el color de fondo y también se elimina la clase "key-busy" haciendo referencia que la tecla ya no esta ocupada
          $(".plug-board > div > [data-char=" + element[0] + "] ").removeClass("key-busy")
          $(".plug-board > div > [data-char=" + element[0] + "] > div ").css("background-color", "");
          $(".plug-board > div > [data-char=" + element[1] + "] ").removeClass("key-busy")
          $(".plug-board > div > [data-char=" + element[1] + "] > div").css("background-color", "");
          //Se elimina del array plugboard
          plug_board.splice(index, 1);
        }
      });
    } else {
      if (primary_key != null) {
        //Si la variable primary_key diferente null quiere decir que se esta eliminando una conexión sin terminar o se esta queriendo conectar en una tecla ya ocupada
        if (primary_key.parent().text() == $(this).parent().text()) {
          //Si la tecla presionada es la misma previamente seleccionada se esta eliminando la conexión sin terminar

          list_colors.push($(this).css("background-color")); //Se devuelve el color a lista list_colors

          play_sound("plugboard-out")

          //Se remueve el color de fondo y también se elimina la clase "key-busy" haciendo referencia que la tecla ya no esta ocupada
          $(this).parent().removeClass("key-busy")
          $(this).css("background-color", "");
          next_key = false;
        } else {
          //Quiere decir que se esta queriendo conectar en una tecla ya ocupada
          play_sound("plugboard-error")
        }
      }
    }
  }
});

function Swap_plug_board(key) {
  for (let i = 0; i < plug_board.length; i++) {
    if (plug_board[i][0] == key) {
      return [key, plug_board[i][1]]
    }
    if (plug_board[i][1] == key) {
      return [key, plug_board[i][0]]
    }
  }
  return [key, key];
}

//#endregion

//#region buttons

$('.silent').click(function () { silent = !silent; $(this).blur(); });
$('.new-line').click(function () { Add_character("\n"); $(this).blur(); });
$('.clean').click(function () {
  $('#plain-text').text('|');
  $('#encrypt-text').text('|');

  console.clear();
  $(this).blur();
});
$('.reset').click(function () {
  location.reload();
});

//#endregion


function Cursor_paper() {
  $('#plain-text').text($('#plain-text').text().replace("|", "") + "|");
  $('#encrypt-text').text($('#encrypt-text').text().replace("|", "") + "|");

  $('textarea').scrollTop($('textarea').prop("scrollHeight"));
}

function Add_character(character) {
  $('#plain-text').text($('#plain-text').text() + character)
  $('#encrypt-text').text($('#encrypt-text').text() + character)
  Cursor_paper()

}

function play_sound(name) {
  if (!silent) {
    var audio = document.createElement("audio");
    audio.src = "sound/" + name + ".mp3"
    audio.play()
  }
}


function Enigma(key_char) {
  let value_rotor;
  let out_rotor;
  //Obtener los tipos de rotores y el tipo de reflector
  const type_rotor_1 = $("#rotor1Selection option:selected").text()
  const type_rotor_2 = $("#rotor2Selection option:selected").text()
  const type_rotor_3 = $("#rotor3Selection option:selected").text()
  const type_reflector = $("#reflectorSelection option:selected").text()

  //#region  KEY IN
  //Esto es para hacer una animación de tecla presionada
  $(".key-board > div > [data-char=" + key_char + "] ").removeAttr("style");
  $(".key-board > div > [data-char=" + key_char + "] ").width(); //Para repetir la animación
  $(".key-board > div > [data-char=" + key_char + "] ").css("animation", "key-press 1s");

  play_sound("key")
  //Desplaza el primer rotor una posición
  desplazar_lista(0, 1);
  //Desplazar por disparador
  desplazar_por_disparador(0, 1)

  $('#plain-text').text($('#plain-text').text() + key_char) //Agrega la letra al textArea de texto en claro

  //#endregion

  //#region IN
  console.log("-----------PLAIN TEXT-----------");
  console.log("Keyboard pressed:" + key_char)
  let [key_in, key_out] = Swap_plug_board(key_char);
  console.log("Plugboard: " + key_in + " -> " + key_out);

  console.log("-----------ROTOR I--------------");
  value_rotor = list_rotors[0][static_abecedary.indexOf(key_out)]
  out_rotor = rotor_1[type_rotor_1][value_rotor];
  console.log(value_rotor + " -> " + out_rotor)


  console.log("-----------ROTOR II-------------");
  value_rotor = list_rotors[1][list_rotors[0].indexOf(out_rotor)]
  out_rotor = rotor_2[type_rotor_2][value_rotor];
  console.log(value_rotor + " -> " + out_rotor)


  console.log("-----------ROTOR III------------");
  value_rotor = list_rotors[2][list_rotors[1].indexOf(out_rotor)]
  out_rotor = rotor_3[type_rotor_3][value_rotor];
  console.log(value_rotor + " -> " + out_rotor)
  //#endregion

  //#region REFLECTOR
  console.log("-----------REFLECTOR------------");
  value_rotor = static_abecedary[list_rotors[2].indexOf(out_rotor)]
  out_rotor = reflector[type_reflector][value_rotor];
  console.log(value_rotor + " -> " + out_rotor)
  //#endregion

  //#region OUT
  //KEYS es el abecedario externo y values es el interno
  console.log("-----------ROTOR III------------");
  value_rotor = list_rotors[2][static_abecedary.indexOf(out_rotor)]
  out_rotor = Object.keys(rotor_3[type_rotor_3])[Object.values(rotor_3[type_rotor_3]).indexOf(value_rotor)];
  console.log(Object.keys(rotor_3[type_rotor_3]).find((key) => (rotor_3[type_rotor_3][key] === value_rotor)))
  console.log(Object.keys(rotor_3[type_rotor_3]).find(key => rotor_3[type_rotor_3][key] === value_rotor))

  console.log(value_rotor + " -> " + out_rotor)

  console.log("-----------ROTOR II-------------");
  value_rotor = list_rotors[1][list_rotors[2].indexOf(out_rotor)];
  out_rotor = Object.keys(rotor_2[type_rotor_2])[Object.values(rotor_2[type_rotor_2]).indexOf(value_rotor)];
  console.log(value_rotor + " -> " + out_rotor)

  console.log("-----------ROTOR I--------------");
  value_rotor = list_rotors[0][list_rotors[1].indexOf(out_rotor)];
  out_rotor = Object.keys(rotor_1[type_rotor_1])[Object.values(rotor_1[type_rotor_1]).indexOf(value_rotor)];
  console.log(value_rotor + " -> " + out_rotor)

  console.log("----------ENCRYPT TEXT----------");
  [key_in, key_out] = Swap_plug_board(static_abecedary[list_rotors[0].indexOf(out_rotor)]);
  console.log("Plugboard: " + key_in + " -> " + key_out);
  console.log("--------------------------------\n\n\n\n");
  //#endregion

  //#region KEY OUT
  $(".light-board > div > [data-char=" + key_out + "] ").removeAttr("style");
  $(".light-board > div > [data-char=" + key_out + "] ").width();
  $(".light-board > div > [data-char=" + key_out + "] ").css("animation", "light_yellow 2s");

  $('#encrypt-text').text($('#encrypt-text').text() + key_out)

  //#endregion

  if ((($('#plain-text').text().substr($('#plain-text').text().lastIndexOf("\n") + 1).replace(/[ |]/g, '').length) % 5) == 0)
    Add_character(' ')


  Cursor_paper()

}




