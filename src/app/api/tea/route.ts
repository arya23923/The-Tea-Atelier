import { NextResponse } from "next/server";

const tea = [
  {
    id: 1,
    name: "Butter Tea",
    price: 40,
    image: "/images/butter-tea.jpg",
    description : "Boiling tea leaves with water and adding salt and yak butter creates a unique beverage that has been linked to various health benefits. Butter tea, also known as po cha, is a popular drink in Tibet and other Himalayan regions."
  },
  {
    id: 2,
    name: "Kashmiri Kahwa",
    price: 70,
    image: "/images/kashmiri-kahwa.jpg",
    description : "kahwa, which is nothing but a traditional green tea, is not simply a beverage; it is a cultural, climatic and hospitable reflection of Kashmir. Sipped from elaborate engraved copper cups, kahwa provides warmth to a cold morning and a touch of grace to every gathering found in the valley.  Whether you’re walking through a snow-laced meadow or relaxing after a hearty wazwaan, a cup of kahwa completes the experience."
  },
  {
    id: 3,
    name: "Noon chai",
    price: 70,
    image: "/images/noon-chai.jpg",
    description : "Noon Chai, also known as Gulabi Chai or Kashmiri Pink Tea, is a traditional salted milk tea from the Kashmir Valley. It’s famous for its distinct dusty pink color, savory flavor profile, and creamy, buttery texture, which sets it apart from the sweet, spiced chai common in other parts of the world."
  },
  {
    id: 4,
    name: "Assam Black Tea",
    price: 60,
    image: "/images/assam-black-tea.jpg",
    description : "Assam black tea is a robust and full-bodied tea known for its rich, malty flavor and bright color. It is primarily grown in the Assam region of India and is often used in breakfast tea blends due to its strong taste and high caffeine content."
  },
  {
    id: 5,
    name: "Darjeeling Tea",
    price: 40,
    image: "/images/darjeeling-tea.jpg",
    description : "Darjeeling black tea is a fully oxidized tea made from the Camellia sinensis plant, primarily grown in the Darjeeling district of India. Unlike other black teas, it has a lighter color, a floral fragrance, and a subtle, complex taste that often includes muscatel—a grape-like flavor that is highly sought after by connoisseurs."
  },
  {
    id: 6,
    name: "Irani chai",
    price: 30,
    image: "/images/irani-chai.jpg",
    description : "Irani chai is a popular tea from Irani cafés in India, known for its strong black tea mixed with sweetened, creamy milk, often flavored with cardamom. It has a rich history linked to Iranian immigrants who brought this unique beverage to the Indian subcontinent."
  },
  {
    id: 7,
    name: "Nilgiri Tea",
    price: 60,
    image: "/images/nilgiri-tea.jpg",
    description : "Nilgiri tea is a drink made by infusing leaves of Camellia sinensis that is grown and processed in the Nilgiris district in Tamil Nadu, India. The leaves are processed as black tea, though some estates have expanded their product offerings to include leaves suitable for making green, white and oolong teas. It is generally described as being a brisk, fragrant and full-bodied tea."
  },
  {
    id: 8,
    name: "Masala chai",
    price: 20,
    image: "/images/masala-chai.jpg",
    description : "Masala chai is a popular beverage originating from India. It is made by adding aromatic herbs and spices to chai, which is made from brewing black tea in milk and water, and sweetening with sugar. "
  },
  {
    id: 9,
    name: "Herbal Tea",
    price: 60,
    image: "/images/herbal-tea.jpg",
    description : "The main herbs typically included in chai (such as cinnamon, cardamom, ginger, fennel, and black pepper) have a sweetness and spice to them that act as warming carminatives helping to nourish healthy digestion. These herbs also have antimicrobial properties, helping to fight off infection."
  },
  {
    id: 10,
    name: "Match Tea",
    price: 150,
    image: "/images/matcha-tea.jpg",
    description : "Matcha tea is a finely ground powder made from shade-grown green tea leaves, known for its vibrant green color and rich umami flavor. It is popular for its health benefits, including high antioxidant content and potential to boost energy and focus."
  },
];

export async function GET() {
  return NextResponse.json(tea);
}
