import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { questions, imgs } from "../data";

const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia,
] = imgs;

// Funcion para barajar las preguntas de cada categoria y tambien reducirla al numero de 5
const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
};

export const CategoryPage = () => {
  // Leer el parametro de la URL
  const { category } = useParams();


  console.log("Categoria : " + category)
  console.log("Elegimos : " + `${imgCiencia}`);
  console.log("Deberiamos elegir : " + `/src/assets/${category.toLowerCase()}.png`);


  

  //const [imgCategory] = imgs.filter((img) => img === `/src/assets/${category.toLowerCase()}.png`);
  const imgCategory = imgs.filter((img) => img.toLowerCase().includes(category.toLowerCase()));

  
  
  
  console.log(imgs);
  console.log("Al final elegimos : " + imgCategory)





  const [questionsFiltered, setQuestionsFiltered] = useState(
    questions.filter((question) => question.category === category)
  );

  const [indexQuestion, setIndexQuestion] = useState(0);

  const [activeQuiz, setActiveQuiz] = useState(false);

  useEffect(() => {
    const newQuestions = shuffleArray(questionsFiltered);
    setQuestionsFiltered(newQuestions);
  }, []);

  return (
    <div
      className="container flex flex-col item-center justify-center gap-10"
      style={{ height: "calc(100vh - 5rem)" }}
    >
      {activeQuiz ? (
        <Question
          filteredQuestion={questionsFiltered[indexQuestion]}
          setIndexQuestion={setIndexQuestion}
          indexQuestion={indexQuestion}
          questionsFiltered={questionsFiltered}
          setActiveQuiz={setActiveQuiz}
        />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col p-5 gap-5">
            <h1 className="text-3xl text-teal-900 text-center font-bold">
              {category}
            </h1>

            <div className="flex justify-center items-center">
              <img src={imgCategory} alt={category} className="w-72" />
            </div>
          </div>

          <button
            className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all
          hover:bg-yellow-500 hover:text-gray-900 w-72"
            onClick={() => setActiveQuiz(true)}
          >
            Iniciar
          </button>
        </div>
      )}
    </div>
  );
};
