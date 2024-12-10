---
map: {
        center: [2.3432, 48.8573],
        zoom: 16,
        style: {
                version: 8,
                sources: {
                paris-ig: {
                        type: "raster",
                        tiles: ["https://sourcesetdonnees.huma-num.fr/tiles/data/paris-shd/{z}/{x}/{y}.png"],
                        attribution: "&copy; Geohistoricaldata, CRH"
                }
                },
                layers: [
                {
                        id: "paris-ig",
                        type: "raster",
                        source: "paris-ig",
                }
                ]
    }
}
title: "Plan de Paris des Ingénieurs Géographes, 182.-183. [Hugo]"
---

## À propos
Exemple d'un article en Markdown Hugo uniquement, avec une carte spécifiée et paramétrée à partir du `frontmatter`:
```yaml
map: {
        center: [2.3432, 48.8573],
        zoom: 16,
        style: {
                version: 8,
                sources: {
                paris-ig: {
                        type: "raster",
                        tiles: ["https://sourcesetdonnees.huma-num.fr/tiles/data/paris-shd/{z}/{x}/{y}.png"],
                        attribution: "&copy; Geohistoricaldata, CRH"
                }
                },
                layers: [
                {
                        id: "paris-ig",
                        type: "raster",
                        source: "paris-ig",
                }
                ]
    }
}
```