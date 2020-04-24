import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
]

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.setFilterData = this.setFilterData.bind(this)
    this.setStockData = this.setStockData.bind(this)
  }

  setFilterData(e) {
    console.log(e.target.value)
    this.props.setFilterText(e.target.value)
  }

  setStockData(e) {
    this.props.setStockedValue(e.target.checked)
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onInput={this.setFilterData}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onInput={this.setStockData}
          />{" "}
          Only show products in stock
        </p>
      </form>
    )
  }
}

class Product extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.category} {this.props.name} {this.props.price}
        </div>
      </div>
    )
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const rows = []
    const products = this.props.products

    products.forEach((product) => {
      if (this.props.isStocked) {
        if (!product.stocked) return
      }
      if (this.props.filterText.length > 0) {
        if (
          product.name
            .toLowerCase()
            .indexOf(this.props.filterText.toLowerCase()) === -1
        )
          return
      }
      rows.push(
        <Product
          name={product.name}
          price={product.price}
          category={product.category}
        />
      )
    })
    return (
      <div>
        <div>Category Name Price</div>
        <div>{rows}</div>
      </div>
    )
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: "",
      isStocked: false,
    }
    this.setFilterText = this.setFilterText.bind(this)
    this.setStockedValue = this.setStockedValue.bind(this)
  }

  setFilterText(text) {
    this.setState({ filterText: text })
  }

  setStockedValue(value) {
    this.setState({ isStocked: value })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isStocked={this.state.isStocked}
          setFilterText={this.setFilterText}
          setStockedValue={this.setStockedValue}
        />
        <ProductTable
          filterText={this.state.filterText}
          isStocked={this.state.isStocked}
          products={this.props.products}
        />
      </div>
    )
  }
}
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById("root")
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
