import React from 'react';
import Pdf from 'react-to-pdf';
import PhotoCv from '../../images/photo_Fred_cv.jpg';


import './styles.scss';

const ref = React.createRef();

    const Cv = () => {
        return (
        <section className="cv2">
        <div className="corner"></div>
            <div ref={ref} className="cv2__profil">
                <div className="cv2__profil__left">
                    <img className="cv2__profil__left__img" src={PhotoCv} alt="profil"/>
                    <h3 className="cv2__profil__left__subtitle"><i className="las la-id-card"></i> Profil</h3>
                    <ul className="cv2__profil__left__list">
                        <li className="cv2__profil__left__list__phone">
                            <i className="las la-phone la-lg"></i> 06 19 84 74 29
                        </li>
                        <li className="cv2__profil__left__list__mail">
                            <i className="las la-at la-lg"></i> frederic.caffier@hotmail.com
                        </li>
                        <li className="cv2__profil__left__list__adress">
                            <i className="las la-home la-lg"></i> 5, place de l'église
                        </li>
                        <li className="cv2__profil__left__list__city">78450 Galluis</li>
                        <li className="cv2__profil__left__list__car">
                            <i className="las la-car la-lg"></i> Permis A et B (véhiculé)
                        </li>
                        <li className="cv2__profil__left__list__age">
                        <i className="las la-birthday-cake la-lg"></i> Né la 1 fevrier 1984 
                        </li>
                        <li className="cv2__profil__left__list__rqth">
                            <i className="las la-user-md la-lg"></i> RQTH
                        </li>
                    </ul>
                    <h3 className="cv2__profil__left__subtitle">Reseau</h3>
                    <ul className="cv2__profil__left__list">
                        <li className="cv2__profil__left__list__linkedin">
                        <i className="lab la-linkedin la-lg"></i> www.linkedin.com/in/frederic-caffier
                        </li>
                        <li className="cv2__profil__left__list__github">
                            <i className="lab la-github la-lg"></i> https://github.com/Pilou4
                        </li>
                        <li className="cv2__profil__left__list__web">
                            <i className="las la-address-book la-lg"></i>https://frederic-caffier.fr
                        </li>
                    </ul>
                    <h3 className="cv2__profil__left__subtitle">Compétences</h3>
                    <ul className="cv2__profil__left__list">
                        <li className="cv2__profil__left__list__competences">Etablir un cahier des charge</li>
                        <li className="cv2__profil__left__list__competences">Planification et gestion de projet</li>
                        <li className="cv2__profil__left__list__competences">Méthodologie Agile Scrum</li>
                        <li className="cv2__profil__left__list__competences">Expériences UI/UX</li>
                        <li className="cv2__profil__left__list__competences">SEO (référencement naturel)</li>
                    </ul>
                    <h3 className="cv2__profil__left__subtitle">Languages informatiques</h3>
                    <ul className="cv2__profil__left__list">
                        <li className="cv2__profil__left__list__languages">HTML</li>
                        <li className="cv2__profil__left__list__languages">CSS/SASS</li>
                        <li className="cv2__profil__left__list__languages">JavaScript</li>
                        <li className="cv2__profil__left__list__languages">PHP</li>
                        <li className="cv2__profil__left__list__languages">Mysql</li>
                        <li className="cv2__profil__left__list__languages">Bootstrap/semantic ui</li>
                        <li className="cv2__profil__left__list__languages">Symfony/api platform</li>
                        <li className="cv2__profil__left__list__languages">React/redux</li>
                        <li className="cv2__profil__left__list__languages">ajax/axios</li>
                        <li className="cv2__profil__left__list__languages">git/github</li>
                    </ul>           
                    <h3 className="cv2__profil__left__subtitle">Savoir-être</h3>
                    <ul className="cv2__profil__left__list">
                        <li className="cv2__profil__left__list__savoir">Rigoureux</li>
                        <li className="cv2__profil__left__list__savoir">Autonome</li>
                        <li className="cv2__profil__left__list__savoir">Appliqué</li>
                        <li className="cv2__profil__left__list__savoir">Impliqué</li>
                        <li className="cv2__profil__left__list__savoir">Organisé et méthodique</li>
                        <li className="cv2__profil__left__list__savoir">Esprit d'équipe</li>

                    </ul>
                    <h3 className="cv2__profil__left__subtitle"><i className="las la-certificate"></i> Diplômes</h3>
                    <ul className="cv2__profil__left__list">
                        <li className="cv2__profil__left__list__diplome">2021 - titre professionnel développeur web et web mobile (RNCP niv5)</li>
                        <li className="cv2__profil__left__list__diplome">2020 - Certification Opquast niveau avancé</li>
                        <li className="cv2__profil__left__list__diplome">2003 - CAP et BEP froid et climatisation</li>
                    </ul>
                </div>
                <div className="cv2__profil__right">
                    <div className="cv2__profil__right__header">
                        <h1 className="cv2__profil__right__name">Frédéric CAFFIER</h1>
                        <h2 className="cv2__profil__right__title">Développeur web</h2>
                        <h2 className="cv2__profil__right__text">A la recherche d'un stage pour la période du 3 janvier au 11 février 2022 </h2>
                    </div>
                    <h3 className="cv2__profil__right__subtitle"><i className="las la-book la-lg"></i>Experiences</h3>
                    <h3 className="cv2__profil__right__date">Septembre 2020 - Oclock - Création de projet</h3>
                        <ul className="cv2__profil__right__list">
                            <li className="cv2__profil__right__list__pro">Mise en place d'un site de suivi pédagogique pour les écoles élémentaires</li> 
                            <li className="cv2__profil__right__list__pro">Rédaction du cahier des charges</li>
                            <li className="cv2__profil__right__list__pro">Users stories</li>
                            <li className="cv2__profil__right__list__pro">Réalisation de wireframes</li>
                            <li className="cv2__profil__right__list__pro">Répartition des tickets dans trello</li>
                            <li className="cv2__profil__right__list__pro">Création de MCD</li>
                        </ul>
                        <h4 className="cv2__profil__right__date">Août 2016 à Avril 2019 - Busca - Magasinier-cariste</h4>
                        <ul className="cv2__profil__right__list">
                            <li className="cv2__profil__right__list__pro">Gestions des stocks, passage et réception des commandes</li>
                            <li className="cv2__profil__right__list__pro">Chargement et déchargement des camions</li>
                            <li className="cv2__profil__right__list__pro">Entretien de la cour</li>
                        </ul>
                        <h4 className="cv2__profil__right__date">Novembre 2009 à Juillet 2016 - Castorama - conseiller de vente</h4>
                        <ul className="cv2__profil__right__list">
                            <li className="cv2__profil__right__list__pro">Accueil et formation des nouveaux employés</li>
                            <li className="cv2__profil__right__list__pro">Information et fidélisation de la clientèle, gestions des commandes clients</li>
                            <li className="cv2__profil__right__list__pro">Gestions des stocks, passage des commandes fournisseurs, inventaire annuel</li>
                        </ul>
                        <h4 className="cv2__profil__right__date">Février 2007 à Octobre 2009 - AZ Diffusion - Technico-commercial</h4>
                        <ul className="cv2__profil__right__list">
                            <li className="cv2__profil__right__list__pro">Animation de stand sur des salons (foire de Paris...)</li>
                            <li className="cv2__profil__right__list__pro">Vente, livraison, installation et mise en service</li>
                            <li className="cv2__profil__right__list__pro">Suivi des commandes et litiges clients</li>
                        </ul>
                        <h4 className="cv2__profil__right__date">Mars 2005 à Janvier 2007 - Lenôtre - Employé polyvalent</h4>
                        <ul className="cv2__profil__right__list">
                            <li className="cv2__profil__right__list__pro">Préparation des commandes, expéditions et réception des marchandises</li>
                        </ul>
                        <h4 className="cv2__profil__right__date">Novembre 2001 à Janvier 2005 - Pizza hut - Employé polyvalent</h4>
                        <ul className="cv2__profil__right__list">
                            <li className="cv2__profil__right__list__pro">Accueil et formation des nouveaux employés</li>
                            <li className="cv2__profil__right__list__pro">Contrôle des conditions d'hygiène et de sécurité</li>
                            <li className="cv2__profil__right__list__pro">Cuisine, Service</li>
                        </ul>
                    <h3 className="cv2__profil__right__subtitle__form"><i className="las la-graduation-cap la-lg"></i>Formations</h3>
                    <h4 className="cv2__profil__right__date">Depuis juin 2021 - École Doranco - Concepteur développeur d'application</h4>
                    <ul className="cv2__profil__right__list">
                        <li className="cv2__profil__right__list__form">Formalisation et modélisation avec les méthode RUP et UML</li>
                        <li className="cv2__profil__right__list__form">CSharp/C#.Net, Dotnet, Ado.net, Asp.net Soap et rest en .net</li>
                        <li className="cv2__profil__right__list__form">Design patterns et architectures applicatives</li>
                        <li className="cv2__profil__right__list__form">Java, Javascript, Angular, React</li>
                        <li className="cv2__profil__right__list__form">Node.js Mongo DB</li>
                    </ul>
                    <h4 className="cv2__profil__right__date">Avril 2020 à Octobre 2020 - École Oclock - Développeur web et web mobile</h4>
                    <ul className="cv2__profil__right__list">
                            <li className="cv2__profil__right__list__form">HTML, CSS, Javascript, PHP, Mysql, API Rest, Wordpress</li>
                            <li className="cv2__profil__right__list__form">Terminal, Git et Github</li>
                            <li className="cv2__profil__right__list__form">Symfony, React, Bootstrap, Lumen, Eloquent</li>
                            <li className="cv2__profil__right__list__form">Utilisation Insomnia, Trello, Whismisical</li>
                            <li className="cv2__profil__right__list__form">Méthodologie AGILE et SCRUM</li>
                        </ul>
                    <h4 className="cv2__profil__right__date">Depuis Janvier 2019 - Formation Openclassrooms</h4>
                    <ul className="cv2__profil__right__list">
                        <li className="cv2__profil__right__list__form">17 certifications obtenues au métier de développeur web</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Cv;

