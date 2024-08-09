import { useEffect, useState } from 'react';
import "../css/tipus.css"
function Tipus() {
  
  return (
    <div className="primer">      
        <div className='titols' style={{justifyContent:"center"}}>TIPUS D'ADAS</div>
            <div className="tipus">
                <div className="fons">
                    <div className="titolstipus">
                        ISA (Asistent intel·ligent de velocitat)
                    </div>
                    <div className="subtitolstipus">
                        Ajuda els conductors a mantenir-se dins dels límits de velocitat mitjançant avisos i intervencions automàtiques, utilitzant GPS i reconeixement de senyals de trànsit.
                    </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        REV (Detector de marxa enrere)
                    </div>
                    <div className="subtitolstipus">
                        Alerta al conductor sobre obstacles darrere del vehicle mitjançant sensors i càmeres, millorant la seguretat en maniobres de reversa.
                    </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        BSM (Sistema de monitorització d'angles morts)
                    </div>
                    <div className="subtitolstipus">
                        Detecta vehicles en els angles morts del conductor, emetent avisos visuals o sonors per evitar col·lisions durant els canvis de carril.                        </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        FCW (Avís de Col·lisió Frontal)
                    </div>
                    <div className="subtitolstipus">
                        Alerta al conductor sobre possibles col·lisions frontals, incloent-hi vianants i ciclistes, per prevenir accidents.
                    </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        LDW (Sistema d'Advertència d'Abandonament de Carril)
                    </div>
                    <div className="subtitolstipus">
                        Alerta al conductor quan el vehicle es desvia del seu carril sense senyalitzar, ajudant a prevenir sortides involuntàries de la via.
                    </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        AEB (Frenada d'Emergència Urbana i Interurbana)
                    </div>
                    <div className="subtitolstipus">
                        Activa els frens automàticament per evitar col·lisions o reduir la seva gravetat tant en entorns urbans com interurbans.                        </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        TSR (Reconeixement de Senyals de Trànsit)
                    </div>
                    <div className="subtitolstipus">
                        Identifica i mostra les senyals de trànsit al conductor, ajudant-lo a seguir les normes viàries.
                    </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        RCTA (Alerta de Trànsit Creuat)
                    </div>
                    <div className="subtitolstipus">
                        Avisa al conductor sobre vehicles que s'aproximen pels costats durant la marxa enrere, millorant la seguretat en maniobres de sortida.
                    </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        DDR (Sistema d'Advertència de Sonolència i Distracció)
                    </div>
                    <div className="subtitolstipus">
                        Detecta signes de fatiga o distracció en el conductor i emet avisos per alertar-lo, ajudant a mantenir l'atenció al volant.                        </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        LKA (Sistema Avançat de Manteniment de Carril)
                    </div>
                    <div className="subtitolstipus">
                        Ajuda a mantenir el vehicle dins del seu carril mitjançant correccions automàtiques de la direcció si es detecta una desviació involuntària.
                    </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        AEB (Sistema de Frenada Autònoma d'Emergència)
                    </div>
                    <div className="subtitolstipus">
                        Aplica els frens automàticament per evitar col·lisions amb vianants i ciclistes, millorant la seguretat en situacions d'emergència.                        </div>
                </div>
                <div className="fons">
                    <div className="titolstipus">
                        ESS (Sistema de Frenada d'Emergència)
                    </div>
                    <div className="subtitolstipus">
                        Activa automàticament els frens per reduir la velocitat o aturar el vehicle en situacions d'urgència per evitar col·lisions.
                    </div>
                </div>
            </div>
    </div>
)
}

export default Tipus;
