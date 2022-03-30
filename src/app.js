//Clone

//Select the div .copy-container and .original-container from index
const copy_container = document.querySelector('.copy-container');
const original_section = document.querySelector('.original-container')

//function to append an eventlistener to the element original_section. Test the delegation condition if the event is not inside .copy-container and than insert the element copy.container inside the element, after its last child.
function copydiv(evt){
    original_section.addEventListener("click", (evt) => {
        if (evt.target.tagName != ".copy-container") {
            copy_container.insertAdjacentHTML("beforeend", evt.target.innerHTML)
        }
    })
}
copydiv(copy_container)

// Delete
//function clearcopies(evt){
    original_section.removeEventListener("click", (evt) => {
    copy_container.remove()
    })
