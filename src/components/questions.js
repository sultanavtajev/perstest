const questions = [
  {
    question: "På en fest, gjør du:",
    options: [
      { label: "Interagerer med mange, inkludert fremmede", value: "A" },
      { label: "Interagerer med noen få, kjente for deg", value: "B" },
    ],
  },
  {
    question: "Er du mer:",
    options: [
      { label: "Realistisk enn spekulativ", value: "A" },
      { label: "Spekulativ enn realistisk", value: "B" },
    ],
  },
  {
    question: "Er det verre å:",
    options: [
      { label: "Ha hodet i skyene", value: "A" },
      { label: "Være i en rutine", value: "B" },
    ],
  },
  {
    question: "Er du mer imponert av:",
    options: [
      { label: "Prinsipper", value: "A" },
      { label: "Følelser", value: "B" },
    ],
  },
  {
    question: "Er du mer tiltrukket av:",
    options: [
      { label: "Overbevisende", value: "A" },
      { label: "Rørende", value: "B" },
    ],
  },
  {
    question: "Foretrekker du å jobbe:",
    options: [
      { label: "Til tidsfrister", value: "A" },
      { label: "Når som helst", value: "B" },
    ],
  },
  {
    question: "Pleier du å velge:",
    options: [
      { label: "Nøye", value: "A" },
      { label: "Noe impulsivt", value: "B" },
    ],
  },
  {
    question: "På fester, gjør du:",
    options: [
      { label: "Blir sent, med økende energi", value: "A" },
      { label: "Går tidlig med minkende energi", value: "B" },
    ],
  },
  {
    question: "Er du mer tiltrukket av:",
    options: [
      { label: "Fornuftige mennesker", value: "A" },
      { label: "Fantastiske mennesker", value: "B" },
    ],
  },
  {
    question: "Er du mer interessert i:",
    options: [
      { label: "Hva som er faktisk", value: "A" },
      { label: "Hva som er mulig", value: "B" },
    ],
  },
  {
    question: "I vurdering av andre blir du mer påvirket av:",
    options: [
      { label: "Lover enn omstendigheter", value: "A" },
      { label: "Omstendigheter enn lover", value: "B" },
    ],
  },
  {
    question: "Når du nærmer deg andre er din tilbøyelighet å være noe:",
    options: [
      { label: "Objektiv", value: "A" },
      { label: "Personlig", value: "B" },
    ],
  },
  {
    question: "Er du mer:",
    options: [
      { label: "Punktlig", value: "A" },
      { label: "Avslappet", value: "B" },
    ],
  },
  {
    question: "Er det mer plagsomt å ha ting:",
    options: [
      { label: "Ufullstendige", value: "A" },
      { label: "Fullførte", value: "B" },
    ],
  },
  {
    question: "I dine sosiale grupper holder du deg:",
    options: [
      { label: "Oppdatert på andres hendelser", value: "A" },
      { label: "Kommer bakpå med nyhetene", value: "B" },
    ],
  },
  {
    question: "Når du gjør vanlige ting er du mer sannsynlig å:",
    options: [
      { label: "Gjøre det på vanlig måte", value: "A" },
      { label: "Gjøre det på din egen måte", value: "B" },
    ],
  },
  {
    question: "Forfattere bør:",
    options: [
      { label: "Si hva de mener og mene hva de sier", value: "A" },
      { label: "Uttrykke ting mer ved bruk av analogi", value: "B" },
    ],
  },
  {
    question: "Hva appellerer mer til deg:",
    options: [
      { label: "Konsistens i tanken", value: "A" },
      { label: "Harmoniske menneskelige relasjoner", value: "B" },
    ],
  },
  {
    question: "Er du mer komfortabel med å gjøre:",
    options: [
      { label: "Logiske vurderinger", value: "A" },
      { label: "Verdivurderinger", value: "B" },
    ],
  },
  {
    question: "Vil du ha ting:",
    options: [
      { label: "Avgjort og bestemt", value: "A" },
      { label: "Uavgjort og uavgjort", value: "B" },
    ],
  },
  {
    question: "Vil du si at du er mer:",
    options: [
      { label: "Seriøs og bestemt", value: "A" },
      { label: "Lettgående", value: "B" },
    ],
  },
  {
    question: "Når du ringer, gjør du:",
    options: [
      { label: "Sjeldent spørre om alt vil bli sagt", value: "A" },
      { label: "Øve på hva du skal si", value: "B" },
    ],
  },
  {
    question: "Fakta:",
    options: [
      { label: "Taler for seg selv", value: "A" },
      { label: "Illustrerer prinsipper", value: "B" },
    ],
  },
  {
    question: "Er visjonærer:",
    options: [
      { label: "Noe irriterende", value: "A" },
      { label: "Ganske fascinerende", value: "B" },
    ],
  },
  {
    question: "Er du oftere:",
    options: [
      { label: "En kald person", value: "A" },
      { label: "En varm person", value: "B" },
    ],
  },
  {
    question: "Er det verre å være:",
    options: [
      { label: "Urettferdig", value: "A" },
      { label: "Nådeløs", value: "B" },
    ],
  },
  {
    question: "Bør man vanligvis la hendelser skje:",
    options: [
      { label: "Ved nøye utvalg og valg", value: "A" },
      { label: "Tilfeldig og ved sjanse", value: "B" },
    ],
  },
  {
    question: "Føler du deg bedre om:",
    options: [
      { label: "Å ha kjøpt", value: "A" },
      { label: "Å ha muligheten til å kjøpe", value: "B" },
    ],
  },
  {
    question: "I selskap gjør du:",
    options: [
      { label: "Initiere samtale", value: "A" },
      { label: "Vent til noen andre kommer bort", value: "B" },
    ],
  },
  {
    question: "Sunn fornuft er:",
    options: [
      { label: "Sjeldent tvilsom", value: "A" },
      { label: "Ofte tvilsom", value: "B" },
    ],
  },
  {
    question: "Barn gjør ofte ikke:",
    options: [
      { label: "Gjør seg nyttige nok", value: "A" },
      { label: "Bruker fantasien nok", value: "B" },
    ],
  },
  {
    question: "I beslutningstaking føler du deg mer komfortabel med:",
    options: [
      { label: "Standarder", value: "A" },
      { label: "Følelser", value: "B" },
    ],
  },
  {
    question: "Er du mer:",
    options: [
      { label: "Fast enn mild", value: "A" },
      { label: "Mild enn fast", value: "B" },
    ],
  },
  {
    question: "Hvilken er mer beundringsverdig:",
    options: [
      { label: "Evnen til å organisere og være metodisk", value: "A" },
      { label: "Evnen til å tilpasse seg og klare seg", value: "B" },
    ],
  },
  {
    question: "Legger du mer vekt på:",
    options: [
      { label: "Uendelig", value: "A" },
      { label: "Åpen sinn", value: "B" },
    ],
  },
  {
    question:
      "Stimulerer og gir ny og ikke-rutinemessig samhandling med andre deg:",
    options: [
      { label: "Stimulerer og gir deg energi", value: "A" },
      { label: "Tømmer reservene dine", value: "B" },
    ],
  },
  {
    question: "Er du oftere:",
    options: [
      { label: "En praktisk type person", value: "A" },
      { label: "En fantasifull type person", value: "B" },
    ],
  },
  {
    question: "Ser du mer sannsynlig hvordan andre er nyttige:",
    options: [
      { label: "Hvordan andre er nyttige", value: "A" },
      { label: "Hvordan andre ser", value: "B" },
    ],
  },
  {
    question: "Hvilken er mer tilfredsstillende:",
    options: [
      { label: "Å diskutere en sak grundig", value: "A" },
      { label: "Å komme til enighet om en sak", value: "B" },
    ],
  },
  {
    question: "Hvilken styrer deg mer:",
    options: [
      { label: "Ditt hode", value: "A" },
      { label: "Ditt hjerte", value: "B" },
    ],
  },
  {
    question: "Er du mer komfortabel med arbeid som er:",
    options: [
      { label: "Kontraktfestet", value: "A" },
      { label: "Utført på en tilfeldig basis", value: "B" },
    ],
  },
  {
    question: "Har du en tendens til å se etter:",
    options: [
      { label: "Det ordnede", value: "A" },
      { label: "Hva som dukker opp", value: "B" },
    ],
  },
  {
    question: "Foretrekker du:",
    options: [
      { label: "Mange venner med kort kontakt", value: "A" },
      { label: "Noen få venner med mer langvarig kontakt", value: "B" },
    ],
  },
  {
    question: "Stoler du mer på:",
    options: [
      { label: "Fakta", value: "A" },
      { label: "Prinsipper", value: "B" },
    ],
  },
  {
    question: "Er du mer interessert i:",
    options: [
      { label: "Produksjon og distribusjon", value: "A" },
      { label: "Design og forskning", value: "B" },
    ],
  },
  {
    question: "Hvilken er mer av et kompliment:",
    options: [
      { label: "En veldig logisk person", value: "A" },
      { label: "En veldig sentimental person", value: "B" },
    ],
  },
  {
    question: "Setter du mer pris på i deg selv at du er:",
    options: [
      { label: "Uforanderlig", value: "A" },
      { label: "Hengiven", value: "B" },
    ],
  },
  {
    question: "Foretrekker du ofte det:",
    options: [
      { label: "Endelige og uforanderlige utsagnet", value: "A" },
      { label: "Foreløpige og foreløpige utsagnet", value: "B" },
    ],
  },
  {
    question: "Er du mer komfortabel:",
    options: [
      { label: "Etter en avgjørelse", value: "A" },
      { label: "Før en avgjørelse", value: "B" },
    ],
  },
  {
    question: "Snakker du:",
    options: [
      { label: "Lett og lenge med fremmede", value: "A" },
      { label: "Finner lite å si til fremmede", value: "B" },
    ],
  },
  {
    question: "Stoler du mer på:",
    options: [
      { label: "Erfaring", value: "A" },
      { label: "Intuisjon", value: "B" },
    ],
  },
  {
    question: "Føler du deg:",
    options: [
      { label: "Mer praktisk enn genial", value: "A" },
      { label: "Mer genial enn praktisk", value: "B" },
    ],
  },
  {
    question: "Hvilken person er mer å beundre:",
    options: [
      { label: "En person med klar fornuft", value: "A" },
      { label: "En person med sterke følelser", value: "B" },
    ],
  },
  {
    question: "Er du mer tilbøyelig til å være:",
    options: [
      { label: "Rettferdig", value: "A" },
      { label: "Sympatisk", value: "B" },
    ],
  },
  {
    question: "Er det bedre å:",
    options: [
      { label: "Sikre at ting er ordnet", value: "A" },
      { label: "Bare la ting skje", value: "B" },
    ],
  },
  {
    question: "Bør de fleste ting i forhold være:",
    options: [
      { label: "Forhandlingsbare", value: "A" },
      { label: "Tilfeldige og omstendelige", value: "B" },
    ],
  },
  {
    question: "Når telefonen ringer, gjør du:",
    options: [
      { label: "Skynder deg å svare først", value: "A" },
      { label: "Håper noen andre svarer", value: "B" },
    ],
  },
  {
    question: "Er du mer stolt av i deg selv:",
    options: [
      { label: "En sterk virkelighetssans", value: "A" },
      { label: "En livlig fantasi", value: "B" },
    ],
  },
  {
    question: "Blir du mer trukket til:",
    options: [
      { label: "Grunnleggende", value: "A" },
      { label: "Overtoner", value: "B" },
    ],
  },
  {
    question: "Hvilken virker som den største feilen:",
    options: [
      { label: "Å være for lidenskapelig", value: "A" },
      { label: "Å være for objektiv", value: "B" },
    ],
  },
  {
    question: "Ser du deg selv som grunnleggende:",
    options: [
      { label: "Hardhudet", value: "A" },
      { label: "Myk-hjertet", value: "B" },
    ],
  },
  {
    question: "Hvilken situasjon appellerer mer til deg:",
    options: [
      { label: "Den strukturerte og planlagte", value: "A" },
      { label: "Den ustrukturerte og uplanlagte", value: "B" },
    ],
  },
  {
    question: "Er du en person som er mer:",
    options: [
      { label: "Rutinemessig enn lunefull", value: "A" },
      { label: "Lunefull enn rutinemessig", value: "B" },
    ],
  },
  {
    question: "Er du mer tilbøyelig til å være:",
    options: [
      { label: "Lett å nærme seg", value: "A" },
      { label: "Noe reservert", value: "B" },
    ],
  },
  {
    question: "Foretrekker du i skriftlige arbeider:",
    options: [
      { label: "Den mer bokstavelige", value: "A" },
      { label: "Den mer billedlige", value: "B" },
    ],
  },
  {
    question: "Er det vanskeligere for deg å:",
    options: [
      { label: "Identifisere deg med andre", value: "A" },
      { label: "Utnytte andre", value: "B" },
    ],
  },
  {
    question: "Hvilken ønsker du mer for deg selv:",
    options: [
      { label: "Klarhet i fornuft", value: "A" },
      { label: "Styrken av medfølelse", value: "B" },
    ],
  },
  {
    question: "Hvilken er den største feilen:",
    options: [
      { label: "Å være ukritisk", value: "A" },
      { label: "Å være kritisk", value: "B" },
    ],
  },
  {
    question: "Foretrekker du det:",
    options: [
      { label: "Planlagte arrangementet", value: "A" },
      { label: "Uplanlagte arrangementet", value: "B" },
    ],
  },
  {
    question: "Har du en tendens til å være mer:",
    options: [
      { label: "Bevisst enn spontan", value: "A" },
      { label: "Spontan enn bevisst", value: "B" },
    ],
  },
];

export default questions;
