import React from "react";
import { imgs, categories } from "../data";
import { CategoryCard } from "./CategoryCard";

const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia,
] = imgs;

export const CategoryList = () => {
  console.log("src de CategoryList : " + imgCiencia);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
      {/* Category Link Ciencia */}
      <CategoryCard
        category={categories.ciencia}
        src={imgCiencia}
        alt={`Categoria ${categories.ciencia}`}
        gradientColor="from-purple-500 to-pink-500"
      ></CategoryCard>

      {/* Category Link Deportes */}
      <CategoryCard
        category={categories.deportes}
        src={imgDeportes}
        alt={`Categoria ${categories.deportes}`}
        gradientColor="from-lime-500 to-zinc-500"
      ></CategoryCard>

      {/* Category Link Filosofia */}
      <CategoryCard
        category={categories.filosofia}
        src={imgFilosofia}
        alt={`Categoria ${categories.filosofia}`}
        gradientColor="from-cian-500 to-lime-200"
      ></CategoryCard>

      {/* Category Link Geografia */}
      <CategoryCard
        category={categories.geografia}
        src={imgGeografia}
        alt={`Categoria ${categories.geografia}`}
        gradientColor="from-sky-500 to-indigo-900"
      ></CategoryCard>

      {/* Category Link Historia */}
      <CategoryCard
        category={categories.historia}
        src={imgHistoria}
        alt={`Categoria ${categories.historia}`}
        gradientColor="from-amber-400 to-emerald-500"
      ></CategoryCard>

      {/* Category Link Literatura */}
      <CategoryCard
        category={categories.literatura}
        src={imgLiteratura}
        alt={`Categoria ${categories.literatura}`}
        gradientColor="from-amber-500 to-pink-500"
      ></CategoryCard>

      {/* Category Link Tecnologia */}
      <CategoryCard
        category={categories.tecnologia}
        src={imgTecnologia}
        alt={`Categoria ${categories.tecnologia}`}
        gradientColor="from-purple-500 to-rose-500"
      ></CategoryCard>
    </div>
  );
};
