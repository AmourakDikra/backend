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

// First, let's define a professional color palette at the top of the file
const chartColors = {
  primary: '#2563eb',    // Blue
  secondary: '#64748b',  // Slate
  success: '#22c55e',    // Green
  accent: '#0ea5e9',     // Light Blue
  neutral: '#94a3b8'     // Light Slate
};

const Analytics = ({
  chart_i,
  chart_ii,
  chart_iii,
  title,
  value,
  illustration,
}) => {
  const data = [
    {
      name: "Sept",
      PaidInvoices: 4000, 
      TotalInvoices: 2400,  
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
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="PaidInvoices" fill={chartColors.primary} />
            <Bar dataKey="TotalInvoices" fill={chartColors.secondary} />
          </BarChart>
        </>
      )}

      {chart_ii && (
        <LineChart width={260} height={220} data={data02} margin={{ right: 10, top: 10 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="pv" 
            stroke={chartColors.primary}
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="uv" 
            stroke={chartColors.secondary}
            strokeWidth={2}
          />
        </LineChart>
      )}

      {chart_iii && (
        <PieChart width={300} height={300}>
          <Pie 
            data={data03} 
            dataKey="value" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            outerRadius={50} 
            fill={chartColors.primary}
          />
          <Pie 
            data={data04} 
            dataKey="value" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            innerRadius={50} 
            outerRadius={70} 
            fill={chartColors.secondary}
            label 
          />
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
