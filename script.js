function toggle() {
  var toggle = document.getElementById('socialIcon')
  
  if (toggle.style.display === '') {
    toggle.style.display = 'block';
  } else if (toggle.style.display === 'none') {
    toggle.style.display = 'block';
  } else {
    toggle.style.display = 'none';
  }
}

function newDocList() {
  var newDocList = document.getElementById('newDocList')

  if (newDocList.style.display === '') {
    newDocList.style.display = 'block';
  } else if (newDocList.style.display === 'none') {
    newDocList.style.display = 'block';
  } else {
    newDocList.style.display = 'none';
  }
}

function searchByType() {
  var searchByType = document.getElementById('searchByType')

  if (searchByType.style.display === '') {
    searchByType.style.display = 'block';
  } else if (searchByType.style.display === 'none') {
    searchByType.style.display = 'block';
  } else {
    searchByType.style.display = 'none';
  }
}

function closeMenu() {
  var closeForm = document.getElementById('searchByType')

  if (closeForm.style.display === 'block') {
    closeForm.style.display = 'none';
  }
}

var extList = document.getElementById('fileExtName')
  searchBar = document.getElementById('searchBar')
  searchIcon = document.getElementById('searchIcon')
  caretWrappper = document.getElementById('caretWrappper')

// file extentions list
extList.addEventListener('click', function(e) {
  e.stopPropagation()
})

// searchbar list
searchBar.addEventListener('click', function(e) {
  e.stopPropagation()
  if (extList.style.display === 'none') {
    extList.style.display = 'block';
    searchBar.style.backgroundColor = '#fff';
    searchBar.style.border = '1px soid red';
    searchIcon.style.backgroundColor = '#fff';
    caretWrappper.style.backgroundColor = '#fff';
  } else {
    extList.style.display = 'none';
    searchBar.style.backgroundColor = '#f7f7f7';
    searchIcon.style.backgroundColor = '#f7f7f7';
    caretWrappper.style.backgroundColor = '#f7f7f7';
  }
})

// window click handler
window.addEventListener('click', function(event) {
  if(extList.style.display == 'block') {
    extList.style.display = 'none';
    searchBar.style.backgroundColor = '#f7f7f7';
    searchIcon.style.backgroundColor = '#f7f7f7';
    caretWrappper.style.backgroundColor = '#f7f7f7';
  }
})





