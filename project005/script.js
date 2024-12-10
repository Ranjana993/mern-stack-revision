function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const arrow = element.querySelector('.arrow');

  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    arrow.innerHTML = '&#9660;'; // Down arrow
  } else {
    answer.style.display = 'block';
    arrow.innerHTML = '&#9650;'; // Up arrow
  }
}
