"use client"
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "./ProductCard";
import FilterComponent from "./FilterComponent";
import "../styles/products.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]); //store original datas
  const [products, setProducts] = useState([]); // filtered products will store
  const [filters, setFilters] = useState([]); // ['men's clothing', 'women's clothing']
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setAllProducts(data);
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleFilterChange = (category, checked) => {
    console.log("Category:", category, "Checked:", checked);
    let updatedFilters = [...filters];
    if (checked) {
      updatedFilters.push(category);
    } else {
      updatedFilters = updatedFilters.filter((item) => item !== category);
    }
    setFilters(updatedFilters);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    let filtered = [...allProducts];

    if (filters.length > 0) {
      filtered = filtered.filter((product) =>
        filters.includes(product.category)
      );
    }

    if (sortOption === "low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "high-rated") {
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setProducts(filtered);
  }, [filters, sortOption, allProducts]);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="product-list-container">
      <div className="product-list-filter">
        <div className="filter-toggle-mobile">
          <h3 onClick={() => setShowFilter(!showFilter)}>FILTER</h3>
        </div>

        <div className="product-list-filter-left">
          <h3>{products.length} ITEMS</h3>
          <p onClick={() => setShowFilter(!showFilter)}>
            {showFilter ? (
              <span>
                <FiChevronLeft /> HIDE FILTER
              </span>
            ) : (
              <span>
                <FiChevronRight /> SHOW FILTER
              </span>
            )}
          </p>
        </div>
        <div>
          <select onChange={handleSortChange}>
            <option value="">RECOMMENDED</option>
            <option value="low-to-high">Price: LOW TO HIGH</option>
            <option value="high-to-low">Price: HIGH TO LOW</option>
            <option value="high-rated">HIGH RATED</option>
          </select>
        </div>
      </div>

      <div className="product-content">
        {showFilter && (
          <div className="filter-sidebar">
            <FilterComponent
              onFilterChange={handleFilterChange}
              onClearFilters={() => setFilters([])}
              selectedFilters={filters}
            />
          </div>
        )}

        <div
          className={`product-grid ${
            showFilter ? "with-filter" : "full-width"
          }`}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
