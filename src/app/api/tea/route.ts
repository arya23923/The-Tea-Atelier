import { NextResponse } from "next/server";

const tea = [
  {
    id: 1,
    name: "Butter Tea",
    price: 40,
    image: "/images/butter-tea.jpg",
  },
  {
    id: 2,
    name: "Kashmiri Kahwa",
    price: 70,
    image: "/images/kashmiri-kahwa.jpg",
  },
  {
    id: 3,
    name: "Noon chai",
    price: 70,
    image: "/images/noon-chai.jpg",
  },
  {
    id: 4,
    name: "Assam Black Tea",
    price: 60,
    image: "/images/assam-black-tea.jpg",
  },
  {
    id: 5,
    name: "Darjeeling Tea",
    price: 40,
    image: "/images/darjeeling-tea.jpg",
  },
  {
    id: 6,
    name: "Irani chai",
    price: 30,
    image: "/images/irani-chai.jpg",
  },
  {
    id: 7,
    name: "Nilgiri Tea",
    price: 60,
    image: "/images/nilgiri-tea.jpg",
  },
  {
    id: 8,
    name: "Masala chai",
    price: 20,
    image: "/images/masala-chai.jpg",
  },
  {
    id: 9,
    name: "Herbal Tea",
    price: 60,
    image: "/images/herbal-tea.jpg",
  },
  {
    id: 10,
    name: "Match Tea",
    price: 150,
    image: "/images/match-tea.jpg",
  },
];

export async function GET() {
  return NextResponse.json(tea);
}
