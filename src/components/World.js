import { useEffect, useState } from "react";
import Chart from "./Chart";

function World() {
  const [diabetesPorGenero, setDiabetesPorGenero] = useState();

  useEffect(() => {
    fetch("./utils/diabetes_por_genero.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setDiabetesPorGenero(res));
  }, []);

  let generos = [];
  let taxas = [];

  diabetesPorGenero?.forEach((item) => {
    const genero = item.genero;
    generos.push(genero);
    const taxa = item.taxa_de_diabetes;
    taxas.push(taxa);
  });

  const graficoPorGenero = {
    series: [
      {
        name: generos[1],
        data: [10.3],
      },
      {
        name: generos[0],
        data: [7.9],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      title: {
        text: "Relação Diabetes por gênero",
      },
      xaxis: {
        categories: ["Genero"],
        labels: {
          show: true,
        },
      },
      yaxis: {
        title: {
          text: "%",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  };

  return (
    <section className="world" id="world">
      <h2 className="world__title">Números do Diabetes no Mundo</h2>
      <p className="world__paragraph">
        Relação de probabilidade de ser acometido por diabetes entre homens e
        mulheres. Homens possuem 10,30% enquanto as mulheres 7,9%.
      </p>
      <ul className="world__list">
        {
          <Chart
            options={graficoPorGenero.options}
            series={graficoPorGenero.series}
            type="bar"
          ></Chart>
        }
        {/* </li> */}
      </ul>
    </section>
  );
}

export default World;
