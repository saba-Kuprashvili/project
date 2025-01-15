const blogContainer = document.getElementById('blog-container');

    const blogData = [
        { title: "საქარე მინის შეცვლა", date: "09 Oct", image: "https://autopia.ge/assets/images/news/75777cf8e19d7cb121e3ba5f4c02f25e.jpg" },
        { title: "ქლინერი ფარების პოლირების მარტივი და ეფექტური საშუალება", date: "16 Jan", image: "https://autopia.ge/assets/images/news/aada7f07ccea4c0878c1465f2548ce83.png" },
        { title: "თბილისში ბიზნეს რეიტინგების კავშირის დაჯილდოების ცერემონიალი გაიმართა", date: "14 Jul", image: "https://autopia.ge/assets/images/news/7a8178ab62781856cbdeb7ee9e9cb40e.png" },
        { title: "ავტომობილის ძარის ნაწილები გაიაფდა!", date: "14 Jul", image: "https://autopia.ge/assets/images/news/e25ef6ff9020c70b667767ce611a0e79.png" },
        { title: "მაშუქები", date: "24 Jan", image: "https://autopia.ge/assets/images/news/e4b73d745f90d6deae53585cda98edb6.png" },
        { title: "რა არ უნდა დაგვავიწყდეს ზამთარში", date: "07 Dec", image: "https://autopia.ge/assets/images/news/4475ca5441a6375936556554b6def30f.png" },
        { title: "უკვე 1000-მდე სხვადასხვა სახეობის საქარე მინას შეიძენ აუტოპიაში!...", date: "14 Nov", image: "https://autopia.ge/assets/images/news/424281288e00f2d57497c23742fd354c.jpg" },
        { title: "ჩვენი საწყობი კიდევ უფრო გავზარდეთ!", date: "02 Nov", image: "https://autopia.ge/assets/images/news/d28c695d136acfede652c6734b456905.png" },
        { title: "Fiat 500 - დატესტილია ცუდი ბიჭებისთვის...", date: "25 Oct", image: "https://autopia.ge/assets/images/news/30ee77761975c4c8d7bea26724cbd488.png" },
        { title: "XYG", date: "26 Jun", image: "https://autopia.ge/assets/images/news/f64c2c985d880859f74480a503b78415.png" },
        { title: "TYC", date: "14 Mar", image: "https://autopia.ge/assets/images/news/1c99344598098f09cefac424395c9cc4.jpg" },
        { title: "აბა, ვინ გამოიცნობს, რა დევს და ხვანცალებს ყუთში?..", date: "14 Mar", image: "https://autopia.ge/assets/images/news/909815a462bf5a414a5ab82b95dfe377.jpg" },
    ];

    blogData.forEach((blog, index) => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');

        const img = document.createElement('img');
        img.src = blog.image;
        img.alt = `News Image ${index + 1}`;
        blogItem.appendChild(img);

        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date');

        const [day, month] = blog.date.split(" ");
        const daySpan = document.createElement('span');
        daySpan.classList.add('number');
        daySpan.textContent = day;

        const monthSpan = document.createElement('span');
        monthSpan.classList.add('month');
        monthSpan.textContent = month;

        dateDiv.appendChild(daySpan);
        dateDiv.appendChild(document.createElement('br'));
        dateDiv.appendChild(monthSpan);
        blogItem.appendChild(dateDiv);

        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        const h4 = document.createElement('h4');
        h4.textContent = blog.title;
        textContainer.appendChild(h4);

        const p = document.createElement('p');
        p.textContent = "სრულად ნახვა";
        textContainer.appendChild(p);

        blogItem.appendChild(textContainer);

        blogContainer.appendChild(blogItem);
    });