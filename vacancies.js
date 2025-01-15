const vacancies = [
  { title: "ფრონტენდის დეველოპერი", description: "შექმნა მომხმარებლის მეგობრული ინტერფეისები.", location: "თბილისი", date: "11.01.2025", price: "925 ₾" },
  { title: "ინგლისური ენის პედაგოგი", description: "ინგლისური ენის სწავლების გამოცდილება.", location: "ბათუმი", date: "10.01.2025", price: "1730 ₾" },
  { title: "გერმანული ენა", description: "მოწვეული რუსულ ენაში.", location: "ქუთაისი", date: "09.01.2025", price: "1620 ₾" },
  { title: "მომზადება მათემატიკაში", description: "სწავლება მათემატიკისთვის.", location: "თბილისი", date: "11.01.2025", price: "1090 ₾" },
  { title: "დიზაინერი", description: "სხვადასხვა დიზაინერული პროექტები.", location: "ბათუმი", date: "12.01.2025", price: "1150 ₾" },
  { title: "პროგრამისტი", description: "ვებ პროგრამების შემუშავება.", location: "თბილისი", date: "13.01.2025", price: "1240 ₾" },
  { title: "პროექტ მენეჯერი", description: "პროექტების მართვა.", location: "ქუთაისი", date: "14.01.2025", price: "970 ₾" },
  { title: "ტექნიკური მხარდაჭერა", description: "ტექნიკური საკითხების გადაწყვეტა.", location: "ბათუმი", date: "15.01.2025", price: "1045 ₾" },
  { title: "პროექტ მენეჯერი", description: "პროექტების მართვა.", location: "ქუთაისი", date: "14.01.2025", price: "970 ₾" },
  { title: "პროექტ მენეჯერი", description: "პროექტების მართვა.", location: "ქუთაისი", date: "14.01.2025", price: "970 ₾" },
  { title: "ტექნიკური მხარდაჭერა", description: "ტექნიკური საკითხების გადაწყვეტა.", location: "ბათუმი", date: "15.01.2025", price: "1045 ₾" },
  { title: "პროექტ მენეჯერი", description: "პროექტების მართვა.", location: "ქუთაისი", date: "14.01.2025", price: "970 ₾" },
  { title: "ტექნიკური მხარდაჭერა", description: "ტექნიკური საკითხების გადაწყვეტა.", location: "ბათუმი", date: "15.01.2025", price: "1045 ₾" },
  { title: "პროექტ მენეჯერი", description: "პროექტების მართვა.", location: "ქუთაისი", date: "14.01.2025", price: "970 ₾" },
  { title: "პროექტ მენეჯერი", description: "პროექტების მართვა.", location: "ქუთაისი", date: "14.01.2025", price: "970 ₾" },
  { title: "პროექტ მენეჯერი", description: "პროექტების მართვა.", location: "ქუთაისი", date: "14.01.2025", price: "970 ₾" },
];

const container = document.getElementById("vacancyContainer");

function createCard(vacancy) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="price">${vacancy.price}</div>
    <div class="header">${vacancy.title}</div>
    <div class="description">${vacancy.description}</div>
    <div class="details">
      <div class="location">
        <span class="material-symbols-outlined">location_on</span>
        ${vacancy.location}
      </div>
      <div class="date">${vacancy.date}</div>
    </div>
    <div class="icons">
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">share</span>
      <span class="material-symbols-outlined">delete</span>
    </div>
  `;
  container.appendChild(card);
}

vacancies.forEach((vacancy) => createCard(vacancy));

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 625;
  container.style.transform = `translateX(${offset}px)`;
}

document.getElementById("leftSlider").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

document.getElementById("rightSlider").addEventListener("click", () => {
  if (currentIndex < Math.ceil(vacancies.length / 4) - 1) {
    currentIndex++;
    updateSlider();
  }
});