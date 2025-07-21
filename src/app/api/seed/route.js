import { NextResponse } from "next/server";
import Products from "@/Models/product";
import dbconnect from "@/DB/dbconfig";

export async function GET() {
  await dbconnect();

  const dummyProducts = [
    {
      name: "Symphony Diet 12T Personal Cooler",
      price: 5999,
      description:
        "Compact yet powerful personal air cooler ideal for small rooms.",
      categories: "COOLERS",
      image: "https://i.imgur.com/symphony12T.png",
    },
    {
      name: "Crompton Optimus Desert Cooler",
      price: 10999,
      description:
        "75L large desert air cooler with wide airflow and honeycomb pads.",
      categories: "COOLERS",
      image: "https://i.imgur.com/cromptonOptimus.png",
      email: "seller2@example.com",
    },
    {
      name: "Bajaj Platini PX97 Torque",
      price: 5299,
      description:
        "36L room cooler with powerful air delivery and quiet operation.",
      categories: "COOLERS",
      image: "https://i.imgur.com/bajajPX97.png",
      email: "seller3@example.com",
    },
    {
      name: "Havells Celia Desert Cooler",
      price: 13999,
      description:
        "Premium 55L desert air cooler with collapsible louvers and inverter compatibility.",
      categories: "COOLERS",
      image: "https://i.imgur.com/havellsCelia.png",
      email: "seller4@example.com",
    },
  ];

  try {
    await Products.insertMany(dummyProducts);
    return NextResponse.json({
      success: true,
      message: "Dummy data inserted.",
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
