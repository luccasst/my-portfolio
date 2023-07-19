import React from "react";
import './serviceStyle.css';

const Services = () => {
  return (
    <section class="services" id="services">
    <div class="max-width">
        <h2 class="title">Serviços</h2>
        <div class="serv-content">
           <div class="card">
               <div class="box">
                <ion-icon name="brush-outline"></ion-icon>
                <div class="text">Web Sites</div>
                <p>Responsividade para dispositivos móveis.</p>
               </div>
           </div>

           <div class="card">
            <div class="box">
                <ion-icon name="trending-up-outline"></ion-icon>
             <div class="text">Escalabilidade</div>
             <p>Tempo de resposta rápido e ótima experiência para os usuários.</p>
            </div>
        </div>

        <div class="card">
            <div class="box">
                <ion-icon name="code-outline"></ion-icon>
             <div class="text">Design de Apps</div>
             <p>Criação de layouts atraentes.</p>
            </div>
        </div>
        </div>
    </div>
</section>
  );
};

export default Services;
