document.addEventListener('readystatechange', function() {
    if (document.readyState === 'complete') {
        console.log("Document is fully loaded");
        
        // Defer heavy operations to avoid blocking the event handler
        setTimeout(function() {
            let htmlContainer = document.getElementsByClassName('mstrmojo-EditButton')[0];
            console.log(htmlContainer);
            if (htmlContainer) {
                htmlContainer.click();
                console.log("Button is clicked !!");
            } else {
                console.error('Button not found!');
            }
        }, 2000);
    }
}, { passive: true });

document.addEventListener('touchstart', function(event) {
    // Your touchstart event handler code here
    console.log("Touchstart event detected");
}, { passive: true });

// window.onload = func();

//     setTimeout(function func() {
 
//     console.log("Hello !!");
 
//     htmlContainer = document.getElementsByClassName('mstrmojo-Button mstrmojo-EditButton')[0];
 
//     htmlContainer.click();
//     console.log(htmlContainer);
//   console.log("Button is clicked");
//     }, 1000);


