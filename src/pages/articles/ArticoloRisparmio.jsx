import ArticleLayout from './ArticleLayout';

export default function ArticoloRisparmio() {
    return (
        <ArticleLayout
            title="Come Risparmiare sulle Bollette di Casa"
            category="Risparmio"
            date="15 Gennaio 2026"
            readTime="7 min di lettura"
            image="/blog/risparmio.png"
            imageAlt="Casa con simboli di efficienza energetica e risparmio"
            metaDescription="Scopri come risparmiare sulle bollette di luce e gas con piccoli interventi domestici. Consigli pratici per ridurre i consumi e risparmiare centinaia di euro all'anno."
            keywords="risparmiare bollette, risparmio energetico casa, ridurre consumi gas, ridurre bolletta luce, efficienza energetica domestica, risparmio energia, ProntoCasa"
        >
            <p>
                Le bollette di luce e gas rappresentano una delle spese più importanti per le famiglie italiane. Ma con alcuni interventi mirati e buone abitudini quotidiane, è possibile risparmiare centinaia di euro all'anno senza rinunciare al comfort. In questa guida ti sveliamo i trucchi più efficaci per ridurre i consumi energetici della tua casa.
            </p>

            <h2>Riscaldamento: Dove Si Nasconde il Vero Risparmio</h2>
            <p>
                Il <strong>riscaldamento rappresenta circa il 50%</strong> della bolletta energetica domestica. Ecco gli interventi più efficaci per ridurre questa voce:
            </p>

            <h3>Valvole Termostatiche</h3>
            <p>
                Le <strong>valvole termostatiche</strong> ti permettono di regolare la temperatura in ogni stanza singolarmente. Non scaldare stanze che non usi e imposta temperature diverse in base alla destinazione d'uso: 20°C nel soggiorno, 18°C nelle camere da letto, 16°C nei corridoi.
            </p>

            <h3>Isolamento Termico</h3>
            <p>
                Il <strong>cappotto termico</strong> e la sostituzione degli infissi sono gli interventi con il miglior rapporto costo-beneficio a lungo termine. Un buon isolamento può ridurre i consumi di riscaldamento fino al 40%.
            </p>
            <ul>
                <li><strong>Infissi doppio vetro:</strong> risparmio del 15-20% sul riscaldamento</li>
                <li><strong>Cappotto termico:</strong> risparmio del 25-40% sul riscaldamento</li>
                <li><strong>Isolamento del tetto:</strong> risparmio del 20-30%</li>
                <li><strong>Guarnizioni porte e finestre:</strong> risparmio del 5-10% (costo minimo)</li>
            </ul>

            <div className="article-tip">
                <div className="article-tip__title">💡 Sapevi che...</div>
                <p>Ogni grado in meno sul termostato corrisponde a un risparmio del 6-7% sulla bolletta del riscaldamento. Abbassare da 22°C a 20°C può farti risparmiare oltre 200€ all'anno.</p>
            </div>

            <h2>Elettrodomestici: Gli Sprechi Nascosti</h2>
            <p>
                Gli <strong>elettrodomestici</strong> sono responsabili di circa il 30% dei consumi elettrici domestici. Ecco come ottimizzare il loro utilizzo:
            </p>
            <ul>
                <li><strong>Frigorifero:</strong> Impostalo tra 3°C e 5°C. Ogni grado in meno aumenta il consumo del 6%</li>
                <li><strong>Lavatrice:</strong> Usa il programma a 30°C quando possibile. Consuma il 50% in meno rispetto al lavaggio a 60°C</li>
                <li><strong>Lavastoviglie:</strong> Usa il programma eco e avviala solo a pieno carico</li>
                <li><strong>Forno:</strong> Evita di aprirlo durante la cottura. Ogni apertura disperde il 20% del calore</li>
                <li><strong>TV e dispositivi in standby:</strong> Lo standby può costare fino a 100€ all'anno per famiglia</li>
            </ul>

            <h2>Illuminazione: LED e Domotica</h2>
            <p>
                L'<strong>illuminazione</strong> rappresenta circa il 10-15% della bolletta elettrica. La sostituzione di tutte le lampadine con <strong>LED</strong> è il modo più semplice e immediato per risparmiare:
            </p>
            <ul>
                <li>Le lampadine LED consumano l'80% in meno delle tradizionali</li>
                <li>Durano 20-25 volte di più (fino a 25.000 ore)</li>
                <li>Si ammortizzano in pochi mesi di utilizzo</li>
            </ul>

            <h2>Acqua Calda: Strategie per Consumare Meno</h2>
            <p>
                Lo <strong>scaldabagno</strong> è tra gli elettrodomestici più energivori. Ecco come ridurre i suoi consumi:
            </p>
            <ol>
                <li>Imposta la temperatura a 55°C (non di più)</li>
                <li>Installa un timer per accenderlo solo quando serve</li>
                <li>Valuta la sostituzione con uno scaldabagno a pompa di calore (risparmio fino al 70%)</li>
                <li>Installa rompigetto areati sui rubinetti (risparmio del 30% di acqua calda)</li>
            </ol>

            <h2>Tabella Riepilogativa del Risparmio</h2>
            <p>
                Ecco un riepilogo dei <strong>risparmi annuali stimati</strong> per una famiglia media italiana:
            </p>
            <ul>
                <li><strong>Valvole termostatiche:</strong> 150€ - 250€/anno</li>
                <li><strong>Lampadine LED:</strong> 80€ - 120€/anno</li>
                <li><strong>Eliminazione standby:</strong> 50€ - 100€/anno</li>
                <li><strong>Uso consapevole elettrodomestici:</strong> 100€ - 200€/anno</li>
                <li><strong>Rompigetto areati:</strong> 60€ - 100€/anno</li>
            </ul>

            <blockquote>
                "Con piccoli interventi mirati, una famiglia può risparmiare tra i 500€ e i 800€ all'anno sulle bollette energetiche. Il risparmio inizia dalle abitudini quotidiane."
            </blockquote>

            <div className="article-tip">
                <div className="article-tip__title">🏠 Migliora l'Efficienza di Casa Tua</div>
                <p>Su ProntoCasa trovi tecnici specializzati per installare valvole termostatiche, sostituire infissi, montare termostati smart e molto altro. Inizia a risparmiare oggi!</p>
            </div>

        </ArticleLayout>
    );
}
