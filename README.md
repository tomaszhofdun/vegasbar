# Bar Vegas — strona internetowa

Strona zbudowana w Next.js (App Router) + Tailwind CSS, wyeksportowana jako
statyczna strona (bez potrzeby serwera Node.js na hostingu).

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Strona wystartuje pod adresem http://localhost:3000

## Build produkcyjny (test lokalny)

```bash
npm run build
```

Zbudowana statyczna strona wyląduje w folderze `out/`.

## Wgrywanie na GitHub

```bash
git init
git add .
git commit -m "Pierwsza wersja strony Bar Vegas"
git branch -M main
git remote add origin <adres-twojego-repo>.git
git push -u origin main
```

## Podpięcie pod Cloudflare Pages

1. W panelu Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
2. Wybierz to repozytorium.
3. Framework preset: **Next.js (Static HTML Export)**.
4. Ustawienia builda (jeśli Cloudflare nie uzupełni ich automatycznie):
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. Kliknij **Save and Deploy**.

Od tego momentu każdy `git push` do gałęzi `main` automatycznie zbuduje i
wdroży nową wersję strony.

## Struktura projektu

```
app/            – strony (Start, Menu, Galeria, Kontakt)
components/     – Navbar, Footer
lib/menu-data.ts – wszystkie dane menu, godziny, kontakt (edytuj tutaj!)
public/images/  – zdjęcia użyte na stronie
```

## Jak zmienić ceny / menu

Wszystkie pozycje menu, ceny i opisy znajdują się w jednym pliku:
`lib/menu-data.ts`. Nie trzeba szukać ich w kodzie stron — edytuj tam, zapisz,
zrób `git push`, a strona zaktualizuje się automatycznie.

## Jak zmienić godziny otwarcia lub telefon

Też w `lib/menu-data.ts`, w obiektach `hours` i `contact`.

## Jak dodać nowe zdjęcie

1. Wrzuć plik do `public/images/`.
2. Odwołaj się do niego w kodzie jako `/images/nazwa-pliku.jpg`.
