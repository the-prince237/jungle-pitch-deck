import { Users, TrendingUp, DollarSign, Target, Rocket, AlertCircle, Download } from 'lucide-react';

export const slides = [
  {
    title: "JUNGLE",
    subtitle: "Enfin, l'immobilier gagnant-gagnant",
    content: (
      <div className="text-center space-y-8">
        <div className="text-6xl mb-4">🏘️</div>
        <p className="text-2xl font-light">La plateforme qui transforme chaque expertise terrain en revenus garantis</p>
        <div className="pt-8 border-t border-gray-300 mt-12">
          <p className="text-lg text-gray-600">Durin Tasondock</p>
          <p className="text-gray-500">Yaoundé & Douala, Cameroun</p>
          <p className="text-gray-500">Janvier 2026</p>
        </div>
      </div>
    )
  },
  {
    title: "LA RÉALITÉ DU TERRAIN I - Les Agents Immobiliers",
    icon: <AlertCircle className="w-12 h-12 text-red-600" />,
    content: (
      <div className="space-y-6">
        <div className="bg-linear-to-r from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-bold mb-4 text-red-900">💔 Les agents immobiliers souffrent</h3>
          <div className="space-y-4 text-gray-800">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-red-700 mb-2">🚗 Visites physiques épuisantes et peu rentables</p>
              <p className="text-sm">Ils demandent 5000 FCFA par visite... mais reçoivent souvent 2000 FCFA ou moins. Des heures perdues pour quelques miettes.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-red-700 mb-2">⏰ Limites physiques frustrantes</p>
              <p className="text-sm">Impossible de faire plus de 5-6 visites par jour. Leur expertise terrain ne génère jamais l'attraction nécessaire pour vraiment gagner leur vie.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-red-700 mb-2">😤 Payés à la tête du client... ou pas payés du tout</p>
              <p className="text-sm">Après la signature, le locataire disparaît ou donne des miettes. Leur travail d'accompagnement ? Non rémunéré. Leur connaissance du quartier ? Donnée gratuitement.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-red-700 mb-2">📉 Clients de plus en plus rares</p>
              <p className="text-sm">Le bouche-à-oreille ne suffit plus. Pas de stratégie digitale = pas de visibilité = pas de clients.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "LA RÉALITÉ DU TERRAIN II - Les Locataires",
    icon: <AlertCircle className="w-12 h-12 text-red-600" />,
    content: (
      <div className="space-y-6">
        <div className="bg-linear-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
          <h3 className="text-2xl font-bold mb-4 text-orange-900">😓 Les locataires aussi en paient le prix</h3>
          <div className="space-y-4 text-gray-800">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-orange-700 mb-2">💸 Déplacements coûteux et chronophages</p>
              <p className="text-sm">Transport, temps perdu, journées entières sacrifiées pour voir 3-4 maisons... qui ne correspondent pas à ce qu'on leur a vendu.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-orange-700 mb-2">🤐 Informations cachées = mauvaises surprises</p>
              <p className="text-sm">L'accès difficile, le voisinage bruyant, les coupures d'eau fréquentes... tout ça, ils le découvrent APRÈS avoir signé.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-orange-700 mb-2">😰 Décisions prises dans le stress</p>
              <p className="text-sm">Comparer devient impossible. Ils choisissent à l'aveugle, regrettent, et doivent vivre avec pendant des mois.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "JUNGLE : LA SOLUTION QUI CHANGE TOUT",
    icon: <Rocket className="w-12 h-12" />,
    content: (
      <div className="space-y-6">
        <div className="bg-linear-to-br from-green-50 to-emerald-100 p-8 rounded-lg border-2 border-green-400">
          <h3 className="text-2xl font-bold mb-6 text-green-900 text-center">✨ Une plateforme mobile qui résout VRAIMENT les problèmes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-green-800 border-b-2 border-green-300 pb-2">🎯 Pour les Agents</h4>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-green-700 mb-2">💰 Revenus immédiats garantis</p>
                <p className="text-sm text-gray-700">Chaque consultation = argent direct. Plus de clients qui disparaissent. 95% des revenus leur reviennent.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-green-700 mb-2">🚀 Visibilité décuplée</p>
                <p className="text-sm text-gray-700">Une seule vidéo = des centaines de visites. Pas de limite physique. Leur expertise devient un produit scalable.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-green-700 mb-2">📱 Travail une fois, revenus multiples</p>
                <p className="text-sm text-gray-700">Créent le contenu une fois, le monétisent 10, 50, 100 fois. Capitalisation automatique sur leur connaissance du terrain.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-green-700 mb-2">🎯 Clients qualifiés</p>
                <p className="text-sm text-gray-700">Ceux qui paient pour voir sont vraiment intéressés. Fini les curieux qui font perdre du temps.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg text-blue-800 border-b-2 border-blue-300 pb-2">🏠 Pour les Locataires</h4>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-blue-700 mb-2">🛋️ Exploration depuis son canapé</p>
                <p className="text-sm text-gray-700">Visites virtuelles 3D, vidéos détaillées. Plus besoin de traverser la ville pour voir une maison décevante.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-blue-700 mb-2">🗺️ TOUT est révélé</p>
                <p className="text-sm text-gray-700">Chemin d'accès réel, voisinage, bruit, eau, électricité... Les secrets deviennent visibles AVANT de signer.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-blue-700 mb-2">⚖️ Comparaison facile</p>
                <p className="text-sm text-gray-700">Revisionnent autant qu'ils veulent. Prennent des décisions éclairées, sans stress ni regrets.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-semibold text-blue-700 mb-2">💵 Économies massives</p>
                <p className="text-sm text-gray-700">1500 FCFA pour tout savoir vs 10 000+ FCFA en transports pour des visites décevantes.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-linear-to-r from-purple-100 to-pink-100 p-6 rounded-lg text-center border-2 border-purple-300">
          <p className="text-2xl font-bold text-purple-900">🤝 Enfin un modèle où tout le monde gagne vraiment</p>
        </div>
      </div>
    )
  },
  {
    title: "MODÈLE ÉCONOMIQUE",
    icon: <DollarSign className="w-12 h-12" />,
    content: (
      <div className="space-y-6">
        <div className="bg-linear-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">💡 Fonctionnement Simple et Efficace</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow">
              <span className="text-3xl">1️⃣</span>
              <div>
                <p className="font-semibold text-lg">Agent crée du contenu premium une seule fois</p>
                <p className="text-sm text-gray-600">Vidéos détaillées, visites 3D, infos cachées du quartier (30-45 min de travail)</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow">
              <span className="text-3xl">2️⃣</span>
              <div>
                <p className="font-semibold text-lg">Visiteurs paient pour voir (1000-2000 FCFA)</p>
                <p className="text-sm text-gray-600">Accès 24h au contenu. Peuvent revisiter en repayant (informations qui valent de l'or)</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow">
              <span className="text-3xl">3️⃣</span>
              <div>
                <p className="font-semibold text-lg">Répartition automatique et transparente</p>
                <p className="text-sm text-gray-600">Agent : 95% (1425 FCFA en moyenne) • Jungle : 5% (75 FCFA de commission)</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow">
              <span className="text-3xl">4️⃣</span>
              <div>
                <p className="font-semibold text-lg">Agent garde SA commission finale intégrale</p>
                <p className="text-sm text-gray-600">Jungle ne prend RIEN sur la transaction finale. L'agent capitalise sur son travail ET garde tout à la signature.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "MODÈLE ÉCONOMIQUE",
    icon: <DollarSign className="w-12 h-12" />,
    content: (
      <div className="space-y-6">
        <div className="bg-linear-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold mb-4 text-green-800">📊 Exemple Concret d'un Agent</h3>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm mb-3 text-gray-700">Agent met en ligne 4 propriétés. Chacune est vue par 8 visiteurs/mois qui paient en moyenne 1500 FCFA.</p>
            <div className="space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Revenus consultations/mois :</span>
                <span className="font-bold text-green-700">48 000 FCFA (4 × 8 × 1500)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Part de l'agent (95%) :</span>
                <span className="font-bold text-green-700">45 600 FCFA</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Commission Jungle (5%) :</span>
                <span className="font-bold text-blue-600">2 400 FCFA</span>
              </div>
              <div className="flex justify-between pt-2 bg-green-50 p-3 rounded mt-3">
                <span className="font-semibold">+ Commission finale intégrale (1 location) :</span>
                <span className="font-bold text-green-800">~50 000 FCFA</span>
              </div>
              <div className="bg-yellow-50 p-3 rounded mt-2 border-l-4 border-yellow-400">
                <p className="font-bold text-lg text-yellow-900">Total mensuel : ~95 000 FCFA minimum</p>
                <p className="text-sm text-gray-700 mt-1">Sans compter les revenus des mois suivants si les propriétés ne sont pas encore louées !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "MARCHÉ & POSITIONNEMENT",
    icon: <Target className="w-12 h-12" />,
    content: (
      <div className="space-y-6">
        <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-800">🌊 Stratégie Océan Bleu</h3>
          <p className="text-gray-700 mb-4 text-lg">Nous ne créons pas un nouveau marché. Nous digitalisons et optimisons une pratique existante que les agents font déjà : <span className="font-bold">faire payer les visites.</span></p>
          <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
            <p className="font-semibold text-purple-700 mb-2">La différence JUNGLE :</p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>❌ <span className="font-semibold">Avant :</span> 5-6 visites/jour max • Payé 2000 FCFA au lieu de 5000 • Clients qui disparaissent • Fatigue physique</p>
              <p>✅ <span className="font-semibold">Avec Jungle :</span> 100+ consultations possibles • Paiement automatique garanti • Capitalisation continue • Zéro déplacement</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-5 rounded-lg">
            <p className="font-semibold text-blue-800 mb-2">🎯 Cible Primaire</p>
            <p className="text-sm text-gray-700">Agents immobiliers de quartiers épuisés par les visites non rentables (Yaoundé & Douala)</p>
          </div>
          <div className="bg-linear-to-br from-green-50 to-green-100 p-5 rounded-lg">
            <p className="font-semibold text-green-800 mb-2">👥 Cible Secondaire</p>
            <p className="text-sm text-gray-700">Locataires urbains actifs fatigués des déplacements coûteux et des mauvaises surprises</p>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <h3 className="text-xl font-semibold mb-3 text-yellow-800">🔥 Pourquoi c'est Imparable</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ <span className="font-semibold">Douleur réelle et vécue quotidiennement</span> par les 2 parties</li>
            <li>✓ <span className="font-semibold">Comportement déjà existant</span> : les agents font déjà payer, on l'améliore juste</li>
            <li>✓ <span className="font-semibold">Pas de concurrent direct</span> sur ce modèle au Cameroun</li>
            <li>✓ <span className="font-semibold">Effet réseau</span> : plus d'agents = plus de propriétés = plus de visiteurs = plus d'agents</li>
            <li>✓ <span className="font-semibold">Scalable à l'infini</span> : reproductible dans toutes les villes d'Afrique</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "PROJECTIONS FINANCIÈRES",
    icon: <TrendingUp className="w-12 h-12" />,
    content: (
      <div className="space-y-6">
        <div className="bg-linear-to-r from-green-50 to-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">📈 Croissance Agents Actifs</h3>
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-white p-4 rounded-lg text-center shadow-lg">
              <p className="text-4xl font-bold text-blue-600">100</p>
              <p className="text-sm text-gray-600 mt-1">6 mois</p>
              <p className="text-xs text-gray-500 mt-2">Base solide établie</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-lg">
              <p className="text-4xl font-bold text-green-600">700</p>
              <p className="text-sm text-gray-600 mt-1">1 an</p>
              <p className="text-xs text-gray-500 mt-2">Expansion rapide</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-lg">
              <p className="text-4xl font-bold text-purple-600">3000</p>
              <p className="text-sm text-gray-600 mt-1">2 ans</p>
              <p className="text-xs text-gray-500 mt-2">Leader régional</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-lg">
              <p className="text-4xl font-bold text-red-600">10000</p>
              <p className="text-sm text-gray-600 mt-1">3 ans</p>
              <p className="text-xs text-gray-500 mt-2">Domination marché</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold mb-4 text-green-800">💰 Chiffre d'Affaires Prévisionnel (Commission Jungle 5%)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded shadow">
              <span className="text-gray-700">Année 1 (700 agents moyens) :</span>
              <span className="text-2xl font-bold text-green-700">~21M FCFA</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded shadow">
              <span className="text-gray-700">Année 2 (3000 agents) :</span>
              <span className="text-2xl font-bold text-green-700">~216M FCFA</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded shadow">
              <span className="text-gray-700">Année 3 (10000 agents) :</span>
              <span className="text-2xl font-bold text-green-700">~600M FCFA</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">📊 Hypothèses Conservatives</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-blue-700">Propriétés/agent :</p>
              <p className="text-gray-600">4 en simultané en moyenne</p>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-blue-700">Consultations/propriété :</p>
              <p className="text-gray-600">8 visiteurs/mois (2 visionnages)</p>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-blue-700">Prix moyen consultation :</p>
              <p className="text-gray-600">1500 FCFA</p>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold text-blue-700">Revenus agent/mois :</p>
              <p className="text-gray-600">~50 000 FCFA (consultations)</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center italic">Détails complets dans le document de projections financières</p>
      </div>
    )
  },
  {
    title: "ROADMAP & ÉQUIPE",
    icon: <Users className="w-12 h-12" />,
    content: (
      <div className="space-y-6 flex items-start gap-10">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">🗓️ Timeline de Lancement</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-24 text-sm font-semibold text-blue-700">05 Jan 2026</div>
              <div className="flex-1 bg-blue-200 p-3 rounded shadow">
                <p className="font-semibold">Lancement officiel</p>
                <p className="text-xs text-gray-700">Développement plateforme • Recherche financement 25M FCFA</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24 text-sm font-semibold text-green-700">T1 2026</div>
              <div className="flex-1 bg-green-200 p-3 rounded shadow">
                <p className="font-semibold">Phase MVP & Recrutement</p>
                <p className="text-xs text-gray-700">Développeur mobile, Designer UI/UX, Community Manager</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24 text-sm font-semibold text-purple-700">T2 2026</div>
              <div className="flex-1 bg-purple-200 p-3 rounded shadow">
                <p className="font-semibold">Déploiement Marketing Massif</p>
                <p className="text-xs text-gray-700">Acquisition 100 premiers agents • 80% budget en marketing</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24 text-sm font-semibold text-orange-700">S2 2026</div>
              <div className="flex-1 bg-orange-200 p-3 rounded shadow">
                <p className="font-semibold">Accélération Croissance</p>
                <p className="text-xs text-gray-700">700 agents fin année 1 • Expansion Douala intensive</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">👥 Équipe & Recrutements</h3>
          <div className="space-y-3">
            <div className="bg-linear-to-r from-blue-100 to-blue-50 p-4 rounded-lg shadow-sm">
              <p className="font-bold text-blue-900">Durin Tasondock - Fondateur & CEO</p>
              <p className="text-sm text-gray-700 mt-1">Vision produit, stratégie, relations agents, support client</p>
            </div>
            <div className="bg-white p-3 rounded shadow-sm border-l-4 border-green-400">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Développeur Mobile Full-Stack</p>
                  <p className="text-xs text-gray-600">iOS, Android, Backend API • À recruter T1-T2</p>
                </div>
                <p className="text-sm font-bold text-green-700">125K FCFA/mois</p>
              </div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm border-l-4 border-purple-400">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Designer UI/UX</p>
                  <p className="text-xs text-gray-600">Interface mobile, expérience utilisateur • À recruter T1-T2</p>
                </div>
                <p className="text-sm font-bold text-purple-700">100K FCFA/mois</p>
              </div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm border-l-4 border-orange-400">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Community Manager</p>
                  <p className="text-xs text-gray-600">Acquisition agents, réseaux sociaux, growth • À recruter T1-T2</p>
                </div>
                <p className="text-sm font-bold text-orange-700">100K FCFA/mois</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded mt-4">
            <p className="text-sm text-center text-blue-800"><span className="font-bold">Masse salariale mensuelle :</span> 325 000 FCFA (couvert sur 6 mois dans le budget)</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "BESOIN DE FINANCEMENT",
    icon: <DollarSign className="w-12 h-12" />,
    content: (
      <div className="space-y-6">
        <div className="bg-linear-to-br from-purple-100 via-blue-100 to-purple-100 p-8 rounded-lg text-center border-4 border-purple-400 shadow-xl">
          <h3 className="text-4xl font-bold text-purple-900 mb-2">25 000 000 FCFA</h3>
          <p className="text-lg text-gray-700">Financement recherché pour un lancement explosif</p>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold mb-4">💼 Utilisation Stratégique des Fonds</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b-2 pb-3">
              <div>
                <p className="font-semibold text-blue-700">💻 Développement Plateforme (20%)</p>
                <p className="text-xs text-gray-600">Appli mobile, backend, infrastructure cloud, outils 3D</p>
              </div>
              <span className="font-bold text-blue-600 text-xl">5M FCFA</span>
            </div>
            <div className="flex justify-between items-center border-b-2 pb-3">
              <div>
                <p className="font-semibold text-green-700">📱 Marketing & Acquisition Massive (80%)</p>
                <p className="text-xs text-gray-600">Publicité digitale, démo agents, incentives lancement, visibilité</p>
              </div>
              <span className="font-bold text-green-600 text-xl">20M FCFA</span>
            </div>
            <div className="bg-yellow-50 p-3 rounded mt-3 border-l-4 border-yellow-400">
              <p className="text-sm text-gray-700"><span className="font-semibold">+ Masse salariale 6 mois :</span> 1,95M FCFA (Dev, Designer, CM)</p>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold mb-3 text-green-800">🎯 Stratégie de Financement</h3>
          <p className="text-gray-700 mb-3">Combinaison flexible de prêt bancaire et investissement occasionnel minimal pour démarrage rapide.</p>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold text-green-700 mb-2">Objectif clair :</p>
            <p className="text-sm text-gray-700">Mettre le paquet sur l'acquisition d'agents dès le départ. Plus nous avons d'agents rapidement, plus le réseau devient attractif pour les locataires, et plus les agents gagnent. Cercle vertueux immédiat.</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center shadow">
            <p className="text-3xl font-bold text-blue-700">6 mois</p>
            <p className="text-sm text-gray-600 mt-1">Break-even visé</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg text-center shadow">
            <p className="text-3xl font-bold text-purple-700">100</p>
            <p className="text-sm text-gray-600 mt-1">Agents à 6 mois</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center shadow">
            <p className="text-3xl font-bold text-green-700">10K</p>
            <p className="text-sm text-gray-600 mt-1">Agents à 3 ans</p>
          </div>
        </div>

        <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300">
          <h3 className="text-lg font-bold mb-2 text-red-800">⚡ Pourquoi l'urgence ?</h3>
          <p className="text-gray-700">Les agents souffrent MAINTENANT. Les locataires perdent de l'argent CHAQUE JOUR. Plus nous attendons, plus ils continuent à subir. Le marché est prêt, la solution existe, il ne manque que le financement pour déployer massivement.</p>
        </div>
      </div>
    )
  },
  {
    title: "POURQUOI JUNGLE MAINTENANT ?",
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">💎 L'opportunité parfaite</h2>
          <p className="text-lg text-gray-600">Un problème réel • Une solution simple • Un marché prêt</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-3 text-red-800">😤 Douleur Maximale</h3>
            <p className="text-gray-700">Les agents sont épuisés, sous-payés, frustrés. Les locataires jettent l'argent par les fenêtres et regrettent leurs choix. Cette souffrance quotidienne crée une demande énorme.</p>
          </div>
          <div className="bg-linear-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-3 text-green-800">✅ Solution Évidente</h3>
            <p className="text-gray-700">Nous ne réinventons rien. Nous digitalisons une pratique existante et la rendons profitable pour tous. Simplicité = adoption rapide.</p>
          </div>
          <div className="bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">🎯 First Mover</h3>
            <p className="text-gray-700">Aucun concurrent direct sur ce modèle au Cameroun. Nous créons la catégorie et devenons le standard. Barrière à l'entrée massive une fois le réseau établi.</p>
          </div>
          <div className="bg-linear-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-3 text-purple-800">🚀 Scalabilité Infinie</h3>
            <p className="text-gray-700">Le modèle fonctionne à Yaoundé ? On réplique à Douala, Bafoussam, Garoua... puis dans toute l'Afrique francophone. Potentiel de croissance exponentiel.</p>
          </div>
        </div>

        <div className="bg-linear-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-400">
          <h3 className="text-xl font-bold mb-3 text-yellow-900 text-center">🔥 Le Timing Parfait</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <p className="font-bold text-yellow-700">📱 Smartphones</p>
              <p className="text-gray-600">Adoption massive au Cameroun</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-yellow-700">💳 Mobile Money</p>
              <p className="text-gray-600">Paiements digitaux normalisés</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-yellow-700">🏘️ Urbanisation</p>
              <p className="text-gray-600">Demande locative en explosion</p>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg text-center shadow-2xl">
          <p className="text-3xl font-bold mb-4">🤝 Transformons l'immobilier ensemble</p>
          <p className="text-lg mb-2">Les agents méritent d'être payés à leur juste valeur.</p>
          <p className="text-lg mb-6">Les locataires méritent la transparence totale.</p>
          <div className="border-t-2 border-gray-600 pt-6 mt-6">
            <p className="text-xl font-semibold mb-2">Durin Tasondock</p>
            <p className="text-gray-300">Fondateur • Jungle</p>
            <p className="text-gray-400 mt-2">Yaoundé & Douala, Cameroun • Janvier 2026</p>
          </div>
        </div>
      </div>
    )
  }
];