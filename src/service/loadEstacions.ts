export const ESTACIONS = [
  "Agullana",
  "Alcanar",
  "Alcover",
  "Amposta",
  "Badalona",
  "Barberà del Vallès",
  "Barcelona (Ciutadella)",
  "Barcelona (Eixample)",
  "Barcelona (Gràcia - Sant Gervasi)",
  "Barcelona (Observatori Fabra)",
  "Barcelona (Palau Reial)",
  "Barcelona (Parc Vall Hebron)",
  "Barcelona (Poblenou)",
  "Barcelona (Sagrera)",
  "Barcelona (Sants)",
  "Barcelona (St. Gervasi)",
  "Barcelona (Torre Girona)",
  "Begur",
  "Bellver de Cerdanya",
  "Berga",
  "Castellet i la Gornal",
  "Cercs (Sant Corneli)",
  "Cercs (Sant Jordi)",
  "Cercs (St. Corneli)",
  "Cercs (St. Jordi)",
  "Constantí",
  "Cornellà de Llobregat (Allende - Bonveí)",
  "Cubelles",
  "Cubelles (Poliesportiu)",
  "el Prat de Llobregat (església)",
  "El Prat de Llobregat (Jardins de la Pau)",
  "El Prat de Llobregat (Sagnier)",
  "el Prat de Llobregat (Sant Cosme)",
  "Els Guiamets",
  "Fígols (roca del Querol)",
  "Flix",
  "Fornells de la Selva (escola municipal)",
  "Gandesa",
  "Gavà",
  "Gavà (c/Girona - c/Progrés)",
  "Gavà (pl. Balmes)",
  "Girona (Escola de Música)",
  "Girona (parc de la Devesa)",
  "Granollers",
  "Granollers (av. Joan Prim)",
  "Granollers (c/ Joan Vinyoli)",
  "Igualada",
  "Juneda (ctra. de Lleida, km 75)",
  "Juneda (Pla del Molí)",
  "L'Ametlla de Mar",
  "la Nou de Berguedà (Malanyeu)",
  "la Pobla de M./el Morell",
  "la Sénia",
  "La Sénia",
  "L'Hospitalet de Llobregat",
  "Lleida",
  "Manlleu",
  "Manresa",
  "Martorell",
  "Mataró",
  "Mollet del Vallès",
  "Montcada i Reixac",
  "Montcada i Reixac (Can Sant Joan)",
  "Montornès del Vallès (pl. del Poble)",
  "Montsec",
  "Montseny (La Castanya)",
  "Pallejà (Roca de Vilana)",
  "Pardines",
  "Perafort (Puigdelfí)",
  "Ponts",
  "Reus",
  "Ripollet",
  "Rubí",
  "Sabadell",
  "Sabadell (pl. Creu de Barberà)",
  "Santa Coloma de Gramenet",
  "Sant Adrià de Besòs",
  "Santa Maria de Palautordera",
  "Sant Andreu de la Barca",
  "Santa Pau",
  "Santa Perpètua de Mogoda",
  "Sant Celoni",
  "Sant Cugat del Vallès",
  "Sant Feliu de Ll. (CEIP Marti i Pol)",
  "Sant Fost de Campsentelles",
  "Sant Just Desvern (CEIP Montseny)",
  "Sant Vicenç dels Horts",
  "Sant Vicenç dels Horts (Ribot)",
  "Sarrià de Ter",
  "Sitges (Vallcarca)",
  "Sitges (Vallcarca - Oficines)",
  "Sort",
  "Sta. Coloma de Gr. (c/ Bruc)",
  "Sta. Margarida i els Monjos (La Ràpita)",
  "Sta. Perpètua de Mogoda",
  "Tarragona (Bonavista)",
  "Tarragona (Parc de la Ciutat)",
  "Tarragona (pl. Generalitat)",
  "Tarragona (Sant Salvador)",
  "Tarragona (Universitat Laboral)",
  "Terrassa",
  "Tona",
  "Tona (Zona Esportiva)",
  "Vallcebre",
  "Vallcebre (campanar)",
  "Vandellòs (Barranc del Terme)",
  "Vandellòs (Els Dedalts)",
  "Vandellòs (Viver)",
  "Veciana (estació agroalimentària)",
  "Vic",
  "Viladecans",
  "Viladecans - Atrium",
  "Vilafranca del Penedès",
  "Vilanova i la Geltrú",
  "Vila-seca",
  "Vila-seca (IES Vila-seca)",
];

export async function loadEstacions() {
  const request = await fetch(
    "http://mediambient.gencat.cat/.content/getData.jsp?cargaEstacions=true&uuid=47d68ac0-bf76-11ea-a226-005056924a59",
    {
      headers: {
        accept: "text/html, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9,ca;q=0.8,en-GB;q=0.7,es;q=0.6",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "sec-gpc": "1",
        "x-requested-with": "XMLHttpRequest",
      },
      referrer:
        "http://mediambient.gencat.cat/ca/05_ambits_dactuacio/atmosfera/qualitat_de_laire/vols-saber-que-respires/descarrega-de-dades/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    }
  );
  return request.text();
}
