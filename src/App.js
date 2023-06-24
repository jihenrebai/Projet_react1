
import './App.css';
import Header from './Components/Header';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Section2 from './Components/Section2';
import Contact from './Components/Contact';
import { Route,Routes, BrowserRouter} from 'react-router-dom';
import img1 from './Images/CLOUD.jpg'
import img2 from './Images/pc.jpg'
import img3 from './Images/epson-l3210.jpg'
import img4 from './Images/ThinkCentre Neo 30a.jpg'
import img5 from './Images/CUBI-5.jpg'
import img6 from './Images/lenevo.jpg'
import Car0 from './Images/HP-EA.jpg'
import Car1 from './Images/realme-divers.jpg'
import Car2 from './Images/MODERN 15 SITE.jpg'
function App() {
  const images=[
  {title:'title1',description:'Pc Portable HP Victus 15-Fa0014nk / I5-12500H / 8 Go / RTX 3050 Ti 4G',img:Car0},
  {title:'title2',description:'Smartphone Realme C55 / 6 Go / 128 Go / Gold + Abonnement OTT Pro 12 Mois Offert',img:Car1},
  {title:'title4',description:'Pc Portable MSI Modern 15 / I3 11é Gen / 8 Go / 256 Go SSD / Noir',img:Car2}
]
const Cards=[
  {title:'Casque Micro Gaming HyperX Cloud Alpha S / Bleu',description:'Casque Micro Gaming HyperX Cloud Alpha S - Arceaux Aluminium Et Port Confortable Avec Mousse À Mémoire De Forme',img:img1},
  {title:'PC Portable Asus ExpertBook B1 B1500CEA / I5 11è Gén / 8 Go / Noir',description:'Ecran 15.6" HD - Processeur Intel Core I5-1135G7, Up To 4.2 Ghz, 8 Mo De Mémoire Cache - Mémoire 8 Go - Disque 1 To - Intel Iris Xe Graphics',img:img2},
  {title:'IMPRIMANTE MULTIFONCTION À RÉSERVOIR INTÉGRÉ 3EN1',description:'Imprimante Multifonction à réservoir intégré 3en1 couleur Epson ECOTANK L3210 - Impression, Numérisation, Copie ',img:img3},
  {title:'Pc De Bureau All In One Lenovo ThinkCentre Neo 30a-22 ',description:'Écran 21.5" Full HD (1920 x 1080) - Processeur Intel Core i5-1240P, up to 4.40 GHz , 12 Mo de mémoire cache - 4 Go de mémoire - Disque 256 Go SSD',img:img4},
  {title:'MINI PC MSI CUBI5 10M-009BEU / I3 10È GÉN ',description:'Processeur Intel Core i3-10110U, - Dual-Core 2.1 GHz, 4 threads - Cache 4 Mo - TDP 15W - Mémoire 8 Go - Disque 512 Go SSD - Intel UHD Graphics - Bluetooth 5.2',img:img5},
  {title:'PC PORTABLE LENOVO IDEAPAD 3 15IIL05 / I3 10È GÉN',description:'Ecran 15.6" HD LED - Processeur Intel i3-1005G1, 10è Génération, up to 3.4 Ghz, 4 Mo de mémoire cache - Mémoire 8 Go - Disque 1 To SSD',img:img6},
  {title:'MINI PC MSI CUBI5 10M-009BEU / I3 10È GÉN ',description:'Processeur Intel Core i3-10110U, - Dual-Core 2.1 GHz, 4 threads - Cache 4 Mo - TDP 15W - Mémoire 8 Go - Disque 512 Go SSD - Intel UHD Graphics - Bluetooth 5.2',img:img5},

  {title:'PC Portable Asus ExpertBook B1 B1500CEA / I5 11è Gén / 8 Go / Noir',description:'Ecran 15.6" HD - Processeur Intel Core I5-1135G7, Up To 4.2 Ghz, 8 Mo De Mémoire Cache - Mémoire 8 Go - Disque 1 To - Intel Iris Xe Graphics',img:img2},

]

  return (
    <div className="App">   
        <Header/>
        <Carousel >
        {images.map((item, index) => (
          <div className="slide">
            <img alt="sample_file" src={item.img} key={index} />
           
            <p className="legend">{item.description}</p>

          </div>
        ))}
      </Carousel>
       <BrowserRouter>
       <Routes>
       <Route path='/' element={Cards.map((element)=>(<Section2 title={element.title} description={element.description} img={element.img}  />)) }/>
       <Route path='/Contact' element={ <Contact/>} />
       

       </Routes>
       </BrowserRouter>
    
      
     
      </div> 
  );
}

export default App;
