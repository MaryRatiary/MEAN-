# Backend - E-Commerce API (Node.js + Express + MongoDB)

API RESTful complète pour la gestion des produits e-commerce.

## 🚀 Démarrage Rapide

### Installation
```bash
npm install
```

### Configuration
Créer un fichier `.env` à la racine du dossier backend :
```
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:4200
```

### Lancer le serveur
```bash
npm start          # Production
npm run dev        # Développement (avec hot reload)
```

## 📝 API Endpoints

### Produits (Products)

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/products` | Récupérer tous les produits |
| GET | `/api/products/:id` | Récupérer un produit par ID |
| POST | `/api/products` | Créer un nouveau produit |
| PUT | `/api/products/:id` | Mettre à jour un produit |
| DELETE | `/api/products/:id` | Supprimer un produit |

## 📋 Exemples de Requêtes

### 1. Créer un produit
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "High performance laptop for professionals",
    "price": 1299.99,
    "quantity": 10,
    "category": "Électronique",
    "image": "https://example.com/laptop.jpg",
    "rating": 4.5
  }'
```

### 2. Récupérer tous les produits
```bash
curl http://localhost:5000/api/products
```

### 3. Récupérer un produit par ID
```bash
curl http://localhost:5000/api/products/[ID_PRODUIT]
```

### 4. Mettre à jour un produit
```bash
curl -X PUT http://localhost:5000/api/products/[ID_PRODUIT] \
  -H "Content-Type: application/json" \
  -d '{
    "price": 999.99,
    "quantity": 15
  }'
```

### 5. Supprimer un produit
```bash
curl -X DELETE http://localhost:5000/api/products/[ID_PRODUIT]
```

## 📁 Structure des Fichiers

```
backend/
├── config/
│   └── database.js         # Connexion MongoDB
├── controllers/
│   └── productController.js # Logique métier
├── models/
│   └── Product.js          # Schéma Mongoose
├── routes/
│   └── productRoutes.js    # Routes de l'API
├── middleware/             # Middlewares personnalisés
├── server.js               # Point d'entrée
├── .env                    # Variables d'environnement
└── package.json
```

## 🔗 Dépendances

- **express** - Framework web
- **mongoose** - ODM pour MongoDB
- **cors** - Gestion CORS
- **dotenv** - Variables d'environnement
- **bcryptjs** - Hachage sécurisé
- **jsonwebtoken** - Authentification JWT

## 🛠️ Middleware

- CORS activé pour `http://localhost:4200`
- JSON parser pour les requêtes POST/PUT
- URL encoded parser pour les formulaires

## ✅ Validations

### Produit
- ✓ Nom: requis, 3 caractères min
- ✓ Description: requis, 10 caractères min
- ✓ Prix: requis, 0 ou positif
- ✓ Quantité: 0 ou positif
- ✓ Catégorie: requis

## 🐛 Gestion des Erreurs

Toutes les réponses suivent ce format :

**Succès (200, 201)**
```json
{
  "success": true,
  "data": { ... },
  "message": "..."
}
```

**Erreur (400, 404, 500)**
```json
{
  "success": false,
  "message": "Description de l'erreur"
}
```

## 📊 Réponse Exemple

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Laptop",
      "description": "High performance laptop",
      "price": 1299.99,
      "quantity": 10,
      "category": "Électronique",
      "image": "https://...",
      "rating": 4.5,
      "createdAt": "2024-04-14T10:30:00Z",
      "updatedAt": "2024-04-14T10:30:00Z"
    }
  ]
}
```
