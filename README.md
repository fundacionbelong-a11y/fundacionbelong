# Belong Coming Soon 🌐

Página "Coming Soon" para Fundación Belong - lista para deploy en Vercel.

---

## 🚀 Deploy rápido (3 pasos)

### Paso 1: Subir a GitHub

```bash
# Crear repo en GitHub (no inicializar con README)
# Luego correr estos comandos:

git add .
git commit -m "Initial: Belong coming soon"
git branch -M main

# Reemplaza TU_USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU_USUARIO/fundacionbelong.git
git push -u origin main
```

### Paso 2: Conectar a Vercel

1. Ve a [vercel.com](https://vercel.com) → Sign up con GitHub
2. Click **"Add New Project"**
3. Importa `fundacionbelong` desde GitHub
4. Click **Deploy** (no necesitas cambiar nada)

### Paso 3: Conectar dominios

En Vercel, ve a **Project → Settings → Domains**:

Agrega:
- `fundacionbelong.com`
- `fundacionbelong.org`
- `fundacionbelong.co`

#### Configuración DNS en Namecheap:

Para cada dominio:
1. Ve a **Domain List → Manage**
2. En **Nameservers** → **Custom DNS**
3. Agrega:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

O si prefieres no cambiar nameservers, usa **Advanced DNS**:
- Tipo **A Record** → Host `@` → Value `76.76.21.21`
- Tipo **CNAME** → Host `www` → Value `cname.vercel-dns.com`

---

## 🔄 Actualizar el sitio

Cuando quieras cambiar algo:

```bash
# 1. Editar index.html (o pedirle a Alfred que lo edite)
# 2. Commit y push
git add .
git commit -m "Update: nuevo texto"
git push origin main
```

Vercel se actualiza automáticamente en ~30 segundos.

---

## 📁 Estructura

```
belong-coming-soon/
├── index.html          # Página principal
├── README.md           # Este archivo
└── .git/               # Repo git
```

---

## 🎨 Personalizar

Editar `index.html`:
- **Logo/Brand**: Línea 189 (`<div class="logo">`)
- **Tagline**: Línea 190 (`<div class="tagline">`)
- **Descripción**: Líneas 198-201 (`<div class="description">`)
- **Colores**: Líneas 18-19 (gradiente CSS)
- **Año**: Línea 226 (`© 2026`)

---

## 📞 Soporte

¿Problemas? Alfred puede ayudarte a actualizar el código.

---

*Belong Education - Learning that leads to belonging*
