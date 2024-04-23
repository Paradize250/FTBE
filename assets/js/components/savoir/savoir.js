import React from 'react'

const features = [
    {
        name: 'Mises au point et Établissement des principes structurels',
        description: `Mises au point : Discussions initiales pour aligner les objectifs du projet, y compris la compatibilité entre les propositions architecturales et les principes structurels.

        Etablissement des principes structurels : Définition des fondements techniques qui guideront la conception structurelle, en tenant compte de la vision architecturale.`,
    },
    {
        name: 'Dimensionnement',
        description: `Schéma statique et cas de charges : Définition du modèle de calcul statique du bâtiment, identification des charges à prendre en compte.

        Calculs des efforts et vérification : Analyse des forces en présence, vérification des contraintes et des déplacements admissibles, descente de charges pour répartir les forces dans la structure.`,
    },
    {
        name: 'Expertise, calculs et modélisation (Revit, Robobat)',
        description: `Modélisation : Création de modèles numériques des éléments structurels, avec des vues spécifiques (planchers, etc.) et établissement des nomenclatures.

        Expertise calculs modélisation : Utilisation d'outils spécialisés comme Revit ou Robobat pour la modélisation précise et le calcul des structures.`,
    },
    {
        name: 'Description et Estimation',
        description: `Préconisations techniques : Rédaction de recommandations pour assurer la compréhension du projet structurel et faciliter son chiffrage.

        Estimation : Évaluation budgétaire des lots structurels pour s'assurer du respect du budget et fournir une base pour les appels d'offres.`,
    },
    {
        name: 'Économie de projet',
        description: `Matériaux et mise en œuvre : Sélection des matériaux architecturaux, discussion sur leur faisabilité et impact budgétaire.

        Chiffrage : Évaluation financière de tous les lots du projet pour respecter le budget.`,
    },
    {
        name: 'Études thermiques',
        description: `Note d’hypothèse et étude de faisabilité : Synthèse des solutions pour l'isolation, analyse coût-bénéfice en énergie.

        Réalisation des études thermiques : Évaluations conformes à la réglementation ou aux objectifs spécifiques du projet.`,
    },
    {
    name: 'Études fluides',
    description: `Mises au point sur les systèmes : Principes pour les raccordements et systèmes de chauffage, ventilation, etc.
    Dimensionnement et modélisation : Taille des espaces techniques, modélisation des parcours de fluides, études de puissance.
    
    Descriptions et estimation : Rédaction de préconisations pour les systèmes de fluides, estimation budgétaire des lots concernés.`,
}
];

export default function Savoir() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Specifications Techniques</h2>
                    <p className="mt-4 text-gray-500">
                        Ces étapes englobent différentes disciplines et aspects techniques, de la conception initiale à l'estimation budgétaire, en passant par les études spécialisées. Voici une explication détaillée de chaque phase :
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-600 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
                    <img
                        src='/img/energy.jpg'
                        alt='energie'
                        className="rounded-lg bg-gray-100 border-4 border-lime-900"
                    />
                    <img
                        src='/img/reglement.jpg'
                        alt='réglementation'
                        className="rounded-lg bg-gray-100 border-4 border-lime-900"
                    />
                    <img
                        src='/img/thermal.jpg'
                        alt='thermique'
                        className="rounded-lg bg-gray-100 border-4 border-lime-900"
                    />
                    <img
                        src='/img/fluides.jpg'
                        alt='fluides'
                        className="rounded-lg bg-gray-100 border-4 border-lime-900"
                    />
                </div>
            </div>
        </div>
    )
}
