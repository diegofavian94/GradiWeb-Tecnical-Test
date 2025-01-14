# Shopify Landing Page Project

## Overview
This project implements a landing page using Shopify's Liquid templating language. The page showcases selected products with an optimized layout and enhanced user experience.

## 🚀 Features

- Dynamic product showcase
- Responsive design

## 📋 Prerequisites

- Shopify Development Store or Theme Access
- Basic knowledge of Liquid templating

## 🛠 Installation

1. `https://github.com/diegofavian94/GradiWeb-Tecnical-Test.git` 
2. `npm install`

## 🏃‍♂️ Getting Started

```bash
npm run build
npm start
```
Check [http://localhost:3000/](http://localhost:3000/)

## 🔧 Configuration

This project has 1 important configuration file 
- `settings_data.json`: Controls the layout and content of page sections

### Structure
```json
{
  "sections": {
    "[section-id]": {
      "type": "string",
      "settings": {
        // section-specific settings
      }
    }
  }
}
```
### Available Sections

#### Featured Products Section
**Type:** `featured-products`

Settings:
- `heading` (string): Title displayed above featured products
- `background_color` (string): Hex color code for section background

#### Hero Banner Section
**Type:** `hero-banner`

Settings:
- `button_text` (string): Text displayed on the CTA button
- `button_link` (string): URL for button navigation
- `marquee_text` (string): Text displayed in scrolling marquee
- `background_image` (string): Filename of banner background image

#### Footer Section
**Type:** `footer`

Settings:
- `logo_text` (string): Text to display as the footer logo
- `links` (array): Navigation links with following properties:
  - `label` (string): Display text for the link
  - `url` (string): URL path for navigation

## 📦 Project Structure

```
├── assets/
├── config/
├── data/
├── sections/
│   └── fearured-products.liquid
├── snippets/
│   └── product-card.liquid
├── src/
└── templates/
    └── index.liquid
├── server.js
```

## 👥 Authors

- Diego Favian García ⋆｡˚ ☁︎ ˚｡⋆｡˚☽˚｡⋆ 

---
