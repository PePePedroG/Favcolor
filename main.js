// Default data
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let savedColors = ['#0A89FF'];
let newColor = '#0A89FF';
deleteColor(); 
const btnPrimary = document.querySelector('.btn-primary');
const btnSecondary = document.querySelector('.btn-secondary');

// Generate color
btnPrimary.addEventListener('click', function(){
    newColor = '#';

    for(let i = 0; i < 6; i++){
      let randomSymbol = Math.floor(Math.random() * hex.length);
      newColor += hex[randomSymbol];
    }

    // New styles

    // hexCode
    document.querySelector('.app__hexCode').textContent = newColor;
    document.querySelector('.app__hexCode').style.color = newColor;

    // logo & header & footer
    document.querySelector('.navbar__logo').style.color = newColor;
    document.querySelector('.description__header').style.color = newColor;
    document.querySelector('.footer').style.background = newColor;

    // btn primary
    btnPrimary.style.background = newColor;
    btnPrimary.style.borderColor = newColor;
    btnPrimary.style.color = 'white';

    // btn secondary
    btnSecondary.style.color = newColor;
    btnSecondary.style.borderColor = newColor;

    
});

// Save newColor
btnSecondary.addEventListener('click', function(){
    
    // Check if this color is already saved 
    if(savedColors.includes(newColor)){
        return alert('You already have this color in your table');
    }

    else{
        // Save newColor
        savedColors.push(newColor)
        // Add newColor to the table
        document.querySelector('.app__table').innerHTML = 
            `
                <div class="app__color app__color--grid">
                    <div class="app__circle" style='background:${newColor}'></div>
                    <p class='app__title text app__color--grid__span-col-4'>${newColor}</p>
                    <button class="app__btn btn-tertiary"></button>
                </div>
            `
            + document.querySelector('.app__table').innerHTML;
        
        deleteColor();
    }

        
        
});

// Delete color function
function deleteColor() {
    document.querySelectorAll('.btn-tertiary').forEach(
        (element) => {element.addEventListener('click', 
            function(element) {
                savedColors = savedColors.filter((color) => {
                    return color !== this.parentNode.children[1].textContent
                });
                this.parentNode.style.display = 'none';
            });
    });
}