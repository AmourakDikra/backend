import "./Analytics.css";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  PieChart,
  Pie,
  LineChart,
  YAxis,
  Line,
} from "recharts";

const Analytics = ({
  chart_i,
  chart_ii,
  chart_iii,
  title,
  value,
  illustration,
}) => {
  // Données pour le graphique à barres - "Factures payées" et "Nombre de factures"
  const data = [
    {
      name: "Sept",
      PaidInvoices: 4000,  // Factures payées
      TotalInvoices: 2400,  // Nombre de factures
    },
    {
      name: "Oct",
      PaidInvoices: 3000,
      TotalInvoices: 1398,
    },
    {
      name: "Nov",
      PaidInvoices: 2000,
      TotalInvoices: 9800,
    },
    {
      name: "Dec",
      PaidInvoices: 2780,
      TotalInvoices: 3908,
    },
  ];

  // Données pour le graphique linéaire - "Montants payés" et "Factures en retard"
  const data02 = [
    {
      uv: 4000,  // Montants payés
      pv: 2400,  // Factures en retard
    },
    {
      uv: 3000,
      pv: 1398,
    },
    {
      uv: 2000,
      pv: 4000,
    },
    {
      uv: 2780,
      pv: 3908,
    },
    {
      uv: 1890,
      pv: 2000,
    },
  ];

  // Données pour le graphique en secteurs - Répartition entre "Factures payées" et "Factures non payées"
  const data03 = [
    {
      name: "Paid Invoices",  // Factures payées
      value: 400,
    },
    {
      name: "Unpaid Invoices",  // Factures non payées
      value: 300,
    },
    {
      name: "Pending",  // Factures en attente
      value: 300,
    },
  ];
  
  const data04 = [
    {
      name: "Paid",  // Factures payées
      value: 2000,
    },
    {
      name: "Unpaid",  // Factures non payées
      value: 3567,
    },
    {
      name: "Pending",  // Factures en attente
      value: 598,
    },
  ];

  return (
    <div className="analytics">
      {chart_i && (
        <>
          <header>
            <span className="followers">Factures payées :</span>
            <span className="earnings">Nombre de factures :</span>
          </header>

          <BarChart className="chart" width={250} height={210} data={data}>
            <CartesianGrid strokeDasharray="100 10" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="PaidInvoices" fill="#00464e" />
            <Bar dataKey="TotalInvoices" fill="#810551" />
          </BarChart>
        </>
      )}

      {chart_ii && (
        <LineChart width={260} height={220} data={data02} margin={{ right: 10, top: 10 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#810551" />
          <Line type="monotone" dataKey="uv" stroke="#00464e" />
        </LineChart>
      )}

      {chart_iii && (
        <PieChart width={300} height={300}>
          <Pie data={data03} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#00464e" />
          <Pie data={data04} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#810551" label />
        </PieChart>
      )}

      {title && (
        <>
          <h1 className="title">{title}</h1>
          <h2 className="value">{value}</h2>
          <h2 className="extra-text">
            Les factures sont sous contrôle !
            <br />
            🙌🎉🎆
          </h2>

          <img src={illustration} alt="illus" className="illustration" />
        </>
      )}
    </div>
  );
};

export default Analytics;
