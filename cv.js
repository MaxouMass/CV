
const ThemeMenu_BTN_ = document.getElementById("ThemeMenu_BTN");//======================================BTN-ThemeMenu
const Competances_glass_ = document.getElementById('Competances_glass');
const diplome_ = document.getElementById("diplome");
let coefMOZ_START = 80; let coefMOZI_PiX = 0; 
//document.addEventListener("scroll", () => {  console.log( "scrollY : " + scrollY ); })
//---------------------------------------------------------------------------------------------------------------------Fonction utiles
if( window.navigator.vendor == "Google Inc."){ coefMOZ_START = 70; coefMOZI_PiX = 5 }else{ coefMOZ_START=60; coefMOZI_PiX= 15 }
let Competan_pos_TOP = {0:-20, 1:-parseInt(coefMOZ_START +"00"), 2:-170, 3:-125, 4:-80, 5:-40, 5:-15, };
let Bool_Compet_opn = false;

const slid_Compet_OPN = () => {  
  document.getElementById("Competances").style.setProperty("--opn_cptce", "opn_cptce");
  document.getElementById("Competances_glass").classList = "glass_OPN";
  if(window.innerWidth > 955){ document.getElementById("exper").classList = "exper_SHORT";}  
  Bool_Compet_opn = true; 
  rebond_("visi_card",Competan_pos_TOP,5+coefMOZI_PiX,0);    
}
const slid_Compet_CLS = () => {
  document.getElementById("Competances").style.setProperty("--opn_cptce", "cls_cptce");  
  document.getElementById("Competances_glass").classList = "glass_CLS"; 
  document.getElementById("exper").classList = "exper_LONG";
  Bool_Compet_opn = false;
  document.querySelectorAll("#langue_fr_BAR, #langue_an_BAR").forEach((bar) => 
    { bar.style.setProperty("--bck_BAR", "0%"); bar.style.setProperty("--bck_BAR_2", "0%"); })

}
const BARs_langues = ( CIBLE_ID,val) => {  
  let i = 0;
  const boucle = ( ) => {
    if ( i < val ) { document.getElementById(CIBLE_ID).style.setProperty("--bck_BAR", i + "%"); }
    if ( i < val ) { document.getElementById(CIBLE_ID).style.setProperty("--bck_BAR_2", (i-2) + "%"); }
    setTimeout(() => { i++; boucle();}, 20);
  }
  boucle();
}
const rebond_ = ( CIBLE_ID,TAB_refer,NBR_PiX,vitS) => {
  const CIBLE_ = document.getElementById(CIBLE_ID);
  let Cible_TAB = 1;

  const increm_DOWN = () =>{  
    let POS_actu=TAB_refer[Cible_TAB];
    const boucle = () => { 
      if( POS_actu < TAB_refer[0] ){5    
        CIBLE_.style.setProperty( "--pos_TOP", POS_actu + 'px' );
        setTimeout(() => { POS_actu=NBR_PiX+POS_actu; boucle(); }, (vitS + 0.001)); } 
      else {  Cible_TAB++; increm_UP(); }
    } 
    boucle();
  }

  const increm_UP = () =>{
    let POS_act=TAB_refer[0]; 
      const boucle2 = () => {                 //console.log("Cible_TAB : " + Cible_TAB + "  vitS_REF : " + vitS_REF + " TAB_refer[Cible_TAB+1] : " + [Cible_TAB+1]); 
        if(POS_act > TAB_refer[Cible_TAB]){   //console.log("TAB_refer[Cible_TAB] : " + TAB_refer[Cible_TAB] + "  POS_act : " + POS_act);
            CIBLE_.style.setProperty( "--pos_TOP", POS_act + 'px' );
            setTimeout(() => { POS_act = (--POS_act)-NBR_PiX ; boucle2(); }, (vitS + 0.001)); }
        else{               
            if(TAB_refer[Cible_TAB] == null){
              BARs_langues("langue_fr_BAR",99);
              setTimeout(() => {BARs_langues("langue_an_BAR",51)}, 2500); 
              console.log("FIN");return;}; 

            increm_DOWN(); } 
      }
      boucle2();          
  } 
  increm_DOWN();
}

(() => { 
  document.getElementById("ThemeMenu_TXT").addEventListener('mouseenter', () => { ThemeMenu_BTN_.classList = "" }) ;              //OUVERTURE PASTILLES THEME
  document.getElementById("Entete_BOX").addEventListener('mouseleave', () => {  ThemeMenu_BTN_.classList = "_HIDE_" }) ;              //OUVERTURE PASTILLES THEME
  
  window.addEventListener('resize',(e) =>{  
    console.log(e.target.innerWidth);
    dateShort();
    
    if(!Bool_Compet_opn){ if(e.target.innerWidth > 1000 ){ slid_Compet_OPN(); }}
    if(Bool_Compet_opn){ if(e.target.innerWidth < 1000 ){ slid_Compet_CLS(); }}  
  })

  if( localStorage.theme ) { document.body.className = localStorage.theme; }  

  setInterval(() => {
    if( document.getElementById("infosperso_VICON").innerHTML == "" )
    { document.getElementById("infosperso_VICON").innerHTML = "&#10094;"}      
    else { document.getElementById("infosperso_VICON").innerHTML = ""}

  }, 1000);

})()


const dateShort = () =>{ 
if(window.innerWidth > 440){ 
  document.getElementById('exper_date_1').innerHTML = `  
    <p>du <strong>17/06/2006</strong></p>
    <p>au <strong>28/07/2021</strong></p>
    <p><strong>Joigny</strong></p>
  `    
  document.getElementById('exper_date_2').innerHTML = `  
  <p>du 17/06/2006</p>
  <p>au 28/07/2021</p>
  <p>Joigny</p>` 
  
  document.getElementById('exper_date_3').innerHTML = `  
    <p>du 17/06/2006</p>
    <p>au 28/07/2021</p>
    <p>à Joigny</p>`}      
else {
  document.getElementById('exper_date_1').innerHTML = `  
  <p><strong>06/06</strong></p>
  <p><strong>07/21</strong></p>
  <p><strong>Joigny</strong></p>
    `
  document.getElementById('exper_date_2').innerHTML = `  
    <p>06/06</p>
    <p>07/21</p>
    <p>Joigny</p>`
  document.getElementById('exper_date_3').innerHTML = `  
    <p>06/06</p>
    <p>07/21</p>
    <p>Joigny</p>`} 
}
dateShort();

if(window.innerWidth > 1000){ slid_Compet_OPN(); } else { slid_Compet_CLS(); }               //OUVERTURE PASTILLES THEME


//=============================================================================================================================FONCTIONS**
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ALLBY_ID
document.body.addEventListener('click', (e) => {
    switch (e.target.id) {      
      case "infosperso_BTN":  
        if( !Bool_Compet_opn ){ slid_Compet_OPN(); } 
        else { slid_Compet_CLS(); }         
        break;
      case "infosperso":       
        if( !Bool_Compet_opn ){ slid_Compet_OPN(); } 
        else { slid_Compet_CLS(); }       
        break;
      case "PASTILLE_Dark":
        document.body.classList = "Theme_Dark";
        localStorage.theme = "Theme_Dark";          
        location.reload();
          break;
      case "PASTILLE_Purple":
        document.body.classList = "Theme_Purple";
        localStorage.theme = "Theme_Purple";      
        location.reload();
          break;
      case "PASTILLE_Blue":
        document.body.classList = "Theme_Blue";
        localStorage.theme = "Theme_Blue";      
        location.reload();
          break;
      case "PASTILLE_Red":  
      document.body.classList = "Theme_Red";
      localStorage.theme = "Theme_Red";      
      location.reload();
          break;


        default:
            null;}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ALLBY_ID**



