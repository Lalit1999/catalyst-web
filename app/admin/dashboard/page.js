"use client";

import { useState, useEffect } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useSort } from "@table-library/react-table-library/sort";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";


// Mock Data
const data = {
  nodes: [
    { id: 1, name: "iPhone 15", category: "Mobile", price: 79999, stock: 12 },
    { id: 2, name: "MacBook Air", category: "Laptop", price: 114999, stock: 4 },
    { id: 3, name: "Samsung TV", category: "Electronics", price: 45999, stock: 8 },
    { id: 4, name: "Nike Shoes", category: "Fashion", price: 6999, stock: 30 },
    { id: 5, name: "Apple Watch", category: "Wearables", price: 41999, stock: 10 },
    { id: 6, name: "Headphones", category: "Accessories", price: 2999, stock: 50 },
    { id: 7, name: "Keyboard", category: "Accessories", price: 1999, stock: 40 },
    { id: 8, name: "Gaming Mouse", category: "Accessories", price: 2499, stock: 35 },
    { id: 9, name: "iPad Pro", category: "Tablet", price: 89999, stock: 7 },
    { id: 10, name: "Office Chair", category: "Furniture", price: 12999, stock: 15 },
    { id: 11, name: "Desk Lamp", category: "Furniture", price: 1500, stock: 2 },
    { id: 12, name: "Webcam", category: "Electronics", price: 4500, stock: 22 },
  ],
};

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()
  // 1. Authentication Check (Client-side only to prevent Hydration Mismatch)
  useEffect(() => {
    const authStatus = localStorage.getItem("adminLoggedIn");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsAuthenticated(false);
    router.push('/admin/login')
  };

  if (isLoading) return <div className={styles.loading}>Loading...</div>;


  return (
    <div className={styles.dashboard}>
      <Sidebar onLogout={handleLogout} />
      <DashboardContent />
    </div>
  );
}

function Sidebar({ onLogout }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <h2>AdminPanel</h2>
      </div>
      <nav>
        <ul>
          <li className={styles.active}>Dashboard</li>
          <li>Orders</li>
          <li>Products</li>
          <li>Customers</li>
        </ul>
      </nav>
      <div className={styles.logoutWrapper}>
        <button onClick={onLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </aside>
  );
}

function DashboardContent() {
  const [search, setSearch] = useState("");

  const filteredData = {
    nodes: data.nodes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  // 2. Theme: Customizing the Grid layout
  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns: 2fr 1fr 1fr 1fr;
        font-family: inherit;
      `,
      HeaderRow: `
        background-color: #f3f4f6;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.85rem;
        color: #6b7280;
      `,
      Row: `
        &:hover {
          background-color: #f9fafb;
          cursor: pointer;
        }
        border-bottom: 1px solid #e5e7eb;
      `,
      BaseCell: `
        padding: 16px 12px;
      `,
      // Adding visual cue for sortable headers
      HeaderCell: `
        cursor: pointer;
        user-select: none;
        &:hover {
          color: #111827;
        }
      `
    },
  ]);

  const sort = useSort(filteredData, {}, {
    sortFns: {
      PRICE: (array) => array.sort((a, b) => a.price - b.price),
      STOCK: (array) => array.sort((a, b) => a.stock - b.stock),
      NAME: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
    },
  });

  const pagination = usePagination(filteredData, {
    state: {
      page: 0,
      size: 5,
    },
  });

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  // 3. FIXED COLUMNS: Removed HeaderCellSort
  // Just passing the string to 'label' and the config to 'sort'
  // CompactTable handles the interactivity automatically.
  const COLUMNS = [
    {
      label: "Product",
      renderCell: (item) => <span style={{ fontWeight: 600, color: "#1f2937" }}>{item.name}</span>,
      sort: { sortKey: "NAME" },
    },
    {
      label: "Category",
      renderCell: (item) => <span className={styles.badge}>{item.category}</span>,
    },
    {
      label: "Price",
      renderCell: (item) => formatCurrency(item.price),
      sort: { sortKey: "PRICE" },
    },
    {
      label: "Stock",
      renderCell: (item) => (
        <span
          style={{
            color: item.stock < 5 ? "#dc2626" : "#16a34a",
            fontWeight: 600,
          }}
        >
          {item.stock} {item.stock < 5 && "Low"}
        </span>
      ),
      sort: { sortKey: "STOCK" },
    },
  ];

  const totalPages = Math.ceil(filteredData.nodes.length / pagination.state.size);

  return (
    <main className={styles.content}>
      <header className={styles.header}>
        <h1>Product Management</h1>
        <div className={styles.searchWrapper}>
          <input
            className={styles.search}
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              pagination.fns.onSetPage(0);
            }}
          />
        </div>
      </header>

      <div className={styles.tableContainer}>
        {/* Pass custom sorting icons if desired via options, otherwise default arrows appear */}
        <CompactTable
          columns={COLUMNS}
          data={filteredData}
          sort={sort}
          pagination={pagination}
          theme={theme}
          layout={{ custom: true }} 
        />
      </div>

      <div className={styles.pagination}>
        <div className={styles.pageInfo}>
          Showing {pagination.state.page * pagination.state.size + 1} to{" "}
          {Math.min(
            (pagination.state.page + 1) * pagination.state.size,
            filteredData.nodes.length
          )}{" "}
          of {filteredData.nodes.length} entries
        </div>
        <div className={styles.pageControls}>
          <button
            disabled={pagination.state.page === 0}
            onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={pagination.state.page === index ? styles.activePage : ""}
              onClick={() => pagination.fns.onSetPage(index)}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={pagination.state.page + 1 >= totalPages}
            onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}