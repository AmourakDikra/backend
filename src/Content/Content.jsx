import { useContext, useState } from "react";
import "./Content.css";
import { ThemeContext } from "../ThemeContext";
import Analytics from "../Components/AnalyticsTemplate/Analytics";

const Content = () => {
  const { DarkTheme } = useContext(ThemeContext);

  const [value_i] = useState(Math.floor(Math.random() * 100));
  const [value_ii] = useState(Math.floor(Math.random() * 100));

  return (
    <div className={`content ${DarkTheme ? "dark" : ""}`}>
      <div className="container-fluid py-4">
        <h1 className="section-title mb-4">Gestion des factures</h1>
        
        {/* Analytics Cards Row */}
        <div className="analytics-grid mb-4">
          <div className="analytics-item">
            <div className="analytics-card">
              <Analytics chart_i />
            </div>
          </div>
          
          <div className="analytics-item">
            <div className="analytics-card">
              <Analytics chart_ii />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="row">
          <div className="col-12">
            <div className="products-card">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="card-title m-0">Products List</h2>
                <button className="btn btn-primary">
                  <i className="bi bi-plus-lg me-2"></i>
                  Add New Product
                </button>
              </div>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sample Product</td>
                      <td>Electronics</td>
                      <td>$299.99</td>
                      <td><span className="badge bg-success">In Stock</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                        <button className="btn btn-sm btn-outline-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
