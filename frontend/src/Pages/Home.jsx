import { Navbar } from "../Components/Navbar";
import { Hero } from "../Components/Hero";
import { Featured } from "../Components/feautured";
import { NewArrival } from "../Components/newArrival";
import { ShopCategory } from "../Components/shopCategory";
import { Footer } from "../Components/footer";
import { Copy } from "../Components/copy";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";


export const Home = () => {
 const[loading , setLoading] = useState(true)
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newArrival, setNewArrival] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [featuredRes, categoryRes, newArrivalRes] =
          await Promise.all([
            axios.get("http://localhost:5000/products/featured"),
            axios.get("http://localhost:5000/products/shopbycategory"),
            axios.get("http://localhost:5000/products/newarrival"),
          ]);

        setFeatured(featuredRes.data);

        const catData = categoryRes.data.map((o) => o[0]);
        setCategories(catData);

        const newData = newArrivalRes.data.map((o) => o[0]);
        setNewArrival(newData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    };

    fetchAllData();
  }, []);

 if (loading) {
    return <Loader/>
 }

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Navbar />
      <Hero />
      <Featured data={featured} />
      <ShopCategory data={categories} />
      <NewArrival data={newArrival} />
      <Footer />
      <Copy />
    </div>
  );
};