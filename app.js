function makeGrid() {
for (let i = 0; i < 64; i++) {
    let newDiv = $('<div class="cell">')
    $('.grid').append(newDiv);
}
}
makeGrid();

const palette = [
    'red',
    'blue',
    'yellow',
    'green',
    'pink',
    'white',
    'black',
    'purple'
]

// $('.palette button').first().addClass('active');


function makePalette() {
    for (let i = 0; i < palette.length; i++) {
        const nextColor = palette[i]
        const button = $('<button>')
        .css('backgroundColor', nextColor);
        $('.palette').append(button);
    }
    
    $('.palette button').first().addClass('active');
}

makePalette();

function onPaletteClick() {
    $('.palette button').removeClass('active');
    $(this).addClass('active')
}

$('.palette button').click(onPaletteClick);

function onGridClick() {
    const element = $(this)
    if (element.css('backgroundColor') === $('.palette .active').first().css('backgroundColor')) {
      element.css('backgroundColor', 'rgba(0, 0, 0, 0)');
    }
    else {
       element.css('backgroundColor', $('.palette .active').first().css('backgroundColor'))
    } 
}
$('.grid .cell').click(onGridClick);
    
    // $('.grid .cell').click(onGridClick);

// $('.grid .cell').click(onGridClick);


function onClearClick() {
   $('.grid .cell').css('backgroundColor', "");
}

$('.controls .clear').click(onClearClick);

function onFillAllClick() {
    let color = $('.palette .active').css('backgroundColor');
     $('.grid .cell').css('backgroundColor', color);
}

$('.controls .fill-all').click(onFillAllClick);

function onFillEmpty() {
    const elements = $('.grid .cell')

    for (let index = 0; index < elements.length; index = index + 1) {
      let nextElement = $( elements[index] );
      if (nextElement.css('backgroundColor') == 'rgba(0, 0, 0, 0)') {
          nextElement.css('backgroundColor', $('.palette .active').css('backgroundColor'))
      }
    }
}

$('.controls .fill-empty').click(onFillEmpty)


// function addColor() {

// }





// const redButton = $('<button>')
//     .css('backgroundColor', 'red');

// const blueButton = $('<button>')
//     .css('backgroundColor', 'blue');
    
// const yellowButton = $('<button>')
//     .css('backgroundColor', 'yellow');
    
// const greenButton = $('<button>')
//     .css('backgroundColor', 'green');

   
    // palette.append(blueButton);
    // palette.append(yellowButton);
    // palette.append(greenButton);
    

    

