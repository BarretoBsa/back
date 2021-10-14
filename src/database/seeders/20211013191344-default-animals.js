'use strict';

function getId( firstId, items, needly ) {
  for ( let i = 0; i < items.length; i++ ) {
      if ( items[i].nome === needly ) {
          return firstId + i;
      }
  }

  return null;
}
module.exports = {

  up: async (queryInterface, Sequelize) => {

    const animals = [
      {
        nome:"SAX648",
        tipo_animal:"POULTRY",
        status_animal:2,
        localizacao:"Sala 5",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome:"CPI834",
        tipo_animal:"POULTRY",
        status_animal:3,
        localizacao:"Sala 5",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome:"IAH768",
        tipo_animal:"POULTRY",
        status_animal:0,
        localizacao:"Sala 3",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome:"AFL876",
        tipo_animal:"SWINE",
        status_animal:1,
        localizacao:"Sala 2",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome:"IQQ273",
        tipo_animal:"SWINE",
        status_animal:2,
        localizacao:"Sala 6",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome:"ISY854",
        tipo_animal:"SWINE",
        status_animal:3,
        localizacao:"Sala 6",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome:"DXH634",
        tipo_animal:"SWINE",
        status_animal:3,
        localizacao:"Sala 6",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome:"VHJ830",
        tipo_animal:"POULTRY",
        status_animal:1,
        localizacao:"Sala 6",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome:"DTL091",
        tipo_animal:"SWINE",
        status_animal:2,
        localizacao:"Sala 5",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        nome:"WZK170",
        tipo_animal:"SWINE",
        status_animal:0,
        localizacao:"Sala 5",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },

      {
        nome:"DBW444",
        tipo_animal:"SWINE",
        status_animal:1,
        localizacao:"Sala 5",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome:"KED864",
        tipo_animal:"POULTRY",
        status_animal:1,
        localizacao:"Sala 3",
        data_nascimento:"2017-06-29 02:53",
        entrada_plantel:"2019-06-16",
        peso_compra:98.934,
        raca:"ac-7077/m",
        codigo_rastreamento:"742B7DC98",
        created_at: new Date(),
        updated_at: new Date()
      },
    ]

    const firstId = await queryInterface.bulkInsert( 'animals', animals, {returning: ["id"] } );

    console.log(' RETORNO ANIMAL INSERIDO ', firstId)

 
    await queryInterface.bulkInsert( 'production_phases', [
      {
        sigla:"ENG",
        descricao:"Fase onde os pintinhos s\u00e3o alimentados at\u00e9 o final (abate)",
        animals_id: firstId[0].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"REC",
      descricao: "Fase onde pintinhos s\u00e3o criados at\u00e9 virarem frangas ou frango, criados em galp\u00f5es separados (+-1 dia at\u00e9 23/24 semanas)" ,
        animals_id: firstId[1].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"MAT",
        descricao:"Fase onde as f\u00eameas gestantes v\u00e3o parir e amamentar leit\u00f5es.",
        animals_id: firstId[2].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"CRE",
        descricao:"FaFase onde leit\u00f5es desmamados s\u00e3o alimentados at\u00e9 23 Kgse",
        animals_id: firstId[3].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"CRE",
        descricao:"Fase onde leit\u00f5es desmamados s\u00e3o alimentados at\u00e9 23 Kg",
        animals_id: firstId[4].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"MAT",
        descricao:"Fase onde as f\u00eameas gestantes v\u00e3o parir e amamentar leit\u00f5es.",
        animals_id: firstId[5].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"REC",
        descricao:"Fase",
        animals_id: firstId[6].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"AAA",
        descricao:"Fase onde pintinhos s\u00e3o criados at\u00e9 virarem frangas ou frango, criados em galp\u00f5es separados (+-1 dia at\u00e9 23/24 semanas)",
        animals_id: firstId[7].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"MAT",
        descricao:"Fase onde as f\u00eameas gestantes v\u00e3o parir e amamentar leit\u00f5es.",
        animals_id: firstId[8].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"ENG",
        descricao:"Fase onde os pintinhos s\u00e3o alimentados at\u00e9 o final (abate)",
        animals_id: firstId[9].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"TER",
        descricao:"Fase onde leit\u00f5es descrechados s\u00e3o alimentados at\u00e9 o final (abate)",
        animals_id: firstId[10].id,
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        sigla:"ENG",
        descricao:"Fase onde os pintinhos s\u00e3o alimentados at\u00e9 o final (abate)",
        animals_id: firstId[11].id,
        created_at: new Date(),
        updated_at: new Date()
       },
      
  ], {} );
     return  await queryInterface.bulkInsert('type_farms', [{
            animals_id: firstId[0].id,
            sigla:"URE",
            descricao:"Recria",
            created_at: new Date(),
            updated_at: new Date()
      
      },
    {
      animals_id: firstId[1].id,
      sigla:"UCC",
      descricao:"Ciclo Completo",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      animals_id: firstId[2].id,
      sigla:"UCC",
      descricao:"Ciclo Completo",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      animals_id: firstId[3].id,
      sigla:"UPL",
      descricao:"Produtora de Leit\u00f5es",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      animals_id: firstId[4].id,
      sigla:"UTE",
      descricao:"Terminador",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      animals_id: firstId[5].id,
      sigla:"URE",
      descricao:"Recria",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      animals_id: firstId[6].id,
      sigla:"UPL",
      descricao:"Produtora de Leit\u00f5es",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      animals_id: firstId[7].id,
      sigla:"URE",
      descricao:"Recria",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      animals_id: firstId[8].id,
      sigla:"UPL",
      descricao:"Produtora de Leit\u00f5es",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      animals_id: firstId[9].id,
      sigla:"UPM",
      descricao:"Matrizes",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      animals_id: firstId[10].id,
      sigla:"UPM",
      descricao:"Recria",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      animals_id: firstId[11].id,
      sigla:"UPM",
      descricao:"Matrizes",
      created_at: new Date(),
      updated_at: new Date()
    },
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('animals', null, {});
    
  }
};
