

// these variables are for the browser memory to keep track of the shopping cart contents, and the scrollable element variable is to disable the scroll for the page body when the shopping cart is engaged

var scrollableElement = document.body;
var count8 = parseInt(localStorage.getItem("count8")) || 0;
var total8 = parseFloat(localStorage.getItem("total8")) || 0;
var imageSources8 = JSON.parse(localStorage.getItem("imageSources8")) || [];
var divI16 = document.getElementById('divI16');
var quantities8 = JSON.parse(localStorage.getItem("quantities8")) || [];
var prices8 = JSON.parse(localStorage.getItem("prices8")) || [];
var names8 = JSON.parse(localStorage.getItem("names8")) || [];




// these variables and functions are used to get the functionality of the infinite looping banners to run as smoothly as possible (although they arent perfect, similar to how chipotle.com's banner works)
// I'm thinking that avoiding large infinitely looping banners is something to stay away from if possible

var secondBanner = document.getElementById('imgH1');
var thirdBanner = document.getElementById('imgH2');
var secondTimeout, thirdTimeout, secondTimeout2, thirdTimeout2;

fadeInSecond(secondBanner, thirdBanner);

function fadeInSecond(secondBanner, thirdBanner) {
    clearTimeout(secondTimeout);
    clearTimeout(secondTimeout2);
    clearTimeout(thirdTimeout);
    clearTimeout(thirdTimeout2);

    secondBanner.style.transition = 'opacity 3s';
    secondBanner.style.opacity = '1';
    secondTimeout = setTimeout(function () {
        fadeOutSecond(secondBanner, thirdBanner);
    }, 3000);
}

function fadeOutSecond(secondBanner, thirdBanner) {
    clearTimeout(secondTimeout);
    clearTimeout(secondTimeout2);
    clearTimeout(thirdTimeout);
    clearTimeout(thirdTimeout2);

    secondBanner.style.transition = 'opacity 3s';
    secondBanner.style.opacity = '0';
    secondTimeout2 = setTimeout(function () {
        fadeInThird(secondBanner, thirdBanner);
    }, 3000);
}

function fadeInThird(secondBanner, thirdBanner) {
    clearTimeout(secondTimeout);
    clearTimeout(secondTimeout2);
    clearTimeout(thirdTimeout);
    clearTimeout(thirdTimeout2);

    thirdBanner.style.transition = 'opacity 3s';
    thirdBanner.style.opacity = '1';
    thirdTimeout = setTimeout(function () {
        fadeOutThird(secondBanner, thirdBanner);
    }, 3000);
}

function fadeOutThird(secondBanner, thirdBanner) {
    clearTimeout(secondTimeout);
    clearTimeout(secondTimeout2);
    clearTimeout(thirdTimeout);
    clearTimeout(thirdTimeout2);

    thirdBanner.style.transition = 'opacity 3s';
    thirdBanner.style.opacity = '0';
    thirdTimeout2 = setTimeout(function () {
        fadeInSecond(secondBanner, thirdBanner);
    }, 3000);
}







// this block of if statements sets the correct shopping cart count at the beginning of the page load and applies the 99+ string if the content exceeds 99 items

// if (count8 > 99) {
    // var spanI2 = document.getElementById('spanI2');
    // spanI2.style.fontSize = '.65rem';
    // spanI2.style.marginTop = '.5rem';
    // spanI2.style.marginLeft = '4.7rem';
    // document.getElementById('spanI2').innerHTML = "99+";
// } else if (count8 < 100 && count8 > 9) {
    // var spanI2 = document.getElementById('spanI2');
    // spanI2.style.fontSize = '.8rem';
    // spanI2.style.marginTop = '.45rem';
    // spanI2.style.marginLeft = '4.75rem';
    // document.getElementById('spanI2').innerHTML = count8;
// } else if (count8 < 10 && count8 >= 0) {
    // var spanI2 = document.getElementById('spanI2');
    // spanI2.style.fontSize = '.8rem';
    // spanI2.style.marginTop = '.4rem';
    // spanI2.style.marginLeft = '5rem';
    // document.getElementById('spanI2').innerHTML = count8;
// }





// the first 2 if statements close the mobile view menu when the screen resizes and closes the normal view shopping cart when the screen resizes
// the second 2 if statements reconstruct the shopping cart depending on whether mobile view mode is the landing spot or normal view mode (this is mostly for sizing purposes)
// the variables at the end cancel out the scroll function of the homepage continent divs when the window is resized because of glitches that were occuring to the divs during window resize

window.addEventListener('resize', function() {
    if (window.innerWidth > 900) {
        var divI0 = document.getElementById('divI0')
        var divI3 = document.getElementById('divI3');
        divI0.style.display = 'none';
        divI3.style.display = 'none';
    }
    if (window.innerWidth <= 900) {
        var divI14 = document.getElementById('divI14')
        var divI17 = document.getElementById('divI17')
        divI14.style.height = '0';
        divI14.style.width = '0';
        divI17.style.height = '0';
        divI17.style.width = '0';
    }
    if (window.innerWidth <= 900) {
        for (var i = 0; i < imageSources8.length; i++) {
            if (i == 0) {
                var divI14 = document.getElementById('divI14');
                var divI15 = document.getElementById('divI15');
                var divI16 = document.getElementById('divI16');
                divI14.innerHTML = "";
                divI14.appendChild(divI15);
                divI14.appendChild(divI16);
            }
            processImage(i);
          }
    }
    if (window.innerWidth > 900) {
        for (var i = 0; i < imageSources8.length; i++) {
            if (i == 0) {
                var divI14 = document.getElementById('divI14');
                var divI15 = document.getElementById('divI15');
                var divI16 = document.getElementById('divI16');
                divI14.innerHTML = "";
                divI14.appendChild(divI15);
                divI14.appendChild(divI16);
            }
            processImage(i);
          }
    }
    var divH3 = document.getElementById('divH3')
    var divH4 = document.getElementById('divH4')
    var divH5 = document.getElementById('divH5')
    var divH6 = document.getElementById('divH6')
    var divH7 = document.getElementById('divH7')
    divH3.style.opacity = '1';
    divH3.style.transform = 'translateY(0%)'
    divH4.style.opacity = '1';
    divH4.style.transform = 'translateY(0%)'
    divH5.style.opacity = '1';
    divH5.style.transform = 'translateY(0%)'
    divH6.style.opacity = '1';
    divH6.style.transform = 'translateY(0%)'
    divH7.style.opacity = '1';
    divH7.style.transform = 'translateY(0%)'
})





// the first block of if statements sets the correct shopping cart count at the beginning of the page load and applies the 99+ string if the content exceeds 99 items
// the for loop reconstructs the shopping cart at the beginning of the page load based on the stored memory variables

window.addEventListener('load', function() {
    if (count8 > 99) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.65rem';
        spanI2.style.marginTop = '.5rem';
        spanI2.style.marginLeft = '4.7rem';
        document.getElementById('spanI2').innerHTML = "99+";
    } else if (count8 < 100 && count8 > 9) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.8rem';
        spanI2.style.marginTop = '.45rem';
        spanI2.style.marginLeft = '4.75rem';
        document.getElementById('spanI2').innerHTML = count8;
    } else if (count8 < 10 && count8 >= 0) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.8rem';
        spanI2.style.marginTop = '.4rem';
        spanI2.style.marginLeft = '5rem';
        document.getElementById('spanI2').innerHTML = count8;
    }
    for (var i = 0; i < imageSources8.length; i++) {
        if (i == 0) {
            var divI14 = document.getElementById('divI14');
            var divI15 = document.getElementById('divI15');
            var divI16 = document.getElementById('divI16');
            divI14.innerHTML = "";
            divI14.appendChild(divI15);
            divI14.appendChild(divI16);
        }
        processImage(i);
      }
});







// this function is responsible for handling the shopping cart reconstruction after a page load as well as when the remove button is pressed to remove a listing from the shopping cart thats already there
// I had to add this for the remove button because for some reason I was experiencing a glitch when removing 2 items before a page reload, I could only remove 1 item at a time and then refresh the page
// for it to work correctly, however, adding this function during the removal and then reconstructing the cart after every removal has occurred makes the shopping cart work as expected

function processImage(index) {
    var divI14 = document.getElementById('divI14');
    var imageSource = imageSources8[index];
    var elem = document.createElement('img');
    var newBox = document.createElement('div');
    var newButton = document.createElement('button');
    var newBox2 = document.createElement('div');
    var newBox3 = document.createElement('div');
    var newBox4 = document.createElement('div');
    var newH1 = document.createElement('h1');
    var newSpan = document.createElement('span');
    var newSpan2 = document.createElement('span');
    var newSpan3 = document.createElement('span');
    var newButton2 = document.createElement('button');
    var newButton3 = document.createElement('button');
    if (window.innerWidth <= 900) {
        newBox.style.display = 'flex';
        newBox.style.alignItems = 'center';
        newBox.style.padding = '5vw';
        newBox.style.gap = '6vw';
        newBox.style.borderBottom = '.3vw black solid';
        newBox.style.width = '100%';
        newBox.style.height = '24vw';
        newBox.style.paddingLeft = '19vw';
        elem.style.height = '22vw';
        elem.style.width = '30vw';
        elem.style.marginLeft = '-10vw';
        elem.src = imageSource;
        newBox2.style.display = 'flex';
        newBox2.style.flexDirection = 'column';
        newBox2.style.justifyContent = 'center';
        newBox2.style.alignItems = 'center';
        newBox2.style.gap = '5vw';
        newBox3.style.display = 'flex';
        newBox3.style.flexDirection = 'row';
        newBox3.style.justifyContent = 'center';
        newBox3.style.alignItems = 'center';
        newBox3.style.gap = '6vw';
        newBox4.style.display = 'flex';
        newBox4.style.flexDirection = 'row';
        newBox4.style.justifyContent = 'center';
        newBox4.style.alignItems = 'center';
        newSpan.style.fontSize = '2.95vw';
        newSpan.textContent = names8[index];
        newSpan2.textContent = '$';
        newSpan3.textContent = quantities8[index];
        newH1.textContent = (prices8[index] * quantities8[index]).toFixed(2);
        newH1.style.fontSize = '3vw'; 
        newButton.style.height = '6vw';
        newButton.style.width = '12vw';
        newButton.style.fontSize = '2vw';
        newButton.textContent = 'Remove';
        newButton.style.backgroundColor = 'rgb(207, 173, 110)';
        newButton2.style.height = '6vw';
        newButton2.style.width = '8vw';
        newButton2.style.fontSize = '2.8vw';
        newButton2.textContent = '-';
        newButton3.style.height = '6vw';
        newButton3.style.width = '6vw';
        newButton3.style.fontSize = '2.8vw';
        newButton3.textContent = '+';
        document.getElementById('h3I1').innerHTML = total8.toFixed(2);
    } else {
    newBox.style.display = 'flex';
    newBox.style.alignItems = 'center';
    newBox.style.padding = '1rem';
    newBox.style.gap = '2rem';
    newBox.style.borderBottom = '2px black solid';
    newBox.style.width = '100%';
    newBox.style.height = '10rem';
    elem.style.height = '7rem';
    elem.style.width = '10rem';
    elem.src = imageSource;
    newBox2.style.display = 'flex';
    newBox2.style.flexDirection = 'column';
    newBox2.style.justifyContent = 'center';
    newBox2.style.alignItems = 'center';
    newBox2.style.gap = '1rem';
    newBox3.style.display = 'flex';
    newBox3.style.flexDirection = 'row';
    newBox3.style.justifyContent = 'center';
    newBox3.style.alignItems = 'center';
    newBox3.style.gap = '2rem';
    newBox4.style.display = 'flex';
    newBox4.style.flexDirection = 'row';
    newBox4.style.justifyContent = 'center';
    newBox4.style.alignItems = 'center';
    newSpan.style.fontSize = '.95rem';
    newSpan.textContent = names8[index];
    newSpan2.textContent = '$';
    newSpan3.textContent = quantities8[index];
    newH1.style.fontSize = '1rem';
    newH1.textContent = (prices8[index] * quantities8[index]).toFixed(2);
    newButton.style.height = '2rem';
    newButton.style.width = '4rem';
    newButton.textContent = 'Remove';
    newButton.style.backgroundColor = 'rgb(207, 173, 110)';
    newButton2.style.height = '2rem';
    newButton2.style.width = '2rem';
    newButton2.textContent = '-';
    newButton3.style.height = '2rem';
    newButton3.style.width = '2rem';
    newButton3.textContent = '+';
    document.getElementById('h3I1').innerHTML = total8.toFixed(2);
    }
    newButton.onclick = function() {
        eraseBox(newBox);
        imageSources8.splice(index, 1);
        var count = newSpan3.textContent;
        var newCount = parseInt(count);
        count8 -= newCount;
        total8 -= (prices8[index] * quantities8[index]);
        quantities8.splice(index, 1);
        prices8.splice(index, 1);
        names8.splice(index, 1);
        if (count8 > 99) {
            var spanI2 = document.getElementById('spanI2');
            spanI2.style.fontSize = '.65rem';
            spanI2.style.marginTop = '.5rem';
            spanI2.style.marginLeft = '4.7rem';
            document.getElementById('spanI2').innerHTML = "99+";
        } else if (count8 < 100 && count8 > 9) {
            var spanI2 = document.getElementById('spanI2');
            spanI2.style.fontSize = '.8rem';
            spanI2.style.marginTop = '.45rem';
            spanI2.style.marginLeft = '4.75rem';
            document.getElementById('spanI2').innerHTML = count8;
        } else if (count8 < 10 && count8 >= 0) {
            var spanI2 = document.getElementById('spanI2');
            spanI2.style.fontSize = '.8rem';
            spanI2.style.marginTop = '.4rem';
            spanI2.style.marginLeft = '5rem';
            document.getElementById('spanI2').innerHTML = count8;
        }
        if (total8 < 0) {
            total8 = 0;
          }
        document.getElementById('h3I1').innerHTML = total8.toFixed(2);
        for (var i = 0; i < imageSources8.length; i++) {
            if (i == 0) {
                var divI14 = document.getElementById('divI14');
                var divI15 = document.getElementById('divI15');
                var divI16 = document.getElementById('divI16');
                divI14.innerHTML = "";
                divI14.appendChild(divI15);
                divI14.appendChild(divI16);
            }
            processImage(i);
          }
    };
    newButton2.onclick = function () {
        minus(newBox3, index, newBox4);
      }
      newButton3.onclick = function () {
        plus(newBox3, index, newBox4);
      }
      newBox.appendChild(elem);
      newBox.appendChild(newBox2);
      newBox2.appendChild(newSpan);
      newBox2.appendChild(newBox3);
      newBox3.appendChild(newButton2);
      newBox3.appendChild(newSpan3);
      newBox3.appendChild(newButton3);
      newBox4.appendChild(newSpan2);
      newBox4.appendChild(newH1);
      newBox2.appendChild(newBox4);
      newBox.appendChild(newButton);
    divI14.insertBefore(newBox, divI16);
  }








// this function removes an item from the shopping cart

function eraseBox(newBox) {
    var divI14 = document.getElementById('divI14');
    divI14.removeChild(newBox);
}



// this function subtracts a quantity from the overall quantity of a particular item

function minus(elementMinus, Index, priceMinus) {
    var amount = elementMinus.querySelector('span').textContent;
    newSpan3 = elementMinus.querySelector('span');
    var parsedAmount = parseInt(amount);
    newH1 = priceMinus.querySelector('h1');
    var parsedPrice = prices8[Index];
    if (parsedAmount == 0) {
        parsedAmount = 0;
    } else {
    parsedAmount -= 1;
    quantities8[Index] = parsedAmount; 
    parsedPrice = prices8[Index] * parsedAmount;
    newSpan3.innerHTML = "";
    newSpan3.innerHTML = parsedAmount;
    newH1.innerHTML = parsedPrice.toFixed(2);
    count8 -= 1;
    total8 -= prices8[Index];
    if (count8 > 99) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.65rem';
        spanI2.style.marginTop = '.5rem';
        spanI2.style.marginLeft = '4.7rem';
        document.getElementById('spanI2').innerHTML = "99+";
    } else if (count8 < 100 && count8 > 9) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.8rem';
        spanI2.style.marginTop = '.45rem';
        spanI2.style.marginLeft = '4.75rem';
        document.getElementById('spanI2').innerHTML = count8;
    } else if (count8 < 10 && count8 >= 0) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.8rem';
        spanI2.style.marginTop = '.4rem';
        spanI2.style.marginLeft = '5rem';
        document.getElementById('spanI2').innerHTML = count8;
    }
    if (total8 < 0) {
        total8 = 0;
      }
    document.getElementById('h3I1').innerHTML = total8.toFixed(2);
    }
}




// this function adds a quantity from the overall quantity of a particular item

function plus(elementPlus, Index, pricePlus) {
    var amount = elementPlus.querySelector('span').textContent;
    newSpan3 = elementPlus.querySelector('span');
    var parsedAmount = parseInt(amount);
    newH1 = pricePlus.querySelector('h1');
    var parsedPrice = prices8[Index];
    parsedAmount += 1;
    quantities8[Index] = parsedAmount;
    parsedPrice = prices8[Index] * parsedAmount;
    newSpan3.innerHTML = "";
    newSpan3.innerHTML = parsedAmount;
    newH1.innerHTML = parsedPrice.toFixed(2);
    count8 += 1;
    total8 += prices8[Index];
    if (count8 > 99) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.65rem';
        spanI2.style.marginTop = '.5rem';
        spanI2.style.marginLeft = '4.7rem';
        document.getElementById('spanI2').innerHTML = "99+";
    } else if (count8 < 100 && count8 > 9) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.8rem';
        spanI2.style.marginTop = '.45rem';
        spanI2.style.marginLeft = '4.75rem';
        document.getElementById('spanI2').innerHTML = count8;
    } else if (count8 < 10 && count8 >= 0) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.8rem';
        spanI2.style.marginTop = '.4rem';
        spanI2.style.marginLeft = '5rem';
        document.getElementById('spanI2').innerHTML = count8;
    }
    if (total8 < 0) {
        total8 = 0;
      }
    document.getElementById('h3I1').innerHTML = total8.toFixed(2);
}




// this function adds the selected item to the shopping cart along with + and - quantity buttons and a removal button

function newest(elementId) {
    var element = document.querySelector(elementId);
    var divI14 = document.getElementById('divI14');
    var divI17 = document.getElementById('divI17');
    var divI0 = document.getElementById('divI0');
    scrollableElement.style.overflow = 'hidden';
    divI14.style.overflowY = 'auto';
    divI14.style.overflowX = 'hidden';
    var imageSource = element.querySelector('img').src;
    var priceSource = element.querySelector('h2').textContent;
    var nameSource = element.querySelector('h1').textContent;
    var newPriceSource = parseFloat(priceSource.replace('$', ''));
    if (imageSources8.includes(imageSource)) {
        divI14.style.transition = 'height .01s, width .4s';
        divI14.style.height = '100%';
        if (window.innerWidth <= 900) {
            divI0.style.display = 'none';
            divI14.style.width = '100%';
            divI17.style.height = '0';
            divI17.style.width = '0';
        } else {
        divI14.style.width = '28.7rem';
        divI17.style.transition = 'height .01s, width .01s, opacity .4s';
        divI17.style.height = '100%';
        divI17.style.width = '100%';
        divI17.style.opacity = '.5';
        }
    } else {
    total8 += newPriceSource;
    count8 += 1;
    if (count8 > 99) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.65rem';
        spanI2.style.marginTop = '.5rem';
        spanI2.style.marginLeft = '4.7rem';
        document.getElementById('spanI2').innerHTML = "99+";
    } else if (count8 < 100 && count8 > 9) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.8rem';
        spanI2.style.marginTop = '.45rem';
        spanI2.style.marginLeft = '4.75rem';
        document.getElementById('spanI2').innerHTML = count8;
    } else if (count8 < 10 && count8 >= 0) {
        var spanI2 = document.getElementById('spanI2');
        spanI2.style.fontSize = '.8rem';
        spanI2.style.marginTop = '.4rem';
        spanI2.style.marginLeft = '5rem';
        document.getElementById('spanI2').innerHTML = count8;
    }
    document.getElementById('h3I1').innerHTML = total8.toFixed(2);
    var imageIndex = imageSources8.length;
    var elem = document.createElement('img');
    var newBox = document.createElement('div');
    var newBox2 = document.createElement('div');
    var newBox3 = document.createElement('div');
    var newBox4 = document.createElement('div');
    var newSpan = document.createElement('span');
    var newSpan2 = document.createElement('span');
    var newSpan3 = document.createElement('span');
    var newH1 = document.createElement('h1');
    var newButton = document.createElement('button');
    var newButton2 = document.createElement('button');
    var newButton3 = document.createElement('button');
    if (window.innerWidth <= 900) {
        newBox.style.display = 'flex';
        newBox.style.alignItems = 'center';
        newBox.style.padding = '5vw';
        newBox.style.gap = '6vw';
        newBox.style.borderBottom = '.3vw black solid';
        newBox.style.width = '100%';
        newBox.style.height = '24vw';
        newBox.style.paddingLeft = '19vw';
        newBox2.style.display = 'flex';
        newBox2.style.flexDirection = 'column';
        newBox2.style.justifyContent = 'center';
        newBox2.style.alignItems = 'center';
        newBox2.style.gap = '5vw';
        newBox3.style.display = 'flex';
        newBox3.style.flexDirection = 'row';
        newBox3.style.justifyContent = 'center';
        newBox3.style.alignItems = 'center';
        newBox3.style.gap = '6vw';
        newBox4.style.display = 'flex';
        newBox4.style.flexDirection = 'row';
        newBox4.style.justifyContent = 'center';
        newBox4.style.alignItems = 'center';
        newSpan.textContent = nameSource;
        newSpan.style.fontSize = '2.95vw';
        newSpan2.textContent = '$';
        newSpan3.textContent = "1";
        newH1.style.fontSize = '3vw';
        newH1.textContent = newPriceSource.toFixed(2);
        quantities8[imageIndex] = "1";
        prices8[imageIndex] = newPriceSource
        names8[imageIndex] = nameSource;
        elem.style.height = '22vw';
        elem.style.width = '30vw';
        elem.style.marginLeft = '-10vw';
        elem.src = imageSource;
        newButton.style.height = '6vw';
        newButton.style.width = '12vw';
        newButton.style.fontSize = '2vw';
        newButton.textContent = 'Remove';
        newButton.style.backgroundColor = 'rgb(207, 173, 110)';
        newButton2.style.height = '6vw';
        newButton2.style.width = '8vw';
        newButton2.style.fontSize = '2.8vw';
        newButton2.textContent = '-';
        newButton3.style.height = '6vw';
        newButton3.style.width = '6vw';
        newButton3.style.fontSize = '2.8vw';
        newButton3.textContent = '+';
    } else {
    newBox.style.display = 'flex';
    newBox.style.alignItems = 'center';
    newBox.style.padding = '1rem';
    newBox.style.gap = '2rem';
    newBox.style.borderBottom = '2px black solid';
    newBox.style.width = '100%';
    newBox.style.height = '10rem';
    newBox2.style.display = 'flex';
    newBox2.style.flexDirection = 'column';
    newBox2.style.justifyContent = 'center';
    newBox2.style.alignItems = 'center';
    newBox2.style.gap = '1rem';
    newBox3.style.display = 'flex';
    newBox3.style.flexDirection = 'row';
    newBox3.style.justifyContent = 'center';
    newBox3.style.alignItems = 'center';
    newBox3.style.gap = '2rem';
    newBox4.style.display = 'flex';
    newBox4.style.flexDirection = 'row';
    newBox4.style.justifyContent = 'center';
    newBox4.style.alignItems = 'center';
    newSpan.textContent = nameSource;
    newSpan.style.fontSize = '.95rem';
    newSpan2.textContent = '$';
    newSpan3.textContent = "1";
    newH1.style.fontSize = '1rem';
    newH1.textContent = newPriceSource.toFixed(2);
    quantities8[imageIndex] = "1";
    prices8[imageIndex] = newPriceSource
    names8[imageIndex] = nameSource;
    elem.style.height = '7rem';
    elem.style.width = '10rem';
    elem.src = imageSource;
    newButton.style.height = '2rem';
    newButton.style.width = '4rem';
    newButton.textContent = 'Remove';
    newButton.style.backgroundColor = 'rgb(207, 173, 110)';
    newButton2.style.height = '2rem';
    newButton2.style.width = '2rem';
    newButton2.textContent = '-';
    newButton3.style.height = '2rem';
    newButton3.style.width = '2rem';
    newButton3.textContent = '+';
    }
    newButton.onclick = function() {
        eraseBox(newBox);
        imageSources8.splice(imageIndex, 1);
        var count = newSpan3.textContent;
        var newCount = parseInt(count);
        count8 -= newCount;
        total8 -= (prices8[imageIndex] * quantities8[imageIndex]);
        quantities8.splice(imageIndex, 1);
        prices8.splice(imageIndex, 1);
        names8.splice(imageIndex, 1);
        if (count8 > 99) {
            var spanI2 = document.getElementById('spanI2');
            spanI2.style.fontSize = '.65rem';
            spanI2.style.marginTop = '.5rem';
            spanI2.style.marginLeft = '4.7rem';
            document.getElementById('spanI2').innerHTML = "99+";
        } else if (count8 < 100 && count8 > 9) {
            var spanI2 = document.getElementById('spanI2');
            spanI2.style.fontSize = '.8rem';
            spanI2.style.marginTop = '.45rem';
            spanI2.style.marginLeft = '4.75rem';
            document.getElementById('spanI2').innerHTML = count8;
        } else if (count8 < 10 && count8 >= 0) {
            var spanI2 = document.getElementById('spanI2');
            spanI2.style.fontSize = '.8rem';
            spanI2.style.marginTop = '.4rem';
            spanI2.style.marginLeft = '5rem';
            document.getElementById('spanI2').innerHTML = count8;
        }
        if (total8 < 0) {
            total8 = 0;
          }
        document.getElementById('h3I1').innerHTML = total8.toFixed(2);
        for (var i = 0; i < imageSources8.length; i++) {
            if (i == 0) {
                var divI14 = document.getElementById('divI14');
                var divI15 = document.getElementById('divI15');
                var divI16 = document.getElementById('divI16');
                divI14.innerHTML = "";
                divI14.appendChild(divI15);
                divI14.appendChild(divI16);
            }
            processImage(i);
          }
      };
      newButton2.onclick = function () {
        minus(newBox3, imageIndex, newBox4);
      }
      newButton3.onclick = function () {
        plus(newBox3, imageIndex, newBox4);
      }
    newBox.appendChild(elem);
    newBox.appendChild(newBox2);
    newBox2.appendChild(newSpan);
    newBox2.appendChild(newBox3);
    newBox3.appendChild(newButton2);
    newBox3.appendChild(newSpan3);
    newBox3.appendChild(newButton3);
    newBox4.appendChild(newSpan2);
    newBox4.appendChild(newH1);
    newBox2.appendChild(newBox4);
    newBox.appendChild(newButton);
    divI14.insertBefore(newBox, divI16);
    imageSources8.push(imageSource);
    divI14.style.transition = 'height .01s, width .4s';
    divI14.style.height = '100%';
    if (window.innerWidth <= 900) {
        divI0.style.display = 'none';
        divI14.style.width = '100%';
        divI17.style.height = '0';
        divI17.style.width = '0';
    } else {
    divI14.style.width = '28.7rem';
    divI17.style.transition = 'height .01s, width .01s, opacity .4s';
    divI17.style.height = '100%';
    divI17.style.width = '100%';
    divI17.style.opacity = '.5';
    }
    }
}





// this event listener adds the scrolling animation to the homepage continent divs

window.addEventListener('scroll', function() {
    var scrollY = window.scrollY || window.pageYOffset;
    var divH3 = document.getElementById('divH3');
    var divH4 = document.getElementById('divH4');
    var divH5 = document.getElementById('divH5');
    var divH6 = document.getElementById('divH6');
    var divH7 = document.getElementById('divH7');
    if (window.innerWidth > 2100) {
        if (scrollY > 420) {
            divH3.style.transition = 'transform .8s, opacity .8s';
            divH3.style.transform = 'translateY(0%)';
            divH3.style.opacity = '1';
        }
        if (scrollY > 1020) {
            divH4.style.transition = 'transform .8s, opacity .8s';
            divH4.style.transform = 'translateY(0%)';
            divH4.style.opacity = '1';
        }
        if (scrollY > 1620) {
            divH5.style.transition = 'transform .8s, opacity .8s';
            divH5.style.transform = 'translateY(0%)';
            divH5.style.opacity = '1';
        }
        if (scrollY > 2270) {
            divH6.style.transition = 'transform .8s, opacity .8s';
            divH6.style.transform = 'translateY(0%)';
            divH6.style.opacity = '1';
        }
        if (scrollY > 2880) {
            divH7.style.transition = 'transform .8s, opacity .8s';
            divH7.style.transform = 'translateY(0%)';
            divH7.style.opacity = '1';
        }
    }
    if (window.innerWidth > 1700 && window.innerWidth <= 2100) {
        if (scrollY > 220) {
            divH3.style.transition = 'transform .8s, opacity .8s';
            divH3.style.transform = 'translateY(0%)';
            divH3.style.opacity = '1';
        }
        if (scrollY > 770) {
            divH4.style.transition = 'transform .8s, opacity .8s';
            divH4.style.transform = 'translateY(0%)';
            divH4.style.opacity = '1';
        }
        if (scrollY > 1270) {
            divH5.style.transition = 'transform .8s, opacity .8s';
            divH5.style.transform = 'translateY(0%)';
            divH5.style.opacity = '1';
        }
        if (scrollY > 1770) {
            divH6.style.transition = 'transform .8s, opacity .8s';
            divH6.style.transform = 'translateY(0%)';
            divH6.style.opacity = '1';
        }
        if (scrollY > 2380) {
            divH7.style.transition = 'transform .8s, opacity .8s';
            divH7.style.transform = 'translateY(0%)';
            divH7.style.opacity = '1';
        }
    }
    if (window.innerWidth > 1300 && window.innerWidth <= 1700) {
        if (scrollY > 70) {
            divH3.style.transition = 'transform .8s, opacity .8s';
            divH3.style.transform = 'translateY(0%)';
            divH3.style.opacity = '1';
        }
        if (scrollY > 470) {
            divH4.style.transition = 'transform .8s, opacity .8s';
            divH4.style.transform = 'translateY(0%)';
            divH4.style.opacity = '1';
        }
        if (scrollY > 900) {
            divH5.style.transition = 'transform .8s, opacity .8s';
            divH5.style.transform = 'translateY(0%)';
            divH5.style.opacity = '1';
        }
        if (scrollY > 1370) {
            divH6.style.transition = 'transform .8s, opacity .8s';
            divH6.style.transform = 'translateY(0%)';
            divH6.style.opacity = '1';
        }
        if (scrollY > 1780) {
            divH7.style.transition = 'transform .8s, opacity .8s';
            divH7.style.transform = 'translateY(0%)';
            divH7.style.opacity = '1';
        }
    }
    if (window.innerWidth > 900 && window.innerWidth <= 1300) {
        if (scrollY > 250) {
            divH4.style.transition = 'transform .8s, opacity .8s';
            divH4.style.transform = 'translateY(0%)';
            divH4.style.opacity = '1';
        }
        if (scrollY > 600) {
            divH5.style.transition = 'transform .8s, opacity .8s';
            divH5.style.transform = 'translateY(0%)';
            divH5.style.opacity = '1';
        }
        if (scrollY > 970) {
            divH6.style.transition = 'transform .8s, opacity .8s';
            divH6.style.transform = 'translateY(0%)';
            divH6.style.opacity = '1';
        }
        if (scrollY > 1320) {
            divH7.style.transition = 'transform .8s, opacity .8s';
            divH7.style.transform = 'translateY(0%)';
            divH7.style.opacity = '1';
        }
    }
    if (window.innerWidth <= 900 && window.innerWidth > 420) {
        divH5.style.transform = 'translateY(0%)';
        divH5.style.opacity = '1';
        divH6.style.transform = 'translateY(0%)';
        divH6.style.opacity = '1';
        divH7.style.transform = 'translateY(0%)';
        divH7.style.opacity = '1';
    }
});




// this function makes the coffee and teas page visible in mobile view

function mobileItems() {
    var divI3 = document.getElementById('divI3');
    divI3.style.display = 'block';
}




// this function exits out of the coffee and teas page in the mobile view

function mobileItemsExit() {
    var divI3 = document.getElementById('divI3');
    divI3.style.display = 'none';
}




// this function makes the mobile menu visible

function mobileNav() {
    var divI0 = document.getElementById('divI0')
    divI0.style.display = 'block';
}




// this function exits out of the mobile menu

function mobileNavExit() {
    var divI0 = document.getElementById('divI0')
    divI0.style.display = 'none';
}





// this function makes the shopping cart visible in normal view

function view() {
    var divI14 = document.getElementById('divI14');
    var divI17 = document.getElementById('divI17');
    var divI0 = document.getElementById('divI0');
    scrollableElement.style.overflow = 'hidden';
    divI14.style.overflowY = 'auto';
    divI14.style.overflowX = 'hidden';
    divI14.style.transition = 'height .01s, width .4s';
    divI14.style.height = '100%';
    divI17.style.transition = 'height .01s, width .01s, opacity .4s';
    if (window.innerWidth <= 900) {
        divI0.style.display = 'none';
        divI14.style.width = '100%';
        divI17.style.height = '0';
        divI17.style.width = '0';
    } else {
    divI14.style.width = '500px';
    divI17.style.height = '100%';
    divI17.style.width = '100%';
    divI17.style.opacity = '.5';
    }
}




// this function exits out of the shopping cart in normal view

function clearDiv() {
    var divI14 = document.getElementById('divI14');
    var divI17 = document.getElementById('divI17');
    divI14.style.transition = 'width .4s, height .4s';
    divI14.style.width = '0';
    divI17.style.transition = 'height .01s, width .01s, opacity .4s';
    divI17.style.opacity = '0';
    setTimeout(function() {
        divI14.style.height = '0';
        divI17.style.height = '0';
        divI17.style.width = '0';
    }, 410);
    scrollableElement.style.overflow = 'auto';
}





// this event listener stores these variables into browser memory before the page switches so that they can be loaded onto the next page to keep the whole website consistent at every page

window.addEventListener('beforeunload', function() {
    localStorage.setItem("count8", count8);
    localStorage.setItem("total8", total8);
    localStorage.setItem("imageSources8", JSON.stringify(imageSources8));
    localStorage.setItem("quantities8", JSON.stringify(quantities8));
    localStorage.setItem("prices8", JSON.stringify(prices8));
    localStorage.setItem("names8", JSON.stringify(names8));
});