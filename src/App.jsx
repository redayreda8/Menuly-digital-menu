import { useState } from "react";
import "./index.css";

const content = {
  fr: {
    call: "Appeler",
    back: "Retour",
    choose: "Que souhaitez-vous consulter ?",
    coordinates: "Coordonnées",
    maps: "Voir sur Google Maps",
    powered: "Powered by",
    restaurant: {
      name: "Restaurant Atlas",
      tagline: "Cuisine marocaine moderne · Rabat",
      hours: "Ouvert tous les jours · 12:00 - 23:30",
      phone: "+212600000000",
      address: "Agdal, Rabat",
      instagram: "@restaurantatlas",
    },
    categories: [
      {
        name: "Entrées",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "Salade Marocaine",
            description: "Tomates, concombre, oignons, huile d’olive",
            price: "35 MAD",
            badge: "Fraîche",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
      {
        name: "Plats",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "Tajine Poulet Citron",
            description: "Poulet, citron confit, olives vertes, épices",
            price: "85 MAD",
            badge: "Spécialité",
            image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80",
          },
          {
            name: "Pizza Menuly",
            description: "Mozzarella, viande hachée, champignons, olives",
            price: "75 MAD",
            badge: "Populaire",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
      {
        name: "Desserts",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "Tiramisu Maison",
            description: "Crème mascarpone, café, cacao",
            price: "45 MAD",
            badge: "Maison",
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
      {
        name: "Boissons",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "Jus d’orange frais",
            description: "Orange pressée minute",
            price: "25 MAD",
            badge: "Frais",
            image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
    ],
  },

  ar: {
    call: "اتصل",
    back: "رجوع",
    choose: "ماذا تريد أن تشاهد؟",
    coordinates: "معلومات التواصل",
    maps: "الموقع على خرائط Google",
    powered: "بواسطة",
    restaurant: {
      name: "مطعم أطلس",
      tagline: "مطبخ مغربي عصري · الرباط",
      hours: "مفتوح يوميًا · 12:00 - 23:30",
      phone: "+212600000000",
      address: "أكدال، الرباط",
      instagram: "@restaurantatlas",
    },
    categories: [
      {
        name: "المقبلات",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "سلطة مغربية",
            description: "طماطم، خيار، بصل، زيت الزيتون",
            price: "35 درهم",
            badge: "طازجة",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
      {
        name: "الأطباق",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "طاجين الدجاج بالليمون",
            description: "دجاج، ليمون مصير، زيتون أخضر وتوابل",
            price: "85 درهم",
            badge: "اختيار الشيف",
            image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
      {
        name: "الحلويات",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "تيراميسو منزلي",
            description: "ماسكاربوني، قهوة، كاكاو",
            price: "45 درهم",
            badge: "منزلي",
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
      {
        name: "المشروبات",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "عصير برتقال طازج",
            description: "برتقال معصور في الحين",
            price: "25 درهم",
            badge: "طازج",
            image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
    ],
  },

  en: {
    call: "Call",
    back: "Back",
    choose: "What would you like to see?",
    coordinates: "Contact details",
    maps: "Open in Google Maps",
    powered: "Powered by",
    restaurant: {
      name: "Restaurant Atlas",
      tagline: "Modern Moroccan cuisine · Rabat",
      hours: "Open daily · 12:00 - 23:30",
      phone: "+212600000000",
      address: "Agdal, Rabat",
      instagram: "@restaurantatlas",
    },
    categories: [
      {
        name: "Starters",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "Moroccan Salad",
            description: "Tomatoes, cucumber, onions, olive oil",
            price: "35 MAD",
            badge: "Fresh",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
      {
        name: "Main dishes",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "Chicken Lemon Tajine",
            description: "Chicken, preserved lemon, olives, spices",
            price: "85 MAD",
            badge: "Chef’s choice",
            image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
      {
        name: "Desserts",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "Homemade Tiramisu",
            description: "Mascarpone cream, coffee, cocoa",
            price: "45 MAD",
            badge: "Homemade",
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
      {
        name: "Drinks",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
        items: [
          {
            name: "Fresh Orange Juice",
            description: "Freshly squeezed orange juice",
            price: "25 MAD",
            badge: "Fresh",
            image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
          },
        ],
      },
    ],
  },
};

const cover =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80";

export default function App() {
  const [lang, setLang] = useState("fr");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const data = content[lang];
  const isArabic = lang === "ar";

  function changeLang(newLang) {
    setLang(newLang);
    setSelectedCategory(null);
  }

  return (
    <main className={`page ${isArabic ? "rtl" : ""}`}>
      <section className="hero" style={{ backgroundImage: `url(${cover})` }}>
        <div className="overlay" />

        <div className="languageSwitcher">
          <button onClick={() => changeLang("fr")} className={lang === "fr" ? "active" : ""}>FR</button>
          <button onClick={() => changeLang("ar")} className={lang === "ar" ? "active" : ""}>AR</button>
          <button onClick={() => changeLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
        </div>

        <div className="heroContent">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.tagline}</p>
          <span className="hours">{data.restaurant.hours}</span>
        </div>
      </section>

      {!selectedCategory ? (
        <section className="categoryHome">
          <h2>{data.choose}</h2>

          <div className="categoryGrid">
            {data.categories.map((cat) => (
              <button
                className="categoryChoice"
                key={cat.name}
                onClick={() => setSelectedCategory(cat)}
              >
                <img src={cat.image} alt={cat.name} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section className="menu">
          <button className="backBtn" onClick={() => setSelectedCategory(null)}>
            ← {data.back}
          </button>

          <div className="category">
            <h2>{selectedCategory.name}</h2>

            <div className="items">
              {selectedCategory.items.map((item) => (
                <article className="card" key={item.name}>
                  <div className="imageWrap">
                    <img src={item.image} alt={item.name} />
                    <span className="itemBadge">{item.badge}</span>
                  </div>

                  <div className="cardBody">
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <strong>{item.price}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="contact">
        <h3>{data.coordinates}</h3>
        <p>{data.restaurant.address}</p>
        <p>{data.restaurant.phone}</p>
        <p>{data.restaurant.instagram}</p>

        <a className="mapsBtn" href="https://maps.google.com" target="_blank">
          {data.maps}
        </a>
      </section>

      <footer>
        {data.powered} <b>Menuly</b>
      </footer>

      <a className="floatingCall" href={`tel:${data.restaurant.phone}`}>
        {data.call}
      </a>
    </main>
  );
}