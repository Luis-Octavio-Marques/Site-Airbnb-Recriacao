import React from "react";

function Item() {
  return (
    <a href="#" className="flex flex-col gap-2">
      <img
        src="https://www.holmy.com.br/wp-content/uploads/2021/10/casa-em-condominio-em-cabo-frio-1.png"
        alt="Imagem da Acomodação"
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="text-xl font-semibold"> Cabo Frio, Rio de Janeiro </h3>
        <p className="truncate text-gray-600">
          {" "}
          Cobertura, duplex, em frente à praia das Dunas, Cabo Frio. As três
          suítes com ar condicionado. TV na suíte master e sala, com sky na
          sala. Cozinha equipada. Wi-fi de 120mbs da Vivo Fibra. Piscina e
          churrasqueira privativas. Estacionamento para dois carros dentro do
          prédio. Com uma área externa com vista panorâmica da praia das Dunas.
          O espaço Cobertura duplex em frente à praia das Dunas, em Cabo Frio. O
          apartamento conta com três suítes e mais um banheiro social, piscina e
          churrasqueira privativas, com uma área externa com vista panorâmica da
          praia das Dunas, em Cabo Frio. Na sua lateral você encontrará uma
          padaria que oferece café da manhã e alguns restaurantes. 3-5min da
          Praia do Forte (indo de carro). Cobertura fica no 4º andar.
        </p>
        <p>
          {" "}
          <span className="font-semibold"> R$ 550 </span>por noite
        </p>
      </div>
    </a>
  );
}

export default Item;
